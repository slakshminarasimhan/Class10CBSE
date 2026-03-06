import React from 'react';

export default function Exercises() {
    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Exercise 1.2</h2>

            {/* Question 1 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4">1. Prove that √5 is irrational.</h3>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 space-y-4 text-slate-700">
                    <p><strong>Proof by Contradiction:</strong></p>
                    <p>Let us assume, to the contrary, that √5 is rational.</p>
                    <p>That is, we can find coprime integers <span className="italic font-serif">a</span> and <span className="italic font-serif">b</span> (b ≠ 0) such that:</p>
                    <div className="text-center font-serif text-lg bg-white py-3 border rounded-md">
                        √5 = <sup>a</sup>&frasl;<sub>b</sub>
                    </div>
                    <p>Rearranging, we get:</p>
                    <div className="text-center font-serif text-lg bg-white py-3 border rounded-md">
                        a = √5 b
                    </div>
                    <p>Squaring on both sides, we get:</p>
                    <div className="text-center font-serif text-lg bg-white py-3 border rounded-md">
                        a² = 5b² (Equation 1)
                    </div>
                    <p>Therefore, a² is divisible by 5. By the fundamental theorem of arithmetic (Theorem 1.3), if a prime <span className="italic font-serif">p</span> divides <span className="italic font-serif">a²</span>, then <span className="italic font-serif">p</span> divides <span className="italic font-serif">a</span>. It follows that <span className="italic font-serif">a</span> is divisible by 5.</p>
                    <p>So, we can write <span className="italic font-serif">a = 5c</span> for some integer <span className="italic font-serif">c</span>.</p>
                    <p>Substituting this value of <span className="italic font-serif">a</span> into Equation 1:</p>
                    <div className="text-center font-serif text-lg bg-white py-3 border rounded-md">
                        (5c)² = 5b²<br />
                        25c² = 5b²<br />
                        b² = 5c²
                    </div>
                    <p>This means that b² is divisible by 5, and therefore, <span className="italic font-serif">b</span> is also divisible by 5.</p>
                    <p>Therefore, both <span className="italic font-serif">a</span> and <span className="italic font-serif">b</span> have 5 as a common factor.</p>
                    <p className="font-semibold text-blue-800 bg-blue-50 p-4 rounded border border-blue-100">
                        But this contradicts the fact that <span className="italic font-serif">a</span> and <span className="italic font-serif">b</span> are coprime.
                        This contradiction has arisen because of our incorrect assumption that √5 is rational.
                    </p>
                    <p><strong>Conclusion:</strong> We conclude that √5 is irrational.</p>
                </div>
            </div>

            {/* Question 2 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4">2. Prove that 3 + 2√5 is irrational.</h3>
                <div className="bg-slate-50 p-6 rounded-lg border border-slate-100 space-y-4 text-slate-700">
                    <p><strong>Proof by Contradiction:</strong></p>
                    <p>Let us assume, to the contrary, that 3 + 2√5 is rational.</p>
                    <p>That is, we can find coprime integers <span className="italic font-serif">a</span> and <span className="italic font-serif">b</span> (b ≠ 0) such that:</p>
                    <div className="text-center font-serif text-lg bg-white py-3 border rounded-md">
                        3 + 2√5 = <sup>a</sup>&frasl;<sub>b</sub>
                    </div>
                    <p>Rearranging this equation to isolate √5, we get:</p>
                    <div className="text-center font-serif text-lg bg-white py-3 border rounded-md">
                        2√5 = <sup>a</sup>&frasl;<sub>b</sub> - 3<br />
                        2√5 = <sup>(a - 3b)</sup>&frasl;<sub>b</sub><br />
                        √5 = <sup>(a - 3b)</sup>&frasl;<sub>2b</sub>
                    </div>
                    <p>Since <span className="italic font-serif">a</span> and <span className="italic font-serif">b</span> are integers, the expression <sup>(a - 3b)</sup>&frasl;<sub>2b</sub> is a rational number.</p>
                    <p>So, the right-hand side is rational. However, we know from Question 1 that √5 is irrational.</p>
                    <p className="font-semibold text-blue-800 bg-blue-50 p-4 rounded border border-blue-100">
                        This shows that an irrational number is equal to a rational number, which is a contradiction.
                        This contradiction has arisen because of our incorrect assumption that 3 + 2√5 is rational.
                    </p>
                    <p><strong>Conclusion:</strong> We conclude that 3 + 2√5 is irrational.</p>
                </div>
            </div>

            {/* Question 3 */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-4">3. Prove that the following are irrationals:</h3>

                <div className="space-y-8">
                    {/* Sub-question (i) */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold">
                            (i) <sup>1</sup>&frasl;<sub>√2</sub>
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p>Let us assume, to the contrary, that <sup>1</sup>&frasl;<sub>√2</sub> is rational.</p>
                            <p>That is, we can find coprime integers <span className="italic font-serif">a</span> and <span className="italic font-serif">b</span> (b ≠ 0) such that:</p>
                            <div className="text-center font-serif text-lg bg-white py-3 border rounded-md">
                                <sup>1</sup>&frasl;<sub>√2</sub> = <sup>a</sup>&frasl;<sub>b</sub>
                            </div>
                            <p>Rearranging (taking reciprocals on both sides), we get:</p>
                            <div className="text-center font-serif text-lg bg-white py-3 border rounded-md">
                                √2 = <sup>b</sup>&frasl;<sub>a</sub>
                            </div>
                            <p>Since <span className="italic font-serif">a</span> and <span className="italic font-serif">b</span> are integers, <sup>b</sup>&frasl;<sub>a</sub> is a rational number.</p>
                            <p className="font-semibold text-blue-800 bg-blue-50 p-4 rounded border border-blue-100">
                                This implies that √2 is rational, which contradicts the known fact that √2 is irrational.
                                This contradiction arose from our incorrect assumption.
                            </p>
                            <p><strong>Conclusion:</strong> Therefore, <sup>1</sup>&frasl;<sub>√2</sub> is irrational.</p>
                        </div>
                    </div>

                    {/* Sub-question (ii) */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold">
                            (ii) 7√5
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p>Let us assume, to the contrary, that 7√5 is rational.</p>
                            <p>That is, we can find coprime integers <span className="italic font-serif">a</span> and <span className="italic font-serif">b</span> (b ≠ 0) such that:</p>
                            <div className="text-center font-serif text-lg bg-white py-3 border rounded-md">
                                7√5 = <sup>a</sup>&frasl;<sub>b</sub>
                            </div>
                            <p>Rearranging this equation to isolate √5, we get:</p>
                            <div className="text-center font-serif text-lg bg-white py-3 border rounded-md">
                                √5 = <sup>a</sup>&frasl;<sub>7b</sub>
                            </div>
                            <p>Since <span className="italic font-serif">a</span>, <span className="italic font-serif">7</span>, and <span className="italic font-serif">b</span> are integers, <sup>a</sup>&frasl;<sub>7b</sub> is a rational number.</p>
                            <p className="font-semibold text-blue-800 bg-blue-50 p-4 rounded border border-blue-100">
                                This implies that √5 is a rational number, which contradicts the known fact that √5 is irrational.
                                This contradiction arose from our incorrect assumption.
                            </p>
                            <p><strong>Conclusion:</strong> Therefore, 7√5 is irrational.</p>
                        </div>
                    </div>

                    {/* Sub-question (iii) */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold">
                            (iii) 6 + √2
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p>Let us assume, to the contrary, that 6 + √2 is rational.</p>
                            <p>That is, we can find coprime integers <span className="italic font-serif">a</span> and <span className="italic font-serif">b</span> (b ≠ 0) such that:</p>
                            <div className="text-center font-serif text-lg bg-white py-3 border rounded-md">
                                6 + √2 = <sup>a</sup>&frasl;<sub>b</sub>
                            </div>
                            <p>Rearranging this equation to isolate √2, we get:</p>
                            <div className="text-center font-serif text-lg bg-white py-3 border rounded-md">
                                √2 = <sup>a</sup>&frasl;<sub>b</sub> - 6<br />
                                √2 = <sup>(a - 6b)</sup>&frasl;<sub>b</sub>
                            </div>
                            <p>Since <span className="italic font-serif">a</span> and <span className="italic font-serif">b</span> are integers, <sup>(a - 6b)</sup>&frasl;<sub>b</sub> is a rational number.</p>
                            <p className="font-semibold text-blue-800 bg-blue-50 p-4 rounded border border-blue-100">
                                This implies that √2 is a rational number, which contradicts the known fact that √2 is irrational.
                                This contradiction arose from our incorrect assumption.
                            </p>
                            <p><strong>Conclusion:</strong> Therefore, 6 + √2 is irrational.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
