import React, { useState, useEffect } from 'react';
import { ShoppingBag, Globe, Menu, X, UserCheck } from 'lucide-react';
import { translations } from '../data/translations';

export default function Navbar({ 
  lang, 
  setLang, 
  cartCount, 
  onOpenCart, 
  isAdmin, 
  setIsAdmin,
  activeSection,
  setActiveSection
}) {
  const t = translations[lang];
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t.nav.home },
    { id: 'products', label: t.nav.products },
    { id: 'process', label: t.nav.process },
    { id: 'benefits', label: t.nav.benefits },
    { id: 'recipes', label: t.nav.recipes }
  ];

  const handleNavClick = (id) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300 bg-[#faf6ee] border-b border-[#e6dfcf] shadow-sm">


      {/* Main Navbar */}
      <nav className={`w-full transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-4' 
          : 'bg-[#faf6ee] py-5'
      }`}>
        <div className="container-custom flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group cursor-pointer border-none bg-transparent outline-none"
          >
            <img 
              src="/assets/sirazhi_logo.png" 
              alt="Siraazhi Logo" 
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-heading font-extrabold text-2xl tracking-wider text-[#1b4332]">
                  Siraazhi
                </span>
                <span className="text-xs font-bold px-1.5 py-0.5 rounded bg-[#d8f3dc] text-[#1b4332]">
                  சீராழி
                </span>
              </div>
              <p className="text-[11px] font-medium text-[#556b62] hidden sm:block">
                {t.brandTagline}
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-semibold transition-colors py-1 border-none bg-transparent outline-none cursor-pointer relative ${
                  activeSection === link.id
                    ? 'text-[#1b4332] font-bold'
                    : 'text-[#556b62] hover:text-[#1b4332]'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#d4a017] rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Action Buttons: Language Switcher, Admin Toggle, Cart */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <button 
              onClick={() => setLang(lang === 'en' ? 'ta' : 'en')}
              className="hidden sm:flex items-center gap-1.5 bg-[#2d6a4f] hover:bg-[#40916c] px-3 py-1.5 rounded-full transition-all font-semibold text-xs border-none cursor-pointer shadow-sm"
              title="Toggle English / Tamil"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'தமிழ்' : 'English'}</span>
            </button>

            {/* Admin Toggle */}
            <button
              onClick={() => setIsAdmin(!isAdmin)}
              className={`hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                isAdmin 
                  ? 'bg-amber-500 text-slate-950 shadow-md ring-2 ring-amber-300' 
                  : 'bg-emerald-100 text-[#1b4332] hover:bg-emerald-200'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5" />
              <span>{isAdmin ? 'Admin Active' : t.nav.admin}</span>
            </button>

            {/* Shopping Cart Drawer Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-[#1b4332] text-white hover:bg-[#2d6a4f] transition-all shadow-md flex items-center justify-center cursor-pointer"
              aria-label="View Shopping Basket"
            >
              <ShoppingBag className="w-5 h-5 text-[#f4c430]" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#d4a017] text-slate-950 text-xs font-extrabold w-5 h-5 rounded-full flex items-center justify-center shadow-sm border-2 border-white animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-[#1b4332] hover:bg-[#e6dfcf] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#e6dfcf] mt-3 px-6 py-4 space-y-3 shadow-lg">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left py-2 font-semibold text-base border-b border-gray-100 ${
                  activeSection === link.id ? 'text-[#1b4332] font-bold' : 'text-gray-600'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 flex flex-col gap-3 border-t border-gray-100">
              <button 
                onClick={() => {
                  setLang(lang === 'en' ? 'ta' : 'en');
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#1b4332] font-bold text-sm shadow-sm"
              >
                <Globe className="w-4 h-4" />
                <span>{lang === 'en' ? 'Switch to தமிழ் (Tamil)' : 'ஆங்கிலத்திற்கு மாறு (English)'}</span>
              </button>

              <button
                onClick={() => {
                  setIsAdmin(!isAdmin);
                  setMobileMenuOpen(false);
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-[#1b4332] font-bold text-sm"
              >
                <UserCheck className="w-4 h-4" />
                <span>{isAdmin ? 'Exit Admin Mode' : t.nav.admin}</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
