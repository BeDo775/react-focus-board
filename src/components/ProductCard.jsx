import { Plus, Star } from 'lucide-react';
import { useAppDispatch } from '../redux/hooks';
import { addToCart } from '../redux/slices/cartSlice';

export default function ProductCard({ product }) {
  const dispatch = useAppDispatch();

  return (
    <div className="product-card">
      <div className="product-card-image">
        <img
          src={product.image}
          alt={product.title}
          loading="lazy"
        />
        <span className="product-category-tag">{product.category}</span>
      </div>

      <div className="product-card-body">
        <div className="product-rating">
          <Star />
          <span>{product.rating.toFixed(1)}</span>
        </div>
        <h3 className="product-title">{product.title}</h3>
        <p className="product-desc">{product.description}</p>

        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button
            onClick={() =>
              dispatch(
                addToCart({
                  id: product.id,
                  title: product.title,
                  price: product.price,
                  image: product.image,
                }),
              )
            }
            className="btn-add"
          >
            <Plus />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}