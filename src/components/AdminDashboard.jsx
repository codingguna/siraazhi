import React, { useState, useEffect } from 'react';
import { ShoppingBag, TrendingUp, Package, Clock, X } from 'lucide-react';
import { translations } from '../data/translations';
import ProductManager from './ProductManager';
import { database } from '../firebase';
import { ref, onValue, set } from 'firebase/database';

export default function AdminDashboard({ lang, onCloseAdmin, onToast }) {
  const t = translations[lang].admin;
  const [activeTab, setActiveTab] = useState('orders');

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const ordersRef = ref(database, 'orders');

    const unsubOrders = onValue(ordersRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setOrders(Array.isArray(data) ? data : Object.values(data));
      } else {
        setOrders([]);
      }
    });

    return () => unsubOrders();
  }, []);

  const salesToday = orders.reduce((sum, o) => sum + (Number(o.total) || 0), 0);
  const pendingOrders = orders.filter(o => o.status === 'Processing').length;

  const handleUpdateOrderStatus = (orderId) => {
    const updatedOrders = orders.map(o => {
      if (o.id === orderId) {
        const nextStatus = o.status === 'Processing' ? 'Dispatched' : o.status === 'Dispatched' ? 'Delivered' : 'Processing';
        return { ...o, status: nextStatus };
      }
      return o;
    });
    setOrders(updatedOrders);
    set(ref(database, 'orders'), updatedOrders).catch(err => console.error("Failed to update order status", err));
    onToast(lang === 'en' ? `Order ${orderId} Status Updated!` : `ஆர்டர் நிலை புதுப்பிக்கப்பட்டது!`, 'success');
  };

  return (
    <div className="min-h-screen bg-[#faf6ee] pt-6 pb-16">
      <div className="container-custom space-y-6">
        
        {/* Header Bar */}
        <div className="bg-[#1b4332] text-white p-6 rounded-3xl shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="bg-[#d4a017] text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Siraazhi Owner Portal
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#faf6ee]">
              {t.title}
            </h2>
            <p className="text-xs text-emerald-200">
              {t.subtitle}
            </p>
          </div>

          <button
            onClick={onCloseAdmin}
            className="btn-gold py-2 px-4 text-xs shrink-0 cursor-pointer"
          >
            <X className="w-4 h-4" />
            <span>Return to Store Front</span>
          </button>
        </div>

        {/* 4 Metric KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-[#e6dfcf] shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#1b4332] flex items-center justify-center font-bold">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">{t.salesToday}</p>
              <p className="text-2xl font-extrabold text-[#1b4332] font-heading">₹{salesToday}</p>
              <p className="text-[10px] text-emerald-700 font-bold">Total Revenue</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#e6dfcf] shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-[#d4a017] flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">{t.ordersPending}</p>
              <p className="text-2xl font-extrabold text-[#1b4332] font-heading">{pendingOrders} Orders</p>
              <p className="text-[10px] text-amber-700 font-bold">Requires packing</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#e6dfcf] shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
              <Package className="w-6 h-6 text-[#d4a017]" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">{t.seedStock}</p>
              <p className="text-2xl font-extrabold text-[#1b4332] font-heading">0 Tons</p>
              <p className="text-[10px] text-[#2d6a4f] font-bold">Copra & Peanuts</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#e6dfcf] shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#d8f3dc] text-[#1b4332] flex items-center justify-center font-bold">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">{t.oilStock}</p>
              <p className="text-2xl font-extrabold text-[#1b4332] font-heading">0 Litres</p>
              <p className="text-[10px] text-emerald-700 font-bold">Settling Tanks</p>
            </div>
          </div>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex gap-2 border-b border-[#e6dfcf] pb-2">
          <button
            onClick={() => setActiveTab('orders')}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
              activeTab === 'orders'
                ? 'bg-[#1b4332] text-white shadow-sm'
                : 'bg-white text-gray-600 border border-[#e6dfcf]'
            }`}
          >
            {t.recentOrders} (4)
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
              activeTab === 'products'
                ? 'bg-[#1b4332] text-white shadow-sm'
                : 'bg-white text-gray-600 border border-[#e6dfcf]'
            }`}
          >
            Manage Products
          </button>
        </div>

        {/* Table View */}
        {activeTab === 'products' ? (
          <ProductManager lang={lang} />
        ) : (
          <div className="bg-white rounded-3xl border border-[#e6dfcf] p-6 shadow-sm overflow-x-auto text-left">
            {activeTab === 'orders' && (
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-200 text-gray-400 font-extrabold uppercase">
                  <th className="py-3 px-4">Order ID</th>
                  <th className="py-3 px-4">{t.customerName}</th>
                  <th className="py-3 px-4">{t.items}</th>
                  <th className="py-3 px-4">{t.total}</th>
                  <th className="py-3 px-4">{t.status}</th>
                  <th className="py-3 px-4 text-right">{t.action}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium">
                {orders.map((ord) => (
                  <tr key={ord.id} className="hover:bg-[#faf6ee]/50">
                    <td className="py-4 px-4 font-bold text-[#1b4332]">{ord.id}</td>
                    <td className="py-4 px-4 font-bold">
                      {ord.customer} <span className="text-gray-400 font-normal">({ord.city})</span>
                    </td>
                    <td className="py-4 px-4 text-gray-600">{ord.items}</td>
                    <td className="py-4 px-4 font-bold text-[#d4a017]">₹{ord.total}</td>
                    <td className="py-4 px-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold ${
                        ord.status === 'Delivered' 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : ord.status === 'Dispatched' 
                            ? 'bg-blue-100 text-blue-800' 
                            : 'bg-amber-100 text-amber-800'
                      }`}>
                        {ord.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button
                        onClick={() => handleUpdateOrderStatus(ord.id)}
                        className="px-3 py-1 bg-[#1b4332] text-white shadow-sm rounded-lg text-[11px] font-bold"
                      >
                        Advance Status
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        )}

      </div>
    </div>
  );
}
