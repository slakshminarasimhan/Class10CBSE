import { useState } from 'react';
import { motion } from 'framer-motion';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function SSSSimilarity() {
    // Triangle 1 sides
    const [side1A, setSide1A] = useState(6);
    const [side1B, setSide1B] = useState(8);
    const [side1C, setSide1C] = useState(10);

    // Triangle 2 sides
    const [side2A, setSide2A] = useState(3);
    const [side2B, setSide2B] = useState(4);
    const [side2C, setSide2C] = useState(5);

    // Calculate ratios
    const ratio1 = side1A / side2A;
    const ratio2 = side1B / side2B;
    const ratio3 = side1C / side2C;

    // Check if all ratios are equal (within tolerance)
    const isSimilar =
        Math.abs(ratio1 - ratio2) < 0.1 &&
        Math.abs(ratio2 - ratio3) < 0.1 &&
        Math.abs(ratio1 - ratio3) < 0.1;

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-6">SSS Similarity Criterion</h3>
                <p className="text-sm text-slate-600 mb-6">
                    If the corresponding sides of two triangles are proportional, the triangles are similar.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Triangle 1 */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-emerald-600">Triangle 1</h4>

                        <div className="h-[180px] bg-emerald-50 rounded-lg border border-emerald-200 flex items-center justify-center">
                            <svg width="140" height="140" viewBox="0 0 140 140">
                                <polygon points="70,20 20,120 120,120" fill="none" stroke="#10b981" strokeWidth="3" />
                                <text x="70" y="15" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="bold">A</text>
                                <text x="15" y="130" fill="#10b981" fontSize="11" fontWeight="bold">B</text>
                                <text x="125" y="130" fill="#10b981" fontSize="11" fontWeight="bold">C</text>

                                {/* Side labels */}
                                <text x="40" y="70" fill="#047857" fontSize="12" fontWeight="bold">{side1A}</text>
                                <text x="95" y="70" fill="#047857" fontSize="12" fontWeight="bold">{side1B}</text>
                                <text x="70" y="130" fill="#047857" fontSize="12" fontWeight="bold">{side1C}</text>
                            </svg>
                        </div>

                        <div className="space-y-2">
                            <div>
                                <label className="text-xs font-semibold text-slate-600">Side AB: {side1A}</label>
                                <input
                                    type="range" min="2" max="15" value={side1A}
                                    onChange={(e) => setSide1A(Number(e.target.value))}
                                    className="w-full accent-emerald-600"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-600">Side AC: {side1B}</label>
                                <input
                                    type="range" min="2" max="15" value={side1B}
                                    onChange={(e) => setSide1B(Number(e.target.value))}
                                    className="w-full accent-emerald-600"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-600">Side BC: {side1C}</label>
                                <input
                                    type="range" min="2" max="15" value={side1C}
                                    onChange={(e) => setSide1C(Number(e.target.value))}
                                    className="w-full accent-emerald-600"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Ratios */}
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                            <p className="text-xs text-slate-500 uppercase mb-1">Ratio AB/PQ</p>
                            <p className="text-xl font-mono font-bold text-slate-700">
                                {side1A}/{side2A} = {ratio1.toFixed(2)}
                            </p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                            <p className="text-xs text-slate-500 uppercase mb-1">Ratio AC/PR</p>
                            <p className="text-xl font-mono font-bold text-slate-700">
                                {side1B}/{side2B} = {ratio2.toFixed(2)}
                            </p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                            <p className="text-xs text-slate-500 uppercase mb-1">Ratio BC/QR</p>
                            <p className="text-xl font-mono font-bold text-slate-700">
                                {side1C}/{side2C} = {ratio3.toFixed(2)}
                            </p>
                        </div>
                    </div>

                    {/* Triangle 2 */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-orange-600">Triangle 2</h4>

                        <div className="h-[180px] bg-orange-50 rounded-lg border border-orange-200 flex items-center justify-center">
                            <svg width="100" height="100" viewBox="0 0 100 100">
                                <polygon points="50,15 15,85 85,85" fill="none" stroke="#f97316" strokeWidth="3" />
                                <text x="50" y="12" textAnchor="middle" fill="#f97316" fontSize="11" fontWeight="bold">P</text>
                                <text x="10" y="95" fill="#f97316" fontSize="11" fontWeight="bold">Q</text>
                                <text x="90" y="95" fill="#f97316" fontSize="11" fontWeight="bold">R</text>

                                {/* Side labels */}
                                <text x="28" y="50" fill="#c2410c" fontSize="12" fontWeight="bold">{side2A}</text>
                                <text x="68" y="50" fill="#c2410c" fontSize="12" fontWeight="bold">{side2B}</text>
                                <text x="50" y="92" fill="#c2410c" fontSize="12" fontWeight="bold">{side2C}</text>
                            </svg>
                        </div>

                        <div className="space-y-2">
                            <div>
                                <label className="text-xs font-semibold text-slate-600">Side PQ: {side2A}</label>
                                <input
                                    type="range" min="1" max="10" value={side2A}
                                    onChange={(e) => setSide2A(Number(e.target.value))}
                                    className="w-full accent-orange-600"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-600">Side PR: {side2B}</label>
                                <input
                                    type="range" min="1" max="10" value={side2B}
                                    onChange={(e) => setSide2B(Number(e.target.value))}
                                    className="w-full accent-orange-600"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-600">Side QR: {side2C}</label>
                                <input
                                    type="range" min="1" max="10" value={side2C}
                                    onChange={(e) => setSide2C(Number(e.target.value))}
                                    className="w-full accent-orange-600"
                                />
                            </div>
                        </div>
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
                        {isSimilar ? '✓ Triangles are Similar (SSS)' : 'Triangles are NOT Similar'}
                    </p>
                    {isSimilar && (
                        <p className="text-sm text-green-600 mt-1">
                            All corresponding sides are proportional!
                        </p>
                    )}
                </motion.div>
            </div>

            {/* Industrial App: Structural Engineering - Full Width */}
            <div className="bg-sky-50 p-6 rounded-lg border border-sky-200 text-sky-900 shadow-sm">
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">🏗️</span> Structural Engineering
                </h5>
                <p className="text-sm">
                    Engineers use <strong>SSS similarity</strong> to create scale models of bridges and buildings. By maintaining proportional side lengths, they can test structural integrity on smaller models before constructing full-size structures, saving millions in testing costs!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit IV: Geometry - Triangles"
                question="Triangle ABC has sides 9 cm, 12 cm, and 15 cm. Triangle PQR has sides 6 cm, 8 cm, and 10 cm. Are the triangles similar?"
                correctAnswer="yes"
                hint="Calculate the ratios of corresponding sides: AB/PQ, AC/PR, and BC/QR. If all ratios are equal, the triangles are similar."
                explanation="Perfect! Ratios are 9/6 = 1.5, 12/8 = 1.5, and 15/10 = 1.5. All three ratios are equal, so by SSS similarity criterion, the triangles are similar with a scale factor of 1.5!"
            />
        </div>
    );
}
