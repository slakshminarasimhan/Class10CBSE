import { useState } from 'react';
import { motion } from 'framer-motion';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function TangentsExternalPoint() {
    const [P, setP] = useState({ x: 350, y: 200 }); // External point

    const cx = 150;
    const cy = 200;
    const r = 80;

    // Calculate tangent points
    // Distance from center to P
    const d2 = Math.pow(P.x - cx, 2) + Math.pow(P.y - cy, 2);
    const d = Math.sqrt(d2);

    // If P is inside, no tangents
    const isInside = d < r;

    // Angle of P relative to center
    const theta = Math.atan2(P.y - cy, P.x - cx);

    // Angle offset for tangent points
    // cos(alpha) = r / d
    const alpha = Math.acos(r / d);

    const t1Angle = theta - alpha;
    const t2Angle = theta + alpha;

    const T1 = {
        x: cx + r * Math.cos(t1Angle),
        y: cy + r * Math.sin(t1Angle)
    };

    const T2 = {
        x: cx + r * Math.cos(t2Angle),
        y: cy + r * Math.sin(t2Angle)
    };

    const tangentLen = Math.sqrt(d2 - r * r);

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Lengths of Tangents from External Point</h3>

                    <div
                        className="relative h-[400px] bg-slate-50 border border-slate-200 rounded-lg overflow-hidden cursor-crosshair"
                        onMouseMove={(e) => {
                            if (e.buttons === 1) {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = Math.min(Math.max(e.clientX - rect.left, 0), 400);
                                const y = Math.min(Math.max(e.clientY - rect.top, 0), 400);
                                // Constrain to outside circle
                                const distSq = Math.pow(x - cx, 2) + Math.pow(y - cy, 2);
                                if (distSq > r * r + 100) { // Keep some buffer
                                    setP({ x, y });
                                }
                            }
                        }}
                    >
                        <svg width="100%" height="100%" className="absolute inset-0 pointer-events-none">
                            {/* Circle */}
                            <circle cx={cx} cy={cy} r={r} fill="white" stroke="#3b82f6" strokeWidth="2" />
                            <circle cx={cx} cy={cy} r={3} fill="#3b82f6" />
                            <text x={cx - 15} y={cy} fontSize="12" fill="#3b82f6">Center</text>

                            {!isInside && (
                                <>
                                    {/* Tangents */}
                                    <motion.line
                                        animate={{ x1: P.x, y1: P.y, x2: T1.x, y2: T1.y }}
                                        stroke="#10b981" strokeWidth="3"
                                    />
                                    <motion.line
                                        animate={{ x1: P.x, y1: P.y, x2: T2.x, y2: T2.y }}
                                        stroke="#10b981" strokeWidth="3"
                                    />

                                    {/* Radii to tangents */}
                                    <motion.line
                                        animate={{ x1: cx, y1: cy, x2: T1.x, y2: T1.y }}
                                        stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4,4"
                                    />
                                    <motion.line
                                        animate={{ x1: cx, y1: cy, x2: T2.x, y2: T2.y }}
                                        stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4,4"
                                    />

                                    {/* Labels */}
                                    <text x={T1.x - 10} y={T1.y - 10} fontWeight="bold" fill="#0f172a">A</text>
                                    <text x={T2.x - 10} y={T2.y + 15} fontWeight="bold" fill="#0f172a">B</text>
                                </>
                            )}
                        </svg>

                        {/* Draggable Point P */}
                        <motion.div
                            animate={{ left: P.x, top: P.y }}
                            className="absolute w-6 h-6 bg-purple-600 rounded-full -ml-3 -mt-3 border-2 border-white shadow-lg flex items-center justify-center text-white font-bold text-xs cursor-move z-10"
                        >
                            P
                        </motion.div>

                        {!isInside && (
                            <>
                                {/* Measurement Labels (Pseudo-Ruler) */}
                                <motion.div
                                    animate={{
                                        left: (P.x + T1.x) / 2,
                                        top: (P.y + T1.y) / 2
                                    }}
                                    className="absolute bg-green-100 text-green-800 text-xs px-2 py-1 rounded border border-green-200 font-mono -ml-6 -mt-3"
                                >
                                    {tangentLen.toFixed(1)}
                                </motion.div>

                                <motion.div
                                    animate={{
                                        left: (P.x + T2.x) / 2,
                                        top: (P.y + T2.y) / 2
                                    }}
                                    className="absolute bg-green-100 text-green-800 text-xs px-2 py-1 rounded border border-green-200 font-mono -ml-6 -mt-3"
                                >
                                    {tangentLen.toFixed(1)}
                                </motion.div>
                            </>
                        )}
                    </div>
                    <p className="text-xs text-slate-500 mt-2 text-center">Drag Point P to move it around the circle.</p>
                </div>

                <div className="w-full md:w-64 space-y-6">
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <h3 className="font-semibold text-slate-700 mb-4 border-b pb-2">Measurements</h3>

                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-slate-500 uppercase">Tangent 1 (PA)</p>
                                <div className="text-2xl font-mono text-green-600 font-bold">
                                    {tangentLen.toFixed(2)} units
                                </div>
                            </div>

                            <div>
                                <p className="text-xs text-slate-500 uppercase">Tangent 2 (PB)</p>
                                <div className="text-2xl font-mono text-green-600 font-bold">
                                    {tangentLen.toFixed(2)} units
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-blue-800 text-sm">
                        <p className="mb-2"><strong>Theorem:</strong> The lengths of tangents drawn from an external point to a circle are equal.</p>
                        <p>PA = PB</p>
                    </div>
                </div>
            </div>

            {/* Industrial App: Telecommunications - Full Width */}
            <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200 text-cyan-900 shadow-sm">
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">📡</span> Telecommunications
                </h5>
                <p className="text-sm">
                    Cell tower engineers use <strong>equal tangent lengths</strong> to optimize antenna placement. When positioning towers to provide equal signal coverage to multiple areas, the tangent theorem ensures equidistant signal paths from transmission points!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit IV: Geometry - Circles"
                question="A cell tower (point P) is 13 km from the center of a circular coverage zone with radius 5 km. What is the length of the tangent from the tower to the edge of the coverage zone?"
                correctAnswer="12"
                hint="Use the Pythagorean theorem: tangent length = √(distance² - radius²)."
                explanation="Excellent! Tangent length = √(13² - 5²) = √(169 - 25) = √144 = 12 km. Both tangents from the tower to the coverage zone are equal at 12 km, ensuring symmetric signal distribution!"
            />
        </div>
    );
}
