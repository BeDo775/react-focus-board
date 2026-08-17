import { useMemo, useState } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function Store() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(products.map((p) => p.category)))],
    [],
  );

  const filtered = useMemo(
    () =>
      products.filter((p) => {
        const matchesCategory = category === 'All' || p.category === category;
        const matchesQuery = p.title.toLowerCase().includes(query.toLowerCase());
        return matchesCategory && matchesQuery;
      }),
    [query, category],
  );

  return (
    <div className="page">
      <div className="page-header">
        <h1 className="page-title">Store</h1>
        <p className="page-subtitle">
          Explore our product catalog, filter by categories, and update your shopping cart.
        </p>
      </div>

      <div className="store-toolbar">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="search-input"
        />
        <div className="category-chips">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`category-chip ${category === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="empty-state">No products match your search.</p>
      ) : (
        <div className="product-grid">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}