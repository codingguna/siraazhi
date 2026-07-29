import React, { useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, onValue, set } from 'firebase/database';
import { Edit2, Trash2, Plus, X, Save } from 'lucide-react';

export default function ProductManager() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // null = list view, object = editing existing or creating new
  const [editingProduct, setEditingProduct] = useState(null);
  const [isNew, setIsNew] = useState(false);

  useEffect(() => {
    const productsRef = ref(database, 'products');
    const unsubscribe = onValue(productsRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setProducts(Array.isArray(data) ? data : Object.values(data));
      } else {
        setProducts([]);
      }
      setLoading(false);
    }, (error) => {
      console.error("Firebase error:", error);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    let updatedProducts = [...products];

    if (isNew) {
      // Check for unique ID
      if (updatedProducts.find(p => p.id === editingProduct.id)) {
        alert("Product ID already exists!");
        return;
      }
      updatedProducts.push(editingProduct);
    } else {
      const idx = updatedProducts.findIndex(p => p.id === editingProduct.id);
      if (idx !== -1) {
        updatedProducts[idx] = editingProduct;
      }
    }

    try {
      await set(ref(database, 'products'), updatedProducts);
      setEditingProduct(null);
      setIsNew(false);
    } catch (error) {
      console.error("Error saving product:", error);
      alert("Failed to save product to database.");
    }
  };

  const handleDelete = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
    
    const updatedProducts = products.filter(p => p.id !== productId);
    try {
      await set(ref(database, 'products'), updatedProducts);
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product.");
    }
  };

  const openNewForm = () => {
    setIsNew(true);
    setEditingProduct({
      id: '',
      category: 'oils',
      nameEn: '',
      nameTa: '',
      badge: '',
      tagline: '',
      descriptionEn: '',
      descriptionTa: '',
      image: '/assets/coconut_oil.png',
      bestForEn: '',
      bestForTa: '',
      variants: [{ size: '', price: 0, originalPrice: 0 }],
      nutrition: { energy: '', totalFat: '', saturatedFat: '', MUFA: '', PUFA: '' }
    });
  };

  const handleVariantChange = (index, field, value) => {
    const newVariants = [...editingProduct.variants];
    newVariants[index][field] = field === 'price' || field === 'originalPrice' ? Number(value) : value;
    setEditingProduct({ ...editingProduct, variants: newVariants });
  };

  const addVariant = () => {
    setEditingProduct({
      ...editingProduct,
      variants: [...editingProduct.variants, { size: '', price: 0, originalPrice: 0 }]
    });
  };

  const removeVariant = (index) => {
    const newVariants = editingProduct.variants.filter((_, i) => i !== index);
    setEditingProduct({ ...editingProduct, variants: newVariants });
  };

  if (loading) {
    return <div className="p-8 text-center font-bold text-[#1b4332]">Loading Products...</div>;
  }

  // --- FORM VIEW ---
  if (editingProduct) {
    return (
      <div className="bg-white rounded-3xl border border-[#e6dfcf] p-6 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-[#1b4332]">{isNew ? 'Add New Product' : 'Edit Product'}</h3>
          <button onClick={() => setEditingProduct(null)} className="p-2 hover:bg-gray-100 rounded-full">
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <form onSubmit={handleSave} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">Product ID (Unique)</label>
              <input required disabled={!isNew} value={editingProduct.id} onChange={e => setEditingProduct({...editingProduct, id: e.target.value})} className="w-full border border-gray-300 rounded-lg p-2 text-sm disabled:bg-gray-100" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">Category</label>
              <select value={editingProduct.category} onChange={e => setEditingProduct({...editingProduct, category: e.target.value})} className="w-full border border-gray-300 rounded-lg p-2 text-sm">
                <option value="oils">Oils</option>
                <option value="seeds">Seeds</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">Name (English)</label>
              <input required value={editingProduct.nameEn} onChange={e => setEditingProduct({...editingProduct, nameEn: e.target.value})} className="w-full border border-gray-300 rounded-lg p-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">Name (Tamil)</label>
              <input value={editingProduct.nameTa} onChange={e => setEditingProduct({...editingProduct, nameTa: e.target.value})} className="w-full border border-gray-300 rounded-lg p-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">Image URL or Path</label>
              <input required value={editingProduct.image} onChange={e => setEditingProduct({...editingProduct, image: e.target.value})} className="w-full border border-gray-300 rounded-lg p-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">Badge Text</label>
              <input value={editingProduct.badge} onChange={e => setEditingProduct({...editingProduct, badge: e.target.value})} className="w-full border border-gray-300 rounded-lg p-2 text-sm" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-600 mb-1">Tagline</label>
              <input required value={editingProduct.tagline} onChange={e => setEditingProduct({...editingProduct, tagline: e.target.value})} className="w-full border border-gray-300 rounded-lg p-2 text-sm" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-600 mb-1">Description (English)</label>
              <textarea required value={editingProduct.descriptionEn} onChange={e => setEditingProduct({...editingProduct, descriptionEn: e.target.value})} className="w-full border border-gray-300 rounded-lg p-2 text-sm h-20" />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-600 mb-1">Description (Tamil)</label>
              <textarea value={editingProduct.descriptionTa} onChange={e => setEditingProduct({...editingProduct, descriptionTa: e.target.value})} className="w-full border border-gray-300 rounded-lg p-2 text-sm h-20" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">Best For (English)</label>
              <input value={editingProduct.bestForEn} onChange={e => setEditingProduct({...editingProduct, bestForEn: e.target.value})} className="w-full border border-gray-300 rounded-lg p-2 text-sm" />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">Best For (Tamil)</label>
              <input value={editingProduct.bestForTa} onChange={e => setEditingProduct({...editingProduct, bestForTa: e.target.value})} className="w-full border border-gray-300 rounded-lg p-2 text-sm" />
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <div className="flex justify-between items-center mb-3">
              <h4 className="font-bold text-[#1b4332]">Variants (Sizes & Prices)</h4>
              <button type="button" onClick={addVariant} className="text-xs bg-emerald-600 text-white px-3 py-1.5 rounded-lg font-bold flex items-center gap-1">
                <Plus className="w-3 h-3" /> Add Variant
              </button>
            </div>
            {editingProduct.variants.map((variant, idx) => (
              <div key={idx} className="flex gap-2 items-center mb-2">
                <input required placeholder="Size (e.g. 250ml)" value={variant.size} onChange={e => handleVariantChange(idx, 'size', e.target.value)} className="flex-1 border border-gray-300 rounded-lg p-2 text-sm" />
                <input required type="number" placeholder="Price" value={variant.price} onChange={e => handleVariantChange(idx, 'price', e.target.value)} className="w-24 border border-gray-300 rounded-lg p-2 text-sm" />
                <input type="number" placeholder="Original Price" value={variant.originalPrice} onChange={e => handleVariantChange(idx, 'originalPrice', e.target.value)} className="w-32 border border-gray-300 rounded-lg p-2 text-sm" />
                {editingProduct.variants.length > 1 && (
                  <button type="button" onClick={() => removeVariant(idx)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg">
                    <Trash2 className="w-4 h-4" />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
            <h4 className="font-bold text-[#1b4332] mb-3">Nutrition Facts</h4>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              <div>
                <label className="block text-[10px] font-bold text-gray-500 mb-1">Energy</label>
                <input value={editingProduct.nutrition.energy} onChange={e => setEditingProduct({...editingProduct, nutrition: {...editingProduct.nutrition, energy: e.target.value}})} className="w-full border border-gray-300 rounded-lg p-1.5 text-xs" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 mb-1">Total Fat</label>
                <input value={editingProduct.nutrition.totalFat} onChange={e => setEditingProduct({...editingProduct, nutrition: {...editingProduct.nutrition, totalFat: e.target.value}})} className="w-full border border-gray-300 rounded-lg p-1.5 text-xs" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 mb-1">Sat. Fat</label>
                <input value={editingProduct.nutrition.saturatedFat} onChange={e => setEditingProduct({...editingProduct, nutrition: {...editingProduct.nutrition, saturatedFat: e.target.value}})} className="w-full border border-gray-300 rounded-lg p-1.5 text-xs" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 mb-1">MUFA</label>
                <input value={editingProduct.nutrition.MUFA} onChange={e => setEditingProduct({...editingProduct, nutrition: {...editingProduct.nutrition, MUFA: e.target.value}})} className="w-full border border-gray-300 rounded-lg p-1.5 text-xs" />
              </div>
              <div>
                <label className="block text-[10px] font-bold text-gray-500 mb-1">PUFA</label>
                <input value={editingProduct.nutrition.PUFA} onChange={e => setEditingProduct({...editingProduct, nutrition: {...editingProduct.nutrition, PUFA: e.target.value}})} className="w-full border border-gray-300 rounded-lg p-1.5 text-xs" />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
            <button type="button" onClick={() => setEditingProduct(null)} className="px-5 py-2.5 text-sm font-bold text-gray-600 hover:bg-gray-100 rounded-xl">Cancel</button>
            <button type="submit" className="px-6 py-2.5 text-sm font-bold bg-[#1b4332] text-white rounded-xl shadow-md hover:bg-emerald-900 flex items-center gap-2">
              <Save className="w-4 h-4" /> Save to Database
            </button>
          </div>
        </form>
      </div>
    );
  }

  // --- LIST VIEW ---
  return (
    <div className="bg-white rounded-3xl border border-[#e6dfcf] p-6 shadow-sm overflow-hidden">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-[#1b4332]">Manage Products</h3>
        <button onClick={openNewForm} className="btn-gold py-2 px-4 text-xs flex items-center gap-2">
          <Plus className="w-4 h-4" /> Add New Product
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead>
            <tr className="border-b border-gray-200 text-gray-400 font-extrabold uppercase">
              <th className="py-3 px-4 w-16">Image</th>
              <th className="py-3 px-4">Product Name</th>
              <th className="py-3 px-4">Variants</th>
              <th className="py-3 px-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map(p => (
              <tr key={p.id} className="hover:bg-[#faf6ee]/50">
                <td className="py-3 px-4">
                  <img src={p.image} alt={p.nameEn} className="w-10 h-10 object-cover rounded-lg border border-gray-200 bg-white" />
                </td>
                <td className="py-3 px-4">
                  <p className="font-bold text-[#1b4332] text-sm">{p.nameEn}</p>
                  <p className="text-gray-500 font-medium">{p.id}</p>
                </td>
                <td className="py-3 px-4">
                  <div className="flex flex-wrap gap-1">
                    {p.variants.map((v, i) => (
                      <span key={i} className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2 py-0.5 rounded-md text-[10px] font-bold">
                        {v.size}: ₹{v.price}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-3 px-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button onClick={() => { setEditingProduct({...p}); setIsNew(false); }} className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg" title="Edit">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button onClick={() => handleDelete(p.id)} className="p-2 text-red-600 hover:bg-red-50 rounded-lg" title="Delete">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {products.length === 0 && (
              <tr>
                <td colSpan="4" className="py-8 text-center text-gray-500">No products found in database.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
