import React, { useState } from 'react';
import { Star, School, Lightbulb, Puzzle, ScrollText, Airplay, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'CP', icon: Star, color: 'bg-[#FED65B] border-[#D9A618]',link:'/Cp' },
  { label: 'CE1', icon: School, color: 'bg-[#FF9B54] border-[#D96B27]',link:'/Ce1' },
  { label: 'CE2', icon: Lightbulb, color: 'bg-[#A8E063] border-[#72B030]',link:'/Ce2' },
  { label: 'CM1', icon: Puzzle, color: 'bg-[#FF6B6B] border-[#D63E3E]',link:'/Cm1' },
  { label: 'CM2', icon: ScrollText, color: 'bg-[#6BCB9E] border-[#3FA072]',link:'/Cm2' },
  { label: '6e année', icon: Airplay, color: 'bg-[#74C0FC] border-[#3E8ED0]',link:'/6eAnnée' },
];

export default function NavBar() {
  const [activeTab, setActiveTab] = useState("");

  return (
    <nav className="flex flex-wrap items-center justify-between gap-4 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg w-full max-w-6xl mx-auto border border-blue-100">
      
      <Link to={"/Home"}>
      <button 
      onClick={() => setActiveTab("home")}
  
      className={`flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-dashed border-indigo-300 rounded-full shadow-sm
      ${activeTab ==="home" ? 'ring-4 ring-offset-2 ring-indigo-400 scale-105' : ''}
      cursor-pointer
      `}>
        <div className="p-1.5 bg-indigo-600 text-white rounded-full shadow-xs">
          <GraduationCap className="w-4 h-4 stroke-[2.5]" />
        </div>
        <span className="text-xs font-black text-indigo-900 uppercase tracking-wider">
          ALHIKMA
        </span>
      </button>
      </Link>

      
      <div className="flex flex-wrap items-center justify-center gap-3">
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeTab === item.label;

          return (
            <Link to={item.link}>
            <button
              key={index}
              onClick={() => setActiveTab(item.label)}
              className={`
                relative flex items-center gap-2 px-5 py-2.5 
                rounded-full border-2 border-b-4 font-black text-slate-800 
                text-sm uppercase tracking-wide transition-all duration-150 
                hover:-translate-y-1 hover:brightness-105 active:translate-y-0.5
                shadow-sm cursor-pointer ${item.color}
                ${isActive ? 'ring-4 ring-offset-2 ring-indigo-400 scale-105' : ''}
              `}
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 p-1 bg-white rounded-full border border-gray-200 shadow-sm">
                <Icon className="w-4 h-4 text-slate-700 stroke-[2.5]" />
              </div>
              <span className="mt-1">{item.label}</span>
            </button>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}