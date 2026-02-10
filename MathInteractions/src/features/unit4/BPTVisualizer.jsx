import { useState } from 'react';
import { motion } from 'framer-motion';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function BPTVisualizer() {
    const [h, setH] = useState(0.5); // Height ratio (0 to 1)

    // Triangle Top(A), Left(B), Right(C)
    const A = { x: 150, y: 30 };
    const B = { x: 50, y: 250 };
    const C = { x: 250, y: 250 };

    // Calculate intersection points D and E based on height ratio h
    // D is on AB, E is on AC
    const D = {
        x: A.x + h * (B.x - A.x),
        y: A.y + h * (B.y - A.y)
    };
    const E = {
        x: A.x + h * (C.x - A.x),
        y: A.y + h * (C.y - A.y)
    };

    // Lengths
    const dist = (p1, p2) => Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
    const AD = dist(A, D);
    const DB = dist(D, B);
    const AE = dist(A, E);
    const EC = dist(E, C);

    const ratio1 = AD / DB;
    const ratio2 = AE / EC;

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Drag the Parallel Line (DE)</h3>

                    <div className="relative h-[300px] bg-slate-50 border border-slate-200 rounded-lg overflow-hidden cursor-move"
                        onMouseMove={(e) => {
                            if (e.buttons === 1) {
                                const rect = e.currentTarget.getBoundingClientRect();
                                const y = e.clientY - rect.top;
                                // Clamp y specific to triangle height range approx
                                const minY = A.y;
                                const maxY = B.y - 10;
                                const clampedY = Math.min(Math.max(y, minY + 20), maxY);
                                // Convert back to ratio h
                                const newH = (clampedY - A.y) / (B.y - A.y);
                                setH(newH);
                            }
                        }}
                    >
                        <svg width="100%" height="100%" className="absolute inset-0 pointer-events-none">
                            {/* Triangle ABC */}
                            <polygon
                                points={`${A.x},${A.y} ${B.x},${B.y} ${C.x},${C.y}`}
                                fill="none" stroke="#64748b" strokeWidth="2"
                            />
                            <text x={A.x} y={A.y - 10} textAnchor="middle" fill="#64748b" fontWeight="bold">A</text>
                            <text x={B.x - 15} y={B.y} fill="#64748b" fontWeight="bold">B</text>
                            <text x={C.x + 5} y={C.y} fill="#64748b" fontWeight="bold">C</text>

                            {/* Parallel Line DE */}
                            <line
                                x1={D.x} y1={D.y} x2={E.x} y2={E.y}
                                stroke="#2563eb" strokeWidth="3"
                            />
                            <text x={D.x - 15} y={D.y} fill="#2563eb" fontWeight="bold">D</text>
                            <text x={E.x + 5} y={E.y} fill="#2563eb" fontWeight="bold">E</text>

                            {/* Labels for segments */}
                            <text x={(A.x + D.x) / 2 - 15} y={(A.y + D.y) / 2} fontSize="10" fill="#2563eb">{AD.toFixed(0)}</text>
                            <text x={(D.x + B.x) / 2 - 15} y={(D.y + B.y) / 2} fontSize="10" fill="#64748b">{DB.toFixed(0)}</text>
                        </svg>

                        {/* Draggable Handle Visual */}
                        <div
                            className="absolute w-full border-t border-dashed border-blue-300 pointer-events-none"
                            style={{ top: D.y }}
                        ></div>
                        <div
                            className="absolute right-4 text-xs text-blue-400 bg-blue-50 px-2 py-1 rounded border border-blue-200"
                            style={{ top: D.y - 10 }}
                        >
                            Drag vertical
                        </div>
                    </div>
                    <p className="text-xs text-slate-500 mt-2 text-center">Click and drag inside the area to move line DE up and down.</p>
                </div>

                <div className="w-full md:w-64 space-y-6">
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <h3 className="font-semibold text-slate-700 mb-4 border-b pb-2">Ratios</h3>

                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-slate-500 uppercase">Left Side (AD/DB)</p>
                                <div className="text-xl font-mono text-blue-600">
                                    {AD.toFixed(1)} / {DB.toFixed(1)} = <span className="font-bold">{ratio1.toFixed(3)}</span>
                                </div>
                            </div>

                            <div>
                                <p className="text-xs text-slate-500 uppercase">Right Side (AE/EC)</p>
                                <div className="text-xl font-mono text-blue-600">
                                    {AE.toFixed(1)} / {EC.toFixed(1)} = <span className="font-bold">{ratio2.toFixed(3)}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-green-100 p-4 rounded-lg border border-green-200 text-green-800 text-center">
                        <p className="font-bold text-lg mb-1">AD/DB = AE/EC</p>
                        <p className="text-sm">Theorem Validated</p>
                    </div>
                </div>
            </div>

            {/* Industrial App: Civil Engineering - Full Width */}
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 text-amber-900 shadow-sm">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                    <span className="text-lg">🏭</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Industrial Application</span>
                </div>
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">📐</span> Civil Engineering
                </h5>
                <p className="text-sm">
                    Surveyors use the <strong>Basic Proportionality Theorem</strong> to divide land parcels proportionally. When a road cuts through a triangular plot, BPT ensures fair division of property based on distance ratios, critical for legal land surveys!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit IV: Geometry - Triangles"
                question="A surveyor needs to divide a triangular plot. A line parallel to one side divides the other two sides such that AD = 40m, DB = 60m. If AE = 50m, find EC."
                correctAnswer="75"
                hint="Use BPT: AD/DB = AE/EC. Substitute the known values and solve for EC."
                explanation="Perfect! Using BPT: 40/60 = 50/EC. Cross-multiply: 40×EC = 60×50 = 3000. Therefore EC = 3000/40 = 75 meters. This ensures proportional land division!"
            />
        </div>
    );
}
