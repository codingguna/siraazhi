import React from 'react';
import { ShieldCheck, Flame, Sun, Sparkles, CheckCircle2, PackageCheck } from 'lucide-react';
import { translations } from '../data/translations';

export default function TrustBadges({ lang }) {
  const b = translations[lang].badges;

  const trustItems = [
    {
      icon: <Sparkles className="w-6 h-6 text-[#d4a017]" />,
      title: b.marachekku,
      descEn: "Extracted using native Vagai wood pestle at low RPM without heating",
      descTa: "பாரம்பரிய வாகை மரச்செக்கில் குறைந்த வேகத்தில் ஆட்டப்பட்டு தயார் செய்யப்படுகிறது"
    },
    {
      icon: <Flame className="w-6 h-6 text-[#c85a32]" />,
      title: b.noChemicals,
      descEn: "Zero chemical solvents, zero artificial color, hexane & bleach free",
      descTa: "எந்தவித இரசாயனங்கள், நிறமிகள் அல்லது ஹெக்சேன் கலப்பற்றது"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emerald-600" />,
      title: b.fssai,
      descEn: "Fully registered and tested under Indian food safety standards",
      descTa: "அரசு FSSAI உணவு பாதுகாப்பு தரத்திற்கு உட்பட்டது"
    },
    {
      icon: <Sun className="w-6 h-6 text-amber-500" />,
      title: b.farmDirect,
      descEn: "Directly sourced from trusted local farmers in Kongu region",
      descTa: "விவசாயிகளிடமிருந்து நேரடியாக பெறப்படும் தரமான இயற்கை விதைகள்"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-[#2d6a4f]" />,
      title: b.labTested,
      descEn: "Every batch verified for peroxide value, acid value & purity",
      descTa: "ஒவ்வொரு தொகுதியும் ஆய்வக சோதனைக்கு உட்படுத்தப்பட்டு சரிபார்க்கப்படுகிறது"
    },
    {
      icon: <PackageCheck className="w-6 h-6 text-indigo-600" />,
      title: b.hygienic,
      descEn: "Sealed fresh in hygienic food-grade plastic bottles",
      descTa: "சுகாதாரமான பாட்டில்கள் மற்றும் உணவு தர கொள்கலன்களில் அடைக்கப்படுகிறது"
    }
  ];

  return (
    <section className="py-10 bg-[#faf6ee]">
      <div className="container-custom gap-6">
        <div className="text-center pb-10">
          <span className="badge-gold">Purity Guarantee</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] mt-4 font-heading ">
            {lang === 'en' ? 'Why Families Trust Siraazhi' : 'ஏன் சீராழி பிராண்ட் நம்பிக்கையானது?'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustItems.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#faf6ee] p-6 rounded-2xl border border-[#e6dfcf] hover-lift flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm border border-gray-100">
                {item.icon}
              </div>
              <div>
                <h3 className="font-extrabold text-[#1b4332] text-base font-heading">
                  {item.title}
                </h3>
                <p className="text-xs text-[#556b62] mt-1 font-medium leading-relaxed">
                  {lang === 'en' ? item.descEn : item.descTa}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
