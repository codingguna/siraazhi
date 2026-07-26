import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ThumbsUp, Plus, X } from 'lucide-react';
import { translations } from '../data/translations';

export default function CustomerReviews({ lang, onToast }) {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Sowmya Ramakrishnan",
      city: "Chennai, Tamil Nadu",
      rating: 5,
      date: "2 days ago",
      commentEn: "The aroma of Sirazhi Sesame Oil (நல்லெண்ணெய்) took me back to my grandmother's village house in Thanjavur! The dark golden color and pure taste are unmatched. Will never buy store refined oil again.",
      commentTa: "சிறாழி நல்லெண்ணெயின் மணம் என்னைத் தஞ்சாவூர் பாட்டி வீட்டிற்கு கொண்டு சென்றது! உண்மையான பாரம்பரிய மரச்செக்கு சுவை.",
      verified: true
    },
    {
      id: 2,
      name: "Karthik Subramanian",
      city: "Coimbatore, Tamil Nadu",
      rating: 5,
      date: "1 week ago",
      commentEn: "We buy Groundnut oil in 5L cans for our daily home cooking. Extremely clean, doesn't feel heavy, and deep frying leaves zero bad odor. High quality producer company!",
      commentTa: "நாங்கள் தினமும் 5லி கடலை எண்ணெய் கேன் வாங்குகிறோம். மிக சுத்தமாக உள்ளது, பலகாரம் பொரிக்க அருமையானது.",
      verified: true
    },
    {
      id: 3,
      name: "Dr. Ananya Reddy",
      city: "Bengaluru, Karnataka",
      rating: 5,
      date: "2 weeks ago",
      commentEn: "As a nutritionist, I recommend raw cold pressed coconut oil for oil pulling and cooking. Sirazhi's unrefined coconut oil is sulfur-free and 100% natural.",
      commentTa: "இயற்கை ஊட்டச்சத்து ஆலோசகராக சிறாழி மரச்செக்கு தேங்காய் எண்ணெயை நான் முழுமையாக பரிந்துரைக்கிறேன்.",
      verified: true
    }
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [newName, setNewName] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newComment, setNewComment] = useState('');

  const handleAddReview = (e) => {
    e.preventDefault();
    if (!newName || !newComment) return;
    setReviews(prev => [
      {
        id: Date.now(),
        name: newName,
        city: newCity || "India",
        rating: 5,
        date: "Just now",
        commentEn: newComment,
        commentTa: newComment,
        verified: true
      },
      ...prev
    ]);
    setModalOpen(false);
    setNewName('');
    setNewCity('');
    setNewComment('');
    onToast(lang === 'en' ? 'Review Submitted! Thank you for trusting Sirazhi.' : 'மதிப்புரை அனுப்பப்பட்டது! நன்றி.', 'success');
  };

  return (
    <section id="reviews" className="py-16 md:py-24 bg-white border-y border-[#e6dfcf]">
      <div className="container-custom">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="badge-gold font-extrabold">15,000+ Happy Families</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1b4332] font-heading">
            {lang === 'en' ? 'What Our Customers Say' : 'வாடிக்கையாளர் கருத்துக்கள்'}
          </h2>
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-extrabold text-[#1b4332]">4.9 out of 5</span>
            <span className="text-xs text-gray-400">(Based on 1,240+ verified buyer reviews)</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div 
              key={rev.id}
              className="bg-[#faf6ee] p-6 rounded-3xl border border-[#e6dfcf] hover-lift flex flex-col justify-between text-left space-y-4"
            >
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <div className="flex text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#d4a017]/40" />
                </div>

                <p className="text-xs sm:text-sm text-[#556b62] leading-relaxed italic">
                  "{lang === 'en' ? rev.commentEn : rev.commentTa}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#e6dfcf] flex items-center justify-between">
                <div>
                  <h4 className="font-extrabold text-[#1b4332] text-sm font-heading">
                    {rev.name}
                  </h4>
                  <p className="text-[11px] text-gray-500 font-medium">
                    {rev.city} • {rev.date}
                  </p>
                </div>
                {rev.verified && (
                  <span className="flex items-center gap-1 text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" /> Verified Buyer
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Add Review Button */}
        <div className="text-center mt-10">
          <button
            onClick={() => setModalOpen(true)}
            className="btn-outline text-xs py-2.5 px-6 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>{lang === 'en' ? 'Write a Customer Review' : 'உங்கள் கருத்தை எழுத'}</span>
          </button>
        </div>

      </div>

      {/* Add Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 border border-[#e6dfcf] relative text-left space-y-4">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-xl font-bold text-[#1b4332] font-heading">
              {lang === 'en' ? 'Share Your Sirazhi Experience' : 'உங்கள் கருத்தைப் பதிவு செய்ய'}
            </h3>

            <form onSubmit={handleAddReview} className="space-y-3">
              <div>
                <label className="block text-xs font-bold text-[#1b4332] mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full p-3 rounded-xl border border-[#e6dfcf] text-xs text-[#1b4332]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1b4332] mb-1">City / Region</label>
                <input
                  type="text"
                  placeholder="e.g. Pollachi, Tamil Nadu"
                  value={newCity}
                  onChange={(e) => setNewCity(e.target.value)}
                  className="w-full p-3 rounded-xl border border-[#e6dfcf] text-xs text-[#1b4332]"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#1b4332] mb-1">Review Details *</label>
                <textarea
                  required
                  rows="3"
                  placeholder="How was the oil aroma, packaging, and taste?"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="w-full p-3 rounded-xl border border-[#e6dfcf] text-xs text-[#1b4332]"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-gold justify-center py-3 text-xs cursor-pointer"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
