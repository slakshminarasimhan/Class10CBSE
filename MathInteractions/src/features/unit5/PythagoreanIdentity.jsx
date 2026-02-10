import { useState } from 'react';
import { motion } from 'framer-motion';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function PythagoreanIdentity() {
    const [angle, setAngle] = useState(30);

    const rad = (angle * Math.PI) / 180;
    const sinVal = Math.sin(rad);
    const cosVal = Math.cos(rad);

    const sin2 = sinVal * sinVal;
    const cos2 = cosVal * cosVal;
    const sum = sin2 + cos2;

    // Unit circle coordinates
    const x = 100 * cosVal;
    const y = -100 * sinVal;

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-6">Pythagorean Identity: sin²θ + cos²θ = 1</h3>
                <p className="text-sm text-slate-600 mb-6">
                    This fundamental identity comes from the Pythagorean theorem applied to the unit circle.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Unit Circle Proof */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-rose-600">Unit Circle Proof</h4>

                        <div className="h-[320px] bg-rose-50 rounded-lg border border-rose-200 flex items-center justify-center relative">
                            <svg width="260" height="260" viewBox="-130 -130 260 260">
                                {/* Axes */}
                                <line x1="-130" y1="0" x2="130" y2="0" stroke="#cbd5e1" strokeWidth="1" />
                                <line x1="0" y1="-130" x2="0" y2="130" stroke="#cbd5e1" strokeWidth="1" />

                                {/* Unit Circle */}
                                <circle cx="0" cy="0" r="100" fill="none" stroke="#f43f5e" strokeWidth="3" />

                                {/* Right triangle */}
                                <motion.g animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
                                    {/* Hypotenuse (radius = 1) */}
                                    <motion.line
                                        animate={{ x2: x, y2: y }}
                                        x1="0" y1="0"
                                        stroke="#0f172a" strokeWidth="3"
                                    />

                                    {/* cos (adjacent) */}
                                    <motion.line
                                        animate={{ x2: x }}
                                        x1="0" y1="0" y2="0"
                                        stroke="#3b82f6" strokeWidth="3"
                                    />

                                    {/* sin (opposite) */}
                                    <motion.line
                                        animate={{ x1: x, y1: 0, x2: x, y2: y }}
                                        stroke="#10b981" strokeWidth="3"
                                    />

                                    {/* Point on circle */}
                                    <motion.circle
                                        animate={{ cx: x, cy: y }}
                                        r="5" fill="#ef4444"
                                    />
                                </motion.g>

                                {/* Labels */}
                                <text x="110" y="5" fontSize="11" fill="#64748b">x (cos θ)</text>
                                <text x="-5" y="-110" fontSize="11" fill="#64748b">y (sin θ)</text>
                                <motion.text
                                    animate={{ x: x / 2 - 10, y: 15 }}
                                    fontSize="12" fill="#3b82f6" fontWeight="bold"
                                >
                                    cos θ
                                </motion.text>
                                <motion.text
                                    animate={{ x: x + 15, y: y / 2 }}
                                    fontSize="12" fill="#10b981" fontWeight="bold"
                                >
                                    sin θ
                                </motion.text>
                                <motion.text
                                    animate={{ x: x / 2 - 20, y: y / 2 - 10 }}
                                    fontSize="12" fill="#0f172a" fontWeight="bold"
                                >
                                    r = 1
                                </motion.text>
                            </svg>
                        </div>

                        <div className="bg-slate-100 p-4 rounded-lg text-sm space-y-2">
                            <p className="font-semibold text-slate-700">Pythagorean Theorem:</p>
                            <p className="font-mono">(cos θ)² + (sin θ)² = (radius)²</p>
                            <p className="font-mono">cos²θ + sin²θ = 1²</p>
                            <p className="font-mono text-green-600 font-bold">sin²θ + cos²θ = 1 ✓</p>
                        </div>
                    </div>

                    {/* Verification */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-blue-600">Interactive Verification</h4>

                        <div className="bg-slate-50 p-4 rounded-lg">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Angle θ = {angle}°
                            </label>
                            <input
                                type="range"
                                min="0"
                                max="90"
                                value={angle}
                                onChange={(e) => setAngle(Number(e.target.value))}
                                className="w-full accent-rose-600"
                            />
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 space-y-4">
                            <div>
                                <p className="text-xs text-blue-700 font-semibold mb-1">sin θ</p>
                                <p className="text-2xl font-bold text-blue-900">{sinVal.toFixed(4)}</p>
                            </div>

                            <div>
                                <p className="text-xs text-blue-700 font-semibold mb-1">cos θ</p>
                                <p className="text-2xl font-bold text-blue-900">{cosVal.toFixed(4)}</p>
                            </div>

                            <div className="border-t border-blue-300 pt-4">
                                <p className="text-xs text-blue-700 font-semibold mb-1">sin²θ</p>
                                <p className="text-xl font-mono text-blue-900">{sin2.toFixed(6)}</p>
                            </div>

                            <div>
                                <p className="text-xs text-blue-700 font-semibold mb-1">cos²θ</p>
                                <p className="text-xl font-mono text-blue-900">{cos2.toFixed(6)}</p>
                            </div>

                            <div className="border-t-2 border-blue-400 pt-4">
                                <p className="text-xs text-blue-700 font-semibold mb-1">sin²θ + cos²θ</p>
                                <motion.p
                                    animate={{
                                        scale: Math.abs(sum - 1) < 0.0001 ? [1, 1.1, 1] : 1
                                    }}
                                    className="text-3xl font-bold text-green-600"
                                >
                                    {sum.toFixed(6)} ≈ 1.000000 ✓
                                </motion.p>
                            </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                            <p className="text-sm text-green-800 font-semibold">
                                ✓ Identity holds for all angles!
                            </p>
                            <p className="text-xs text-green-700 mt-1">
                                Try any angle from 0° to 90° - the sum always equals 1.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Industrial App: Signal Processing - Full Width */}
            <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200 text-cyan-900 shadow-sm">
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">📡</span> Signal Processing
                </h5>
                <p className="text-sm">
                    Signal processing engineers use the <strong>Pythagorean identity</strong> in amplitude modulation and wave analysis. When decomposing signals into in-phase (I) and quadrature (Q) components, the identity ensures total power conservation: I² + Q² = A², critical for wireless communications!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit V: Trigonometry - Identities"
                question="If cos θ = 4/5, what is sin²θ?"
                correctAnswer="9/25"
                hint="Use the Pythagorean identity: sin²θ + cos²θ = 1. Rearrange to find sin²θ = 1 - cos²θ."
                explanation="Perfect! Using sin²θ + cos²θ = 1, we get sin²θ = 1 - cos²θ = 1 - (4/5)² = 1 - 16/25 = 9/25. This identity is incredibly useful for finding one ratio when you know another!"
            />
        </div>
    );
}
