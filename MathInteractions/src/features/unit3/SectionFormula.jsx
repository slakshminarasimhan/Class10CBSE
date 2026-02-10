import { useState } from 'react';
import { motion } from 'framer-motion';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function SectionFormula() {
    const [p1, setP1] = useState({ x: 1, y: 1 });
    const [p2, setP2] = useState({ x: 9, y: 5 });
    const [m, setM] = useState(2);
    const [n, setN] = useState(3);

    const width = 400;
    const height = 300;
    const gridSize = 30;
    const offsetX = 20;
    const offsetY = height - 20; // Bottom-left origin roughly

    // Simple coordinate to pixel transform
    const toPx = (pt) => ({
        x: offsetX + pt.x * gridSize,
        y: offsetY - pt.y * gridSize
    });

    // Calculate section point P
    const px = (m * p2.x + n * p1.x) / (m + n);
    const py = (m * p2.y + n * p1.y) / (m + n);
    const p = { x: px, y: py };

    const pt1 = toPx(p1);
    const pt2 = toPx(p2);
    const ptP = toPx(p);

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Line Divider Tool</h3>

                    <div className="relative bg-slate-50 border border-slate-200 rounded-lg overflow-hidden shadow-inner h-[300px]">
                        <svg width="100%" height="100%" className="absolute inset-0 pointer-events-none">
                            <defs>
                                <pattern id="grid-sec" width={gridSize} height={gridSize} patternUnits="userSpaceOnUse">
                                    <path d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`} fill="none" stroke="#e2e8f0" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid-sec)" />

                            {/* Line Segment */}
                            <line x1={pt1.x} y1={pt1.y} x2={pt2.x} y2={pt2.y} stroke="#cbd5e1" strokeWidth="4" />

                            {/* Segments colored */}
                            <motion.line
                                animate={{ x1: pt1.x, y1: pt1.y, x2: ptP.x, y2: ptP.y }}
                                stroke="#3b82f6" strokeWidth="4"
                            />
                            <motion.line
                                animate={{ x1: ptP.x, y1: ptP.y, x2: pt2.x, y2: pt2.y }}
                                stroke="#ef4444" strokeWidth="4"
                            />

                            {/* Labels */}
                            <text x={pt1.x - 15} y={pt1.y + 5} fill="#64748b" fontSize="12" fontWeight="bold">A</text>
                            <text x={pt2.x + 10} y={pt2.y + 5} fill="#64748b" fontSize="12" fontWeight="bold">B</text>
                            <text x={ptP.x} y={ptP.y - 15} textAnchor="middle" fill="#0f172a" fontSize="12" fontWeight="bold">P(x,y)</text>
                        </svg>

                        {/* Points */}
                        <div
                            className="absolute w-4 h-4 rounded-full bg-slate-400 -ml-2 -mt-2"
                            style={{ left: pt1.x, top: pt1.y }}
                        ></div>
                        <div
                            className="absolute w-4 h-4 rounded-full bg-slate-400 -ml-2 -mt-2"
                            style={{ left: pt2.x, top: pt2.y }}
                        ></div>
                        <motion.div
                            animate={{ left: ptP.x, top: ptP.y }}
                            className="absolute w-5 h-5 rounded-full bg-slate-900 border-2 border-white shadow-lg -ml-2.5 -mt-2.5 z-10"
                        ></motion.div>
                    </div>
                </div>

                <div className="flex-1 space-y-6">
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <h3 className="font-semibold text-slate-700 mb-4 border-b pb-2">Settings</h3>

                        <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase">Ratio m</label>
                                <input
                                    type="range" min="1" max="5" step="1"
                                    value={m} onChange={e => setM(Number(e.target.value))}
                                    className="w-full accent-blue-600"
                                />
                                <div className="text-center font-bold text-blue-600">{m}</div>
                            </div>
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase">Ratio n</label>
                                <input
                                    type="range" min="1" max="5" step="1"
                                    value={n} onChange={e => setN(Number(e.target.value))}
                                    className="w-full accent-red-600"
                                />
                                <div className="text-center font-bold text-red-600">{n}</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                            <div>
                                <span className="block text-slate-500">Point A</span>
                                <div className="flex gap-2">
                                    <input type="number" value={p1.x} onChange={e => setP1({ ...p1, x: Number(e.target.value) })} className="w-12 p-1 border rounded" />
                                    <input type="number" value={p1.y} onChange={e => setP1({ ...p1, y: Number(e.target.value) })} className="w-12 p-1 border rounded" />
                                </div>
                            </div>
                            <div>
                                <span className="block text-slate-500">Point B</span>
                                <div className="flex gap-2">
                                    <input type="number" value={p2.x} onChange={e => setP2({ ...p2, x: Number(e.target.value) })} className="w-12 p-1 border rounded" />
                                    <input type="number" value={p2.y} onChange={e => setP2({ ...p2, y: Number(e.target.value) })} className="w-12 p-1 border rounded" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-900 text-slate-300 p-6 rounded-lg font-mono text-sm">
                        <p className="mb-2 border-b border-slate-700 pb-2">{'Formula: P = $\\left(\\frac{mx_2 + nx_1}{m + n}, \\frac{my_2 + ny_1}{m + n}\\right)$'}</p>

                        <div className="space-y-1">
                            <p>x = ({m}·{p2.x} + {n}·{p1.x}) / ({m}+{n}) = {(m * p2.x + n * p1.x)}/{m + n}</p>
                            <p>y = ({m}·{p2.y} + {n}·{p1.y}) / ({m}+{n}) = {(m * p2.y + n * p1.y)}/{m + n}</p>
                        </div>

                        <div className="mt-4 text-lg font-bold text-white flex gap-4">
                            <span>P({px.toFixed(2)}, {py.toFixed(2)})</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Industrial App: Graphics - Full Width */}
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-100 text-indigo-900 shadow-sm">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                    <span className="text-lg">🏭</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Industrial Application</span>
                </div>
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">🖥️</span> Computer Graphics
                </h5>
                <p className="text-sm">
                    Resizing an image or rendering a 3D game Character relies on the <strong>Section Formula</strong>.
                    Every pixel's new position is calculated by dividing line segments in specific ratios!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit III: Coordinate Geometry"
                question="In a video game, a character moves from point A(2, 4) to point B(10, 12) in a straight line. The game engine needs to render the character at the point that divides this path in the ratio 1:3 (closer to A). What is the x-coordinate of this position?"
                correctAnswer="4"
                hint="Use the section formula: x = (m×x₂ + n×x₁)/(m+n), where m:n = 1:3, x₁=2, x₂=10."
                explanation="Spot on! x = (1×10 + 3×2)/(1+3) = 16/4 = 4. Game engines use this formula millions of times per second to interpolate positions, creating smooth animations. It's also used in 3D modeling, image morphing, and vector graphics!"
            />
        </div >
    );
}
