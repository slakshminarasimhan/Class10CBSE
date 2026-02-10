import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import PracticalAssignment from '../../components/PracticalAssignment';
import { Check, Info } from 'lucide-react';

export default function DistanceFormula() {
    const [p1, setP1] = useState({ x: 2, y: 3 });
    const [p2, setP2] = useState({ x: 8, y: 7 });
    const [isDragging, setIsDragging] = useState(null);

    const width = 400;
    const height = 400;
    const gridSize = 40; // Pixels per unit
    const offsetX = width / 2; // Origin X
    const offsetY = height / 2; // Origin Y

    // Convert coordinate to pixel
    const toPx = (point) => ({
        x: offsetX + point.x * gridSize,
        y: offsetY - point.y * gridSize
    });

    // Convert pixel to coordinate (snapped to 0.5)
    const toCoord = (px, py) => {
        let x = (px - offsetX) / gridSize;
        let y = (offsetY - py) / gridSize;
        return {
            x: Math.round(x * 2) / 2,
            y: Math.round(y * 2) / 2
        };
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Constrain to bounds [-5, 5] roughly
        const coord = toCoord(x, y);
        const constrained = {
            x: Math.min(Math.max(coord.x, -5), 5),
            y: Math.min(Math.max(coord.y, -5), 5)
        };

        if (isDragging === 'p1') setP1(constrained);
        if (isDragging === 'p2') setP2(constrained);
    };

    const pt1 = toPx(p1);
    const pt2 = toPx(p2);
    const corner = toPx({ x: p2.x, y: p1.y });

    const dx = Math.abs(p2.x - p1.x);
    const dy = Math.abs(p2.y - p1.y);
    const distance = Math.sqrt(dx * dx + dy * dy).toFixed(2);

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Interact with the Points</h3>
                    <p className="text-sm text-slate-500 mb-6">Drag point A or B to change their coordinates.</p>

                    <div
                        className="relative bg-slate-50 border border-slate-200 rounded-lg overflow-hidden cursor-crosshair shadow-inner"
                        style={{ width, height }}
                        onMouseMove={handleMouseMove}
                        onMouseUp={() => setIsDragging(null)}
                        onMouseLeave={() => setIsDragging(null)}
                    >
                        {/* Grid */}
                        <svg width={width} height={height} className="absolute inset-0 pointer-events-none">
                            <defs>
                                <pattern id="grid" width={gridSize} height={gridSize} patternUnits="userSpaceOnUse">
                                    <path d={`M ${gridSize} 0 L 0 0 0 ${gridSize}`} fill="none" stroke="#e2e8f0" strokeWidth="1" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#grid)" />

                            {/* Axes */}
                            <line x1={0} y1={offsetY} x2={width} y2={offsetY} stroke="#94a3b8" strokeWidth="2" />
                            <line x1={offsetX} y1={0} x2={offsetX} y2={height} stroke="#94a3b8" strokeWidth="2" />

                            {/* Triangle Lines */}
                            <motion.line
                                animate={{ x1: pt1.x, y1: pt1.y, x2: corner.x, y2: corner.y }}
                                stroke="#3b82f6" strokeWidth="2" strokeDasharray="5,5"
                            />
                            <motion.line
                                animate={{ x1: pt2.x, y1: pt2.y, x2: corner.x, y2: corner.y }}
                                stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5"
                            />

                            {/* Hypotenuse */}
                            <motion.line
                                animate={{ x1: pt1.x, y1: pt1.y, x2: pt2.x, y2: pt2.y }}
                                stroke="#10b981" strokeWidth="3"
                            />

                            {/* Labels */}
                            <text x={(pt1.x + corner.x) / 2} y={corner.y + 15} textAnchor="middle" fill="#3b82f6" fontSize="12" fontWeight="bold">
                                {dx}
                            </text>
                            <text x={corner.x + 10} y={(pt2.y + corner.y) / 2} textAnchor="start" fill="#ef4444" fontSize="12" fontWeight="bold">
                                {dy}
                            </text>
                        </svg>

                        {/* Interactive Points */}
                        {
                            [
                                { id: 'p1', pos: pt1, val: p1, color: 'bg-blue-600' },
                                { id: 'p2', pos: pt2, val: p2, color: 'bg-red-600' }
                            ].map((pt) => (
                                <motion.div
                                    key={pt.id}
                                    animate={{ left: pt.pos.x, top: pt.pos.y }}
                                    className={`absolute w-6 h-6 -ml-3 -mt-3 rounded-full ${pt.color} border-2 border-white shadow-lg cursor-pointer flex items-center justify-center text-[10px] text-white font-bold z-10 hover:scale-110`}
                                    onMouseDown={() => setIsDragging(pt.id)}
                                >
                                    {pt.id === 'p1' ? 'A' : 'B'}
                                </motion.div>
                            ))
                        }
                    </div>
                </div>

                <div className="flex-1 space-y-8">
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <h3 className="font-semibold text-slate-700 mb-4 border-b pb-2">Coordinates</h3>
                        <div className="grid grid-cols-2 gap-8">
                            <div>
                                <span className="text-xs font-bold text-slate-500 uppercase">Point A (x₁, y₁)</span>
                                <div className="text-2xl font-mono text-blue-600">({p1.x}, {p1.y})</div>
                            </div>
                            <div>
                                <span className="text-xs font-bold text-slate-500 uppercase">Point B (x₂, y₂)</span>
                                <div className="text-2xl font-mono text-red-600">({p2.x}, {p2.y})</div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-semibold text-slate-700 flex items-center gap-2">
                            <Info className="w-4 h-4 text-blue-500" />
                            Calculation Steps
                        </h3>

                        <div className="font-mono text-sm bg-slate-900 text-slate-300 p-6 rounded-lg space-y-2 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                    <path d="M3 21h18M3 21l18-18" />
                                </svg>
                            </div>

                            <p>d = √[(x₂ - x₁)² + (y₂ - y₁)²]</p>
                            <p>d = √[({p2.x} - {p1.x})² + ({p2.y} - {p1.y})²]</p>
                            <p>d = √[({(p2.x - p1.x).toFixed(1)})² + ({(p2.y - p1.y).toFixed(1)})²]</p>
                            <p>d = √[{Math.pow(p2.x - p1.x, 2).toFixed(2)} + {Math.pow(p2.y - p1.y, 2).toFixed(2)}]</p>
                            <p className="text-green-400 font-bold text-lg pt-2 border-t border-slate-700 mt-2">
                                d = √{(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)).toFixed(2)} ≈ {distance} units
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Industrial App: GPS - Full Width */}
            <div className="bg-sky-50 p-6 rounded-lg border border-sky-100 text-sky-900 shadow-sm">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                    <span className="text-lg">🏭</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Industrial Application</span>
                </div>
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">📡</span> GPS Navigation
                </h5>
                <p className="text-sm">
                    GPS satellites use the <strong>Distance Formula</strong> (in 3D space) to calculate exactly how far you are from them. By combining distances from 3 or more satellites (Triangulation), your phone knows exactly where you are!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit III: Coordinate Geometry"
                question="Two cell towers are located at coordinates A(0, 0) and B(6, 8). A phone is equidistant from both towers. If the phone is at point P(3, y) on the perpendicular bisector, what is the value of y?"
                correctAnswer="4"
                hint="Since P is equidistant from A and B, use the distance formula: √((3-0)² + (y-0)²) = √((3-6)² + (y-8)²). Solve for y."
                explanation="Perfect! The perpendicular bisector passes through (3, 4). This triangulation principle is how GPS works: your device measures distances to multiple satellites and calculates your exact position. Emergency services use this to locate 911 callers within meters!"
            />
        </div>
    );
}
