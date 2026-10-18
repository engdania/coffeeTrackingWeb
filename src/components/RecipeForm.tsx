import { useState } from 'react';
import type { FormEvent } from 'react';
import type { Recipe } from '../types';
import { CURRENT_USER } from '../types';
import './RecipeForm.css';

interface RecipeFormProps {
  onSubmit: (recipe: Recipe) => void;
  onClose: () => void;
}

const METHODS = ['Pour Over', 'Espresso', 'French Press', 'AeroPress', 'Cold Brew', 'Moka Pot', 'Turkish Coffee'];

export default function RecipeForm({ onSubmit, onClose }: RecipeFormProps) {
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState(METHODS[0]);
  const [ratio, setRatio] = useState('1:16');
  const [grindSize, setGrindSize] = useState('Medium');
  const [waterTemp, setWaterTemp] = useState('94°C');
  const [description, setDescription] = useState('');
  const [stepsText, setStepsText] = useState('');
  const [error, setError] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!title.trim() || !stepsText.trim()) {
      setError('Give your recipe a title and at least one step.');
      return;
    }

    const recipe: Recipe = {
      id: `recipe-${Date.now()}`,
      title: title.trim(),
      author: CURRENT_USER,
      method,
      ratio,
      grindSize,
      waterTemp,
      steps: stepsText.split('\n').map((s) => s.trim()).filter(Boolean),
      description: description.trim() || 'No tasting notes added yet.',
      likedBy: [],
      createdAt: Date.now(),
    };

    onSubmit(recipe);
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Share a recipe</h3>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="title">Recipe name</label>
            <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. Rainy Day Pour Over" />
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="method">Method</label>
              <select id="method" value={method} onChange={(e) => setMethod(e.target.value)}>
                {METHODS.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="ratio">Ratio</label>
              <input id="ratio" value={ratio} onChange={(e) => setRatio(e.target.value)} placeholder="1:16" />
            </div>
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="grind">Grind size</label>
              <input id="grind" value={grindSize} onChange={(e) => setGrindSize(e.target.value)} placeholder="Medium-fine" />
            </div>
            <div className="field">
              <label htmlFor="temp">Water temp</label>
              <input id="temp" value={waterTemp} onChange={(e) => setWaterTemp(e.target.value)} placeholder="94°C" />
            </div>
          </div>

          <div className="field">
            <label htmlFor="desc">Tasting notes</label>
            <textarea id="desc" rows={2} value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Bright, floral, a little jammy..." />
          </div>

          <div className="field">
            <label htmlFor="steps">Steps (one per line)</label>
            <textarea
              id="steps"
              rows={5}
              value={stepsText}
              onChange={(e) => setStepsText(e.target.value)}
              placeholder={'Bloom 40g water for 30 sec\nPour to 150g in slow circles\nFinish at 320g total'}
            />
          </div>

          {error && <p className="form-error">{error}</p>}

          <div className="modal-actions">
            <button type="button" className="btn ghost" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn primary">Post recipe</button>
          </div>
        </form>
      </div>
    </div>
  );
}
