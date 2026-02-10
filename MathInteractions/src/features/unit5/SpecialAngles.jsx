import { useState } from 'react';
import { motion } from 'framer-motion';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function SpecialAngles() {
    const [selectedAngle, setSelectedAngle] = useState(45);

    const specialAngles = {
        0: { sin: '0', cos: '1', tan: '0', sinVal: 0, cosVal: 1 },
        30: { sin: '1/2', cos: '√3/2', tan: '1/√3', sinVal: 0.5, cosVal: Math.sqrt(3) / 2 },
        45: { sin: '√2/2', cos: '√2/2', tan: '1', sinVal: Math.sqrt(2) / 2, cosVal: Math.sqrt(2) / 2 },
        60: { sin: '√3/2', cos: '1/2', tan: '√3', sinVal: Math.sqrt(3) / 2, cosVal: 0.5 },
        90: { sin: '1', cos: '0', tan: 'undefined', sinVal: 1, cosVal: 0 }
    };

    const current = specialAngles[selectedAngle];

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-6">Special Angles in Trigonometry</h3>
                <p className="text-sm text-slate-600 mb-6">
                    Certain angles have exact trigonometric values that are frequently used in mathematics and engineering.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Unit Circle Visualization */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-blue-600">Unit Circle</h4>

                        <div className="h-[300px] bg-slate-50 rounded-lg border border-slate-200 flex items-center justify-center relative">
                            <svg width="280" height="280" viewBox="-140 -140 280 280">
                                {/* Grid */}
                                <line x1="-140" y1="0" x2="140" y2="0" stroke="#cbd5e1" strokeWidth="1" />
                                <line x1="0" y1="-140" x2="0" y2="140" stroke="#cbd5e1" strokeWidth="1" />

                                {/* Unit Circle */}
                                <circle cx="0" cy="0" r="100" fill="none" stroke="#3b82f6" strokeWidth="2" />

                                {/* All special angle markers */}
                                {Object.keys(specialAngles).map(angle => {
                                    const rad = (angle * Math.PI) / 180;
                                    const x = 100 * Math.cos(rad);
                                    const y = -100 * Math.sin(rad);
                                    return (
                                        <circle
                                            key={angle}
                                            cx={x} cy={y} r="4"
                                            fill={angle == selectedAngle ? '#ef4444' : '#94a3b8'}
                                        />
                                    );
                                })}

                                {/* Selected angle visualization */}
                                <motion.g
                                    animate={{
                                        rotate: -selectedAngle
                                    }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <line x1="0" y1="0" x2="100" y2="0" stroke="#ef4444" strokeWidth="3" />
                                </motion.g>

                                {/* sin and cos projections */}
                                <motion.line
                                    animate={{
                                        x1: 100 * current.cosVal,
                                        y1: 0,
                                        x2: 100 * current.cosVal,
                                        y2: -100 * current.sinVal
                                    }}
                                    stroke="#10b981" strokeWidth="2" strokeDasharray="4,4"
                                />
                                <motion.line
                                    animate={{
                                        x1: 0,
                                        y1: -100 * current.sinVal,
                                        x2: 100 * current.cosVal,
                                        y2: -100 * current.sinVal
                                    }}
                                    stroke="#f59e0b" strokeWidth="2" strokeDasharray="4,4"
                                />

                                {/* Labels */}
                                <text x="110" y="5" fontSize="12" fill="#64748b">0°</text>
                                <text x="-5" y="-110" fontSize="12" fill="#64748b">90°</text>
                                <text x="-20" y="20" fontSize="12" fill="#ef4444" fontWeight="bold">{selectedAngle}°</text>
                            </svg>
                        </div>

                        {/* Angle Selector */}
                        <div className="flex gap-2 justify-center flex-wrap">
                            {Object.keys(specialAngles).map(angle => (
                                <button
                                    key={angle}
                                    onClick={() => setSelectedAngle(Number(angle))}
                                    className={`px-4 py-2 rounded-lg font-semibold transition-colors ${selectedAngle == angle
                                            ? 'bg-red-500 text-white'
                                            : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                        }`}
                                >
                                    {angle}°
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Values Table */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-purple-600">Exact Values</h4>

                        {/* Current angle values */}
                        <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                            <p className="text-sm text-purple-600 mb-4">For θ = {selectedAngle}°</p>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="font-mono text-slate-700">sin θ =</span>
                                    <span className="text-2xl font-bold text-purple-700">{current.sin}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-mono text-slate-700">cos θ =</span>
                                    <span className="text-2xl font-bold text-purple-700">{current.cos}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="font-mono text-slate-700">tan θ =</span>
                                    <span className="text-2xl font-bold text-purple-700">{current.tan}</span>
                                </div>
                            </div>
                        </div>

                        {/* Complete table */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm border-collapse">
                                <thead>
                                    <tr className="bg-slate-100">
                                        <th className="border border-slate-300 p-2">Angle</th>
                                        <th className="border border-slate-300 p-2">sin θ</th>
                                        <th className="border border-slate-300 p-2">cos θ</th>
                                        <th className="border border-slate-300 p-2">tan θ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.entries(specialAngles).map(([angle, values]) => (
                                        <tr
                                            key={angle}
                                            className={selectedAngle == angle ? 'bg-red-100' : 'hover:bg-slate-50'}
                                        >
                                            <td className="border border-slate-300 p-2 text-center font-semibold">{angle}°</td>
                                            <td className="border border-slate-300 p-2 text-center font-mono">{values.sin}</td>
                                            <td className="border border-slate-300 p-2 text-center font-mono">{values.cos}</td>
                                            <td className="border border-slate-300 p-2 text-center font-mono">{values.tan}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            {/* Industrial App: Architecture - Full Width */}
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 text-indigo-900 shadow-sm">
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">🏛️</span> Architecture
                </h5>
                <p className="text-sm">
                    Architects use <strong>special angle values</strong> for standard roof pitches and staircase design. A 30° roof pitch is common in snowy regions (easy snow slide), while 45° staircases provide optimal comfort. These exact values simplify calculations without calculators!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit V: Trigonometry - Special Angles"
                question="What is the exact value of sin(60°) + cos(30°)?"
                correctAnswer="√3"
                hint="Look up the exact values: sin(60°) = √3/2 and cos(30°) = √3/2. Add them together."
                explanation="Excellent! sin(60°) = √3/2 and cos(30°) = √3/2. Adding them: √3/2 + √3/2 = 2(√3/2) = √3. Notice that sin(60°) = cos(30°) because they are complementary angles!"
            />
        </div>
    );
}
