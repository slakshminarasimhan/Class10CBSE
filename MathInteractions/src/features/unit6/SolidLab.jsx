import { useState } from 'react';
import { motion } from 'framer-motion';
import PracticalAssignment from '../../components/PracticalAssignment';
import { Box, Cylinder, Plus } from 'lucide-react'; // Placeholder icons for UI

export default function SolidLab() {
    const [combined, setCombined] = useState(false);

    // Dimensions
    const r = 3; // radius
    const h = 7; // cylinder height

    // Calculations
    const areaCylCurved = 2 * Math.PI * r * h;
    const areaCylBase = Math.PI * r * r;
    const areaCylTotal = areaCylCurved + 2 * areaCylBase;

    const areaHemiCurved = 2 * Math.PI * r * r;
    const areaHemiBase = Math.PI * r * r;
    const areaHemiTotal = 3 * Math.PI * r * r;

    // Combined Solid: PSA = CSA(Cyl) + CSA(Hemi) + Base(Cyl)
    // The top base of Cylinder and base of Hemisphere are hidden/joined.
    const areaCombined = areaCylCurved + areaCylBase + areaHemiCurved;

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                    <h3 className="text-lg font-semibold text-slate-800 mb-4">Solid Lab: Combinations</h3>

                    <div className="relative h-[400px] bg-slate-50 border border-slate-200 rounded-lg overflow-hidden flex items-center justify-center">

                        {/* Container for the solids */}
                        <div className="relative flex flex-col items-center justify-center h-full w-full">

                            {/* Hemisphere (Top) */}
                            <motion.div
                                animate={{
                                    y: combined ? 10 : -40, // Move down to join
                                    marginBottom: combined ? 0 : 20
                                }}
                                transition={{ type: "spring", stiffness: 100 }}
                                className="relative z-10 group"
                            >
                                {/* SVG Hemisphere */}
                                <svg width="140" height="80" viewBox="0 0 140 80">
                                    {/* Dome */}
                                    <path d="M 10 70 A 60 60 0 0 1 130 70" fill="#fca5a5" stroke="#ef4444" strokeWidth="2" />
                                    {/* Base Ellipse (Bottom) - Visible only if separated */}
                                    {!combined && (
                                        <ellipse cx="70" cy="70" rx="60" ry="10" fill="#fee2e2" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,4" />
                                    )}
                                    {combined && (
                                        // Just the front curve of the base line
                                        <path d="M 10 70 Q 70 80 130 70" fill="none" stroke="#ef4444" strokeWidth="2" />
                                    )}
                                    <text x="70" y="40" textAnchor="middle" fill="#7f1d1d" fontWeight="bold">Hemisphere</text>
                                </svg>
                            </motion.div>

                            {/* Plus Sign */}
                            {!combined && (
                                <div className="absolute text-slate-400 font-bold text-2xl z-0">+</div>
                            )}

                            {/* Cylinder (Bottom) */}
                            <div className="relative z-0 group">
                                {/* SVG Cylinder */}
                                <svg width="140" height="150" viewBox="0 0 140 150">
                                    {/* Top Base */}
                                    <ellipse cx="70" cy="10" rx="60" ry="10" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />

                                    {/* Body */}
                                    <path d="M 10 10 L 10 130 A 60 10 0 0 0 130 130 L 130 10" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />

                                    {/* Bottom Base (Hidden mostly but drawn for wireframe effect) */}
                                    <ellipse cx="70" cy="130" rx="60" ry="10" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="2" />

                                    <text x="70" y="80" textAnchor="middle" fill="#1e3a8a" fontWeight="bold">Cylinder</text>
                                </svg>
                            </div>

                        </div>

                        <button
                            onClick={() => setCombined(!combined)}
                            className="absolute bottom-4 right-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow font-bold transition-colors"
                        >
                            {combined ? "Separate Solids" : "Combine Solids"}
                        </button>
                    </div>
                </div>

                <div className="w-full md:w-80 space-y-6">
                    <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
                        <h3 className="font-semibold text-slate-700 mb-4 border-b pb-2">Surface Area Analysis</h3>

                        <div className="space-y-4 text-sm">
                            <div className="bg-white p-3 rounded border border-slate-200">
                                <p className="font-bold text-blue-700 mb-1">Cylinder (TSA)</p>
                                <p className="flex justify-between">
                                    <span>CSA + 2 Bases</span>
                                    <span className="font-mono">{areaCylTotal.toFixed(1)}π</span>
                                </p>
                            </div>

                            <div className="bg-white p-3 rounded border border-slate-200">
                                <p className="font-bold text-red-700 mb-1">Hemisphere (TSA)</p>
                                <p className="flex justify-between">
                                    <span>CSA + Base</span>
                                    <span className="font-mono">{areaHemiTotal.toFixed(1)}π</span>
                                </p>
                            </div>

                            <div className={`p-3 rounded border transition-colors ${combined ? 'bg-purple-100 border-purple-300' : 'bg-slate-100 border-slate-200 text-slate-400'}`}>
                                <p className={`font-bold mb-1 ${combined ? 'text-purple-700' : ''}`}>Combined Solid (TSA)</p>
                                {combined ? (
                                    <div className="space-y-2">
                                        <p className="font-mono flex justify-between">
                                            <span>Cyl Base</span>
                                            <span>{areaCylBase.toFixed(1)}π</span>
                                        </p>
                                        <p className="font-mono flex justify-between">
                                            <span>+ Cyl CSA</span>
                                            <span>{areaCylCurved.toFixed(1)}π</span>
                                        </p>
                                        <p className="font-mono flex justify-between">
                                            <span>+ Hemi CSA</span>
                                            <span>{areaHemiCurved.toFixed(1)}π</span>
                                        </p>
                                        <div className="border-t border-purple-300 pt-1 mt-1 font-bold flex justify-between">
                                            <span>Total</span>
                                            <span>{areaCombined.toFixed(1)}π</span>
                                        </div>
                                        <p className="text-xs text-purple-600 italic mt-1">
                                            *Note: The joining circular faces are hidden and NOT counted.
                                        </p>
                                    </div>
                                ) : (
                                    <p className="text-xs">Combine the solids to see the calculation.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Industrial App: Manufacturing - Full Width */}
            <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 text-orange-900 shadow-sm">
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">🏭</span> Manufacturing
                </h5>
                <p className="text-sm">
                    Engineers calculate <strong>Surface Area</strong> to minimize material costs for packaging.
                    A soda can (Cylinder) uses the least metal for the most volume when the height is twice the radius!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit VI: Mensuration"
                question="A cylindrical soda can has a radius of 3 cm and height of 12 cm. Calculate the TOTAL surface area (including both circular ends) in square cm. Use formula: 2πr(r+h), and π ≈ 3.14."
                correctAnswer="282.6"
                hint="Surface Area = 2πr(r + h) = 2 × 3.14 × 3 × (3 + 12) = 2 × 3.14 × 3 × 15."
                explanation="Perfect! 2 × 3.14 × 3 × 15 = 282.6 cm². Manufacturers use this to calculate the exact amount of aluminum needed for billions of cans, minimizing waste and cost. Even saving 0.1 cm² per can translates to millions in savings!"
            />
        </div >
    );
}
