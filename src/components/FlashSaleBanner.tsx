import React, { useState, useEffect } from 'react';
import { Clock, Tag, Check, Sparkles } from 'lucide-react';

interface FlashSaleBannerProps {
  onSelectVoucher: (code: string) => void;
}

export const FlashSaleBanner: React.FC<FlashSaleBannerProps> = ({ onSelectVoucher }) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 6,
    minutes: 42,
    seconds: 19
  });
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 12, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyVoucher = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    onSelectVoucher(code);
    setTimeout(() => setCopiedCode(null), 2500);
  };

  const format2 = (n: number) => n.toString().padStart(2, '0');

  return (
    <div className="mb-4">
      {/* Luxury Obsidian & Gold Flash Sale Banner */}
      <div className="bg-gradient-to-r from-[#0c1017] via-[#111827] to-[#0c1017] rounded-xl shadow-lg p-4 sm:p-6 text-white flex flex-wrap items-center justify-between gap-5 relative overflow-hidden border border-slate-800">
        <div className="absolute -right-8 top-0 h-full w-1/3 bg-amber-500/5 skew-x-12 pointer-events-none" />

        <div className="z-10 max-w-lg">
          <div className="flex items-center gap-2">
            <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2.5 py-0.5 rounded uppercase tracking-wider">
              LIMITED TIME OFFER
            </span>
            <span className="text-[11px] font-mono text-amber-300 font-bold bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
              CODE: FASHION10 (-10%)
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white mt-1.5 tracking-tight font-serif">
            UP TO 45% OFF
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm mt-0.5 font-medium">
            প্রিমিয়াম রাজকীয় পাঞ্জাবি, ক্যাজুয়াল পোশাক ও আধুনিক স্মার্ট গ্যাজেট
          </p>

          <div className="flex items-center gap-2 mt-3.5">
            <button 
              onClick={() => copyVoucher('FASHION10')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2 text-xs rounded-lg transition cursor-pointer flex items-center gap-1.5 shadow-md"
            >
              {copiedCode === 'FASHION10' ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>কুপন যুক্ত হয়েছে!</span>
                </>
              ) : (
                <>
                  <Tag className="w-3.5 h-3.5" />
                  <span>১০% কুপন ব্যবহার করুন</span>
                </>
              )}
            </button>
            <span className="text-[11px] text-slate-400">৳ ১,৫০০+ অর্ডারে প্রযোজ্য</span>
          </div>
        </div>

        {/* Live Countdown Clock */}
        <div className="z-10 flex flex-col items-start sm:items-end gap-1.5 bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 backdrop-blur-xs shadow-inner">
          <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>অফারের সময় বাকি:</span>
          </div>
          <div className="flex items-center gap-1 font-mono font-bold text-base sm:text-lg text-white">
            <span className="bg-slate-950 text-white px-2.5 py-1 rounded border border-slate-800">{format2(timeLeft.hours)}</span>
            <span className="text-amber-400">:</span>
            <span className="bg-slate-950 text-white px-2.5 py-1 rounded border border-slate-800">{format2(timeLeft.minutes)}</span>
            <span className="text-amber-400">:</span>
            <span className="bg-slate-950 text-amber-400 px-2.5 py-1 rounded border border-slate-800">{format2(timeLeft.seconds)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
