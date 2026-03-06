import React from 'react';

export default function Exercises() {
    return (
        <div className="space-y-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b pb-4">Exercise 10.2 (Circles)</h2>

            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="space-y-8">

                    {/* Q1 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">1.</span> Tangent and Radius Calculation
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-4">"From a point Q, the length of the tangent to a circle is 24 cm and the distance of Q from the centre is 25 cm. The radius of the circle is:"</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let the centre of the circle be O and the point of tangency be P.</p>
                                <p>We know that the radius is perpendicular to the tangent at the point of contact.</p>
                                <p>Therefore, ∠OPQ = 90°.</p>
                                <p className="mt-4">In right-angled triangle OPQ, by Pythagoras theorem:</p>
                                <p>OQ² = OP² + PQ²</p>
                                <p>25² = r² + 24²</p>
                                <p>625 = r² + 576</p>
                                <p>r² = 625 - 576 = 49</p>
                                <p>r = √49 = <span className="text-green-700 font-bold">7 cm</span></p>
                                <p className="mt-4 font-bold text-blue-800">Correct Option: (A) 7 cm</p>
                            </div>
                        </div>
                    </div>

                    {/* Q2 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">2.</span> Angle Between Tangents
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-4">"In Fig 10.11, if TP and TQ are the two tangents to a circle with centre O so that ∠POQ = 110°, then ∠PTQ is equal to:"</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>TP and TQ are tangents, so OP ⟂ TP and OQ ⟂ TQ.</p>
                                <p>Therefore, ∠OPT = 90° and ∠OQT = 90°.</p>
                                <p className="mt-4">In the quadrilateral POQT, the sum of angles is 360°.</p>
                                <p>∠OPT + ∠OQT + ∠POQ + ∠PTQ = 360°</p>
                                <p>90° + 90° + 110° + ∠PTQ = 360°</p>
                                <p>290° + ∠PTQ = 360°</p>
                                <p>∠PTQ = 360° - 290° = <span className="text-green-700 font-bold">70°</span></p>
                                <p className="mt-4 font-bold text-blue-800">Correct Option: (B) 70°</p>
                            </div>
                        </div>
                    </div>

                    {/* Q3 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">3.</span> Inclined Tangents
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-4">"If tangents PA and PB from a point P to a circle with centre O are inclined to each other at angle of 80°, then ∠POA is equal to:"</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>PA and PB are tangents, so OA ⟂ PA and OB ⟂ PB. (∠OAP = 90°, ∠OBP = 90°)</p>
                                <p>In quadrilateral OAPB, sum of angles is 360°.</p>
                                <p>∠AOB + ∠OAP + ∠OBP + ∠APB = 360°</p>
                                <p>∠AOB + 90° + 90° + 80° = 360°</p>
                                <p>∠AOB = 360° - 260° = 100°</p>
                                <p className="mt-4">In ∆OAP and ∆OBP:</p>
                                <ul className="list-disc ml-8 mb-2">
                                    <li>OA = OB (Radii)</li>
                                    <li>OP = OP (Common)</li>
                                    <li>PA = PB (Tangents from external point)</li>
                                </ul>
                                <p>Therefore, ∆OAP ≅ ∆OBP (SSS congruence).</p>
                                <p>So, ∠POA = ∠POB = 1/2 × ∠AOB = 1/2 × 100° = <span className="text-green-700 font-bold">50°</span></p>
                                <p className="mt-4 font-bold text-blue-800">Correct Option: (A) 50°</p>
                            </div>
                        </div>
                    </div>

                    {/* Q4 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">4.</span> Tangents at Ends of a Diameter
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-4">"Prove that the tangents drawn at the ends of a diameter of a circle are parallel."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let AB be the diameter of a circle with centre O.</p>
                                <p>Let PQ be the tangent at A and RS be the tangent at B.</p>
                                <p className="mt-4">Since tangent is perpendicular to radius at point of contact:</p>
                                <p>OA ⟂ PQ &nbsp;&rarr;&nbsp; ∠OAP = 90° and ∠OAQ = 90°</p>
                                <p>OB ⟂ RS &nbsp;&rarr;&nbsp; ∠OBR = 90° and ∠OBS = 90°</p>
                                <p className="mt-4">Since AB is a line segment (the diameter) intersecting lines PQ and RS:</p>
                                <p>Alternate interior angles ∠OAP and ∠OBS are equal (both 90°).</p>
                                <p>Since alternate interior angles are equal, the lines PQ and RS must be parallel.</p>
                                <p className="mt-4 font-bold text-green-700">Therefore, PQ || RS. Hence proved.</p>
                            </div>
                        </div>
                    </div>

                    {/* Q5 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">5.</span> Perpendicular at Point of Contact
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-4">"Prove that the perpendicular at the point of contact to the tangent to a circle passes through the centre."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>We prove this by contradiction.</p>
                                <p>Let AB be tangent to circle with centre O at point P.</p>
                                <p>Assume the perpendicular to AB at P does <strong>not</strong> pass through the centre O, but passes through some other point O'.</p>
                                <p>Then, ∠O'PB = 90° (by our assumption).</p>
                                <p className="mt-4">However, we know by theorem that the radius from the centre to the point of contact is perpendicular to the tangent.</p>
                                <p>Therefore, ∠OPB = 90°.</p>
                                <p className="mt-4">This implies that ∠O'PB = ∠OPB.</p>
                                <p>This is only possible if point O and point O' lie on the same line segment, starting from P. Meaning the line passing through O' must also pass through O.</p>
                                <p className="mt-4 font-bold text-green-700">Hence, the perpendicular at the point of contact must pass through the centre.</p>
                            </div>
                        </div>
                    </div>

                    {/* Q6 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">6.</span> Finding Radius from Distance
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-4">"The length of a tangent from a point A at distance 5 cm from the centre of the circle is 4 cm. Find the radius of the circle."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let the centre of the circle be O and the point of tangency be P.</p>
                                <p>Given:</p>
                                <ul className="list-disc ml-8 mb-4">
                                    <li>Distance from centre (OA) = 5 cm</li>
                                    <li>Length of tangent (AP) = 4 cm</li>
                                </ul>
                                <p>We know OP ⟂ AP because radius is perpendicular to tangent at point of contact.</p>
                                <p className="mt-4">In right-angled triangle OPA, using Pythagoras theorem:</p>
                                <p>OA² = AP² + OP²</p>
                                <p>5² = 4² + OP²</p>
                                <p>25 = 16 + OP²</p>
                                <p>OP² = 25 - 16 = 9</p>
                                <p>OP = √9 = <span className="text-green-700 font-bold">3 cm</span></p>
                                <p className="mt-4 italic text-slate-600">The radius of the circle is 3 cm.</p>
                            </div>
                        </div>
                    </div>

                    {/* Q7 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">7.</span> Chord of Concentric Circles
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-4">"Two concentric circles are of radii 5 cm and 3 cm. Find the length of the chord of the larger circle which touches the smaller circle."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let O be the centre of the two concentric circles.</p>
                                <p>Let AB be the chord of the larger circle that touches the smaller circle at point P.</p>
                                <p>Radius of larger circle (OA) = 5 cm.</p>
                                <p>Radius of smaller circle (OP) = 3 cm.</p>
                                <p className="mt-4">Since AB is a tangent to the smaller circle at P, the radius OP is perpendicular to AB.</p>
                                <p>So, OP ⟂ AB.</p>
                                <p className="mt-4">In right-angled triangle OPA, using Pythagoras theorem:</p>
                                <p>OA² = AP² + OP²</p>
                                <p>5² = AP² + 3²</p>
                                <p>25 = AP² + 9</p>
                                <p>AP² = 16</p>
                                <p>AP = √16 = <span className="text-blue-800 font-bold">4 cm</span></p>
                                <p className="mt-4">We know that the perpendicular from the centre to a chord bisects the chord.</p>
                                <p>Hence, AP = PB = 4 cm.</p>
                                <p>Length of chord AB = AP + PB = 4 + 4 = <span className="text-green-700 font-bold">8 cm</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q8 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">8.</span> Circumscribed Quadrilateral
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-4">"A quadrilateral ABCD is drawn to circumscribe a circle (see Fig. 10.12). Prove that AB + CD = AD + BC"</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let the circle touch the sides AB, BC, CD, and DA of quadrilateral ABCD at points P, Q, R, and S respectively.</p>
                                <p className="mt-4">We know that lengths of tangents drawn from an external point to a circle are equal.</p>
                                <ul className="list-disc ml-8 mb-4">
                                    <li>From point A: <strong>AP = AS</strong> &nbsp;(Equation 1)</li>
                                    <li>From point B: <strong>BP = BQ</strong> &nbsp;(Equation 2)</li>
                                    <li>From point C: <strong>CR = CQ</strong> &nbsp;(Equation 3)</li>
                                    <li>From point D: <strong>DR = DS</strong> &nbsp;(Equation 4)</li>
                                </ul>
                                <p className="mt-4">Now, let's look at the LHS of what we need to prove:</p>
                                <p className="font-bold border-b pb-1">AB + CD</p>
                                <p>= (AP + BP) + (CR + DR)</p>
                                <p>Substituting from equations 1, 2, 3, and 4:</p>
                                <p>= AS + BQ + CQ + DS</p>
                                <p>Rearrange the terms:</p>
                                <p>= (AS + DS) + (BQ + CQ)</p>
                                <p>= <strong>AD + BC</strong></p>
                                <p className="mt-4 font-bold text-green-700">LHS = RHS. Hence proved.</p>
                            </div>
                        </div>
                    </div>

                    {/* Q9 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">9.</span> Angle Subtended by Parallel Tangents
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-4">"In Fig. 10.13, XY and X′Y′ are two parallel tangents to a circle with centre O and another tangent AB with point of contact C intersecting XY at A and X′Y′ at B. Prove that ∠AOB = 90°."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let the points of contact of XY and X'Y' be P and Q respectively.</p>
                                <p>Join OA, OB, OC, OP, and OQ.</p>
                                <p className="mt-4">In ∆OPA and ∆OCA:</p>
                                <ul className="list-disc ml-8 mb-2">
                                    <li>OP = OC (Radii of the same circle)</li>
                                    <li>AP = AC (Tangents from external point A)</li>
                                    <li>OA = OA (Common side)</li>
                                </ul>
                                <p>Therefore, ∆OPA ≅ ∆OCA (SSS congruence).</p>
                                <p>So, ∠POA = ∠COA.</p>
                                <p className="mt-4">Similarly, in ∆OQB and ∆OCB:</p>
                                <p>∆OQB ≅ ∆OCB (SSS congruence).</p>
                                <p>So, ∠QOB = ∠COB.</p>
                                <p className="mt-4 border-b pb-1">Since PQ is the diameter (XY || X'Y' making the points of tangency the ends of diameter):</p>
                                <p>POQ is a straight line, so the angles on it sum to 180°.</p>
                                <p>∠POA + ∠COA + ∠COB + ∠QOB = 180°</p>
                                <p>Substitute ∠POA with ∠COA, and ∠QOB with ∠COB:</p>
                                <p>2∠COA + 2∠COB = 180°</p>
                                <p>2(∠COA + ∠COB) = 180°</p>
                                <p>∠COA + ∠COB = 90°</p>
                                <p>We know ∠AOB = ∠COA + ∠COB.</p>
                                <p className="mt-4 font-bold text-green-700">Therefore, ∠AOB = 90°. Hence proved.</p>
                            </div>
                        </div>
                    </div>

                    {/* Q10 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">10.</span> Supplementary Angles
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-4">"Prove that the angle between the two tangents drawn from an external point to a circle is supplementary to the angle subtended by the line-segment joining the points of contact at the centre."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let PA and PB be two tangents drawn from an external point P to a circle with centre O.</p>
                                <p>Points of contact are A and B.</p>
                                <p className="mt-4">We need to prove: ∠APB + ∠AOB = 180°.</p>
                                <p className="mt-4">In quadrilateral OAPB:</p>
                                <p>We know that the tangent is perpendicular to the radius at the point of contact.</p>
                                <p>Therefore, ∠OAP = 90° and ∠OBP = 90°.</p>
                                <p className="mt-4 border-b pb-1">Sum of interior angles of a quadrilateral is 360°:</p>
                                <p>∠OAP + ∠OBP + ∠APB + ∠AOB = 360°</p>
                                <p>90° + 90° + ∠APB + ∠AOB = 360°</p>
                                <p>180° + ∠APB + ∠AOB = 360°</p>
                                <p>∠APB + ∠AOB = 360° - 180°</p>
                                <p>∠APB + ∠AOB = 180°</p>
                                <p className="mt-4 font-bold text-green-700">Since their sum is 180°, the angles are supplementary. Hence proved.</p>
                            </div>
                        </div>
                    </div>

                    {/* Q11 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">11.</span> Parallelogram Circumscribing a Circle
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-4">"Prove that the parallelogram circumscribing a circle is a rhombus."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let ABCD be a parallelogram circumscribing a circle, touching its sides AB, BC, CD, DA at points P, Q, R, S respectively.</p>
                                <p className="mt-4">Since ABCD is a parallelogram:</p>
                                <p>AB = CD &nbsp;(Equation 1)</p>
                                <p>BC = AD &nbsp;(Equation 2)</p>
                                <p className="mt-4">We know from Q8 that for any circumscribed quadrilateral, the sum of opposite sides is equal.</p>
                                <p>AB + CD = AD + BC</p>
                                <p className="mt-4">Substitute Equation 1 and Equation 2 into this result:</p>
                                <p>AB + AB = BC + BC</p>
                                <p>2AB = 2BC</p>
                                <p>AB = BC</p>
                                <p className="mt-4">We already know AB = CD and BC = AD. Now we know adjacent sides AB and BC are equal.</p>
                                <p>Therefore, AB = BC = CD = AD.</p>
                                <p className="mt-4 font-bold text-green-700">Since all four sides of the parallelogram are equal,ABCD is a rhombus. Hence proved.</p>
                            </div>
                        </div>
                    </div>

                    {/* Q12 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">12.</span> Circumscribed Triangle
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-4">"A triangle ABC is drawn to circumscribe a circle of radius 4 cm such that the segments BD and DC into which BC is divided by the point of contact D are of lengths 8 cm and 6 cm respectively (see Fig. 10.14). Find the sides AB and AC."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let the circle touch sides AB and AC at points E and F respectively. Let O be the centre of the circle.</p>
                                <p>Given: OD = OE = OF = 4 cm (Radius), BD = 8 cm, CD = 6 cm.</p>
                                <p className="mt-4">Since tangents from an external point are equal in length:</p>
                                <ul className="list-disc ml-8 mb-4">
                                    <li>BE = BD = 8 cm</li>
                                    <li>CF = CD = 6 cm</li>
                                    <li>Let AE = AF = x cm</li>
                                </ul>
                                <p className="mt-4 border-b pb-1">Sides of the triangle:</p>
                                <p>a (side BC) = 8 + 6 = 14 cm</p>
                                <p>b (side AC) = x + 6 cm</p>
                                <p>c (side AB) = x + 8 cm</p>

                                <p className="mt-4 border-b pb-1">Using Heron's formula for the area of ∆ABC:</p>
                                <p>Semi-perimeter, s = (14 + x + 6 + x + 8) / 2 = (2x + 28) / 2 = <strong>x + 14</strong></p>
                                <p>Area = √(s(s-a)(s-b)(s-c))</p>
                                <p>Area = √((x + 14)(x + 14 - 14)(x + 14 - (x + 6))(x + 14 - (x + 8)))</p>
                                <p>Area = √((x + 14)(x)(8)(6))</p>
                                <p><strong>Area = √(48x(x + 14))</strong> &nbsp;(Equation 1)</p>

                                <p className="mt-4 border-b pb-1">Also, Area of ∆ABC = Area(∆OBC) + Area(∆OCA) + Area(∆OAB)</p>
                                <p>Area = [1/2 × BC × OD] + [1/2 × AC × OF] + [1/2 × AB × OE]</p>
                                <p>Since OD = OF = OE = 4cm (height of all sub-triangles):</p>
                                <p>Area = 1/2 × 4 × (BC + AC + AB)</p>
                                <p>Area = 2 × (14 + x + 6 + x + 8)</p>
                                <p><strong>Area = 2(2x + 28) = 4(x + 14)</strong> &nbsp;(Equation 2)</p>

                                <p className="mt-4 border-b pb-1">Equating Equation 1 and Equation 2:</p>
                                <p>√(48x(x + 14)) = 4(x + 14)</p>
                                <p>Squaring both sides:</p>
                                <p>48x(x + 14) = 16(x + 14)²</p>
                                <p>Divide by 16(x + 14):</p>
                                <p>3x = x + 14</p>
                                <p>2x = 14 &nbsp;&rarr;&nbsp; <strong>x = 7 cm</strong></p>

                                <p className="mt-4 font-bold text-green-700">Therefore, AB = x + 8 = 15 cm and AC = x + 6 = 13 cm.</p>
                            </div>
                        </div>
                    </div>

                    {/* Q13 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">13.</span> Angles Subtended by Opposite Sides
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-4">"Prove that opposite sides of a quadrilateral circumscribing a circle subtend supplementary angles at the centre of the circle."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let ABCD be a quadrilateral circumscribing a circle with centre O. Let the circle touch sides AB, BC, CD, DA at P, Q, R, S respectively.</p>
                                <p>Join OP, OQ, OR, OS, OA, OB, OC, OD.</p>
                                <p className="mt-4">We know tangents from an external point are equal and subtend equal angles at the centre.</p>
                                <p>In ∆OAP and ∆OAS:</p>
                                <ul className="list-disc ml-8 mb-2">
                                    <li>AP = AS (Tangents)</li>
                                    <li>OP = OS (Radii)</li>
                                    <li>OA = OA (Common)</li>
                                </ul>
                                <p>∆OAP ≅ ∆OAS (SSS).</p>
                                <p>Let ∠AOP = ∠AOS = ∠1</p>
                                <p className="mt-2">Similarly:</p>
                                <ul className="list-disc ml-8 mb-4">
                                    <li>∠BOP = ∠BOQ = ∠2</li>
                                    <li>∠COQ = ∠COR = ∠3</li>
                                    <li>∠DOR = ∠DOS = ∠4</li>
                                </ul>

                                <p className="mt-4 border-b pb-1">Sum of all angles around centre O is 360°:</p>
                                <p>2(∠1) + 2(∠2) + 2(∠3) + 2(∠4) = 360°</p>
                                <p>2(∠1 + ∠2 + ∠3 + ∠4) = 360°</p>
                                <p>∠1 + ∠2 + ∠3 + ∠4 = 180°</p>

                                <p className="mt-4">Group them to represent subtended angles by opposite sides:</p>
                                <p>(∠1 + ∠2) + (∠3 + ∠4) = 180°</p>
                                <p><strong>∠AOB + ∠COD = 180°</strong></p>

                                <p className="mt-4">Alternatively:</p>
                                <p>(∠2 + ∠3) + (∠1 + ∠4) = 180°</p>
                                <p><strong>∠BOC + ∠AOD = 180°</strong></p>

                                <p className="mt-4 font-bold text-green-700">Since both opposite pairs sum to 180°, they subtend supplementary angles at the centre. Hence proved.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mt-12">
                <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                    Exercise 11.1 - Areas Related to Circles
                </h3>
                <p className="text-sm italic text-slate-500 mb-6">Unless stated otherwise, use π = 22/7.</p>

                <div className="space-y-8">
                    {/* Q1 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">1.</span> Area of a Sector
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Find the area of a sector of a circle with radius 6 cm if angle of the sector is 60°."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Radius (r) = 6 cm</p>
                                <p>Angle of sector (θ) = 60°</p>
                                <p className="mt-4">Area of sector = (θ / 360°) × πr²</p>
                                <p>= (60° / 360°) × (22 / 7) × (6)²</p>
                                <p>= (1 / 6) × (22 / 7) × 36</p>
                                <p>= (22 × 6) / 7</p>
                                <p>= <span className="font-bold text-green-700">132 / 7 cm²</span> (or approx 18.86 cm²)</p>
                            </div>
                        </div>
                    </div>

                    {/* Q2 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">2.</span> Area of a Quadrant
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Find the area of a quadrant of a circle whose circumference is 22 cm."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Circumference = 2πr = 22 cm</p>
                                <p>2 × (22 / 7) × r = 22</p>
                                <p>(44 / 7) × r = 22</p>
                                <p>r = (22 × 7) / 44 = 7 / 2 cm</p>
                                <p className="mt-4">A quadrant implies the sector angle θ = 90°.</p>
                                <p>Area of quadrant = (1 / 4) × πr²</p>
                                <p>= (1 / 4) × (22 / 7) × (7 / 2) × (7 / 2)</p>
                                <p>= (1 / 4) × 11 × (7 / 2)</p>
                                <p>= <span className="font-bold text-green-700">77 / 8 cm²</span> (or 9.625 cm²)</p>
                            </div>
                        </div>
                    </div>

                    {/* Q3 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">3.</span> Minute Hand of a Clock
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"The length of the minute hand of a clock is 14 cm. Find the area swept by the minute hand in 5 minutes."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Radius (length of minute hand, r) = 14 cm</p>
                                <p>In 60 minutes, the minute hand sweeps 360°.</p>
                                <p>In 1 minute, it sweeps 360° / 60 = 6°.</p>
                                <p>In 5 minutes, it sweeps an angle (θ) = 5 × 6° = 30°.</p>
                                <p className="mt-4">Area swept = Area of sector = (θ / 360°) × πr²</p>
                                <p>= (30° / 360°) × (22 / 7) × (14)²</p>
                                <p>= (1 / 12) × (22 / 7) × 196</p>
                                <p>= (1 / 12) × 22 × 28</p>
                                <p>= (11 × 28) / 6 = 308 / 3</p>
                                <p>= <span className="font-bold text-green-700">154 / 3 cm²</span> (or approx 51.33 cm²)</p>
                            </div>
                        </div>
                    </div>

                    {/* Q4 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">4.</span> Minor and Major Segments (Right Angle)
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A chord of a circle of radius 10 cm subtends a right angle at the centre. Find the area of the corresponding : (i) minor segment (ii) major sector. (Use π = 3.14)"</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <div>
                                    <p>Radius (r) = 10 cm, Angle (θ) = 90°, π = 3.14</p>

                                    <p className="mt-4 font-bold border-b pb-1">(i) Minor segment:</p>
                                    <p>Area of minor sector = (90° / 360°) × 3.14 × 10² = (1 / 4) × 314 = 78.5 cm²</p>
                                    <p>Area of right ∆ formed by chord = 1/2 × base × height = 1/2 × 10 × 10 = 50 cm²</p>
                                    <p>Area of minor segment = Area of minor sector - Area of ∆</p>
                                    <p>= 78.5 - 50 = <span className="text-green-700 font-bold">28.5 cm²</span></p>
                                </div>

                                <div>
                                    <p className="mt-4 font-bold border-b pb-1">(ii) Major sector:</p>
                                    <p>Angle for major sector = 360° - 90° = 270°</p>
                                    <p>Area of major sector = (270° / 360°) × 3.14 × 10²</p>
                                    <p>= (3 / 4) × 314 = 3 × 78.5</p>
                                    <p>= <span className="text-green-700 font-bold">235.5 cm²</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q5 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">5.</span> Arc and Segments (60° Angle)
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"In a circle of radius 21 cm, an arc subtends an angle of 60° at the centre. Find: (i) length of the arc (ii) area of the sector (iii) area of the segment"</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <p>Radius (r) = 21 cm, Angle (θ) = 60°</p>

                                <div>
                                    <p className="font-bold border-b pb-1">(i) Length of the arc:</p>
                                    <p>Length = (θ / 360°) × 2πr</p>
                                    <p>= (60° / 360°) × 2 × (22 / 7) × 21</p>
                                    <p>= (1 / 6) × 2 × 22 × 3</p>
                                    <p>= <span className="text-green-700 font-bold">22 cm</span></p>
                                </div>

                                <div>
                                    <p className="font-bold border-b pb-1">(ii) Area of the sector:</p>
                                    <p>Area = (θ / 360°) × πr²</p>
                                    <p>= (60° / 360°) × (22 / 7) × 21 × 21</p>
                                    <p>= (1 / 6) × 22 × 3 × 21</p>
                                    <p>= 11 × 21 = <span className="text-green-700 font-bold">231 cm²</span></p>
                                </div>

                                <div>
                                    <p className="font-bold border-b pb-1">(iii) Area of the segment:</p>
                                    <p>Since θ = 60° and the adjacent sides are radii (equal), the triangle formed is equilateral.</p>
                                    <p>Area of equilateral ∆ = (√3 / 4) × side²</p>
                                    <p>= (√3 / 4) × 21² = (441√3) / 4 cm²</p>
                                    <p>Area of segment = Area of sector - Area of ∆</p>
                                    <p>= <span className="text-green-700 font-bold">( 231 - (441√3)/4 ) cm²</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q6 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">6.</span> Chord Segments (Radius 15cm)
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A chord of a circle of radius 15 cm subtends an angle of 60° at the centre. Find the areas of the corresponding minor and major segments of the circle. (Use π = 3.14 and √3 = 1.73)"</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <p>Radius (r) = 15 cm, Angle (θ) = 60°.</p>
                                <p>As θ = 60°, the triangle is equilateral. Area of ∆ = (√3 / 4) × 15² = (1.73 / 4) × 225 = 97.3125 cm²</p>
                                <p>Area of minor sector = (60° / 360°) × 3.14 × 15² = (1 / 6) × 3.14 × 225 = 117.75 cm²</p>

                                <div>
                                    <p className="font-bold border-b pb-1">Area of minor segment:</p>
                                    <p>= Area of minor sector - Area of ∆</p>
                                    <p>= 117.75 - 97.3125 = <span className="text-green-700 font-bold">20.4375 cm²</span></p>
                                </div>

                                <div>
                                    <p className="font-bold border-b pb-1">Area of major segment:</p>
                                    <p>Total Area of circle = πr² = 3.14 × 225 = 706.5 cm²</p>
                                    <p>= Area of circle - Area of minor segment</p>
                                    <p>= 706.5 - 20.4375 = <span className="text-green-700 font-bold">686.0625 cm²</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q7 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">7.</span> Segment with 120° Angle
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A chord of a circle of radius 12 cm subtends an angle of 120° at the centre. Find the area of the corresponding segment of the circle. (Use π = 3.14 and √3 = 1.73)"</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Radius (r) = 12 cm, Angle (θ) = 120°.</p>
                                <p className="mt-4 border-b pb-1">Area of Sector:</p>
                                <p>= (120° / 360°) × 3.14 × 12² = (1 / 3) × 3.14 × 144 = 3.14 × 48 = 150.72 cm²</p>

                                <p className="mt-4 border-b pb-1">Area of Triangle:</p>
                                <p>Draw a perpendicular from centre to the chord. It bisects the angle (120° &rarr; 60°) and the chord.</p>
                                <p>In the right triangle formed: height (h) = 12 × cos 60° = 12 × (1/2) = 6 cm</p>
                                <p>Half-chord (x) = 12 × sin 60° = 12 × (√3/2) = 6√3.</p>
                                <p>Base of triangle (full chord) = 2 × 6√3 = 12√3 cm.</p>
                                <p>Area of ∆ = 1/2 × base × height = 1/2 × 12√3 × 6 = 36√3 cm²</p>
                                <p>Using √3 = 1.73: 36 × 1.73 = 62.28 cm²</p>

                                <p className="mt-4 border-b pb-1">Area of Segment:</p>
                                <p>= Area of sector - Area of ∆</p>
                                <p>= 150.72 - 62.28 = <span className="text-green-700 font-bold">88.44 cm²</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q8 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">8.</span> Horse Tied to a Peg
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A horse is tied to a peg at one corner of a square shaped grass field of side 15 m by means of a 5 m long rope. Find (i) grazing area (ii) increase in area if rope were 10m long. (Use π = 3.14)"</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <p>The corner of a square has an angle of 90°. This forms a sector (quadrant).</p>

                                <div>
                                    <p className="font-bold border-b pb-1">(i) Area with 5m rope:</p>
                                    <p>Radius (r) = 5m, Angle (θ) = 90°</p>
                                    <p>Grazing Area = (90° / 360°) × 3.14 × 5²</p>
                                    <p>= (1 / 4) × 3.14 × 25</p>
                                    <p>= 78.5 / 4 = <span className="text-green-700 font-bold">19.625 m²</span></p>
                                </div>

                                <div>
                                    <p className="font-bold border-b pb-1">(ii) Increase in area if rope was 10m:</p>
                                    <p>New Area = (90° / 360°) × 3.14 × 10²</p>
                                    <p>= (1 / 4) × 3.14 × 100 = 314 / 4 = 78.5 m²</p>
                                    <p>Increase in Grazing Area = New Area - Old Area</p>
                                    <p>= 78.5 - 19.625 = <span className="text-green-700 font-bold">58.875 m²</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q9 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">9.</span> Silver Wire Brooch
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A brooch is made with silver wire in the form of a circle with diameter 35 mm. The wire is also used in making 5 diameters which divide the circle into 10 equal sectors. Find: (i) total length of wire (ii) area of each sector."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <p>Diameter (d) = 35 mm, Radius (r) = 35 / 2 mm</p>

                                <div>
                                    <p className="font-bold border-b pb-1">(i) Total length of silver wire required:</p>
                                    <p>Total length = Circumference + Length of 5 diameters</p>
                                    <p>= πd + 5d</p>
                                    <p>= (22 / 7) × 35 + 5 × 35</p>
                                    <p>= 22 × 5 + 175 = 110 + 175 = <span className="text-green-700 font-bold">285 mm</span></p>
                                </div>

                                <div>
                                    <p className="font-bold border-b pb-1">(ii) Area of each sector:</p>
                                    <p>The circle is divided into 10 equal sectors.</p>
                                    <p>Angle of each sector (θ) = 360° / 10 = 36°</p>
                                    <p>Area = (36° / 360°) × πr²</p>
                                    <p>= (1 / 10) × (22 / 7) × (35 / 2) × (35 / 2)</p>
                                    <p>= (1 / 10) × 22 × (5 / 2) × (35 / 2)</p>
                                    <p>= (11 × 5 × 35) / (10 × 2)</p>
                                    <p>= (55 × 35) / 20 = (11 × 35) / 4 = <span className="text-green-700 font-bold">385 / 4 mm²</span> (or 96.25 mm²)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q10 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">10.</span> Umbrella Ribs
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"An umbrella has 8 ribs which are equally spaced. Assuming umbrella to be a flat circle of radius 45 cm, find the area between the two consecutive ribs of the umbrella."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Radius (r) = 45 cm</p>
                                <p>Since there are 8 equally spaced ribs, the circle is divided into 8 equal sectors.</p>
                                <p>Angle between consecutive ribs (θ) = 360° / 8 = 45°</p>
                                <p className="mt-4 border-b pb-1">Area between two consecutive ribs (Area of one sector):</p>
                                <p>= (45° / 360°) × πr²</p>
                                <p>= (1 / 8) × (22 / 7) × (45)²</p>
                                <p>= (1 / 8) × (22 / 7) × 2025</p>
                                <p>= (11 × 2025) / (4 × 7)</p>
                                <p>= <span className="font-bold text-green-700">22275 / 28 cm²</span> (or approx 795.53 cm²)</p>
                            </div>
                        </div>
                    </div>

                    {/* Q11 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">11.</span> Car Wipers
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A car has two wipers which do not overlap. Each wiper has a blade of length 25 cm sweeping through an angle of 115°. Find the total area cleaned at each sweep of the blades."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Radius of sweep (length of blade, r) = 25 cm</p>
                                <p>Angle of sweep (θ) = 115°</p>
                                <p className="mt-4 border-b pb-1">Total Area (for 2 wipers):</p>
                                <p>= 2 × [ (115° / 360°) × πr² ]</p>
                                <p>= 2 × [ (23 / 72) × (22 / 7) × (25)² ]</p>
                                <p>= 2 × [ (23 / 72) × (22 / 7) × 625 ]</p>
                                <p>= [ (23 / 36) × (22 / 7) × 625 ]</p>
                                <p>= [ (23 × 11 × 625) / (18 × 7) ]</p>
                                <p>= <span className="font-bold text-green-700">158125 / 126 cm²</span> (or approx 1254.96 cm²)</p>
                            </div>
                        </div>
                    </div>

                    {/* Q12 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">12.</span> Lighthouse Warning Sector
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"To warn ships for underwater rocks, a lighthouse spreads a red coloured light over a sector of angle 80° to a distance of 16.5 km. Find the area of the sea over which the ships are warned. (Use π = 3.14)"</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Radius (r) = 16.5 km</p>
                                <p>Angle of sector (θ) = 80°</p>
                                <p className="mt-4 border-b pb-1">Area of the sea (Sector Area):</p>
                                <p>= (80° / 360°) × 3.14 × (16.5)²</p>
                                <p>= (2 / 9) × 3.14 × 272.25</p>
                                <p>= (2 / 9) × 854.865</p>
                                <p>= 1709.73 / 9</p>
                                <p>= <span className="text-green-700 font-bold text-xl">189.97 km²</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q13 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">13.</span> Table Cover Designs
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A round table cover has six equal designs. If the radius of the cover is 28 cm, find the cost of making the designs at the rate of ₹ 0.35 per cm². (Use √3 = 1.7)"</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>The six designs are 6 identical circular segments.</p>
                                <p>Radius (r) = 28 cm. Angle subtended by each segment (θ) = 360° / 6 = 60°.</p>

                                <p className="mt-4 border-b pb-1">Area of one design (segment):</p>
                                <p>Since θ = 60°, the triangle is equilateral.</p>
                                <p>= Area of sector - Area of equilateral triangle</p>
                                <p>= (60° / 360°) × (22 / 7) × 28² - (√3 / 4) × 28²</p>
                                <p>= (1 / 6) × (22 / 7) × 784 - (1.7 / 4) × 784</p>
                                <p>= (22 × 112 / 6) - (1.7 × 196)</p>
                                <p>= (2464 / 6) - 333.2</p>
                                <p>= 410.66 - 333.2 = 77.46 cm²  (approx)</p>

                                <p className="mt-4 border-b pb-1">Cost Calculation:</p>
                                <p>Total Area for 6 designs = 6 × 77.46 = 464.76 cm²</p>
                                <p>Total Cost = Total Area × Rate = 464.76 × 0.35</p>
                                <p>= <span className="font-bold text-green-700 text-xl">₹ 162.68</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q14 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">14.</span> Multiple Choice
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Tick the correct answer in the following: Area of a sector of angle p (in degrees) of a circle with radius R is:"</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>We know Area of a sector = (θ / 360°) × πr²</p>
                                <p>Given θ = p, and r = R.</p>
                                <p>Area = (p / 360) × πR²</p>
                                <p className="mt-4 text-slate-600">Looking at the options, if we multiply numerator and denominator by 2:</p>
                                <p>Area = (p / 720) × 2πR²</p>
                                <p className="mt-4 font-bold text-blue-800">Correct Option: (D) (p / 720) × 2πR²</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mt-12">
                <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                    Exercise 12.2 - Surface Areas and Volumes
                </h3>
                <p className="text-sm italic text-slate-500 mb-6">Unless stated otherwise, take π = 22/7.</p>

                <div className="space-y-8">
                    {/* Q1 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">1.</span> Solid on a Hemisphere
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A solid is in the shape of a cone standing on a hemisphere with both their radii being equal to 1 cm and the height of the cone is equal to its radius. Find the volume of the solid in terms of π."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Radius of cone (r) = 1 cm</p>
                                <p>Height of cone (h) = r = 1 cm</p>
                                <p>Radius of hemisphere (r) = 1 cm</p>
                                <p className="mt-4 border-b pb-1">Total Volume of solid:</p>
                                <p>= Volume of cone + Volume of hemisphere</p>
                                <p>= 1/3 πr²h + 2/3 πr³</p>
                                <p>= 1/3 π(1)²(1) + 2/3 π(1)³</p>
                                <p>= 1/3 π + 2/3 π</p>
                                <p>= 3/3 π = <span className="font-bold text-green-700">π cm³</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q2 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">2.</span> Engineering Model
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Rachel, an engineering student, was asked to make a model shaped like a cylinder with two cones attached at its two ends. The diameter of the model is 3 cm and its length is 12 cm. If each cone has a height of 2 cm, find the volume of air contained in the model."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Diameter = 3 cm  &rarr;  Radius (r) = 3/2 cm = 1.5 cm</p>
                                <p>Total length = 12 cm</p>
                                <p>Height of each cone (h₁) = 2 cm</p>
                                <p>Height of cylinder (h₂) = Total length - (2 × height of cone)</p>
                                <p>h₂ = 12 - (2 × 2) = 12 - 4 = 8 cm</p>
                                <p className="mt-4 border-b pb-1">Total Volume (Volume of air):</p>
                                <p>= Volume of cylinder + 2 × Volume of one cone</p>
                                <p>= πr²h₂ + 2 × (1/3 πr²h₁)</p>
                                <p>= πr² [h₂ + 2/3 h₁]</p>
                                <p>= (22/7) × (1.5)² × [8 + 2/3 (2)]</p>
                                <p>= (22/7) × 2.25 × [8 + 4/3]</p>
                                <p>= (22/7) × 2.25 × [(24 + 4)/3]</p>
                                <p>= (22/7) × 2.25 × (28/3)</p>
                                <p>Since 28/7 = 4, and 2.25/3 = 0.75:</p>
                                <p>= 22 × 0.75 × 4 = 22 × 3 = <span className="font-bold text-green-700">66 cm³</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q3 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">3.</span> Gulab Jamun Syrup Volume
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A gulab jamun, contains sugar syrup up to about 30% of its volume. Find approximately how much syrup would be found in 45 gulab jamuns, each shaped like a cylinder with two hemispherical ends with length 5 cm and diameter 2.8 cm."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Diameter = 2.8 cm  &rarr;  Radius (r) = 1.4 cm</p>
                                <p>Total length of gulab jamun = 5 cm</p>
                                <p>Length of cylindrical part (h) = 5 - (1.4 + 1.4) = 5 - 2.8 = 2.2 cm</p>

                                <p className="mt-4 border-b pb-1">Volume of one gulab jamun:</p>
                                <p>= Volume of cylinder + 2 × Volume of hemisphere</p>
                                <p>= πr²h + 2 × (2/3 πr³)</p>
                                <p>= πr² [h + 4/3 r]</p>
                                <p>= (22/7) × (1.4)² × [2.2 + 4/3 (1.4)]</p>
                                <p>= (22/7) × 1.96 × [2.2 + 5.6/3]</p>
                                <p>= (22/7) × 1.96 × [(6.6 + 5.6)/3]</p>
                                <p>= (22/7) × 1.96 × (12.2/3)</p>
                                <p>= 43.12/7 × 12.2/3 = 6.16 × 4.067 ≈ 25.05 cm³</p>

                                <p className="mt-4 border-b pb-1">Total syrup volume:</p>
                                <p>Volume of 45 gulab jamuns = 45 × 25.05 ≈ 1127.25 cm³</p>
                                <p>Syrup volume = 30% of total volume = 0.30 × 1127.25</p>
                                <p>≈ 338.175 cm³ &rarr; <span className="font-bold text-green-700">338 cm³ (Approx)</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q4 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">4.</span> Pen Stand Wood Volume
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A pen stand made of wood is in the shape of a cuboid with four conical depressions to hold pens. The dimensions of the cuboid are 15 cm by 10 cm by 3.5 cm. The radius of each of the depressions is 0.5 cm and the depth is 1.4 cm. Find the volume of wood in the entire stand."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Volume of cuboid = length × width × height</p>
                                <p>V_cuboid = 15 × 10 × 3.5 = 525 cm³</p>

                                <p className="mt-4 border-b pb-1">Volume of one conical depression:</p>
                                <p>Radius (r) = 0.5 cm = 1/2 cm, Depth/Height (h) = 1.4 cm</p>
                                <p>V_cone = 1/3 πr²h</p>
                                <p>= 1/3 × (22/7) × (1/2)² × 1.4</p>
                                <p>= 1/3 × (22/7) × (1/4) × (14/10)</p>
                                <p>= 1/3 × 11/14 × 14/10 = 11/30 cm³ ≈ 0.366 cm³</p>

                                <p className="mt-4 border-b pb-1">Volume of wood:</p>
                                <p>Volume of 4 cones = 4 × (11/30) = 44/30 = 22/15 ≈ 1.47 cm³</p>
                                <p>Volume of wood = V_cuboid - Volume of 4 cones</p>
                                <p>= 525 - 1.47 = <span className="font-bold text-green-700">523.53 cm³</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q5 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">5.</span> Inverted Cone Vessel
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A vessel is in the form of an inverted cone. Its height is 8 cm and the radius of its top, which is open, is 5 cm. It is filled with water up to the brim. When lead shots, each of which is a sphere of radius 0.5 cm are dropped into the vessel, one-fourth of the water flows out. Find the number of lead shots dropped in the vessel."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p className="mt-2 border-b pb-1">Volume of water in the conical vessel:</p>
                                <p>Radius (r) = 5 cm, Height (h) = 8 cm</p>
                                <p>V_cone = 1/3 πr²h = 1/3 × π × (5)² × 8 = 200/3 π cm³</p>

                                <p className="mt-4 border-b pb-1">Volume of water displaced:</p>
                                <p>= 1/4 of total volume = 1/4 × (200/3 π) = 50/3 π cm³</p>

                                <p className="mt-4 border-b pb-1">Volume of one lead shot (sphere):</p>
                                <p>Radius (r) = 0.5 cm = 1/2 cm</p>
                                <p>V_sphere = 4/3 πr³ = 4/3 × π × (1/2)³ = 4/3 × π × 1/8 = 1/6 π cm³</p>

                                <p className="mt-4 border-b pb-1">Number of lead shots:</p>
                                <p>= (Volume of water displaced) / (Volume of one lead shot)</p>
                                <p>= (50/3 π) / (1/6 π)</p>
                                <p>= (50/3) × (6/1) = 50 × 2 = <span className="font-bold text-green-700">100</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q6 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">6.</span> Solid Iron Pole
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A solid iron pole consists of a cylinder of height 220 cm and base diameter 24 cm, which is surmounted by another cylinder of height 60 cm and radius 8 cm. Find the mass of the pole, given that 1 cm³ of iron has approximately 8g mass. (Use π = 3.14)"</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p className="mt-2 border-b pb-1">Volume of lower cylinder:</p>
                                <p>Diameter = 24 cm &rarr; Radius (R) = 12 cm. Height (H) = 220 cm</p>
                                <p>V₁ = πR²H = 3.14 × (12)² × 220 = 3.14 × 144 × 220 = 3.14 × 31680 = 99475.2 cm³</p>

                                <p className="mt-4 border-b pb-1">Volume of upper cylinder:</p>
                                <p>Radius (r) = 8 cm. Height (h) = 60 cm</p>
                                <p>V₂ = πr²h = 3.14 × (8)² × 60 = 3.14 × 64 × 60 = 3.14 × 3840 = 12057.6 cm³</p>

                                <p className="mt-4 border-b pb-1">Total Volume:</p>
                                <p>= 99475.2 + 12057.6 = 111532.8 cm³</p>

                                <p className="mt-4 border-b pb-1">Total Mass:</p>
                                <p>Mass = Volume × Density = 111532.8 × 8 g</p>
                                <p>= 892262.4 g = <span className="font-bold text-green-700">892.26 kg</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q7 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">7.</span> Solid Immersed in Cylinder
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A solid consisting of a right circular cone of height 120 cm and radius 60 cm standing on a hemisphere of radius 60 cm is placed upright in a right circular cylinder full of water such that it touches the bottom. Find the volume of water left in the cylinder, if the radius of the cylinder is 60 cm and its height is 180 cm."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p className="mt-2 border-b pb-1">Volume of the solid (cone + hemisphere):</p>
                                <p>Radius of cone/hemisphere (r) = 60 cm</p>
                                <p>Height of cone (h) = 120 cm</p>
                                <p>V_solid = 1/3 πr²h + 2/3 πr³</p>
                                <p>= 1/3 π(60)²(120) + 2/3 π(60)³</p>
                                <p>= 1/3 π(3600)(120) + 2/3 π(216000)</p>
                                <p>= 144000π + 144000π = 288000π cm³</p>

                                <p className="mt-4 border-b pb-1">Volume of cylinder (Initial amount of water):</p>
                                <p>Radius (R) = 60 cm, Height (H) = 180 cm</p>
                                <p>V_cylinder = πR²H = π(60)²(180) = π × 3600 × 180 = 648000π cm³</p>

                                <p className="mt-4 border-b pb-1">Volume of water left:</p>
                                <p>= Initial Volume - Displaced Volume</p>
                                <p>= 648000π - 288000π = 360000π cm³</p>
                                <p>= 360000 × (22/7) = 7920000 / 7 ≈ 1131428.57 cm³</p>
                                <p>To convert cm³ to m³, divide by 1,000,000:</p>
                                <p>volume in m³ = <span className="font-bold text-green-700">1.131 m³</span> (approx)</p>
                            </div>
                        </div>
                    </div>

                    {/* Q8 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">8.</span> Spherical Glass Vessel
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A spherical glass vessel has a cylindrical neck 8 cm long, 2 cm in diameter; the diameter of the spherical part is 8.5 cm. By measuring the amount of water it holds, a child finds its volume to be 345 cm³. Check whether she is correct. (Use π = 3.14)"</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p className="mt-2 border-b pb-1">Volume of cylindrical neck:</p>
                                <p>Diameter = 2 cm &rarr; Radius (r) = 1 cm. Height (h) = 8 cm</p>
                                <p>V_cyl = πr²h = 3.14 × (1)² × 8 = 3.14 × 8 = 25.12 cm³</p>

                                <p className="mt-4 border-b pb-1">Volume of spherical part:</p>
                                <p>Diameter = 8.5 cm &rarr; Radius (R) = 8.5 / 2 = 4.25 cm</p>
                                <p>V_sph = 4/3 πR³ = 4/3 × 3.14 × (4.25)³</p>
                                <p>= 4/3 × 3.14 × 76.765625 ≈ 321.39 cm³</p>

                                <p className="mt-4 border-b pb-1">Total Volume:</p>
                                <p>= V_cyl + V_sph = 25.12 + 321.39 = <span className="font-bold text-green-700">346.51 cm³</span></p>
                                <p className="mt-4 text-red-700 font-bold">Since the calculated volume is ~346.51 cm³ and not 345 cm³, the child is incorrect.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
