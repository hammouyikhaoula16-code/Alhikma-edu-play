    import React, { useState } from 'react';
import { BookOpen, Pencil, HelpCircle, CheckCircle2, Award, Sparkles } from 'lucide-react';

const exercises = [
  { label: 'Informatique', icon: Sparkles, color: 'bg-[#FED65B] border-[#D9A618]' },
  { label: 'Arabe', icon: BookOpen, color: 'bg-[#FF9B54] border-[#D96B27]' },
  { label: 'Française', icon:CheckCircle2 , color: 'bg-[#A8E063] border-[#72B030]' },
  { label: 'Mathématique', icon: HelpCircle , color: 'bg-[#FF6B6B] border-[#D63E3E]' },
];

export default function LeftBar() {
  const [activeEx, setActiveEx] = useState('');

  return (
    <aside className="flex flex-col gap-4 p-4 m-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-blue-100 w-full sm:w-56 shrink-0">
      
      
      <div className="text-center pb-2 border-b-2 border-dashed border-blue-100">
        <h2 className="text-sm font-black text-slate-700 uppercase tracking-wider">
          Programmes
        </h2>
      </div>

    
      <div className="flex flex-col gap-3">
        {exercises.map((item, index) => {
          const Icon = item.icon;
          const isActive = activeEx === item.label;

          return (
            <button
              key={index}
              onClick={() => setActiveEx(item.label)}
              className={`
                relative flex items-center justify-center gap-2 px-4 py-3 
                rounded-full border-2 border-b-4 font-black text-slate-800 
                text-xs sm:text-sm uppercase tracking-wide transition-all duration-150 
                hover:-translate-y-0.5 hover:brightness-105 active:translate-y-0.5
                shadow-sm cursor-pointer ${item.color}
                ${isActive ? 'ring-4 ring-offset-2 ring-indigo-400 scale-105 z-10' : ''}
              `}
            >
             
              <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 p-0.5 bg-white rounded-full border border-gray-200 shadow-sm">
                <Icon className="w-3.5 h-3.5 text-slate-700 stroke-[2.5]" />
              </div>

              <span className="mt-1">{item.label}</span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}