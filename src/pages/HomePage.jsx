import React from 'react';
import { Sparkles, Quote, ChevronRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-12">

      <section className="max-w-4xl mx-auto text-center space-y-6 pt-6">
        
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-800 tracking-tight leading-tight">
          bienvenue a votre espace  <span className="bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-600 bg-clip-text text-transparent">exercice</span> 
        </h1>

        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
          Un espace d'apprentissage joyeux, stimulant et innovant pour former les esprits curieux de demain.
        </p>

        
      </section>

    
      <section className="max-w-3xl mx-auto pt-4">
        <div className="relative bg-white/85 backdrop-blur-md p-8 md:p-10 rounded-3xl border-2 border-slate-200 shadow-xl text-center space-y-4">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 p-3 bg-amber-400 border-2 border-b-4 border-amber-600 rounded-2xl shadow-md text-white">
            <Quote className="w-6 h-6 fill-current" />
          </div>

          <p className="pt-2 text-xl md:text-2xl font-bold italic text-slate-700 leading-relaxed">
            « L'éducation est l'arme la plus puissante qu'on puisse utiliser pour changer le monde. » {<br/>}
           «  .التعليم هو أقوى سلاح يمكن استخدامه لتغيير العالم »
          </p>

          <div className="pt-2">
            <span className="block font-black text-slate-900 uppercase tracking-wide text-sm">
              — Nelson Mandela
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}