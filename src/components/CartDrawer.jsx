import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import {
  selectCartItems,
  selectCartTotal,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from '../redux/slices/cartSlice';

export default function CartDrawer({ open, onClose }) {
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);
  const dispatch = useAppDispatch();

  return (
    <>
      <div
        onClick={onClose}
        className={`cart-overlay ${open ? 'open' : 'closed'}`}
      />
      <aside className={`cart-drawer ${open ? 'open' : 'closed'}`}>
        <div className="cart-header">
          <div className="cart-header-left">
            <ShoppingBag />
            <h2 className="cart-title">Your Cart</h2>
            <span className="cart-count-pill">{items.length}</span>
          </div>
          <button onClick={onClose} aria-label="Close cart" className="cart-close-btn">
            <X />
          </button>
        </div>

        <div className="cart-body">
          {items.length === 0 ? (
            <div className="cart-empty">
              <div className="cart-empty-icon">
                <ShoppingBag />
              </div>
              <p className="cart-empty-title">Your cart is empty</p>
              <p className="cart-empty-desc">Add some products to get started.</p>
            </div>
          ) : (
            <ul className="cart-list">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <img src={item.image} alt={item.title} />
                  <div className="cart-item-body">
                    <div className="cart-item-top">
                      <h3 className="cart-item-name">{item.title}</h3>
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        aria-label="Remove item"
                        className="cart-item-remove"
                      >
                        <Trash2 />
                      </button>
                    </div>
                    <span className="cart-item-unit-price">
                      ${item.price.toFixed(2)} each
                    </span>
                    <div className="cart-item-bottom">
                      <div className="qty-control">
                        <button
                          onClick={() => dispatch(decrementQuantity(item.id))}
                          aria-label="Decrease quantity"
                          className="qty-btn"
                        >
                          <Minus />
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button
                          onClick={() => dispatch(incrementQuantity(item.id))}
                          aria-label="Increase quantity"
                          className="qty-btn"
                        >
                          <Plus />
                        </button>
                      </div>
                      <span className="cart-item-total">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="cart-footer">
            <div className="cart-subtotal">
              <span className="cart-subtotal-label">Subtotal</span>
              <span className="cart-subtotal-value">${total.toFixed(2)}</span>
            </div>
            <button className="btn-checkout">Checkout</button>
            <button
              onClick={() => dispatch(clearCart())}
              className="btn-clear-cart"
            >
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
}