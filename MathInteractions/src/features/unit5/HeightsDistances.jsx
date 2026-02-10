import { useState } from 'react';
import { motion } from 'framer-motion';
import PracticalAssignment from '../../components/PracticalAssignment';
import { Eye } from 'lucide-react';

export default function HeightsDistances() {
    const [angle, setAngle] = useState(30);
    const distance = 100; // Distance from tower base

    // Calculate Height
    const rad = (angle * Math.PI) / 180;
    const height = distance * Math.tan(rad);

    // Visual Scaling
    // Canvas width 500, height 400.
    // Observer at x=50, y=350 (ground level).
    // Tower at x=400.
    // Scale: 350px width = 100m distance? -> 3.5px per meter.
    const scale = 3.5;
    const obsX = 50;
    const groundY = 350;
    const towerX = obsX + distance * scale;
    const towerH = height * scale;

    // Eye level typically adds height, but for simplicity let's assume eye level = ground or negligible for this demo,
    // OR we can add a small offset for eye level (e.g., 1.5m).
    // Let's keep it simple: Observer eye is at ground (0) or add a small 10px offset.
    const eyeY = groundY - 10;

    const targetY = eyeY - towerH; // Top of tower relative to canvas

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Clinometer Experiment</h3>

                    <div className="relative h-[400px] bg-sky-100 border border-slate-200 rounded-lg overflow-hidden">
                        {/* Ground */}
                        <div className="absolute bottom-0 left-0 right-0 h-[50px] bg-green-100 border-t border-green-200"></div>

                        <svg width="100%" height="100%" className="absolute inset-0 pointer-events-none">
                            {/* Distance Line */}
                            <line x1={obsX} y1={groundY + 20} x2={towerX} y2={groundY + 20} stroke="#64748b" strokeWidth="2" />
                            <text x={(obsX + towerX) / 2} y={groundY + 40} textAnchor="middle" fill="#64748b" fontSize="12" fontWeight="bold">{distance}m</text>
                            <line x1={obsX} y1={groundY + 15} x2={obsX} y2={groundY + 25} stroke="#64748b" />
                            <line x1={towerX} y1={groundY + 15} x2={towerX} y2={groundY + 25} stroke="#64748b" />

                            {/* Tower */}
                            <rect x={towerX - 20} y={targetY} width="40" height={towerH} fill="#94a3b8" stroke="#475569" strokeWidth="2" />
                            {/* Tower Windows */}
                            {Array.from({ length: Math.floor(towerH / 30) }).map((_, i) => (
                                <rect key={i} x={towerX - 10} y={groundY - (i + 1) * 30} width="20" height="15" fill="#cbd5e1" />
                            ))}

                            {/* Line of Sight */}
                            <motion.line
                                animate={{ x2: towerX, y2: targetY }}
                                x1={obsX} y1={eyeY}
                                stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5"
                            />

                            {/* Horizontal Line from Eye */}
                            <line x1={obsX} y1={eyeY} x2={towerX} y2={eyeY} stroke="#94a3b8" strokeWidth="1" strokeDasharray="2,2" />

                            {/* Angle Arc */}
                            <defs>
                                <marker id="arrow" markerWidth="10" markerHeight="10" refX="0" refY="3" orient="auto">
                                    <path d="M0,0 L0,6 L9,3 z" fill="#ef4444" />
                                </marker>
                            </defs>

                            {/* Height Label */}
                            <line x1={towerX + 30} y1={groundY} x2={towerX + 30} y2={targetY} stroke="#0f172a" strokeWidth="2" markerEnd="url(#arrow)" />
                            <text x={towerX + 40} y={(groundY + targetY) / 2} fill="#0f172a" fontWeight="bold" writingMode="tb" glyphOrientationVertical="0">h = ?</text>
                        </svg>

                        {/* Observer */}
                        <div
                            className="absolute w-8 h-20 bg-blue-600 rounded-t-full -ml-4"
                            style={{ left: obsX, top: groundY - 20 }}
                        >
                            <Eye className="absolute -top-3 left-1 text-white w-6 h-6" />
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-80 space-y-8">
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <h3 className="font-semibold text-slate-700 mb-4 border-b pb-2">Use Clinometer</h3>

                        <div className="mb-6 relative">
                            {/* Clinometer Visual */}
                            <div className="w-32 h-16 border-2 border-slate-400 rounded-t-full mx-auto relative overflow-hidden bg-white">
                                <div
                                    className="absolute bottom-0 left-1/2 w-1 h-14 bg-red-500 origin-bottom"
                                    style={{ transform: `translateX(-50%) rotate(${angle}deg)` }}
                                ></div>
                                <div className="absolute bottom-0 left-0 right-0 border-t border-slate-300"></div>
                            </div>
                            <p className="text-center text-xs text-slate-500 mt-1">Angle of Elevation</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <span className="font-bold text-slate-500">0°</span>
                            <input
                                type="range" min="0" max="85" step="1"
                                value={angle} onChange={e => setAngle(Number(e.target.value))}
                                className="flex-1 accent-red-500"
                            />
                            <span className="font-bold text-slate-500">85°</span>
                        </div>
                        <div className="text-center font-bold text-3xl text-red-600 mt-2">{angle}°</div>
                    </div>

                    <div className="bg-slate-900 text-slate-300 p-6 rounded-lg font-mono text-sm">
                        <h4 className="text-white font-bold mb-4 border-b border-slate-700 pb-2">Calculation</h4>

                        <p className="mb-2">tan θ = Height / Distance</p>
                        <p className="mb-2">Height = Distance × tan θ</p>
                        <p className="mb-2">Height = {distance} × tan({angle}°)</p>
                        <p className="mb-2">Height = {distance} × {Math.tan(rad).toFixed(3)}</p>

                        <div className="mt-4 pt-4 border-t border-slate-700">
                            <p className="text-green-400 text-xl font-bold">
                                Height = {height.toFixed(2)} m
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Industrial App: Navigation - Full Width */}
            <div className="bg-sky-50 p-6 rounded-lg border border-sky-200 text-sky-900 shadow-sm">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                    <span className="text-lg">🏭</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Industrial Application</span>
                </div>
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">✈️</span> Navigation
                </h5>
                <p className="text-sm">
                    Pilots and Captains use <strong>Trigonometry</strong> to calculate distances to landmarks or other vehicles.
                    By measuring the <em>Angle of Depression</em> from a plane, they can find the exact ground distance to an airport!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit V: Trigonometry"
                question="An air traffic controller sees a plane at an angle of elevation of 30°. The plane is flying at an altitude of 5000 meters. What is the horizontal distance (in meters) from the controller to the plane? (Use tan(30°) ≈ 0.577)"
                correctAnswer="8660"
                hint="Use tan(θ) = opposite/adjacent. Here, tan(30°) = 5000/distance. Rearrange: distance = 5000/tan(30°) = 5000/0.577."
                explanation="Correct! 5000 / 0.577 ≈ 8660 meters. Air traffic controllers use trigonometry to maintain safe separation between aircraft, calculate approach paths, and guide planes to landing. A miscalculation could be catastrophic!"
            />
        </div >
    );
}
