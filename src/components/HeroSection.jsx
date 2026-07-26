import React from 'react';
import { ArrowRight, Sparkles, Droplets, Award, Leaf } from 'lucide-react';
import { translations } from '../data/translations';

export default function HeroSection({ lang, onExploreClick, onStoryClick }) {
  const t = translations[lang].hero;

  return (
    <section id="home" className="relative bg-gradient-to-b from-[#faf6ee] via-[#f4eee1] to-[#faf6ee] pt-8 pb-16 md:py-20 overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#d4a017]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#2d6a4f]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* EST Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100/90 border border-emerald-300 text-[#1b4332] text-xs font-extrabold shadow-sm">
              <Sparkles className="w-4 h-4 text-[#d4a017]" />
              <span>{t.badge}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1b4332] leading-tight font-heading">
              {t.title}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-[#556b62] leading-relaxed max-w-2xl font-normal">
              {t.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button 
                onClick={onExploreClick}
                className="btn-gold text-base py-3.5 px-7 cursor-pointer"
              >
                <span>{t.shopBtn}</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <button 
                onClick={onStoryClick}
                className="btn-outline text-base py-3.5 px-7 cursor-pointer"
              >
                <Leaf className="w-5 h-5 text-[#2d6a4f]" />
                <span>{t.storyBtn}</span>
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#e6dfcf] max-w-xl">
              <div className="bg-white/80 p-3.5 rounded-xl border border-[#e6dfcf] shadow-sm">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#1b4332] font-heading">{t.stat1Val}</p>
                <p className="text-xs text-[#556b62] font-medium mt-0.5">{t.stat1Label}</p>
              </div>
              <div className="bg-white/80 p-3.5 rounded-xl border border-[#e6dfcf] shadow-sm">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#d4a017] font-heading">{t.stat2Val}</p>
                <p className="text-xs text-[#556b62] font-medium mt-0.5">{t.stat2Label}</p>
              </div>
              <div className="bg-white/80 p-3.5 rounded-xl border border-[#e6dfcf] shadow-sm">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#2d6a4f] font-heading">{t.stat3Val}</p>
                <p className="text-xs text-[#556b62] font-medium mt-0.5">{t.stat3Label}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image Container with Organic Border */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-[#1b4332] to-[#2d6a4f] p-2">
                <img 
                  src="/assets/hero_oil.png" 
                  alt="Sirazhi Cold Pressed Oils" 
                  className="w-full h-[420px] object-cover rounded-2xl hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Floating Glass Badge */}
                <div className="absolute bottom-6 left-6 right-6 glass-dark p-4 rounded-2xl shadow-lg border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#d4a017] flex items-center justify-center text-slate-950 font-bold shrink-0">
                      <Droplets className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-amber-200">Traditional Vagai Marachekku</p>
                      <p className="text-xs text-emerald-100">Preserving 100% natural aroma, flavor, & vital antioxidants</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Quality Badge */}
              <div className="absolute -top-5 -left-5 bg-white p-3.5 rounded-2xl shadow-xl border border-amber-200 flex items-center gap-3 animate-bounce">
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-[#1b4332]">
                  <Award className="w-6 h-6 text-[#d4a017]" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#1b4332]">FSSAI Certified</p>
                  <p className="text-[10px] text-gray-500">100% Chemical-Free</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
