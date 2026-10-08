import React from 'react';
import { X } from 'lucide-react';
import { translations } from '../data/translations';
import ProductManager from './ProductManager';

export default function AdminDashboard({ lang, onCloseAdmin }) {
  const t = translations[lang].admin;

  return (
    <div className="min-h-screen bg-[#faf6ee] pt-6 pb-16">
      <div className="container-custom space-y-6">

        {/* Header Bar */}
        <div className="bg-[#1b4332] text-white p-6 rounded-3xl shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="bg-[#d4a017] text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Siraazhi Owner Portal
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#faf6ee]">
              {t.title}
            </h2>
            <p className="text-xs text-emerald-200">
              {t.subtitle}
            </p>
          </div>

          <button
            onClick={onCloseAdmin}
            className="btn-gold py-2 px-4 text-xs shrink-0 cursor-pointer"
          >
            <X className="w-4 h-4" />
            <span>Return to Store Front</span>
          </button>
        </div>

        {/* Product Showcase Manager */}
        <ProductManager lang={lang} />

      </div>
    </div>
  );
}
