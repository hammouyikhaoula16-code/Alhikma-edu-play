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

const PIECE_POSITIONS = {
  0: '0% 0%',
  1: '100% 0%',
  2: '0% 100%',
  3: '100% 100%',
};

export default function CpPage() {
  const { activeModule } = useOutletContext();
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState(0);

  const [clickedItems, setClickedItems] = useState({});
  const [typedLetters, setTypedLetters] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [availablePieces, setAvailablePieces] = useState([]);
  const [boardSlots, setBoardSlots] = useState([null, null, null, null]);
  const [draggedPiece, setDraggedPiece] = useState(null);

  const [challengeAnswers, setChallengeAnswers] = useState({});
  const [challengeLocked, setChallengeLocked] = useState({});
  const [challengeSubmitted, setChallengeSubmitted] = useState(false);
  const [challengeFinalScore, setChallengeFinalScore] = useState(0);

  const currentExercises = exerciseData.cp[activeModule] || [];

  const initPuzzle = () => {
    const shuffled = [0, 1, 2, 3].sort(() => Math.random() - 0.5);
    setAvailablePieces(shuffled);
    setBoardSlots([null, null, null, null]);
  };

  useEffect(() => {
    setSelectedExercise(null);
    setFeedback(null);
    setClickedItems({});
    setTypedLetters([]);
    setFirstName('');
    setLastName('');
    
    setChallengeAnswers({});
    setChallengeLocked({});
    setChallengeSubmitted(false);
    setChallengeFinalScore(0);
  }, [activeModule]);

  useEffect(() => {
    if (selectedExercise?.id === 4 && activeModule === 'informatique') {
      initPuzzle();
    }
    setClickedItems({});
    setTypedLetters([]);
    setFirstName('');
    setLastName('');
    setFeedback(null);
  }, [selectedExercise, activeModule]);

  const handleResetGame = () => {
    if (selectedExercise?.id === 4) {
      initPuzzle();
    } else if (selectedExercise?.id === 2) {
      setTypedLetters([]);
    } else if (selectedExercise?.id === 3) {
      setFirstName('');
      setLastName('');
    } else {
      setClickedItems({});
    }
    setFeedback(null);
  };

  const handleDropOnSlot = (slotIndex) => {
    if (draggedPiece === null) return;
    const newBoard = [...boardSlots];
    const previousPieceInSlot = newBoard[slotIndex];

    newBoard[slotIndex] = draggedPiece;
    setBoardSlots(newBoard);

    setAvailablePieces((prev) => {
      const updated = prev.filter((p) => p !== draggedPiece);
      if (previousPieceInSlot !== null) updated.push(previousPieceInSlot);
      return updated;
    });

    setDraggedPiece(null);

    if (newBoard.every((val, idx) => val === idx)) {
      setFeedback({
        success: true,
        message: 'Bravo ! Tu as reconstitué le clavier complet !',
      });
      setScore((s) => s + 20);
    } else if (newBoard.every((val) => val !== null)) {
      setFeedback({
        success: false,
        message:
          'Toutes les pièces sont posées, mais certaines ne sont pas à la bonne place !',
      });
    }
  };

  const handleReturnPiece = (slotIndex) => {
    const piece = boardSlots[slotIndex];
    if (piece === null) return;
    const newBoard = [...boardSlots];
    newBoard[slotIndex] = null;
    setBoardSlots(newBoard);
    setAvailablePieces((prev) => [...prev, piece]);
    setFeedback(null);
  };

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
      .replace(/[\u064B-\u065F]/g, ''); // Ignore les harakat (تشكيل)
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

    const total = Math.round((correctCount / currentExercises.length) * 10);
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
    switch (ex.id) {
      case 1:
        return (
          <div className="space-y-6 text-center">
            <p className="text-sm sm:text-base font-bold text-slate-600">
              Clique uniquement sur les vrais composants informatiques !
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
              {ex.items.map((item, idx) => {
                const isCorrect = [
                  'Clavier',
                  'Souris',
                  'Écran',
                  'Tour',
                ].includes(item);
                const clickStatus = clickedItems[idx];
                let btnStyle =
                  'bg-indigo-50 hover:bg-indigo-100 border-indigo-200 text-slate-700';
                if (clickStatus === 'correct') {
                  btnStyle =
                    'bg-emerald-500 border-emerald-600 text-white scale-105';
                } else if (clickStatus === 'wrong') {
                  btnStyle = 'bg-rose-500 border-rose-600 text-white';
                }

                return (
                  <button
                    key={idx}
                    onClick={() => {
                      if (clickStatus) return;
                      if (isCorrect) {
                        setClickedItems((prev) => ({
                          ...prev,
                          [idx]: 'correct',
                        }));
                        setFeedback({
                          success: true,
                          message: `Bravo ! ${item} est bien un élément informatique.`,
                        });
                        setScore((s) => s + 10);
                      } else {
                        setClickedItems((prev) => ({
                          ...prev,
                          [idx]: 'wrong',
                        }));
                        setFeedback({
                          success: false,
                          message: `Oups ! ${item} n'est pas un équipement informatique.`,
                        });
                      }
                    }}
                    className={`p-4 border-2 rounded-2xl font-black text-sm shadow-sm transition-all cursor-pointer ${btnStyle}`}
                  >
                    💻 {item}
                  </button>
                );
              })}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6 text-center max-w-md mx-auto">
            <div className="p-4 bg-indigo-50 border-2 border-indigo-200 rounded-2xl shadow-sm space-y-3">
              <span className="px-3 py-1 bg-indigo-600 text-white rounded-full text-xs font-black uppercase tracking-wider">
                Quel est ce périphérique ?
              </span>
              <div className="w-full h-40 rounded-xl overflow-hidden border-2 border-white shadow-md">
                <img
                  src={ex.imageUrl}
                  alt="Souris"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="p-4 bg-slate-100 rounded-2xl border-2 border-slate-300 flex justify-center gap-2">
              {ex.targetWord.split('').map((char, idx) => {
                const isFilled = typedLetters.length > idx;
                return (
                  <div
                    key={idx}
                    className="w-10 h-12 bg-white border-2 border-indigo-300 rounded-xl flex items-center justify-center font-black text-xl text-indigo-700 shadow-sm"
                  >
                    {isFilled ? typedLetters[idx] : '_'}
                  </div>
                );
              })}
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold text-slate-500">
                Clique sur les lettres dans le bon ordre :
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {['S', 'O', 'U', 'R', 'I', 'A', 'E', 'T']
                  .sort()
                  .map((letter, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        if (typedLetters.length >= ex.targetWord.length) return;
                        const currentTyped = [...typedLetters, letter];
                        setTypedLetters(currentTyped);
                        if (currentTyped.length === ex.targetWord.length) {
                          if (currentTyped.join('') === ex.targetWord) {
                            setFeedback({
                              success: true,
                              message:
                                'Bravo ! Tu as parfaitement écrit SOURIS !',
                            });
                            setScore((s) => s + 10);
                          } else {
                            setFeedback({
                              success: false,
                              message: "Ce n'est pas le bon mot, réessaie !",
                            });
                          }
                        }
                      }}
                      className="w-12 h-12 bg-amber-50 hover:bg-amber-100 border-2 border-amber-300 rounded-xl font-black text-amber-900 text-lg shadow-sm transition-all cursor-pointer flex items-center justify-center"
                    >
                      {letter}
                    </button>
                  ))}
              </div>
              <button
                onClick={() => {
                  setTypedLetters([]);
                  setFeedback(null);
                }}
                className="mt-2 px-4 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-700 rounded-lg text-xs font-bold cursor-pointer"
              >
                Effacer
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6 text-center max-w-md mx-auto">
            <div className="p-4 bg-emerald-50 border-2 border-emerald-200 rounded-2xl shadow-sm space-y-4">
              <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-xs font-black uppercase">
                Présente-toi !
              </span>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Ton Prénom..."
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full px-4 py-3 bg-white border-2 border-emerald-300 rounded-xl font-bold text-slate-800"
                />
                <input
                  type="text"
                  placeholder="Ton Nom..."
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full px-4 py-3 bg-white border-2 border-emerald-300 rounded-xl font-bold text-slate-800"
                />
              </div>
              <button
                onClick={() => {
                  setFeedback({
                    success: true,
                    message: `Super ${firstName || 'élève'} ${lastName || ''} !`,
                  });
                  setScore((s) => s + 10);
                }}
                className="w-full py-3 bg-emerald-600 text-white font-black rounded-xl shadow-md uppercase cursor-pointer text-sm"
              >
                Valider
              </button>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6 flex flex-col items-center">
            <p className="text-xs sm:text-sm font-bold text-slate-600 text-center">
              Glisse chaque morceau avec la souris dans le cadre ci-dessous.
            </p>
            <div className="grid grid-cols-2 w-72 h-48 sm:w-96 sm:h-64 bg-slate-200 border-4 border-indigo-500 rounded-2xl overflow-hidden shadow-lg">
              {boardSlots.map((pieceId, slotIndex) => (
                <div
                  key={slotIndex}
                  onDragOver={(e) => e.preventDefault()}
                  onDrop={() => handleDropOnSlot(slotIndex)}
                  onClick={() => handleReturnPiece(slotIndex)}
                  className="relative border border-dashed border-indigo-300 flex items-center justify-center bg-slate-100/70 cursor-pointer"
                >
                  {pieceId !== null ? (
                    <div
                      className="w-full h-full"
                      style={{
                        backgroundImage: `url(${ex.imageUrl})`,
                        backgroundSize: '200% 200%',
                        backgroundPosition: PIECE_POSITIONS[pieceId],
                      }}
                    />
                  ) : (
                    <span className="text-indigo-300 font-black text-lg">
                      {slotIndex + 1}
                    </span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3 p-3 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-300 w-full max-w-lg">
              {availablePieces.map((pieceId) => (
                <div
                  key={pieceId}
                  draggable
                  onDragStart={() => setDraggedPiece(pieceId)}
                  className="w-28 h-20 sm:w-36 sm:h-24 rounded-xl border-2 border-white shadow-md cursor-grab active:cursor-grabbing"
                  style={{
                    backgroundImage: `url(${ex.imageUrl})`,
                    backgroundSize: '200% 200%',
                    backgroundPosition: PIECE_POSITIONS[pieceId],
                  }}
                />
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6 text-center max-w-md mx-auto">
            <p className="text-base font-bold text-slate-700">
              Clique sur la couleur :{' '}
              <span className="text-red-500 underline">{ex.targetColor}</span>
            </p>
            <div className="grid grid-cols-2 gap-4">
              {ex.colors.map((c, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    if (c.name === ex.targetColor) {
                      setFeedback({
                        success: true,
                        message: 'Super ! Bonne couleur.',
                      });
                      setScore((s) => s + 10);
                    } else {
                      setFeedback({
                        success: false,
                        message: "Ce n'est pas la bonne couleur !",
                      });
                    }
                  }}
                  className={`h-20 ${c.class} rounded-2xl shadow-md border-4 border-white cursor-pointer`}
                />
              ))}
            </div>
          </div>
        );

      default:
        return <p>Jeu en construction...</p>;
    }
  };

  const renderChallengePage = (moduleName, gradientColor) => {
    const allAnswered =
      currentExercises.length > 0 &&
      Object.keys(challengeLocked).length === currentExercises.length;
    const isArabic = activeModule === 'arabe';

    return (
      <div className="max-w-3xl mx-auto space-y-6 pb-8" dir={isArabic ? 'rtl' : 'ltr'}>
        <div className={`bg-gradient-to-r ${gradientColor} p-6 rounded-3xl text-white shadow-lg flex items-center justify-between`}>
          <div>
            <span className="bg-white/25 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider">
              {isArabic ? 'تحدي المستوى التحضيري (CP)' : 'Grand Challenge CP'}
            </span>
            <h2 className="text-2xl font-black mt-2">
              {isArabic ? 'اختبار التربية الإسلامية واللغة العربية' : `Module ${moduleName} : Le Grand Test`}
            </h2>
            <p className="text-xs sm:text-sm text-white/90 mt-1">
              {isArabic 
                ? 'أجب عن التمارين التالية. بمجرد اختيار الإجابة يتم قفلها!' 
                : 'Réponds aux exercices. Une fois validée, ta réponse est verrouillée !'}
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
              {isArabic ? 'انتهى التحدي بنجاح!' : 'Challenge Terminé !'}
            </h3>
            <div className="text-4xl font-black text-amber-600 bg-amber-50 py-4 px-8 rounded-2xl inline-block border-2 border-amber-200">
              {challengeFinalScore} / 10
            </div>
            <p className="text-sm text-slate-600 font-medium">
              {challengeFinalScore === 10
                ? (isArabic ? 'ممتاز جداً! علامة كاملة!' : 'Incroyable ! Sans faute !')
                : (isArabic ? 'عمل رائع! استمر هكذا.' : 'Beau travail ! Continue de t’entraîner.')}
            </p>
            <div>
              <button
                onClick={handleResetChallenge}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black rounded-2xl shadow-md transition-all flex items-center gap-2 mx-auto cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" /> {isArabic ? 'إعادة التحدي' : 'Recommencer le Challenge'}
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {currentExercises.map((ex, index) => {
              const isLocked = !!challengeLocked[ex.id];
              const showSectionHeader =
                ex.section &&
                (index === 0 || currentExercises[index - 1].section !== ex.section);

              return (
                <React.Fragment key={ex.id}>
                  {showSectionHeader && (
                    <div className="pt-2 pb-1">
                      <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-2xl shadow-md font-black text-base sm:text-lg">
                        <span>✦ {ex.section}</span>
                      </div>
                    </div>
                  )}

                  <div
                    className={`bg-white p-6 rounded-3xl border-2 shadow-sm transition-all ${
                      isArabic ? 'text-right' : 'text-left'
                    } ${isLocked ? 'border-emerald-200 bg-emerald-50/20' : 'border-slate-200'}`}
                  >
                    <div className={`flex items-center justify-between mb-3 ${isArabic ? 'flex-row-reverse' : ''}`}>
                      <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-black">
                        {isArabic ? `السؤال ${index + 1} / ${currentExercises.length}` : `Question ${index + 1} / ${currentExercises.length}`}
                      </span>
                      {isLocked && (
                        <span className="flex items-center gap-1 text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1 rounded-full">
                          <CheckCircle2 className="w-3.5 h-3.5" /> {isArabic ? 'تم قفل الإجابة' : 'Réponse verrouillée'}
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
                              onClick={() => handleChallengeAnswer(ex.id, option)}
                              className={`p-4 rounded-2xl border-2 font-black text-sm transition-all ${
                                isArabic ? 'text-right' : 'text-left'
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
                          const label = isArabic ? (val ? 'صحيح' : 'خطأ') : (val ? 'VRAI' : 'FAUX');
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
                          placeholder={isArabic ? 'اكتب الإجابة هنا...' : 'Tape ta réponse ici...'}
                          value={challengeAnswers[ex.id] || ''}
                          onChange={(e) =>
                            setChallengeAnswers((prev) => ({
                              ...prev,
                              [ex.id]: e.target.value,
                            }))
                          }
                          className={`flex-1 px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl font-bold text-lg text-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400 disabled:bg-slate-100 disabled:text-slate-500 ${isArabic ? 'text-right' : 'text-left'}`}
                        />
                        {!isLocked && (
                          <button
                            onClick={() => {
                              if (challengeAnswers[ex.id]?.trim()) {
                                handleChallengeAnswer(ex.id, challengeAnswers[ex.id]);
                              }
                            }}
                            className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-white font-black rounded-xl shadow-md cursor-pointer text-xs uppercase"
                          >
                            {isArabic ? 'تثبيت' : 'Valider'}
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
                  ? (isArabic ? 'تسليم التحدي ورؤية العلامة النهائية (/10)' : 'Valider le Challenge et voir ma note (/10)')
                  : (isArabic ? `أجب عن كافة الأسئلة أولاً (${Object.keys(challengeLocked).length}/${currentExercises.length})` : `Réponds à toutes les questions (${Object.keys(challengeLocked).length}/${currentExercises.length})`)}
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
          CP — Module : {activeModule}
        </h1>
        {selectedExercise && activeModule === 'informatique' && (
          <div className="flex items-center gap-2 px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-black">
            <Trophy className="w-4 h-4" /> Score : {score} pts
          </div>
        )}
      </div>

      {activeModule === 'arabe' ? (
        renderChallengePage('Arabe', 'from-orange-500 to-amber-500')
      ) : activeModule === 'francaise' ? (
        renderChallengePage('Française', 'from-green-500 to-emerald-600')
      ) : activeModule === 'mathematique' ? (
        renderChallengePage('Mathématique', 'from-rose-500 to-red-600')
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
                setFeedback(null);
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
            <h2 className="text-xl font-black text-indigo-600">
              {selectedExercise.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {selectedExercise.description}
            </p>
          </div>

          <div className="py-4">
            {renderInformatiqueGame(selectedExercise)}
          </div>

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
                onClick={handleResetGame}
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