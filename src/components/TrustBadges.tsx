import React from 'react';
import { ShieldCheck, RefreshCw, Truck, Zap } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-3 sm:p-4 shadow-sm mb-4">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
        
        {/* Badge 1 */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 border border-amber-500/20">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-tight">১০০% আসল প্রিমিয়াম কোয়ালিটি</h4>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium truncate">সেরা ফেব্রিক ও অফিশিয়াল ওয়ারেন্টি</p>
          </div>
        </div>

        {/* Badge 2 */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 border border-amber-500/20">
            <RefreshCw className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-tight">৭ দিনের ইজি এক্সচেঞ্জ</h4>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium truncate">ঝামেলাহীন রিটার্ন ও সাইজ বদল</p>
          </div>
        </div>

        {/* Badge 3 */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center shrink-0 border border-amber-500/20">
            <Truck className="w-4 h-4" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-tight">ক্যাশ অন ডেলিভারি</h4>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium truncate">পণ্য দেখে যাচাই করে টাকা দিন</p>
          </div>
        </div>

        {/* Badge 4 */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-xs">
            <Zap className="w-4 h-4 fill-slate-950" />
          </div>
          <div className="min-w-0">
            <h4 className="text-xs font-bold text-slate-900 dark:text-slate-100 leading-tight">সুপার ফাস্ট ডেলিভারি</h4>
            <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium truncate">ঢাকা ২৪-৪৮ ঘণ্টা • সারাদেশে ২-৩ দিন</p>
          </div>
        </div>

      </div>
    </div>
  );
};
