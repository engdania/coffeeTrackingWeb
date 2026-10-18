import { useEffect, useState } from 'react';
import type { Recipe } from '../types';
import { CURRENT_USER } from '../types';
import RecipeCard from './RecipeCard';
import RecipeForm from './RecipeForm';
import './RecipesPage.css';

interface RecipesPageProps {
  initialRecipes: Recipe[];
}

const STORAGE_KEY = 'coffee-tracker-recipes';

function loadRecipes(fallback: Recipe[]): Recipe[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Recipe[]) : fallback;
  } catch {
    return fallback;
  }
}

export default function RecipesPage({ initialRecipes }: RecipesPageProps) {
  const [recipes, setRecipes] = useState<Recipe[]>(() => loadRecipes(initialRecipes));
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
  }, [recipes]);

  function toggleLike(id: string) {
    setRecipes((prev) =>
      prev.map((r) => {
        if (r.id !== id) return r;
        const already = r.likedBy.includes(CURRENT_USER);
        return {
          ...r,
          likedBy: already ? r.likedBy.filter((u) => u !== CURRENT_USER) : [...r.likedBy, CURRENT_USER],
        };
      })
    );
  }

  function addRecipe(recipe: Recipe) {
    setRecipes((prev) => [recipe, ...prev]);
    setShowForm(false);
  }

  const sorted = [...recipes].sort((a, b) => b.likedBy.length - a.likedBy.length);
  const maxLikes = sorted[0]?.likedBy.length ?? 0;

  return (
    <section className="recipes-page">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Community brews</span>
          <h2>Recipes</h2>
        </div>
        <button className="btn primary" onClick={() => setShowForm(true)}>+ Share a recipe</button>
      </div>

      {sorted.length === 0 ? (
        <div className="empty">No recipes yet — be the first to share one.</div>
      ) : (
        <div className="grid">
          {sorted.map((recipe, i) => (
            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              isTop={i === 0 && recipe.likedBy.length > 0}
              maxLikes={maxLikes}
              onToggleLike={toggleLike}
            />
          ))}
        </div>
      )}

      {showForm && <RecipeForm onClose={() => setShowForm(false)} onSubmit={addRecipe} />}
    </section>
  );
}
