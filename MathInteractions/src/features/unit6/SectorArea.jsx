import { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart } from 'lucide-react';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function SectorArea() {
    const [angle, setAngle] = useState(90);
    const [radius, setRadius] = useState(4); // Visual radius unit

    const rPx = 120; // Pixel radius for SVG
    const cx = 150;
    const cy = 150;

    // Calculate SVG path for sector
    // Start at top (0, -r) -> which is 270 deg in SVG coordinates?
    // Let's standard starts at 0 (Right, 3 o'clock)
    // End at 'angle'.

    const toRad = (deg) => (deg * Math.PI) / 180;

    // Point on circle at angle
    const x = cx + rPx * Math.cos(toRad(angle));
    const y = cy - rPx * Math.sin(toRad(angle)); // SVG Y is down, so minus for counter-clockwise from right? 
    // Actually standard SVG calc:
    // 0 deg = (cx + r, cy)
    // 90 deg = (cx, cy + r) -> This is clockwise.
    // Math usually counter-clockwise.
    // Let's stick to standard SVG arcs.

    // We want counter-clockwise from 0 (Right).
    // x = cx + r * cos(-theta)
    // y = cy + r * sin(-theta) (since y is down)

    const endX = cx + rPx * Math.cos(-toRad(angle));
    const endY = cy + rPx * Math.sin(-toRad(angle));

    const largeArcFlag = angle > 180 ? 1 : 0;

    const pathData = `
      M ${cx} ${cy}
      L ${cx + rPx} ${cy}
      A ${rPx} ${rPx} 0 ${largeArcFlag} 0 ${endX} ${endY}
      Z
  `;

    // Calculations
    const areaTotal = Math.PI * radius * radius;
    const areaSector = (angle / 360) * areaTotal;
    const arcLength = (angle / 360) * 2 * Math.PI * radius;

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Pizza Slice (Sector)</h3>

                    <div className="relative h-[350px] bg-orange-50 border border-slate-200 rounded-lg overflow-hidden flex items-center justify-center">
                        <svg width="300" height="300">
                            {/* Full Circle Ghost */}
                            <circle cx={cx} cy={cy} r={rPx} fill="#fff" stroke="#e2e8f0" strokeWidth="2" strokeDasharray="5,5" />

                            {/* Sector */}
                            <motion.path
                                d={pathData}
                                fill="rgba(249, 115, 22, 0.2)"
                                stroke="#f97316"
                                strokeWidth="2"
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />

                            {/* Radius Labels */}
                            <text x={cx + rPx / 2} y={cy - 10} fill="#f97316" fontSize="12" fontWeight="bold">r</text>

                            {/* Angle Label */}
                            {angle > 20 && (
                                <text x={cx + 20} y={cy - 10} fill="#f97316" fontSize="10">{angle}°</text>
                            )}
                        </svg>
                    </div>
                </div>

                <div className="w-full md:w-80 space-y-6">
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <h3 className="font-semibold text-slate-700 mb-4 border-b pb-2">Measurements</h3>

                        <div className="mb-4">
                            <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Sector Angle (θ)</label>
                            <input
                                type="range" min="1" max="359"
                                value={angle} onChange={e => setAngle(Number(e.target.value))}
                                className="w-full accent-orange-500"
                            />
                            <div className="text-right font-bold text-orange-600">{angle}°</div>
                        </div>

                        <div className="mb-4">
                            <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Radius (r)</label>
                            <input
                                type="range" min="1" max="10"
                                value={radius} onChange={e => setRadius(Number(e.target.value))}
                                className="w-full accent-orange-500"
                            />
                            <div className="text-right font-bold text-orange-600">{radius} cm</div>
                        </div>
                    </div>

                    <div className="bg-slate-900 text-slate-300 p-6 rounded-lg font-mono text-sm">
                        <h4 className="text-white font-bold mb-4 border-b border-slate-700 pb-2">Formulas & Values</h4>

                        <div className="space-y-3">
                            <div>
                                <p className="text-xs text-slate-500">Area of Sector = (θ/360) × πr²</p>
                                <p className="text-lg text-white font-bold">
                                    {areaSector.toFixed(2)} cm²
                                </p>
                                <p className="text-xs text-orange-400">
                                    ({(angle / 360).toFixed(2)} of Total {areaTotal.toFixed(1)})
                                </p>
                            </div>

                            <div className="pt-2 border-t border-slate-800">
                                <p className="text-xs text-slate-500">Length of Arc = (θ/360) × 2πr</p>
                                <p className="text-lg text-white font-bold">
                                    {arcLength.toFixed(2)} cm
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Industrial App: Food Industry - Full Width */}
            <div className="bg-amber-50 p-6 rounded-lg border border-amber-200 text-amber-900 shadow-sm">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                    <span className="text-lg">🏭</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Industrial Application</span>
                </div>
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">🍕</span> Food Industry
                </h5>
                <p className="text-sm">
                    Pizza restaurants use <strong>sector area calculations</strong> to determine portion sizes and pricing. A large 16-inch pizza cut into 8 slices means each slice is a 45° sector. Calculating the area ensures consistent portions and helps optimize ingredient costs per slice!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit VI: Mensuration - Areas Related to Circles"
                question="A circular pizza has a radius of 12 cm. If you cut a slice with a central angle of 60°, what is the area of that slice? (Use π ≈ 3.14)"
                correctAnswer="75.36"
                hint="Use the formula: Area of sector = (θ/360) × πr². Substitute θ = 60° and r = 12 cm."
                explanation="Perfect! Area = (60/360) × π × 12² = (1/6) × 3.14 × 144 = 75.36 cm². This is exactly 1/6 of the total pizza area!"
            />
        </div>
    );
}
