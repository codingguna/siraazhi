import React, { useState } from 'react';
import { Utensils, Clock, Flame, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

export default function RecipesSection({ lang }) {
  const [expandedRecipe, setExpandedRecipe] = useState(0);

  const recipes = [
    {
      id: 0,
      titleEn: "Authentic Chettinad Vatha Kuzhambu",
      titleTa: "பாரம்பரிய செட்டிநாடு வத்தக் குழம்பு",
      oilUsedEn: "Sirazhi Marachekku Sesame Oil (நல்லெண்ணெய்)",
      oilUsedTa: "சிறாழி மரச்செக்கு நல்லெண்ணெய்",
      prepTime: "25 Mins",
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=800&q=80",
      ingredientsEn: [
        "4 tbsp Sirazhi Marachekku Sesame Oil",
        "1/2 cup Sundakkai / Manathakkali Vathal",
        "15 Shallots (Small Onions)",
        "10 Garlic Cloves",
        "1 cup Tamarind Extract",
        "2 tbsp Sambar Powder & Salt to taste"
      ],
      ingredientsTa: [
        "4 டீஸ்பூன் சிறாழி நல்லெண்ணெய்",
        "1/2 கப் சுண்டக்காய் / மணத்தக்காளி வத்தல்",
        "15 சின்ன வெங்காயம்",
        "10 பூண்டு பற்கள்",
        "1 கப் புளித் தண்ணீர்",
        "சாம்பார் தூள் மற்றும் உப்பு"
      ],
      stepsEn: [
        "Heat 3 tbsp Sirazhi Sesame Oil in a heavy clay pot.",
        "Fry the vathal until crispy and golden brown, then set aside.",
        "In the same aromatic oil, temper mustard, fenugreek, shallots, and garlic until soft.",
        "Add tamarind juice, sambar powder, and let it simmer on low heat until oil separates on top.",
        "Drizzle 1 tbsp raw Sirazhi Sesame Oil right before serving hot with steamed rice!"
      ],
      stepsTa: [
        "மண் சட்டியில் 3 டீஸ்பூன் சிறாழி நல்லெண்ணெய் ஊற்றி சூடாக்கவும்.",
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
      oilUsedEn: "Sirazhi Cold Pressed Groundnut Oil (கடலை எண்ணெய்)",
      oilUsedTa: "சிறாழி கடலை எண்ணெய்",
      prepTime: "15 Mins",
      difficulty: "Quick",
      image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=800&q=80",
      ingredientsEn: [
        "3 tbsp Sirazhi Groundnut Oil",
        "2 Onions & 3 Tomatoes chopped",
        "6 Dry Red Chillies",
        "1 tbsp Chana Dal & Urad Dal",
        "Curry Leaves & Hing"
      ],
      ingredientsTa: [
        "3 டீஸ்பூன் சிறாழி கடலை எண்ணெய்",
        "2 வெங்காயம் & 3 தக்காளி",
        "6 வரமிளகாய்",
        "கடலைப்பருப்பு & உளுந்தம்பருப்பு"
      ],
      stepsEn: [
        "Sauté dry chillies, lentils, onions, and tomatoes in 2 tbsp Sirazhi Groundnut Oil until raw smell disappears.",
        "Cool completely and grind to a smooth paste with salt.",
        "Temper with mustard and curry leaves in 1 tbsp fresh groundnut oil and pour over chutney."
      ],
      stepsTa: [
        "சிறாழி கடலை எண்ணெயில் பருப்புகள், மிளகாய், வெங்காயம், தக்காளி வதக்கவும்.",
        "ஆறிய பின் உப்பு சேர்த்து நைசாக அரைக்கவும்.",
        "கடுகு, கறிவேப்பிலை தாளித்து கொட்டவும்."
      ]
    },
    {
      id: 2,
      titleEn: "Fresh Coconut Chutney & Kerala Avial",
      titleTa: "தேங்காய் சட்னி & அவியல்",
      oilUsedEn: "Sirazhi Virgin Coconut Oil (தேங்காய் எண்ணெய்)",
      oilUsedTa: "சிறாழி தேங்காய் எண்ணெய்",
      prepTime: "10 Mins",
      difficulty: "Super Easy",
      image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
      ingredientsEn: [
        "1 cup Fresh Grated Coconut",
        "2 tbsp Roasted Chana Dal (Pottukadalai)",
        "2 Green Chillies & Ginger",
        "2 tbsp Sirazhi Cold Pressed Coconut Oil for tempering"
      ],
      ingredientsTa: [
        "1 கப் துருவிய தேங்காய்",
        "2 டீஸ்பூன் பொட்டுக்கடலை",
        "பச்சை மிளகாய் & இஞ்சி",
        "2 டீஸ்பூன் சிறாழி தேங்காய் எண்ணெய்"
      ],
      stepsEn: [
        "Grind fresh coconut, roasted gram, chillies, ginger, and salt with minimal water.",
        "Heat Sirazhi Coconut Oil in a small pan, crackle mustard seeds, urad dal, and curry leaves.",
        "Pour tempering over chutney for that irresistible authentic coastal aroma!"
      ],
      stepsTa: [
        "தேங்காய், பொட்டுக்கடலை, மிளகாய் அரைக்கவும்.",
        "சிறாழி தேங்காய் எண்ணெயில் கடுகு, கறிவேப்பிலை தாளித்து பரிமாறவும்!"
      ]
    }
  ];

  return (
    <section id="recipes" className="py-16 md:py-24 bg-white border-y border-[#e6dfcf]">
      <div className="container-custom">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="badge-gold font-extrabold">Flavor & Health Synergy</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] font-heading">
            {lang === 'en' ? 'Traditional Recipes with Cold Pressed Oils' : 'பாரம்பரிய சமையல் குறிப்புகள்'}
          </h2>
          <p className="text-base text-[#556b62]">
            {lang === 'en' 
              ? 'Elevate your daily home cooking with rich natural aromas and deep heritage flavors' 
              : 'எங்கள் மரச்செக்கு எண்ணெய்களுடன் உங்கள் வீட்டின் சுவையை பல மடங்கு உயர்த்துங்கள்'}
          </p>
        </div>

        {/* Recipe Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {recipes.map((recipe) => {
            const isExpanded = expandedRecipe === recipe.id;
            const title = lang === 'en' ? recipe.titleEn : recipe.titleTa;
            const oilUsed = lang === 'en' ? recipe.oilUsedEn : recipe.oilUsedTa;
            const ingredients = lang === 'en' ? recipe.ingredientsEn : recipe.ingredientsTa;
            const steps = lang === 'en' ? recipe.stepsEn : recipe.stepsTa;

            return (
              <div 
                key={recipe.id}
                className="bg-[#faf6ee] rounded-3xl overflow-hidden border border-[#e6dfcf] hover-lift flex flex-col justify-between shadow-xs h-full"
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
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-[11px] font-extrabold text-[#d4a017] uppercase tracking-wider block">
                      Recommended Oil
                    </span>
                    <p className="text-xs font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-lg inline-block">
                      {oilUsed}
                    </p>

                    <h3 className="text-xl font-bold text-[#1b4332] font-heading pt-1">
                      {title}
                    </h3>
                  </div>

                  {/* Accordion Toggle for Steps */}
                  <div className="space-y-3 pt-2">
                    <button
                      onClick={() => setExpandedRecipe(isExpanded ? null : recipe.id)}
                      className="w-full py-2.5 px-4 rounded-xl bg-white border border-[#e6dfcf] text-xs font-bold text-[#1b4332] flex items-center justify-between hover:border-[#1b4332] transition-colors cursor-pointer"
                    >
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-4 h-4 text-[#d4a017] shrink-0" />
                        <span>{isExpanded ? (lang === 'en' ? 'Hide Recipe' : 'மறைக்கவும்') : (lang === 'en' ? 'View Ingredients & Method' : 'செய்முறை பார்க்க')}</span>
                      </span>
                      {isExpanded ? <ChevronUp className="w-4 h-4 shrink-0" /> : <ChevronDown className="w-4 h-4 shrink-0" />}
                    </button>

                    {isExpanded && (
                      <div className="bg-white p-4 rounded-2xl border border-[#e6dfcf] text-left space-y-3 text-xs animate-fadeIn shadow-xs">
                        <div>
                          <p className="font-extrabold text-[#1b4332] mb-1">Ingredients:</p>
                          <ul className="list-disc list-inside space-y-1 text-[#556b62]">
                            {ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                          </ul>
                        </div>
                        <div className="pt-2 border-t border-gray-100">
                          <p className="font-extrabold text-[#1b4332] mb-1">Preparation Steps:</p>
                          <ol className="list-decimal list-inside space-y-1.5 text-[#556b62]">
                            {steps.map((st, s) => <li key={s}>{st}</li>)}
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
