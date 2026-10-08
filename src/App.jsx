import React, { useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TrustBadges from './components/TrustBadges';
import ProductCatalog from './components/ProductCatalog';
import ProcessVisualizer from './components/ProcessVisualizer';
import HealthBenefits from './components/HealthBenefits';
import RecipesSection from './components/RecipesSection';
import CartDrawer from './components/CartDrawer';
import AdminDashboard from './components/AdminDashboard';
import Footer from './components/Footer';

export default function App() {
  const [lang, setLang] = useState('en');
  const [activeSection, setActiveSection] = useState('home');
  const [isAdmin] = useState(window.location.pathname.toLowerCase() === '/admindashboard');
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Shopping Cart state
  const [cartItems, setCartItems] = useState([]);

  // Toast notification state
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 4000);
  };

  const handleAddToCart = (newItem) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.productId === newItem.productId && item.size === newItem.size
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += newItem.quantity;
        return updated;
      }
      return [...prev, newItem];
    });

    showToast(
      lang === 'en' 
        ? `Added ${newItem.name} (${newItem.size}) to cart!` 
        : `கூடையில் சேர்க்கப்பட்டது!`,
      'success'
    );
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId, size, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(productId, size);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.productId === productId && item.size === size
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveItem = (productId, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.productId === productId && item.size === size))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((acc, i) => acc + i.quantity, 0);

  const handleSectionNavigate = (id) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf6ee] text-[#1c2723] antialiased selection:bg-[#d4a017] selection:text-slate-950">
      
      {/* Toast Alert Banner */}
      {toast && (
        <div className="fixed bottom-6 right-6 z-[70] animate-fadeIn" role="status" aria-live="polite">
          <div className={`px-5 py-3 rounded-2xl shadow-xl border flex items-center gap-3 text-xs font-extrabold ${
            toast.type === 'error'
              ? 'bg-red-900 text-white border-red-700'
              : 'bg-[#1b4332] text-[#f4c430] border-[#d4a017]'
          }`}>
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <Navbar 
        lang={lang}
        setLang={setLang}
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        isAdmin={isAdmin}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* View Switcher: Admin Mode vs Customer Store */}
      {isAdmin ? (
        <AdminDashboard 
          lang={lang}
          onCloseAdmin={() => { window.location.href = '/'; }}
          onToast={showToast}
        />
      ) : (
        <main className="flex-1">
          <HeroSection 
            lang={lang}
            onExploreClick={() => handleSectionNavigate('products')}
          />

          <TrustBadges lang={lang} />

          <ProductCatalog 
            lang={lang}
            onAddToCart={handleAddToCart}
          />

          <ProcessVisualizer lang={lang} />

          <HealthBenefits lang={lang} />

          <RecipesSection lang={lang} />
        </main>
      )}

      {/* Cart Drawer */}
      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        lang={lang}
        onToast={showToast}
      />

      {/* Footer */}
      <Footer 
        lang={lang}
        onNavigate={handleSectionNavigate}
      />
    </div>
  );
}
