import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun } from 'lucide-react';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function TrigRatios() {
    const [angle, setAngle] = useState(45); // Angle of elevation (theta)

    const poleHeight = 150; // Fixed hypotenuse or adjacent?
    // Let's model a pole of fixed height (opposite side).
    // Shadow length (adjacent) changes with angle.
    // tan(theta) = opp / adj
    // adj = opp / tan(theta)

    // However, pure shadow/sun logic usually implies the sun angle.
    // If angle is 0, sun is horizontal (shadow infinite).
    // If angle is 90, sun is overhead (shadow 0).
    // Let's constrain angle: 10 to 80 degrees to avoid infinity/zeros visually.

    const rad = (angle * Math.PI) / 180;
    const shadowLength = poleHeight / Math.tan(rad);
    const hypotenuse = Math.sqrt(poleHeight * poleHeight + shadowLength * shadowLength);

    // Ratios
    const sin = (poleHeight / hypotenuse).toFixed(3);
    const cos = (shadowLength / hypotenuse).toFixed(3);
    const tan = (poleHeight / shadowLength).toFixed(3);

    // Visualize
    // Ground line Y roughly 300
    // Pole at X=300 (Right aligned, shadow to left?)
    // Let's put Pole at X=300. Shadow extends to left.
    const groundY = 300;
    const poleX = 300;

    const shadowEndX = poleX - shadowLength;

    // Sun position (schematic)
    // Sun ray passes through top of pole to end of shadow.
    // Angle is with the ground.

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Shadow Simulator</h3>

                    <div className="relative h-[350px] bg-sky-50 border border-slate-200 rounded-lg overflow-hidden">
                        {/* Sun */}
                        <motion.div
                            animate={{
                                x: shadowEndX - 50, // Roughly follow the angle
                                y: groundY - poleHeight - 50
                            }}
                            className="absolute text-yellow-500"
                        >
                            <Sun size={40} fill="currentColor" className="animate-spin-slow" />
                        </motion.div>

                        <svg width="100%" height="100%" className="absolute inset-0 pointer-events-none">
                            {/* Ground */}
                            <line x1="0" y1={groundY} x2="400" y2={groundY} stroke="#94a3b8" strokeWidth="2" />

                            {/* Pole (Opposite) */}
                            <line x1={poleX} y1={groundY} x2={poleX} y2={groundY - poleHeight} stroke="#0f172a" strokeWidth="4" />

                            {/* Shadow (Adjacent) */}
                            <line x1={poleX} y1={groundY} x2={shadowEndX} y2={groundY} stroke="#94a3b8" strokeWidth="4" strokeLinecap="round" opacity="0.5" />

                            {/* Hypotenuse (Sun Ray) */}
                            <line x1={shadowEndX} y1={groundY} x2={poleX} y2={groundY - poleHeight} stroke="#eab308" strokeWidth="2" strokeDasharray="4,4" />

                            {/* Angle Arc */}
                            <path
                                d={`M ${shadowEndX + 30} ${groundY} A 30 30 0 0 0 ${shadowEndX + 30 * Math.cos(-rad)} ${groundY + 30 * Math.sin(-rad)}`}
                                fill="none" stroke="#ef4444" strokeWidth="2"
                            />
                            <text x={shadowEndX + 40} y={groundY - 10} fontSize="12" fill="#ef4444" fontWeight="bold">θ</text>

                            {/* Labels */}
                            <text x={poleX + 10} y={groundY - poleHeight / 2} fill="#0f172a" fontSize="12" writingMode="tb" glyphOrientationVertical="0">Opposite (h)</text>
                            <text x={(poleX + shadowEndX) / 2} y={groundY + 20} fill="#64748b" textAnchor="middle" fontSize="12">Adjacent (Shadow)</text>
                            <text x={(poleX + shadowEndX) / 2 - 10} y={groundY - poleHeight / 2 - 20} fill="#eab308" textAnchor="middle" fontSize="12">Hypotenuse</text>
                        </svg>
                    </div>
                </div>

                <div className="w-full lg:w-80 space-y-6">
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <h3 className="font-semibold text-slate-700 mb-4 border-b pb-2">Sun Angle (θ)</h3>
                        <input
                            type="range" min="15" max="75" step="1"
                            value={angle} onChange={e => setAngle(Number(e.target.value))}
                            className="w-full accent-yellow-500"
                        />
                        <div className="text-center font-bold text-3xl text-yellow-600 mt-2">{angle}°</div>
                    </div>

                    <div className="bg-slate-900 text-slate-300 p-6 rounded-lg font-mono text-sm space-y-4">

                        <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                            <span>sin θ = Opp/Hyp</span>
                            <span className="text-green-400 font-bold">{sin}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-700 pb-2">
                            <span>cos θ = Adj/Hyp</span>
                            <span className="text-green-400 font-bold">{cos}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>tan θ = Opp/Adj</span>
                            <span className="text-green-400 font-bold">{tan}</span>
                        </div>

                        <div className="pt-4 text-xs text-slate-500 italic">
                            *Notice: As angle increases, shadow (adj) shrinks, causing tan θ to increase.
                        </div>
                    </div>
                </div>
            </div>

            {/* Industrial App: Construction - Full Width */}
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 text-orange-900 shadow-sm">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                    <span className="text-lg">🏭</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Industrial Application</span>
                </div>
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">🏗️</span> Construction
                </h5>
                <p className="text-sm">
                    Construction engineers use <strong>trigonometric ratios</strong> to calculate roof pitch, ramp angles, and staircase slopes. For example, a 4:12 roof pitch means a 4-unit rise for every 12-unit run, giving tan(θ) = 4/12 = 0.333, or θ ≈ 18.4°!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit V: Trigonometry - Introduction"
                question="A ladder leans against a wall forming a right triangle. The ladder is 10m long (hypotenuse) and reaches 8m up the wall (opposite). What is sin(θ) where θ is the angle between the ladder and ground?"
                correctAnswer="0.8"
                hint="Use the definition: sin(θ) = opposite/hypotenuse."
                explanation="Perfect! sin(θ) = opposite/hypotenuse = 8/10 = 0.8. This means the angle is approximately 53.1°, which is a safe ladder angle for construction work!"
            />
        </div>
    );
}
