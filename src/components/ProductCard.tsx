import React from 'react';
import { Star, ShoppingCart, Heart, Zap } from 'lucide-react';
import { Product } from '../types';
import { formatPrice } from '../utils/storage';

interface ProductCardProps {
  product: Product;
  isWishlisted: boolean;
  onAddToCart: (product: Product, e: React.MouseEvent) => void;
  onQuickBuy?: (product: Product, e: React.MouseEvent) => void;
  onToggleWishlist: (productId: string, e: React.MouseEvent) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isWishlisted,
  onAddToCart,
  onQuickBuy,
  onToggleWishlist,
  onSelectProduct
}) => {
  const discountPercent = product.originalPrice > product.price 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;
  const isOutOfStock = product.stock <= 0;

  return (
    <div 
      id={`product-card-${product.id}`}
      onClick={() => onSelectProduct(product)}
      className={`group bg-white dark:bg-slate-900/90 p-3 rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs hover:border-amber-500/50 dark:hover:border-amber-500/50 hover:shadow-xl transition-all duration-200 flex flex-col justify-between relative cursor-pointer ${
        isOutOfStock ? 'opacity-65' : ''
      }`}
    >
      {/* Product Image Area */}
      <div>
        <div className="relative aspect-square w-full rounded-lg bg-slate-50 dark:bg-slate-800/60 mb-2.5 flex items-center justify-center p-2.5 overflow-hidden border border-slate-100 dark:border-slate-800">
          <img
            src={product.image}
            alt={product.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain rounded-md group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />

          {/* Top Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
            {product.isDarazMall && (
              <span className="bg-slate-950/90 text-amber-300 text-[9px] font-bold uppercase px-2 py-0.5 rounded shadow-xs tracking-wider border border-amber-500/30">
                PREMIUM
              </span>
            )}
            {product.isFlashSale && (
              <span className="bg-amber-500 text-slate-950 text-[9px] font-black px-1.5 py-0.5 rounded shadow-xs flex items-center gap-0.5 uppercase">
                <Zap className="w-2.5 h-2.5 fill-slate-950" /> FLASH
              </span>
            )}
          </div>

          {/* Discount Badge */}
          {discountPercent > 0 && (
            <div className="absolute top-2 right-2 bg-rose-600 text-white font-bold text-[10px] px-1.5 py-0.5 rounded shadow-xs font-mono">
              -{discountPercent}%
            </div>
          )}

          {/* Quick Action Heart */}
          <button
            onClick={(e) => onToggleWishlist(product.id, e)}
            className={`absolute bottom-2 right-2 p-1.5 rounded-full shadow-md transition z-10 ${
              isWishlisted 
                ? 'bg-rose-50 dark:bg-rose-950/80 text-rose-600' 
                : 'bg-white/90 dark:bg-slate-900/90 text-slate-500 dark:text-slate-300 hover:text-rose-600 opacity-0 group-hover:opacity-100'
            }`}
            title="Add to Wishlist"
          >
            <Heart className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-rose-600' : ''}`} />
          </button>
        </div>

        {/* Category & Brand Metadata */}
        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 mb-1">
          <span className="font-semibold uppercase tracking-wider text-amber-500/90 truncate max-w-[100px]">{product.brand}</span>
          <span>·</span>
          <span className="truncate">{product.category}</span>
        </div>

        {/* Title */}
        <h4 className="text-xs font-semibold leading-snug h-8 line-clamp-2 text-slate-900 dark:text-slate-100 group-hover:text-amber-500 transition-colors">
          {product.title}
        </h4>

        {/* Ratings */}
        <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1 mb-2">
          <div className="flex items-center gap-1 font-medium">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span className="text-slate-700 dark:text-slate-300 font-semibold">{product.rating}</span>
            <span className="text-slate-400">({product.reviewCount})</span>
          </div>
          {product.freeDelivery && (
            <span className="text-[10px] text-amber-600 dark:text-amber-400 font-medium">Free Delivery</span>
          )}
        </div>
      </div>

      {/* Pricing & Actions */}
      <div className="mt-auto pt-2 border-t border-slate-100 dark:border-slate-800">
        <div className="flex items-baseline justify-between mb-2">
          <span className="text-amber-600 dark:text-amber-400 font-black text-sm sm:text-base tabular-nums">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-[10px] text-slate-400 line-through tabular-nums">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {isOutOfStock ? (
          <button
            id={`add-to-cart-btn-${product.id}`}
            disabled
            className="w-full py-2 px-2 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed flex items-center justify-center gap-1"
          >
            স্টক শেষ (OUT OF STOCK)
          </button>
        ) : (
          <div className="flex items-center gap-1.5">
            <button
              id={`quick-buy-btn-${product.id}`}
              onClick={(e) => {
                e.stopPropagation();
                if (onQuickBuy) onQuickBuy(product, e);
                else onSelectProduct(product);
              }}
              className="flex-1 py-2 px-2 rounded-lg text-xs font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm flex items-center justify-center gap-1 transition cursor-pointer"
              title="১-ক্লিক ফাস্ট অর্ডার"
            >
              <Zap className="w-3.5 h-3.5 fill-slate-950 text-slate-950 shrink-0" />
              <span>অর্ডার করুন</span>
            </button>
            <button
              id={`add-to-cart-btn-${product.id}`}
              onClick={(e) => onAddToCart(product, e)}
              className="py-2 px-2.5 rounded-lg text-xs font-bold bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 flex items-center justify-center transition cursor-pointer"
              title="কার্টে যোগ করুন"
            >
              <ShoppingCart className="w-3.5 h-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
