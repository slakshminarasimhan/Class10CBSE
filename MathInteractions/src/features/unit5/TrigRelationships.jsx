import { useState } from 'react';
import { motion } from 'framer-motion';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function TrigRelationships() {
    const [angle, setAngle] = useState(30);

    const rad = (angle * Math.PI) / 180;
    const sinVal = Math.sin(rad);
    const cosVal = Math.cos(rad);
    const tanVal = Math.tan(rad);

    // Reciprocal identities
    const cscVal = 1 / sinVal;
    const secVal = 1 / cosVal;
    const cotVal = 1 / tanVal;

    // Quotient identity
    const tanFromQuotient = sinVal / cosVal;

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-6">Trigonometric Relationships</h3>
                <p className="text-sm text-slate-600 mb-6">
                    Trigonometric ratios are related through reciprocal, quotient, and complementary angle relationships.
                </p>

                {/* Angle Control */}
                <div className="mb-6 bg-slate-50 p-4 rounded-lg">
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Angle θ = {angle}°
                    </label>
                    <input
                        type="range"
                        min="1"
                        max="89"
                        value={angle}
                        onChange={(e) => setAngle(Number(e.target.value))}
                        className="w-full accent-blue-600"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Reciprocal Identities */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-emerald-600 border-b pb-2">Reciprocal Identities</h4>

                        <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200 space-y-3">
                            <div>
                                <p className="text-xs text-emerald-700 font-semibold mb-1">Cosecant (csc)</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-sm">csc θ = 1/sin θ</span>
                                    <span className="font-bold text-emerald-700">{cscVal.toFixed(3)}</span>
                                </div>
                                <div className="text-xs text-slate-600 mt-1">
                                    1/{sinVal.toFixed(3)} = {cscVal.toFixed(3)}
                                </div>
                            </div>

                            <div>
                                <p className="text-xs text-emerald-700 font-semibold mb-1">Secant (sec)</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-sm">sec θ = 1/cos θ</span>
                                    <span className="font-bold text-emerald-700">{secVal.toFixed(3)}</span>
                                </div>
                                <div className="text-xs text-slate-600 mt-1">
                                    1/{cosVal.toFixed(3)} = {secVal.toFixed(3)}
                                </div>
                            </div>

                            <div>
                                <p className="text-xs text-emerald-700 font-semibold mb-1">Cotangent (cot)</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-sm">cot θ = 1/tan θ</span>
                                    <span className="font-bold text-emerald-700">{cotVal.toFixed(3)}</span>
                                </div>
                                <div className="text-xs text-slate-600 mt-1">
                                    1/{tanVal.toFixed(3)} = {cotVal.toFixed(3)}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quotient & Complementary */}
                    <div className="space-y-4">
                        <h4 className="font-semibold text-blue-600 border-b pb-2">Quotient Identity</h4>

                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 space-y-3">
                            <div>
                                <p className="text-xs text-blue-700 font-semibold mb-1">Tangent as Quotient</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-mono text-sm">tan θ = sin θ / cos θ</span>
                                </div>
                                <div className="text-xs text-slate-600 mt-2">
                                    {sinVal.toFixed(3)} / {cosVal.toFixed(3)} = {tanFromQuotient.toFixed(3)}
                                </div>
                                <div className="text-xs text-green-600 font-semibold mt-1">
                                    ✓ Matches tan θ = {tanVal.toFixed(3)}
                                </div>
                            </div>
                        </div>

                        <h4 className="font-semibold text-purple-600 border-b pb-2 mt-4">Complementary Angles</h4>

                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200 space-y-2">
                            <div className="text-sm">
                                <p className="font-mono">sin({angle}°) = cos({90 - angle}°)</p>
                                <p className="text-xs text-slate-600">
                                    {sinVal.toFixed(3)} = {Math.cos((90 - angle) * Math.PI / 180).toFixed(3)} ✓
                                </p>
                            </div>
                            <div className="text-sm">
                                <p className="font-mono">cos({angle}°) = sin({90 - angle}°)</p>
                                <p className="text-xs text-slate-600">
                                    {cosVal.toFixed(3)} = {Math.sin((90 - angle) * Math.PI / 180).toFixed(3)} ✓
                                </p>
                            </div>
                            <div className="text-sm">
                                <p className="font-mono">tan({angle}°) = cot({90 - angle}°)</p>
                                <p className="text-xs text-slate-600">
                                    {tanVal.toFixed(3)} = {(1 / Math.tan((90 - angle) * Math.PI / 180)).toFixed(3)} ✓
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Summary */}
                <div className="mt-6 bg-slate-100 p-4 rounded-lg">
                    <h5 className="font-semibold text-slate-700 mb-2">Key Relationships</h5>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-xs font-mono">
                        <div>csc θ = 1/sin θ</div>
                        <div>sec θ = 1/cos θ</div>
                        <div>cot θ = 1/tan θ</div>
                        <div>tan θ = sin θ/cos θ</div>
                        <div>cot θ = cos θ/sin θ</div>
                        <div>sin θ = cos(90° - θ)</div>
                    </div>
                </div>
            </div>

            {/* Industrial App: Electrical Engineering - Full Width */}
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 text-yellow-900 shadow-sm">
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">⚡</span> Electrical Engineering
                </h5>
                <p className="text-sm">
                    Electrical engineers use <strong>trigonometric relationships</strong> in AC circuit analysis. Phase angles between voltage and current use complementary relationships, while impedance calculations rely on quotient identities to convert between rectangular and polar forms!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit V: Trigonometry - Relationships"
                question="If sin θ = 3/5, what is csc θ?"
                correctAnswer="5/3"
                hint="Use the reciprocal identity: csc θ = 1/sin θ."
                explanation="Perfect! Using the reciprocal identity: csc θ = 1/sin θ = 1/(3/5) = 5/3. Cosecant is always the reciprocal of sine!"
            />
        </div>
    );
}
