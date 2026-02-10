import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function Probability() {
    const [redCount, setRedCount] = useState(3);
    const [blueCount, setBlueCount] = useState(2);
    const [draws, setDraws] = useState([]);
    const [isSimulating, setIsSimulating] = useState(false);

    const total = redCount + blueCount;
    const pRed = total === 0 ? 0 : redCount / total;
    const pBlue = total === 0 ? 0 : blueCount / total;

    useEffect(() => {
        if (isSimulating) {
            const interval = setInterval(() => {
                if (draws.length >= 1000) { // Stop at 1000 for perf
                    setIsSimulating(false);
                    return;
                }
                // Simulate draw
                const r = Math.random();
                const result = r < pRed ? 'red' : 'blue';
                setDraws(prev => [...prev, result]);
            }, 10); // Find draw every 10ms
            return () => clearInterval(interval);
        }
    }, [isSimulating, draws.length, pRed]);

    const reset = () => {
        setDraws([]);
        setIsSimulating(false);
    };

    const redWins = draws.filter(d => d === 'red').length;
    const blueWins = draws.filter(d => d === 'blue').length;
    const totalWins = draws.length;

    const empRed = totalWins === 0 ? 0 : redWins / totalWins;
    const empBlue = totalWins === 0 ? 0 : blueWins / totalWins;

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Marble Simulation</h3>

                    <div className="flex gap-8 mb-6">
                        {/* Bag Visualization */}
                        <div className="relative w-40 h-40 bg-slate-100 rounded-full border-4 border-slate-300 flex flex-wrap items-center justify-center p-4 gap-1 overflow-hidden">
                            {Array.from({ length: redCount }).map((_, i) => (
                                <div key={`r-${i}`} className="w-4 h-4 rounded-full bg-red-500 shadow-sm"></div>
                            ))}
                            {Array.from({ length: blueCount }).map((_, i) => (
                                <div key={`b-${i}`} className="w-4 h-4 rounded-full bg-blue-500 shadow-sm"></div>
                            ))}
                        </div>

                        {/* Results Visualization */}
                        <div className="flex-1 space-y-4">
                            <div>
                                <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                                    <span>Red Draws ({redWins})</span>
                                    <span>{totalWins > 0 ? (empRed * 100).toFixed(1) : 0}%</span>
                                </div>
                                <div className="h-4 bg-slate-100 rounded overflow-hidden">
                                    <motion.div
                                        className="h-full bg-red-500"
                                        animate={{ width: `${empRed * 100}%` }}
                                    />
                                </div>
                                <div className="text-xs text-slate-400 mt-1 flex justify-between">
                                    <span>Target: {(pRed * 100).toFixed(1)}%</span>
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between text-xs font-bold text-slate-500 mb-1">
                                    <span>Blue Draws ({blueWins})</span>
                                    <span>{totalWins > 0 ? (empBlue * 100).toFixed(1) : 0}%</span>
                                </div>
                                <div className="h-4 bg-slate-100 rounded overflow-hidden">
                                    <motion.div
                                        className="h-full bg-blue-500"
                                        animate={{ width: `${empBlue * 100}%` }}
                                    />
                                </div>
                                <div className="text-xs text-slate-400 mt-1 flex justify-between">
                                    <span>Target: {(pBlue * 100).toFixed(1)}%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-center">
                        <p className="text-sm font-bold text-slate-700 mb-2">Total Trials: {totalWins}</p>
                        <div className="flex gap-4 justify-center">
                            <button
                                onClick={() => setIsSimulating(!isSimulating)}
                                className={`px-4 py-2 rounded font-bold text-white transition-colors ${isSimulating ? 'bg-orange-500 hover:bg-orange-600' : 'bg-green-600 hover:bg-green-700'}`}
                            >
                                {isSimulating ? "Pause" : "Start Simulation"}
                            </button>
                            <button
                                onClick={reset}
                                className="px-4 py-2 rounded font-bold bg-slate-200 hover:bg-slate-300 text-slate-700 transition-colors"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-64 space-y-6">
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <h3 className="font-semibold text-slate-700 mb-4 border-b pb-2">Setup Bag</h3>

                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Red Marbles</label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="range" min="0" max="10"
                                        value={redCount} onChange={e => { setRedCount(Number(e.target.value)); reset(); }}
                                        className="flex-1 accent-red-500"
                                    />
                                    <span className="font-bold text-red-600 w-6 text-right">{redCount}</span>
                                </div>
                            </div>

                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Blue Marbles</label>
                                <div className="flex items-center gap-2">
                                    <input
                                        type="range" min="0" max="10"
                                        value={blueCount} onChange={e => { setBlueCount(Number(e.target.value)); reset(); }}
                                        className="flex-1 accent-blue-500"
                                    />
                                    <span className="font-bold text-blue-600 w-6 text-right">{blueCount}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 text-slate-300 p-6 rounded-lg font-mono text-sm">
                        <h4 className="text-white font-bold mb-4 border-b border-slate-700 pb-2">Theoretical Prob.</h4>

                        <div className="space-y-2">
                            <p className="flex justify-between">
                                <span>P(Red)</span>
                                <span className="text-red-400 font-bold">{redCount}/{total} = {(pRed).toFixed(2)}</span>
                            </p>
                            <p className="flex justify-between">
                                <span>P(Blue)</span>
                                <span className="text-blue-400 font-bold">{blueCount}/{total} = {(pBlue).toFixed(2)}</span>
                            </p>
                        </div>

                        <p className="mt-4 text-xs italic text-slate-500">
                            As trials increase, empirical probability approaches theoretical probability.
                        </p>
                    </div>
                </div>
            </div>

            {/* Industrial App: Insurance - Full Width */}
            <div className="bg-rose-50 p-6 rounded-lg border border-rose-200 text-rose-900 shadow-sm">
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">☂️</span> Insurance
                </h5>
                <p className="text-sm">
                    Actuaries use <strong>Probability</strong> to calculate insurance premiums.
                    By analyzing risk data (car accidents, health issues), they determine the likelihood of a claim and set prices to cover costs.
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit VII: Statistics & Probability"
                question="An insurance company finds that 2 out of every 100 drivers file a claim each year. If they insure 5000 drivers, how many claims should they expect? (Calculate the probability and multiply by total drivers.)"
                correctAnswer="100"
                hint="Probability = 2/100 = 0.02. Expected claims = 0.02 × 5000."
                explanation="Perfect! 0.02 × 5000 = 100 claims. Insurance companies use probability to predict total payouts and set premiums accordingly. They must collect enough to cover claims plus operating costs while remaining competitive. This is pure applied probability!"
            />
        </div >
    );
}
