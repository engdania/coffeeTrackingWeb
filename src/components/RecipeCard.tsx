import type { Recipe } from '../types';
import { CURRENT_USER } from '../types';
import CupRating from './CupRating';
import './RecipeCard.css';

interface RecipeCardProps {
  recipe: Recipe;
  isTop: boolean;
  maxLikes: number;
  onToggleLike: (id: string) => void;
}

export default function RecipeCard({ recipe, isTop, maxLikes, onToggleLike }: RecipeCardProps) {
  const liked = recipe.likedBy.includes(CURRENT_USER);
  const percent = maxLikes > 0 ? (recipe.likedBy.length / maxLikes) * 100 : 0;

  return (
    <div className={`card recipe-card ${isTop ? 'top' : ''}`}>
      <span className="rank-badge">☕ Top brew</span>

      <div className="recipe-top-row">
        <div>
          <h3 className="recipe-title">{recipe.title}</h3>
          <div className="recipe-meta">by {recipe.author}</div>
        </div>
        <CupRating percent={percent} />
      </div>

      <div className="stat-row">
        <span>Method: <b>{recipe.method}</b></span>
        <span>Ratio: <b>{recipe.ratio}</b></span>
        <span>Grind: <b>{recipe.grindSize}</b></span>
        <span>Temp: <b>{recipe.waterTemp}</b></span>
      </div>

      <p className="recipe-desc">{recipe.description}</p>

      <ol className="steps">
        {recipe.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>

      <div className="card-footer">
        <button
          className={`like-btn ${liked ? 'liked' : ''}`}
          onClick={() => onToggleLike(recipe.id)}
          aria-pressed={liked}
        >
          {liked ? '♥' : '♡'} {recipe.likedBy.length} {recipe.likedBy.length === 1 ? 'brewer likes this' : 'brewers like this'}
        </button>
      </div>
    </div>
  );
}
