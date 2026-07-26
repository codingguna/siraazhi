export const productsData = [
  {
    id: "coconut-oil",
    category: "oils",
    nameEn: "Traditional Coconut Oil (தேங்காய் எண்ணெய்)",
    nameTa: "பாரம்பரிய செக்கு தேங்காய் எண்ணெய்",
    tagline: "Extracted from sun-dried sulfur-free copra using native Vagai wooden Marachekku.",
    rating: 4.9,
    reviewCount: 342,
    badge: "Bestseller",
    smokePoint: "177°C (350°F)",
    bestForEn: "South Indian Cooking, Deep Frying, Hair & Body Massage, Oil Pulling",
    bestForTa: "சமையல், பலகாரம் பொரித்தல், தலைமுடி மற்றும் உடற்பயிற்சி",
    nutrition: {
      lauricAcid: "52%",
      mctFats: "65%",
      transFat: "0g",
      cholesterol: "0mg"
    },
    image: "/assets/coconut_oil.png",
    variants: [
      { size: "500 ml", price: 170, originalPrice: 190, inStock: true },
      { size: "1 Litre", price: 330, originalPrice: 360, inStock: true },
      { size: "5 Litre Can", price: 1580, originalPrice: 1750, inStock: true }
    ],
    descriptionEn: "Sirazhi Cold Pressed Coconut Oil is prepared from hand-picked, sun-dried copra sourced directly from organic farmers in Tamil Nadu. Extracted in traditional wooden mills without heat or chemical solvents, maintaining rich lauric acid and natural aroma.",
    descriptionTa: "சிறாழி மரசெக்கு தேங்காய் எண்ணெய், கந்தகம் சேர்க்காமல் இயற்கையாக காயவைக்கப்பட்ட கொப்பரைத் தேங்காயிலிருந்து பாரம்பரிய முறையில் தயாரிக்கப்படுகிறது."
  },
  {
    id: "groundnut-oil",
    category: "oils",
    nameEn: "Cold Pressed Groundnut Oil (கடலை எண்ணெய்)",
    nameTa: "பாரம்பரிய செக்கு கடலை எண்ணெய்",
    tagline: "Golden nutty oil extracted from premium hand-sorted native peanuts.",
    rating: 4.8,
    reviewCount: 289,
    badge: "100% Pure",
    smokePoint: "225°C (437°F)",
    bestForEn: "Daily Curry Cooking, Tiffin Items, Deep Frying, Sautéing",
    bestForTa: "தினசரி சமையல், காரக் குழம்பு, தோசை, பொரியல்",
    nutrition: {
      vitaminE: "75% RDA",
      monounsaturated: "48%",
      transFat: "0g",
      cholesterol: "0mg"
    },
    image: "/assets/groundnut_oil.png",
    variants: [
      { size: "500 ml", price: 145, originalPrice: 165, inStock: true },
      { size: "1 Litre", price: 280, originalPrice: 310, inStock: true },
      { size: "5 Litre Can", price: 1350, originalPrice: 1500, inStock: true }
    ],
    descriptionEn: "Our Marachekku Groundnut Oil retains natural Vitamin E and heart-healthy monounsaturated fats. It has a high smoke point perfect for traditional Indian deep-frying while adding a warm, subtle nutty flavor.",
    descriptionTa: "சிறாழி கடலை எண்ணெய், தரமான நிலக்கடலையிலிருந்து மரசெக்கில் குறைந்த வெப்பத்தில் ஆட்டப்படுகிறது. வைட்டமின் E சத்துக்கள் நிறைந்தது."
  },
  {
    id: "sesame-oil",
    category: "oils",
    nameEn: "Gingelly / Sesame Oil (நல்லெண்ணெய்)",
    nameTa: "பாரம்பரிய நல்லெண்ணெய் (எள்ளெண்ணெய்)",
    tagline: "Rich aroma cold pressed sesame oil combined with natural palm jaggery.",
    rating: 4.95,
    reviewCount: 412,
    badge: "Traditional Special",
    smokePoint: "177°C (350°F)",
    bestForEn: "Vatha Kuzhambu, Idli Podi Dip, Oil Bath, Ayurvedic Health Routine",
    bestForTa: "இட்லி பொடி தொட்டுக்க, வத்தக் குழம்பு, எண்ணெய் குளியல்",
    nutrition: {
      sesamol: "High",
      omega6: "41%",
      transFat: "0g",
      calciumAbsorption: "Supports"
    },
    image: "/assets/sesame_oil.png",
    variants: [
      { size: "500 ml", price: 210, originalPrice: 240, inStock: true },
      { size: "1 Litre", price: 410, originalPrice: 460, inStock: true },
      { size: "5 Litre Can", price: 1980, originalPrice: 2200, inStock: true }
    ],
    descriptionEn: "Cold pressed using black sesame seeds and pure native palm jaggery (Karupatti) in Vagai wood press. The jaggery naturally neutralizes bitterness and produces a thick, intensely aromatic dark gold oil.",
    descriptionTa: "கருப்பு எள் மற்றும் பனை வெல்லம் சேர்த்து பாரம்பரிய மரசெக்கில் ஆட்டப்பட்ட உயர்ந்த ரக நல்லெண்ணெய்."
  },
  {
    id: "copra-coconut-seeds",
    category: "seeds",
    nameEn: "Sun-Dried Coconut Copra (உலர்ந்த கொப்பரை)",
    nameTa: "தரமான உலர்ந்த கொப்பரைத் தேங்காய்",
    tagline: "Grade-A sulfur-free coconut copra halves ready for oil extraction & food prep.",
    rating: 4.7,
    reviewCount: 94,
    badge: "Farm Direct",
    smokePoint: "N/A",
    bestForEn: "Home Oil Extraction, Sweets, Desserts, Wholesale Buyers",
    bestForTa: "எண்ணெய் தயாரிப்பு, பலகாரங்கள், மொத்த வியாபாரம்",
    nutrition: {
      fatContent: "64%",
      moisture: "< 5%",
      purity: "100%",
      sulfur: "0%"
    },
    image: "/assets/copra_seeds.png",
    variants: [
      { size: "1 Kg Pack", price: 190, originalPrice: 220, inStock: true },
      { size: "5 Kg Sack", price: 920, originalPrice: 1050, inStock: true },
      { size: "50 Kg Jute Bag", price: 8900, originalPrice: 10000, inStock: true }
    ],
    descriptionEn: "Sun-dried in hygienic, elevated drying beds. Naturally cured without chemical bleaching or sulfur dioxide smoking.",
    descriptionTa: "இயற்கையான வெயிலில் உலர்த்தப்பட்ட கந்தகமற்ற தரமான கொப்பரைத் தேங்காய்."
  },
  {
    id: "raw-groundnuts",
    category: "seeds",
    nameEn: "Raw Peanuts / Groundnut Kernels (நிலக்கடலை பருப்பு)",
    nameTa: "இயற்கை நிலக்கடலை பருப்பு",
    tagline: "Bold size, high oil content peanut seeds direct from Kongu region farmers.",
    rating: 4.85,
    reviewCount: 156,
    badge: "High Oil Content",
    smokePoint: "N/A",
    bestForEn: "Snacking, Chutneys, Roasting, Commercial Cold Press Mills",
    bestForTa: "ஸ்நாக்ஸ், சட்னி, வறுக்க, எண்ணெய் ஆட்ட",
    nutrition: {
      protein: "26g/100g",
      oilYield: "48%",
      moisture: "6%",
      aflatoxin: "Tested Negative"
    },
    image: "/assets/raw_peanuts.png",
    variants: [
      { size: "1 Kg Pack", price: 150, originalPrice: 175, inStock: true },
      { size: "5 Kg Sack", price: 720, originalPrice: 820, inStock: true },
      { size: "50 Kg Jute Bag", price: 6800, originalPrice: 7600, inStock: true }
    ],
    descriptionEn: "Unroasted, whole peanut kernels cleaned and double-sorted. Ideal for culinary use or oil extraction.",
    descriptionTa: "சுத்திகரிக்கப்பட்ட, உயர்தர நிலக்கடலை பருப்புகள். சமையலுக்கும் எண்ணெய் தயாரிப்பிற்கும் ஏற்றது."
  },
  {
    id: "black-sesame-seeds",
    category: "seeds",
    nameEn: "Native Black Sesame Seeds (கருப்பு எள்)",
    nameTa: "பாரம்பரிய நாட்டு கருப்பு எள்",
    tagline: "Unpolished, nutrient-rich native black sesame seeds.",
    rating: 4.9,
    reviewCount: 201,
    badge: "Calcium Rich",
    smokePoint: "N/A",
    bestForEn: "Ellu Ladoo, Rice Topping, Sesame Oil Extraction, Medicinal Use",
    bestForTa: "எள்ளு உருண்டை, சமையல், நல்லெண்ணெய் தயாரிப்பு",
    nutrition: {
      calcium: "975mg/100g",
      iron: "14.5mg/100g",
      purity: "99.5%",
      admixture: "< 0.5%"
    },
    image: "/assets/black_sesame.png",
    variants: [
      { size: "500 g Pack", price: 110, originalPrice: 130, inStock: true },
      { size: "1 Kg Pack", price: 210, originalPrice: 245, inStock: true },
      { size: "25 Kg Jute Bag", price: 4900, originalPrice: 5500, inStock: true }
    ],
    descriptionEn: "Machine cleaned native black sesame seeds packed with natural iron, calcium, and plant lignans.",
    descriptionTa: "இயற்கையான முறையில் சுத்தம் செய்யப்பட்ட கால்சியம் நிறைந்த கருப்பு எள் விதைகள்."
  },
  {
    id: "trio-combo-pack",
    category: "packs",
    nameEn: "Sirazhi Pure Oil Trio Bundle (மூன்று எண்ணெய் தொகுப்பு)",
    nameTa: "சிறாழி 3 எண்ணெய் சிறப்பு தொகுப்பு",
    tagline: "1 Litre Coconut + 1 Litre Groundnut + 1 Litre Sesame Oil in custom gift box.",
    rating: 4.98,
    reviewCount: 520,
    badge: "Save 15%",
    smokePoint: "Various",
    bestForEn: "Complete Kitchen Upgrade, Festive Gifting, Health Conscious Homes",
    bestForTa: "குடும்ப பயன்பாட்டிற்கு, பரிசளிக்க, சிறந்த சேமிப்பு",
    nutrition: {
      variety: "3 Essential Oils",
      totalVolume: "3 Litres",
      savings: "₹170 OFF"
    },
    image: "/assets/combo_pack.png",
    variants: [
      { size: "3 x 1 Litre Set", price: 850, originalPrice: 1020, inStock: true },
      { size: "3 x 5 Litre Can Set", price: 4490, originalPrice: 5100, inStock: true }
    ],
    descriptionEn: "Get all 3 essential cold pressed oils in one bundle: 1L Coconut Oil, 1L Groundnut Oil, and 1L Sesame Oil. Delivered in eco-friendly protective packaging.",
    descriptionTa: "மூன்று அத்தியாவசிய மரசெக்கு எண்ணெய்களின் சிறப்பு தொகுப்பு. 1லி தேங்காய் + 1லி கடலை + 1லி நல்லெண்ணெய்."
  }
];
