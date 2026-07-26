import React, { useState } from 'react';
import { ShoppingBag, TrendingUp, Package, Clock, X } from 'lucide-react';
import { translations } from '../data/translations';

export default function AdminDashboard({ lang, onCloseAdmin, onToast }) {
  const t = translations[lang].admin;
  const [activeTab, setActiveTab] = useState('orders');

  const [orders, setOrders] = useState([
    { id: '#SRZ-1089', customer: 'Venkatesh Babu', city: 'Madurai', items: '1L Coconut Oil x 2, 1L Sesame Oil x 1', total: 1070, status: 'Processing', date: 'Today, 10:30 AM' },
    { id: '#SRZ-1088', customer: 'Revathi Mohan', city: 'Coimbatore', items: '5L Groundnut Oil Can x 1', total: 1350, status: 'Dispatched', date: 'Today, 09:15 AM' },
    { id: '#SRZ-1087', customer: 'Deepak Raj', city: 'Chennai', items: 'Siraazhi Trio Bundle x 1', total: 850, status: 'Delivered', date: 'Yesterday' },
    { id: '#SRZ-1086', customer: 'Saritha Krishnan', city: 'Salem', items: '1Kg Raw Peanuts x 2', total: 300, status: 'Processing', date: 'Yesterday' }
  ]);

  const [leads] = useState([
    { id: 'LD-401', company: 'Kongu Hotels Pvt Ltd', contact: '+91 98421 88990', item: 'Bulk Groundnut Oil (Tin)', quantity: '500 Kg', status: 'New Quote Requested' },
    { id: 'LD-402', company: 'Aachi Foods Distributor', contact: '+91 94432 11009', item: 'Sun Dried Coconut Copra', quantity: '2,000 Kg', status: 'Sample Sent' },
    { id: 'LD-403', company: 'Natural Organic Mart', contact: '+91 97890 55432', item: 'Black Sesame Seeds', quantity: '250 Kg', status: 'Negotiating' }
  ]);

  const handleUpdateOrderStatus = (orderId) => {
    setOrders(prev => prev.map(o => {
      if (o.id === orderId) {
        const nextStatus = o.status === 'Processing' ? 'Dispatched' : o.status === 'Dispatched' ? 'Delivered' : 'Processing';
        return { ...o, status: nextStatus };
      }
      return o;
    }));
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
              <p className="text-2xl font-extrabold text-[#1b4332] font-heading">₹42,850</p>
              <p className="text-[10px] text-emerald-700 font-bold">+18% vs yesterday</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#e6dfcf] shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-[#d4a017] flex items-center justify-center font-bold">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">{t.ordersPending}</p>
              <p className="text-2xl font-extrabold text-[#1b4332] font-heading">14 Orders</p>
              <p className="text-[10px] text-amber-700 font-bold">Requires packing</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#e6dfcf] shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center font-bold">
              <Package className="w-6 h-6 text-[#d4a017]" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">{t.seedStock}</p>
              <p className="text-2xl font-extrabold text-[#1b4332] font-heading">4.2 Tons</p>
              <p className="text-[10px] text-[#2d6a4f] font-bold">Copra & Peanuts</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-[#e6dfcf] shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#d8f3dc] text-[#1b4332] flex items-center justify-center font-bold">
              <ShoppingBag className="w-6 h-6" />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium">{t.oilStock}</p>
              <p className="text-2xl font-extrabold text-[#1b4332] font-heading">1,850 Litres</p>
              <p className="text-[10px] text-emerald-700 font-bold">Settling Tanks Ok</p>
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
            onClick={() => setActiveTab('wholesale')}
            className={`px-5 py-2.5 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
              activeTab === 'wholesale'
                ? 'bg-[#1b4332] text-white shadow-sm'
                : 'bg-white text-gray-600 border border-[#e6dfcf]'
            }`}
          >
            {t.wholesaleLeads} (3)
          </button>
        </div>

        {/* Table View */}
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
                        className="px-3 py-1 bg-emerald-50 hover:bg-emerald-100 text-[#1b4332] border border-emerald-300 rounded-lg text-[11px] font-bold"
                      >
                        Advance Status
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {activeTab === 'wholesale' && (
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-gray-200 text-gray-400 font-extrabold uppercase">
                  <th className="py-3 px-4">Lead ID</th>
                  <th className="py-3 px-4">Company / Client</th>
                  <th className="py-3 px-4">Requested Item</th>
                  <th className="py-3 px-4">Quantity</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 font-medium">
                {leads.map((ld) => (
                  <tr key={ld.id} className="hover:bg-[#faf6ee]/50">
                    <td className="py-4 px-4 font-bold text-[#1b4332]">{ld.id}</td>
                    <td className="py-4 px-4 font-bold">
                      {ld.company} <br />
                      <span className="text-gray-400 font-normal text-[11px]">{ld.contact}</span>
                    </td>
                    <td className="py-4 px-4 text-gray-600">{ld.item}</td>
                    <td className="py-4 px-4 font-bold text-[#1b4332]">{ld.quantity}</td>
                    <td className="py-4 px-4">
                      <span className="bg-amber-100 text-amber-900 px-2.5 py-1 rounded-full text-[10px] font-bold">
                        {ld.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <a
                        href={`https://wa.me/${ld.contact.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-1 bg-emerald-600 text-white rounded-lg text-[11px] font-bold inline-block"
                      >
                        WhatsApp Sales
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

      </div>
    </div>
  );
}
