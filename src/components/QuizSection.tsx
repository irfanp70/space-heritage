import React, { useState } from 'react';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  Zap, 
  Sparkles, 
  Download, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { QUIZ_QUESTIONS, QuizQuestion } from '../data/quizData';
import { spaceAudio } from '../utils/audio';

export const QuizSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [streak, setStreak] = useState<number>(0);
  const [quizCompleted, setQuizCompleted] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('Space Explorer');
  const [isGeneratingCert, setIsGeneratingCert] = useState<boolean>(false);

  const currentQ: QuizQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (hasAnswered) return;
    setSelectedOption(index);
    setHasAnswered(true);

    if (index === currentQ.correctIndex) {
      spaceAudio.playSuccess();
      setScore(prev => prev + 1);
      setStreak(prev => prev + 1);
    } else {
      spaceAudio.playClick();
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    spaceAudio.playClick();
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    } else {
      // Quiz complete!
      setQuizCompleted(true);
      if (score >= 6) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  const handleRestartQuiz = () => {
    spaceAudio.playClick();
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setScore(0);
    setStreak(0);
    setQuizCompleted(false);
  };

  // Generate and download printable Canvas Certificate
  const handleDownloadCertificate = () => {
    setIsGeneratingCert(true);
    spaceAudio.playSuccess();

    const canvas = document.createElement('canvas');
    canvas.width = 1200;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Background gradient
    const grad = ctx.createLinearGradient(0, 0, 1200, 800);
    grad.addColorStop(0, '#030712');
    grad.addColorStop(0.5, '#0f172a');
    grad.addColorStop(1, '#030712');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1200, 800);

    // Border
    ctx.strokeStyle = '#38bdf8';
    ctx.lineWidth = 6;
    ctx.strokeRect(30, 30, 1140, 740);

    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 2;
    ctx.strokeRect(40, 40, 1120, 720);

    // Header
    ctx.fillStyle = '#94a3b8';
    ctx.font = 'bold 20px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('NASA SPACE APPS CHALLENGE 2026 • SPACE HERITAGE INITIATIVE', 600, 110);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 44px sans-serif';
    ctx.fillText('CERTIFICATE OF PLANETARY STEWARDSHIP', 600, 175);

    ctx.fillStyle = '#38bdf8';
    ctx.font = '18px monospace';
    ctx.fillText('THIS OFFICIALLY CERTIFIES THAT', 600, 240);

    // Recipient Name
    ctx.fillStyle = '#38bdf8';
    ctx.font = 'bold 52px sans-serif';
    ctx.fillText(userName.toUpperCase(), 600, 320);

    // Mission Details
    ctx.fillStyle = '#cbd5e1';
    ctx.font = '22px sans-serif';
    ctx.fillText(`Has successfully completed the NASA Space Heritage Mastery Examination`, 600, 390);
    ctx.fillText(`Achieved a score of ${score} / 10 on Moon and Mars machine preservation history.`, 600, 430);

    // Honor Rank
    const rank = score === 10 ? 'CHIEF PLANETARY ARCHAEOLOGIST' : score >= 8 ? 'SENIOR HISTORICAL FLIGHT DIRECTOR' : 'CERTIFIED SPACE HERITAGE EXPLORER';
    ctx.fillStyle = '#f59e0b';
    ctx.font = 'bold 28px monospace';
    ctx.fillText(`HONORARY RANK: ${rank}`, 600, 500);

    // Gold Stamp Graphic
    ctx.beginPath();
    ctx.arc(600, 620, 45, 0, Math.PI * 2);
    ctx.fillStyle = '#f59e0b';
    ctx.fill();
    ctx.fillStyle = '#030712';
    ctx.font = 'bold 12px monospace';
    ctx.fillText('VERIFIED', 600, 615);
    ctx.fillText('2026', 600, 630);

    // Date
    ctx.fillStyle = '#64748b';
    ctx.font = '16px monospace';
    ctx.fillText(`ISSUED: NOVEMBER 2026 • SPACE APPS 2026 VERIFICATION ARCHIVE`, 600, 710);

    // Download trigger
    const link = document.createElement('a');
    link.download = `Space-Heritage-Certificate-${userName.replace(/\s+/g, '-')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
    setIsGeneratingCert(false);
  };

  return (
    <section id="quiz" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-300 text-xs font-mono mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>SECTION 06 / EDUCATIONAL EXAMINATION</span>
          </div>
          <h2 className="font-['Orbitron'] font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight uppercase">
            TEN-QUESTION <span className="text-cyan-400">SPACE QUIZ</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mt-2 text-sm sm:text-base">
            Test your knowledge of the lunar modules, Mars rovers, laser retroreflectors, and international heritage treaties. Exactly 10 educational questions with immediate verified explanations.
          </p>
        </div>

        {/* Live Score Counter */}
        <div className="flex items-center gap-4 bg-slate-900/80 p-3.5 rounded-2xl border border-white/10">
          <div>
            <div className="text-[11px] font-mono text-slate-400">CURRENT SCORE</div>
            <div className="font-['Orbitron'] text-2xl font-black text-cyan-300">
              {score} <span className="text-sm font-sans font-normal text-slate-500">/ 10</span>
            </div>
          </div>
          {streak > 1 && (
            <div className="px-3 py-1 rounded-lg bg-amber-950/80 border border-amber-500/40 text-amber-300 text-xs font-mono flex items-center gap-1.5 animate-bounce">
              <Zap className="w-3.5 h-3.5 fill-amber-400" />
              <span>{streak}X STREAK!</span>
            </div>
          )}
        </div>
      </div>

      {/* Main Quiz Card */}
      {!quizCompleted ? (
        <div className="rounded-3xl bg-slate-900/90 border border-white/10 p-6 sm:p-10 backdrop-blur-2xl shadow-2xl space-y-8 max-w-4xl mx-auto">
          
          {/* Progress Bar & Question Tracker */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span>QUESTION {currentQuestionIndex + 1} OF {QUIZ_QUESTIONS.length}</span>
              <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                currentQ.difficulty === 'Beginner' ? 'text-emerald-400 bg-emerald-950/60' :
                currentQ.difficulty === 'Intermediate' ? 'text-cyan-400 bg-cyan-950/60' :
                'text-amber-400 bg-amber-950/60'
              }`}>
                {currentQ.difficulty} LEVEL
              </span>
            </div>
            <div className="w-full h-2 rounded-full bg-slate-950 overflow-hidden border border-white/5">
              <div 
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"
                style={{ width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Prompt */}
          <h3 className="font-['Orbitron'] text-lg sm:text-2xl font-bold text-white leading-snug">
            {currentQ.question}
          </h3>

          {/* Options List */}
          <div className="space-y-3">
            {currentQ.options.map((option, idx) => {
              const isSelected = selectedOption === idx;
              const isCorrect = idx === currentQ.correctIndex;

              let btnStyle = "bg-slate-950/60 border-white/10 text-slate-200 hover:border-cyan-500/50 hover:bg-slate-800/60";

              if (hasAnswered) {
                if (isCorrect) {
                  btnStyle = "bg-emerald-950/80 border-emerald-500/80 text-emerald-200 shadow-lg shadow-emerald-950/50";
                } else if (isSelected && !isCorrect) {
                  btnStyle = "bg-rose-950/80 border-rose-500/80 text-rose-200 shadow-lg shadow-rose-950/50";
                } else {
                  btnStyle = "bg-slate-950/30 border-white/5 text-slate-500 opacity-60";
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={hasAnswered}
                  className={`w-full p-4 rounded-2xl border text-left font-sans text-sm sm:text-base transition-all flex items-center justify-between group ${btnStyle}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-7 h-7 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span>{option}</span>
                  </div>

                  {hasAnswered && isCorrect && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {hasAnswered && isSelected && !isCorrect && (
                    <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Immediate Educational Explanation Card */}
          {hasAnswered && (
            <div className="p-5 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 space-y-2 animate-in fade-in">
              <div className="font-['Orbitron'] text-xs font-bold text-cyan-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                EDUCATIONAL EXPLANATION & ARCHIVAL FACT
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {currentQ.explanation}
              </p>
              <div className="text-[11px] font-mono text-slate-400 pt-1 border-t border-white/5">
                Historic Significance: {currentQ.historicalContext}
              </div>
            </div>
          )}

          {/* Next Button Footer */}
          {hasAnswered && (
            <div className="pt-2 flex justify-end">
              <button
                onClick={handleNextQuestion}
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-['Orbitron'] font-bold text-xs tracking-wider transition-all shadow-lg shadow-cyan-500/30 group"
              >
                <span>{currentQuestionIndex < QUIZ_QUESTIONS.length - 1 ? 'PROCEED TO NEXT QUESTION' : 'VIEW FINAL SCORE & CERTIFICATE'}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

        </div>
      ) : (
        /* Quiz Completed Screen & Certificate Generator */
        <div className="rounded-3xl bg-slate-900/90 border border-cyan-500/40 p-8 sm:p-12 backdrop-blur-2xl shadow-2xl text-center space-y-8 max-w-3xl mx-auto animate-in zoom-in-95 duration-300">
          
          <div className="w-20 h-20 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center mx-auto text-cyan-400 shadow-xl shadow-cyan-500/30">
            <Award className="w-10 h-10" />
          </div>

          <div>
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
              MISSION EVALUATION COMPLETE
            </div>
            <h3 className="font-['Orbitron'] text-3xl sm:text-4xl font-black text-white">
              {score >= 8 ? 'OUTSTANDING HISTORICAL MASTERY!' : score >= 5 ? 'GREAT WORK, SPACE EXPLORER!' : 'MISSION RECONNAISSANCE CONCLUDED'}
            </h3>
            <p className="text-slate-400 text-sm max-w-md mx-auto mt-2">
              You scored <span className="text-cyan-300 font-bold">{score} out of 10</span> on the official Space Heritage Examination.
            </p>
          </div>

          {/* Certificate Customization Box */}
          <div className="p-6 rounded-2xl bg-slate-950/70 border border-white/10 text-left space-y-4 max-w-md mx-auto">
            <label className="text-xs font-mono text-slate-300 block">
              ENTER YOUR NAME FOR OFFICIAL CERTIFICATE:
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="e.g. Commander Sarah Chen"
              className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-white/15 text-white text-sm focus:outline-none focus:border-cyan-400 font-mono"
            />
            <button
              onClick={handleDownloadCertificate}
              disabled={isGeneratingCert || !userName.trim()}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-['Orbitron'] text-xs font-bold tracking-wider hover:opacity-95 shadow-lg shadow-cyan-500/30 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD HIGH-RES CERTIFICATE (PNG)</span>
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4 pt-4 border-t border-white/10">
            <button
              onClick={handleRestartQuiz}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs transition-colors border border-white/10"
            >
              <RotateCcw className="w-4 h-4" />
              <span>REPLAY SPACE QUIZ</span>
            </button>
          </div>

        </div>
      )}
    </section>
  );
};
