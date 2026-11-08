import React from 'react';
import { 
  ShieldCheck, Truck, RefreshCw, Headphones, 
  PhoneCall, MapPin, MessageCircle, Sparkles, Award
} from 'lucide-react';
import { StoreConfig } from '../types';

interface FooterProps {
  storeConfig?: StoreConfig;
  onOpenTracking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ storeConfig, onOpenTracking }) => {
  const currentStoreName = storeConfig?.storeName || 'KHAN FASHION';
  const currentPhone = storeConfig?.phone || '01854774406';
  const currentAbout = storeConfig?.about || "Bangladesh's premier luxury destination for bespoke clothing, executive Panjabi, and modern smart gadgets.";
  const rawDigits = currentPhone.replace(/[^0-9]/g, '');
  const whatsappNumber = rawDigits.startsWith('88') ? rawDigits : (rawDigits.startsWith('0') ? '88' + rawDigits : '880' + rawDigits);

  return (
    <footer className="bg-[#05070c] text-slate-400 py-10 border-t border-slate-800/80 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Value Props Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-8 border-b border-slate-800">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-slate-100 text-xs">১০০% প্রিমিয়াম কোয়ালিটি</h4>
              <p className="text-slate-400 text-[11px] mt-0.5">অরিজিনাল ফেব্রিক ও অফিশিয়াল গ্যাজেট ওয়ারেন্টি।</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
              <RefreshCw className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-slate-100 text-xs">৭ দিনের ইজি এক্সচেঞ্জ</h4>
              <p className="text-slate-400 text-[11px] mt-0.5">সাইজ পরিবর্তন বা সমস্যায় তাৎক্ষণিক সমাধান।</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
              <Truck className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-slate-100 text-xs">সারা দেশে ডেলিভারি</h4>
              <p className="text-slate-400 text-[11px] mt-0.5">ক্যাশ অন ডেলিভারি (পণ্য দেখে মূল্য পরিশোধ)।</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
              <Headphones className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-bold text-slate-100 text-xs">২৪/৭ কাস্টমার কেয়ার</h4>
              <p className="text-slate-400 text-[11px] mt-0.5">
                <a href={`tel:${currentPhone}`} className="hover:text-amber-400 transition font-mono">
                  {currentPhone}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-8">
          
          {/* Brand Col */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-amber-500 flex items-center justify-center text-slate-950 font-serif font-black">
                K
              </div>
              <span className="text-base font-bold tracking-tight text-white uppercase font-serif">
                {currentStoreName}
              </span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              {currentAbout}
            </p>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>ঢাকা • চট্টগ্রাম • সিলেট • সারাদেশে ক্যাশ অন ডেলিভারি</span>
            </div>
            <div className="pt-1">
              <a 
                href={`https://wa.me/${whatsappNumber}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-bold transition"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp: {currentPhone}</span>
              </a>
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-bold text-slate-100 uppercase text-[11px] tracking-wider mb-3">কাস্টমার সার্ভিস</h4>
            <ul className="space-y-2 text-slate-400 text-[11px]">
              <li>
                <button onClick={onOpenTracking} className="hover:text-amber-400 transition text-left cursor-pointer flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-amber-400" />
                  <span>অর্ডার ট্র্যাক করুন (Live Tracking)</span>
                </button>
              </li>
              <li>
                <a 
                  href={`tel:${currentPhone}`} 
                  className="hover:text-amber-400 transition flex items-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
                  <span>হটলাইন: {currentPhone}</span>
                </a>
              </li>
              <li>
                <a 
                  href={`https://wa.me/${whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-amber-400 transition flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
                  <span>হোয়াটসঅ্যাপ কনসালট্যান্ট</span>
                </a>
              </li>
              <li><span className="hover:text-slate-200 transition">ক্যাশ অন ডেলিভারি পলিসি</span></li>
              <li><span className="hover:text-slate-200 transition">সাইজ গাইড ও ওয়ারেন্টি শর্তাবলি</span></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold text-slate-100 uppercase text-[11px] tracking-wider mb-3">জনপ্রিয় কালেকশন</h4>
            <ul className="space-y-2 text-slate-400 text-[11px]">
              <li><span>রয়্যাল এমব্রয়ডারি পাঞ্জাবি ও কুর্তি</span></li>
              <li><span>মার্সারাইজড পোলো ও এক্সিকিউটিভ শার্ট</span></li>
              <li><span>ANC ওয়্যারলেস ইয়ারবাডস ও হেডফোন</span></li>
              <li><span>AMOLED টাইটানিয়াম স্মার্টওয়াচ</span></li>
              <li><span>GaN আল্ট্রা-ফাস্ট চার্জার ও পাওয়ার ব্যাংক</span></li>
            </ul>
          </div>

          {/* Verified Payments & Guarantees */}
          <div className="space-y-3">
            <h4 className="font-bold text-slate-100 uppercase text-[11px] tracking-wider mb-2">
              পেমেন্ট ও সুরক্ষা
            </h4>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              সারা দেশে ক্যাশ অন ডেলিভারি (পণ্য হাতে পেয়ে দেখে মূল্য পরিশোধ করুন)। এছাড়াও বিকাশ, নগদ ও কার্ড গ্রহণ করা হয়।
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {['Cash on Delivery', 'bKash', 'Nagad', 'Mastercard', 'VISA'].map((badge) => (
                <span key={badge} className="bg-slate-900 text-slate-300 text-[10px] font-medium px-2.5 py-1 rounded border border-slate-800">
                  {badge}
                </span>
              ))}
            </div>
            <div className="pt-2 flex items-center gap-2 text-amber-400/90 text-[11px]">
              <Award className="w-4 h-4 text-amber-400" />
              <span>১০০% স্যাটিসফ্যাকশন ও আসল মানের নিশ্চয়তা</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} {currentStoreName}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>প্রিমিয়াম পোশাক ও আধুনিক স্মার্ট গ্যাজেটের নির্ভরযোগ্য ঠিকানা</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
