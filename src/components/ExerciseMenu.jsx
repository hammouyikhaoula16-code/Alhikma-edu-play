import React from 'react';
import { Play, Trophy, Sparkles } from 'lucide-react';

export default function ExerciseMenu({ exercises = [], onSelectExercise }) {

  if (!exercises || exercises.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 text-center bg-white/50 rounded-2xl border-2 border-dashed border-blue-200">
        <Sparkles className="w-10 h-10 text-indigo-400 mb-2 animate-bounce" />
        <h3 className="text-lg font-black text-slate-700 uppercase tracking-wide">
          Bientôt disponible !
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Les exercices pour ce module sont en cours de préparation.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {exercises.map((ex, index) => (
        <div
          key={ex.id || index}
          onClick={() => onSelectExercise(ex)}
          className="group relative bg-white border-2 border-b-4 border-indigo-100 hover:border-indigo-300 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-150 hover:-translate-y-1 cursor-pointer flex flex-col justify-between"
        >
          <div>
              <div className="flex items-center justify-between mb-3">
              <span className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black uppercase tracking-wider">
                Exercice {index + 1}
              </span>
              <Trophy className="w-4 h-4 text-amber-400 opacity-80 group-hover:scale-110 transition-transform" />
            </div>

          
            <h3 className="text-base font-black text-slate-800 mb-1 group-hover:text-indigo-600 transition-colors">
              {ex.title}
            </h3>
            <p className="text-xs text-slate-500 line-clamp-2">
              {ex.description || "Cliquez pour lancer le jeu !"}
            </p>
          </div>

          
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-indigo-600 text-xs font-black uppercase tracking-wider">
            <span className="flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
              Jouer <Play className="w-3.5 h-3.5 fill-current" />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}