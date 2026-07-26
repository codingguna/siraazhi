import React, { useState } from 'react';
import { Calculator, Send, CheckCircle, FileText } from 'lucide-react';
import { translations } from '../data/translations';

export default function WholesalePortal({ lang, onToast }) {
  const t = translations[lang].wholesale;

  const commodities = [
    { id: 'copra', nameEn: 'Sun Dried Coconut Copra (கொப்பரைத் தேங்காய்)', nameTa: 'கொப்பரைத் தேங்காய்', basePricePerKg: 155 },
    { id: 'peanut', nameEn: 'Native Peanuts / Groundnut Kernels (நிலக்கடலை பருப்பு)', nameTa: 'நிலக்கடலை பருப்பு', basePricePerKg: 125 },
    { id: 'sesame', nameEn: 'Unpolished Black Sesame Seeds (கருப்பு எள்)', nameTa: 'கருப்பு எள் விதைகள்', basePricePerKg: 185 },
    { id: 'bulk-coconut-oil', nameEn: 'Bulk Marachekku Coconut Oil (தேங்காய் எண்ணெய்)', nameTa: 'மொத்த தேங்காய் எண்ணெய்', basePricePerKg: 280 },
    { id: 'bulk-groundnut-oil', nameEn: 'Bulk Marachekku Groundnut Oil (கடலை எண்ணெய்)', nameTa: 'மொத்த கடலை எண்ணெய்', basePricePerKg: 240 },
    { id: 'bulk-sesame-oil', nameEn: 'Bulk Marachekku Sesame Oil (நல்லெண்ணெய்)', nameTa: 'மொத்த நல்லெண்ணெய்', basePricePerKg: 360 }
  ];

  const [selectedCommodityId, setSelectedCommodityId] = useState('copra');
  const [quantityKg, setQuantityKg] = useState(250);
  const [packaging, setPackaging] = useState('sack');

  const [rfqName, setRfqName] = useState('');
  const [rfqPhone, setRfqPhone] = useState('');
  const [rfqEmail, setRfqEmail] = useState('');
  const [rfqCity, setRfqCity] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const selectedCommodity = commodities.find(c => c.id === selectedCommodityId);
  
  // Tiered bulk discount calculation
  let discountRate = 0;
  if (quantityKg >= 2000) discountRate = 0.18;
  else if (quantityKg >= 1000) discountRate = 0.14;
  else if (quantityKg >= 500) discountRate = 0.10;
  else if (quantityKg >= 200) discountRate = 0.05;

  const rawSubtotal = quantityKg * selectedCommodity.basePricePerKg;
  const discountAmount = rawSubtotal * discountRate;
  const estimatedTotal = Math.round(rawSubtotal - discountAmount);
  const effectivePerKg = Math.round(estimatedTotal / quantityKg);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rfqName || !rfqPhone) {
      onToast(lang === 'en' ? 'Please fill in Name and Phone Number' : 'தயவுசெய்து பெயர் மற்றும் தொலைபேசி எண்ணை பூர்த்தி செய்யவும்', 'error');
      return;
    }
    setSubmitted(true);
    onToast(lang === 'en' ? 'Wholesale Quotation Request Sent Successfully!' : 'மொத்த விற்பனை கோரிக்கை வெற்றிகரமாக அனுப்பப்பட்டது!', 'success');
  };

  return (
    <section id="wholesale" className="py-16 md:py-24 bg-[#faf6ee]">
      <div className="container-custom">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="badge-organic">B2B & Bulk Distribution</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] font-heading">
            {t.title}
          </h2>
          <p className="text-base text-[#556b62]">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Live Bulk Estimator Calculator */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#e6dfcf] shadow-sm text-left space-y-6">
            <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
              <div className="w-10 h-10 rounded-xl bg-[#d4a017] text-slate-950 flex items-center justify-center font-bold shrink-0">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1b4332] font-heading">{t.quoteBuilder}</h3>
                <p className="text-xs text-[#556b62]">Tiered wholesale rates updated live based on volume</p>
              </div>
            </div>

            {/* Commodity Select */}
            <div>
              <label className="block text-xs font-extrabold text-[#1b4332] uppercase tracking-wider mb-2">
                {t.selectProduct}
              </label>
              <select
                value={selectedCommodityId}
                onChange={(e) => setSelectedCommodityId(e.target.value)}
                className="w-full p-3.5 rounded-xl border border-[#e6dfcf] bg-[#faf6ee] text-[#1b4332] font-bold text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1b4332]"
              >
                {commodities.map(c => (
                  <option key={c.id} value={c.id}>
                    {lang === 'en' ? c.nameEn : c.nameTa} (Base ₹{c.basePricePerKg}/kg)
                  </option>
                ))}
              </select>
            </div>

            {/* Quantity Slider / Input */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-extrabold text-[#1b4332] uppercase tracking-wider">
                  {t.quantityKg}
                </label>
                <span className="text-xs font-extrabold text-[#d4a017] bg-[#fdf6e2] px-3 py-1 rounded-full border border-amber-200">
                  {quantityKg} Kg ({(quantityKg / 1000).toFixed(2)} Tons)
                </span>
              </div>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={quantityKg}
                onChange={(e) => setQuantityKg(Number(e.target.value))}
                className="w-full accent-[#1b4332] cursor-pointer h-2 bg-gray-200 rounded-lg"
              />
              <div className="flex justify-between text-[10px] sm:text-[11px] text-gray-400 mt-2 font-semibold">
                <span>50 Kg</span>
                <span>500 Kg (5% Off)</span>
                <span>1,000 Kg (14% Off)</span>
                <span>5,000 Kg (18% Off)</span>
              </div>
            </div>

            {/* Packaging Choice */}
            <div>
              <label className="block text-xs font-extrabold text-[#1b4332] uppercase tracking-wider mb-2">
                {t.packagingType}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPackaging('sack')}
                  className={`p-3 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                    packaging === 'sack' 
                      ? 'bg-[#1b4332] text-white border-[#1b4332] shadow-xs' 
                      : 'bg-[#faf6ee] text-[#1b4332] border-[#e6dfcf] hover:border-[#1b4332]'
                  }`}
                >
                  50 Kg Jute Sack
                </button>
                <button
                  type="button"
                  onClick={() => setPackaging('tin')}
                  className={`p-3 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                    packaging === 'tin' 
                      ? 'bg-[#1b4332] text-white border-[#1b4332] shadow-xs' 
                      : 'bg-[#faf6ee] text-[#1b4332] border-[#e6dfcf] hover:border-[#1b4332]'
                  }`}
                >
                  15 Litre Square Tin
                </button>
                <button
                  type="button"
                  onClick={() => setPackaging('drum')}
                  className={`p-3 rounded-xl border text-xs font-bold text-center transition-all cursor-pointer ${
                    packaging === 'drum' 
                      ? 'bg-[#1b4332] text-white border-[#1b4332] shadow-xs' 
                      : 'bg-[#faf6ee] text-[#1b4332] border-[#e6dfcf] hover:border-[#1b4332]'
                  }`}
                >
                  200 Litre Drum
                </button>
              </div>
            </div>

            {/* Price Output Box */}
            <div className="bg-[#d8f3dc]/70 p-5 rounded-2xl border border-emerald-300 space-y-2 mt-4">
              <div className="flex justify-between items-center flex-wrap gap-2">
                <span className="text-xs font-extrabold text-[#1b4332] uppercase tracking-wider">{t.estimateTitle}</span>
                <span className="text-xs bg-emerald-800 text-white font-extrabold px-2.5 py-0.5 rounded-full">
                  {(discountRate * 100)}% Volume Discount
                </span>
              </div>
              <div className="flex items-baseline justify-between pt-1">
                <span className="text-3xl font-extrabold text-[#1b4332] font-heading">
                  ₹{estimatedTotal.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-emerald-900 font-extrabold">
                  (₹{effectivePerKg} / kg)
                </span>
              </div>
              <p className="text-[11px] text-emerald-800 font-medium pt-2 border-t border-emerald-200">
                *Includes GST & FOB loading at Kangeyam factory warehouse. Delivery door step available.
              </p>
            </div>
          </div>

          {/* Right Column: RFQ Inquiry Form */}
          <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-[#e6dfcf] shadow-sm text-left">
            <h3 className="text-xl font-bold text-[#1b4332] font-heading mb-2 flex items-center gap-2">
              <FileText className="w-5 h-5 text-[#d4a017] shrink-0" />
              <span>{lang === 'en' ? 'Submit Official Request for Quotation (RFQ)' : 'விசாரணை படிவம்'}</span>
            </h3>
            <p className="text-xs text-[#556b62] mb-6 leading-relaxed">
              Fill in your contact details below to receive a formal signed quotation & proforma invoice via WhatsApp & Email within 2 business hours.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-200 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-10 h-10" />
                </div>
                <h4 className="text-xl font-bold text-[#1b4332] font-heading">
                  {lang === 'en' ? 'Quotation Request Received!' : 'கோரிக்கை பெறப்பட்டது!'}
                </h4>
                <p className="text-xs text-[#556b62]">
                  Thank you, <strong>{rfqName}</strong>. Our bulk sales manager will contact you on <strong>{rfqPhone}</strong> with sample details and logistics options.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline text-xs py-2 px-4 cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-[#1b4332] mb-1.5">{t.rfqName} *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Arul Organic Foods Pvt Ltd"
                    value={rfqName}
                    onChange={(e) => setRfqName(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#e6dfcf] text-xs text-[#1b4332] bg-[#faf6ee]/50 focus:bg-white focus:ring-2 focus:ring-[#1b4332] focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#1b4332] mb-1.5">{t.rfqPhone} *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={rfqPhone}
                      onChange={(e) => setRfqPhone(e.target.value)}
                      className="w-full p-3 rounded-xl border border-[#e6dfcf] text-xs text-[#1b4332] bg-[#faf6ee]/50 focus:bg-white focus:ring-2 focus:ring-[#1b4332] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#1b4332] mb-1.5">{t.rfqEmail}</label>
                    <input
                      type="email"
                      placeholder="purchase@company.com"
                      value={rfqEmail}
                      onChange={(e) => setRfqEmail(e.target.value)}
                      className="w-full p-3 rounded-xl border border-[#e6dfcf] text-xs text-[#1b4332] bg-[#faf6ee]/50 focus:bg-white focus:ring-2 focus:ring-[#1b4332] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#1b4332] mb-1.5">{t.rfqCity}</label>
                  <input
                    type="text"
                    placeholder="e.g. Chennai, Bangalore, Coimbatore"
                    value={rfqCity}
                    onChange={(e) => setRfqCity(e.target.value)}
                    className="w-full p-3 rounded-xl border border-[#e6dfcf] text-xs text-[#1b4332] bg-[#faf6ee]/50 focus:bg-white focus:ring-2 focus:ring-[#1b4332] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-gold justify-center py-3.5 text-sm cursor-pointer mt-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.submitRfq}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
