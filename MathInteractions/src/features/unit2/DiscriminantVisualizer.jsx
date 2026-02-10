import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, ReferenceLine } from 'recharts';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function DiscriminantVisualizer() {
    const [a, setA] = useState(1);
    const [b, setB] = useState(-4);
    const [c, setC] = useState(4);
    const [data, setData] = useState([]);

    const D = b * b - 4 * a * c;

    let nature = "";
    let color = "";
    if (D > 0) {
        nature = "Two Distinct Real Roots";
        color = "text-green-600";
    } else if (D === 0) {
        nature = "Two Equal Real Roots";
        color = "text-blue-600";
    } else {
        nature = "No Real Roots";
        color = "text-red-600";
    }

    useEffect(() => {
        const newData = [];
        for (let x = -5; x <= 10; x += 0.5) {
            newData.push({ x, y: a * x * x + b * x + c });
        }
        setData(newData);
    }, [a, b, c]);

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8">
                <div className="flex-1 space-y-6">
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <h3 className="text-lg font-semibold text-slate-700 mb-4">Calculate Discriminant (D)</h3>
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div>
                                <label className="block text-sm font-bold text-slate-500 mb-1">a</label>
                                <input
                                    type="number" value={a} onChange={e => setA(Number(e.target.value))}
                                    className="w-full p-2 border rounded text-center font-bold text-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-500 mb-1">b</label>
                                <input
                                    type="number" value={b} onChange={e => setB(Number(e.target.value))}
                                    className="w-full p-2 border rounded text-center font-bold text-lg"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-slate-500 mb-1">c</label>
                                <input
                                    type="number" value={c} onChange={e => setC(Number(e.target.value))}
                                    className="w-full p-2 border rounded text-center font-bold text-lg"
                                />
                            </div>
                        </div>

                        <div className="font-mono text-xl text-center bg-white p-4 rounded shadow-inner border border-slate-100">
                            D = <span className="text-purple-600">b²</span> - 4<span className="text-blue-600">a</span><span className="text-green-600">c</span>
                            <br />
                            D = ({b})² - 4({a})({c})
                            <br />
                            <motion.div
                                key={D}
                                initial={{ scale: 1.5, color: '#f59e0b' }}
                                animate={{ scale: 1, color: '#1e293b' }}
                                className="mt-2 font-bold text-3xl"
                            >
                                D = {D}
                            </motion.div>
                        </div>
                    </div>

                    <div className={`p-4 rounded-lg border-l-4 text-center ${D > 0 ? 'bg-green-50 border-green-500' :
                        D === 0 ? 'bg-blue-50 border-blue-500' :
                            'bg-red-50 border-red-500'
                        }`}>
                        <h4 className="text-sm uppercase tracking-wide font-bold text-slate-500 mb-1">Nature of Roots</h4>
                        <div className={`text-2xl font-bold ${color}`}>{nature}</div>
                    </div>
                </div>

                <div className="flex-1 h-[400px] bg-slate-50 rounded-lg p-2 border border-slate-100 relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="x" type="number" domain={['auto', 'auto']} allowDataOverflow={false} />
                            <YAxis domain={[-10, 10]} allowDataOverflow={false} />
                            <ReferenceLine y={0} stroke="#000" strokeWidth={2} />
                            <ReferenceLine x={0} stroke="#000" />
                            <Line
                                type="natural"
                                dataKey="y"
                                stroke={D > 0 ? '#16a34a' : D === 0 ? '#2563eb' : '#dc2626'}
                                strokeWidth={3}
                                dot={false}
                                animationDuration={300}
                            />
                        </LineChart>
                    </ResponsiveContainer>

                    <div className="absolute top-4 right-4 bg-white/90 p-2 rounded shadow text-xs">
                        {D > 0 && "Graph crosses x-axis twice"}
                        {D === 0 && "Graph touches x-axis exactly once"}
                        {D < 0 && "Graph does not touch x-axis"}
                    </div>
                </div>
            </div>

            {/* Industrial App: Engineering - Full Width */}
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 text-orange-900 shadow-sm">
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">⚙️</span> Engineering Design
                </h5>
                <p className="text-sm">
                    Engineers use the <strong>discriminant</strong> to analyze structural stability. In bridge design, the discriminant determines if oscillations will dampen, critically dampen, or cause resonance failure. This prevents disasters like the Tacoma Narrows Bridge collapse!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit II: Algebra - Quadratic Equations"
                question="A ball is thrown upward with equation h(t) = -5t² + 20t + 1, where h is height in meters and t is time in seconds. Does the ball reach the ground? (Hint: Check if h(t) = 0 has real solutions)"
                correctAnswer="yes"
                hint="Calculate the discriminant D = b² - 4ac. If D ≥ 0, the ball reaches the ground (real solutions exist)."
                explanation="Correct! D = 20² - 4(-5)(1) = 400 + 20 = 420. Since D is positive, there are two real solutions, meaning the ball goes up and comes back down to ground level. The discriminant tells us the ball's trajectory intersects the ground!"
            />
        </div>
    );
}
