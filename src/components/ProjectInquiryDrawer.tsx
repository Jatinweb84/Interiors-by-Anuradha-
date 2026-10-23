import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface ProjectInquiryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialProject?: string;
}

export const ProjectInquiryDrawer: React.FC<ProjectInquiryDrawerProps> = ({
  isOpen,
  onClose,
  initialProject = '',
}) => {
  const [formData, setFormData] = useState({
    typology: 'Private Residence',
    area: '4,000 – 8,000 sq.ft.',
    location: '',
    palette: 'Monolithic Basalt & Smoked Timber',
    name: '',
    email: '',
    phone: '',
    notes: initialProject ? `Regarding interest in ${initialProject} spatial approach.` : '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#141312]/80 backdrop-blur-md flex justify-end animate-fade-in">
      {/* Background click overlay */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Drawer Panel */}
      <div className="relative w-full max-w-xl bg-[#161413] border-l border-[#26231F] text-[#FAF8F5] h-full overflow-y-auto p-8 md:p-12 shadow-2xl flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#24211D]">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] font-sans text-[#B39775]">
              <span>COMMISSION BRIEF</span>
              <span>·</span>
              <span className="text-[#8C857B]">2026/2027</span>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#8C857B] hover:text-[#FAF8F5] transition-colors cursor-pointer"
              aria-label="Close form"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              <div>
                <h3 className="text-3xl font-serif font-light text-[#FAF8F5]">
                  Start a Project
                </h3>
                <p className="mt-2 text-xs font-sans text-[#8C857B] leading-relaxed">
                  We accept a curated number of residential and hospitality commissions each calendar year to maintain uncompromising architectural rigor.
                </p>
              </div>

              {/* Typology Selection */}
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#8C857B] mb-2">
                  Typology
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {['Private Residence', 'Penthouse Interior', 'Coastal Villa', 'Hospitality'].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, typology: type })}
                      className={`p-3 text-left text-xs font-sans transition-all border cursor-pointer ${
                        formData.typology === type
                          ? 'border-[#B39775] bg-[#1E1B18] text-[#FAF8F5]'
                          : 'border-[#24211D] text-[#8C857B] hover:border-[#38332E]'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Estimated Scale */}
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#8C857B] mb-2">
                  Estimated Gross Area
                </label>
                <select
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full p-3 bg-[#1A1816] border border-[#24211D] text-xs font-sans text-[#FAF8F5] focus:border-[#B39775] focus:outline-none"
                >
                  <option value="Under 4,000 sq.ft.">Under 4,000 sq.ft.</option>
                  <option value="4,000 – 8,000 sq.ft.">4,000 – 8,000 sq.ft.</option>
                  <option value="8,000 – 15,000 sq.ft.">8,000 – 15,000 sq.ft.</option>
                  <option value="15,000+ sq.ft.">15,000+ sq.ft. (Estate / Hotel)</option>
                </select>
              </div>

              {/* Location */}
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#8C857B] mb-2">
                  Location (City / Country) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Mumbai, Goa, Dubai, London..."
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full p-3 bg-[#1A1816] border border-[#24211D] text-xs font-sans text-[#FAF8F5] focus:border-[#B39775] focus:outline-none placeholder-[#57524A]"
                />
              </div>

              {/* Client Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#8C857B] mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-3 bg-[#1A1816] border border-[#24211D] text-xs font-sans text-[#FAF8F5] focus:border-[#B39775] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#8C857B] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-3 bg-[#1A1816] border border-[#24211D] text-xs font-sans text-[#FAF8F5] focus:border-[#B39775] focus:outline-none"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-[11px] font-sans uppercase tracking-[0.2em] text-[#8C857B] mb-2">
                  Spatial Vision & Aspirations
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share any thoughts on timeline, preferred materials, or how you wish the space to feel..."
                  className="w-full p-3 bg-[#1A1816] border border-[#24211D] text-xs font-sans text-[#FAF8F5] focus:border-[#B39775] focus:outline-none placeholder-[#57524A]"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#FAF8F5] hover:bg-white text-[#141312] text-xs font-sans uppercase tracking-[0.25em] font-medium transition-all shadow-md cursor-pointer"
                >
                  Submit Commission Inquiry
                </button>
              </div>
            </form>
          ) : (
            <div className="my-16 text-center space-y-6">
              <div className="w-16 h-16 rounded-full border border-[#B39775] flex items-center justify-center mx-auto text-[#B39775]">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-serif font-light text-[#FAF8F5]">
                Inquiry Received
              </h3>
              <p className="text-xs font-sans text-[#C4BDB5] leading-relaxed max-w-sm mx-auto">
                Thank you, {formData.name}. Our principal architectural partner will review your brief for {formData.location || 'your space'} and initiate a private consultation within two studio business days.
              </p>
              <div className="p-4 bg-[#1A1816] border border-[#24211D] text-[11px] font-mono text-[#8C857B]">
                REF: FORMA-2026-{Math.floor(1000 + Math.random() * 9000)}
              </div>
              <button
                onClick={handleReset}
                className="mt-6 px-6 py-3 border border-[#B39775] text-xs uppercase tracking-widest text-[#B39775] hover:bg-[#B39775]/10 cursor-pointer"
              >
                Return to Studio
              </button>
            </div>
          )}
        </div>

        {/* Studio Footer Marker */}
        <div className="pt-6 border-t border-[#24211D] text-[10px] uppercase tracking-[0.2em] text-[#8C857B] flex justify-between font-mono">
          <span>FORMA ATELIER</span>
          <span>EST. 2014</span>
        </div>
      </div>
    </div>
  );
};
