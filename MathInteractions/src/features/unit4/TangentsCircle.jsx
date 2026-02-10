import { useState } from 'react';
import { motion } from 'framer-motion';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function TangentsCircle() {
    const [angle, setAngle] = useState(0); // Rotation angle of the line

    // Circle properties
    const cx = 200;
    const cy = 200;
    const r = 100;

    // Point P (fixed on circle for rotation pivot)
    // Let P be at angle 0 (right side)
    const P = {
        x: cx + r,
        y: cy
    };

    // Line rotation logic
    // The line passes through P. We rotate it by 'angle'.
    // We need to find intersection points with the circle.
    // Equation of circle: (x-cx)^2 + (y-cy)^2 = r^2
    // Equation of line passing through P(px, py) with angle theta:
    // x = px + t * cos(theta + 90)  <-- Tangent is at 90 deg to radius if theta=0
    // Let's define angle such that 0 means Tangent (vertical if P is right), 
    // and we rotate the secant.

    // Simpler approach for visual:
    // Visual limit: -60 to 60 degrees.
    // 0 degrees = Tangent (Vertical line at P)
    // Non-zero = Secant

    // Calculate second intersection point Q visually
    // If line rotates by alpha relative to tangent, the chord PQ subtends 2*alpha at center?
    // Let's use simple geometry.
    // P is at 0 degrees on circle.
    // Tangent is vertical (90 deg).
    // Secant is rotated by 'angle' from vertical.
    // The chord makes an angle of 2*angle with the tangent? No.
    // Angle between tangent and chord = angle in alternate segment.

    // Let's find Q based on 'angle' deviation from tangent.
    // The angle subtended by chord at center = 2 * (angle of deviation).
    // So Q is at -2 * angle relative to P on the circle.

    const angleRad = (angle * Math.PI) / 180;
    const QAngle = -2 * angleRad; // P is at 0.

    const Q = {
        x: cx + r * Math.cos(QAngle),
        y: cy + r * Math.sin(QAngle)
    };

    // Line end points for drawing (long enough to cross canvas)
    // Line passes through P and Q.
    // If P and Q are same (angle 0), we use the tangent direction.

    let x1, y1, x2, y2;
    const lineLen = 300;

    if (Math.abs(angle) < 0.1) {
        // Tangent (Vertical)
        x1 = P.x; y1 = P.y - lineLen;
        x2 = P.x; y2 = P.y + lineLen;
    } else {
        // Secant through P and Q
        // Direction vector P -> Q
        const dx = Q.x - P.x;
        const dy = Q.y - P.y;
        const len = Math.sqrt(dx * dx + dy * dy);
        // Unit vector
        const ux = dx / len;
        const uy = dy / len;

        // Extend both ways
        x1 = P.x - ux * 100;
        y1 = P.y - uy * 100;
        x2 = Q.x + ux * 100;
        y2 = Q.y + uy * 100;
    }

    const isTangent = Math.abs(angle) < 1;

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Secant to Tangent</h3>

                    <div className="relative h-[400px] bg-slate-50 border border-slate-200 rounded-lg overflow-hidden flex items-center justify-center">
                        <svg width="400" height="400" className="absolute inset-0 pointer-events-none">
                            {/* Circle */}
                            <circle cx={cx} cy={cy} r={r} fill="rgba(59, 130, 246, 0.05)" stroke="#3b82f6" strokeWidth="3" />
                            <circle cx={cx} cy={cy} r={3} fill="#3b82f6" />
                            <text x={cx - 10} y={cy - 10} fontSize="12" fill="#3b82f6">O</text>

                            {/* Radius OP */}
                            <line x1={cx} y1={cy} x2={P.x} y2={P.y} stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4,4" />

                            {/* The Line */}
                            <motion.line
                                animate={{ x1, y1, x2, y2 }}
                                stroke={isTangent ? "#10b981" : "#ef4444"}
                                strokeWidth={isTangent ? 4 : 2}
                            />

                            {/* Points P and Q */}
                            <circle cx={P.x} cy={P.y} r={5} fill="#1e293b" />
                            <text x={P.x + 10} y={P.y + 5} fontWeight="bold" fill="#1e293b">P</text>

                            {!isTangent && (
                                <motion.g animate={{ x: Q.x, y: Q.y }}>
                                    <circle r={5} fill="#ef4444" />
                                    <text x={10} y={5} fontWeight="bold" fill="#ef4444">Q</text>
                                </motion.g>
                            )}
                        </svg>

                        <div className="absolute top-4 left-4 bg-white/80 p-2 rounded border shadow-sm">
                            <p className="text-sm font-bold text-slate-600">Points of Intersection:</p>
                            <p className={`text-xl font-bold ${isTangent ? 'text-green-600' : 'text-red-600'}`}>
                                {isTangent ? "1 (Tangent)" : "2 (Secant)"}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-64 space-y-8">
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <h3 className="font-semibold text-slate-700 mb-4 border-b pb-2">Control Rotation</h3>

                        <div className="mb-6">
                            <label className="text-xs font-bold text-slate-500 uppercase block mb-2">Rotate Line</label>
                            <input
                                type="range" min="-45" max="45" step="0.5"
                                value={angle} onChange={(e) => setAngle(Number(e.target.value))}
                                className="w-full accent-blue-600"
                            />
                            <div className="flex justify-between text-xs text-slate-400 mt-1">
                                <span>-45°</span>
                                <span className="font-bold text-slate-600">{angle}°</span>
                                <span>45°</span>
                            </div>
                        </div>

                        <button
                            onClick={() => setAngle(0)}
                            className="w-full py-2 bg-green-100 hover:bg-green-200 text-green-700 font-bold rounded transition-colors"
                        >
                            Snap to Tangent
                        </button>
                    </div>

                    <div className="bg-slate-900 text-slate-300 p-6 rounded-lg text-sm">
                        <p>
                            A <strong>tangent</strong> to a circle is a line that intersects the circle at only one point.
                        </p>
                        <p className="mt-4 pt-4 border-t border-slate-700 text-xs italic">
                            "The common point of the tangent and the circle is called the point of contact."
                        </p>
                    </div>
                </div>
            </div>

            {/* Industrial App: Optics - Full Width */}
            <div className="bg-cyan-50 p-6 rounded-lg border border-cyan-200 text-cyan-900 shadow-sm">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                    <span className="text-lg">🏭</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Industrial Application</span>
                </div>
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">👓</span> Optics & Lenses
                </h5>
                <p className="text-sm">
                    Light rays entering a lens or hitting a mirror act like <strong>Tangents</strong> at the point of impact.
                    Designing eyeglasses or telescopes requires precise calculation of these tangent angles to focus light correctly!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit IV: Geometry"
                question="A satellite dish (circular) has a radius of 2 meters. A signal beam is tangent to the dish at a point 2 meters from the center. If the tangent length from an external point to the dish is 3 meters, what is the distance from that external point to the center of the dish? (Use Pythagoras: d² = r² + tangent²)"
                correctAnswer="3.6"
                hint="Use the tangent-radius theorem: The tangent is perpendicular to the radius. So d = √(2² + 3²) = √(4 + 9) = √13 ≈ 3.6."
                explanation="Excellent! √13 ≈ 3.6 meters. This tangent property is fundamental in optics for calculating focal points, reflection angles, and satellite dish positioning. Engineers use it to ensure signals are captured at maximum strength!"
            />
        </div >
    );
}
