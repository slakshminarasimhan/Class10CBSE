import { useState } from 'react';
import { motion } from 'framer-motion';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function SegmentArea() {
    const [angle, setAngle] = useState(90);
    const [radius, setRadius] = useState(6);

    // Restrict to curriculum angles: 60, 90, 120
    const allowedAngles = [60, 90, 120];

    const toRad = (deg) => (deg * Math.PI) / 180;

    // Calculations
    const sectorArea = (angle / 360) * Math.PI * radius * radius;

    // Triangle area (for segment calculation)
    // For a sector with central angle θ, the triangle has two sides = radius
    // Area of triangle = (1/2) * r * r * sin(θ)
    const triangleArea = 0.5 * radius * radius * Math.sin(toRad(angle));

    // Segment area = Sector area - Triangle area
    const segmentArea = sectorArea - triangleArea;

    // SVG visualization
    const rPx = 100;
    const cx = 150;
    const cy = 150;

    const endX = cx + rPx * Math.cos(-toRad(angle));
    const endY = cy + rPx * Math.sin(-toRad(angle));

    const largeArcFlag = angle > 180 ? 1 : 0;

    const sectorPath = `
        M ${cx} ${cy}
        L ${cx + rPx} ${cy}
        A ${rPx} ${rPx} 0 ${largeArcFlag} 0 ${endX} ${endY}
        Z
    `;

    const segmentPath = `
        M ${cx + rPx} ${cy}
        A ${rPx} ${rPx} 0 ${largeArcFlag} 0 ${endX} ${endY}
        Z
    `;

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-6">Area of Circle Segment</h3>
                <p className="text-sm text-slate-600 mb-6">
                    A segment is the region between a chord and the arc it subtends. Segment Area = Sector Area - Triangle Area.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Visualization */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-teal-600">Visual Representation</h4>

                        <div className="h-[320px] bg-teal-50 rounded-lg border border-teal-200 flex items-center justify-center relative">
                            <svg width="300" height="300">
                                {/* Full Circle Ghost */}
                                <circle cx={cx} cy={cy} r={rPx} fill="none" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="5,5" />

                                {/* Sector (light fill) */}
                                <motion.path
                                    d={sectorPath}
                                    fill="rgba(20, 184, 166, 0.1)"
                                    stroke="none"
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Triangle (to subtract) */}
                                <motion.path
                                    d={`M ${cx} ${cy} L ${cx + rPx} ${cy} L ${endX} ${endY} Z`}
                                    fill="rgba(239, 68, 68, 0.2)"
                                    stroke="#ef4444"
                                    strokeWidth="2"
                                    strokeDasharray="4,4"
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Segment (highlighted) */}
                                <motion.path
                                    d={segmentPath}
                                    fill="rgba(20, 184, 166, 0.4)"
                                    stroke="#14b8a6"
                                    strokeWidth="3"
                                    transition={{ duration: 0.3 }}
                                />

                                {/* Chord */}
                                <line x1={cx + rPx} y1={cy} x2={endX} y2={endY} stroke="#0f172a" strokeWidth="2" />

                                {/* Radius lines */}
                                <line x1={cx} y1={cy} x2={cx + rPx} y2={cy} stroke="#64748b" strokeWidth="2" />
                                <line x1={cx} y1={cy} x2={endX} y2={endY} stroke="#64748b" strokeWidth="2" />

                                {/* Labels */}
                                <text x={cx + rPx / 2} y={cy - 10} fill="#64748b" fontSize="12" fontWeight="bold">r</text>
                                <text x={cx + 15} y={cy - 15} fill="#0f172a" fontSize="12" fontWeight="bold">{angle}°</text>
                                <text x={cx + rPx / 2 + 20} y={cy + 40} fill="#14b8a6" fontSize="14" fontWeight="bold">Segment</text>
                                <text x={cx + 30} y={cy + 20} fill="#ef4444" fontSize="11">Triangle</text>
                            </svg>
                        </div>

                        <div className="bg-slate-100 p-4 rounded-lg text-sm space-y-2">
                            <p className="font-semibold text-slate-700">Formula Breakdown:</p>
                            <p className="font-mono text-xs">Segment Area = Sector Area - Triangle Area</p>
                            <p className="font-mono text-xs">= (θ/360) × πr² - (1/2)r²sin(θ)</p>
                        </div>
                    </div>

                    {/* Controls & Calculations */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-blue-600">Measurements & Calculations</h4>

                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
                            <label className="block text-sm font-semibold text-slate-700 mb-3">
                                Central Angle (θ) - Curriculum Angles Only
                            </label>
                            <div className="flex gap-2 mb-4">
                                {allowedAngles.map(deg => (
                                    <button
                                        key={deg}
                                        onClick={() => setAngle(deg)}
                                        className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-colors ${angle === deg
                                                ? 'bg-teal-500 text-white'
                                                : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                                            }`}
                                    >
                                        {deg}°
                                    </button>
                                ))}
                            </div>

                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                Radius (r) = {radius} cm
                            </label>
                            <input
                                type="range"
                                min="2"
                                max="10"
                                value={radius}
                                onChange={(e) => setRadius(Number(e.target.value))}
                                className="w-full accent-teal-600"
                            />
                        </div>

                        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 space-y-4">
                            <div>
                                <p className="text-xs text-blue-700 font-semibold mb-1">Sector Area</p>
                                <p className="text-xl font-bold text-blue-900 font-mono">
                                    {sectorArea.toFixed(2)} cm²
                                </p>
                                <p className="text-xs text-slate-600 mt-1">
                                    ({angle}/360) × π × {radius}²
                                </p>
                            </div>

                            <div className="border-t border-blue-300 pt-3">
                                <p className="text-xs text-red-700 font-semibold mb-1">Triangle Area (subtract)</p>
                                <p className="text-xl font-bold text-red-900 font-mono">
                                    - {triangleArea.toFixed(2)} cm²
                                </p>
                                <p className="text-xs text-slate-600 mt-1">
                                    (1/2) × {radius}² × sin({angle}°)
                                </p>
                            </div>

                            <div className="border-t-2 border-teal-400 pt-4">
                                <p className="text-xs text-teal-700 font-semibold mb-1">Segment Area</p>
                                <motion.p
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 0.5 }}
                                    className="text-3xl font-bold text-teal-700 font-mono"
                                >
                                    {segmentArea.toFixed(2)} cm²
                                </motion.p>
                            </div>
                        </div>

                        <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                            <p className="text-xs text-amber-800">
                                <strong>Note:</strong> As per curriculum, we only use central angles of 60°, 90°, and 120° for segment calculations.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Industrial App: Civil Engineering - Full Width */}
            <div className="bg-emerald-50 p-6 rounded-lg border border-emerald-200 text-emerald-900 shadow-sm">
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">🌉</span> Civil Engineering
                </h5>
                <p className="text-sm">
                    Civil engineers use <strong>segment area calculations</strong> in arch bridge design and tunnel construction. When designing a semicircular arch, the usable area beneath the arch is a segment. Calculating this area helps determine load distribution and material requirements for safe, efficient structures!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit VI: Mensuration - Areas Related to Circles"
                question="A circle has radius 7 cm. Find the area of the segment formed by a chord subtending a central angle of 90° at the center. (Use π ≈ 22/7)"
                correctAnswer="14"
                hint="Segment Area = Sector Area - Triangle Area. For 90°: Sector = (90/360) × πr², Triangle = (1/2)r²sin(90°) = (1/2)r²."
                explanation="Excellent! Sector Area = (90/360) × (22/7) × 49 = (1/4) × 154 = 38.5 cm². Triangle Area = (1/2) × 49 × 1 = 24.5 cm². Segment Area = 38.5 - 24.5 = 14 cm²!"
            />
        </div>
    );
}
