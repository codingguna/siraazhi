import React from 'react';
import { Check, X, Heart, Flame, Sparkles } from 'lucide-react';
import { translations } from '../data/translations';

export default function HealthBenefits({ lang }) {
  const b = translations[lang].benefits;

  return (
    <section id="benefits" className="py-10 md:py-12 bg-[#faf6ee]">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="badge-organic">Health & Nutrition Science</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] font-heading">
            {b.title}
          </h2>
          <p className="text-base text-[#556b62]">
            {b.subtitle}
          </p>
        </div>

        {/* Comparison Matrix Table Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#e6dfcf] shadow-sm max-w-4xl mx-auto overflow-hidden">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100 flex-wrap gap-2">
            <h3 className="text-xl font-bold text-[#1b4332] font-heading flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#d4a017] shrink-0" />
              <span>{b.marachekkuVsRefined}</span>
            </h3>
            <span className="text-xs bg-emerald-100 text-[#1b4332] font-bold px-3 py-1 rounded-full border border-emerald-300">
              0% Chemical Solvents
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[550px]">
              <thead>
                <tr className="border-b-2 border-[#e6dfcf]">
                  <th className="py-3 px-4 text-[#556b62] font-extrabold uppercase w-[30%]">{b.param}</th>
                  <th className="py-3 px-4 bg-[#d8f3dc] text-[#1b4332] font-extrabold rounded-t-xl w-[35%]">{b.maraCol}</th>
                  <th className="py-3 px-4 text-red-700 font-extrabold w-[35%]">{b.refCol}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium">
                <tr>
                  <td className="py-4 px-4 font-bold text-[#1b4332]">{b.temp}</td>
                  <td className="py-4 px-4 bg-[#d8f3dc]/40 text-emerald-900 font-bold">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{b.tempMara}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-red-600">
                    <div className="flex items-center gap-1.5">
                      <X className="w-4 h-4 shrink-0 text-red-500" />
                      <span>{b.tempRef}</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-bold text-[#1b4332]">{b.chem}</td>
                  <td className="py-4 px-4 bg-[#d8f3dc]/40 text-emerald-900 font-bold">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{b.chemMara}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-red-600">
                    <div className="flex items-center gap-1.5">
                      <X className="w-4 h-4 shrink-0 text-red-500" />
                      <span>{b.chemRef}</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-bold text-[#1b4332]">{b.nutr}</td>
                  <td className="py-4 px-4 bg-[#d8f3dc]/40 text-emerald-900 font-bold">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{b.nutrMara}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-red-600">
                    <div className="flex items-center gap-1.5">
                      <X className="w-4 h-4 shrink-0 text-red-500" />
                      <span>{b.nutrRef}</span>
                    </div>
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-4 font-bold text-[#1b4332]">{b.aroma}</td>
                  <td className="py-4 px-4 bg-[#d8f3dc]/40 text-emerald-900 font-bold">
                    <div className="flex items-center gap-1.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{b.aromaMara}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4 text-red-600">
                    <div className="flex items-center gap-1.5">
                      <X className="w-4 h-4 shrink-0 text-red-500" />
                      <span>{b.aromaRef}</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Oil Selection Guide Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-2xl border border-[#e6dfcf] text-left hover-lift">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#d4a017] flex items-center justify-center mb-3">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold text-[#1b4332] font-heading">
              {lang === 'en' ? 'Coconut Oil Benefits' : 'தேங்காய் எண்ணெய் நன்மைகள்'}
            </h4>
            <p className="text-xs text-[#556b62] mt-2 leading-relaxed font-medium">
              {lang === 'en' 
                ? 'Rich in Lauric Acid (52%) which boosts immunity and metabolic health. Antimicrobial properties make it ideal for oral oil pulling and natural skin conditioning.'
                : 'லாரிக் அமிலம் நிறைந்தது. உடலின் நோய் எதிர்ப்பு சக்தியை அதிகரிக்கிறது மற்றும் செரிமானத்திற்கு மிகவும் நல்லது.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#e6dfcf] text-left hover-lift">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#1b4332] flex items-center justify-center mb-3">
              <Flame className="w-5 h-5 text-[#c85a32]" />
            </div>
            <h4 className="text-lg font-bold text-[#1b4332] font-heading">
              {lang === 'en' ? 'Groundnut Oil Benefits' : 'கடலை எண்ணெய் நன்மைகள்'}
            </h4>
            <p className="text-xs text-[#556b62] mt-2 leading-relaxed font-medium">
              {lang === 'en'
                ? 'High smoke point (225°C) prevents toxic free-radical formation during high-heat cooking. High in Vitamin E & Resveratrol heart antioxidants.'
                : 'அதிக புகை நிலை கொண்டது. சமையலுக்குப் பாதுகாப்பானது. இதயத்திற்கு நன்மை தரும் வைட்டமின் E நிறைந்தது.'}
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#e6dfcf] text-left hover-lift">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5 text-[#d4a017]" />
            </div>
            <h4 className="text-lg font-bold text-[#1b4332] font-heading">
              {lang === 'en' ? 'Sesame / Gingelly Benefits' : 'நல்லெண்ணெய் நன்மைகள்'}
            </h4>
            <p className="text-xs text-[#556b62] mt-2 leading-relaxed font-medium">
              {lang === 'en'
                ? 'Contains Sesamol & Sesaminol antioxidants. Traditionally used in South Indian cooking to balance body heat and support bone density.'
                : 'இயற்கையான ஆக்ஸிஜனேற்றிகள் நிறைந்தது. உடல் சூட்டைத் தணித்து எலும்புகளின் பலத்திற்கு உதவுகிறது.'}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
