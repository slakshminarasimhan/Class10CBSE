import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Search, ZoomIn } from 'lucide-react';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function ContradictionJourney() {
    const [p, setP] = useState(1);
    const [q, setQ] = useState(1);
    const target = Math.sqrt(2);
    const approximation = p / q;
    const square = approximation * approximation;
    const gap = Math.abs(target - approximation);

    const [step, setStep] = useState(0);

    const proofSteps = [
        { text: "Assume √2 is rational. Then it can be written as p/q where p and q are co-prime integers.", check: () => true },
        { text: "Squaring both sides gives 2 = p²/q², which means p² = 2q².", check: () => true },
        { text: "This implies p² is even. If p² is even, then p must also be even (let p = 2k).", check: () => true },
        { text: "Substitute p=2k into the equation: (2k)² = 2q² → 4k² = 2q² → 2k² = q².", check: () => true },
        { text: "This implies q² is even, so q must also be even.", check: () => true },
        { text: "CONTRADICTION! We started by saying p and q have no common factors, but we proved both are divisible by 2.", check: () => true },
        { text: "Therefore, our assumption was wrong. √2 cannot be written as a simple fraction. It is Irrational.", check: () => true },
    ];

    return (
        <div className="flex flex-col gap-8">
            {/* Exploration Phase */}
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                <h3 className="font-semibold text-slate-800 mb-4 flex items-center gap-2">
                    <Search className="w-5 h-5 text-blue-600" />
                    Challenge: Find the Fraction
                </h3>
                <p className="text-sm text-slate-600 mb-6">
                    Can you find integers <strong>p</strong> and <strong>q</strong> such that p/q is exactly equal to √2?
                </p>

                <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                    <div className="flex flex-col items-center gap-2 bg-white p-4 rounded-lg shadow-sm border border-slate-200">
                        <div className="flex flex-col items-center">
                            <label className="text-xs text-slate-400 font-bold mb-1">p (numerator)</label>
                            <input
                                type="number"
                                value={p}
                                onChange={e => setP(Number(e.target.value))}
                                className="w-20 text-center p-2 text-xl font-bold border-b-2 border-blue-500 focus:outline-none"
                            />
                        </div>
                        <div className="w-full h-0.5 bg-slate-800 my-1"></div>
                        <div className="flex flex-col items-center">
                            <input
                                type="number"
                                value={q}
                                onChange={e => setQ(Number(e.target.value))}
                                className="w-20 text-center p-2 text-xl font-bold border-b-2 border-blue-500 focus:outline-none"
                            />
                            <label className="text-xs text-slate-400 font-bold mt-1">q (denominator)</label>
                        </div>
                    </div>

                    <div className="flex flex-col gap-2 text-center">
                        <span className="text-3xl text-slate-300 font-light">=</span>
                    </div>

                    <div className="bg-slate-900 text-white p-4 rounded-lg font-mono text-center min-w-[12rem]">
                        <div className="text-sm text-slate-400 mb-1">Your Value</div>
                        <div className="text-2xl text-yellow-400 mb-2">{approximation.toFixed(6)}</div>
                        <div className="text-xs text-slate-500 border-t border-slate-700 pt-2">
                            Square: {square.toFixed(6)}
                        </div>
                    </div>

                    <div className="bg-green-100 text-green-900 p-4 rounded-lg font-mono text-center min-w-[12rem] border border-green-200">
                        <div className="text-sm text-green-700 mb-1">Target (√2)</div>
                        <div className="text-2xl font-bold mb-2">1.414213...</div>
                        <div className="text-xs text-green-600 border-t border-green-200 pt-2">
                            Square: 2.000000
                        </div>
                    </div>
                </div>

                <div className="mt-8 relative h-24 bg-slate-200 rounded-lg border border-slate-300 mx-4">
                    {/* Visual Scale from 1 to 2 */}
                    <div className="absolute left-0 w-full h-[1px] bg-slate-400 top-1/2"></div>

                    {/* Major Ticks (0.1) */}
                    {[1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0].map((v) => (
                        <div key={v} className="absolute h-6 w-[1px] bg-slate-500 top-1/2 -mt-3" style={{ left: `${(v - 1) * 100}%` }}>
                            <span className="absolute top-7 -left-3 text-xs font-mono font-bold text-slate-600 select-none">
                                {v.toFixed(1)}
                            </span>
                        </div>
                    ))}

                    {/* Target Marker (√2) */}
                    <motion.div
                        className="absolute top-0 h-full w-[2px] bg-green-500 z-10"
                        style={{ left: `${(target - 1) * 100}%` }}
                    >
                        <div className="absolute -top-8 -left-3 flex flex-col items-center">
                            <span className="text-green-700 font-bold text-sm bg-green-100 px-2 py-0.5 rounded border border-green-200 shadow-sm whitespace-nowrap">Target: √2</span>
                            <div className="w-[1px] h-2 bg-green-500"></div>
                        </div>
                    </motion.div>

                    {/* User Marker */}
                    <motion.div
                        className="absolute top-0 h-full w-[2px] bg-blue-500 z-20"
                        animate={{ left: `${Math.min(Math.max((approximation - 1) * 100, 0), 100)}%` }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                        <div className="absolute -bottom-8 -left-3 flex flex-col items-center">
                            <div className="w-[1px] h-2 bg-blue-500"></div>
                            <span className="text-blue-700 font-bold text-xs bg-blue-100 px-2 py-0.5 rounded border border-blue-200 shadow-sm whitespace-nowrap">You: {p}/{q}</span>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-4 text-center">
                    {gap < 0.0001 ? (
                        <p className="text-green-600 font-semibold">Extremely close! But if you zoom in infinitely, there's still a tiny gap.</p>
                    ) : (
                        <p className="text-slate-500 text-sm">Try adjusting p and q to get closer to the green line.</p>
                    )}
                </div>
            </div>

            {/* Proof Phase */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="font-semibold text-slate-800 mb-6 flex items-center gap-2">
                    <ZoomIn className="w-5 h-5 text-purple-600" />
                    The Logic of Contradiction
                </h3>

                <div className="space-y-4">
                    {proofSteps.map((s, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: step >= i ? 1 : 0.3, x: step >= i ? 0 : -20 }}
                            className={`p-4 rounded-lg border-l-4 ${step === i ? 'bg-purple-50 border-purple-500 shadow-sm' : 'border-slate-200'}`}
                        >
                            <div className="flex justify-between items-start">
                                <p className={`text-sm ${step === i ? 'text-slate-900 font-medium' : 'text-slate-400'}`}>{s.text}</p>
                                {step === i && i < proofSteps.length - 1 && (
                                    <button
                                        onClick={() => setStep(prev => prev + 1)}
                                        className="ml-4 shrink-0 bg-purple-600 text-white rounded-full p-1 hover:bg-purple-700"
                                    >
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {step === proofSteps.length - 1 && (
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="mt-6 p-4 bg-red-50 text-red-700 border border-red-200 rounded-lg text-center font-bold"
                    >
                        Q.E.D. - √2 is Irrational
                    </motion.div>
                )}

                {step < proofSteps.length - 1 && (
                    <div className="mt-6 flex justify-center">
                        <button
                            onClick={() => setStep(0)}
                            className="text-xs text-slate-400 hover:text-slate-600"
                        >
                            Reset Proof
                        </button>
                    </div>
                )}
            </div>

            {/* Industrial Application: A4 Paper - Full Width */}
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-4 items-center">
                <div className="p-3 bg-slate-100 rounded-full shadow-sm">
                    <span className="text-2xl">📄</span>
                </div>
                <div>
                    <h4 className="font-bold text-slate-700 mb-1">Industrial Application: Why A4 Paper is Special</h4>
                    <p className="text-sm text-slate-600">
                        International paper sizes (A3, A4, A5) are based on the <strong>Aspect Ratio 1:√2</strong>.
                        When you fold an A4 sheet in half, the ratio of sides remains exactly 1:√2 (becoming A5).
                        This ensures content scales perfectly without distortion when resizing documents!
                    </p>
                </div>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit I: Number Systems"
                question="The aspect ratio of A4 paper is 1:√2. If the width of A4 paper is 210mm, calculate the height to the nearest whole number. (Hint: √2 ≈ 1.414)"
                correctAnswer="297"
                hint="Multiply the width (210) by √2 (approx 1.414). 210 × 1.414 = ?"
                explanation="Spot on! 297mm is the standard height of A4 paper. This properties allows for perfect scaling: two A5 sheets side-by-side equal one A4 sheet, and two A4 sheets equal one A3 sheet, all maintaining the same proportion!"
            />
        </div>
    );
}
