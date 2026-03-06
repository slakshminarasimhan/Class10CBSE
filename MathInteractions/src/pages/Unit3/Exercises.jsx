import React from 'react';

export default function Exercises() {
    return (
        <div className="space-y-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Exercise 7.2</h2>

            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 mb-6 border-b pb-4">
                    Section Formula & Coordinate Problems
                </h3>

                <div className="space-y-8">
                    {/* Q1 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">1.</span> Dividing a Line Segment
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Find the coordinates of the point which divides the join of (-1, 7) and (4, -3) in the ratio 2 : 3."</p>

                            <p><strong>Step 1: Identify coordinates and ratio</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>(x₁, y₁) = (-1, 7)</p>
                                <p>(x₂, y₂) = (4, -3)</p>
                                <p>Ratio (m₁ : m₂) = 2 : 3</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Apply the Section Formula</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p className="mb-2 italic text-slate-500">P(x, y) = [ (m₁x₂ + m₂x₁)/(m₁ + m₂), (m₁y₂ + m₂y₁)/(m₁ + m₂) ]</p>
                                <p>x = [2(4) + 3(-1)] / (2 + 3) = [8 - 3] / 5 = 5 / 5 = <span className="font-bold">1</span></p>
                                <p>y = [2(-3) + 3(7)] / (2 + 3) = [-6 + 21] / 5 = 15 / 5 = <span className="font-bold">3</span></p>
                            </div>
                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                <strong>Answer:</strong> The coordinates of the dividing point are <span className="font-bold text-green-700 text-xl">(1, 3)</span>.
                            </p>
                        </div>
                    </div>

                    {/* Q2 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">2.</span> Points of Trisection
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Find the coordinates of the points of trisection of the line segment joining (4, -1) and (-2, -3)."</p>

                            <p><strong>Step 1: Understand Trisection</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Trisection means dividing the line into 3 equal parts. Let the points be P and Q.</p>
                                <p>Point P divides the line in the ratio <span className="font-bold">1 : 2</span>.</p>
                                <p>Point Q divides the line in the ratio <span className="font-bold">2 : 1</span>.</p>
                                <p className="mt-2">(x₁, y₁) = (4, -1), &nbsp; (x₂, y₂) = (-2, -3)</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Calculate for Point P (Ratio 1:2)</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>x = [1(-2) + 2(4)] / (1 + 2) = [-2 + 8] / 3 = 6 / 3 = 2</p>
                                <p>y = [1(-3) + 2(-1)] / (1 + 2) = [-3 - 2] / 3 = -5 / 3</p>
                                <p className="font-bold text-blue-700">Therefore, P = (2, -5/3)</p>
                            </div>

                            <p className="mt-4"><strong>Step 3: Calculate for Point Q (Ratio 2:1)</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p className="italic text-slate-500 mb-2">Note: Q is also the midpoint of P and B, but using Section Formula 2:1 gives:</p>
                                <p>x = [2(-2) + 1(4)] / (2 + 1) = [-4 + 4] / 3 = 0 / 3 = 0</p>
                                <p>y = [2(-3) + 1(-1)] / (2 + 1) = [-6 - 1] / 3 = -7 / 3</p>
                                <p className="font-bold text-blue-700">Therefore, Q = (0, -7/3)</p>
                            </div>

                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                <strong>Answer:</strong> The points of trisection are <span className="font-bold text-green-700 text-xl">(2, -5/3) and (0, -7/3)</span>.
                            </p>
                        </div>
                    </div>

                    {/* Q3 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">3.</span> Sports Day Flags
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Niharika runs 1/4th the distance AD (100 flower pots at 1m each) on the 2nd line and posts a green flag. Preet runs 1/5th the distance AD on the 8th line and posts a red flag. What is the distance between them? Where should Rashmi post her blue flag exactly halfway?"</p>

                            <p><strong>Step 1: Find coordinates of the flags</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Total distance AD along y-axis = 100 m.</p>
                                <p><strong>Green Flag (Niharika):</strong> x = 2 (2nd line), y = 1/4 × 100 = 25.</p>
                                <p className="font-bold text-green-600 pl-4">G(2, 25)</p>
                                <p className="mt-2"><strong>Red Flag (Preet):</strong> x = 8 (8th line), y = 1/5 × 100 = 20.</p>
                                <p className="font-bold text-red-600 pl-4">R(8, 20)</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Distance between the flags</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>d = √[(x₂ - x₁)² + (y₂ - y₁)²]</p>
                                <p>d = √[(8 - 2)² + (20 - 25)²]</p>
                                <p>d = √[(6)² + (-5)²] = √[36 + 25] = <span className="font-bold text-blue-700">√61 m</span></p>
                            </div>

                            <p className="mt-4"><strong>Step 3: Finding position for Blue flag (Midpoint)</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>Midpoint Formula: M(x, y) = [(x₁ + x₂)/2, (y₁ + y₂)/2]</p>
                                <p>x = (2 + 8) / 2 = 10 / 2 = 5</p>
                                <p>y = (25 + 20) / 2 = 45 / 2 = 22.5</p>
                                <p className="font-bold text-blue-700 pl-4">M(5, 22.5)</p>
                            </div>

                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                <strong>Answer:</strong> The distance between the flags is <span className="font-bold text-green-700">√61 m</span>. Rashmi should post her flag on the <span className="font-bold text-green-700">5th line at a distance of 22.5 m</span>.
                            </p>
                        </div>
                    </div>

                    {/* Q4 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">4.</span> Finding the Ratio
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Find the ratio in which the line segment joining the points (-3, 10) and (6, -8) is divided by (-1, 6)."</p>

                            <p><strong>Step 1: Set up the ratio as k:1</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let the ratio be k : 1. Then m₁ = k, m₂ = 1.</p>
                                <p>(x₁, y₁) = (-3, 10)</p>
                                <p>(x₂, y₂) = (6, -8)</p>
                                <p>Point of division (x, y) = (-1, 6)</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Apply Section Formula for 'x' to solve for k</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>x = (m₁x₂ + m₂x₁) / (m₁ + m₂)</p>
                                <p>-1 = [k(6) + 1(-3)] / (k + 1)</p>
                                <p>-1(k + 1) = 6k - 3</p>
                                <p>-k - 1 = 6k - 3</p>
                                <p>-1 + 3 = 6k + k</p>
                                <p>2 = 7k</p>
                                <p><span className="font-bold text-blue-700">k = 2/7</span></p>
                                <p className="mt-2 text-sm italic text-slate-500">Checking with y coordinate: 6 = [k(-8) + 1(10)] / (k+1) &rarr; 6k+6 = -8k+10 &rarr; 14k = 4 &rarr; k = 2/7. Consistent.</p>
                            </div>
                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                <strong>Answer:</strong> The line segment is divided in the ratio <span className="font-bold text-green-700 text-xl">2 : 7</span>.
                            </p>
                        </div>
                    </div>

                    {/* Q5 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">5.</span> Divided by the X-Axis
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Find the ratio in which the line segment joining A(1, -5) and B(-4, 5) is divided by the x-axis. Also find the coordinates of the point of division."</p>

                            <p><strong>Step 1: Understand the intersection condition</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Any point on the x-axis has a y-coordinate of 0. Let the point be P(x, 0).</p>
                                <p>Let the ratio be k : 1. </p>
                                <p>A(x₁, y₁) = (1, -5)</p>
                                <p>B(x₂, y₂) = (-4, 5)</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Solve for k using the known y-coordinate</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>y = (m₁y₂ + m₂y₁) / (m₁ + m₂)</p>
                                <p>0 = [k(5) + 1(-5)] / (k + 1)</p>
                                <p>0 = 5k - 5</p>
                                <p>5k = 5 &rarr; <span className="font-bold text-blue-700">k = 1</span></p>
                                <p className="italic text-slate-600 text-sm mt-1">(This means it's exactly the midpoint! Ratio is 1:1)</p>
                            </div>

                            <p className="mt-4"><strong>Step 3: Find the x-coordinate</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>Substitute k = 1 into the x formula:</p>
                                <p>x = [1(-4) + 1(1)] / (1 + 1)</p>
                                <p>x = (-4 + 1) / 2</p>
                                <p><span className="font-bold text-blue-700">x = -3/2</span></p>
                            </div>
                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                <strong>Answer:</strong> The x-axis divides the line in the ratio <span className="font-bold text-green-700">1:1</span>. The point of division is <span className="font-bold text-green-700 text-xl">(-3/2, 0)</span>.
                            </p>
                        </div>
                    </div>

                    {/* Q6 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">6.</span> Vertices of a Parallelogram
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"If (1, 2), (4, y), (x, 6) and (3, 5) are the vertices of a parallelogram taken in order, find x and y."</p>

                            <p><strong>Step 1: Property of Parallelogram Diagonals</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>The diagonals of a parallelogram bisect each other. This means their midpoints are the same point.</p>
                                <p>Let A=(1, 2), B=(4, y), C=(x, 6), D=(3, 5)</p>
                                <p>Diagonal 1 connects A & C: Midpoint M₁</p>
                                <p>Diagonal 2 connects B & D: Midpoint M₂</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Equate the midpoints</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>Midpoint of AC = [ (1 + x)/2, (2 + 6)/2 ] = <span className="text-blue-700">[(1 + x)/2, 4]</span></p>
                                <p>Midpoint of BD = [ (4 + 3)/2, (y + 5)/2 ] = <span className="text-blue-700">[7/2, (y + 5)/2]</span></p>

                                <div className="mt-4 pt-3 border-t">
                                    <p className="font-bold text-slate-800 border-b pb-1 mb-2">Solving for x (Equating x-coordinates):</p>
                                    <p>(1 + x)/2 = 7/2</p>
                                    <p>1 + x = 7 &rarr; <span className="font-bold">x = 6</span></p>
                                </div>
                                <div className="mt-4">
                                    <p className="font-bold text-slate-800 border-b pb-1 mb-2">Solving for y (Equating y-coordinates):</p>
                                    <p>4 = (y + 5)/2</p>
                                    <p>8 = y + 5 &rarr; <span className="font-bold">y = 3</span></p>
                                </div>
                            </div>
                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                <strong>Answer:</strong> The values are <span className="font-bold text-green-700 text-xl">x = 6</span> and <span className="font-bold text-green-700 text-xl">y = 3</span>.
                            </p>
                        </div>
                    </div>

                    {/* Q7 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">7.</span> Endpoint of a Diameter
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Find the coordinates of a point A, where AB is the diameter of a circle whose centre is (2, -3) and B is (1, 4)."</p>

                            <p><strong>Step 1: Understand the midpoint relationship</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>The centre of a circle is the midpoint of its diameter AB.</p>
                                <p>Let A = (x, y)</p>
                                <p>B = (1, 4)</p>
                                <p>Centre (Midpoint M) = (2, -3)</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Use Midpoint formula backwards</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md space-y-3">
                                <div>
                                    <p className="font-bold">For x-coordinate:</p>
                                    <p>2 = (x + 1) / 2</p>
                                    <p>4 = x + 1 &rarr; <span className="font-bold text-blue-700">x = 3</span></p>
                                </div>
                                <div>
                                    <p className="font-bold">For y-coordinate:</p>
                                    <p>-3 = (y + 4) / 2</p>
                                    <p>-6 = y + 4 &rarr; <span className="font-bold text-blue-700">y = -10</span></p>
                                </div>
                            </div>
                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                <strong>Answer:</strong> The coordinates of point A are <span className="font-bold text-green-700 text-xl">(3, -10)</span>.
                            </p>
                        </div>
                    </div>

                    {/* Q8 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">8.</span> Coordinates of Point P
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"If A and B are (-2, -2) and (2, -4), respectively, find the coordinates of P such that AP = 3/7 AB and P lies on the line segment AB."</p>

                            <p><strong>Step 1: Determine ratio between parts AP and PB</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Given: AP = 3/7 AB.</p>
                                <p>This means AP is 3 parts out of the total 7 parts of AB.</p>
                                <p>Therefore, the remaining part PB is 7 - 3 = 4 parts.</p>
                                <p className="font-bold text-blue-700 border-t pt-2 mt-2">The ratio AP : PB (or m₁ : m₂) is 3 : 4.</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Apply section formula</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md space-y-2">
                                <p>(x₁, y₁) = (-2, -2) &nbsp;&nbsp;&nbsp; (x₂, y₂) = (2, -4)</p>
                                <p>Ratio = 3 : 4</p>
                                <p className="mt-2">x = [3(2) + 4(-2)] / (3 + 4) = [6 - 8] / 7 = <span className="font-bold text-blue-800">-2/7</span></p>
                                <p>y = [3(-4) + 4(-2)] / (3 + 4) = [-12 - 8] / 7 = <span className="font-bold text-blue-800">-20/7</span></p>
                            </div>
                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                <strong>Answer:</strong> The coordinates of P are <span className="font-bold text-green-700 text-xl">(-2/7, -20/7)</span>.
                            </p>
                        </div>
                    </div>

                    {/* Q9 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">9.</span> Dividing into Four Equal Parts
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Find the coordinates of the points which divide the line segment joining A(-2, 2) and B(2, 8) into four equal parts."</p>

                            <p><strong>Step 1: Understand the division</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Dividing into 4 equal parts creates 3 points: P, Q, and R.</p>
                                <p>Q is the absolute midpoint of AB.</p>
                                <p>P is the midpoint of AQ.</p>
                                <p>R is the midpoint of QB.</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Calculate Midpoint Q</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>Q = [( -2 + 2 )/2, ( 2 + 8 )/2]</p>
                                <p>Q = [0/2, 10/2] = <span className="font-bold text-blue-700">(0, 5)</span></p>
                            </div>

                            <p className="mt-4"><strong>Step 3: Calculate P (midpoint of A(-2,2) and Q(0,5))</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>P = [( -2 + 0 )/2, ( 2 + 5 )/2]</p>
                                <p>P = [-2/2, 7/2] = <span className="font-bold text-blue-700">(-1, 7/2)</span></p>
                            </div>

                            <p className="mt-4"><strong>Step 4: Calculate R (midpoint of Q(0,5) and B(2,8))</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>R = [( 0 + 2 )/2, ( 5 + 8 )/2]</p>
                                <p>R = [2/2, 13/2] = <span className="font-bold text-blue-700">(1, 13/2)</span></p>
                            </div>

                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                <strong>Answer:</strong> The three points are <span className="font-bold text-green-700 text-xl">(-1, 7/2), (0, 5), and (1, 13/2)</span>.
                            </p>
                        </div>
                    </div>

                    {/* Q10 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">10.</span> Area of a Rhombus
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Find the area of a rhombus if its vertices are (3, 0), (4, 5), (-1, 4) and (-2, -1) taken in order."</p>

                            <p><strong>Step 1: Identify diagonals</strong></p>
                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Let vertices be A(3, 0), B(4, 5), C(-1, 4), and D(-2, -1).</p>
                                <p>The diagonals are AC and BD.</p>
                            </div>

                            <p className="mt-4"><strong>Step 2: Calculate length of diagonal AC (d₁)</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>Distance formula: √[(x₂ - x₁)² + (y₂ - y₁)²]</p>
                                <p>AC = √[(-1 - 3)² + (4 - 0)²]</p>
                                <p>AC = √[(-4)² + (4)²] = √[16 + 16] = <span className="font-bold text-blue-700">√32</span> = 4√2 units</p>
                            </div>

                            <p className="mt-4"><strong>Step 3: Calculate length of diagonal BD (d₂)</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>BD = √[(-2 - 4)² + (-1 - 5)²]</p>
                                <p>BD = √[(-6)² + (-6)²] = √[36 + 36] = <span className="font-bold text-blue-700">√72</span> = 6√2 units</p>
                            </div>

                            <p className="mt-4"><strong>Step 4: Calculate Area</strong></p>
                            <div className="font-serif bg-white p-4 border rounded-md">
                                <p>Area of rhombus = (1/2) × d₁ × d₂</p>
                                <p>Area = (1/2) × 4√2 × 6√2</p>
                                <p>Area = (1/2) × 24 × (√2 × √2) = (1/2) × 24 × 2</p>
                                <p>Area = <span className="font-bold text-blue-700">24</span></p>
                            </div>
                            <p className="text-lg pt-2 mt-4 border-t border-slate-200">
                                <strong>Answer:</strong> The area of the rhombus is <span className="font-bold text-green-700 text-xl">24 square units</span>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
