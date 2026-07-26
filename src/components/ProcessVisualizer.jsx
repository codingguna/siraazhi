import React, { useState } from 'react';
import { Sun, Sparkles, Droplets, ShieldCheck, Filter, Container, ChevronRight, Check } from 'lucide-react';
import { translations } from '../data/translations';

export default function ProcessVisualizer({ lang }) {
  const t = translations[lang].process;
  const [activeStep, setActiveStep] = useState(2); // Default to Marachekku pressing

  const steps = [
    {
      id: 0,
      title: t.step1Title,
      desc: t.step1Desc,
      icon: <Sparkles className="w-6 h-6 text-[#d4a017]" />,
      image: "/assets/copra_seeds.png",
      highlight: "Hand-sorted native seeds direct from local farmers"
    },
    {
      id: 1,
      title: t.step2Title,
      desc: t.step2Desc,
      icon: <Sun className="w-6 h-6 text-amber-500" />,
      image: "/assets/black_sesame.png",
      highlight: "100% Sun dried without artificial heat chambers"
    },
    {
      id: 2,
      title: t.step3Title,
      desc: t.step3Desc,
      icon: <Droplets className="w-6 h-6 text-[#1b4332]" />,
      image: "/assets/groundnut_oil.png",
      highlight: "Rotated in Vagai Wood pestle at low RPM (< 45°C)"
    },
    {
      id: 3,
      title: t.step4Title,
      desc: t.step4Desc,
      icon: <Container className="w-6 h-6 text-emerald-600" />,
      image: "/assets/coconut_oil.png",
      highlight: "Allowed to settle for 4-5 days naturally. No chemical solvents!"
    },
    {
      id: 4,
      title: t.step5Title,
      desc: t.step5Desc,
      icon: <Filter className="w-6 h-6 text-[#c85a32]" />,
      image: "/assets/sesame_oil.png",
      highlight: "Unbleached organic cotton double-layer cloth filter"
    },
    {
      id: 5,
      title: t.step6Title,
      desc: t.step6Desc,
      icon: <ShieldCheck className="w-6 h-6 text-[#d4a017]" />,
      image: "/assets/hero_oil.png",
      highlight: "Sealed fresh in amber glass & eco-friendly containers"
    }
  ];

  return (
    <section id="process" className="py-16 md:py-24 bg-white border-y border-[#e6dfcf]">
      <div className="container-custom">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="badge-gold">Authentic Marachekku Craftsmanship</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] font-heading">
            {t.title}
          </h2>
          <p className="text-base text-[#556b62]">
            {t.subtitle}
          </p>
        </div>

        {/* Step Navigation Bar */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 mb-10">
          {steps.map((step) => {
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#1b4332] text-white border-[#1b4332] shadow-lg scale-105'
                    : 'bg-[#faf6ee] text-[#556b62] border-[#e6dfcf] hover:border-[#1b4332] hover:text-[#1b4332]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                    isActive ? 'bg-[#d4a017] text-slate-950' : 'bg-white text-[#1b4332]'
                  }`}>
                    {step.icon}
                  </div>
                  <span className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-[#2d6a4f] text-emerald-100' : 'bg-gray-200 text-gray-700'
                  }`}>
                    Step {step.id + 1}
                  </span>
                </div>
                <p className="text-xs font-bold font-heading line-clamp-1">
                  {step.title.split('.')[1] || step.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="bg-[#faf6ee] rounded-3xl p-6 sm:p-10 border border-[#e6dfcf] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Detail */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#1b4332] text-xs font-extrabold">
                <Check className="w-3.5 h-3.5 text-[#d4a017]" />
                <span>Stage {activeStep + 1} of 6</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#1b4332] font-heading">
                {steps[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-[#556b62] leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fdf6e2] flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5 text-[#d4a017]" />
                </div>
                <p className="text-xs font-bold text-[#1b4332]">
                  {steps[activeStep].highlight}
                </p>
              </div>

              {/* Progress buttons */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-full border border-[#1b4332] text-[#1b4332] disabled:opacity-30 disabled:cursor-not-allowed font-bold text-xs hover:bg-[#1b4332] hover:text-white transition-all"
                >
                  Previous Stage
                </button>
                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep(prev => Math.min(steps.length - 1, prev + 1))}
                  className="btn-gold py-2 px-5 text-xs cursor-pointer"
                >
                  <span>Next Stage</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-4 border-white h-72 sm:h-80">
                <img 
                  src={steps[activeStep].image} 
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-bold">
                  Stage {activeStep + 1}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
