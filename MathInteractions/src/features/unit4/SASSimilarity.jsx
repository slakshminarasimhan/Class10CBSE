import { useState } from 'react';
import { motion } from 'framer-motion';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function SASSimilarity() {
    // Triangle 1
    const [side1A, setSide1A] = useState(6);
    const [angle1, setAngle1] = useState(60);
    const [side1B, setSide1B] = useState(8);

    // Triangle 2
    const [side2A, setSide2A] = useState(3);
    const [angle2, setAngle2] = useState(60);
    const [side2B, setSide2B] = useState(4);

    // Calculate ratios of sides including the angle
    const ratioA = side1A / side2A;
    const ratioB = side1B / side2B;

    // Check if angle is equal and sides are proportional
    const anglesEqual = Math.abs(angle1 - angle2) < 1;
    const sidesProportional = Math.abs(ratioA - ratioB) < 0.1;
    const isSimilar = anglesEqual && sidesProportional;

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-6">SAS Similarity Criterion</h3>
                <p className="text-sm text-slate-600 mb-6">
                    If one angle of a triangle is equal to one angle of another triangle and the sides including these angles are proportional, the two triangles are similar.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Triangle 1 */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-indigo-600">Triangle 1</h4>

                        <div className="h-[220px] bg-indigo-50 rounded-lg border border-indigo-200 flex items-center justify-center relative">
                            <svg width="160" height="180" viewBox="0 0 160 180">
                                <polygon points="80,30 20,150 140,150" fill="none" stroke="#6366f1" strokeWidth="3" />
                                <text x="80" y="25" textAnchor="middle" fill="#6366f1" fontSize="12" fontWeight="bold">A</text>
                                <text x="15" y="160" fill="#6366f1" fontSize="12" fontWeight="bold">B</text>
                                <text x="145" y="160" fill="#6366f1" fontSize="12" fontWeight="bold">C</text>

                                {/* Highlighted angle */}
                                <circle cx="80" cy="30" r="20" fill="none" stroke="#4f46e5" strokeWidth="2" strokeDasharray="3,3" />
                                <text x="80" y="60" textAnchor="middle" fill="#4338ca" fontSize="16" fontWeight="bold">{angle1}°</text>

                                {/* Side labels */}
                                <text x="45" y="90" fill="#4338ca" fontSize="14" fontWeight="bold">{side1A}</text>
                                <text x="110" y="90" fill="#4338ca" fontSize="14" fontWeight="bold">{side1B}</text>
                            </svg>
                        </div>

                        <div className="space-y-3 bg-slate-50 p-4 rounded-lg">
                            <div>
                                <label className="text-xs font-semibold text-slate-600">Side AB: {side1A}</label>
                                <input
                                    type="range" min="2" max="12" value={side1A}
                                    onChange={(e) => setSide1A(Number(e.target.value))}
                                    className="w-full accent-indigo-600"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-600">Angle A: {angle1}°</label>
                                <input
                                    type="range" min="30" max="120" value={angle1}
                                    onChange={(e) => setAngle1(Number(e.target.value))}
                                    className="w-full accent-indigo-600"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-600">Side AC: {side1B}</label>
                                <input
                                    type="range" min="2" max="12" value={side1B}
                                    onChange={(e) => setSide1B(Number(e.target.value))}
                                    className="w-full accent-indigo-600"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Triangle 2 */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-rose-600">Triangle 2</h4>

                        <div className="h-[220px] bg-rose-50 rounded-lg border border-rose-200 flex items-center justify-center relative">
                            <svg width="120" height="140" viewBox="0 0 120 140">
                                <polygon points="60,20 15,110 105,110" fill="none" stroke="#f43f5e" strokeWidth="3" />
                                <text x="60" y="15" textAnchor="middle" fill="#f43f5e" fontSize="12" fontWeight="bold">P</text>
                                <text x="10" y="120" fill="#f43f5e" fontSize="12" fontWeight="bold">Q</text>
                                <text x="110" y="120" fill="#f43f5e" fontSize="12" fontWeight="bold">R</text>

                                {/* Highlighted angle */}
                                <circle cx="60" cy="20" r="15" fill="none" stroke="#e11d48" strokeWidth="2" strokeDasharray="3,3" />
                                <text x="60" y="45" textAnchor="middle" fill="#be123c" fontSize="16" fontWeight="bold">{angle2}°</text>

                                {/* Side labels */}
                                <text x="32" y="65" fill="#be123c" fontSize="14" fontWeight="bold">{side2A}</text>
                                <text x="82" y="65" fill="#be123c" fontSize="14" fontWeight="bold">{side2B}</text>
                            </svg>
                        </div>

                        <div className="space-y-3 bg-slate-50 p-4 rounded-lg">
                            <div>
                                <label className="text-xs font-semibold text-slate-600">Side PQ: {side2A}</label>
                                <input
                                    type="range" min="1" max="8" value={side2A}
                                    onChange={(e) => setSide2A(Number(e.target.value))}
                                    className="w-full accent-rose-600"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-600">Angle P: {angle2}°</label>
                                <input
                                    type="range" min="30" max="120" value={angle2}
                                    onChange={(e) => setAngle2(Number(e.target.value))}
                                    className="w-full accent-rose-600"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-600">Side PR: {side2B}</label>
                                <input
                                    type="range" min="1" max="8" value={side2B}
                                    onChange={(e) => setSide2B(Number(e.target.value))}
                                    className="w-full accent-rose-600"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Comparison */}
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <p className="text-xs text-slate-500 uppercase mb-2">Angle Comparison</p>
                        <p className="text-lg font-mono">
                            <span className="text-indigo-600 font-bold">{angle1}°</span>
                            <span className="mx-2">=</span>
                            <span className="text-rose-600 font-bold">{angle2}°</span>
                            <span className={`ml-2 ${anglesEqual ? 'text-green-600' : 'text-red-600'}`}>
                                {anglesEqual ? '✓' : '✗'}
                            </span>
                        </p>
                    </div>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                        <p className="text-xs text-slate-500 uppercase mb-2">Side Ratio Comparison</p>
                        <p className="text-lg font-mono">
                            <span className="font-bold">{ratioA.toFixed(2)}</span>
                            <span className="mx-2">=</span>
                            <span className="font-bold">{ratioB.toFixed(2)}</span>
                            <span className={`ml-2 ${sidesProportional ? 'text-green-600' : 'text-red-600'}`}>
                                {sidesProportional ? '✓' : '✗'}
                            </span>
                        </p>
                    </div>
                </div>

                {/* Similarity Result */}
                <motion.div
                    animate={{
                        backgroundColor: isSimilar ? '#dcfce7' : '#f1f5f9',
                        borderColor: isSimilar ? '#16a34a' : '#cbd5e1'
                    }}
                    className="mt-6 p-4 rounded-lg border-2 text-center"
                >
                    <p className={`font-bold text-lg ${isSimilar ? 'text-green-700' : 'text-slate-600'}`}>
                        {isSimilar ? '✓ Triangles are Similar (SAS)' : 'Triangles are NOT Similar'}
                    </p>
                    {isSimilar && (
                        <p className="text-sm text-green-600 mt-1">
                            Angle is equal and including sides are proportional!
                        </p>
                    )}
                </motion.div>
            </div>

            {/* Industrial App: Aerospace Engineering - Full Width */}
            <div className="bg-violet-50 p-6 rounded-lg border border-violet-200 text-violet-900 shadow-sm">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                    <span className="text-lg">🏭</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Industrial Application</span>
                </div>
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">✈️</span> Aerospace Engineering
                </h5>
                <p className="text-sm">
                    Aircraft designers use <strong>SAS similarity</strong> for wing scaling. When designing different-sized aircraft, maintaining the wing angle and proportional leading/trailing edge lengths ensures consistent aerodynamic properties across the entire fleet!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit IV: Geometry - Triangles"
                question="Triangle ABC has AB = 10 cm, angle A = 50°, and AC = 12 cm. Triangle PQR has PQ = 5 cm, angle P = 50°, and PR = 6 cm. Are the triangles similar?"
                correctAnswer="yes"
                hint="Check if the angle is equal and the ratio of sides including that angle is the same: AB/PQ and AC/PR."
                explanation="Correct! Angle A = Angle P = 50°. Ratio AB/PQ = 10/5 = 2, and ratio AC/PR = 12/6 = 2. Since the angle is equal and the including sides are proportional (both ratios = 2), the triangles are similar by SAS criterion!"
            />
        </div>
    );
}
