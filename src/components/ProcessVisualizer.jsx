import React, { useState } from 'react';
import { Sun, Sparkles, Droplets, ShieldCheck, Filter, Container, ChevronRight, Check } from 'lucide-react';
import { translations } from '../data/translations';

export default function ProcessVisualizer({ lang }) {
  const t = translations[lang].process;
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      id: 0,
      title: "Seed Sourcing",
      desc: t.step1Desc,
      icon: <Sparkles className="w-5 h-5" />,
      image: "/assets/copra_seeds.png",
      highlight: "Hand-sorted native seeds direct from local farmers"
    },
    {
      id: 1,
      title: "Sun Drying",
      desc: t.step2Desc,
      icon: <Sun className="w-5 h-5" />,
      image: "/assets/black_sesame.png",
      highlight: "100% Sun dried without artificial heat chambers"
    },
    {
      id: 2,
      title: "Wooden Pressing",
      desc: t.step3Desc,
      icon: <Droplets className="w-5 h-5" />,
      image: "/assets/groundnut_oil.png",
      highlight: "Rotated in Vagai Wood pestle at low RPM (< 45°C)"
    },
    {
      id: 3,
      title: "Sedimentation",
      desc: t.step4Desc,
      icon: <Container className="w-5 h-5" />,
      image: "/assets/coconut_oil.png",
      highlight: "Allowed to settle for 4-5 days naturally. No chemical solvents!"
    },
    {
      id: 4,
      title: "Cloth Filter",
      desc: t.step5Desc,
      icon: <Filter className="w-5 h-5" />,
      image: "/assets/sesame_oil.png",
      highlight: "Unbleached organic cotton double-layer cloth filter"
    },
    {
      id: 5,
      title: "Glass Bottling",
      desc: t.step6Desc,
      icon: <ShieldCheck className="w-5 h-5" />,
      image: "/assets/hero_oil.png",
      highlight: "Sealed fresh in amber glass & eco-friendly containers"
    }
  ];

  return (
    <section id="process" className="py-10 md:py-12 bg-[#faf6ee]">
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

        {/* Step Navigation Bar - Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {steps.map((step) => {
            const isActive = activeStep === step.id;
            return (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`p-3.5 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-between min-h-[95px] ${
                  isActive
                    ? 'text-white shadow-md scale-105'
                    : 'hover:border-[#1b4332] hover:text-[#1b4332]'
                }`}
                style={{ 
                  backgroundColor: isActive ? '#1b4332' : '#ffffff',
                  borderColor: isActive ? '#1b4332' : '#e6dfcf',
                  color: isActive ? '#ffffff' : '#556b62'
                }}
              >
                <div className="flex items-center justify-between w-full mb-1.5">
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-[#2d6a4f] text-emerald-100' : 'bg-gray-200 text-gray-700'
                  }`}>
                    Step {step.id + 1}
                  </span>
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                    isActive ? 'bg-[#d4a017] text-slate-950' : 'bg-white text-[#1b4332] border border-gray-200'
                  }`}>
                    {step.icon}
                  </div>
                </div>
                <p className="text-xs font-extrabold font-heading text-center mt-1 leading-tight">
                  {step.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="bg-[#faf6ee] rounded-3xl p-6 sm:p-10 border border-[#e6dfcf] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Detail */}
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#1b4332] text-xs font-extrabold border border-emerald-300">
                <Check className="w-3.5 h-3.5 text-[#d4a017]" />
                <span>Stage {activeStep + 1} of 6</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-[#1b4332] font-heading">
                {steps[activeStep].id + 1}. {steps[activeStep].title}
              </h3>

              <p className="text-sm sm:text-base text-[#556b62] leading-relaxed">
                {steps[activeStep].desc}
              </p>

              <div className="bg-white p-4 rounded-2xl border border-amber-200 shadow-xs flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#fdf6e2] flex items-center justify-center shrink-0 border border-amber-300">
                  <Sparkles className="w-5 h-5 text-[#d4a017]" />
                </div>
                <p className="text-xs font-extrabold text-[#1b4332]">
                  {steps[activeStep].highlight}
                </p>
              </div>

              {/* Progress buttons */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  className="btn-outline py-2 px-5 rounded-full text-xs disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
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
              <div className="relative rounded-2xl overflow-hidden shadow-md border-4 border-white h-72 sm:h-80 bg-gray-100">
                <img 
                  src={steps[activeStep].image} 
                  alt={steps[activeStep].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 right-3 bg-black/75 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-extrabold border border-white/20">
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
