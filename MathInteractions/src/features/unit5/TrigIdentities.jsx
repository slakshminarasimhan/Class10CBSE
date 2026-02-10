import { useState } from 'react';
import { motion } from 'framer-motion';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function TrigIdentities() {
    const [selectedIdentity, setSelectedIdentity] = useState(0);
    const [angle, setAngle] = useState(30);

    const rad = (angle * Math.PI) / 180;
    const sinVal = Math.sin(rad);
    const cosVal = Math.cos(rad);
    const tanVal = Math.tan(rad);

    const identities = [
        {
            name: 'tan²θ + 1 = sec²θ',
            lhs: Math.pow(tanVal, 2) + 1,
            rhs: Math.pow(1 / cosVal, 2),
            proof: [
                'Start with: sin²θ + cos²θ = 1',
                'Divide both sides by cos²θ:',
                '(sin²θ/cos²θ) + (cos²θ/cos²θ) = 1/cos²θ',
                'Simplify: tan²θ + 1 = sec²θ ✓'
            ]
        },
        {
            name: '1 + cot²θ = csc²θ',
            lhs: 1 + Math.pow(1 / tanVal, 2),
            rhs: Math.pow(1 / sinVal, 2),
            proof: [
                'Start with: sin²θ + cos²θ = 1',
                'Divide both sides by sin²θ:',
                '(sin²θ/sin²θ) + (cos²θ/sin²θ) = 1/sin²θ',
                'Simplify: 1 + cot²θ = csc²θ ✓'
            ]
        },
        {
            name: 'sin(90° - θ) = cos θ',
            lhs: Math.sin((90 - angle) * Math.PI / 180),
            rhs: cosVal,
            proof: [
                'Complementary angle identity',
                'In a right triangle, if one angle is θ,',
                'the other acute angle is (90° - θ)',
                'sin(90° - θ) = cos θ ✓'
            ]
        },
        {
            name: 'sin²θ = (1 - cos 2θ)/2',
            lhs: Math.pow(sinVal, 2),
            rhs: (1 - Math.cos(2 * rad)) / 2,
            proof: [
                'Double angle formula application',
                'From cos 2θ = 1 - 2sin²θ',
                'Rearrange: 2sin²θ = 1 - cos 2θ',
                'Therefore: sin²θ = (1 - cos 2θ)/2 ✓'
            ]
        }
    ];

    const current = identities[selectedIdentity];

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-6">Simple Trigonometric Identities</h3>
                <p className="text-sm text-slate-600 mb-6">
                    These identities are derived from the fundamental Pythagorean identity and are used to simplify trigonometric expressions.
                </p>

                {/* Identity Selector */}
                <div className="mb-6 flex gap-2 flex-wrap">
                    {identities.map((identity, idx) => (
                        <button
                            key={idx}
                            onClick={() => setSelectedIdentity(idx)}
                            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${selectedIdentity === idx
                                ? 'bg-violet-500 text-white'
                                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                                }`}
                        >
                            Identity {idx + 1}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Identity Display & Proof */}
                    <div className="space-y-4">
                        <div className="bg-violet-50 p-6 rounded-lg border border-violet-200">
                            <h4 className="text-sm text-violet-600 font-semibold mb-2">Identity</h4>
                            <p className="text-2xl font-bold text-violet-900 font-mono">
                                {current.name}
                            </p>
                        </div>

                        <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                            <h4 className="text-sm text-slate-600 font-semibold mb-3">Proof Steps</h4>
                            <div className="space-y-2">
                                {current.proof.map((step, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-start gap-2"
                                    >
                                        <span className="text-violet-600 font-bold">{idx + 1}.</span>
                                        <span className="text-sm text-slate-700">{step}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Verification */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-blue-600">Numerical Verification</h4>

                        <div className="bg-slate-50 p-4 rounded-lg">
                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Test Angle θ = {angle}°
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="89"
                                value={angle}
                                onChange={(e) => setAngle(Number(e.target.value))}
                                className="w-full accent-violet-600"
                            />
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 space-y-4">
                            <div>
                                <p className="text-xs text-blue-700 font-semibold mb-1">Left Side (LHS)</p>
                                <p className="text-2xl font-bold text-blue-900 font-mono">
                                    {current.lhs.toFixed(6)}
                                </p>
                            </div>

                            <div className="flex items-center justify-center">
                                <span className="text-3xl text-slate-400">=</span>
                            </div>

                            <div>
                                <p className="text-xs text-blue-700 font-semibold mb-1">Right Side (RHS)</p>
                                <p className="text-2xl font-bold text-blue-900 font-mono">
                                    {current.rhs.toFixed(6)}
                                </p>
                            </div>

                            <motion.div
                                animate={{
                                    backgroundColor: Math.abs(current.lhs - current.rhs) < 0.0001 ? '#dcfce7' : '#fee2e2',
                                    borderColor: Math.abs(current.lhs - current.rhs) < 0.0001 ? '#16a34a' : '#dc2626'
                                }}
                                className="p-4 rounded-lg border-2 text-center"
                            >
                                <p className={`font-bold text-lg ${Math.abs(current.lhs - current.rhs) < 0.0001 ? 'text-green-700' : 'text-red-700'
                                    }`}>
                                    {Math.abs(current.lhs - current.rhs) < 0.0001 ? '✓ Identity Verified!' : '✗ Check calculation'}
                                </p>
                            </motion.div>
                        </div>

                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                            <p className="text-xs text-amber-800">
                                <strong>Tip:</strong> Try different angles to see that the identity holds for all values of θ!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Industrial App: Audio Engineering - Full Width */}
            <div className="bg-fuchsia-50 p-6 rounded-lg border border-fuchsia-200 text-fuchsia-900 shadow-sm">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                    <span className="text-lg">🏭</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Industrial Application</span>
                </div>
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">🎵</span> Audio Engineering
                </h5>
                <p className="text-sm">
                    Audio engineers use <strong>trigonometric identities</strong> in sound wave synthesis and harmonic analysis. When combining multiple sine waves to create complex sounds, identities like sin²θ = (1 - cos 2θ)/2 help optimize digital signal processing algorithms for real-time audio effects!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit V: Trigonometry - Identities"
                question="Simplify: (1 + tan²θ) × cos²θ"
                correctAnswer="1"
                hint="Use the identity tan²θ + 1 = sec²θ, and remember that sec θ = 1/cos θ."
                explanation="Excellent! Using tan²θ + 1 = sec²θ, we get (1 + tan²θ) = sec²θ. So the expression becomes sec²θ × cos²θ = (1/cos²θ) × cos²θ = 1. Identities make simplification much easier!"
            />
        </div>
    );
}
