'use client';

import React, { useState } from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  CheckCircle2, 
  Building2 
} from 'lucide-react';

export default function VayuCarboExchange() {
  const [desk, setDesk] = useState<'buyer' | 'seller'>('buyer');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');
  const [submitted, setSubmitted] = useState(false);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [volume, setVolume] = useState<number>(250);
  const [registry, setRegistry] = useState('Verra (VCS) Nature-Based');
  const [serial, setSerial] = useState('');

  const currentRate = currency === 'INR' ? 1500 : 18;
  const grossCredits = volume * currentRate;
  const brokerageFee = grossCredits * 0.05;
  const gst = currency === 'INR' ? brokerageFee * 0.18 : 0;
  const totalSettlement = grossCredits + brokerageFee + gst;

  const formatPrice = (val: number) => {
    return currency === 'INR'
      ? `₹${val.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`
      : `$${val.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  const details = desk === 'buyer'
    ? `New BUYER Deal:%0A- Company: ${name}%0A- Phone: ${phone}%0A- Standard: ${registry}%0A- Volume: ${volume} Tons%0A- Est. Total: ${formatPrice(totalSettlement)}`
    : `New SELLER Listing:%0A- Developer: ${name}%0A- Phone: ${phone}%0A- Serial: ${serial}%0A- Volume: ${volume} Tons`;

  window.open(`https://wa.me/918128334913?text=${details}`, '_blank');
  setSubmitted(true);
};
  
  return (
    <div className="min-h-screen bg-[#070A0F] text-slate-100 font-sans selection:bg-emerald-500 selection:text-black">
      {/* Top Bar */}
      <nav className="border-b border-slate-800/80 bg-[#070A0F]/90 backdrop-blur-md sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center font-black text-slate-950 text-xl shadow-lg shadow-emerald-500/20">
            V
          </div>
          <div>
            <span className="font-extrabold text-lg tracking-tight text-white block">VayuCarbo</span>
            <span className="text-[9px] uppercase tracking-widest text-emerald-400 font-semibold">Institutional Carbon Exchange</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex bg-slate-950 border border-slate-800 rounded-lg p-1 text-xs">
            <button 
              onClick={() => setCurrency('INR')}
              className={`px-3 py-1 rounded font-semibold transition ${currency === 'INR' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400'}`}
            >
              ₹ INR
            </button>
            <button 
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1 rounded font-semibold transition ${currency === 'USD' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400'}`}
            >
              $ USD
            </button>
          </div>

          <div className="flex bg-slate-900 border border-slate-800 rounded-full p-1 text-xs font-semibold">
            <button
              onClick={() => { setDesk('buyer'); setSubmitted(false); }}
              className={`px-4 py-1.5 rounded-full transition ${desk === 'buyer' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400'}`}
            >
              Buy Credits
            </button>
            <button
              onClick={() => { setDesk('seller'); setSubmitted(false); }}
              className={`px-4 py-1.5 rounded-full transition ${desk === 'seller' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400'}`}
            >
              Sell Credits
            </button>
          </div>
        </div>
      </nav>

      {/* Main Heading */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-950/20 text-emerald-400 text-xs font-semibold mb-4">
          <ShieldCheck className="w-4 h-4" /> Direct Registry Matching • Tripartite Escrow Protocol
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
          India&apos;s Premier Carbon Brokerage Desk
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-base">
          Connecting verified green developers with corporate buyers via compliant bilateral legal agreements and guaranteed credit retirement.
        </p>
      </section>

      {/* Portal Box */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-[#0F172A]/90 border border-slate-800 rounded-3xl p-6 md:p-10 backdrop-blur-xl shadow-2xl relative">
          
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-2xl font-bold text-white">Deal Request Registered!</h2>
              <p className="text-slate-400 text-sm max-w-md mx-auto">
                Your file has been routed to our senior broker desk. An advisor will contact you within 2 business hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="px-6 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs text-white font-semibold transition"
              >
                Submit Another Request
              </button>
            </div>
          ) : desk === 'buyer' ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-slate-800 pb-4 flex justify-between items-center">
                <div>
                  <h2 className="text-lg font-bold text-white">Acquire & Retire Verified Offsets</h2>
                  <p className="text-xs text-slate-400">Lock in verified inventory with full compliance certificates.</p>
                </div>
                <span className="text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full">
                  Index: {formatPrice(currentRate)}/t
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Company / Entity Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. Acme Industries Pvt Ltd"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#070A0F] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Authorized Phone / WhatsApp</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#070A0F] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Accreditation Standard</label>
                  <select 
                    value={registry}
                    onChange={(e) => setRegistry(e.target.value)}
                    className="w-full bg-[#070A0F] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500"
                  >
                    <option>Verra (VCS) Nature-Based Removal</option>
                    <option>Gold Standard Renewable Energy</option>
                    <option>BEE / Indian Carbon Market (ICM)</option>
                    <option>I-REC Energy Attribute Certificates</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Volume Required (Metric Tonnes)</label>
                  <input 
                    type="number" 
                    min="1" 
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-full bg-[#070A0F] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500" 
                  />
                </div>
              </div>

              <div className="bg-[#070A0F] border border-slate-800/90 rounded-2xl p-5 space-y-2 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Gross Carbon Allocation ({volume} Tons)</span>
                  <span className="font-mono text-slate-200">{formatPrice(grossCredits)}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Broker Desk & Legal Verification Fee (5%)</span>
                  <span className="font-mono text-emerald-400">+{formatPrice(brokerageFee)}</span>
                </div>
                {currency === 'INR' && (
                  <div className="flex justify-between text-slate-400">
                    <span>18% GST (Applicable strictly on broker fee)</span>
                    <span className="font-mono text-slate-400">+{formatPrice(gst)}</span>
                  </div>
                )}
                <div className="border-t border-slate-800 pt-3 flex justify-between items-center">
                  <div>
                    <span className="text-[11px] text-slate-400 uppercase font-semibold block">Total Estimated Consideration</span>
                    <span className="text-2xl font-black text-white font-mono">{formatPrice(totalSettlement)}</span>
                  </div>
                  <button type="submit" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl transition flex items-center gap-2 shadow-lg shadow-emerald-500/10">
                    Generate Bilateral Agreement <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="border-b border-slate-800 pb-4">
                <h2 className="text-lg font-bold text-white">List Carbon Credits with VayuCarbo</h2>
                <p className="text-xs text-slate-400">Immediate access to qualified corporate buyers in India & overseas.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Developer / Entity Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="e.g. GreenField Solar LLP"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#070A0F] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Contact Phone / WhatsApp</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="+91 91234 56789"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#070A0F] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Registry Serial Number Block</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="VCS-1842-001...250"
                    value={serial}
                    onChange={(e) => setSerial(e.target.value)}
                    className="w-full bg-[#070A0F] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Available Volume (Tons)</label>
                  <input 
                    type="number" 
                    value={volume}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className="w-full bg-[#070A0F] border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500" 
                  />
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 text-xs text-slate-400 leading-relaxed">
                Notice: All listings undergo serial verification. By listing your credits, you agree to an exclusive 10-day broker window while we match you with a buyer under a formal purchase agreement.
              </div>

              <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-6 py-4 rounded-xl transition flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/10">
                Submit Inventory to Broker Desk <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Digital Stamp & Contract Protection</span>
              <span className="flex items-center gap-1.5"><Building2 className="w-4 h-4 text-cyan-400" /> Direct Corporate Desk</span>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href="https://wa.me/918128334913?text=Hello%20VayuCarbo%20Desk,%20I%20want%20to%20inquire%20about%20carbon%20credits" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-900/40 transition"
              >
                <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Desk
              </a>
              <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white transition">
                <Phone className="w-3.5 h-3.5" /> Call Broker
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}