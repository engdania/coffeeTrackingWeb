import type { SeedProduct } from '../types';
import './CartModal.css';

interface CartLine {
  product: SeedProduct;
  quantity: number;
}

interface CartModalProps {
  lines: CartLine[];
  onClose: () => void;
  onIncrement: (id: string) => void;
  onDecrement: (id: string) => void;
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

export default function CartModal({ lines, onClose, onIncrement, onDecrement, onRemove, onCheckout }: CartModalProps) {
  const total = lines.reduce((sum, line) => sum + line.product.pricePerKg * line.quantity, 0);

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal cart-modal" onClick={(e) => e.stopPropagation()}>
        <h3>Your cart</h3>

        {lines.length === 0 ? (
          <div className="empty">Your cart is empty — add a bag of beans to get started.</div>
        ) : (
          <div className="cart-lines">
            {lines.map((line) => (
              <div className="card cart-line" key={line.product.id}>
                <div className="cart-line-info">
                  <h4>{line.product.name}</h4>
                  <span className="cart-line-origin">{line.product.origin}</span>
                  <span className="cart-line-price">${line.product.pricePerKg}/kg</span>
                </div>

                <div className="cart-line-controls">
                  <div className="qty-stepper">
                    <button type="button" onClick={() => onDecrement(line.product.id)} aria-label="Decrease quantity">−</button>
                    <span>{line.quantity}</span>
                    <button type="button" onClick={() => onIncrement(line.product.id)} aria-label="Increase quantity">+</button>
                  </div>
                  <span className="cart-line-subtotal">${(line.product.pricePerKg * line.quantity).toFixed(2)}</span>
                  <button type="button" className="remove-btn" onClick={() => onRemove(line.product.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cart-total-row">
          <span>Total</span>
          <span className="cart-total">${total.toFixed(2)}</span>
        </div>

        <div className="modal-actions">
          <button type="button" className="btn ghost" onClick={onClose}>Keep browsing</button>
          <button
            type="button"
            className="btn primary"
            disabled={lines.length === 0}
            onClick={onCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
