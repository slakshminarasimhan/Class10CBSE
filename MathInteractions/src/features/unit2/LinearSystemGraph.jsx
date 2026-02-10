import { useState, useMemo } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function LinearSystemGraph() {
    const [l1, setL1] = useState({ m: 1, c: 0 }); // y = mx + c format for simplicity in UI, though ax+by+c is standard
    const [l2, setL2] = useState({ m: -1, c: 4 });

    // Generate data points
    const data = useMemo(() => {
        const points = [];
        for (let x = -10; x <= 10; x += 1) {
            points.push({
                x,
                y1: l1.m * x + l1.c,
                y2: l2.m * x + l2.c,
            });
        }
        return points;
    }, [l1, l2]);

    // Determine system state
    let state = "Intersecting";
    let solution = null;

    if (l1.m === l2.m) {
        if (l1.c === l2.c) {
            state = "Coincident (Infinite Solutions)";
        } else {
            state = "Parallel (No Solution)";
        }
    } else {
        // Find intersection: m1*x + c1 = m2*x + c2 => x(m1 - m2) = c2 - c1 => x = (c2 - c1) / (m1 - m2)
        const x = (l2.c - l1.c) / (l1.m - l2.m);
        const y = l1.m * x + l1.c;
        state = "Intersecting (Unique Solution)";
        solution = { x, y };
    }

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Graphical Representation</h3>
                    <div className="flex justify-between items-center mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-bold border
                ${state.includes('Intersecting') ? 'bg-green-100 text-green-700 border-green-200' : ''}
                ${state.includes('Parallel') ? 'bg-red-100 text-red-700 border-red-200' : ''}
                ${state.includes('Coincident') ? 'bg-blue-100 text-blue-700 border-blue-200' : ''}
            `}>
                            {state}
                        </span>
                        {solution && (
                            <span className="text-sm font-mono text-slate-600">
                                Solution: ({solution.x.toFixed(2)}, {solution.y.toFixed(2)})
                            </span>
                        )}
                    </div>

                    <div className="h-[400px] w-full bg-slate-50 rounded-lg p-2 border border-slate-100">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={data} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                <XAxis dataKey="x" type="number" domain={[-10, 10]} allowDataOverflow={false} stroke="#64748b" />
                                <YAxis allowDataOverflow={false} domain={[-10, 10]} stroke="#64748b" />
                                <Tooltip formatter={(value) => value.toFixed(2)} />
                                <ReferenceLine y={0} stroke="#000" />
                                <ReferenceLine x={0} stroke="#000" />
                                <Line type="monotone" dataKey="y1" stroke="#3b82f6" strokeWidth={3} dot={false} name="Line 1" />
                                <Line type="monotone" dataKey="y2" stroke="#ef4444" strokeWidth={3} dot={false} name="Line 2" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="w-full lg:w-80 space-y-8">
                    {/* Line 1 Controls */}
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                        <h4 className="font-bold text-blue-800 mb-4 flex justify-between">
                            Line 1
                            <span className="font-mono text-sm">y = {l1.m}x + {l1.c}</span>
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-blue-600 block mb-1">Slope (m1)</label>
                                <input
                                    type="range" min="-5" max="5" step="0.5"
                                    value={l1.m} onChange={(e) => setL1({ ...l1, m: parseFloat(e.target.value) })}
                                    className="w-full accent-blue-600"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-blue-600 block mb-1">Y-Intercept (c1)</label>
                                <input
                                    type="range" min="-10" max="10" step="1"
                                    value={l1.c} onChange={(e) => setL1({ ...l1, c: parseFloat(e.target.value) })}
                                    className="w-full accent-blue-600"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Line 2 Controls */}
                    <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                        <h4 className="font-bold text-red-800 mb-4 flex justify-between">
                            Line 2
                            <span className="font-mono text-sm">y = {l2.m}x + {l2.c}</span>
                        </h4>
                        <div className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-red-600 block mb-1">Slope (m2)</label>
                                <input
                                    type="range" min="-5" max="5" step="0.5"
                                    value={l2.m} onChange={(e) => setL2({ ...l2, m: parseFloat(e.target.value) })}
                                    className="w-full accent-red-600"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-bold text-red-600 block mb-1">Y-Intercept (c2)</label>
                                <input
                                    type="range" min="-10" max="10" step="1"
                                    value={l2.c} onChange={(e) => setL2({ ...l2, c: parseFloat(e.target.value) })}
                                    className="w-full accent-red-600"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 p-4 rounded text-sm text-slate-600">
                        <ul className="list-disc pl-4 space-y-1">
                            <li><strong>Consistent</strong>: Lines intersect at one point {'($a_1/a_2 \\neq b_1/b_2$)'}.</li>
                            <li><strong>Inconsistent</strong>: Lines are parallel {'($a_1/a_2 = b_1/b_2 \\neq c_1/c_2$)'}.</li>
                            <li><strong>Dependent</strong>: Lines are coincident {'($a_1/a_2 = b_1/b_2 = c_1/c_2$)'}.</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Industrial App: Production - Full Width */}
            <div className="bg-emerald-50 p-6 rounded-lg text-sm border border-emerald-100 text-emerald-900 shadow-sm">
                <h5 className="font-bold mb-1 flex items-center gap-2">
                    🏭 Production Planning
                </h5>
                <p>
                    Factories use systems of linear equations to optimize production.
                    e.g., <em>"If Machine A takes 2h and Machine B takes 3h to make product X..."</em> — finding the intersection point tells them the perfect schedule!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit II: Algebra"
                question="A factory produces chairs and tables. Each chair requires 2 hours of labor and each table requires 3 hours. If the factory has 60 hours of labor available and wants to produce an equal number of chairs and tables, how many of EACH can they produce?"
                correctAnswer="12"
                hint="Let x = number of chairs = number of tables. Total labor: 2x + 3x = 60. Solve for x."
                explanation="Excellent! By solving 2x + 3x = 60, we get 5x = 60, so x = 12. This type of optimization is used daily in manufacturing to maximize output while respecting resource constraints like labor, materials, and machine time."
            />
        </div >
    );
}
