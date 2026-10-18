import './CupRating.css';

interface CupRatingProps {
  percent: number; // 0-100
  size?: number;
  showLabel?: boolean;
}

/**
 * Renders a cup outline that fills like brewed coffee, proportional to `percent`.
 * Used in place of star ratings throughout the app.
 */
export default function CupRating({ percent, size = 34, showLabel = true }: CupRatingProps) {
  const clamped = Math.max(0, Math.min(100, percent));
  // Cup basin roughly spans y=8 to y=26 inside the 32-tall viewBox.
  const fillTop = 26 - (clamped / 100) * 18;

  return (
    <div className="cup-rating">
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <clipPath id={`cup-clip-${clamped}`}>
            <path d="M8 8 L24 8 L22.5 24 C22.5 26.2 19.6 28 16 28 C12.4 28 9.5 26.2 9.5 24 Z" />
          </clipPath>
        </defs>
        <rect
          x="8"
          y={fillTop}
          width="16"
          height={26 - fillTop}
          fill="var(--caramel)"
          clipPath={`url(#cup-clip-${clamped})`}
        />
        <path
          d="M8 8 L24 8 L22.5 24 C22.5 26.2 19.6 28 16 28 C12.4 28 9.5 26.2 9.5 24 Z"
          stroke="var(--text-dim)"
          strokeWidth="1.4"
        />
        <path
          d="M24 11 C27.5 11 29 13 28.5 15.5 C28 18 25.5 18.5 23.5 18"
          stroke="var(--text-dim)"
          strokeWidth="1.4"
          fill="none"
        />
        <line x1="6" y1="6" x2="26" y2="6" stroke="var(--text-dim)" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
      {showLabel && <span className="pct">{Math.round(clamped)}%</span>}
    </div>
  );
}
