import { useState } from 'react';
import { motion } from 'framer-motion';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function TriangleSimilarity() {
    const [scale, setScale] = useState(1.5);

    // Base triangle coordinates (relative to center)
    // Triangle: Top(100, 20), Left(20, 150), Right(180, 150)
    const baseTriangle = {
        p1: { x: 100, y: 20 },
        p2: { x: 20, y: 150 },
        p3: { x: 180, y: 150 }
    };

    // Calculate side lengths
    const dist = (a, b) => Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
    const s1 = dist(baseTriangle.p1, baseTriangle.p2); // c
    const s2 = dist(baseTriangle.p2, baseTriangle.p3); // a
    const s3 = dist(baseTriangle.p3, baseTriangle.p1); // b

    return (
        <div className="space-y-6">
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-700 shadow-lg flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-4">Magnifying Glass Experiment</h3>

                    <div className="relative h-[400px] bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
                        {/* Grid */}
                        <svg width="100%" height="100%" className="absolute inset-0 pointer-events-none opacity-20">
                            <defs>
                                <pattern id="grid-tri" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#94a3b8" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid-tri)" />
                        </svg>

                        {/* Base Triangle (Blue) */}
                        <svg width="100%" height="100%" className="absolute inset-0">
                            <motion.polygon
                                points={`${baseTriangle.p1.x},${baseTriangle.p1.y} ${baseTriangle.p2.x},${baseTriangle.p2.y} ${baseTriangle.p3.x},${baseTriangle.p3.y}`}
                                fill="rgba(59, 130, 246, 0.3)"
                                stroke="#3b82f6"
                                strokeWidth="3"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            />
                        </svg>

                        {/* Scaled Triangle (Green) */}
                        <svg width="100%" height="100%" className="absolute inset-0">
                            <motion.polygon
                                points={`${100 + (baseTriangle.p1.x - 100) * scale},${20 + (baseTriangle.p1.y - 20) * scale} ${100 + (baseTriangle.p2.x - 100) * scale},${20 + (baseTriangle.p2.y - 20) * scale} ${100 + (baseTriangle.p3.x - 100) * scale},${20 + (baseTriangle.p3.y - 20) * scale}`}
                                fill="rgba(34, 197, 94, 0.3)"
                                stroke="#22c55e"
                                strokeWidth="3"
                                animate={{
                                    points: `${100 + (baseTriangle.p1.x - 100) * scale},${20 + (baseTriangle.p1.y - 20) * scale} ${100 + (baseTriangle.p2.x - 100) * scale},${20 + (baseTriangle.p2.y - 20) * scale} ${100 + (baseTriangle.p3.x - 100) * scale},${20 + (baseTriangle.p3.y - 20) * scale}`
                                }}
                                transition={{ duration: 0.3 }}
                            />
                        </svg>
                    </div>
                </div>

                <div className="md:w-80 space-y-6">
                    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700">
                        <h4 className="text-white font-semibold mb-3">Scale Factor</h4>
                        <input
                            type="range"
                            min="0.5"
                            max="2.5"
                            step="0.1"
                            value={scale}
                            onChange={(e) => setScale(parseFloat(e.target.value))}
                            className="w-full accent-green-500"
                        />
                        <p className="text-center text-green-400 font-mono mt-2">{scale.toFixed(1)}x</p>
                    </div>

                    <div className="bg-slate-800 p-4 rounded-lg border border-slate-700 text-sm text-slate-300 space-y-2">
                        <h5 className="font-semibold text-white mb-2">Side Lengths</h5>
                        <div className="flex justify-between">
                            <span className="text-blue-400">Base Triangle:</span>
                            <span className="font-mono">{s1.toFixed(1)}, {s2.toFixed(1)}, {s3.toFixed(1)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-green-400">Scaled Triangle:</span>
                            <span className="font-mono">{(s1 * scale).toFixed(1)}, {(s2 * scale).toFixed(1)}, {(s3 * scale).toFixed(1)}</span>
                        </div>
                        <div className="mt-4 pt-3 border-t border-slate-700">
                            <p className={`text-center font-bold ${scale === 1 ? 'text-blue-400' : 'text-green-400'}`}>
                                {scale === 1 ? "Congruent (Identical)" : "Similar (Scaled)"}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Industrial App: Architecture - Full Width */}
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 text-amber-900 shadow-sm">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                    <span className="text-lg">🏭</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Industrial Application</span>
                </div>
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">🏛️</span> Architecture
                </h5>
                <p className="text-sm">
                    Architects use <strong>Similar Triangles</strong> to create scale models and blueprints.
                    If a model building is 1:100 scale, every single triangle in the model must be <em>similar</em> to the real building's triangles!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit IV: Geometry"
                question="An architect creates a 1:50 scale model of a building. In the model, a triangular roof section has a base of 12 cm. What is the base length (in meters) of the actual roof?"
                correctAnswer="6"
                hint="If the scale is 1:50, then actual length = model length × 50. Convert cm to meters: 12 cm × 50 = 600 cm = ? meters."
                explanation="Perfect! 12 cm × 50 = 600 cm = 6 meters. Similar triangles ensure that every angle and proportion is preserved when scaling. This is critical in architecture, civil engineering, and even map-making. A single error in similarity could cause structural failures!"
            />
        </div>
    );
}
