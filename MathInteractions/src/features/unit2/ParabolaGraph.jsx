import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function ParabolaGraph() {
    const [a, setA] = useState(1);
    const [b, setB] = useState(0);
    const [c, setC] = useState(-4);
    const [data, setData] = useState([]);
    const [zeros, setZeros] = useState([]);

    useEffect(() => {
        const newData = [];
        // Generate points for the graph from -10 to 10
        for (let x = -10; x <= 10; x += 0.5) {
            newData.push({ x, y: a * x * x + b * x + c });
        }
        setData(newData);

        // Calculate zeros using the quadratic formula
        const discriminant = b * b - 4 * a * c;
        if (discriminant > 0) {
            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            setZeros([x1, x2].sort((u, v) => u - v));
        } else if (discriminant === 0) {
            const x = -b / (2 * a);
            setZeros([x]);
        } else {
            setZeros([]);
        }
    }, [a, b, c]);

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Interactive Parabola</h3>
                    <div className="h-[400px] w-full bg-slate-50 rounded-lg p-2 border border-slate-100 relative">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                <XAxis dataKey="x" type="number" domain={[-10, 10]} allowDataOverflow={false} stroke="#64748b" />
                                <YAxis dataKey="y" allowDataOverflow={true} domain={[-20, 20]} stroke="#64748b" />
                                <Tooltip
                                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    formatter={(value) => value.toFixed(2)}
                                    labelFormatter={(label) => `x = ${label}`}
                                />
                                <ReferenceLine y={0} stroke="#000" strokeWidth={2} />
                                <ReferenceLine x={0} stroke="#000" strokeWidth={2} />
                                <Line
                                    type="monotone"
                                    dataKey="y"
                                    stroke="#3b82f6"
                                    strokeWidth={3}
                                    dot={false}
                                    animationDuration={300}
                                />
                                {/* Highlight zeros if they exist in valid range */}
                            </LineChart>
                        </ResponsiveContainer>

                        {/* Custom overlays for zeros */}
                        <div className="absolute top-2 right-2 flex flex-col gap-2 pointer-events-none">
                            {zeros.map((z, i) => (
                                <span key={i} className="text-xs bg-red-100 text-red-700 font-bold px-2 py-1 rounded shadow-sm border border-red-200">
                                    Root {i + 1}: {z.toFixed(2)}
                                </span>
                            ))}
                            {zeros.length === 0 && (
                                <span className="text-xs bg-slate-100 text-slate-500 font-bold px-2 py-1 rounded shadow-sm border border-slate-200">
                                    No Real Roots
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-64 flex flex-col gap-6">
                    <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <h4 className="font-semibold text-slate-700 mb-4 border-b border-slate-200 pb-2">Equation Controls</h4>
                        <div className="text-center mb-6 font-mono text-lg bg-white p-2 rounded shadow-inner">
                            <span className="text-blue-600 font-bold">{a}</span>x² + <span className="text-purple-600 font-bold">{b}</span>x + <span className="text-green-600 font-bold">{c}</span> = y
                        </div>

                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-medium text-blue-600">a (Curve)</span>
                                    <span className="text-slate-500">{a}</span>
                                </div>
                                <input
                                    type="range" min="-5" max="5" step="0.1"
                                    value={a} onChange={(e) => setA(parseFloat(e.target.value))}
                                    className="w-full accent-blue-600"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-medium text-purple-600">b (Slope)</span>
                                    <span className="text-slate-500">{b}</span>
                                </div>
                                <input
                                    type="range" min="-10" max="10" step="0.5"
                                    value={b} onChange={(e) => setB(parseFloat(e.target.value))}
                                    className="w-full accent-purple-600"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="font-medium text-green-600">c (Y-intercept)</span>
                                    <span className="text-slate-500">{c}</span>
                                </div>
                                <input
                                    type="range" min="-10" max="10" step="0.5"
                                    value={c} onChange={(e) => setC(parseFloat(e.target.value))}
                                    className="w-full accent-green-600"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800 border border-blue-100">
                        <p><strong>Observation:</strong> The points where the parabola crosses the x-axis (y=0) are the <strong>zeros</strong> of the polynomial.</p>
                    </div>
                </div>
            </div>

            {/* Industrial App: Projectile Motion - Full Width */}
            <div className="bg-slate-800 text-slate-200 p-6 rounded-lg text-sm border border-slate-700 shadow-sm">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                    <span className="text-lg">🏭</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Industrial Application</span>
                </div>
                <h5 className="font-bold text-white mb-2 flex items-center gap-2">
                    🚀 Projectile Motion
                </h5>
                <p>
                    When you throw a ball or launch a rocket, its path is a <strong>Parabola</strong> (due to gravity).
                    Engineers use quadratic equations to predict exactly where it will land!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit II: Algebra"
                question="A ball is thrown upward with an initial velocity. Its height (in meters) after t seconds is given by h(t) = -5t² + 20t + 2. At what time(s) does the ball hit the ground (h=0)? Round to 1 decimal place and enter the LARGER value."
                correctAnswer="4.1"
                hint="Use the quadratic formula: t = (-b ± √(b²-4ac)) / 2a, where a=-5, b=20, c=2. You want the positive root."
                explanation="Perfect! Engineers use this exact calculation to predict landing zones for projectiles, from sports balls to rocket stages. In aerospace, getting this wrong by even 0.1 seconds could mean missing the landing pad by hundreds of meters!"
            />
        </div >
    );
}
