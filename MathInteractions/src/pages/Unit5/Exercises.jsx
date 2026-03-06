import React from 'react';

export default function Exercises() {
    return (
        <div className="space-y-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Exercise 8.3</h2>

            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                    Trigonometric Identities & Proofs
                </h3>

                <div className="space-y-8">
                    {/* Q1 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">1.</span> Expressing Ratios in Terms of cot A
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Express the trigonometric ratios sin A, sec A and tan A in terms of cot A."</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-6">
                                <div>
                                    <p className="font-bold border-b pb-1 mb-2">For sin A:</p>
                                    <p>We know the Pythagorean identity: cosec² A = 1 + cot² A</p>
                                    <p>Since sin A = 1 / cosec A,</p>
                                    <p>cosec A = ±√(1 + cot² A)</p>
                                    <p className="font-bold text-blue-700 mt-2">sin A = 1 / √(1 + cot² A)</p>
                                </div>

                                <div>
                                    <p className="font-bold border-b pb-1 mb-2">For sec A:</p>
                                    <p>We know: sec² A = 1 + tan² A</p>
                                    <p>Since tan A = 1 / cot A,</p>
                                    <p>sec² A = 1 + (1 / cot² A) = (cot² A + 1) / cot² A</p>
                                    <p>Taking square root:</p>
                                    <p className="font-bold text-blue-700 mt-2">sec A = √(cot² A + 1) / cot A</p>
                                </div>

                                <div>
                                    <p className="font-bold border-b pb-1 mb-2">For tan A:</p>
                                    <p>By reciprocal identity:</p>
                                    <p className="font-bold text-blue-700 mt-2">tan A = 1 / cot A</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q2 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">2.</span> Expressing all ratios in terms of sec A
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Write all the other trigonometric ratios of ∠A in terms of sec A."</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-6">
                                <div>
                                    <p className="font-bold border-b pb-1">1. cos A:</p>
                                    <p className="font-bold text-blue-700">cos A = 1 / sec A</p>
                                </div>

                                <div>
                                    <p className="font-bold border-b pb-1">2. sin A:</p>
                                    <p>Since sin² A + cos² A = 1</p>
                                    <p>sin² A = 1 - cos² A = 1 - (1 / sec² A) = (sec² A - 1) / sec² A</p>
                                    <p className="font-bold text-blue-700">sin A = √(sec² A - 1) / sec A</p>
                                </div>

                                <div>
                                    <p className="font-bold border-b pb-1">3. tan A:</p>
                                    <p>Since sec² A = 1 + tan² A</p>
                                    <p>tan² A = sec² A - 1</p>
                                    <p className="font-bold text-blue-700">tan A = √(sec² A - 1)</p>
                                </div>

                                <div>
                                    <p className="font-bold border-b pb-1">4. cosec A:</p>
                                    <p>cosec A = 1 / sin A</p>
                                    <p className="font-bold text-blue-700">cosec A = sec A / √(sec² A - 1)</p>
                                </div>

                                <div>
                                    <p className="font-bold border-b pb-1">5. cot A:</p>
                                    <p>cot A = 1 / tan A</p>
                                    <p className="font-bold text-blue-700">cot A = 1 / √(sec² A - 1)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q3 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">3.</span> Multiple Choice Questions
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">

                            {/* Q3 (i) */}
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p className="font-bold">(i) 9 sec² A - 9 tan² A =</p>
                                <p className="mt-2">Take 9 as common: 9(sec² A - tan² A)</p>
                                <p>We know sec² A - tan² A = 1</p>
                                <p>Therefore: 9(1) = 9</p>
                                <p className="font-bold text-green-700 mt-2">Correct Option: (B) 9</p>
                            </div>

                            {/* Q3 (ii) */}
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p className="font-bold">(ii) (1 + tan θ + sec θ)(1 + cot θ - cosec θ) =</p>
                                <p className="mt-2">Convert everything into sin and cos:</p>
                                <p>= (1 + sin θ/cos θ + 1/cos θ)(1 + cos θ/sin θ - 1/sin θ)</p>
                                <p>= [ (cos θ + sin θ + 1) / cos θ ] × [ (sin θ + cos θ - 1) / sin θ ]</p>
                                <p>This looks like (a + b)(a - b) = a² - b² where a = (sin θ + cos θ) and b = 1</p>
                                <p>= [ (sin θ + cos θ)² - 1² ] / (cos θ sin θ)</p>
                                <p>= [ (sin² θ + cos² θ + 2sin θ cos θ) - 1 ] / (sin θ cos θ)</p>
                                <p>= [ 1 + 2sin θ cos θ - 1 ] / (sin θ cos θ)</p>
                                <p>= (2sin θ cos θ) / (sin θ cos θ) = 2</p>
                                <p className="font-bold text-green-700 mt-2">Correct Option: (C) 2</p>
                            </div>

                            {/* Q3 (iii) */}
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p className="font-bold">(iii) (sec A + tan A)(1 - sin A) = </p>
                                <p className="mt-2">Convert to sin and cos:</p>
                                <p>= (1/cos A + sin A/cos A) × (1 - sin A)</p>
                                <p>= [ (1 + sin A) / cos A ] × (1 - sin A)</p>
                                <p>= (1 - sin² A) / cos A</p>
                                <p>Since 1 - sin² A = cos² A:</p>
                                <p>= cos² A / cos A = cos A</p>
                                <p className="font-bold text-green-700 mt-2">Correct Option: (D) cos A</p>
                            </div>

                            {/* Q3 (iv) */}
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p className="font-bold">(iv) (1 + tan² A) / (1 + cot² A) = </p>
                                <p className="mt-2">Using Pythagorean identities:</p>
                                <p>1 + tan² A = sec² A</p>
                                <p>1 + cot² A = cosec² A</p>
                                <p>Therefore: sec² A / cosec² A</p>
                                <p>= (1 / cos² A) / (1 / sin² A)</p>
                                <p>= sin² A / cos² A = tan² A</p>
                                <p className="font-bold text-green-700 mt-2">Correct Option: (D) tan² A</p>
                            </div>

                        </div>
                    </div>

                    {/* Q4 Proving Identities */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden mt-8">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">4.</span> Prove the following identities
                        </div>
                        <div className="bg-slate-50 p-6 space-y-6 text-slate-700">

                            {/* Proving (i) */}
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p className="font-bold text-blue-800 border-b pb-1 mb-2">(i) (cosec θ - cot θ)² = (1 - cos θ) / (1 + cos θ)</p>
                                <p><strong>LHS:</strong> (cosec θ - cot θ)²</p>
                                <p>= (1/sin θ - cos θ/sin θ)²</p>
                                <p>= [ (1 - cos θ) / sin θ ]²</p>
                                <p>= (1 - cos θ)² / sin² θ</p>
                                <p>Substitute sin² θ = 1 - cos² θ:</p>
                                <p>= (1 - cos θ)² / (1 - cos² θ)</p>
                                <p>Use a² - b² on denominator:</p>
                                <p>= (1 - cos θ)(1 - cos θ) / [ (1 - cos θ)(1 + cos θ) ]</p>
                                <p>Cancel (1 - cos θ):</p>
                                <p>= (1 - cos θ) / (1 + cos θ) = <strong>RHS. Hence proved.</strong></p>
                            </div>

                            {/* Proving (ii) */}
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p className="font-bold text-blue-800 border-b pb-1 mb-2">(ii) cos A / (1 + sin A) + (1 + sin A) / cos A = 2 sec A</p>
                                <p><strong>LHS:</strong> Take the common denominator: cos A(1 + sin A)</p>
                                <p>= [ cos² A + (1 + sin A)² ] / [ cos A (1 + sin A) ]</p>
                                <p>Expand (1 + sin A)²:</p>
                                <p>= [ cos² A + 1 + 2sin A + sin² A ] / [ cos A (1 + sin A) ]</p>
                                <p>Since sin² A + cos² A = 1:</p>
                                <p>= [ 1 + 1 + 2sin A ] / [ cos A (1 + sin A) ]</p>
                                <p>= [ 2 + 2sin A ] / [ cos A (1 + sin A) ]</p>
                                <p>Factor out 2:</p>
                                <p>= 2(1 + sin A) / [ cos A (1 + sin A) ]</p>
                                <p>Cancel (1 + sin A):</p>
                                <p>= 2 / cos A = 2 sec A = <strong>RHS. Hence proved.</strong></p>
                            </div>

                            {/* Proving (iii) */}
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p className="font-bold text-blue-800 border-b pb-1 mb-2">(iii) tan θ / (1 - cot θ) + cot θ / (1 - tan θ) = 1 + sec θ cosec θ</p>
                                <p><strong>LHS:</strong> Convert tan and cot to sin and cos.</p>
                                <p>[ (sin θ/cos θ) / (1 - cos θ/sin θ) ] + [ (cos θ/sin θ) / (1 - sin θ/cos θ) ]</p>
                                <p>= [ (sin θ/cos θ) / ((sin θ - cos θ)/sin θ) ] + [ (cos θ/sin θ) / ((cos θ - sin θ)/cos θ) ]</p>
                                <p>= [ sin² θ / (cos θ(sin θ - cos θ)) ] - [ cos² θ / (sin θ(sin θ - cos θ)) ]   <span className="italic text-sm text-slate-500">(changed sign to match denominator)</span></p>
                                <p>Take common denominator sin θ cos θ (sin θ - cos θ):</p>
                                <p>= [ sin³ θ - cos³ θ ] / [ sin θ cos θ(sin θ - cos θ) ]</p>
                                <p>Use a³ - b³ = (a - b)(a² + ab + b²):</p>
                                <p>= [ (sin θ - cos θ)(sin² θ + sin θ cos θ + cos² θ) ] / [ sin θ cos θ(sin θ - cos θ) ]</p>
                                <p>Cancel (sin θ - cos θ) and use sin² θ + cos² θ = 1:</p>
                                <p>= (1 + sin θ cos θ) / (sin θ cos θ)</p>
                                <p>= 1 / (sin θ cos θ) + (sin θ cos θ) / (sin θ cos θ)</p>
                                <p>= sec θ cosec θ + 1 = <strong>RHS. Hence proved.</strong></p>
                            </div>

                            {/* Proving (iv) */}
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p className="font-bold text-blue-800 border-b pb-1 mb-2">(iv) (1 + sec A) / sec A = sin² A / (1 - cos A)</p>
                                <p><strong>LHS:</strong> Convert sec A to 1/cos A.</p>
                                <p>= (1 + 1/cos A) / (1/cos A)</p>
                                <p>= [ (cos A + 1) / cos A ] × (cos A / 1)</p>
                                <p>= cos A + 1</p>
                                <p className="mt-4"><strong>RHS:</strong> Substitute sin² A with 1 - cos² A.</p>
                                <p>= (1 - cos² A) / (1 - cos A)</p>
                                <p>= [ (1 - cos A)(1 + cos A) ] / (1 - cos A)</p>
                                <p>= 1 + cos A</p>
                                <p className="mt-2 text-green-700 font-bold">LHS = RHS. Hence proved.</p>
                            </div>

                            {/* Proving (v) */}
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p className="font-bold text-blue-800 border-b pb-1 mb-2">(v) (cos A - sin A + 1) / (cos A + sin A - 1) = cosec A + cot A</p>
                                <p>Divide numerator and denominator by sin A to bring in terms of cot A and cosec A.</p>
                                <p><strong>LHS:</strong> [ (cos A/sin A) - (sin A/sin A) + (1/sin A) ] / [ (cos A/sin A) + (sin A/sin A) - (1/sin A) ]</p>
                                <p>= (cot A - 1 + cosec A) / (cot A + 1 - cosec A)</p>
                                <p>Rearrange numerator: (cot A + cosec A) - 1</p>
                                <p>Substitute 1 = cosec² A - cot² A in numerator only:</p>
                                <p>= [ (cot A + cosec A) - (cosec² A - cot² A) ] / (cot A - cosec A + 1)</p>
                                <p>= [ (cot A + cosec A) - (cosec A - cot A)(cosec A + cot A) ] / (cot A - cosec A + 1)</p>
                                <p>Factor out (cosec A + cot A):</p>
                                <p>= (cosec A + cot A)[ 1 - (cosec A - cot A) ] / (cot A - cosec A + 1)</p>
                                <p>= (cosec A + cot A)(1 - cosec A + cot A) / (cot A - cosec A + 1)</p>
                                <p>The bracketed terms are identical and cancel out.</p>
                                <p>= cosec A + cot A = <strong>RHS. Hence proved.</strong></p>
                            </div>

                            {/* Proving (vi) */}
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p className="font-bold text-blue-800 border-b pb-1 mb-2">(vi) √( (1 + sin A) / (1 - sin A) ) = sec A + tan A</p>
                                <p><strong>LHS:</strong> Multiply numerator and denominator under root by conjugate (1 + sin A)</p>
                                <p>= √( [ (1 + sin A)(1 + sin A) ] / [ (1 - sin A)(1 + sin A) ] )</p>
                                <p>= √( (1 + sin A)² / (1 - sin² A) )</p>
                                <p>Substitute 1 - sin² A = cos² A:</p>
                                <p>= √( (1 + sin A)² / cos² A )</p>
                                <p>= (1 + sin A) / cos A</p>
                                <p>= 1/cos A + sin A/cos A</p>
                                <p>= sec A + tan A = <strong>RHS. Hence proved.</strong></p>
                            </div>

                            {/* Proving (vii) */}
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p className="font-bold text-blue-800 border-b pb-1 mb-2">(vii) (sin θ - 2 sin³ θ) / (2 cos³ θ - cos θ) = tan θ</p>
                                <p><strong>LHS:</strong> Factor out sin θ from top and cos θ from bottom.</p>
                                <p>= [ sin θ(1 - 2sin² θ) ] / [ cos θ(2cos² θ - 1) ]</p>
                                <p>Note that sin θ / cos θ = tan θ.</p>
                                <p>Now substitute sin² θ = 1 - cos² θ in numerator:</p>
                                <p>= tan θ × [ 1 - 2(1 - cos² θ) ] / (2cos² θ - 1)</p>
                                <p>= tan θ × [ 1 - 2 + 2cos² θ ] / (2cos² θ - 1)</p>
                                <p>= tan θ × (2cos² θ - 1) / (2cos² θ - 1)</p>
                                <p>Cancel the common terms:</p>
                                <p>= tan θ = <strong>RHS. Hence proved.</strong></p>
                            </div>

                            {/* Proving (viii) */}
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p className="font-bold text-blue-800 border-b pb-1 mb-2">(viii) (sin A + cosec A)² + (cos A + sec A)² = 7 + tan² A + cot² A</p>
                                <p><strong>LHS:</strong> Expand both binomials.</p>
                                <p>= (sin² A + cosec² A + 2sin A cosec A) + (cos² A + sec² A + 2cos A sec A)</p>
                                <p>Since sin A × cosec A = 1 and cos A × sec A = 1:</p>
                                <p>= sin² A + cosec² A + 2(1) + cos² A + sec² A + 2(1)</p>
                                <p>Group terms: (sin² A + cos² A) + cosec² A + sec² A + 4</p>
                                <p>Substitute sin² A + cos² A = 1:</p>
                                <p>= 1 + cosec² A + sec² A + 4</p>
                                <p>= 5 + cosec² A + sec² A</p>
                                <p>Use identities: cosec² A = 1 + cot² A, and sec² A = 1 + tan² A</p>
                                <p>= 5 + (1 + cot² A) + (1 + tan² A)</p>
                                <p>= 7 + tan² A + cot² A = <strong>RHS. Hence proved.</strong></p>
                            </div>

                            {/* Proving (ix) */}
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p className="font-bold text-blue-800 border-b pb-1 mb-2">(ix) (cosec A - sin A)(sec A - cos A) = 1 / (tan A + cot A)</p>
                                <p><strong>LHS:</strong> Convert to sin and cos.</p>
                                <p>= (1/sin A - sin A)(1/cos A - cos A)</p>
                                <p>= [ (1 - sin² A) / sin A ] × [ (1 - cos² A) / cos A ]</p>
                                <p>= (cos² A / sin A) × (sin² A / cos A)</p>
                                <p>= sin A cos A</p>
                                <p className="mt-4"><strong>RHS:</strong> Convert tan and cot to sin and cos.</p>
                                <p>= 1 / (sin A/cos A + cos A/sin A)</p>
                                <p>= 1 / [ (sin² A + cos² A) / (sin A cos A) ]</p>
                                <p>= 1 / [ 1 / (sin A cos A) ]</p>
                                <p>= sin A cos A</p>
                                <p className="mt-2 text-green-700 font-bold">LHS = RHS. Hence proved.</p>
                            </div>

                            {/* Proving (x) */}
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p className="font-bold text-blue-800 border-b pb-1 mb-2">(x) (1 + tan² A)/(1 + cot² A) = [ (1 - tan A)/(1 - cot A) ]² = tan² A</p>
                                <p><strong>Part 1:</strong> (1 + tan² A)/(1 + cot² A)</p>
                                <p>Use identities: 1 + tan² A = sec² A, and 1 + cot² A = cosec² A</p>
                                <p>= sec² A / cosec² A = (1/cos² A) / (1/sin² A) = sin² A / cos² A = tan² A</p>
                                <p className="mt-4"><strong>Part 2:</strong> [ (1 - tan A)/(1 - cot A) ]²</p>
                                <p>Convert cot A to 1/tan A denominator:</p>
                                <p>= [ (1 - tan A) / (1 - 1/tan A) ]²</p>
                                <p>= [ (1 - tan A) / ( (tan A - 1)/tan A ) ]²</p>
                                <p>= [ tan A × (1 - tan A) / (-(1 - tan A)) ]²</p>
                                <p>= [ -tan A ]² = tan² A</p>
                                <p className="mt-2 text-green-700 font-bold">Part 1 = Part 2 = tan² A. Hence proved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mt-12">
                <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                    Exercise 9.1 - Some Applications of Trigonometry
                </h3>

                <div className="space-y-8">
                    {/* Q1 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">1.</span> Circus Artist
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A circus artist is climbing a 20 m long rope, which is tightly stretched and tied from the top of a vertical pole to the ground. Find the height of the pole, if the angle made by the rope with the ground level is 30°."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let AB be the vertical pole and AC be the 20m long rope.</p>
                                <p>In right ΔABC, the angle of elevation ∠C = 30°.</p>
                                <p>We need to find AB (Opposite). We know AC (Hypotenuse) = 20m.</p>
                                <p className="mt-2 font-bold text-blue-800">sin 30° = AB / AC</p>
                                <p>1/2 = AB / 20</p>
                                <p>AB = 20 / 2 = <span className="text-green-700 font-bold">10 m</span></p>
                                <p className="mt-2 italic">Therefore, the height of the pole is 10 m.</p>
                            </div>
                        </div>
                    </div>

                    {/* Q2 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">2.</span> Broken Tree
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A tree breaks due to storm and the broken part bends so that the top of the tree touches the ground making an angle 30° with it. The distance between the foot of the tree to the point where the top touches the ground is 8 m. Find the height of the tree."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let the broken tree form a right angled triangle ABC, where AB is the standing part, AC is the broken part (hypotenuse) touching the ground at C, and BC is the base (8m).</p>
                                <p>Angle of elevation ∠C = 30°.</p>
                                <p>Height of the original tree = AB + AC.</p>

                                <p className="mt-4 font-bold border-b pb-1">Find AB (Opposite):</p>
                                <p>tan 30° = AB / BC</p>
                                <p>1/√3 = AB / 8 &nbsp;&rarr;&nbsp; <span className="text-blue-700 font-bold">AB = 8/√3</span> m</p>

                                <p className="mt-4 font-bold border-b pb-1">Find AC (Hypotenuse):</p>
                                <p>cos 30° = BC / AC</p>
                                <p>√3/2 = 8 / AC &nbsp;&rarr;&nbsp; AC = 16/√3 m</p>

                                <p className="mt-4 font-bold border-b pb-1">Total Height:</p>
                                <p>AB + AC = (8/√3) + (16/√3) = 24/√3</p>
                                <p>Rationalizing the denominator: (24√3) / 3 = <span className="text-green-700 font-bold text-xl">8√3 m</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q3 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">3.</span> Park Slides
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A contractor plans to install two slides... For children below 5 years, slide top is at 1.5m height, inclined at 30°. For older children, steep slide at 3m height, inclined at 60°. What should be the length of the slide in each case?"</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <div>
                                    <p className="font-bold text-blue-800 border-b pb-1">(i) Slide for children below 5 years:</p>
                                    <p>Height (Opposite) = 1.5 m, Angle = 30°.</p>
                                    <p>Let Length of slide (Hypotenuse) be L₁.</p>
                                    <p>sin 30° = 1.5 / L₁</p>
                                    <p>1/2 = 1.5 / L₁</p>
                                    <p>L₁ = 1.5 × 2 = <span className="text-green-700 font-bold">3 m</span></p>
                                </div>
                                <div>
                                    <p className="font-bold text-blue-800 border-b pb-1">(ii) Slide for older children:</p>
                                    <p>Height (Opposite) = 3 m, Angle = 60°.</p>
                                    <p>Let Length of slide (Hypotenuse) be L₂.</p>
                                    <p>sin 60° = 3 / L₂</p>
                                    <p>√3 / 2 = 3 / L₂</p>
                                    <p>L₂ = 6 / √3 = (6√3)/3 = <span className="text-green-700 font-bold">2√3 m</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q4 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">4.</span> Tower Elevation
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"The angle of elevation of the top of a tower from a point on the ground, which is 30 m away from the foot of the tower, is 30°. Find the height of the tower."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let AB be the tower with height h, and C be the point on the ground.</p>
                                <p>Distance BC (Adjacent) = 30 m.</p>
                                <p>Angle of elevation ∠C = 30°.</p>
                                <p className="mt-3">We use tangent ratio:</p>
                                <p>tan 30° = AB / BC</p>
                                <p>1/√3 = h / 30</p>
                                <p>h = 30 / √3 = (30√3) / 3 = <span className="text-green-700 text-xl font-bold">10√3 m</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q5 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">5.</span> Kite String
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A kite is flying at a height of 60 m above the ground. The string attached to the kite is temporarily tied to a point on the ground. The inclination of the string with the ground is 60°. Find the length of the string, assuming that there is no slack in the string."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let AB be the height of the kite (Opposite) = 60 m.</p>
                                <p>Let AC (Hypotenuse) be the length of the string.</p>
                                <p>Inclination ∠C = 60°.</p>
                                <p className="mt-3">We use sine ratio:</p>
                                <p>sin 60° = AB / AC</p>
                                <p>√3/2 = 60 / AC</p>
                                <p>AC = 120 / √3 = (120√3) / 3 = <span className="text-green-700 text-xl font-bold">40√3 m</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q6 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">6.</span> Boy Walking Towards Building
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A 1.5 m tall boy is standing at some distance from a 30 m tall building. The angle of elevation from his eyes to the top of the building increases from 30° to 60° as he walks towards the building. Find the distance he walked towards the building."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Height of the boy = 1.5 m.</p>
                                <p>Height of the building = 30 m.</p>
                                <p>Height of building above the boy's eye level = 30 - 1.5 = <span className="font-bold text-blue-700">28.5 m</span></p>

                                <p className="mt-4 line-through italic text-slate-500">Let the initial point be A and final point be B, and the perpendicular foot be C.</p>
                                <p>Let x be the distance walked and y be the remaining distance to the building.</p>

                                <p className="mt-4 font-bold border-b pb-1">In the inner right triangle (angle 60°):</p>
                                <p>tan 60° = 28.5 / y</p>
                                <p>√3 = 28.5 / y &nbsp;&rarr;&nbsp; y = 28.5 / √3 = <span className="text-blue-800 font-bold">9.5√3 m</span></p>

                                <p className="mt-4 font-bold border-b pb-1">In the outer right triangle (angle 30°):</p>
                                <p>tan 30° = 28.5 / (x + y)</p>
                                <p>1/√3 = 28.5 / (x + 9.5√3)</p>
                                <p>x + 9.5√3 = 28.5√3</p>
                                <p>x = 28.5√3 - 9.5√3 = <span className="text-green-700 text-xl font-bold">19√3 m</span></p>
                                <p className="mt-2 text-slate-600 italic">The distance walked is 19√3 m.</p>
                            </div>
                        </div>
                    </div>

                    {/* Q7 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">7.</span> Transmission Tower
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"From a point on the ground, the angles of elevation of the bottom and the top of a transmission tower fixed at the top of a 20 m high building are 45° and 60° respectively. Find the height of the tower."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let h be the height of the transmission tower and x be the distance from the point on the ground to the foot of the building.</p>
                                <p>Height of building = 20 m.</p>

                                <p className="mt-4 font-bold border-b pb-1">For the building (bottom of tower, 45°):</p>
                                <p>tan 45° = 20 / x</p>
                                <p>1 = 20 / x &nbsp;&rarr;&nbsp; <span className="font-bold text-blue-700">x = 20 m</span></p>

                                <p className="mt-4 font-bold border-b pb-1">For the building + tower (top of tower, 60°):</p>
                                <p>tan 60° = (20 + h) / x</p>
                                <p>Substitute x = 20:</p>
                                <p>√3 = (20 + h) / 20</p>
                                <p>20√3 = 20 + h</p>
                                <p>h = 20√3 - 20 = <span className="font-bold text-green-700 text-xl">20(√3 - 1) m</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q8 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">8.</span> Statue on a Pedestal
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A statue, 1.6 m tall, stands on the top of a pedestal. From a point on the ground, the angle of elevation of the top of the statue is 60° and from the same point the angle of elevation of the top of the pedestal is 45°. Find the height of the pedestal."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let h be the height of the pedestal and x be the distance from the point on the ground to the base of the pedestal.</p>
                                <p>Height of statue = 1.6 m.</p>

                                <p className="mt-4 font-bold border-b pb-1">For the pedestal (top of pedestal, 45°):</p>
                                <p>tan 45° = h / x</p>
                                <p>1 = h / x &nbsp;&rarr;&nbsp; <span className="font-bold text-blue-700">x = h</span></p>

                                <p className="mt-4 font-bold border-b pb-1">For the pedestal + statue (top of statue, 60°):</p>
                                <p>tan 60° = (h + 1.6) / x</p>
                                <p>Substitute x = h:</p>
                                <p>√3 = (h + 1.6) / h</p>
                                <p>h√3 = h + 1.6</p>
                                <p>h√3 - h = 1.6 &nbsp;&rarr;&nbsp; h(√3 - 1) = 1.6</p>
                                <p>h = 1.6 / (√3 - 1)</p>
                                <p className="mt-2 text-sm italic">Rationalizing the denominator by multiplying by (√3 + 1)/(√3 + 1):</p>
                                <p>h = 1.6(√3 + 1) / (3 - 1)</p>
                                <p>h = 1.6(√3 + 1) / 2 = <span className="text-green-700 text-xl font-bold">0.8(√3 + 1) m</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q9 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">9.</span> Building and Tower
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"The angle of elevation of the top of a building from the foot of the tower is 30° and the angle of elevation of the top of the tower from the foot of the building is 60°. If the tower is 50 m high, find the height of the building."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let h be the height of the building and x be the distance between their feet.</p>
                                <p>Height of tower = 50 m.</p>

                                <p className="mt-4 font-bold border-b pb-1">For the tower (from foot of building, 60°):</p>
                                <p>tan 60° = 50 / x</p>
                                <p>√3 = 50 / x &nbsp;&rarr;&nbsp; <span className="text-blue-800">x = 50 / √3</span> m</p>

                                <p className="mt-4 font-bold border-b pb-1">For the building (from foot of tower, 30°):</p>
                                <p>tan 30° = h / x</p>
                                <p>1/√3 = h / (50 / √3)</p>
                                <p>h = (1/√3) × (50 / √3)</p>
                                <p>h = 50 / 3 = <span className="font-bold text-green-700 text-xl">16 ⅔ m</span> (or 16.67 m)</p>
                            </div>
                        </div>
                    </div>

                    {/* Q10 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">10.</span> Two Poles
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Two poles of equal heights are standing opposite each other on either side of the road, which is 80 m wide. From a point between them on the road, the angles of elevation of the top of the poles are 60° and 30°, respectively. Find the height of the poles and the distances of the point from the poles."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let the equal height of the poles be h.</p>
                                <p>Let the distance of the point from the first pole (60° angle) be x.</p>
                                <p>Then, the distance from the second pole (30° angle) is (80 - x).</p>

                                <p className="mt-4 font-bold border-b pb-1">For the first pole (60°):</p>
                                <p>tan 60° = h / x &nbsp;&rarr;&nbsp; <span className="text-blue-800 font-bold">h = x√3</span>  (Equation 1)</p>

                                <p className="mt-4 font-bold border-b pb-1">For the second pole (30°):</p>
                                <p>tan 30° = h / (80 - x)</p>
                                <p>1/√3 = h / (80 - x) &nbsp;&rarr;&nbsp; <span className="text-blue-800 font-bold">h = (80 - x) / √3</span>  (Equation 2)</p>

                                <p className="mt-4 font-bold border-b pb-1">Equating Equation 1 and 2:</p>
                                <p>x√3 = (80 - x) / √3</p>
                                <p>3x = 80 - x</p>
                                <p>4x = 80 &nbsp;&rarr;&nbsp; <span className="text-emerald-700 font-bold">x = 20 m</span></p>

                                <p className="mt-4">Substituting x = 20 in Eq 1 to find height:</p>
                                <p>h = <span className="text-green-700 font-bold text-xl">20√3 m</span></p>
                                <p className="mt-2 text-slate-600 italic">The height of the poles is 20√3 m, and the distances from the point are 20 m and 60 m.</p>
                            </div>
                        </div>
                    </div>

                    {/* Q11 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">11.</span> TV Tower on Canal
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A TV tower stands vertically on a bank of a canal. From a point on the other bank directly opposite the tower, the angle of elevation of the top of the tower is 60°. From another point 20 m away from this point on the line joining this point to the foot of the tower, the angle of elevation of the top of the tower is 30°. Find the height of the tower and the width of the canal."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let h be the tower height, and x be the width of the canal.</p>

                                <p className="mt-4 font-bold border-b pb-1">Inner triangle (60°, from opposite bank):</p>
                                <p>tan 60° = h / x</p>
                                <p>√3 = h / x &nbsp;&rarr;&nbsp; <span className="font-bold text-blue-800">h = x√3</span>  (Equation 1)</p>

                                <p className="mt-4 font-bold border-b pb-1">Outer triangle (30°, 20m further away):</p>
                                <p>tan 30° = h / (x + 20)</p>
                                <p>1/√3 = h / (x + 20)</p>
                                <p>Substitute h = x√3:</p>
                                <p>1/√3 = (x√3) / (x + 20)</p>
                                <p>x + 20 = 3x</p>
                                <p>2x = 20 &nbsp;&rarr;&nbsp; <span className="font-bold text-emerald-700">x = 10 m</span> (Width of canal)</p>

                                <p className="mt-4">Substitute x = 10 into Eq 1:</p>
                                <p>h = <span className="font-bold text-green-700 text-xl">10√3 m</span> (Height of tower)</p>
                            </div>
                        </div>
                    </div>

                    {/* Q12 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">12.</span> Building and Cable Tower
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"From the top of a 7 m high building, the angle of elevation of the top of a cable tower is 60° and the angle of depression of its foot is 45°. Determine the height of the tower."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let the distance between building and tower be x.</p>
                                <p>Height of building = 7 m.</p>
                                <p>Let the height of the tower above the building be h. Total height = h + 7.</p>

                                <p className="mt-4 font-bold border-b pb-1">Angle of depression to foot (45°):</p>
                                <p>Using alternate interior angles, the angle of elevation from foot of tower to top of building is 45°.</p>
                                <p>tan 45° = 7 / x</p>
                                <p>1 = 7 / x &nbsp;&rarr;&nbsp; <span className="font-bold text-blue-700">x = 7 m</span></p>

                                <p className="mt-4 font-bold border-b pb-1">Angle of elevation to top (60°):</p>
                                <p>tan 60° = h / x</p>
                                <p>√3 = h / 7</p>
                                <p>h = 7√3 m</p>

                                <p className="mt-4">Total height of tower = h + 7</p>
                                <p>= 7√3 + 7 = <span className="font-bold text-green-700 text-xl">7(√3 + 1) m</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q13 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">13.</span> Lighthouse and Ships
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"As observed from the top of a 75 m high lighthouse from the sea-level, the angles of depression of two ships are 30° and 45°. If one ship is exactly behind the other on the same side of the lighthouse, find the distance between the two ships."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Due to alternate interior angles, the angles of elevation from ships to lighthouse are 30° and 45°.</p>
                                <p>Height of lighthouse (Opposite) = 75 m.</p>

                                <p className="mt-4 font-bold border-b pb-1">For the near ship (45°):</p>
                                <p>tan 45° = 75 / x</p>
                                <p>1 = 75 / x &nbsp;&rarr;&nbsp; <span className="font-bold text-blue-700">x = 75 m</span></p>

                                <p className="mt-4 font-bold border-b pb-1">For the far ship (30°):</p>
                                <p>tan 30° = 75 / y</p>
                                <p>1/√3 = 75 / y &nbsp;&rarr;&nbsp; <span className="font-bold text-blue-700">y = 75√3 m</span></p>

                                <p className="mt-4">Distance between them = y - x</p>
                                <p>= 75√3 - 75 = <span className="font-bold text-green-700 text-xl">75(√3 - 1) m</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q14 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">14.</span> Girl and Balloon
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A 1.2 m tall girl spots a balloon moving with the wind in a horizontal line at a height of 88.2 m from the ground. The angle of elevation of the balloon from the eyes of the girl at any instant is 60°. After some time, the angle of elevation reduces to 30°. Find the distance travelled by the balloon during the interval."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Effective height of the balloon (above eye level) = 88.2 - 1.2 = <span className="font-bold text-blue-700">87 m</span>.</p>

                                <p className="mt-4 font-bold border-b pb-1">Initial Position (Angle 60°):</p>
                                <p>tan 60° = 87 / x</p>
                                <p>√3 = 87 / x &nbsp;&rarr;&nbsp; x = 87 / √3 = <span className="font-bold text-blue-800">29√3 m</span></p>

                                <p className="mt-4 font-bold border-b pb-1">Final Position (Angle 30°):</p>
                                <p>tan 30° = 87 / y</p>
                                <p>1/√3 = 87 / y &nbsp;&rarr;&nbsp; <span className="font-bold text-blue-800">y = 87√3 m</span></p>

                                <p className="mt-4">Distance travelled = y - x</p>
                                <p>= 87√3 - 29√3 = <span className="font-bold text-green-700 text-xl">58√3 m</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q15 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">15.</span> Speeding Car
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A straight highway leads to the foot of a tower. A man standing at the top of the tower observes a car at an angle of depression of 30°. Six seconds later, the angle of depression of the car is found to be 60°. Find the time taken by the car to reach the foot of the tower from this point."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let h be the height of the tower.</p>
                                <p>Let Point A (far) be the 30° angle, and point B (near) be the 60° angle. Let C be the base of the tower.</p>
                                <p>Let the distance AB = D (covered in 6 seconds), and BC = y.</p>

                                <p className="mt-4 font-bold border-b pb-1">For near point B (60°):</p>
                                <p>tan 60° = h / y &nbsp;&rarr;&nbsp; <span className="font-bold text-blue-800">h = y√3</span></p>

                                <p className="mt-4 font-bold border-b pb-1">For far point A (30°):</p>
                                <p>tan 30° = h / (D + y)</p>
                                <p>1/√3 = (y√3) / (D + y)</p>
                                <p>D + y = 3y</p>
                                <p>D = 2y</p>

                                <p className="mt-4"><strong>Conclusion on Time:</strong></p>
                                <p>The car covered distance D (which is 2y) in 6 seconds.</p>
                                <p>At constant speed, to cover distance y (half of 2y), it will take half the time.</p>
                                <p>Time = 6 / 2 = <span className="font-bold text-green-700 text-xl">3 seconds</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
