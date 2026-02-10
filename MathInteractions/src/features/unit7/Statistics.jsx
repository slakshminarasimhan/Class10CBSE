import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function Statistics() {
    // Initial Data: Class Intervals (Marks) vs Frequency (No. of Students)
    const [data, setData] = useState([
        { range: '0-10', mid: 5, freq: 5 },
        { range: '10-20', mid: 15, freq: 10 },
        { range: '20-30', mid: 25, freq: 15 },
        { range: '30-40', mid: 35, freq: 8 },
        { range: '40-50', mid: 45, freq: 2 }
    ]);

    const handleFreqChange = (index, val) => {
        const newData = [...data];
        newData[index].freq = Number(val);
        setData(newData);
    };

    // Calculations
    const totalFreq = data.reduce((acc, curr) => acc + curr.freq, 0);
    const sumFX = data.reduce((acc, curr) => acc + (curr.mid * curr.freq), 0);
    const mean = totalFreq === 0 ? 0 : sumFX / totalFreq;

    // Mode (Max Frequency class)
    const maxFreq = Math.max(...data.map(d => d.freq));
    const modeClass = data.find(d => d.freq === maxFreq);
    // Rough estimate of mode using mid-point of modal class for simple viz
    const modeEst = modeClass ? modeClass.mid : 0;
    // Formula: Mode = l + ((f1-f0)/(2f1-f0-f2)) * h  (Requires contiguous classes logic)
    // Let's stick to identifying the Modal Class for visual simplicity or basic estimate.

    // Median
    // Needs cumulative frequency
    let cf = 0;
    const medianPos = totalFreq / 2;
    let medianClass = null;
    for (let d of data) {
        cf += d.freq;
        if (cf >= medianPos) {
            medianClass = d;
            break;
        }
    }
    const medianEst = medianClass ? medianClass.mid : 0;

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Interactive Histogram</h3>

                    <div className="h-[350px] w-full bg-slate-50 border border-slate-200 rounded-lg p-4 relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                                <XAxis dataKey="range" />
                                <YAxis allowDecimals={false} />
                                <Tooltip />
                                <Bar dataKey="freq" fill="#3b82f6" radius={[4, 4, 0, 0]}>
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.freq === maxFreq ? '#ef4444' : '#3b82f6'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>

                        {/* Mean Line */}
                        {
                            totalFreq > 0 && (
                                <div
                                    className="absolute top-4 bottom-8 border-l-2 border-dashed border-green-500 z-10 transition-all duration-300"
                                    style={{ left: `${(mean / 50) * 100}%` }} // Approximate X position based on max range 50
                                >
                                    <div className="bg-green-100 text-green-700 text-xs font-bold px-1 rounded absolute -top-4 -left-3">
                                        x̄
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="mt-4 flex gap-4 justify-center text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-red-500 rounded"></div>
                            <span>Modal Class (Highest Freq)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 border-l-2 border-dashed border-green-500 h-4"></div>
                            <span>Mean (Average)</span>
                        </div>
                    </div>
                </div>

                <div className="w-full lg:w-80 space-y-6">
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <h3 className="font-semibold text-slate-700 mb-4 border-b pb-2">Adjust Frequencies</h3>
                        <div className="space-y-4 max-h-[250px] overflow-y-auto pr-2">
                            {data.map((d, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <span className="text-xs font-bold w-10 text-slate-500">{d.range}</span>
                                    <input
                                        type="range" min="0" max="20"
                                        value={d.freq} onChange={e => handleFreqChange(i, e.target.value)}
                                        className="flex-1 accent-blue-600"
                                    />
                                    <span className="text-sm font-mono w-6 text-right">{d.freq}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-slate-900 text-slate-300 p-6 rounded-lg font-mono text-sm space-y-3">
                        <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                            <span>Sum of Frequencies (N)</span>
                            <span className="text-white font-bold">{totalFreq}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                            <span>Mean (x̄)</span>
                            <span className="text-green-400 font-bold">{mean.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                            <span>Modal Class</span>
                            <span className="text-red-400 font-bold">{modeClass ? modeClass.range : '-'}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Median Class (N/2)</span>
                            <span className="text-blue-400 font-bold">{medianClass ? medianClass.range : '-'}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Industrial App: Data Science - Full Width */}
            <div className="bg-violet-50 p-6 rounded-lg border border-violet-200 text-violet-900 shadow-sm">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                    <span className="text-lg">🏭</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Industrial Application</span>
                </div>
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">📊</span> Data Science
                </h5>
                <p className="text-sm">
                    Tech companies like Netflix or Spotify use <strong>Statistics</strong> (Mean, Median, Mode) to analyze millions of users' habits and recommend movies or songs you might like!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit VII: Statistics & Probability"
                question="A market research team surveys 100 customers about their spending. The data shows: 20 spent ₹10, 30 spent ₹20, 40 spent ₹30, and 10 spent ₹40. What is the mean spending (in rupees)?"
                correctAnswer="24"
                hint="Mean = Σ(frequency × value) / total. Calculate: (20×10 + 30×20 + 40×30 + 10×40) / 100."
                explanation="Excellent! (200 + 600 + 1200 + 400) / 100 = 2400 / 100 = ₹24. Companies use mean, median, and mode to understand customer behavior, set pricing strategies, and forecast demand. This data-driven approach is the foundation of modern business!"
            />
        </div>
    );
}
