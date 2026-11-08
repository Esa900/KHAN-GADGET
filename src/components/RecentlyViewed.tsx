import React, { useState, useEffect } from 'react';
import { History, ShoppingCart, Heart, Trash2, Zap } from 'lucide-react';
import { Product } from '../types';
import { getRecentlyViewedIds, formatPrice } from '../utils/storage';

interface RecentlyViewedProps {
  allProducts: Product[];
  wishlist: string[];
  onSelectProduct: (product: Product) => void;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
  onQuickBuy?: (product: Product) => void;
  onToggleWishlist: (productId: string, e: React.MouseEvent) => void;
}

export const RecentlyViewed: React.FC<RecentlyViewedProps> = ({
  allProducts,
  wishlist,
  onSelectProduct,
  onAddToCart,
  onQuickBuy,
  onToggleWishlist
}) => {
  const [viewedProducts, setViewedProducts] = useState<Product[]>([]);

  useEffect(() => {
    const ids = getRecentlyViewedIds();
    if (ids.length > 0) {
      const matched = ids
        .map(id => allProducts.find(p => p.id === id))
        .filter((p): p is Product => Boolean(p));
      setViewedProducts(matched);
    } else {
      setViewedProducts([]);
    }
  }, [allProducts]);

  const handleClear = () => {
    localStorage.removeItem('khan_fashion_recently_viewed_v3');
    setViewedProducts([]);
  };

  if (viewedProducts.length === 0) return null;

  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-3 sm:p-4 shadow-xs my-4">
      <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center border border-amber-500/20">
            <History className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
              <span>Recently Viewed Items</span>
              <span className="text-[11px] font-normal text-slate-400 hidden sm:inline">(সম্প্রতি দেখেছেন)</span>
            </h3>
          </div>
          <span className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
            {viewedProducts.length} items
          </span>
        </div>

        <button
          onClick={handleClear}
          className="text-[11px] text-slate-400 hover:text-rose-500 flex items-center gap-1 transition cursor-pointer"
          title="Clear browsing history"
        >
          <Trash2 className="w-3 h-3" />
          <span className="hidden sm:inline">Clear</span>
        </button>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2.5">
        {viewedProducts.map((product) => {
          const isWish = wishlist.includes(product.id);
          const isOutOfStock = product.stock <= 0;

          return (
            <div
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="group bg-slate-50/70 dark:bg-slate-800/80 hover:bg-white dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700/60 hover:border-amber-500/50 p-2.5 transition flex flex-col justify-between cursor-pointer relative"
            >
              <div>
                <div className="relative aspect-square w-full rounded-lg bg-white dark:bg-slate-900/90 p-1 mb-2 flex items-center justify-center overflow-hidden border border-slate-100 dark:border-slate-800">
                  <img
                    src={product.image}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                  <button
                    onClick={(e) => onToggleWishlist(product.id, e)}
                    className={`absolute bottom-1 right-1 p-1 rounded-full shadow-xs transition ${
                      isWish 
                        ? 'bg-rose-50 text-rose-600' 
                        : 'bg-white dark:bg-slate-800 text-slate-400 hover:text-rose-600 opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    <Heart className={`w-3 h-3 ${isWish ? 'fill-rose-600' : ''}`} />
                  </button>
                </div>

                <h4 className="text-[11px] font-semibold text-slate-900 dark:text-slate-100 line-clamp-2 leading-tight group-hover:text-amber-500 transition">
                  {product.title}
                </h4>
              </div>

              <div className="mt-2.5 pt-1.5 border-t border-slate-200/60 dark:border-slate-700/60 flex items-center justify-between gap-1">
                <span className="font-bold text-xs text-amber-600 dark:text-amber-400 font-mono truncate">
                  {formatPrice(product.price)}
                </span>
                <div className="flex items-center gap-1 shrink-0">
                  {onQuickBuy && !isOutOfStock && (
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickBuy(product);
                      }}
                      className="p-1 rounded bg-amber-500 hover:bg-amber-400 text-slate-950 transition cursor-pointer"
                      title="অর্ডার করুন"
                    >
                      <Zap className="w-3 h-3 fill-slate-950 text-slate-950" />
                    </button>
                  )}
                  <button
                    disabled={isOutOfStock}
                    onClick={(e) => onAddToCart(product, e)}
                    className="p-1 rounded bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-200 transition disabled:opacity-40 cursor-pointer"
                    title="Add to cart"
                  >
                    <ShoppingCart className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
