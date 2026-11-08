import React, { useState } from 'react';
import { 
  Search, ShoppingCart, Truck, ShieldCheck, Heart, 
  Smartphone, Zap, ChevronDown, PhoneCall, Gift, Sparkles, X, Menu,
  MessageCircle, Sun, Moon, Check
} from 'lucide-react';
import { ProductCategory, CATEGORIES, StoreConfig } from '../types';
import { formatPrice } from '../utils/storage';

interface HeaderProps {
  cartCount: number;
  cartTotal: number;
  wishlistCount: number;
  selectedCategory: ProductCategory;
  onSelectCategory: (cat: ProductCategory) => void;
  categories?: string[];
  storeConfig?: StoreConfig;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onOpenCart: () => void;
  onOpenTracking: () => void;
  onOpenWishlist: () => void;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  cartTotal,
  wishlistCount,
  selectedCategory,
  onSelectCategory,
  categories,
  storeConfig,
  searchQuery,
  onSearchChange,
  onOpenCart,
  onOpenTracking,
  onOpenWishlist,
  isDarkMode,
  onToggleDarkMode
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [quickMenuOpen, setQuickMenuOpen] = useState(false);
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  const currentStoreName = storeConfig?.storeName || 'KHAN FASHION';
  const currentPhone = storeConfig?.phone || '01854774406';
  const announcementEnabled = storeConfig?.announcementEnabled !== false;
  const announcementText = storeConfig?.announcementText || '🔥 KHAN FASHION স্পেশাল অফার: সকল কালেকশনে ১০% ইনস্ট্যান্ট ডিসকাউন্ট! কোড: FASHION10 | সারা দেশে ক্যাশ অন ডেলিভারি';
  const rawDigits = currentPhone.replace(/[^0-9]/g, '');
  const whatsappNumber = rawDigits.startsWith('88') ? rawDigits : (rawDigits.startsWith('0') ? '88' + rawDigits : '880' + rawDigits);

