import React from 'react';

export default function Exercises() {
    return (
        <div className="space-y-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Exercise 6.3</h2>

            {/* Question 1 */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                    1. State which pairs of triangles in Fig. 6.34 are similar. Write the similarity criterion used and write the pairs of similar triangles in symbolic form:
                </h3>

                <div className="space-y-6">
                    {/* Q1 (i) */}
                    <div className="border border-slate-200 rounded-lg bg-slate-50 p-5 shadow-sm">
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <span className="text-blue-700">(i)</span> ΔABC and ΔPQR
                        </h4>
                        <div className="font-serif text-slate-700 space-y-2 bg-white p-4 rounded border">
                            <p>In ΔABC and ΔPQR:</p>
                            <p>∠A = ∠P = 60°</p>
                            <p>∠B = ∠Q = 80°</p>
                            <p>∠C = ∠R = 40°</p>
                            <p className="border-t pt-2 mt-2 font-bold text-green-700">Therefore, ΔABC ~ ΔPQR (by AAA similarity criterion).</p>
                        </div>
                    </div>

                    {/* Q1 (ii) */}
                    <div className="border border-slate-200 rounded-lg bg-slate-50 p-5 shadow-sm">
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <span className="text-blue-700">(ii)</span> ΔABC and ΔPQR
                        </h4>
                        <div className="font-serif text-slate-700 space-y-2 bg-white p-4 rounded border">
                            <p>In ΔABC and ΔQRP:</p>
                            <p>AB/QR = 2/4 = 1/2</p>
                            <p>BC/RP = 2.5/5 = 1/2</p>
                            <p>CA/PQ = 3/6 = 1/2</p>
                            <p>So, AB/QR = BC/RP = CA/PQ</p>
                            <p className="border-t pt-2 mt-2 font-bold text-green-700">Therefore, ΔABC ~ ΔQRP (by SSS similarity criterion).</p>
                        </div>
                    </div>

                    {/* Q1 (iii) */}
                    <div className="border border-slate-200 rounded-lg bg-slate-50 p-5 shadow-sm">
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <span className="text-blue-700">(iii)</span> ΔLMP and ΔDEF
                        </h4>
                        <div className="font-serif text-slate-700 space-y-2 bg-white p-4 rounded border">
                            <p>In ΔLMP and ΔDEF:</p>
                            <p>MP/DE = 2/4 = 1/2</p>
                            <p>PL/DF = 3/6 = 1/2</p>
                            <p>LM/EF = 2.7/5 = 27/50</p>
                            <p>Since LM/EF ≠ MP/DE = PL/DF</p>
                            <p className="border-t pt-2 mt-2 font-bold text-red-700">Therefore, the triangles are NOT similar.</p>
                        </div>
                    </div>

                    {/* Q1 (iv) */}
                    <div className="border border-slate-200 rounded-lg bg-slate-50 p-5 shadow-sm">
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <span className="text-blue-700">(iv)</span> ΔMNL and ΔPQR
                        </h4>
                        <div className="font-serif text-slate-700 space-y-2 bg-white p-4 rounded border">
                            <p>In ΔMNL and ΔPQR (or specifically ΔQPR):</p>
                            <p>∠M = ∠Q = 70°</p>
                            <p>MN/QP = 2.5/5 = 1/2</p>
                            <p>ML/QR = 5/10 = 1/2</p>
                            <p>So, MN/QP = ML/QR and the included angle ∠M = ∠Q.</p>
                            <p className="border-t pt-2 mt-2 font-bold text-green-700">Therefore, ΔNML ~ ΔPQR (by SAS similarity criterion).</p>
                        </div>
                    </div>

                    {/* Q1 (v) */}
                    <div className="border border-slate-200 rounded-lg bg-slate-50 p-5 shadow-sm">
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <span className="text-blue-700">(v)</span> ΔABC and ΔDEF
                        </h4>
                        <div className="font-serif text-slate-700 space-y-2 bg-white p-4 rounded border">
                            <p>In ΔABC, AB=2.5, BC=3, and ∠A=80°. The contained angle is ∠B, which is unknown.</p>
                            <p>In ΔDEF, DF=5, EF=6, and ∠F=80°. The contained angle is ∠F.</p>
                            <p>Since ∠A = 80° is NOT the angle inscribed between sides AB and BC, we cannot apply SAS.</p>
                            <p className="border-t pt-2 mt-2 font-bold text-red-700">Therefore, the triangles are NOT similar.</p>
                        </div>
                    </div>

                    {/* Q1 (vi) */}
                    <div className="border border-slate-200 rounded-lg bg-slate-50 p-5 shadow-sm">
                        <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                            <span className="text-blue-700">(vi)</span> ΔDEF and ΔPQR
                        </h4>
                        <div className="font-serif text-slate-700 space-y-2 bg-white p-4 rounded border">
                            <p>In ΔDEF, sum of angles = 180°.</p>
                            <p>∠F = 180° - (70° + 80°) = 30°</p>
                            <p>In ΔPQR, sum of angles = 180°.</p>
                            <p>∠P = 180° - (80° + 30°) = 70°</p>
                            <p>Now comparing ΔDEF and ΔPQR:</p>
                            <p>∠D = ∠P = 70°</p>
                            <p>∠E = ∠Q = 80°</p>
                            <p>∠F = ∠R = 30°</p>
                            <p className="border-t pt-2 mt-2 font-bold text-green-700">Therefore, ΔDEF ~ ΔPQR (by AAA similarity criterion).</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Questions 2 - 8 */}
            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mt-12">
                <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                    Proofs and Calculations (Q2 - Q8)
                </h3>

                <div className="space-y-8">
                    {/* Q2 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">2.</span> Angle Calculations in Intersecting Lines
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"In Fig. 6.35, ΔODC ~ ΔOBA, ∠BOC = 125° and ∠CDO = 70°. Find ∠DOC, ∠DCO and ∠OAB."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-2">
                                <p><strong>Find ∠DOC:</strong> DOB is a straight line, so angles on straight line sum to 180°.</p>
                                <p>∠DOC + ∠COB = 180° &rarr; ∠DOC + 125° = 180° &rarr; <span className="font-bold text-blue-700">∠DOC = 55°</span></p>

                                <p className="mt-4"><strong>Find ∠DCO:</strong> In ΔDOC, sum of angles is 180°.</p>
                                <p>∠DCO + ∠CDO + ∠DOC = 180°</p>
                                <p>∠DCO + 70° + 55° = 180° &rarr; ∠DCO + 125° = 180° &rarr; <span className="font-bold text-blue-700">∠DCO = 55°</span></p>

                                <p className="mt-4"><strong>Find ∠OAB:</strong> Given ΔODC ~ ΔOBA.</p>
                                <p>Corresponding angles of similar triangles are equal. Therefore, ∠OAB = ∠OCD (which is ∠DCO).</p>
                                <p><span className="font-bold text-blue-700">∠OAB = 55°</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q3 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">3.</span> Diagonals of a Trapezium
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Diagonals AC and BD of a trapezium ABCD with AB || DC intersect each other at the point O. Using a similarity criterion for two triangles, show that OA/OC = OB/OD."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-2">
                                <p>In ΔOAB and ΔOCD:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>∠AOB = ∠COD (Vertically opposite angles)</li>
                                    <li>∠OAB = ∠OCD (Alternate interior angles, since AB || DC and AC is transversal)</li>
                                    <li>∠OBA = ∠ODC (Alternate interior angles, since AB || DC and BD is transversal)</li>
                                </ul>
                                <p className="mt-2">Therefore, <span className="font-bold text-blue-700">ΔOAB ~ ΔOCD (By AAA similarity criterion)</span>.</p>
                                <p className="mt-2">Since corresponding sides of similar triangles are proportional:</p>
                                <p className="font-bold bg-blue-50 px-3 py-2 inline-block rounded">OA / OC = OB / OD</p>
                                <p className="italic text-green-700">Hence Proved.</p>
                            </div>
                        </div>
                    </div>

                    {/* Q4 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">4.</span> Ratio and Equal Angles
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"In Fig. 6.36, QR/QS = QT/PR and ∠1 = ∠2. Show that ΔPQS ~ ΔTQR."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-2">
                                <p>Given: ∠1 = ∠2. In ΔPQR, sides opposite to equal angles are equal.</p>
                                <p>Therefore, <span className="font-bold text-blue-700">PR = PQ</span>. &nbsp;(Equation 1)</p>
                                <p className="mt-3">Given ratio: QR / QS = QT / PR</p>
                                <p>Substitute PR with PQ from Eq 1:</p>
                                <div className="ml-4 border-l-2 border-slate-300 pl-4 py-2 bg-slate-50">
                                    <p className="font-bold">QR / QS = QT / PQ</p>
                                    <p>Rearranging: PQ / QS = QT / QR</p>
                                </div>
                                <p className="mt-3">Now consider ΔPQS and ΔTQR:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>PQ / QS = QT / QR (Proved above)</li>
                                    <li>∠PQS = ∠TQR (Common angle, both are ∠1)</li>
                                </ul>
                                <p className="mt-2 text-green-700 font-bold border-t pt-2">Therefore, ΔPQS ~ ΔTQR (by SAS similarity criterion).</p>
                                <p className="italic text-green-700">Hence Proved.</p>
                            </div>
                        </div>
                    </div>

                    {/* Q5 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">5.</span> Points on Sides of a Triangle
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"S and T are points on sides PR and QR of ΔPQR such that ∠P = ∠RTS. Show that ΔRPQ ~ ΔRTS."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-2">
                                <p>In ΔRPQ and ΔRTS:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>∠RPQ (i.e. ∠P) = ∠RTS (Given)</li>
                                    <li>∠PRQ = ∠SRT (Common angle ∠R)</li>
                                </ul>
                                <p className="mt-2 text-green-700 font-bold border-t pt-2">Therefore, ΔRPQ ~ ΔRTS (by AA similarity criterion).</p>
                                <p className="italic text-green-700">Hence Proved.</p>
                            </div>
                        </div>
                    </div>

                    {/* Q6 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">6.</span> Congruent to Similar
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"In Fig. 6.37, if ΔABE ≅ ΔACD, show that ΔADE ~ ΔABC."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-2">
                                <p>Given ΔABE ≅ ΔACD (Congruent). By CPCT (Corresponding Parts of Congruent Triangles):</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>AB = AC &rarr; <span className="font-bold">AB / AC = 1</span>  (Eq 1)</li>
                                    <li>AE = AD &rarr; <span className="font-bold">AD / AE = 1</span>  (Eq 2)</li>
                                </ul>
                                <p className="mt-3">From Eq 1 and Eq 2:</p>
                                <p className="font-bold text-blue-700">AB / AC = AD / AE</p>
                                <p>Rearranging terms: <span className="font-bold">AD / AB = AE / AC</span></p>

                                <p className="mt-4">Now in ΔADE and ΔABC:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>AD / AB = AE / AC (Proved above)</li>
                                    <li>∠DAE = ∠BAC (Common angle ∠A)</li>
                                </ul>
                                <p className="mt-2 text-green-700 font-bold border-t pt-2">Therefore, ΔADE ~ ΔABC (by SAS similarity criterion).</p>
                                <p className="italic text-green-700">Hence Proved.</p>
                            </div>
                        </div>
                    </div>

                    {/* Q7 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">7.</span> Intersecting Altitudes
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"In Fig. 6.38, altitudes AD and CE of ΔABC intersect each other at the point P. Show that (i) ΔAEP ~ ΔCDP, (ii) ΔABD ~ ΔCBE, (iii) ΔAEP ~ ΔADB, (iv) ΔPDC ~ ΔBEC."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-6">
                                <div>
                                    <p className="font-bold text-blue-800 border-b pb-1 mb-2">(i) ΔAEP ~ ΔCDP</p>
                                    <p>In ΔAEP and ΔCDP:</p>
                                    <p>∠AEP = ∠CDP = 90° (Since AD & CE are altitudes)</p>
                                    <p>∠APE = ∠CPD (Vertically opposite angles)</p>
                                    <p className="text-green-700 font-bold">ΔAEP ~ ΔCDP (AA similarity)</p>
                                </div>

                                <div>
                                    <p className="font-bold text-blue-800 border-b pb-1 mb-2">(ii) ΔABD ~ ΔCBE</p>
                                    <p>In ΔABD and ΔCBE:</p>
                                    <p>∠ADB = ∠CEB = 90°</p>
                                    <p>∠ABD = ∠CBE (Common angle ∠B)</p>
                                    <p className="text-green-700 font-bold">ΔABD ~ ΔCBE (AA similarity)</p>
                                </div>

                                <div>
                                    <p className="font-bold text-blue-800 border-b pb-1 mb-2">(iii) ΔAEP ~ ΔADB</p>
                                    <p>In ΔAEP and ΔADB:</p>
                                    <p>∠AEP = ∠ADB = 90°</p>
                                    <p>∠PAE = ∠DAB (Common angle ∠A)</p>
                                    <p className="text-green-700 font-bold">ΔAEP ~ ΔADB (AA similarity)</p>
                                </div>

                                <div>
                                    <p className="font-bold text-blue-800 border-b pb-1 mb-2">(iv) ΔPDC ~ ΔBEC</p>
                                    <p>In ΔPDC and ΔBEC:</p>
                                    <p>∠PDC = ∠BEC = 90°</p>
                                    <p>∠PCD = ∠BCE (Common angle ∠C)</p>
                                    <p className="text-green-700 font-bold">ΔPDC ~ ΔBEC (AA similarity)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q8 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">8.</span> Parallelogram Produced Side
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"E is a point on the side AD produced of a parallelogram ABCD and BE intersects CD at F. Show that ΔABE ~ ΔCFB."</p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-2">
                                <p>In parallelogram ABCD, opposite angles are equal:</p>
                                <p>Therefore, <span className="font-bold text-blue-700">∠BAE (i.e., ∠A) = ∠FCB (i.e., ∠C)</span>.</p>

                                <p className="mt-3">Also, AD is parallel to BC (opposite sides of ||gram). AD is produced to E, so AE || BC.</p>
                                <p>Consider transversal BE intersecting parallel lines AE and BC.</p>
                                <p>Therefore, Alternate interior angles are equal:</p>
                                <p><span className="font-bold text-blue-700">∠AEB = ∠CBF</span>.</p>

                                <p className="mt-4">Now in ΔABE and ΔCFB:</p>
                                <ul className="list-disc pl-6 space-y-1">
                                    <li>∠BAE = ∠FCB (Proved)</li>
                                    <li>∠AEB = ∠CBF (Proved)</li>
                                </ul>
                                <p className="mt-2 text-green-700 font-bold border-t pt-2">Therefore, ΔABE ~ ΔCFB (by AA similarity criterion).</p>
                                <p className="italic text-green-700">Hence Proved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Q9 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden mt-8">
                <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                    <span className="text-blue-700">9.</span> Right Angled Triangles
                </div>
                <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                    <p className="italic mb-2">"In Fig. 6.39, ABC and AMP are two right triangles, right angled at B and M respectively. Prove that: (i) ΔABC ~ ΔAMP, (ii) CA/PA = BC/MP"</p>
                    <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                        <div>
                            <p className="font-bold text-blue-800 border-b pb-1 mb-2">(i) Proving ΔABC ~ ΔAMP</p>
                            <p>In ΔABC and ΔAMP:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>∠ABC = ∠AMP = 90° (Given)</li>
                                <li>∠BAC = ∠MAP (Common angle ∠A)</li>
                            </ul>
                            <p className="mt-2 text-green-700 font-bold border-t pt-2">Therefore, ΔABC ~ ΔAMP (by AA similarity criterion).</p>
                        </div>

                        <div>
                            <p className="font-bold text-blue-800 border-b pb-1 mb-2">(ii) Proving CA/PA = BC/MP</p>
                            <p>Since it is proved in (i) that ΔABC ~ ΔAMP, and we know that corresponding sides of similar triangles are proportional:</p>
                            <p className="font-bold bg-blue-50 px-3 py-2 inline-block rounded">CA / PA = BC / MP = AB / AM</p>
                            <p className="italic text-green-700">Hence Proved.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Q10 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                    <span className="text-blue-700">10.</span> Angle Bisectors
                </div>
                <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                    <p className="italic mb-2">"CD and GH are respectively the bisectors of ∠ACB and ∠EGF such that D and H lie on sides AB and FE of ΔABC and ΔEFG respectively. If ΔABC ~ ΔFEG, show that: (i) CD/GH = AC/FG, (ii) ΔDCB ~ ΔHGE, (iii) ΔDCA ~ ΔHGF"</p>
                    <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-6">
                        <div>
                            <p className="font-bold text-blue-800 border-b pb-1 mb-2">Given Data Preparation</p>
                            <p>Given ΔABC ~ ΔFEG. Thus:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>∠A = ∠F, ∠B = ∠E, ∠C = ∠G</li>
                            </ul>
                            <p>Since CD and GH bisect ∠C and ∠G respectively, and ∠C = ∠G:</p>
                            <p className="mt-1 font-bold">∠ACD = ∠BCD = ∠FGH = ∠EGH</p>
                        </div>

                        <div>
                            <p className="font-bold text-blue-800 border-b pb-1 mb-2">(iii) Proving ΔDCA ~ ΔHGF (Easier to do first)</p>
                            <p>In ΔDCA and ΔHGF:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>∠A = ∠F (Because ΔABC ~ ΔFEG)</li>
                                <li>∠ACD = ∠FGH (Proved above)</li>
                            </ul>
                            <p className="mt-2 text-green-700 font-bold border-t pt-2">Therefore, ΔDCA ~ ΔHGF (by AA similarity criterion).</p>
                        </div>

                        <div>
                            <p className="font-bold text-blue-800 border-b pb-1 mb-2">(i) Proving CD/GH = AC/FG</p>
                            <p>Since ΔDCA ~ ΔHGF (proved exactly in step iii):</p>
                            <p>Their corresponding sides are proportional:</p>
                            <p className="font-bold bg-blue-50 px-3 py-2 inline-block rounded">CD / GH = AC / FG</p>
                        </div>

                        <div>
                            <p className="font-bold text-blue-800 border-b pb-1 mb-2">(ii) Proving ΔDCB ~ ΔHGE</p>
                            <p>In ΔDCB and ΔHGE:</p>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>∠B = ∠E (Because ΔABC ~ ΔFEG)</li>
                                <li>∠BCD = ∠EGH (Proved in data preparation)</li>
                            </ul>
                            <p className="mt-2 text-green-700 font-bold border-t pt-2">Therefore, ΔDCB ~ ΔHGE (by AA similarity criterion).</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Q11 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                    <span className="text-blue-700">11.</span> Isosceles Triangle Altitudes
                </div>
                <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                    <p className="italic mb-2">"In Fig. 6.40, E is a point on side CB produced of an isosceles triangle ABC with AB = AC. If AD ⊥ BC and EF ⊥ AC, prove that ΔABD ~ ΔECF."</p>
                    <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-2">
                        <p>Given ΔABC is an isosceles triangle with AB = AC.</p>
                        <p>Angles opposite to equal sides are equal:</p>
                        <p className="font-bold">Therefore, ∠B (∠ABD) = ∠C (∠ECF).</p>

                        <p className="mt-4">Now in ΔABD and ΔECF:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>∠ABD = ∠ECF (Proved above)</li>
                            <li>∠ADB = ∠EFC = 90° (Because AD ⊥ BC and EF ⊥ AC)</li>
                        </ul>
                        <p className="mt-2 text-green-700 font-bold border-t pt-2">Therefore, ΔABD ~ ΔECF (by AA similarity criterion).</p>
                        <p className="italic text-green-700">Hence Proved.</p>
                    </div>
                </div>
            </div>

            {/* Q12 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                    <span className="text-blue-700">12.</span> Proportional Sides and Medians
                </div>
                <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                    <p className="italic mb-2">"Sides AB and BC and median AD of a triangle ABC are respectively proportional to sides PQ and QR and median PM of ΔPQR (see Fig. 6.41). Show that ΔABC ~ ΔPQR."</p>
                    <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-2">
                        <p>Given: AB / PQ = BC / QR = AD / PM</p>
                        <p>Since AD and PM are medians, they bisect BC and QR respectively.</p>
                        <p>So, BC = 2BD and QR = 2QM.</p>
                        <p className="mt-3">Substituting this into the given ratio:</p>
                        <p>AB / PQ = (2BD) / (2QM) = AD / PM</p>
                        <p className="font-bold">AB / PQ = BD / QM = AD / PM</p>

                        <p className="mt-3">Looking at the small triangles ΔABD and ΔPQM:</p>
                        <p>Since all corresponding three sides are proportional, <span className="text-blue-700 font-bold">ΔABD ~ ΔPQM (by SSS similarity)</span>.</p>
                        <p>Therefore, their corresponding angles are equal, specifically <span className="font-bold">∠B = ∠Q</span>.</p>

                        <p className="mt-4 border-t pt-3">Now consider the large triangles ΔABC and ΔPQR:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>AB / PQ = BC / QR (Given)</li>
                            <li>∠B = ∠Q (Proved above)</li>
                        </ul>
                        <p className="mt-2 text-green-700 font-bold border-t pt-2">Therefore, ΔABC ~ ΔPQR (by SAS similarity criterion).</p>
                        <p className="italic text-green-700">Hence Proved.</p>
                    </div>
                </div>
            </div>

            {/* Q13 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                    <span className="text-blue-700">13.</span> Points on Triangle Sides
                </div>
                <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                    <p className="italic mb-2">"D is a point on the side BC of a triangle ABC such that ∠ADC = ∠BAC. Show that CA² = CB.CD."</p>
                    <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-2">
                        <p>In ΔABC and ΔDAC:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>∠BAC = ∠ADC (Given)</li>
                            <li>∠BCA = ∠DCA (Common angle ∠C)</li>
                        </ul>
                        <p className="mt-2 text-blue-700 font-bold">Therefore, ΔABC ~ ΔDAC (by AA similarity criterion).</p>

                        <p className="mt-4 border-t pt-3">Since the triangles are similar, their corresponding sides are proportional:</p>
                        <div className="pl-4 py-2 border-l-2 bg-slate-50 font-bold">
                            <p>CA / CD = CB / CA</p>
                        </div>
                        <p className="mt-2">Cross-multiplying gives:</p>
                        <p className="font-bold text-xl text-green-700">CA² = CB · CD</p>
                        <p className="italic text-green-700">Hence Proved.</p>
                    </div>
                </div>
            </div>

            {/* Q14 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                    <span className="text-blue-700">14.</span> Harder Proportionality Theorem
                </div>
                <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                    <p className="italic mb-2">"Sides AB and AC and median AD of a triangle ABC are respectively proportional to sides PQ and PR and median PM of another triangle PQR. Show that ΔABC ~ ΔPQR."</p>
                    <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-2">
                        <p className="italic mb-2 border-b pb-2">Note: This is an involved construction proof unlike question 12.</p>
                        <p><strong>Construction:</strong> Produce AD to E such that AD = DE, and connect CE. Produce PM to L such that PM = ML, and connect RL.</p>

                        <p className="mt-4"><strong>Step 1: Prove ΔABD ≅ ΔECD and ΔPQM ≅ ΔLRM (Congruence)</strong></p>
                        <p>In ΔABD and ΔECD: BD = DC (median), AD = DE (construction), ∠ADB = ∠EDC (vert. opp). Thus ΔABD ≅ ΔECD (SAS).</p>
                        <p>By CPCT: AB = CE.</p>
                        <p>Similarly for ΔPQM and ΔLRM: PQ = LR.</p>

                        <p className="mt-4"><strong>Step 2: Prove ΔACE ~ ΔPRL</strong></p>
                        <p>Given: AB/PQ = AC/PR = AD/PM. Substitute AB with CE, PQ with LR, AD with AE/2, and PM with PL/2.</p>
                        <p>CE/LR = AC/PR = (AE/2)/(PL/2) = AE/PL.</p>
                        <p>Since all 3 sides are proportional, ΔACE ~ ΔPRL (SSS similarity).</p>

                        <p className="mt-4"><strong>Step 3: Combine findings</strong></p>
                        <p>Since ΔACE ~ ΔPRL, corresponding angles are equal: ∠CAE = ∠RPL. (Eq 1)</p>
                        <p>Similarly, we can prove ΔABE ~ ΔPQL, giving ∠BAE = ∠QPL. (Eq 2)</p>
                        <p>Adding Eq 1 and Eq 2:</p>
                        <p className="font-bold">∠CAE + ∠BAE = ∠RPL + ∠QPL</p>
                        <p className="font-bold text-blue-700">∠A = ∠P</p>

                        <p className="mt-4 border-t pt-3"><strong>Final Step: ΔABC ~ ΔPQR</strong></p>
                        <p>In ΔABC and ΔPQR:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>AB/PQ = AC/PR (Given)</li>
                            <li>∠A = ∠P (Proved)</li>
                        </ul>
                        <p className="font-bold text-green-700">Therefore ΔABC ~ ΔPQR (by SAS similarity)</p>
                    </div>
                </div>
            </div>

            {/* Q15 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                    <span className="text-blue-700">15.</span> Shadows (Similar Triangles)
                </div>
                <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                    <p className="italic mb-2">"A vertical pole of length 6 m casts a shadow 4 m long on the ground and at the same time a tower casts a shadow 28 m long. Find the height of the tower."</p>
                    <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-2">
                        <p>Let AB be the pole (6 m) and BC be its shadow (4 m). Let PQ be the tower (h) and QR be its shadow (28 m).</p>
                        <p>The sun rays fall at the same angle for both objects at the same time.</p>
                        <p>In ΔABC and ΔPQR:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>∠B = ∠Q = 90° (Vertical pole/tower)</li>
                            <li>∠C = ∠R (Angle of elevation of the sun)</li>
                        </ul>
                        <p className="mt-2 text-blue-700 font-bold">Therefore, ΔABC ~ ΔPQR (by AA similarity).</p>

                        <p className="mt-4 border-t pt-3">Since corresponding sides are proportional:</p>
                        <div className="pl-4 py-2 border-l-2 bg-slate-50 font-bold">
                            <p>AB / PQ = BC / QR</p>
                        </div>
                        <p>Substitute the values:</p>
                        <p>6 / h = 4 / 28</p>
                        <p>6 / h = 1 / 7</p>
                        <p>h = 6 × 7 = <span className="font-bold text-green-700 text-xl">42 m</span></p>
                    </div>
                </div>
            </div>

            {/* Q16 */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                    <span className="text-blue-700">16.</span> Proportional Medians
                </div>
                <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                    <p className="italic mb-2">"If AD and PM are medians of triangles ABC and PQR, respectively where ΔABC ~ ΔPQR, prove that AB/PQ = AD/PM."</p>
                    <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-2">
                        <p>Given ΔABC ~ ΔPQR. Due to similarity:</p>
                        <ul className="list-disc pl-6 space-y-1 text-slate-600">
                            <li>∠A = ∠P, <span className="text-black font-bold">∠B = ∠Q</span>, ∠C = ∠R</li>
                            <li><span className="text-black font-bold">AB / PQ = BC / QR</span> = AC / PR</li>
                        </ul>

                        <p className="mt-4">Since AD and PM are medians, they bisect BC and QR.</p>
                        <p>So BC = 2BD and QR = 2QM.</p>
                        <p>Substitute these into the side ratio equation:</p>
                        <div className="pl-4 py-2 border-l-2 bg-slate-50 font-bold">
                            <p>AB / PQ = (2BD) / (2QM)</p>
                            <p>AB / PQ = BD / QM &nbsp; (Equation 1)</p>
                        </div>

                        <p className="mt-4 border-t pt-3">Now consider the smaller triangles ΔABD and ΔPQM:</p>
                        <ul className="list-disc pl-6 space-y-1">
                            <li>∠B = ∠Q (Proved above)</li>
                            <li>AB / PQ = BD / QM (From Equation 1)</li>
                        </ul>
                        <p className="mt-2 text-blue-700 font-bold">Therefore, ΔABD ~ ΔPQM (by SAS similarity criterion).</p>

                        <p className="mt-4">Since ΔABD ~ ΔPQM, their corresponding sides are proportional:</p>
                        <p className="font-bold text-green-700 text-xl bg-green-50 px-3 py-2 inline-block rounded">AB / PQ = BD / QM = AD / PM</p>
                        <p className="italic text-green-700">Hence Proved.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
