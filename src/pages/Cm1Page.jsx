import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import ExerciseMenu from '../components/ExerciseMenu';
import { exerciseData } from '../data/exerciseData';
import {
  CheckCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Trophy,
  Sparkles,
} from 'lucide-react';

export default function Cm1Page() {
  const { activeModule } = useOutletContext();

  const [selectedExercise, setSelectedExercise] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);

  const [textInput, setTextInput] = useState('');
  const [clickedTarget, setClickedTarget] = useState(null);
  const [categories, setCategories] = useState({});

  const [challengeAnswers, setChallengeAnswers] = useState({});
  const [challengeLocked, setChallengeLocked] = useState({});
  const [challengeSubmitted, setChallengeSubmitted] = useState(false);
  const [challengeFinalScore, setChallengeFinalScore] = useState(0);

  const currentExercises =
    activeModule === 'francaise'
      ? exerciseData.ce2?.francaise || []
      : exerciseData.cm1?.[activeModule] || [];

  const resetGameState = () => {
    setFeedback(null);
    setTextInput('');
    setClickedTarget(null);
    setCategories({});
  };

  useEffect(() => {
    setSelectedExercise(null);
    resetGameState();
    setChallengeAnswers({});
    setChallengeLocked({});
    setChallengeSubmitted(false);
    setChallengeFinalScore(0);
  }, [activeModule]);

  useEffect(() => {
    resetGameState();
  }, [selectedExercise]);

  const handleChallengeAnswer = (exId, value) => {
    if (challengeLocked[exId]) return;
    setChallengeAnswers((prev) => ({ ...prev, [exId]: value }));
    setChallengeLocked((prev) => ({ ...prev, [exId]: true }));
  };

  const normalizeText = (str) => {
    if (!str) return '';
    return str
      .trim()
      .toUpperCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[\u064B-\u065F]/g, '')
      .replace(/[.,!?;:]+$/g, '')
      .replace(/\s+/g, ' ');
  };

  const handleSubmitChallenge = () => {
    let correctCount = 0;
    currentExercises.forEach((ex) => {
      const studentAns = challengeAnswers[ex.id];
      if (
        ex.type === 'multiple_choice' &&
        studentAns === ex.options[ex.correct]
      ) {
        correctCount += 1;
      } else if (ex.type === 'true_false' && studentAns === ex.answer) {
        correctCount += 1;
      } else if (
        ex.type === 'input_text' &&
        normalizeText(studentAns) === normalizeText(ex.target)
      ) {
        correctCount += 1;
      }
    });

    const total =
      currentExercises.length > 0
        ? Math.round((correctCount / currentExercises.length) * 10)
        : 0;
    setChallengeFinalScore(total);
    setChallengeSubmitted(true);
  };

  const handleResetChallenge = () => {
    setChallengeAnswers({});
    setChallengeLocked({});
    setChallengeSubmitted(false);
    setChallengeFinalScore(0);
  };

  const renderInformatiqueGame = (ex) => {
    switch (ex.type) {
      case 'categorization': {
        const categoryOptions = ['Entrée', 'Sortie'];
        return (
          <div className="space-y-6 text-center max-w-md mx-auto">
            <p className="text-sm font-bold text-slate-600">{ex.description}</p>
            <div className="space-y-3">
              {ex.items.map((it, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white border-2 border-slate-200 rounded-2xl flex items-center justify-between gap-3 shadow-sm"
                >
                  <span className="font-bold text-slate-700 text-left">
                    {it.name}
                  </span>
                  <div className="flex gap-2 shrink-0">
                    {categoryOptions.map((cat) => {
                      const isChosen = categories[idx] === cat;
                      const isRight = cat === it.category;
                      return (
                        <button
                          key={cat}
                          onClick={() => {
                            if (categories[idx]) return;
                            setCategories((prev) => ({ ...prev, [idx]: cat }));
                            if (isRight) {
                              setFeedback({
                                success: true,
                                message: `Bravo ! ${it.name} est un périphérique de ${cat}.`,
                              });
                              setScore((s) => s + 5);
                            } else {
                              setFeedback({
                                success: false,
                                message: `Oups ! ${it.name} n'est pas dans "${cat}".`,
                              });
                            }
                          }}
                          className={`px-3 py-1.5 rounded-xl font-black text-xs cursor-pointer border-2 transition-all ${
                            isChosen
                              ? isRight
                                ? 'bg-emerald-500 text-white border-emerald-600'
                                : 'bg-rose-500 text-white border-rose-600'
                              : 'bg-slate-100 text-slate-600 border-slate-200 hover:bg-slate-200'
                          }`}
                        >
                          {cat}
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }

      case 'click_target':
        return (
          <div className="space-y-6 text-center max-w-md mx-auto">
            <p className="text-sm font-bold text-slate-600">{ex.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ex.items.map((item, idx) => {
                const isCorrect = item === ex.targetWord;
                const isChosen = clickedTarget === idx;
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      setClickedTarget(idx);
                      if (isCorrect) {
                        setFeedback({
                          success: true,
                          message: `Bravo ! "${item}" est le bon choix.`,
                        });
                        setScore((s) => s + 10);
                      } else {
                        setFeedback({
                          success: false,
                          message: `Oups ! "${item}" ne correspond pas à la consigne.`,
                        });
                      }
                    }}
                    className={`p-5 border-2 rounded-2xl font-black text-sm shadow-sm transition-all cursor-pointer ${
                      isChosen
                        ? isCorrect
                          ? 'bg-emerald-500 border-emerald-600 text-white'
                          : 'bg-rose-500 border-rose-600 text-white'
                        : 'bg-indigo-50 hover:bg-indigo-100 border-indigo-200 text-slate-700'
                    }`}
                  >
                    💻 {item}
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 'text_copy':
        return (
          <div className="space-y-6 text-center max-w-md mx-auto">
            <p className="text-sm font-bold text-slate-600">{ex.description}</p>
            <div className="p-4 bg-white border-2 border-dashed border-indigo-300 rounded-2xl font-bold text-indigo-900 text-base shadow-sm">
              "{ex.targetText}"
            </div>
            <textarea
              value={textInput}
              placeholder="Recopie le texte exactement ici..."
              className="w-full p-4 bg-slate-50 border-2 border-slate-300 rounded-xl font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows={3}
              onChange={(e) => {
                const val = e.target.value;
                setTextInput(val);
                if (val.trim() === ex.targetText.trim()) {
                  setFeedback({
                    success: true,
                    message: 'Parfait ! Texte recopié sans aucune faute !',
                  });
                  setScore((s) => s + 10);
                } else {
                  setFeedback(null);
                }
              }}
            />
          </div>
        );

      default:
        return <p className="text-center text-slate-500">Jeu en construction...</p>;
    }
  };

  const renderChallengePage = (moduleTitle, gradientColor) => {
    const allAnswered =
      currentExercises.length > 0 &&
      Object.keys(challengeLocked).length === currentExercises.length;
    const isArabicModule = activeModule === 'arabe';

    return (
      <div
        className="max-w-3xl mx-auto space-y-6 pb-8"
        dir={isArabicModule ? 'rtl' : 'ltr'}
      >
        <div
          className={`bg-gradient-to-r ${gradientColor} p-6 rounded-3xl text-white shadow-lg flex items-center justify-between`}
        >
          <div>
            <span className="bg-white/25 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
              {isArabicModule
                ? 'تحدي المستوى الرابع ابتدائي (CM1)'
                : 'Grand Challenge CM1'}
            </span>
            <h2 className="text-2xl font-black mt-2">{moduleTitle}</h2>
            <p className="text-xs sm:text-sm text-white/90 mt-1">
              {isArabicModule
                ? `أجب عن التمارين التالية (${currentExercises.length} أسئلة). بمجرد اختيار الإجابة يتم قفلها!`
                : `Réponds aux ${currentExercises.length} exercices. Une fois validée, ta réponse est verrouillée !`}
            </p>
          </div>
          <Sparkles className="w-10 h-10 text-white/80 hidden sm:block animate-pulse" />
        </div>

        {challengeSubmitted ? (
          <div className="bg-white p-8 rounded-3xl border-2 border-amber-300 shadow-xl text-center space-y-6">
            <div className="w-20 h-20 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <Trophy className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-slate-800">
              {isArabicModule
                ? 'انتهى التحدي بنجاح!'
                : 'Challenge Terminé !'}
            </h3>
            <div className="text-4xl font-black text-amber-600 bg-amber-50 py-4 px-8 rounded-2xl inline-block border-2 border-amber-200">
              {challengeFinalScore} / 10
            </div>
            <p className="text-sm text-slate-600 font-medium">
              {challengeFinalScore === 10
                ? isArabicModule
                  ? 'ممتاز جداً! علامة كاملة!'
                  : 'Incroyable ! Sans faute !'
                : isArabicModule
                ? 'عمل رائع! استمر هكذا.'
                : 'Beau travail ! Continue de t’entraîner.'}
            </p>
            <div>
              <button
                onClick={handleResetChallenge}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black rounded-2xl shadow-md transition-all flex items-center gap-2 mx-auto cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />{' '}
                {isArabicModule
                  ? 'إعادة التحدي'
                  : 'Recommencer le Challenge'}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {currentExercises.map((ex, index) => {
              const isLocked = !!challengeLocked[ex.id];
              const cardIsArabic = ex.lang ? ex.lang === 'ar' : isArabicModule;
              const showSectionHeader =
                ex.section &&
                (index === 0 ||
                  currentExercises[index - 1].section !== ex.section);

              return (
                <React.Fragment key={ex.id}>
                  {showSectionHeader && (
                    <div
                      dir={cardIsArabic ? 'rtl' : 'ltr'}
                      className="pt-2 pb-1 flex justify-start"
                    >
                      <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl shadow-md font-black text-base sm:text-lg">
                        <span>✦ {ex.section}</span>
                      </div>
                    </div>
                  )}

                  <div
                    dir={cardIsArabic ? 'rtl' : 'ltr'}
                    className={`bg-white p-6 rounded-3xl border-2 shadow-sm transition-all ${
                      cardIsArabic ? 'text-right' : 'text-left'
                    } ${
                      isLocked
                        ? 'border-emerald-200 bg-emerald-50/20'
                        : 'border-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-black">
                        {cardIsArabic
                          ? `السؤال ${index + 1} / ${currentExercises.length}`
                          : `Question ${index + 1} / ${currentExercises.length}`}
                      </span>
                      {isLocked && (
                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                          <CheckCircle2 className="w-3.5 h-3.5" />{' '}
                          {cardIsArabic
                            ? 'تم قفل الإجابة'
                            : 'Réponse verrouillée'}
                        </span>
                      )}
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-slate-800 mb-4">
                      {ex.question}
                    </h3>

                    {ex.type === 'multiple_choice' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {ex.options.map((option, optIdx) => {
                          const isSelected = challengeAnswers[ex.id] === option;
                          return (
                            <button
                              key={optIdx}
                              disabled={isLocked}
                              onClick={() =>
                                handleChallengeAnswer(ex.id, option)
                              }
                              className={`p-4 rounded-2xl border-2 font-black text-sm transition-all ${
                                cardIsArabic ? 'text-right' : 'text-left'
                              } ${
                                isSelected
                                  ? 'bg-amber-500 border-amber-600 text-white shadow-md'
                                  : isLocked
                                  ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
                                  : 'bg-slate-50 hover:bg-amber-50 border-slate-200 hover:border-amber-300 text-slate-700 cursor-pointer'
                              }`}
                            >
                              {option}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {ex.type === 'true_false' && (
                      <div className="flex gap-4">
                        {[true, false].map((val, idx) => {
                          const label = cardIsArabic
                            ? val
                              ? 'صحيح'
                              : 'خطأ'
                            : val
                            ? 'VRAI'
                            : 'FAUX';
                          const isSelected = challengeAnswers[ex.id] === val;
                          return (
                            <button
                              key={idx}
                              disabled={isLocked}
                              onClick={() => handleChallengeAnswer(ex.id, val)}
                              className={`flex-1 p-4 rounded-2xl border-2 font-black text-sm transition-all ${
                                isSelected
                                  ? 'bg-amber-500 border-amber-600 text-white shadow-md'
                                  : isLocked
                                  ? 'bg-slate-100 border-slate-200 text-slate-400 cursor-not-allowed'
                                  : 'bg-slate-50 hover:bg-amber-50 border-slate-200 hover:border-amber-300 text-slate-700 cursor-pointer'
                              }`}
                            >
                              {label}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {ex.type === 'input_text' && (
                      <div className="flex gap-3">
                        <input
                          type="text"
                          disabled={isLocked}
                          placeholder={
                            cardIsArabic
                              ? 'اكتب الإجابة هنا...'
                              : 'Tape ta réponse ici...'
                          }
                          value={challengeAnswers[ex.id] || ''}
                          onChange={(e) =>
                            setChallengeAnswers((prev) => ({
                              ...prev,
                              [ex.id]: e.target.value,
                            }))
                          }
                          className={`flex-1 px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl font-bold text-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400 disabled:bg-slate-100 disabled:text-slate-500 ${
                            cardIsArabic ? 'text-right' : 'text-left'
                          }`}
                        />
                        {!isLocked && (
                          <button
                            onClick={() => {
                              if (challengeAnswers[ex.id]?.trim()) {
                                handleChallengeAnswer(
                                  ex.id,
                                  challengeAnswers[ex.id]
                                );
                              }
                            }}
                            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black rounded-xl shadow-md cursor-pointer text-xs uppercase"
                          >
                            {cardIsArabic ? 'تثبيت' : 'Valider'}
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </React.Fragment>
              );
            })}

            <div className="pt-4 text-center">
              <button
                onClick={handleSubmitChallenge}
                disabled={!allAnswered}
                className={`w-full sm:w-auto px-10 py-4 font-black text-base rounded-2xl shadow-lg transition-all ${
                  allAnswered
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white cursor-pointer hover:-translate-y-0.5'
                    : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                }`}
              >
                {allAnswered
                  ? isArabicModule
                    ? 'تسليم التحدي ورؤية العلامة النهائية (/10)'
                    : 'Valider le Challenge et voir ma note (/10)'
                  : isArabicModule
                  ? `أجب عن كافة الأسئلة أولاً (${Object.keys(challengeLocked).length}/${currentExercises.length})`
                  : `Réponds à toutes les questions (${Object.keys(challengeLocked).length}/${currentExercises.length})`}
              </button>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-black text-slate-800 uppercase">
          CM1 — Module : {activeModule}
        </h1>
        {selectedExercise && activeModule === 'informatique' && (
          <div className="flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-black">
            <Trophy className="w-4 h-4" /> Score : {score} pts
          </div>
        )}
      </div>

      {activeModule === 'arabe' ? (
        renderChallengePage(
          'اختبار التربية الإسلامية واللغة العربية',
          'from-orange-500 to-amber-500'
        )
      ) : activeModule === 'francaise' ? (
        renderChallengePage(
          'Module Française : Le Grand Test',
          'from-green-500 to-emerald-600'
        )
      ) : activeModule === 'mathematique' ? (
        renderChallengePage(
          'Module النشاط العلمي & Mathématiques',
          'from-rose-500 to-red-600'
        )
      ) : !selectedExercise ? (
        <ExerciseMenu
          exercises={currentExercises}
          onSelectExercise={(ex) => {
            setSelectedExercise(ex);
            setFeedback(null);
          }}
        />
      ) : (
        <div className="bg-white/90 p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => {
                setSelectedExercise(null);
                resetGameState();
              }}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full text-xs font-black uppercase tracking-wider cursor-pointer"
            >
              ← Retour aux exercices
            </button>
            <span className="text-xs font-bold text-indigo-500 uppercase tracking-wide">
              Exercice {selectedExercise.id} / {currentExercises.length}
            </span>
          </div>

          <div className="text-center space-y-1">
            {selectedExercise.section && (
              <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black mb-1">
                {selectedExercise.section}
              </span>
            )}
            <h2 className="text-xl font-black text-indigo-600">
              {selectedExercise.title}
            </h2>
          </div>

          <div className="py-4">{renderInformatiqueGame(selectedExercise)}</div>

          {feedback && (
            <div
              className={`p-4 rounded-2xl flex items-center justify-between border-2 ${
                feedback.success
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                  : 'bg-rose-50 border-rose-200 text-rose-800'
              }`}
            >
              <div className="flex items-center gap-3">
                {feedback.success ? (
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                ) : (
                  <XCircle className="w-6 h-6 text-rose-600" />
                )}
                <span className="font-black text-sm">{feedback.message}</span>
              </div>
              <button
                onClick={resetGameState}
                className="p-2 hover:bg-white/50 rounded-xl text-xs font-bold flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" /> Réessayer
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}