  const handleCopyPromo = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('FASHION10').catch(() => {});
    }
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2500);
  };

  const displayCategories = Array.from(
    new Set(['All', ...(categories && categories.length > 0 ? categories.filter(c => c !== 'All') : CATEGORIES.filter(c => c !== 'All'))])
  );

  const quickSearchTags = ['Royal Panjabi', 'Mercerized Polo', 'Raw Denim', 'ANC Earbuds', 'Titanium Smartwatch', 'GaN 65W'];

  return (
    <header id="khan-fashion-header" className="relative z-40 bg-[#0c1017] border-b border-slate-800 text-slate-100 shadow-lg">
      {/* 1. Store Announcement Marquee Notice Bar (Luxury Gold & Obsidian) */}
      {announcementEnabled && announcementText && (
        <div 
          id="store-announcement-marquee" 
          className="bg-[#070a10] text-amber-200/90 py-1.5 px-3 sm:px-6 border-b border-slate-800/80 text-xs shadow-inner overflow-hidden relative"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 overflow-hidden flex-1">
              <div className="shrink-0 flex items-center gap-1.5 bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-md text-[10px] font-black tracking-wider uppercase">
                <Sparkles className="w-3 h-3 text-slate-950" />
                <span>OFFER</span>
              </div>

              {/* Infinite Smooth Scrolling Marquee */}
              <div className="overflow-hidden relative whitespace-nowrap flex-1 select-none">
                <div className="animate-marquee flex items-center text-slate-300 font-medium text-[11px] sm:text-xs">
                  <span className="flex items-center gap-4 pr-12">
                    <span className="text-amber-300 font-semibold">{announcementText}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-amber-300 font-mono font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                      কোড: FASHION10
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-300 font-semibold">{currentStoreName} · Clothing & Gadgets</span>
                    <span className="text-slate-500">•</span>
                  </span>
                  <span className="flex items-center gap-4 pr-12">
                    <span className="text-amber-300 font-semibold">{announcementText}</span>
                    <span className="text-slate-500">•</span>
                    <span className="text-amber-300 font-mono font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                      কোড: FASHION10
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-300 font-semibold">{currentStoreName} · Clothing & Gadgets</span>
                    <span className="text-slate-500">•</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Copy Promo Code Button */}
            <div className="hidden sm:flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleCopyPromo}
                className="bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 hover:text-white px-2.5 py-0.5 rounded text-[10px] font-bold border border-amber-500/30 transition cursor-pointer flex items-center gap-1 shrink-0"
                title="কুপন কোড কপি করুন"
              >
                {codeCopied ? (
                  <>
                    <Check className="w-2.5 h-2.5 text-emerald-400" />
                    <span className="text-emerald-300 font-semibold">কপি হয়েছে!</span>
                  </>
                ) : (
                  <>
                    <Gift className="w-2.5 h-2.5 text-amber-400" />
                    <span>কোড: FASHION10</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Top High-Density Utility Strip */}
      <div className="bg-[#05070c] text-slate-400 text-[11px] font-medium py-1 px-4 sm:px-6 border-b border-slate-800/60">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
          <div className="flex items-center space-x-3">
            <span className="flex items-center gap-1 font-semibold text-slate-200">
              <Zap className="w-3 h-3 text-amber-400" />
              <span>Premium Collection: Use code <strong className="bg-amber-500/15 text-amber-300 px-1 py-0.5 rounded font-mono border border-amber-500/30">FASHION10</strong> for 10% OFF</span>
            </span>
            <span className="hidden md:inline text-slate-700">|</span>
            <span className="hidden md:inline text-slate-400">সারা দেশে ক্যাশ অন ডেলিভারি (পণ্য হাতে পেয়ে টাকা দিন)</span>
          </div>

          <div className="flex items-center space-x-3 text-[11px]">
            <a href={`tel:${currentPhone}`} className="hidden sm:flex items-center gap-1 hover:text-amber-400 transition">
              <PhoneCall className="w-3 h-3 text-amber-400" />
              <span>হটলাইন: {currentPhone}</span>
            </a>
            <a 
              href={`https://wa.me/${whatsappNumber}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-slate-200 hover:text-amber-400 transition font-bold bg-slate-900 px-2 py-0.5 rounded border border-slate-700 hover:border-amber-500/40"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3 h-3 text-emerald-400" />
              <span>WhatsApp: {currentPhone}</span>
            </a>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={onToggleDarkMode}
              className={`px-2.5 py-0.5 rounded text-[10px] font-bold flex items-center gap-1.5 transition-all cursor-pointer border ${
                isDarkMode 
                  ? 'bg-slate-900 hover:bg-slate-800 text-amber-300 border-slate-700' 
                  : 'bg-slate-800 hover:bg-slate-700 text-amber-300 border-slate-600'
              }`}
              title={isDarkMode ? 'লাইট মোডে পরিবর্তন করুন' : 'ডার্ক মোডে পরিবর্তন করুন'}
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-3 h-3 text-amber-400" />
                  <span>Light</span>
                </>
              ) : (
                <>
                  <Moon className="w-3 h-3 text-amber-300" />
                  <span>Dark</span>
                </>
              )}
            </button>

            {/* Clean Quick Options Dropdown (Without any Admin buttons) */}
            <div className="relative">
              <button
                onClick={() => setQuickMenuOpen(!quickMenuOpen)}
                className={`px-2 py-0.5 rounded text-[11px] font-bold flex items-center gap-1.5 transition cursor-pointer border ${
                  quickMenuOpen
                    ? 'bg-amber-500 text-slate-950 border-amber-400'
                    : 'bg-slate-900 hover:bg-slate-800 text-slate-200 border-slate-700'
                }`}
                title="কুইক মেনু"
                aria-label="Quick Menu"
              >
                <Menu className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-[10px] tracking-wide">মেনু</span>
              </button>

              {quickMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setQuickMenuOpen(false)}
                  />

                  <div className="absolute right-0 mt-2 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-2 z-50 text-slate-100 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-2 border-b border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                        <span className="text-[11px] font-bold text-slate-300 uppercase tracking-wider">
                          সার্ভিস ও হেল্প
                        </span>
                      </div>
                      <button
                        onClick={() => setQuickMenuOpen(false)}
                        className="text-slate-400 hover:text-slate-200 p-1 rounded transition"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="py-1.5 space-y-0.5">
                      {/* Option 1: Live Tracking */}
                      <button
                        onClick={() => {
                          setQuickMenuOpen(false);
                          onOpenTracking();
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400 rounded-lg transition text-left cursor-pointer"
                      >
                        <div className="w-6 h-6 rounded bg-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                          <Truck className="w-3.5 h-3.5" />
                        </div>
                        <div className="leading-tight">
                          <span className="block font-bold">লাইভ কুরিয়ার ট্র্যাকিং</span>
                          <span className="text-[10px] text-slate-400 font-normal">অর্ডারের অবস্থান জানুন</span>
                        </div>
                      </button>

                      {/* Option 2: Wishlist */}
                      <button
                        onClick={() => {
                          setQuickMenuOpen(false);
                          onOpenWishlist();
                        }}
                        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800 hover:text-rose-400 rounded-lg transition text-left cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <div className="w-6 h-6 rounded bg-slate-800 text-rose-400 flex items-center justify-center shrink-0">
                            <Heart className="w-3.5 h-3.5" />
                          </div>
                          <div className="leading-tight">
                            <span className="block font-bold">পছন্দের তালিকা</span>
                            <span className="text-[10px] text-slate-400 font-normal">সংরক্ষিত পছন্দের পণ্য</span>
                          </div>
                        </div>
                        {wishlistCount > 0 && (
                          <span className="bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                            {wishlistCount}
                          </span>
                        )}
                      </button>

                      {/* Option 3: Phone Helpline */}
                      <a
                        href={`tel:${currentPhone}`}
                        onClick={() => setQuickMenuOpen(false)}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-400 rounded-lg transition text-left cursor-pointer"
                      >
                        <div className="w-6 h-6 rounded bg-slate-800 text-amber-400 flex items-center justify-center shrink-0">
                          <PhoneCall className="w-3.5 h-3.5" />
                        </div>
                        <div className="leading-tight">
                          <span className="block font-bold">কল হেল্পলাইন</span>
                          <span className="text-[10px] text-slate-400 font-medium">{currentPhone}</span>
                        </div>
                      </a>

                      {/* Option 4: WhatsApp Support */}
                      <a
                        href={`https://wa.me/${whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setQuickMenuOpen(false)}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-semibold text-slate-200 hover:bg-slate-800 hover:text-emerald-400 rounded-lg transition text-left cursor-pointer"
                      >
                        <div className="w-6 h-6 rounded bg-slate-800 text-emerald-400 flex items-center justify-center shrink-0">
                          <MessageCircle className="w-3.5 h-3.5" />
                        </div>
                        <div className="leading-tight">
                          <span className="block font-bold">হোয়াটসঅ্যাপ সাপোর্ট</span>
                          <span className="text-[10px] text-slate-400 font-normal">সরাসরি কথা বলুন</span>
                        </div>
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Luxury Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
        <div className="flex items-center justify-between gap-4 sm:gap-8">
          
          {/* Brand Logo & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="lg:hidden p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800"
              aria-label="Toggle Category Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <button 
              onClick={() => { onSelectCategory('All'); onSearchChange(''); }} 
              className="text-left group cursor-pointer focus:outline-none flex items-center gap-2.5"
            >
              <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-black shadow-md">
                <span className="text-lg font-serif">K</span>
              </div>
              <div>
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white uppercase block leading-none font-serif">
                  {currentStoreName}
                </span>
                <span className="text-[9px] uppercase tracking-widest text-amber-400/90 font-medium block mt-0.5">
                  Clothing & Smart Gadgets
                </span>
              </div>
            </button>
          </div>

          {/* Search Box */}
          <div className="flex-1 max-w-md relative hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="পোশাক বা গ্যাজেট সার্চ করুন (যেমন: পাঞ্জাবি, পোলো, ইয়ারবাডস)..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setShowSearchSuggestions(true)}
                className="w-full py-2 pl-4 pr-11 rounded-lg text-slate-100 text-sm bg-slate-900 border border-slate-700/80 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition shadow-inner"
              />
              <button 
                onClick={() => setShowSearchSuggestions(false)}
                className="absolute right-1.5 top-1.5 p-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-md transition cursor-pointer"
              >
                <Search className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Suggestions Dropdown */}
            {showSearchSuggestions && !searchQuery && (
              <div className="absolute top-full left-0 right-0 mt-1.5 bg-slate-900 border border-slate-800 rounded-lg shadow-2xl p-3 z-50 text-slate-200">
                <div className="text-[11px] font-bold text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  জনপ্রিয় সার্চ কালেকশন:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {quickSearchTags.map(tag => (
                    <button
                      key={tag}
                      onClick={() => {
                        onSearchChange(tag);
                        setShowSearchSuggestions(false);
                      }}
                      className="text-xs bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-slate-300 px-2.5 py-1 rounded border border-slate-700 transition cursor-pointer font-medium"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Links & Cart */}
          <div className="flex items-center gap-3 sm:gap-5 text-sm font-medium">
            <button 
              onClick={onOpenTracking}
              className="cursor-pointer hover:text-amber-400 transition whitespace-nowrap hidden sm:flex items-center gap-1.5 font-semibold text-xs bg-slate-900 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-800 text-slate-300"
            >
              <Truck className="w-4 h-4 text-amber-400" />
              <span>Track Order</span>
            </button>

            <button
              onClick={onOpenWishlist}
              className="relative cursor-pointer hover:text-amber-400 transition hidden sm:flex items-center gap-1.5 text-slate-300"
              title="View Wishlist"
            >
              <Heart className="w-4 h-4 text-rose-400" />
              <span className="text-xs font-semibold">Wishlist</span>
              {wishlistCount > 0 && (
                <span className="bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Trigger */}
            <div 
              id="cart-drawer-trigger"
              onClick={onOpenCart}
              className="flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 px-3.5 py-1.5 rounded-lg cursor-pointer transition shadow-md font-bold"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="text-xs bg-slate-950 text-amber-300 px-1.5 py-0.2 rounded-md font-mono">{cartCount}</span>
              <span className="text-xs hidden sm:inline font-mono">
                {cartTotal > 0 ? formatPrice(cartTotal) : '৳ 0'}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-2.5 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="পোশাক বা গ্যাজেট সার্চ করুন..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full py-2 pl-3 pr-9 rounded-lg text-slate-100 text-xs bg-slate-900 border border-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500"
            />
            <button className="absolute right-2.5 top-2.5 text-amber-400">
              <Search className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Category Quick Scroll */}
      <div className="lg:hidden bg-[#070a10] border-t border-slate-800 px-4 py-1.5 overflow-x-auto no-scrollbar flex items-center gap-2 text-xs">
        {displayCategories.map((category) => (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`whitespace-nowrap px-3 py-1 rounded text-[11px] font-medium transition cursor-pointer ${
              selectedCategory === category
                ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black/70 backdrop-blur-xs flex">
          <div className="w-4/5 max-w-xs bg-slate-900 text-slate-100 h-full p-4 overflow-y-auto shadow-2xl flex flex-col justify-between border-r border-slate-800">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                <div className="font-bold text-white text-lg flex items-center gap-2 uppercase font-serif">
                  <div className="w-7 h-7 rounded bg-amber-500 text-slate-950 flex items-center justify-center font-serif font-black">
                    K
                  </div>
                  <span>{currentStoreName}</span>
                </div>
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Theme Mode Button in Drawer */}
              <div className="mb-4">
                <button
                  onClick={onToggleDarkMode}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
                >
                  <span className="flex items-center gap-2 text-xs font-bold text-slate-200">
                    {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-amber-300" />}
                    <span>{isDarkMode ? 'ডার্ক মোড সক্রিয়' : 'লাইট মোড সক্রিয়'}</span>
                  </span>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded bg-amber-500 text-slate-950 uppercase">
                    {isDarkMode ? 'Dark' : 'Light'}
                  </span>
                </button>
              </div>

              <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">Categories</p>
              <div className="flex flex-col space-y-1">
                {displayCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      onSelectCategory(category);
                      setMobileMenuOpen(false);
                    }}
                    className={`text-left px-3 py-2 rounded-lg text-sm transition font-medium ${
                      selectedCategory === category
                        ? 'bg-amber-500 text-slate-950 font-bold shadow-xs'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
                <button
                  onClick={() => {
                    onOpenTracking();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-200 hover:bg-slate-800 rounded-lg"
                >
                  <Truck className="w-4 h-4 text-amber-400" />
                  <span>Order Tracking</span>
                </button>
                <button
                  onClick={() => {
                    onOpenWishlist();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-200 hover:bg-slate-800 rounded-lg"
                >
                  <Heart className="w-4 h-4 text-rose-400" />
                  <span>Wishlist ({wishlistCount})</span>
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 text-xs text-slate-400 space-y-2">
              <p className="font-semibold text-slate-200">Premium Apparel & Smart Gadgets</p>
              <a href={`tel:${currentPhone}`} className="flex items-center gap-2 text-slate-300 hover:text-amber-400 font-medium">
                <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                <span>Helpline: {currentPhone}</span>
              </a>
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-bold"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {currentPhone}</span>
              </a>
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
};
