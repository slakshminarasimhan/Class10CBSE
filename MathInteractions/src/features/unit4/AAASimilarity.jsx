import { useState } from 'react';
import { motion } from 'framer-motion';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function AAASimilarity() {
    // Triangle 1 angles (adjustable)
    const [angle1A, setAngle1A] = useState(60);
    const [angle1B, setAngle1B] = useState(50);
    const angle1C = 180 - angle1A - angle1B;

    // Triangle 2 angles (adjustable)
    const [angle2A, setAngle2A] = useState(60);
    const [angle2B, setAngle2B] = useState(50);
    const angle2C = 180 - angle2A - angle2B;

    // Check if triangles are similar (all angles match)
    const isSimilar =
        Math.abs(angle1A - angle2A) < 1 &&
        Math.abs(angle1B - angle2B) < 1 &&
        Math.abs(angle1C - angle2C) < 1;

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-6">AAA Similarity Criterion</h3>
                <p className="text-sm text-slate-600 mb-6">
                    If the corresponding angles of two triangles are equal, the triangles are similar.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Triangle 1 */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-blue-600">Triangle 1</h4>

                        <div className="h-[200px] bg-blue-50 rounded-lg border border-blue-200 flex items-center justify-center relative">
                            <svg width="180" height="160" viewBox="0 0 180 160">
                                <polygon points="90,20 20,140 160,140" fill="none" stroke="#2563eb" strokeWidth="3" />
                                <text x="90" y="15" textAnchor="middle" fill="#2563eb" fontSize="12" fontWeight="bold">A</text>
                                <text x="15" y="150" fill="#2563eb" fontSize="12" fontWeight="bold">B</text>
                                <text x="165" y="150" fill="#2563eb" fontSize="12" fontWeight="bold">C</text>

                                {/* Angle labels */}
                                <text x="90" y="40" textAnchor="middle" fill="#1e40af" fontSize="14" fontWeight="bold">{angle1A}°</text>
                                <text x="30" y="130" fill="#1e40af" fontSize="14" fontWeight="bold">{angle1B}°</text>
                                <text x="145" y="130" fill="#1e40af" fontSize="14" fontWeight="bold">{angle1C}°</text>
                            </svg>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <label className="text-xs font-semibold text-slate-600">Angle A: {angle1A}°</label>
                                <input
                                    type="range" min="20" max="140" value={angle1A}
                                    onChange={(e) => setAngle1A(Number(e.target.value))}
                                    className="w-full accent-blue-600"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-600">Angle B: {angle1B}°</label>
                                <input
                                    type="range" min="20" max="140" value={angle1B}
                                    onChange={(e) => setAngle1B(Number(e.target.value))}
                                    className="w-full accent-blue-600"
                                />
                            </div>
                            <div className="text-xs text-slate-500">
                                Angle C: {angle1C.toFixed(0)}° (calculated)
                            </div>
                        </div>
                    </div>

                    {/* Triangle 2 */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-purple-600">Triangle 2</h4>

                        <div className="h-[200px] bg-purple-50 rounded-lg border border-purple-200 flex items-center justify-center relative">
                            <svg width="240" height="200" viewBox="0 0 240 200">
                                <polygon points="120,30 30,180 210,180" fill="none" stroke="#9333ea" strokeWidth="3" />
                                <text x="120" y="25" textAnchor="middle" fill="#9333ea" fontSize="12" fontWeight="bold">A</text>
                                <text x="20" y="190" fill="#9333ea" fontSize="12" fontWeight="bold">B</text>
                                <text x="220" y="190" fill="#9333ea" fontSize="12" fontWeight="bold">C</text>

                                {/* Angle labels */}
                                <text x="120" y="50" textAnchor="middle" fill="#7e22ce" fontSize="14" fontWeight="bold">{angle2A}°</text>
                                <text x="45" y="170" fill="#7e22ce" fontSize="14" fontWeight="bold">{angle2B}°</text>
                                <text x="190" y="170" fill="#7e22ce" fontSize="14" fontWeight="bold">{angle2C}°</text>
                            </svg>
                        </div>

                        <div className="space-y-3">
                            <div>
                                <label className="text-xs font-semibold text-slate-600">Angle A: {angle2A}°</label>
                                <input
                                    type="range" min="20" max="140" value={angle2A}
                                    onChange={(e) => setAngle2A(Number(e.target.value))}
                                    className="w-full accent-purple-600"
                                />
                            </div>
                            <div>
                                <label className="text-xs font-semibold text-slate-600">Angle B: {angle2B}°</label>
                                <input
                                    type="range" min="20" max="140" value={angle2B}
                                    onChange={(e) => setAngle2B(Number(e.target.value))}
                                    className="w-full accent-purple-600"
                                />
                            </div>
                            <div className="text-xs text-slate-500">
                                Angle C: {angle2C.toFixed(0)}° (calculated)
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
                        {isSimilar ? '✓ Triangles are Similar (AAA)' : 'Triangles are NOT Similar'}
                    </p>
                    {isSimilar && (
                        <p className="text-sm text-green-600 mt-1">
                            All corresponding angles are equal!
                        </p>
                    )}
                </motion.div>
            </div>

            {/* Industrial App: Computer Graphics - Full Width */}
            <div className="bg-pink-50 p-6 rounded-lg border border-pink-200 text-pink-900 shadow-sm">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                    <span className="text-lg">🏭</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Industrial Application</span>
                </div>
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">🎥</span> Computer Graphics
                </h5>
                <p className="text-sm">
                    3D game engines use <strong>AAA similarity</strong> for perspective projection. When rendering objects at different distances, maintaining angle relationships ensures realistic scaling. This is why distant objects look smaller but maintain their shape in video games!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit IV: Geometry - Triangles"
                question="In triangle ABC, angles are 45°, 60°, and 75°. In triangle PQR, angle P = 45° and angle Q = 60°. Are the triangles similar?"
                correctAnswer="yes"
                hint="Check if all three corresponding angles are equal. Remember that the sum of angles in a triangle is 180°."
                explanation="Correct! Triangle ABC has angles 45°, 60°, 75°. Triangle PQR has P = 45°, Q = 60°, so R = 180° - 45° - 60° = 75°. All corresponding angles match (AAA criterion), therefore the triangles are similar!"
            />
        </div>
    );
}
