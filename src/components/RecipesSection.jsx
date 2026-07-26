import React, { useState } from 'react';
import { Utensils, BookOpen, ChevronDown, ChevronUp, Droplets } from 'lucide-react';

export default function RecipesSection({ lang }) {
  const [expandedRecipe, setExpandedRecipe] = useState(null);

  const recipes = [
    {
      id: 0,
      titleEn: "Authentic Chettinad Vatha Kuzhambu",
      titleTa: "பாரம்பரிய செட்டிநாடு வத்தக் குழம்பு",
      oilUsedEn: "Siraazhi Marachekku Sesame Oil (நல்லெண்ணெய்)",
      oilUsedTa: "சீராழி மரச்செக்கு நல்லெண்ணெய்",
      prepTime: "25 Mins",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      ingredientsEn: [
        "4 tbsp Siraazhi Marachekku Sesame Oil",
        "1/2 cup Sundakkai / Manathakkali Vathal",
        "15 Shallots (Small Onions)",
        "10 Garlic Cloves",
        "1 cup Tamarind Extract",
        "2 tbsp Sambar Powder & Salt to taste"
      ],
      ingredientsTa: [
        "4 டீஸ்பூன் சீராழி நல்லெண்ணெய்",
        "1/2 கப் சுண்டக்காய் / மணத்தக்காளி வத்தல்",
        "15 சின்ன வெங்காயம்",
        "10 பூண்டு பற்கள்",
        "1 கப் புளித் தண்ணீர்",
        "சாம்பார் தூள் மற்றும் உப்பு"
      ],
      stepsEn: [
        "Heat 3 tbsp Siraazhi Sesame Oil in a heavy clay pot.",
        "Fry the vathal until crispy and golden brown, then set aside.",
        "In the same aromatic oil, temper mustard, fenugreek, shallots, and garlic until soft.",
        "Add tamarind juice, sambar powder, and let it simmer on low heat until oil separates on top.",
        "Drizzle 1 tbsp raw Siraazhi Sesame Oil right before serving hot with steamed rice!"
      ],
      stepsTa: [
        "மண் சட்டியில் 3 டீஸ்பூன் சீராழி நல்லெண்ணெய் ஊற்றி சூடாக்கவும்.",
        "வத்தலை பொன்னிறமாக வறுத்து தனியாக எடுக்கவும்.",
        "அதே எண்ணெயில் கடுகு, வெந்தயம், சின்ன வெங்காயம், பூண்டு வதக்கவும்.",
        "புளித் தண்ணீர், சாம்பார் தூள் சேர்த்து எண்ணெய் பிரியும் வரை கொதிக்க விடவும்.",
        "இறக்கும் போது 1 டீஸ்பூன் பச்சை நல்லெண்ணெய் தெளித்து பரிமாறவும்!"
      ]
    },
    {
      id: 1,
      titleEn: "Crispy Kara Chutney & Tiffin Dip",
      titleTa: "காரச் சட்னி & இட்லி காரப்பொடி",
      oilUsedEn: "Siraazhi Marachekku Groundnut Oil (கடலை எண்ணெய்)",
      oilUsedTa: "சீராழி கடலை எண்ணெய்",
      prepTime: "15 Mins",
      difficulty: "Quick",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      ingredientsEn: [
        "3 tbsp Siraazhi Groundnut Oil",
        "2 Onions & 3 Tomatoes chopped",
        "6 Dry Red Chillies",
        "1 tbsp Chana Dal & Urad Dal",
        "Curry Leaves & Hing"
      ],
      ingredientsTa: [
        "3 டீஸ்பூன் சீராழி கடலை எண்ணெய்",
        "2 வெங்காயம் & 3 தக்காளி",
        "6 வரமிளகாய்",
        "கடலைப்பருப்பு & உளுந்தம்பருப்பு"
      ],
      stepsEn: [
        "Sauté dry chillies, lentils, onions, and tomatoes in 2 tbsp Siraazhi Groundnut Oil until raw smell disappears.",
        "Cool completely and grind to a smooth paste with salt.",
        "Temper with mustard and curry leaves in 1 tbsp fresh groundnut oil and pour over chutney."
      ],
      stepsTa: [
        "சீராழி கடலை எண்ணெயில் பருப்புகள், மிளகாய், வெங்காயம், தக்காளி வதக்கவும்.",
        "ஆறிய பின் உப்பு சேர்த்து நைசாக அரைக்கவும்.",
        "கடுகு, கறிவேப்பிலை தாளித்து கொட்டவும்."
      ]
    },
    {
      id: 2,
      titleEn: "Fresh Coconut Chutney & Kerala Avial",
      titleTa: "தேங்காய் சட்னி & அவியல்",
      oilUsedEn: "Siraazhi Virgin Coconut Oil (தேங்காய் எண்ணெய்)",
      oilUsedTa: "சீராழி தேங்காய் எண்ணெய்",
      prepTime: "10 Mins",
      difficulty: "Super Easy",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      ingredientsEn: [
        "1 cup Fresh Grated Coconut",
        "2 tbsp Roasted Chana Dal (Pottukadalai)",
        "2 Green Chillies & Ginger",
        "2 tbsp Siraazhi Marachekku Coconut Oil for tempering"
      ],
      ingredientsTa: [
        "1 கப் துருவிய தேங்காய்",
        "2 டீஸ்பூன் பொட்டுக்கடலை",
        "பச்சை மிளகாய் & இஞ்சி",
        "2 டீஸ்பூன் சீராழி தேங்காய் எண்ணெய்"
      ],
      stepsEn: [
        "Grind fresh coconut, roasted gram, chillies, ginger, and salt with minimal water.",
        "Heat Siraazhi Coconut Oil in a small pan, crackle mustard seeds, urad dal, and curry leaves.",
        "Pour tempering over chutney for that irresistible authentic coastal aroma!"
      ],
      stepsTa: [
        "தேங்காய், பொட்டுக்கடலை, மிளகாய் அரைக்கவும்.",
        "சீராழி தேங்காய் எண்ணெயில் கடுகு, கறிவேப்பிலை தாளித்து பரிமாறவும்!"
      ]
    }
  ];

  return (
    <section id="recipes" className="py-10 md:py-12 bg-[#faf6ee]">
      <div className="container-custom">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="badge-gold font-extrabold">Flavor & Health Synergy</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] font-heading">
            {lang === 'en' ? 'Traditional Recipes with Marachekku Oils' : 'பாரம்பரிய சமையல் குறிப்புகள்'}
          </h2>
          <p className="text-base text-[#556b62]">
            {lang === 'en' 
              ? 'Elevate your daily home cooking with rich natural aromas and deep heritage flavors' 
              : 'எங்கள் மரச்செக்கு எண்ணெய்களுடன் உங்கள் வீட்டின் சுவையை பல மடங்கு உயர்த்துங்கள்'}
          </p>
        </div>

        {/* Recipe Cards List */}
        <div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          style={{ alignItems: 'flex-start' }}
        >
          {recipes.map((recipe) => {
            const isExpanded = expandedRecipe === recipe.id;
            const title = lang === 'en' ? recipe.titleEn : recipe.titleTa;
            const oilUsed = lang === 'en' ? recipe.oilUsedEn : recipe.oilUsedTa;
            const ingredients = lang === 'en' ? recipe.ingredientsEn : recipe.ingredientsTa;
            const steps = lang === 'en' ? recipe.stepsEn : recipe.stepsTa;

            return (
              <div 
                key={recipe.id}
                className="bg-[#faf6ee] rounded-3xl overflow-hidden border border-[#e6dfcf] hover-lift flex flex-col justify-between shadow-xs"
              >
                {/* Image */}
                <div className="relative h-52 bg-gray-100 overflow-hidden shrink-0">
                  <img 
                    src={recipe.image} 
                    alt={title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-[#1b4332] text-[#f4c430] text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <Utensils className="w-3.5 h-3.5" />
                    <span>{recipe.prepTime}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-5">
                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1b4332] font-heading leading-tight">
                      {title}
                    </h3>
                    
                    {/* Recommended Oil Badge */}
                    <div className="flex items-start gap-3 bg-white p-3.5 rounded-2xl border border-emerald-100 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-200">
                        <Droplets className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <span className="text-[10px] font-extrabold text-[#d4a017] uppercase tracking-wider block mb-1">
                          Recommended Oil
                        </span>
                        <p className="text-xs font-bold text-[#1b4332] leading-snug">
                          {oilUsed}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Accordion Toggle for Steps */}
                  <div className="space-y-3 pt-4 border-t border-[#e6dfcf] mt-auto">
                    <button
                      onClick={() => setExpandedRecipe(isExpanded ? null : recipe.id)}
                      className="w-full btn-outline justify-center py-2.5 rounded-xl text-xs"
                    >
                      <span className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        <span>{isExpanded ? (lang === 'en' ? 'Hide Recipe Details' : 'மறைக்கவும்') : (lang === 'en' ? 'View Full Recipe' : 'செய்முறை பார்க்க')}</span>
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4 shrink-0 ml-auto" /> : <ChevronDown className="w-4 h-4 shrink-0 ml-auto" />}
                    </button>

                    {isExpanded && (
                      <div className="bg-white p-5 rounded-2xl border border-[#e6dfcf] text-left space-y-5 text-xs animate-fadeIn shadow-lg relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#d4a017]"></div>
                        <div>
                          <p className="font-extrabold text-[#1b4332] mb-3 uppercase tracking-wide border-b border-gray-100 pb-1.5">
                            Ingredients
                          </p>
                          <ul className="space-y-2 text-[#556b62]">
                            {ingredients.map((ing, i) => (
                              <li key={i} className="flex items-start gap-2.5">
                                <span className="text-[#d4a017] mt-0.5 font-bold">•</span>
                                <span className="leading-relaxed">{ing}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-1">
                          <p className="font-extrabold text-[#1b4332] mb-3 uppercase tracking-wide border-b border-gray-100 pb-1.5">
                            Preparation
                          </p>
                          <ol className="space-y-3 text-[#556b62]">
                            {steps.map((st, s) => (
                              <li key={s} className="flex items-start gap-2.5">
                                <span className="font-extrabold text-emerald-800 bg-emerald-50 w-5 h-5 rounded-full flex items-center justify-center shrink-0 text-[10px] mt-0.5 border border-emerald-200">{s + 1}</span>
                                <span className="leading-relaxed">{st}</span>
                              </li>
                            ))}
                          </ol>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
