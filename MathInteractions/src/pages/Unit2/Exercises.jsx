import React from 'react';

export default function Exercises() {
    return (
        <div className="space-y-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Exercise 2.2</h2>

            {/* Question 1 */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                    1. Find the zeroes of the following quadratic polynomials and verify the relationship between the zeroes and the coefficients.
                </h3>

                <div className="space-y-8">
                    {/* Q1 (i) */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">(i)</span> x² - 2x - 8
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p><strong>Step 1: Find the zeroes by splitting the middle term.</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>p(x) = x² - 2x - 8</p>
                                <p>We need two numbers that multiply to -8 and add to -2. These are -4 and 2.</p>
                                <p>x² - 4x + 2x - 8 = 0</p>
                                <p>x(x - 4) + 2(x - 4) = 0</p>
                                <p>(x + 2)(x - 4) = 0</p>
                                <p>So, the zeroes are <strong>x = -2</strong> and <strong>x = 4</strong>.</p>
                                <p>Let α = -2 and β = 4.</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Verify the relationship.</strong></p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 border rounded-md shadow-sm">
                                    <h4 className="font-semibold text-blue-800 border-b pb-2 mb-2">Sum of zeroes (α + β)</h4>
                                    <p>α + β = -2 + 4 = <strong>2</strong></p>
                                    <p className="mt-2">-b/a = -(-2)/1 = <strong>2</strong></p>
                                    <p className="text-green-600 font-semibold mt-2">✓ Verified (Sum = -b/a)</p>
                                </div>
                                <div className="bg-white p-4 border rounded-md shadow-sm">
                                    <h4 className="font-semibold text-blue-800 border-b pb-2 mb-2">Product of zeroes (αβ)</h4>
                                    <p>αβ = (-2) × 4 = <strong>-8</strong></p>
                                    <p className="mt-2">c/a = -8/1 = <strong>-8</strong></p>
                                    <p className="text-green-600 font-semibold mt-2">✓ Verified (Product = c/a)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q1 (ii) */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">(ii)</span> 4s² - 4s + 1
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p><strong>Step 1: Find the zeroes.</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>p(s) = 4s² - 4s + 1</p>
                                <p>This is a perfect square trinomial: (2s - 1)² = 0</p>
                                <p>Or splitting middle term: 4s² - 2s - 2s + 1 = 0</p>
                                <p>2s(2s - 1) - 1(2s - 1) = 0</p>
                                <p>(2s - 1)(2s - 1) = 0</p>
                                <p>So, the zeroes are <strong>s = 1/2</strong> and <strong>s = 1/2</strong>.</p>
                                <p>Let α = 1/2 and β = 1/2.</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Verify the relationship.</strong></p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 border rounded-md shadow-sm">
                                    <h4 className="font-semibold text-blue-800 border-b pb-2 mb-2">Sum of zeroes</h4>
                                    <p>α + β = 1/2 + 1/2 = <strong>1</strong></p>
                                    <p className="mt-2">-b/a = -(-4)/4 = 4/4 = <strong>1</strong></p>
                                    <p className="text-green-600 font-semibold mt-2">✓ Verified</p>
                                </div>
                                <div className="bg-white p-4 border rounded-md shadow-sm">
                                    <h4 className="font-semibold text-blue-800 border-b pb-2 mb-2">Product of zeroes</h4>
                                    <p>αβ = (1/2) × (1/2) = <strong>1/4</strong></p>
                                    <p className="mt-2">c/a = <strong>1/4</strong></p>
                                    <p className="text-green-600 font-semibold mt-2">✓ Verified</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q1 (iii) */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">(iii)</span> 6x² - 3 - 7x
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p><strong>Step 1: Rewrite in standard form and find zeroes.</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Standard form: p(x) = 6x² - 7x - 3</p>
                                <p>We need numbers that multiply to 6 × -3 = -18 and add to -7. These are -9 and 2.</p>
                                <p>6x² - 9x + 2x - 3 = 0</p>
                                <p>3x(2x - 3) + 1(2x - 3) = 0</p>
                                <p>(3x + 1)(2x - 3) = 0</p>
                                <p>So, the zeroes are <strong>x = -1/3</strong> and <strong>x = 3/2</strong>.</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Verify the relationship.</strong></p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 border rounded-md shadow-sm">
                                    <h4 className="font-semibold text-blue-800 border-b pb-2 mb-2">Sum of zeroes</h4>
                                    <p>(-1/3) + (3/2) = -2/6 + 9/6 = <strong>7/6</strong></p>
                                    <p className="mt-2">-b/a = -(-7)/6 = <strong>7/6</strong></p>
                                    <p className="text-green-600 font-semibold mt-2">✓ Verified</p>
                                </div>
                                <div className="bg-white p-4 border rounded-md shadow-sm">
                                    <h4 className="font-semibold text-blue-800 border-b pb-2 mb-2">Product of zeroes</h4>
                                    <p>(-1/3) × (3/2) = -3/6 = <strong>-1/2</strong></p>
                                    <p className="mt-2">c/a = -3/6 = <strong>-1/2</strong></p>
                                    <p className="text-green-600 font-semibold mt-2">✓ Verified</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q1 (iv) */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">(iv)</span> 4u² + 8u
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p><strong>Step 1: Find the zeroes (c = 0).</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>p(u) = 4u² + 8u</p>
                                <p>Factor out common term 4u:</p>
                                <p>4u(u + 2) = 0</p>
                                <p>So, 4u = 0 (implies u = 0) or u + 2 = 0 (implies u = -2).</p>
                                <p>Zeroes are <strong>u = 0</strong> and <strong>u = -2</strong>.</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Verify the relationship.</strong></p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 border rounded-md shadow-sm">
                                    <h4 className="font-semibold text-blue-800 border-b pb-2 mb-2">Sum of zeroes</h4>
                                    <p>0 + (-2) = <strong>-2</strong></p>
                                    <p className="mt-2">-b/a = -8/4 = <strong>-2</strong></p>
                                    <p className="text-green-600 font-semibold mt-2">✓ Verified</p>
                                </div>
                                <div className="bg-white p-4 border rounded-md shadow-sm">
                                    <h4 className="font-semibold text-blue-800 border-b pb-2 mb-2">Product of zeroes</h4>
                                    <p>0 × (-2) = <strong>0</strong></p>
                                    <p className="mt-2">c/a = 0/4 = <strong>0</strong></p>
                                    <p className="text-green-600 font-semibold mt-2">✓ Verified</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q1 (v) */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">(v)</span> t² - 15
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p><strong>Step 1: Find the zeroes (b = 0).</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>p(t) = t² - 15</p>
                                <p>Using a² - b² = (a - b)(a + b):</p>
                                <p>t² - (√15)² = 0</p>
                                <p>(t - √15)(t + √15) = 0</p>
                                <p>Zeroes are <strong>t = √15</strong> and <strong>t = -√15</strong>.</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Verify the relationship.</strong></p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 border rounded-md shadow-sm">
                                    <h4 className="font-semibold text-blue-800 border-b pb-2 mb-2">Sum of zeroes</h4>
                                    <p>√15 + (-√15) = <strong>0</strong></p>
                                    <p className="mt-2">-b/a = -0/1 = <strong>0</strong></p>
                                    <p className="text-green-600 font-semibold mt-2">✓ Verified</p>
                                </div>
                                <div className="bg-white p-4 border rounded-md shadow-sm">
                                    <h4 className="font-semibold text-blue-800 border-b pb-2 mb-2">Product of zeroes</h4>
                                    <p>√15 × (-√15) = -15</p>
                                    <p className="mt-2">c/a = -15/1 = <strong>-15</strong></p>
                                    <p className="text-green-600 font-semibold mt-2">✓ Verified</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q1 (vi) */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">(vi)</span> 3x² - x - 4
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p><strong>Step 1: Find the zeroes by splitting middle term.</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>p(x) = 3x² - x - 4</p>
                                <p>Find numbers that multiply to 3 × -4 = -12 and add to -1. These are -4 and 3.</p>
                                <p>3x² + 3x - 4x - 4 = 0</p>
                                <p>3x(x + 1) - 4(x + 1) = 0</p>
                                <p>(3x - 4)(x + 1) = 0</p>
                                <p>Zeroes are <strong>x = 4/3</strong> and <strong>x = -1</strong>.</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Verify the relationship.</strong></p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white p-4 border rounded-md shadow-sm">
                                    <h4 className="font-semibold text-blue-800 border-b pb-2 mb-2">Sum of zeroes</h4>
                                    <p>(4/3) + (-1) = 4/3 - 3/3 = <strong>1/3</strong></p>
                                    <p className="mt-2">-b/a = -(-1)/3 = <strong>1/3</strong></p>
                                    <p className="text-green-600 font-semibold mt-2">✓ Verified</p>
                                </div>
                                <div className="bg-white p-4 border rounded-md shadow-sm">
                                    <h4 className="font-semibold text-blue-800 border-b pb-2 mb-2">Product of zeroes</h4>
                                    <p>(4/3) × (-1) = <strong>-4/3</strong></p>
                                    <p className="mt-2">c/a = <strong>-4/3</strong></p>
                                    <p className="text-green-600 font-semibold mt-2">✓ Verified</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Question 2 */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mt-12">
                <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                    2. Find a quadratic polynomial each with the given numbers as the sum and product of its zeroes respectively.
                </h3>

                <p className="text-slate-600 mb-6 bg-blue-50 p-4 border border-blue-100 rounded-lg">
                    <strong>Formula:</strong> A quadratic polynomial whose sum of zeroes is S and product of zeroes is P can be written as:<br />
                    <span className="font-serif text-lg font-bold">k(x² - Sx + P)</span>, where k is a real number.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Q2 (i) */}
                    <div className="border border-slate-200 rounded-lg bg-slate-50 p-5 shadow-sm">
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <span className="text-blue-700">(i)</span> 1/4, -1
                        </h4>
                        <div className="font-serif text-slate-700 space-y-2 bg-white p-4 rounded border">
                            <p>Sum (S) = 1/4</p>
                            <p>Product (P) = -1</p>
                            <p className="pt-2 border-t mt-2">Polynomial:</p>
                            <p>x² - (1/4)x + (-1)</p>
                            <p>x² - x/4 - 1</p>
                            <p className="text-sm text-slate-500 italic">Multiplying by 4 to remove denominator (k=4):</p>
                            <p className="font-bold text-lg text-slate-800 bg-blue-50 py-1 px-2 mt-1 rounded text-center">
                                4x² - x - 4
                            </p>
                        </div>
                    </div>

                    {/* Q2 (ii) */}
                    <div className="border border-slate-200 rounded-lg bg-slate-50 p-5 shadow-sm">
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <span className="text-blue-700">(ii)</span> √2, 1/3
                        </h4>
                        <div className="font-serif text-slate-700 space-y-2 bg-white p-4 rounded border">
                            <p>Sum (S) = √2</p>
                            <p>Product (P) = 1/3</p>
                            <p className="pt-2 border-t mt-2">Polynomial:</p>
                            <p>x² - (√2)x + (1/3)</p>
                            <p className="text-sm text-slate-500 italic">Multiplying by 3 to remove denominator (k=3):</p>
                            <p className="font-bold text-lg text-slate-800 bg-blue-50 py-1 px-2 mt-1 rounded text-center">
                                3x² - 3√2x + 1
                            </p>
                        </div>
                    </div>

                    {/* Q2 (iii) */}
                    <div className="border border-slate-200 rounded-lg bg-slate-50 p-5 shadow-sm">
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <span className="text-blue-700">(iii)</span> 0, √5
                        </h4>
                        <div className="font-serif text-slate-700 space-y-2 bg-white p-4 rounded border">
                            <p>Sum (S) = 0</p>
                            <p>Product (P) = √5</p>
                            <p className="pt-2 border-t mt-2">Polynomial:</p>
                            <p>x² - (0)x + (√5)</p>
                            <p className="font-bold text-lg text-slate-800 bg-blue-50 py-1 px-2 mt-1 rounded text-center">
                                x² + √5
                            </p>
                        </div>
                    </div>

                    {/* Q2 (iv) */}
                    <div className="border border-slate-200 rounded-lg bg-slate-50 p-5 shadow-sm">
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <span className="text-blue-700">(iv)</span> 1, 1
                        </h4>
                        <div className="font-serif text-slate-700 space-y-2 bg-white p-4 rounded border">
                            <p>Sum (S) = 1</p>
                            <p>Product (P) = 1</p>
                            <p className="pt-2 border-t mt-2">Polynomial:</p>
                            <p>x² - (1)x + (1)</p>
                            <p className="font-bold text-lg text-slate-800 bg-blue-50 py-1 px-2 mt-1 rounded text-center">
                                x² - x + 1
                            </p>
                        </div>
                    </div>

                    {/* Q2 (v) */}
                    <div className="border border-slate-200 rounded-lg bg-slate-50 p-5 shadow-sm">
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <span className="text-blue-700">(v)</span> -1/4, 1/4
                        </h4>
                        <div className="font-serif text-slate-700 space-y-2 bg-white p-4 rounded border">
                            <p>Sum (S) = -1/4</p>
                            <p>Product (P) = 1/4</p>
                            <p className="pt-2 border-t mt-2">Polynomial:</p>
                            <p>x² - (-1/4)x + (1/4)</p>
                            <p>x² + x/4 + 1/4</p>
                            <p className="text-sm text-slate-500 italic">Multiplying by 4 (k=4):</p>
                            <p className="font-bold text-lg text-slate-800 bg-blue-50 py-1 px-2 mt-1 rounded text-center">
                                4x² + x + 1
                            </p>
                        </div>
                    </div>

                    {/* Q2 (vi) */}
                    <div className="border border-slate-200 rounded-lg bg-slate-50 p-5 shadow-sm">
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <span className="text-blue-700">(vi)</span> 4, 1
                        </h4>
                        <div className="font-serif text-slate-700 space-y-2 bg-white p-4 rounded border">
                            <p>Sum (S) = 4</p>
                            <p>Product (P) = 1</p>
                            <p className="pt-2 border-t mt-2">Polynomial:</p>
                            <p>x² - (4)x + (1)</p>
                            <p className="font-bold text-lg text-slate-800 bg-blue-50 py-1 px-2 mt-1 rounded text-center">
                                x² - 4x + 1
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- EXERCISE 3.3 --- */}
            <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-16 pt-8 border-t-2 border-slate-300">Exercise 3.3</h2>

            {/* Question 1 */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                    1. Solve the following pair of linear equations by the elimination method and the substitution method:
                </h3>

                <div className="space-y-8">
                    {/* Q1 (i) */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">(i)</span> x + y = 5 and 2x - 3y = 4
                        </div>
                        <div className="bg-slate-50 p-6 space-y-6 text-slate-700">
                            <div className="font-serif text-lg p-2">
                                <p>Eq (1): x + y = 5</p>
                                <p>Eq (2): 2x - 3y = 4</p>
                            </div>

                            {/* Elimination */}
                            <div className="bg-white p-5 border rounded-md shadow-sm">
                                <h4 className="font-bold text-blue-800 border-b pb-2 mb-3 bg-blue-50 px-3 py-1 inline-block rounded">Elimination Method</h4>
                                <div className="space-y-2 font-serif">
                                    <p>Multiply Eq (1) by 3 to eliminate y:</p>
                                    <p>3(x + y) = 3(5) &rarr; <span className="font-bold">3x + 3y = 15</span>  (Eq 3)</p>
                                    <p className="mt-2">Add Eq (2) and Eq (3):</p>
                                    <div className="ml-4 border-l-2 border-slate-300 pl-4 py-2 bg-slate-50">
                                        <p>&nbsp;&nbsp;2x - 3y = 4</p>
                                        <p>+ 3x + 3y = 15</p>
                                        <p className="border-t border-slate-400 mt-1 pt-1 font-bold">&nbsp;&nbsp;5x &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 19</p>
                                    </div>
                                    <p>So, <span className="font-bold text-blue-700">x = 19/5</span></p>
                                    <p className="mt-2">Substitute x = 19/5 in Eq (1):</p>
                                    <p>19/5 + y = 5</p>
                                    <p>y = 5 - 19/5 = (25 - 19)/5</p>
                                    <p>So, <span className="font-bold text-blue-700">y = 6/5</span></p>
                                </div>
                            </div>

                            {/* Substitution */}
                            <div className="bg-white p-5 border rounded-md shadow-sm">
                                <h4 className="font-bold text-blue-800 border-b pb-2 mb-3 bg-blue-50 px-3 py-1 inline-block rounded">Substitution Method</h4>
                                <div className="space-y-2 font-serif">
                                    <p>From Eq (1), express x in terms of y:</p>
                                    <p className="font-bold">x = 5 - y</p>
                                    <p className="mt-2">Substitute this value of x into Eq (2):</p>
                                    <p>2(5 - y) - 3y = 4</p>
                                    <p>10 - 2y - 3y = 4</p>
                                    <p>10 - 5y = 4</p>
                                    <p>-5y = -6</p>
                                    <p>So, <span className="font-bold text-blue-700">y = 6/5</span></p>
                                    <p className="mt-2">Substitute y = 6/5 in x = 5 - y:</p>
                                    <p>x = 5 - 6/5 = (25 - 6)/5</p>
                                    <p>So, <span className="font-bold text-blue-700">x = 19/5</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q1 (ii) */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">(ii)</span> 3x + 4y = 10 and 2x - 2y = 2
                        </div>
                        <div className="bg-slate-50 p-6 space-y-6 text-slate-700">
                            <div className="font-serif text-lg p-2">
                                <p>Eq (1): 3x + 4y = 10</p>
                                <p>Eq (2): 2x - 2y = 2 &rarr; simplifying implies <span className="font-bold italic">x - y = 1</span>  (Eq 3)</p>
                            </div>

                            {/* Elimination */}
                            <div className="bg-white p-5 border rounded-md shadow-sm">
                                <h4 className="font-bold text-blue-800 border-b pb-2 mb-3 bg-blue-50 px-3 py-1 inline-block rounded">Elimination Method</h4>
                                <div className="space-y-2 font-serif">
                                    <p>Multiply Eq (3) by 4 to eliminate y:</p>
                                    <p>4(x - y) = 4(1) &rarr; <span className="font-bold">4x - 4y = 4</span>  (Eq 4)</p>
                                    <p className="mt-2">Add Eq (1) and Eq (4):</p>
                                    <div className="ml-4 border-l-2 border-slate-300 pl-4 py-2 bg-slate-50">
                                        <p>&nbsp;&nbsp;3x + 4y = 10</p>
                                        <p>+ 4x - 4y = 4</p>
                                        <p className="border-t border-slate-400 mt-1 pt-1 font-bold">&nbsp;&nbsp;7x &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;= 14</p>
                                    </div>
                                    <p>So, <span className="font-bold text-blue-700">x = 2</span></p>
                                    <p className="mt-2">Substitute x = 2 in Eq (3):</p>
                                    <p>2 - y = 1</p>
                                    <p>So, <span className="font-bold text-blue-700">y = 1</span></p>
                                </div>
                            </div>

                            {/* Substitution */}
                            <div className="bg-white p-5 border rounded-md shadow-sm">
                                <h4 className="font-bold text-blue-800 border-b pb-2 mb-3 bg-blue-50 px-3 py-1 inline-block rounded">Substitution Method</h4>
                                <div className="space-y-2 font-serif">
                                    <p>From Eq (3), express x in terms of y:</p>
                                    <p className="font-bold">x = y + 1</p>
                                    <p className="mt-2">Substitute this value of x into Eq (1):</p>
                                    <p>3(y + 1) + 4y = 10</p>
                                    <p>3y + 3 + 4y = 10</p>
                                    <p>7y = 7</p>
                                    <p>So, <span className="font-bold text-blue-700">y = 1</span></p>
                                    <p className="mt-2">Substitute y = 1 in x = y + 1:</p>
                                    <p>x = 1 + 1</p>
                                    <p>So, <span className="font-bold text-blue-700">x = 2</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q1 (iii) */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">(iii)</span> 3x - 5y - 4 = 0 and 9x = 2y + 7
                        </div>
                        <div className="bg-slate-50 p-6 space-y-6 text-slate-700">
                            <div className="font-serif text-lg p-2 bg-white border rounded">
                                <p className="mb-2 font-bold text-slate-600 border-b pb-1">Rearrange to standard form:</p>
                                <p>Eq (1): 3x - 5y = 4</p>
                                <p>Eq (2): 9x - 2y = 7</p>
                            </div>

                            {/* Elimination */}
                            <div className="bg-white p-5 border rounded-md shadow-sm">
                                <h4 className="font-bold text-blue-800 border-b pb-2 mb-3 bg-blue-50 px-3 py-1 inline-block rounded">Elimination Method</h4>
                                <div className="space-y-2 font-serif">
                                    <p>Multiply Eq (1) by 3 to equate x coefficients:</p>
                                    <p>3(3x - 5y) = 3(4) &rarr; <span className="font-bold">9x - 15y = 12</span>  (Eq 3)</p>
                                    <p className="mt-2">Subtract Eq (3) from Eq (2):</p>
                                    <div className="ml-4 border-l-2 border-slate-300 pl-4 py-2 bg-slate-50">
                                        <p>&nbsp;&nbsp;9x - 2y = 7</p>
                                        <p>-(9x - 15y = 12)</p>
                                        <p className="border-t border-slate-400 mt-1 pt-1 font-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13y = -5</p>
                                    </div>
                                    <p>So, <span className="font-bold text-blue-700">y = -5/13</span></p>
                                    <p className="mt-2">Substitute y = -5/13 in Eq (1):</p>
                                    <p>3x - 5(-5/13) = 4</p>
                                    <p>3x + 25/13 = 4</p>
                                    <p>3x = 4 - 25/13 = (52 - 25)/13 = 27/13</p>
                                    <p>So, x = (27/13) / 3 = <span className="font-bold text-blue-700">9/13</span></p>
                                </div>
                            </div>

                            {/* Substitution */}
                            <div className="bg-white p-5 border rounded-md shadow-sm">
                                <h4 className="font-bold text-blue-800 border-b pb-2 mb-3 bg-blue-50 px-3 py-1 inline-block rounded">Substitution Method</h4>
                                <div className="space-y-2 font-serif">
                                    <p>From original Eq (2), express x in terms of y:</p>
                                    <p className="font-bold">x = (2y + 7) / 9</p>
                                    <p className="mt-2">Substitute this value of x into Eq (1):</p>
                                    <p>3[(2y + 7) / 9] - 5y = 4</p>
                                    <p>(2y + 7) / 3 - 5y = 4</p>
                                    <p>Multiply by 3 to remove fraction:</p>
                                    <p>2y + 7 - 15y = 12</p>
                                    <p>-13y = 5</p>
                                    <p>So, <span className="font-bold text-blue-700">y = -5/13</span></p>
                                    <p className="mt-2">Substitute y = -5/13 in x = (2y + 7) / 9:</p>
                                    <p>x = [2(-5/13) + 7] / 9</p>
                                    <p>x = [-10/13 + 91/13] / 9 = [81/13] / 9</p>
                                    <p>So, <span className="font-bold text-blue-700">x = 9/13</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q1 (iv) */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">(iv)</span> x/2 + 2y/3 = -1 and x - y/3 = 3
                        </div>
                        <div className="bg-slate-50 p-6 space-y-6 text-slate-700">
                            <div className="font-serif text-lg p-2 bg-white border rounded">
                                <p className="mb-2 font-bold text-slate-600">Simplify by multiplying with LCM:</p>
                                <p>Eq (1): Multiply by 6 &rarr; <span className="font-bold">3x + 4y = -6</span></p>
                                <p>Eq (2): Multiply by 3 &rarr; <span className="font-bold">3x - y = 9</span></p>
                            </div>

                            {/* Elimination */}
                            <div className="bg-white p-5 border rounded-md shadow-sm">
                                <h4 className="font-bold text-blue-800 border-b pb-2 mb-3 bg-blue-50 px-3 py-1 inline-block rounded">Elimination Method</h4>
                                <div className="space-y-2 font-serif">
                                    <p>x coefficients are already equal (3). Let's subtract Eq (2) from Eq (1):</p>
                                    <div className="ml-4 border-l-2 border-slate-300 pl-4 py-2 bg-slate-50">
                                        <p>&nbsp;&nbsp;3x + 4y = -6</p>
                                        <p>-(3x - y = 9)</p>
                                        <p className="border-t border-slate-400 mt-1 pt-1 font-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5y = -15</p>
                                    </div>
                                    <p>So, <span className="font-bold text-blue-700">y = -3</span></p>
                                    <p className="mt-2">Substitute y = -3 in simplified Eq (2):</p>
                                    <p>3x - (-3) = 9</p>
                                    <p>3x + 3 = 9</p>
                                    <p>3x = 6</p>
                                    <p>So, <span className="font-bold text-blue-700">x = 2</span></p>
                                </div>
                            </div>

                            {/* Substitution */}
                            <div className="bg-white p-5 border rounded-md shadow-sm">
                                <h4 className="font-bold text-blue-800 border-b pb-2 mb-3 bg-blue-50 px-3 py-1 inline-block rounded">Substitution Method</h4>
                                <div className="space-y-2 font-serif">
                                    <p>From original Eq (2), express x in terms of y:</p>
                                    <p className="font-bold">x = y/3 + 3</p>
                                    <p className="mt-2">Substitute this value of x into original Eq (1):</p>
                                    <p>(y/3 + 3)/2 + 2y/3 = -1</p>
                                    <p>y/6 + 3/2 + 2y/3 = -1</p>
                                    <p>Multiply by 6 to remove fractions:</p>
                                    <p>y + 9 + 4y = -6</p>
                                    <p>5y = -15</p>
                                    <p>So, <span className="font-bold text-blue-700">y = -3</span></p>
                                    <p className="mt-2">Substitute y = -3 in x = y/3 + 3:</p>
                                    <p>x = (-3)/3 + 3 = -1 + 3</p>
                                    <p>So, <span className="font-bold text-blue-700">x = 2</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Question 2 */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mt-12">
                <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                    2. Form the pair of linear equations in the following problems, and find their solutions by the elimination method:
                </h3>

                <div className="space-y-8">
                    {/* Q2 (i) */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">(i)</span> Fraction Reduction
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"If we add 1 to the numerator and subtract 1 from the denominator, a fraction reduces to 1. It becomes 1/2 if we only add 1 to the denominator. What is the fraction?"</p>
                            <p><strong>Step 1: Form Equations</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let the fraction be x/y.</p>
                                <p className="mt-2">Condition 1: (x + 1) / (y - 1) = 1</p>
                                <p>&rarr; x + 1 = y - 1 &rarr; <span className="font-bold text-blue-700 border border-blue-200 px-2 py-1 bg-blue-50 rounded">x - y = -2</span> (Eq 1)</p>
                                <p className="mt-4">Condition 2: x / (y + 1) = 1/2</p>
                                <p>&rarr; 2x = y + 1 &rarr; <span className="font-bold text-blue-700 border border-blue-200 px-2 py-1 bg-blue-50 rounded">2x - y = 1</span> (Eq 2)</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Solve via Elimination</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>Subtract Eq (1) from Eq (2) to eliminate y:</p>
                                <div className="ml-4 border-l-2 border-slate-300 pl-4 py-2 bg-slate-50 inline-block pr-8">
                                    <p>&nbsp;&nbsp;2x - y = 1</p>
                                    <p>-(x - y = -2)</p>
                                    <p className="border-t border-slate-400 mt-1 pt-1 font-bold">&nbsp;&nbsp;&nbsp;x &nbsp;&nbsp;&nbsp;&nbsp;= 3</p>
                                </div>
                                <p className="mt-3">Substitute x = 3 in Eq (1):</p>
                                <p>3 - y = -2 &rarr; <span className="font-bold">y = 5</span></p>
                            </div>
                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                <strong>Answer:</strong> The fraction is <span className="font-bold text-xl text-green-700">3/5</span>
                            </p>
                        </div>
                    </div>

                    {/* Q2 (ii) */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">(ii)</span> Age Problem
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Five years ago, Nuri was thrice as old as Sonu. Ten years later, Nuri will be twice as old as Sonu. How old are Nuri and Sonu?"</p>
                            <p><strong>Step 1: Form Equations</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let Nuri's present age be x and Sonu's be y.</p>
                                <p className="mt-2">Condition 1 (5 yrs ago): (x - 5) = 3(y - 5)</p>
                                <p>&rarr; x - 5 = 3y - 15 &rarr; <span className="font-bold text-blue-700 border border-blue-200 px-2 py-1 bg-blue-50 rounded">x - 3y = -10</span> (Eq 1)</p>
                                <p className="mt-4">Condition 2 (10 yrs later): (x + 10) = 2(y + 10)</p>
                                <p>&rarr; x + 10 = 2y + 20 &rarr; <span className="font-bold text-blue-700 border border-blue-200 px-2 py-1 bg-blue-50 rounded">x - 2y = 10</span> (Eq 2)</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Solve via Elimination</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>Subtract Eq (1) from Eq (2) to eliminate x:</p>
                                <div className="ml-4 border-l-2 border-slate-300 pl-4 py-2 bg-slate-50 inline-block pr-8">
                                    <p>&nbsp;&nbsp;x - 2y = 10</p>
                                    <p>-(x - 3y = -10)</p>
                                    <p className="border-t border-slate-400 mt-1 pt-1 font-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y = 20</p>
                                </div>
                                <p className="mt-3">Substitute y = 20 in Eq (2):</p>
                                <p>x - 2(20) = 10 &rarr; x - 40 = 10 &rarr; <span className="font-bold">x = 50</span></p>
                            </div>
                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                <strong>Answer:</strong> Nuri is <span className="font-bold text-xl text-green-700">50</span> years old and Sonu is <span className="font-bold text-xl text-green-700">20</span> years old.
                            </p>
                        </div>
                    </div>

                    {/* Q2 (iii) */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">(iii)</span> Reversing Digits
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"The sum of the digits of a two-digit number is 9. Also, nine times this number is twice the number obtained by reversing the order of the digits. Find the number."</p>
                            <p><strong>Step 1: Form Equations</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let tens digit be x and units digit be y. Number = 10x + y.</p>
                                <p>Reversed Number = 10y + x.</p>
                                <p className="mt-2">Condition 1: <span className="font-bold text-blue-700 border border-blue-200 px-2 py-1 bg-blue-50 rounded">x + y = 9</span> (Eq 1)</p>
                                <p className="mt-4">Condition 2: 9(10x + y) = 2(10y + x)</p>
                                <p>&rarr; 90x + 9y = 20y + 2x</p>
                                <p>&rarr; 88x - 11y = 0 &rarr; Divide by 11 &rarr; <span className="font-bold text-blue-700 border border-blue-200 px-2 py-1 bg-blue-50 rounded">8x - y = 0</span> (Eq 2)</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Solve via Elimination</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>Add Eq (1) and Eq (2) to eliminate y:</p>
                                <div className="ml-4 border-l-2 border-slate-300 pl-4 py-2 bg-slate-50 inline-block pr-8">
                                    <p>&nbsp;&nbsp;x + y = 9</p>
                                    <p>+ 8x - y = 0</p>
                                    <p className="border-t border-slate-400 mt-1 pt-1 font-bold">&nbsp;&nbsp;9x &nbsp;&nbsp;&nbsp; = 9 &rarr; x = 1</p>
                                </div>
                                <p className="mt-3">Substitute x = 1 in Eq (1):</p>
                                <p>1 + y = 9 &rarr; <span className="font-bold">y = 8</span></p>
                            </div>
                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                <strong>Answer:</strong> The number is 10(1) + 8 = <span className="font-bold text-xl text-green-700">18</span>.
                            </p>
                        </div>
                    </div>

                    {/* Q2 (iv) */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">(iv)</span> Currency Withdrawal
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Meena went to a bank to withdraw ₹2000. She asked the cashier to give her ₹50 and ₹100 notes only. Meena got 25 notes in all. Find how many notes of ₹50 and ₹100 she received."</p>
                            <p><strong>Step 1: Form Equations</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let number of ₹50 notes be x and ₹100 notes be y.</p>
                                <p className="mt-2">Condition 1 (Total notes): <span className="font-bold text-blue-700 border border-blue-200 px-2 py-1 bg-blue-50 rounded">x + y = 25</span> (Eq 1)</p>
                                <p className="mt-4">Condition 2 (Total amount): 50x + 100y = 2000</p>
                                <p>&rarr; Divide by 50 &rarr; <span className="font-bold text-blue-700 border border-blue-200 px-2 py-1 bg-blue-50 rounded">x + 2y = 40</span> (Eq 2)</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Solve via Elimination</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>Subtract Eq (1) from Eq (2) to eliminate x:</p>
                                <div className="ml-4 border-l-2 border-slate-300 pl-4 py-2 bg-slate-50 inline-block pr-8">
                                    <p>&nbsp;&nbsp;x + 2y = 40</p>
                                    <p>-(x + y = 25)</p>
                                    <p className="border-t border-slate-400 mt-1 pt-1 font-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;y = 15</p>
                                </div>
                                <p className="mt-3">Substitute y = 15 in Eq (1):</p>
                                <p>x + 15 = 25 &rarr; <span className="font-bold">x = 10</span></p>
                            </div>
                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                <strong>Answer:</strong> She received <span className="font-bold text-xl text-green-700">10</span> notes of ₹50 and <span className="font-bold text-xl text-green-700">15</span> notes of ₹100.
                            </p>
                        </div>
                    </div>

                    {/* Q2 (v) */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">(v)</span> Ending Library Charges
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A lending library has a fixed charge for the first three days and an additional charge for each day thereafter. Saritha paid ₹27 for a book kept for seven days, while Susy paid ₹21 for the book she kept for five days. Find the fixed charge and the charge for each extra day."</p>
                            <p><strong>Step 1: Form Equations</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let fixed charge (for 3 days) be ₹x and charge per extra day be ₹y.</p>
                                <p className="mt-2">Condition 1 (Saritha: 7 days = 3 fixed + 4 extra):</p>
                                <p className="font-bold text-blue-700 border border-blue-200 px-2 py-1 bg-blue-50 rounded inline-block">x + 4y = 27</p> (Eq 1)
                                <p className="mt-4">Condition 2 (Susy: 5 days = 3 fixed + 2 extra):</p>
                                <p className="font-bold text-blue-700 border border-blue-200 px-2 py-1 bg-blue-50 rounded inline-block">x + 2y = 21</p> (Eq 2)
                            </div>

                            <p className="mt-4"><strong>Step 2: Solve via Elimination</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>Subtract Eq (2) from Eq (1) to eliminate x:</p>
                                <div className="ml-4 border-l-2 border-slate-300 pl-4 py-2 bg-slate-50 inline-block pr-8">
                                    <p>&nbsp;&nbsp;x + 4y = 27</p>
                                    <p>-(x + 2y = 21)</p>
                                    <p className="border-t border-slate-400 mt-1 pt-1 font-bold">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2y = 6 &rarr; y = 3</p>
                                </div>
                                <p className="mt-3">Substitute y = 3 in Eq (2):</p>
                                <p>x + 2(3) = 21 &rarr; x + 6 = 21 &rarr; <span className="font-bold">x = 15</span></p>
                            </div>
                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                <strong>Answer:</strong> Fixed charge is <span className="font-bold text-green-700 text-xl">₹15</span> and extra charge per day is <span className="font-bold text-green-700 text-xl">₹3</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- EXERCISE 4.3 --- */}
            <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-16 pt-8 border-t-2 border-slate-300">Exercise 4.3</h2>

            {/* Question 1 */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                    1. Find the nature of the roots of the following quadratic equations. If the real roots exist, find them:
                </h3>

                <div className="space-y-8">
                    {/* Q1 (i) */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">(i)</span> 2x² - 3x + 5 = 0
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p><strong>Step 1: Identify coefficients</strong></p>
                            <p className="font-serif">Comparing with ax² + bx + c = 0, we get:<br />a = 2, b = -3, c = 5</p>

                            <p className="mt-4"><strong>Step 2: Find the Discriminant (D = b² - 4ac)</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>D = (-3)² - 4(2)(5)</p>
                                <p>D = 9 - 40</p>
                                <p className="font-bold text-red-600">D = -31</p>
                            </div>
                            <p className="text-lg pt-2 mt-2 border-t border-slate-200">
                                <strong>Conclusion:</strong> Since D &lt; 0, the equation has <span className="font-bold text-red-700">no real roots</span>.
                            </p>
                        </div>
                    </div>

                    {/* Q1 (ii) */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">(ii)</span> 3x² - 4√3x + 4 = 0
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p><strong>Step 1: Identify coefficients</strong></p>
                            <p className="font-serif">a = 3, b = -4√3, c = 4</p>

                            <p className="mt-4"><strong>Step 2: Find the Discriminant (D)</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>D = (-4√3)² - 4(3)(4)</p>
                                <p>D = 16(3) - 48</p>
                                <p>D = 48 - 48</p>
                                <p className="font-bold text-blue-600">D = 0</p>
                            </div>
                            <p>Since D = 0, the equation has <span className="font-bold">two equal real roots</span>.</p>

                            <p className="mt-4"><strong>Step 3: Find the roots</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>x = -b / 2a = -(-4√3) / 2(3)</p>
                                <p>x = 4√3 / 6</p>
                                <p>x = 2√3 / 3 = 2 / √3</p>
                            </div>
                            <p className="text-lg pt-2 mt-2 border-t border-slate-200">
                                <strong>Roots:</strong> <span className="font-bold text-green-700">2/√3</span> and <span className="font-bold text-green-700">2/√3</span>
                            </p>
                        </div>
                    </div>

                    {/* Q1 (iii) */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">(iii)</span> 2x² - 6x + 3 = 0
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p><strong>Step 1: Identify coefficients</strong></p>
                            <p className="font-serif">a = 2, b = -6, c = 3</p>

                            <p className="mt-4"><strong>Step 2: Find the Discriminant (D)</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>D = (-6)² - 4(2)(3)</p>
                                <p>D = 36 - 24</p>
                                <p className="font-bold text-blue-600">D = 12</p>
                            </div>
                            <p>Since D &gt; 0, the equation has <span className="font-bold">two distinct real roots</span>.</p>

                            <p className="mt-4"><strong>Step 3: Find the roots using Quadratic Formula</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>x = [-b ± √D] / 2a</p>
                                <p>x = [-(-6) ± √12] / 2(2)</p>
                                <p>x = (6 ± 2√3) / 4</p>
                                <p>x = 2(3 ± √3) / 4</p>
                                <p>x = (3 ± √3) / 2</p>
                            </div>
                            <p className="text-lg pt-2 mt-2 border-t border-slate-200">
                                <strong>Roots:</strong> <span className="font-bold text-green-700">(3 + √3)/2</span> and <span className="font-bold text-green-700">(3 - √3)/2</span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Question 2 */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mt-12">
                <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                    2. Find the values of k for each of the following quadratic equations, so that they have two equal roots:
                </h3>

                <p className="text-slate-600 mb-6 bg-blue-50 p-4 border border-blue-100 rounded-lg">
                    <strong>Rule:</strong> A quadratic equation has two equal roots if and only if its Discriminant is zero (<span className="font-bold font-serif">D = b² - 4ac = 0</span>).
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Q2 (i) */}
                    <div className="border border-slate-200 rounded-lg bg-slate-50 p-5 shadow-sm">
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <span className="text-blue-700">(i)</span> 2x² + kx + 3 = 0
                        </h4>
                        <div className="font-serif text-slate-700 space-y-2 bg-white p-4 rounded border">
                            <p>Here, a = 2, b = k, c = 3</p>
                            <p>For equal roots, D = 0</p>
                            <p>b² - 4ac = 0</p>
                            <p>k² - 4(2)(3) = 0</p>
                            <p>k² - 24 = 0</p>
                            <p>k² = 24</p>
                            <p>k = ±√24 = ±2√6</p>
                            <p className="text-lg mt-2 pt-2 border-t font-bold text-green-700">k = 2√6 or k = -2√6</p>
                        </div>
                    </div>

                    {/* Q2 (ii) */}
                    <div className="border border-slate-200 rounded-lg bg-slate-50 p-5 shadow-sm">
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <span className="text-blue-700">(ii)</span> kx(x - 2) + 6 = 0
                        </h4>
                        <div className="font-serif text-slate-700 space-y-2 bg-white p-4 rounded border">
                            <p className="text-sm italic">Expand to standard form:</p>
                            <p>kx² - 2kx + 6 = 0</p>
                            <p className="mt-2">Here, a = k, b = -2k, c = 6</p>
                            <p>For equal roots, D = 0</p>
                            <p>(-2k)² - 4(k)(6) = 0</p>
                            <p>4k² - 24k = 0</p>
                            <p>4k(k - 6) = 0</p>
                            <p>So, k = 0 or k = 6.</p>
                            <p className="text-sm italic mt-1 text-slate-500">(If k=0, it's not a quadratic equation, so we reject it)</p>
                            <p className="text-lg mt-2 pt-2 border-t font-bold text-green-700">k = 6</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Word Problems (Q3, Q4, Q5) */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mt-12">
                <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                    Word Problems: Formulating Quadratic Equations
                </h3>

                <div className="space-y-8">
                    {/* Q3 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">3.</span> Mango Grove
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Is it possible to design a rectangular mango grove whose length is twice its breadth, and the area is 800 m²? If so, find its length and breadth."</p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>Let breadth = x meters. Then length = 2x meters.</p>
                                <p>Area = length × breadth</p>
                                <p>800 = (2x)(x)</p>
                                <p>2x² = 800</p>
                                <p>x² = 400</p>
                                <p>x = ±20</p>
                            </div>
                            <p>Since breadth cannot be negative, we reject x = -20.</p>
                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                <strong>Answer:</strong> Yes, it is possible. Breadth = <span className="font-bold text-green-700">20 m</span>, Length = 2(20) = <span className="font-bold text-green-700">40 m</span>.
                            </p>
                        </div>
                    </div>

                    {/* Q4 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">4.</span> Friends' Ages
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Is the following situation possible? The sum of the ages of two friends is 20 years. Four years ago, the product of their ages in years was 48."</p>
                            <p><strong>Step 1: Form Equation</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let age of first friend be x. Then age of second friend is (20 - x).</p>
                                <p>Four years ago: Their ages were (x - 4) and (20 - x - 4) = (16 - x).</p>
                                <p>Product = 48 &rarr; (x - 4)(16 - x) = 48</p>
                                <p>16x - x² - 64 + 4x = 48</p>
                                <p>-x² + 20x - 64 - 48 = 0</p>
                                <p className="font-bold bg-blue-50 px-2 py-1 inline-block mt-2">x² - 20x + 112 = 0</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Check Discriminant</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>a = 1, b = -20, c = 112</p>
                                <p>D = (-20)² - 4(1)(112) = 400 - 448 = <span className="font-bold text-red-600">-48</span></p>
                            </div>
                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                <strong>Answer:</strong> Since D &lt; 0, there are no real roots. Therefore, the given situation is <span className="font-bold text-red-700">NOT possible</span>.
                            </p>
                        </div>
                    </div>

                    {/* Q5 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">5.</span> Rectangular Park
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Is it possible to design a rectangular park of perimeter 80 m and area 400 m²? If so, find its length and breadth."</p>
                            <p><strong>Step 1: Form Equation</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Perimeter = 2(length + breadth) = 80 &rarr; length + breadth = 40</p>
                                <p>Let length = x m. Then breadth = (40 - x) m.</p>
                                <p>Area = length × breadth = 400</p>
                                <p>x(40 - x) = 400</p>
                                <p>40x - x² = 400</p>
                                <p className="font-bold bg-blue-50 px-2 py-1 inline-block mt-2">x² - 40x + 400 = 0</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Check Discriminant and Solve</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>D = (-40)² - 4(1)(400) = 1600 - 1600 = <span className="font-bold text-blue-600">0</span></p>
                                <p className="mt-2">Since D = 0, real and equal roots exist. (It is possible).</p>
                                <p>x = -b / 2a = -(-40) / 2(1) = 40 / 2 = 20</p>
                            </div>
                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                <strong>Answer:</strong> Yes, it is possible. It is a square with Length = <span className="font-bold text-green-700">20 m</span> and Breadth = <span className="font-bold text-green-700">20 m</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- EXERCISE 5.4 --- */}
            <h2 className="text-3xl font-bold text-slate-800 mb-6 mt-16 pt-8 border-t-2 border-slate-300">Exercise 5.4 (Optional)</h2>

            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                    Arithmetic Progressions Word Problems
                </h3>

                <div className="space-y-8">
                    {/* Q1 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">1.</span> First Negative Term
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Which term of the AP : 121, 117, 113, ..., is its first negative term?"</p>
                            <p><strong>Step 1: Identify AP components</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>First term (a) = 121</p>
                                <p>Common difference (d) = 117 - 121 = -4</p>
                                <p className="mt-2 text-slate-600">The n-th term formula is: <span className="font-bold">a<sub>n</sub> = a + (n - 1)d</span></p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Solve inequality for negative term (a<sub>n</sub> &lt; 0)</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>121 + (n - 1)(-4) &lt; 0</p>
                                <p>121 - 4n + 4 &lt; 0</p>
                                <p>125 - 4n &lt; 0</p>
                                <p>125 &lt; 4n</p>
                                <p>n &gt; 125/4</p>
                                <p>n &gt; 31.25</p>
                            </div>
                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                Since n must be an integer, the first integer greater than 31.25 is 32.<br />
                                <strong>Answer:</strong> The <span className="font-bold text-green-700 text-xl">32nd term</span> is the first negative term.
                            </p>
                        </div>
                    </div>

                    {/* Q2 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">2.</span> Sum of First Sixteen Terms
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"The sum of the third and the seventh terms of an AP is 6 and their product is 8. Find the sum of first sixteen terms of the AP."</p>

                            <p><strong>Step 1: Set up the equations</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let the AP be a, a+d, a+2d, ...</p>
                                <p>a<sub>3</sub> = a + 2d  |  a<sub>7</sub> = a + 6d</p>
                                <div className="mt-3 pd-3 border-l-4 border-blue-400 pl-4 bg-blue-50 py-2">
                                    <p className="font-bold">Eq 1 (Sum): (a + 2d) + (a + 6d) = 6</p>
                                    <p>2a + 8d = 6 &rarr; <span className="text-blue-700">a + 4d = 3</span> &rarr; <span className="font-bold font-sans">a = 3 - 4d</span></p>
                                </div>
                                <div className="mt-3 pd-3 border-l-4 border-green-400 pl-4 bg-green-50 py-2">
                                    <p className="font-bold">Eq 2 (Product): (a + 2d)(a + 6d) = 8</p>
                                </div>
                            </div>

                            <p className="mt-4"><strong>Step 2: Solve for 'd' and 'a'</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md space-y-2">
                                <p>Substitute a = 3 - 4d into Eq 2:</p>
                                <p>((3 - 4d) + 2d) × ((3 - 4d) + 6d) = 8</p>
                                <p>(3 - 2d)(3 + 2d) = 8</p>
                                <p className="italic text-slate-500">Using difference of squares (x-y)(x+y) = x² - y²:</p>
                                <p>9 - 4d² = 8</p>
                                <p>4d² = 1 &rarr; d² = 1/4 &rarr; <span className="font-bold">d = ±1/2</span></p>

                                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t">
                                    <div>
                                        <p className="font-bold underline mb-1">Case 1: d = 1/2</p>
                                        <p>a = 3 - 4(1/2) = 3 - 2 = 1</p>
                                    </div>
                                    <div>
                                        <p className="font-bold underline mb-1">Case 2: d = -1/2</p>
                                        <p>a = 3 - 4(-1/2) = 3 + 2 = 5</p>
                                    </div>
                                </div>
                            </div>

                            <p className="mt-4"><strong>Step 3: Calculate S<sub>16</sub></strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md space-y-2">
                                <p>S<sub>n</sub> = (n/2)[2a + (n-1)d]</p>
                                <p>S<sub>16</sub> = 8[2a + 15d]</p>
                                <div className="grid grid-cols-2 gap-4 mt-3">
                                    <div className="bg-slate-50 p-3 rounded">
                                        <p className="font-bold text-sm text-slate-500 mb-1">If a = 1, d = 1/2:</p>
                                        <p>S<sub>16</sub> = 8[2(1) + 15(1/2)]</p>
                                        <p>S<sub>16</sub> = 8[2 + 7.5] = 8[9.5] = <span className="font-bold text-green-700">76</span></p>
                                    </div>
                                    <div className="bg-slate-50 p-3 rounded">
                                        <p className="font-bold text-sm text-slate-500 mb-1">If a = 5, d = -1/2:</p>
                                        <p>S<sub>16</sub> = 8[2(5) + 15(-1/2)]</p>
                                        <p>S<sub>16</sub> = 8[10 - 7.5] = 8[2.5] = <span className="font-bold text-green-700">20</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q3 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">3.</span> Ladder Rungs
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A ladder has rungs 25 cm apart. The rungs decrease uniformly in length from 45 cm at the bottom to 25 cm at the top. If the top and the bottom rungs are 2.5 m apart, what is the length of the wood required for the rungs?"</p>

                            <p><strong>Step 1: Find the total number of rungs (n)</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Total distance between top and bottom = 2.5 m = 250 cm</p>
                                <p>Distance between adjacent rungs = 25 cm</p>
                                <p>Number of rungs (n) = (Total Distance / Gap) + 1</p>
                                <p>n = (250 / 25) + 1 = 10 + 1 = <span className="font-bold">11 rungs</span></p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Calculate total length of wood (Sum of AP)</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>The lengths of the rungs form an AP where:</p>
                                <p>First term (a) = 45 cm (bottom rung)</p>
                                <p>Last term (l) = 25 cm (top rung)</p>
                                <p>Number of terms (n) = 11</p>
                                <div className="mt-3 pd-3 border-l-4 border-blue-400 pl-4 bg-blue-50 py-2">
                                    <p>S<sub>n</sub> = (n/2)[a + l]</p>
                                    <p>S<sub>11</sub> = (11/2)[45 + 25]</p>
                                    <p>S<sub>11</sub> = (11/2)[70]</p>
                                    <p>S<sub>11</sub> = 11 × 35 = 385 cm</p>
                                </div>
                            </div>
                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                <strong>Answer:</strong> The total length of wood required is <span className="font-bold text-green-700 text-xl">385 cm</span> (or 3.85 m).
                            </p>
                        </div>
                    </div>

                    {/* Q4 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">4.</span> Numbered Houses
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"The houses of a row are numbered consecutively from 1 to 49. Show that there is a value of x such that the sum of the numbers of the houses preceding the house numbered x is equal to the sum of the numbers of the houses following it. Find this value of x."</p>

                            <p><strong>Step 1: Set up the sum equation</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>The house numbers form an AP: 1, 2, 3, ..., 49 (Here a=1, d=1).</p>
                                <p>Sum of first n terms: S<sub>n</sub> = (n/2)[a + l] = (n/2)[1 + n]</p>
                                <p className="mt-3">Given condition: Sum preceding x = Sum following x</p>
                                <p className="font-bold text-blue-800 bg-blue-50 px-3 py-1 inline-block border rounded">S<sub>x-1</sub> = S<sub>49</sub> - S<sub>x</sub></p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Substitute S<sub>n</sub> formulas and solve for x</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>S<sub>x-1</sub> = ((x - 1) / 2) [1 + (x - 1)] = (x - 1)(x) / 2</p>
                                <p>S<sub>x</sub> = (x / 2) [1 + x] = x(x + 1) / 2</p>
                                <p>S<sub>49</sub> = (49 / 2) [1 + 49] = (49 × 50) / 2 = 1225</p>

                                <div className="mt-4 p-4 border bg-amber-50 rounded">
                                    <p>Equating them: &nbsp; (x(x - 1)) / 2 = 1225 - (x(x + 1)) / 2</p>
                                    <p>Multiply by 2:</p>
                                    <p>x² - x = 2450 - (x² + x)</p>
                                    <p>x² - x = 2450 - x² - x</p>
                                    <p>2x² = 2450</p>
                                    <p>x² = 1225</p>
                                </div>
                            </div>
                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                Since x represents a real house number, x must be positive:<br />
                                <strong>Answer:</strong> x = √1225 = <span className="font-bold text-green-700 text-xl">35</span>
                            </p>
                        </div>
                    </div>

                    {/* Q5 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">5.</span> Football Ground Terrace
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A small terrace at a football ground comprises of 15 steps. Each step is 50 m long. Each step has a rise of 1/4 m and a tread of 1/2 m. Calculate the total volume of concrete required."</p>

                            <p><strong>Step 1: Find volume of each individual step</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-3">
                                <p>Length of each step = 50 m</p>
                                <p>Width (tread) of each step = 1/2 m</p>
                                <p>Height (rise) of step 1 = 1/4 m</p>
                                <p>Height of step 2 = 2 × (1/4) = 2/4 m</p>
                                <p>Height of step k = k/4 m</p>

                                <div className="bg-blue-50 p-3 mt-2 rounded border border-blue-200">
                                    <p className="font-bold">Volume of k-th step = Length × Tread × Height</p>
                                    <p>V<sub>k</sub> = 50 × (1/2) × (k/4) = 25 × (k/4) = <span className="font-bold text-blue-700">25k/4 m³</span></p>
                                </div>
                            </div>

                            <p className="mt-4"><strong>Step 2: Sum the volumes (Sum of AP)</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>The volumes form an AP: 25/4, 50/4, 75/4, ..., for 15 steps.</p>
                                <p>First term (a) = 25/4</p>
                                <p>Common difference (d) = 25/4</p>
                                <p>Number of steps (n) = 15</p>

                                <div className="mt-3 pt-3 border-t border-slate-200">
                                    <p>Total Volume = S<sub>15</sub> = (n/2) [2a + (n-1)d]</p>
                                    <p>S<sub>15</sub> = (15/2) [2(25/4) + 14(25/4)]</p>
                                    <p>S<sub>15</sub> = (15/2) [50/4 + 350/4]</p>
                                    <p>S<sub>15</sub> = (15/2) [400/4] = (15/2) [100]</p>
                                    <p>S<sub>15</sub> = 15 × 50 = 750</p>
                                </div>
                            </div>
                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                <strong>Answer:</strong> The total volume of concrete required is <span className="font-bold text-green-700 text-xl">750 m³</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
