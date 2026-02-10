import { useState } from 'react';
import { motion } from 'framer-motion';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function APSums() {
    const [a, setA] = useState(2); // First term
    const [d, setD] = useState(1); // Common difference
    const [n, setN] = useState(5); // Number of terms
    const [showFlipped, setShowFlipped] = useState(false);

    const terms = Array.from({ length: n }, (_, i) => a + i * d);
    const lastTerm = terms[terms.length - 1];
    const sum = (n / 2) * (2 * a + (n - 1) * d);

    // Rectangle dimensions
    const rectWidth = n;
    const rectHeight = a + lastTerm; // first + last

    return (
        <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8">
                <div className="flex-1 space-y-8">
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-700 mb-4">Arithmetic Progression Settings</h3>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-slate-500">First Term (a)</label>
                                <input type="range" min="1" max="5" value={a} onChange={e => setA(Number(e.target.value))} className="accent-blue-600 w-32" />
                                <span className="font-mono font-bold w-8 text-right">{a}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-slate-500">Common Difference (d)</label>
                                <input type="range" min="1" max="3" value={d} onChange={e => setD(Number(e.target.value))} className="accent-blue-600 w-32" />
                                <span className="font-mono font-bold w-8 text-right">{d}</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-slate-500">Number of Terms (n)</label>
                                <input type="range" min="3" max="10" value={n} onChange={e => setN(Number(e.target.value))} className="accent-blue-600 w-32" />
                                <span className="font-mono font-bold w-8 text-right">{n}</span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <p className="text-sm text-slate-500 mb-2">Sequence:</p>
                            <div className="flex flex-wrap gap-2 font-mono text-slate-800">
                                {terms.map((t, i) => (
                                    <span key={i} className="bg-white border px-2 py-1 rounded shadow-sm">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-100 rounded-lg">
                        <button
                            onClick={() => setShowFlipped(!showFlipped)}
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded shadow transition-colors"
                        >
                            {showFlipped ? "Reset Visualization" : "Show Geometric Proof"}
                        </button>
                        <p className="text-xs text-blue-800 mt-2 text-center">
                            Click to add a flipped copy of the stairs to form a rectangle.
                        </p>
                    </div>

                    <div className="font-mono text-sm bg-slate-900 text-slate-300 p-4 rounded-lg">
                        <p>{showFlipped ? "Area of Rectangle = n × (a + l)" : "Area of Steps = Sum of AP"}</p>
                        <p className="mt-2 text-white text-lg font-bold">
                            {showFlipped ?
                                `${n} × (${a} + ${lastTerm}) = ${n * rectHeight}` :
                                `Sum = ${sum}`
                            }
                        </p>
                        {showFlipped && (
                            <p className="mt-2 text-green-400">
                                Sum of AP = Area / 2 = {sum}
                            </p>
                        )}
                    </div>
                </div>

                <div className="flex-1 min-h-[400px] flex items-end justify-center bg-slate-100 rounded-xl overflow-hidden relative p-8">
                    {/* Grid Background */}
                    <div className="absolute inset-0 opacity-10"
                        style={{
                            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                            backgroundSize: '20px 20px'
                        }}>
                    </div>

                    <div className="relative flex items-end gap-1">
                        {terms.map((term, i) => (
                            <div key={i} className="flex flex-col justify-end w-8 relative">
                                {/* Labels for n */}
                                <div className="text-xs text-slate-400 text-center mb-1">{i + 1}</div>

                                {/* Base Block */}
                                <motion.div
                                    layout
                                    className="bg-blue-500 border border-blue-600 relative z-10"
                                    style={{ height: term * 20 }} // Scale factor
                                >
                                    <span className="absolute bottom-1 left-0 right-0 text-center text-xs text-white/80 font-mono">{term}</span>
                                </motion.div>

                                {/* Flipped Block (Opposite) - Logic: term[i] pairs with term[n-1-i] */}
                                {/* Actually for the visual proof, we just stack the REVERSE sequence on top */}
                                {/* Term i gets stacked with Term (n-1-i) ... wait, standard proof stacks a+l. 
                           So index i (val a + id) gets stacked with index n-1-i (val a + (n-1-i)d)?
                           (a+id) + (a + (n-1-i)d) = 2a + (n-1)d. Constant height. YES.
                       */}
                                <motion.div
                                    initial={{ opacity: 0, y: -50 }}
                                    animate={{ opacity: showFlipped ? 1 : 0, y: showFlipped ? 0 : -50 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="bg-green-500 border border-green-600 absolute w-full"
                                    style={{
                                        height: terms[n - 1 - i] * 20,
                                        bottom: term * 20 // Stack on top of base block
                                    }}
                                >
                                    {showFlipped && (
                                        <span className="absolute top-1 left-0 right-0 text-center text-xs text-white/80 font-mono">
                                            {terms[n - 1 - i]}
                                        </span>
                                    )}
                                </motion.div>
                            </div>
                        ))}

                        {/* Width Label */}
                        <div className="absolute -bottom-8 left-0 right-0 text-center border-t border-slate-400">
                            <span className="bg-slate-100 px-2 text-sm text-slate-600">width = n ({n})</span>
                        </div>

                        {/* Height Label */}
                        {showFlipped && (
                            <div className="absolute -right-16 top-0 bottom-0 flex items-center border-l border-slate-400 h-full">
                                <span className="bg-slate-100 py-2 -ml-3 text-sm text-slate-600 rotate-90 whitespace-nowrap">
                                    height = a + l ({a + lastTerm})
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Industrial App: Finance - Full Width */}
            {/* Industrial App: Finance - Full Width */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-200 text-green-900 shadow-sm">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                    <span className="text-lg">🏭</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Industrial Application</span>
                </div>
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">💰</span> Finance: Simple Interest
                </h5>
                <p className="text-sm mb-4">
                    Savings accounts that pay <strong>Simple Interest</strong> follow an Arithmetic Progression!
                </p>
                <div className="bg-white/50 p-3 rounded text-xs font-mono border border-green-100 block">
                    Month 1: ₹100<br />
                    Month 2: ₹110 (+₹10)<br />
                    Month 3: ₹120 (+₹10)
                </div>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit II: Algebra"
                question="You invest ₹1000 at 5% simple annual interest. Using the AP formula for sum (S_n = n/2 × (2a + (n-1)d)), calculate the TOTAL amount (principal + interest) after 10 years. Round to the nearest rupee."
                correctAnswer="1500"
                hint="First term a = 1050 (principal + first year interest). Common difference d = 50. Number of terms n = 10. But wait - you need TOTAL, which is the 10th term value, not the sum! Use a + (n-1)d."
                explanation="Correct! After 10 years: 1000 + (10 × 50) = ₹1500. Banks use AP formulas to calculate interest schedules, loan amortization tables, and investment growth projections. Understanding this helps you make informed financial decisions!"
            />
        </div>
    );
}
