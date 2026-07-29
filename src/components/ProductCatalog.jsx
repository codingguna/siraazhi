import React, { useState, useEffect } from 'react';
import { ShoppingBag, Eye, Check, X, Droplet } from 'lucide-react';
import { translations } from '../data/translations';
import { database } from '../firebase';
import { ref, onValue } from 'firebase/database';

export default function ProductCatalog({ lang, onAddToCart, _onQuickView }) {
  const t = translations[lang].products;
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedVariants, setSelectedVariants] = useState({});
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  useEffect(() => {
    const productsRef = ref(database, 'products');

    const unsubscribe = onValue(productsRef, async (snapshot) => {
      try {
        if (snapshot.exists()) {
          const data = snapshot.val();
          const parsedData = Array.isArray(data) ? data : Object.values(data);
          setProductsData(parsedData);
          // Save a cached copy directly in the user's browser for offline/error fallback
          localStorage.setItem('cachedProducts', JSON.stringify(parsedData));
        } else {
          // If the database is truly empty, clear the list
          setProductsData([]);
        }
      } catch (error) {
        console.error("Error processing products from Firebase:", error);
        const cached = localStorage.getItem('cachedProducts');
        setProductsData(cached ? JSON.parse(cached) : []); // Fallback to cache, or empty
      } finally {
        setLoading(false);
      }
    }, (error) => {
      console.error("Firebase real-time error:", error);
      const cached = localStorage.getItem('cachedProducts');
      setProductsData(cached ? JSON.parse(cached) : []); // Fallback to cache, or empty
      setLoading(false);
    });

    // Cleanup the listener when the component unmounts
    return () => unsubscribe();
  }, []);

  const categories = [
    { id: 'all', label: t.all },
    { id: 'oils', label: t.oils }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  const getSelectedVariant = (product) => {
    const selectedIdx = selectedVariants[product.id] || 0;
    return product.variants[selectedIdx];
  };

  const handleVariantChange = (productId, variantIdx) => {
    setSelectedVariants(prev => ({
      ...prev,
      [productId]: variantIdx
    }));
  };

  const handleAddProduct = (product) => {
    const variant = getSelectedVariant(product);
    onAddToCart({
      productId: product.id,
      name: lang === 'en' ? product.nameEn : product.nameTa,
      image: product.image,
      size: variant.size,
      price: variant.price,
      quantity: 1
    });
  };

  return (
    <section id="products" className="py-10 md:py-12 bg-[#faf6ee]">
      <div className="container-custom">
        {loading && (
          <div className="text-center text-[#1b4332] font-bold py-10">
            Loading products from Firebase...
          </div>
        )}
        {!loading && (
          <>
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="badge-organic">100% Traditional Marachekku</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] font-heading">
            {t.title}
          </h2>
          <p className="text-base text-[#556b62]">
            {t.subtitle}
          </p>

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 pt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-extrabold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'text-white shadow-md scale-105 border-transparent'
                    : 'bg-white text-[#556b62] border border-[#e6dfcf] hover:border-[#1b4332] hover:text-[#1b4332]'
                }`}
                style={{ backgroundColor: activeCategory === cat.id ? '#1b4332' : undefined }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const currentVariant = getSelectedVariant(product);
            const name = lang === 'en' ? product.nameEn : product.nameTa;

            return (
              <div 
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#e6dfcf] hover-lift flex flex-col justify-between shadow-sm relative group"
              >

                {/* Quick View Button Overlay */}
                <button
                  onClick={() => setQuickViewProduct(product)}
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full transition-all shadow-md flex items-center justify-center cursor-pointer hover:scale-110"
                  style={{ backgroundColor: '#1b4332', color: 'white' }}
                >
                  <Eye className="w-4 h-4 " />
                </button>

                {/* Product Image */}
                <div className="relative h-64 bg-[#faf6ee] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Stock Status */}
                    <div className="flex items-center justify-end text-xs text-[#556b62] mb-1">
                      <span className="text-emerald-700 font-extrabold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> {t.inStock}
                      </span>
                    </div>

                    {/* Product Name */}
                    <h3 className="text-xl font-bold text-[#1b4332] font-heading leading-snug">
                      {name}
                    </h3>
                    
                    {/* Tagline */}
                    <p className="text-xs text-[#556b62] mt-1 line-clamp-2">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Volume / Size Variant Selector */}
                  <div>
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                      {t.volumeLabel}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {product.variants.map((variant, vIdx) => {
                        const isSelected = (selectedVariants[product.id] || 0) === vIdx;
                        return (
                          <button
                            key={vIdx}
                            onClick={() => handleVariantChange(product.id, vIdx)}
                            className={`py-2 px-1.5 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                              isSelected
                                ? 'text-white shadow-xs'
                                : 'bg-[#faf6ee] text-[#1b4332] border-[#e6dfcf] hover:border-[#1b4332]'
                            }`}
                            style={{ 
                              backgroundColor: isSelected ? '#1b4332' : undefined,
                              borderColor: isSelected ? '#1b4332' : undefined
                            }}
                          >
                            <div className="text-[11px] leading-tight font-medium">{variant.size}</div>
                            <div className={`text-xs font-extrabold mt-0.5 ${isSelected ? 'text-amber-300' : 'text-[#d4a017]'}`}>
                              ₹{variant.price}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Price & Add to Cart Footer */}
                  <div className="pt-3 border-t border-[#e6dfcf] flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-extrabold text-[#1b4332] font-heading">
                          ₹{currentVariant.price}
                        </span>
                        {currentVariant.originalPrice && (
                          <span className="text-xs text-gray-400 line-through">
                            ₹{currentVariant.originalPrice}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-emerald-700 font-semibold">Taxes included</span>
                    </div>

                    <button
                      onClick={() => handleAddProduct(product)}
                      className="btn-gold text-xs py-2.5 px-4 cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      <span>{t.addToCart}</span>
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
        </>
        )}
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#e6dfcf] relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="h-64 md:h-auto bg-[#faf6ee] relative">
                <img 
                  src={quickViewProduct.image} 
                  alt={quickViewProduct.nameEn} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 md:p-8 space-y-4 text-left">
                <span className="badge-gold">Siraazhi Certified</span>
                <h3 className="text-2xl font-bold text-[#1b4332] font-heading">
                  {lang === 'en' ? quickViewProduct.nameEn : quickViewProduct.nameTa}
                </h3>

                <p className="text-xs text-[#556b62] leading-relaxed">
                  {lang === 'en' ? quickViewProduct.descriptionEn : quickViewProduct.descriptionTa}
                </p>

                {/* Nutritional Highlights */}
                <div className="bg-[#faf6ee] p-3.5 rounded-2xl border border-[#e6dfcf]">
                  <p className="text-xs font-bold text-[#1b4332] uppercase tracking-wider mb-2 flex items-center gap-1">
                    <Droplet className="w-4 h-4 text-[#d4a017]" />
                    {t.nutrition}
                  </p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {Object.entries(quickViewProduct.nutrition).map(([key, val]) => (
                      <div key={key} className="bg-white p-2 rounded-lg border border-[#e6dfcf]">
                        <span className="text-gray-500 capitalize">{key}: </span>
                        <span className="font-bold text-[#1b4332]">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Best For */}
                <div>
                  <p className="text-xs font-bold text-[#1b4332] uppercase tracking-wider mb-1">{t.bestFor}</p>
                  <p className="text-xs text-emerald-800 font-medium">
                    {lang === 'en' ? quickViewProduct.bestForEn : quickViewProduct.bestForTa}
                  </p>
                </div>

                {/* Volume / Size Variant Selector in Modal */}
                <div>
                  <label className="block text-[11px] font-extrabold uppercase tracking-wider text-gray-500 mb-1.5">
                    {t.volumeLabel}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {quickViewProduct.variants.map((variant, vIdx) => {
                      const isSelected = (selectedVariants[quickViewProduct.id] || 0) === vIdx;
                      return (
                        <button
                          key={vIdx}
                          onClick={() => handleVariantChange(quickViewProduct.id, vIdx)}
                          className={`py-2 px-1.5 rounded-xl text-xs font-bold transition-all border text-center cursor-pointer ${
                            isSelected
                              ? 'text-white shadow-xs'
                              : 'bg-[#faf6ee] text-[#1b4332] border-[#e6dfcf] hover:border-[#1b4332]'
                          }`}
                          style={{ 
                            backgroundColor: isSelected ? '#1b4332' : undefined,
                            borderColor: isSelected ? '#1b4332' : undefined
                          }}
                        >
                          <div className="text-[11px] leading-tight font-medium">{variant.size}</div>
                          <div className={`text-xs font-extrabold mt-0.5 ${isSelected ? 'text-amber-300' : 'text-[#d4a017]'}`}>
                            ₹{variant.price}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#e6dfcf] flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-[#1b4332]">
                    ₹{getSelectedVariant(quickViewProduct).price}
                  </span>
                  <button
                    onClick={() => {
                      handleAddProduct(quickViewProduct);
                      setQuickViewProduct(null);
                    }}
                    className="btn-gold py-3 px-6 text-xs"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>{t.addToCart}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
