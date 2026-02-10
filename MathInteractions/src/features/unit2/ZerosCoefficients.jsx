import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function ZerosCoefficients() {
    const [a, setA] = useState(1);
    const [b, setB] = useState(-5);
    const [c, setC] = useState(6);

    const [zeros, setZeros] = useState({ z1: 2, z2: 3, exists: true });

    useEffect(() => {
        const discriminant = b * b - 4 * a * c;
        if (discriminant >= 0) {
            const x1 = (-b + Math.sqrt(discriminant)) / (2 * a);
            const x2 = (-b - Math.sqrt(discriminant)) / (2 * a);
            setZeros({ z1: parseFloat(x1.toFixed(2)), z2: parseFloat(x2.toFixed(2)), exists: true });
        } else {
            setZeros({ exists: false });
        }
    }, [a, b, c]);

    const sumOfZeros = zeros.exists ? (zeros.z1 + zeros.z2).toFixed(2) : 'NaN';
    const productOfZeros = zeros.exists ? (zeros.z1 * zeros.z2).toFixed(2) : 'NaN';

    const targetSum = (-b / a).toFixed(2);
    const targetProduct = (c / a).toFixed(2);

    const isSumMatch = sumOfZeros === targetSum;
    const isProductMatch = productOfZeros === targetProduct;

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h3 className="font-semibold text-slate-700 mb-6">Quadratic Equation: ax² + bx + c = 0</h3>

                        <div className="space-y-6 bg-slate-50 p-6 rounded-lg">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold">a</div>
                                <input
                                    type="range" min="-5" max="5" step="0.5"
                                    value={a} onChange={(e) => setA(e.target.value === '0' ? 0.5 : parseFloat(e.target.value))}
                                    className="flex-1 accent-blue-600"
                                />
                                <span className="w-12 text-right font-mono font-bold text-slate-700">{a}</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold">b</div>
                                <input
                                    type="range" min="-10" max="10" step="1"
                                    value={b} onChange={(e) => setB(parseFloat(e.target.value))}
                                    className="flex-1 accent-purple-600"
                                />
                                <span className="w-12 text-right font-mono font-bold text-slate-700">{b}</span>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center font-bold">c</div>
                                <input
                                    type="range" min="-10" max="10" step="1"
                                    value={c} onChange={(e) => setC(parseFloat(e.target.value))}
                                    className="flex-1 accent-green-600"
                                />
                                <span className="w-12 text-right font-mono font-bold text-slate-700">{c}</span>
                            </div>
                        </div>

                        {zeros.exists ? (
                            <div className="mt-6 flex justify-center gap-4">
                                <div className="px-4 py-2 bg-slate-100 rounded text-slate-600">
                                    <span className="text-xs font-bold uppercase tracking-wider">Zero 1 (α)</span>
                                    <div className="text-xl font-bold">{zeros.z1}</div>
                                </div>
                                <div className="px-4 py-2 bg-slate-100 rounded text-slate-600">
                                    <span className="text-xs font-bold uppercase tracking-wider">Zero 2 (β)</span>
                                    <div className="text-xl font-bold">{zeros.z2}</div>
                                </div>
                            </div>
                        ) : (
                            <div className="mt-6 p-4 bg-red-50 text-red-600 rounded text-center">
                                No real roots (Discriminant is negative)
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col justify-center space-y-8">
                        {/* Sum Card */}
                        <motion.div
                            layout
                            className={`p-6 rounded-xl border-l-4 ${isSumMatch && zeros.exists ? 'bg-green-50 border-green-500' : 'bg-slate-50 border-slate-300'}`}
                        >
                            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-2">Sum of Zeros (α + β)</h4>
                            <div className="flex items-end justify-between">
                                <div>
                                    <div className="text-2xl font-bold text-slate-800">
                                        {zeros.exists ? sumOfZeros : '---'}
                                    </div>
                                    <div className="text-xs text-slate-400 mt-1">Calculated from roots</div>
                                </div>
                                <div className="text-3xl text-slate-300 font-light">=</div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-blue-600">
                                        {targetSum}
                                    </div>
                                    <div className="text-xs text-blue-400 mt-1 font-mono">
                                        -b / a = -({b})/{a}
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Product Card */}
                        <motion.div
                            layout
                            className={`p-6 rounded-xl border-l-4 ${isProductMatch && zeros.exists ? 'bg-green-50 border-green-500' : 'bg-slate-50 border-slate-300'}`}
                        >
                            <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-2">Product of Zeros (α × β)</h4>
                            <div className="flex items-end justify-between">
                                <div>
                                    <div className="text-2xl font-bold text-slate-800">
                                        {zeros.exists ? productOfZeros : '---'}
                                    </div>
                                    <div className="text-xs text-slate-400 mt-1">Calculated from roots</div>
                                </div>
                                <div className="text-3xl text-slate-300 font-light">=</div>
                                <div className="text-right">
                                    <div className="text-2xl font-bold text-purple-600">
                                        {targetProduct}
                                    </div>
                                    <div className="text-xs text-purple-400 mt-1 font-mono">
                                        c / a = {c}/{a}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Industrial App: Signal Processing - Full Width */}
            <div className="bg-indigo-50 p-6 rounded-lg border border-indigo-200 text-indigo-900 shadow-sm">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                    <span className="text-lg">🏭</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Industrial Application</span>
                </div>
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">📡</span> Signal Processing
                </h5>
                <p className="text-sm">
                    Engineers use <strong>polynomial zeros</strong> to design audio filters and equalizers. The relationship between zeros and coefficients helps predict how sound frequencies will be amplified or reduced. This is how noise-canceling headphones work!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit II: Algebra - Polynomials"
                question="A quadratic polynomial has zeros at x = 3 and x = -2. If the coefficient of x² is 1, what is the value of the constant term c?"
                correctAnswer="-6"
                hint="Use the relationship: Product of zeros = c/a. If zeros are 3 and -2, then (3)×(-2) = c/1."
                explanation="Excellent! Product of zeros = 3 × (-2) = -6. Since c/a = -6 and a = 1, we get c = -6. The polynomial is (x-3)(x+2) = x² - x - 6, confirming c = -6!"
            />
        </div>
    );
}
