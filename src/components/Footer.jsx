import React from 'react';
import { MapPin, Phone, Mail, ShieldCheck, ArrowUp } from 'lucide-react';
import { translations } from '../data/translations';

export default function Footer({ lang, onNavigate }) {
  const t = translations[lang].footer;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1b4332] text-[#faf6ee] pt-10 pb-6 border-t-4 border-[#d4a017]">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-800/80 text-left">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/sirazhi_logo.png" 
                alt="Siraazhi Logo" 
                className="h-12 w-auto object-contain bg-white/90 p-1 rounded-xl shadow-md"
              />
              <div>
                <span className="font-heading font-extrabold text-2xl tracking-wider text-white">
                  Siraazhi (சீராழி)
                </span>
                <p className="text-xs text-amber-300 font-semibold">
                  Traditional Marachekku Oils & Seeds
                </p>
              </div>
            </div>

            <p className="text-xs text-emerald-100/80 leading-relaxed max-w-md">
              {t.aboutDesc}
            </p>

          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-bold text-white text-base font-heading border-b border-emerald-700/60 pb-2">
              {t.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs text-emerald-100/90 font-medium">
              <li>
                <button onClick={() => onNavigate('home')} className="hover:text-[#f4c430] transition-colors">
                  {translations[lang].nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('products')} className="hover:text-[#f4c430] transition-colors">
                  {translations[lang].nav.products}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('process')} className="hover:text-[#f4c430] transition-colors">
                  {translations[lang].nav.process}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('benefits')} className="hover:text-[#f4c430] transition-colors">
                  {translations[lang].nav.benefits}
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('wholesale')} className="hover:text-[#f4c430] transition-colors">
                  {translations[lang].nav.wholesale}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Google Maps link */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="font-bold text-white text-base font-heading border-b border-emerald-700/60 pb-2">
              {t.contactTitle}
            </h4>
            <ul className="space-y-2.5 text-xs text-emerald-100/90">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#f4c430] shrink-0 mt-0.5" />
                <a 
                  href="https://maps.app.goo.gl/bDNvJrybhVXqfM1x9?g_st=aw" 
                  target="_blank" 
                  rel="noreferrer"
                  className="hover:text-[#f4c430] transition-colors underline"
                >
                  {t.address}
                </a>
              </li>
              <li className="flex items-start gap-2 pt-2 mt-2 border-t border-emerald-700/60">
                <ShieldCheck className="w-4 h-4 text-[#f4c430] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-white">{t.fssaiTitle}</p>
                  <p className="text-[10px] text-emerald-200/80">{t.fssaiDesc}</p>
                </div>
              </li>
              <li className="flex items-center gap-2 pt-1">
                <Phone className="w-4 h-4 text-[#f4c430] shrink-0" />
                <span>{t.name} - <a href={`tel:${t.phone}`}>{t.phone}</a></span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#f4c430] shrink-0" />
                <a href={`mailto:${t.email}`}>{t.email}</a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-emerald-200/60 font-medium">
          <p>{t.copyright}</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-amber-300 hover:text-white transition-colors"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
