import React, { useState } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, Tag, ArrowRight, ShieldCheck, CheckCircle2, Truck, CreditCard, Sparkles } from 'lucide-react';
import { translations } from '../data/translations';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem, 
  onClearCart,
  lang,
  onToast
}) {
  const t = translations[lang].cart;

  const [couponCode, setCouponCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  // Address & Order State
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [orderPlaced, setOrderPlaced] = useState(false);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const discountAmount = Math.round(subtotal * (discountPercent / 100));
  const shippingFee = subtotal >= 499 || subtotal === 0 ? 0 : 50;
  const grandTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const freeShippingThreshold = 499;
  const progressToFreeShipping = Math.min(100, Math.round((subtotal / freeShippingThreshold) * 100));

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (couponCode.toUpperCase() === 'SIRAAZHI10') {
      setDiscountPercent(10);
      onToast(lang === 'en' ? 'Coupon SIRAAZHI10 Applied! 10% Discount' : '10% தள்ளுபடி கூப்பன் பயன்படுத்தப்பட்டது!', 'success');
    } else if (couponCode.toUpperCase() === 'FREESHIP') {
      setDiscountPercent(5);
      onToast(lang === 'en' ? 'Special Voucher Applied!' : 'சிறப்பு கூப்பன் பயன்படுத்தப்பட்டது!', 'success');
    } else {
      onToast(lang === 'en' ? 'Invalid Coupon Code. Try: SIRAAZHI10' : 'தவறான கூப்பன். முயற்சிக்கவும்: SIRAAZHI10', 'error');
    }
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (!customerName || !phone || !address || !pincode) {
      onToast(lang === 'en' ? 'Please fill in all shipping fields' : 'தயவுசெய்து அனைத்து விவரங்களையும் பூர்த்தி செய்யவும்', 'error');
      return;
    }
    setOrderPlaced(true);
    onToast(lang === 'en' ? 'Order Confirmed! Thank you for ordering from Sirazhi.' : 'ஆர்டர் உறுதி செய்யப்பட்டது! நன்றி.', 'success');
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Slide-out Drawer */}
      <div className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white shadow-2xl flex flex-col justify-between border-l border-[#e6dfcf] animate-slideLeft">
        
        {/* Drawer Header */}
        <div className="p-5 bg-[#faf6ee] border-b border-[#e6dfcf] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#1b4332]" />
            <h3 className="font-extrabold text-[#1b4332] text-lg font-heading">
              {t.title}
            </h3>
            <span className="bg-[#1b4332] text-[#f4c430] text-xs font-bold px-2 py-0.5 rounded-full">
              {cartItems.length}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-gray-500 hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#d8f3dc]/60 px-5 py-2.5 border-b border-emerald-200 text-xs">
          {subtotal >= freeShippingThreshold ? (
            <p className="font-bold text-emerald-900 flex items-center gap-1.5">
              <Truck className="w-4 h-4 text-emerald-600" />
              🎉 You unlocked FREE Delivery across India!
            </p>
          ) : (
            <div>
              <p className="font-medium text-[#1b4332] mb-1">
                Add <strong>₹{freeShippingThreshold - subtotal}</strong> more for FREE Delivery!
              </p>
              <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                <div 
                  className="bg-[#1b4332] h-full transition-all duration-300"
                  style={{ width: `${progressToFreeShipping}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="py-16 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-[#faf6ee] text-gray-400 flex items-center justify-center mx-auto border border-[#e6dfcf]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <p className="text-sm font-semibold text-[#556b62]">
                {t.empty}
              </p>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div 
                key={idx}
                className="bg-[#faf6ee] p-3.5 rounded-2xl border border-[#e6dfcf] flex items-center gap-3"
              >
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-16 h-16 rounded-xl object-cover shrink-0 border border-gray-200"
                />
                <div className="flex-1 text-left">
                  <h4 className="font-extrabold text-[#1b4332] text-xs font-heading line-clamp-1">
                    {item.name}
                  </h4>
                  <p className="text-[11px] text-[#556b62] font-semibold">
                    Size: {item.size}
                  </p>
                  <p className="text-sm font-bold text-[#d4a017]">
                    ₹{item.price}
                  </p>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-1.5 bg-white border border-[#e6dfcf] rounded-xl px-2 py-1">
                  <button 
                    onClick={() => onUpdateQuantity(item.productId, item.size, item.quantity - 1)}
                    className="text-gray-600 hover:text-[#1b4332] p-0.5"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="text-xs font-bold text-[#1b4332] px-1">
                    {item.quantity}
                  </span>
                  <button 
                    onClick={() => onUpdateQuantity(item.productId, item.size, item.quantity + 1)}
                    className="text-gray-600 hover:text-[#1b4332] p-0.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => onRemoveItem(item.productId, item.size)}
                  className="text-red-400 hover:text-red-600 p-1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer & Total */}
        {cartItems.length > 0 && (
          <div className="p-5 bg-[#faf6ee] border-t border-[#e6dfcf] space-y-3">
            
            {/* Coupon Code Form */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input
                type="text"
                placeholder="Coupon (e.g. SIRAAZHI10)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl border border-[#e6dfcf] text-xs uppercase text-[#1b4332] font-bold focus:outline-none"
              />
              <button
                type="submit"
                className="btn-outline py-2 px-3 text-xs"
              >
                <Tag className="w-3.5 h-3.5" />
                <span>{t.applyBtn}</span>
              </button>
            </form>

            {/* Price Calculations */}
            <div className="space-y-1.5 text-xs text-[#556b62] pt-2 border-t border-[#e6dfcf]">
              <div className="flex justify-between">
                <span>{t.subtotal}</span>
                <span className="font-bold text-[#1b4332]">₹{subtotal}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-emerald-700 font-bold">
                  <span>Coupon Discount (10%):</span>
                  <span>- ₹{discountAmount}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>{t.shipping}</span>
                <span className="font-bold text-[#1b4332]">
                  {shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}
                </span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-[#1b4332] pt-2 border-t border-gray-200">
                <span>{t.itemTotal}:</span>
                <span className="text-[#d4a017]">₹{grandTotal}</span>
              </div>
            </div>

            {/* Proceed to Order Button */}
            <button
              onClick={() => setCheckoutModalOpen(true)}
              className="w-full btn-gold justify-center py-3.5 text-sm cursor-pointer"
            >
              <span>{t.checkoutBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Checkout Preview Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 border border-[#e6dfcf] relative max-h-[90vh] overflow-y-auto text-left space-y-6">
            
            <button
              onClick={() => setCheckoutModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {orderPlaced ? (
              <div className="py-8 text-center space-y-4">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border-4 border-emerald-200 animate-bounce">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-extrabold text-[#1b4332] font-heading">
                  Order Successfully Placed!
                </h3>
                <p className="text-sm text-[#556b62]">
                  Thank you <strong>{customerName}</strong>. Your order ID <strong>#SRZ-98234</strong> has been logged.
                </p>
                <div className="bg-[#faf6ee] p-4 rounded-2xl border border-[#e6dfcf] text-xs text-left space-y-1">
                  <p><strong>Shipping Address:</strong> {address}, {city} - {pincode}</p>
                  <p><strong>Total Paid:</strong> ₹{grandTotal} ({paymentMethod.toUpperCase()})</p>
                  <p><strong>Expected Delivery:</strong> Within 2-3 Days</p>
                </div>
                <button
                  onClick={() => {
                    onClearCart();
                    setOrderPlaced(false);
                    setCheckoutModalOpen(false);
                    onClose();
                  }}
                  className="btn-gold text-xs py-3 px-6"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <form onSubmit={handlePlaceOrder} className="space-y-4">
                <div className="border-b border-gray-100 pb-3">
                  <span className="badge-gold">Step 2: Shipping & Order Summary</span>
                  <h3 className="text-xl font-bold text-[#1b4332] font-heading mt-1">
                    Checkout Details
                  </h3>
                </div>

                {/* Delivery Address Fields */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs font-bold text-[#1b4332] mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Meenakshi Sundaram"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-[#e6dfcf] text-xs text-[#1b4332]"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-[#1b4332] mb-1">Mobile Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98420 12345"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-[#e6dfcf] text-xs text-[#1b4332]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1b4332] mb-1">Pincode *</label>
                      <input
                        type="text"
                        required
                        placeholder="600001"
                        value={pincode}
                        onChange={(e) => setPincode(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-[#e6dfcf] text-xs text-[#1b4332]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#1b4332] mb-1">Door / Flat No, Street Address *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 45 Green Park Avenue"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-[#e6dfcf] text-xs text-[#1b4332]"
                    />
                  </div>
                </div>

                {/* Payment Selection */}
                <div>
                  <label className="block text-xs font-bold text-[#1b4332] mb-2">Payment Method Choice</label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('upi')}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all ${
                        paymentMethod === 'upi'
                          ? 'bg-[#1b4332] text-white border-[#1b4332]'
                          : 'bg-[#faf6ee] text-[#1b4332] border-[#e6dfcf]'
                      }`}
                    >
                      UPI / GPay
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all ${
                        paymentMethod === 'card'
                          ? 'bg-[#1b4332] text-white border-[#1b4332]'
                          : 'bg-[#faf6ee] text-[#1b4332] border-[#e6dfcf]'
                      }`}
                    >
                      Debit / Credit Card
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('cod')}
                      className={`p-2.5 rounded-xl border text-xs font-bold text-center transition-all ${
                        paymentMethod === 'cod'
                          ? 'bg-[#1b4332] text-white border-[#1b4332]'
                          : 'bg-[#faf6ee] text-[#1b4332] border-[#e6dfcf]'
                      }`}
                    >
                      Cash on Delivery
                    </button>
                  </div>
                </div>

                <div className="bg-[#faf6ee] p-3.5 rounded-xl border border-[#e6dfcf] flex items-center justify-between text-xs">
                  <span>Payable Amount:</span>
                  <span className="text-xl font-extrabold text-[#d4a017]">₹{grandTotal}</span>
                </div>

                <button
                  type="submit"
                  className="w-full btn-gold justify-center py-3 text-sm cursor-pointer"
                >
                  Confirm & Place Order (₹{grandTotal})
                </button>
              </form>
            )}

          </div>
        </div>
      )}
    </>
  );
}
