import React from 'react';

export default function Exercises() {
    return (
        <div className="space-y-12">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b pb-4">Exercise 13.3 (Statistics)</h2>

            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="space-y-8">

                    {/* Q1 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">1.</span> Monthly Consumption
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-4">"The following frequency distribution gives the monthly consumption of electricity of 68 consumers of a locality. Find the median, mean and mode of the data and compare them."</p>

                            <div className="overflow-x-auto mb-6">
                                <table className="min-w-full divide-y divide-slate-300 border border-slate-300">
                                    <thead className="bg-slate-200">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 border-r border-slate-300">Monthly consumption (in units)</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 border-r border-slate-300">Number of consumers (f)</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 border-r border-slate-300">Cumulative Freq (cf)</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 border-r border-slate-300">Class Mark (xi)</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Step Dev (di)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 bg-white">
                                        <tr><td className="px-4 py-2 border-r border-slate-300">65 - 85</td><td className="px-4 py-2 border-r border-slate-300">4</td><td className="px-4 py-2 border-r border-slate-300">4</td><td className="px-4 py-2 border-r border-slate-300">75</td><td className="px-4 py-2">-3</td></tr>
                                        <tr><td className="px-4 py-2 border-r border-slate-300">85 - 105</td><td className="px-4 py-2 border-r border-slate-300">5</td><td className="px-4 py-2 border-r border-slate-300">9</td><td className="px-4 py-2 border-r border-slate-300">95</td><td className="px-4 py-2">-2</td></tr>
                                        <tr><td className="px-4 py-2 border-r border-slate-300">105 - 125</td><td className="px-4 py-2 border-r border-slate-300">13</td><td className="px-4 py-2 border-r border-slate-300">22</td><td className="px-4 py-2 border-r border-slate-300">115</td><td className="px-4 py-2">-1</td></tr>
                                        <tr className="bg-blue-50"><td className="px-4 py-2 border-r border-slate-300 font-medium text-blue-800">125 - 145</td><td className="px-4 py-2 border-r border-slate-300 text-blue-800 font-medium">20</td><td className="px-4 py-2 border-r border-slate-300">42</td><td className="px-4 py-2 border-r border-slate-300 font-medium">135</td><td className="px-4 py-2">0</td></tr>
                                        <tr><td className="px-4 py-2 border-r border-slate-300">145 - 165</td><td className="px-4 py-2 border-r border-slate-300">14</td><td className="px-4 py-2 border-r border-slate-300">56</td><td className="px-4 py-2 border-r border-slate-300">155</td><td className="px-4 py-2">1</td></tr>
                                        <tr><td className="px-4 py-2 border-r border-slate-300">165 - 185</td><td className="px-4 py-2 border-r border-slate-300">8</td><td className="px-4 py-2 border-r border-slate-300">64</td><td className="px-4 py-2 border-r border-slate-300">175</td><td className="px-4 py-2">2</td></tr>
                                        <tr><td className="px-4 py-2 border-r border-slate-300">185 - 205</td><td className="px-4 py-2 border-r border-slate-300">4</td><td className="px-4 py-2 border-r border-slate-300">68</td><td className="px-4 py-2 border-r border-slate-300">195</td><td className="px-4 py-2">3</td></tr>
                                        <tr className="bg-slate-50 font-bold"><td className="px-4 py-2 border-r border-slate-300">Total</td><td className="px-4 py-2 border-r border-slate-300">∑ f = 68</td><td className="px-4 py-2 border-r border-slate-300"></td><td className="px-4 py-2 border-r border-slate-300"></td><td className="px-4 py-2">∑ fd = 7</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-6">
                                <div>
                                    <p className="font-bold border-b pb-1 text-blue-800 mb-2">1. Median:</p>
                                    <p>n = 68, so n/2 = 34.</p>
                                    <p>The cumulative frequency just greater than 34 is 42, which belongs to the class <strong>125 - 145</strong> (Median class).</p>
                                    <p>l = 125, cf = 22, f = 20, h = 20</p>
                                    <p>Median = l + [ (n/2 - cf) / f ] × h</p>
                                    <p>Median = 125 + [ (34 - 22) / 20 ] × 20</p>
                                    <p>Median = 125 + 12 = <span className="font-bold text-green-700">137 units</span></p>
                                </div>

                                <div>
                                    <p className="font-bold border-b pb-1 text-blue-800 mb-2">2. Mode:</p>
                                    <p>The maximum class frequency is 20, which corresponds to the class <strong>125 - 145</strong> (Modal class).</p>
                                    <p>l = 125, f1 = 20, f0 = 13, f2 = 14, h = 20</p>
                                    <p>Mode = l + [ (f1 - f0) / (2f1 - f0 - f2) ] × h</p>
                                    <p>Mode = 125 + [ (20 - 13) / (40 - 13 - 14) ] × 20</p>
                                    <p>Mode = 125 + (7 / 13) × 20 = 125 + 140 / 13</p>
                                    <p>Mode ≈ 125 + 10.76 = <span className="font-bold text-green-700">135.76 units</span></p>
                                </div>

                                <div>
                                    <p className="font-bold border-b pb-1 text-blue-800 mb-2">3. Mean (Step-deviation method):</p>
                                    <p>Let assumed mean a = 135 and class size h = 20.</p>
                                    <p>Mean = a + [ (∑ fd) / (∑ f) ] × h</p>
                                    <p>Mean = 135 + (7 / 68) × 20</p>
                                    <p>Mean = 135 + 140 / 68 ≈ 135 + 2.05 ≈ <span className="font-bold text-green-700">137.05 units</span></p>
                                </div>

                                <div className="mt-4 pt-4 border-t border-slate-200">
                                    <p><strong>Comparison:</strong> The three measures of central tendency for this data are approximately the same (around 136-137 units).</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q2 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">2.</span> Finding Missing Frequencies
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-4">"If the median of the distribution given below is 28.5, find the values of x and y:"</p>

                            <div className="overflow-x-auto mb-6">
                                <table className="max-w-xl mx-auto divide-y divide-slate-300 border border-slate-300">
                                    <thead className="bg-slate-200">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 border-r border-slate-300">Class interval</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 border-r border-slate-300">Frequency (f)</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Cumulative Freq (cf)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 bg-white">
                                        <tr><td className="px-6 py-2 border-r border-slate-300">0 - 10</td><td className="px-6 py-2 border-r border-slate-300">5</td><td className="px-6 py-2">5</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">10 - 20</td><td className="px-6 py-2 border-r border-slate-300 text-red-600 font-bold">x</td><td className="px-6 py-2">5 + x</td></tr>
                                        <tr className="bg-blue-50"><td className="px-6 py-2 border-r border-slate-300 text-blue-800 font-medium">20 - 30</td><td className="px-6 py-2 border-r border-slate-300 text-blue-800 font-medium">20</td><td className="px-6 py-2 text-blue-800 font-medium">25 + x</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">30 - 40</td><td className="px-6 py-2 border-r border-slate-300">15</td><td className="px-6 py-2">40 + x</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">40 - 50</td><td className="px-6 py-2 border-r border-slate-300 text-red-600 font-bold">y</td><td className="px-6 py-2">40 + x + y</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">50 - 60</td><td className="px-6 py-2 border-r border-slate-300">5</td><td className="px-6 py-2">45 + x + y</td></tr>
                                        <tr className="bg-slate-50 font-bold"><td className="px-6 py-2 border-r border-slate-300">Total</td><td className="px-6 py-2 border-r border-slate-300">60</td><td className="px-6 py-2"></td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <p>From the table, the total frequency is 60.</p>
                                <p className="mb-4">Therefore, 45 + x + y = 60 → x + y = 15 --- (Equation 1)</p>

                                <p>Given Median = 28.5. Since this lies in the interal <strong>20 - 30</strong>, the median class is 20 - 30.</p>
                                <p>l = 20, h = 10, f = 20, cf = 5 + x, n/2 = 30</p>

                                <p className="mt-4">Median = l + [ (n/2 - cf) / f ] × h</p>
                                <p>28.5 = 20 + [ (30 - (5 + x)) / 20 ] × 10</p>
                                <p>8.5 = (25 - x) / 2</p>
                                <p>17 = 25 - x</p>
                                <p>x = 25 - 17 = <span className="font-bold text-green-700">8</span></p>

                                <p className="mt-4 border-t pt-4">Substitute x = 8 in Equation 1:</p>
                                <p>8 + y = 15 → y = 15 - 8 = <span className="font-bold text-green-700">7</span></p>
                                <p className="mt-2 font-bold text-blue-800">Hence, x = 8 and y = 7.</p>
                            </div>
                        </div>
                    </div>

                    {/* Q3 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">3.</span> Life Insurance Policy Ages
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-4">"A life insurance agent found the following data for distribution of ages of 100 policy holders. Calculate the median age, if policies are given only to persons having age 18 years onwards but less than 60 year."</p>

                            <div className="overflow-x-auto mb-6">
                                <table className="max-w-2xl mx-auto divide-y divide-slate-300 border border-slate-300">
                                    <thead className="bg-slate-200">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 border-r border-slate-300">Age (in years)</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 border-r border-slate-300">Given cf</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 border-r border-slate-300">Class Interval</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Calculated f</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 bg-white">
                                        <tr><td className="px-6 py-2 border-r border-slate-300">Below 20</td><td className="px-6 py-2 border-r border-slate-300">2</td><td className="px-6 py-2 border-r border-slate-300">15 - 20 (or 18-20)</td><td className="px-6 py-2">2</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">Below 25</td><td className="px-6 py-2 border-r border-slate-300">6</td><td className="px-6 py-2 border-r border-slate-300">20 - 25</td><td className="px-6 py-2">6 - 2 = 4</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">Below 30</td><td className="px-6 py-2 border-r border-slate-300">24</td><td className="px-6 py-2 border-r border-slate-300">25 - 30</td><td className="px-6 py-2">24 - 6 = 18</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">Below 35</td><td className="px-6 py-2 border-r border-slate-300">45</td><td className="px-6 py-2 border-r border-slate-300">30 - 35</td><td className="px-6 py-2">45 - 24 = 21</td></tr>
                                        <tr className="bg-blue-50"><td className="px-6 py-2 border-r border-slate-300 font-medium">Below 40</td><td className="px-6 py-2 border-r border-slate-300">78</td><td className="px-6 py-2 border-r border-slate-300 text-blue-800 font-medium">35 - 40</td><td className="px-6 py-2 text-blue-800 font-medium">78 - 45 = 33</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">Below 45</td><td className="px-6 py-2 border-r border-slate-300">89</td><td className="px-6 py-2 border-r border-slate-300">40 - 45</td><td className="px-6 py-2">89 - 78 = 11</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">Below 50</td><td className="px-6 py-2 border-r border-slate-300">92</td><td className="px-6 py-2 border-r border-slate-300">45 - 50</td><td className="px-6 py-2">92 - 89 = 3</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">Below 55</td><td className="px-6 py-2 border-r border-slate-300">98</td><td className="px-6 py-2 border-r border-slate-300">50 - 55</td><td className="px-6 py-2">98 - 92 = 6</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">Below 60</td><td className="px-6 py-2 border-r border-slate-300">100</td><td className="px-6 py-2 border-r border-slate-300">55 - 60</td><td className="px-6 py-2">100 - 98 = 2</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <p>n = 100 → n/2 = 50.</p>
                                <p>The cumulative frequency just greater than 50 is 78, which corresponds to the class <strong>35 - 40</strong> (Median class).</p>

                                <p className="mt-4">l = 35, cf = 45 (cf of preceding class), f = 33, h = 5</p>
                                <p>Median = l + [ (n/2 - cf) / f ] × h</p>
                                <p>Median = 35 + [ (50 - 45) / 33 ] × 5</p>
                                <p>Median = 35 + [ 5 / 33 ] × 5 = 35 + 25 / 33</p>
                                <p>Median ≈ 35 + 0.76 = <span className="font-bold text-green-700 text-xl">35.76 years</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q4 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">4.</span> Median Length of Leaves
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-4">"The lengths of 40 leaves of a plant are measured correct to the nearest millimetre... Find the median length of the leaves."</p>

                            <div className="overflow-x-auto mb-6">
                                <table className="max-w-2xl mx-auto divide-y divide-slate-300 border border-slate-300">
                                    <thead className="bg-slate-200">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 border-r border-slate-300">Length (in mm)</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 border-r border-slate-300">Continuous Classes</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 border-r border-slate-300">Number of leaves (f)</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Cumulative Freq (cf)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 bg-white">
                                        <tr><td className="px-6 py-2 border-r border-slate-300">118 - 126</td><td className="px-6 py-2 border-r border-slate-300">117.5 - 126.5</td><td className="px-6 py-2 border-r border-slate-300">3</td><td className="px-6 py-2">3</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">127 - 135</td><td className="px-6 py-2 border-r border-slate-300">126.5 - 135.5</td><td className="px-6 py-2 border-r border-slate-300">5</td><td className="px-6 py-2">8</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">136 - 144</td><td className="px-6 py-2 border-r border-slate-300">135.5 - 144.5</td><td className="px-6 py-2 border-r border-slate-300">9</td><td className="px-6 py-2">17</td></tr>
                                        <tr className="bg-blue-50"><td className="px-6 py-2 border-r border-slate-300 font-medium">145 - 153</td><td className="px-6 py-2 border-r border-slate-300 text-blue-800 font-medium">144.5 - 153.5</td><td className="px-6 py-2 border-r border-slate-300 text-blue-800 font-medium">12</td><td className="px-6 py-2 font-medium">29</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">154 - 162</td><td className="px-6 py-2 border-r border-slate-300">153.5 - 162.5</td><td className="px-6 py-2 border-r border-slate-300">5</td><td className="px-6 py-2">34</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">163 - 171</td><td className="px-6 py-2 border-r border-slate-300">162.5 - 171.5</td><td className="px-6 py-2 border-r border-slate-300">4</td><td className="px-6 py-2">38</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">172 - 180</td><td className="px-6 py-2 border-r border-slate-300">171.5 - 180.5</td><td className="px-6 py-2 border-r border-slate-300">2</td><td className="px-6 py-2">40</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <p className="italic text-slate-500 mb-2">Hint: The data needs to be converted to continuous classes since the formula assumes continuous intervals.</p>
                                <p>n = 40 → n/2 = 20.</p>
                                <p>The cumulative frequency just greater than 20 is 29, corresponding to the class <strong>144.5 - 153.5</strong>.</p>
                                <p>l = 144.5, cf = 17, f = 12, h = 9</p>

                                <p className="mt-4">Median = l + [ (n/2 - cf) / f ] × h</p>
                                <p>Median = 144.5 + [ (20 - 17) / 12 ] × 9</p>
                                <p>Median = 144.5 + [ 3 / 12 ] × 9 = 144.5 + 9/4 = 144.5 + 2.25</p>
                                <p>Median = <span className="font-bold text-green-700 text-xl">146.75 mm</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q5 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">5.</span> Lifetime of Neon Lamps
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-4">"The following table gives the distribution of the life time of 400 neon lamps: Find the median life time of a lamp."</p>

                            <div className="overflow-x-auto mb-6">
                                <table className="max-w-xl mx-auto divide-y divide-slate-300 border border-slate-300">
                                    <thead className="bg-slate-200">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 border-r border-slate-300">Life time (in hours)</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 border-r border-slate-300">Number of lamps (f)</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Cumulative Freq (cf)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 bg-white">
                                        <tr><td className="px-6 py-2 border-r border-slate-300">1500 - 2000</td><td className="px-6 py-2 border-r border-slate-300">14</td><td className="px-6 py-2">14</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">2000 - 2500</td><td className="px-6 py-2 border-r border-slate-300">56</td><td className="px-6 py-2">70</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">2500 - 3000</td><td className="px-6 py-2 border-r border-slate-300">60</td><td className="px-6 py-2">130</td></tr>
                                        <tr className="bg-blue-50"><td className="px-6 py-2 border-r border-slate-300 text-blue-800 font-medium">3000 - 3500</td><td className="px-6 py-2 border-r border-slate-300 text-blue-800 font-medium">86</td><td className="px-6 py-2 font-medium">216</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">3500 - 4000</td><td className="px-6 py-2 border-r border-slate-300">74</td><td className="px-6 py-2">290</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">4000 - 4500</td><td className="px-6 py-2 border-r border-slate-300">62</td><td className="px-6 py-2">352</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">4500 - 5000</td><td className="px-6 py-2 border-r border-slate-300">48</td><td className="px-6 py-2">400</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <p>n = 400 → n/2 = 200.</p>
                                <p>The cumulative frequency just greater than 200 is 216, corresponding to the class <strong>3000 - 3500</strong>.</p>
                                <p>l = 3000, cf = 130, f = 86, h = 500</p>

                                <p className="mt-4">Median = l + [ (n/2 - cf) / f ] × h</p>
                                <p>Median = 3000 + [ (200 - 130) / 86 ] × 500</p>
                                <p>Median = 3000 + (70 / 86) × 500 = 3000 + 35000 / 86</p>
                                <p>Median ≈ 3000 + 406.98 = <span className="font-bold text-green-700 text-xl">3406.98 hours</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q6 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">6.</span> Letters in Surnames
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-4">"100 surnames were randomly picked up from a local telephone directory... Determine the median, mean and modal size of the surnames."</p>

                            <div className="overflow-x-auto mb-6">
                                <table className="max-w-4xl mx-auto divide-y divide-slate-300 border border-slate-300">
                                    <thead className="bg-slate-200">
                                        <tr>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 border-r border-slate-300">Number of letters</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 border-r border-slate-300">Frequency (f)</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 border-r border-slate-300">Cumul. Freq (cf)</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900 border-r border-slate-300">Class Mark (xi)</th>
                                            <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">Step Dev (di)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 bg-white">
                                        <tr><td className="px-4 py-2 border-r border-slate-300">1 - 4</td><td className="px-4 py-2 border-r border-slate-300">6</td><td className="px-4 py-2 border-r border-slate-300">6</td><td className="px-4 py-2 border-r border-slate-300">2.5</td><td className="px-4 py-2">-2</td></tr>
                                        <tr><td className="px-4 py-2 border-r border-slate-300">4 - 7</td><td className="px-4 py-2 border-r border-slate-300">30</td><td className="px-4 py-2 border-r border-slate-300">36</td><td className="px-4 py-2 border-r border-slate-300">5.5</td><td className="px-4 py-2">-1</td></tr>
                                        <tr className="bg-blue-50"><td className="px-4 py-2 border-r border-slate-300 font-medium text-blue-800">7 - 10</td><td className="px-4 py-2 border-r border-slate-300 text-blue-800 font-medium">40</td><td className="px-4 py-2 border-r border-slate-300 font-medium">76</td><td className="px-4 py-2 border-r border-slate-300">8.5</td><td className="px-4 py-2">0</td></tr>
                                        <tr><td className="px-4 py-2 border-r border-slate-300">10 - 13</td><td className="px-4 py-2 border-r border-slate-300">16</td><td className="px-4 py-2 border-r border-slate-300">92</td><td className="px-4 py-2 border-r border-slate-300">11.5</td><td className="px-4 py-2">1</td></tr>
                                        <tr><td className="px-4 py-2 border-r border-slate-300">13 - 16</td><td className="px-4 py-2 border-r border-slate-300">4</td><td className="px-4 py-2 border-r border-slate-300">96</td><td className="px-4 py-2 border-r border-slate-300">14.5</td><td className="px-4 py-2">2</td></tr>
                                        <tr><td className="px-4 py-2 border-r border-slate-300">16 - 19</td><td className="px-4 py-2 border-r border-slate-300">4</td><td className="px-4 py-2 border-r border-slate-300">100</td><td className="px-4 py-2 border-r border-slate-300">17.5</td><td className="px-4 py-2">3</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-6">
                                <div>
                                    <p className="font-bold border-b pb-1 text-blue-800 mb-2">1. Median:</p>
                                    <p>n = 100 → n/2 = 50.</p>
                                    <p>The median class is <strong>7 - 10</strong>.</p>
                                    <p>l = 7, cf = 36, f = 40, h = 3</p>
                                    <p>Median = 7 + [ (50 - 36) / 40 ] × 3 = 7 + ( 14 / 40 ) × 3 = 7 + 42 / 40 = 7 + 1.05 = <span className="font-bold text-green-700">8.05 letters</span></p>
                                </div>

                                <div>
                                    <p className="font-bold border-b pb-1 text-blue-800 mb-2">2. Mode:</p>
                                    <p>The modal class is also <strong>7 - 10</strong>, as it has the highest frequency (40).</p>
                                    <p>l = 7, f1 = 40, f0 = 30, f2 = 16, h = 3</p>
                                    <p>Mode = 7 + [ (40 - 30) / (80 - 30 - 16) ] × 3 = 7 + ( 10 / 34 ) × 3 = 7 + 30 / 34 ≈ 7 + 0.88 = <span className="font-bold text-green-700">7.88 letters</span></p>
                                </div>

                                <div>
                                    <p className="font-bold border-b pb-1 text-blue-800 mb-2">3. Mean:</p>
                                    <p>Using Step-deviation with a = 8.5 and class size h = 3.</p>
                                    <p>∑ f·d = (6 × -2) + (30 × -1) + (40 × 0) + (16 × 1) + (4 × 2) + (4 × 3) = -12 - 30 + 0 + 16 + 8 + 12 = -6</p>
                                    <p>Mean = 8.5 + ( -6 / 100 ) × 3 = 8.5 - 0.18 = <span className="font-bold text-green-700">8.32 letters</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q7 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">7.</span> Weight of Students
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-4">"The distribution below gives the weights of 30 students of a class. Find the median weight of the students."</p>

                            <div className="overflow-x-auto mb-6">
                                <table className="max-w-xl mx-auto divide-y divide-slate-300 border border-slate-300">
                                    <thead className="bg-slate-200">
                                        <tr>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 border-r border-slate-300">Weight (in kg)</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900 border-r border-slate-300">Number of students (f)</th>
                                            <th className="px-6 py-3 text-left text-sm font-semibold text-slate-900">Cumulative Freq (cf)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-200 bg-white">
                                        <tr><td className="px-6 py-2 border-r border-slate-300">40 - 45</td><td className="px-6 py-2 border-r border-slate-300">2</td><td className="px-6 py-2">2</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">45 - 50</td><td className="px-6 py-2 border-r border-slate-300">3</td><td className="px-6 py-2">5</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">50 - 55</td><td className="px-6 py-2 border-r border-slate-300">8</td><td className="px-6 py-2">13</td></tr>
                                        <tr className="bg-blue-50"><td className="px-6 py-2 border-r border-slate-300 text-blue-800 font-medium">55 - 60</td><td className="px-6 py-2 border-r border-slate-300 text-blue-800 font-medium">6</td><td className="px-6 py-2 font-medium">19</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">60 - 65</td><td className="px-6 py-2 border-r border-slate-300">6</td><td className="px-6 py-2">25</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">65 - 70</td><td className="px-6 py-2 border-r border-slate-300">3</td><td className="px-6 py-2">28</td></tr>
                                        <tr><td className="px-6 py-2 border-r border-slate-300">70 - 75</td><td className="px-6 py-2 border-r border-slate-300">2</td><td className="px-6 py-2">30</td></tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <p>n = 30 → n/2 = 15.</p>
                                <p>The cumulative frequency just greater than 15 is 19, which corresponds to the median class <strong>55 - 60</strong>.</p>
                                <p>l = 55, cf = 13, f = 6, h = 5</p>

                                <p className="mt-4">Median = l + [ (n/2 - cf) / f ] × h</p>
                                <p>Median = 55 + [ (15 - 13) / 6 ] × 5</p>
                                <p>Median = 55 + ( 2 / 6 ) × 5 = 55 + 10 / 6 ≈ 55 + 1.67</p>
                                <p>Median = <span className="font-bold text-green-700 text-xl">56.67 kg</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b pb-4 mt-12">Exercise 14.1 (Probability)</h2>

            <section className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                <div className="space-y-8">

                    {/* Q1 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">1.</span> Complete Statements
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Complete the following statements:"</p>

                            <ul className="list-none space-y-4 font-serif text-lg bg-white p-4 border rounded-md">
                                <li><strong>(i)</strong> Probability of an event E + Probability of the event 'not E' = <span className="font-bold text-green-700">1</span>.</li>
                                <li><strong>(ii)</strong> The probability of an event that cannot happen is <span className="font-bold text-green-700">0</span>. Such an event is called an <span className="font-bold text-green-700">impossible event</span>.</li>
                                <li><strong>(iii)</strong> The probability of an event that is certain to happen is <span className="font-bold text-green-700">1</span>. Such an event is called a <span className="font-bold text-green-700">sure (or certain) event</span>.</li>
                                <li><strong>(iv)</strong> The sum of the probabilities of all the elementary events of an experiment is <span className="font-bold text-green-700">1</span>.</li>
                                <li><strong>(v)</strong> The probability of an event is greater than or equal to <span className="font-bold text-green-700">0</span> and less than or equal to <span className="font-bold text-green-700">1</span>.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Q2 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">2.</span> Equally Likely Outcomes
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Which of the following experiments have equally likely outcomes? Explain."</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <div>
                                    <p className="font-semibold text-slate-800">(i) A driver attempts to start a car. The car starts or does not start.</p>
                                    <p className="mt-1"><span className="font-bold text-red-600">Not equally likely.</span> This depends on various factors such as fuel, engine condition, battery, etc. A working car is more likely to start than a broken one.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-800">(ii) A player attempts to shoot a basketball. She/he shoots or misses the shot.</p>
                                    <p className="mt-1"><span className="font-bold text-red-600">Not equally likely.</span> This depends on the player's skill, the distance to the hoop, and the defense.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-800">(iii) A trial is made to answer a true-false question. The answer is right or wrong.</p>
                                    <p className="mt-1"><span className="font-bold text-green-700">Equally likely.</span> For a random guess, there are exactly two equally possible outcomes: true or false.</p>
                                </div>
                                <div>
                                    <p className="font-semibold text-slate-800">(iv) A baby is born. It is a boy or a girl.</p>
                                    <p className="mt-1"><span className="font-bold text-green-700">Equally likely.</span> Genetically, the chance of a baby being a boy is virtually equal to the chance of being a girl.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q3 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">3.</span> Tossing a Coin
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Why is tossing a coin considered to be a fair way of deciding which team should get the ball at the beginning of a football game?"</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>When we toss a fair coin, the possible outcomes are only two: "head" or "tail". These outcomes are <strong>equally likely</strong>. Therefore, the result of an individual coin toss is completely unpredictable, ensuring a fair, unbiased decision where each team has exactly a 50% chance of winning.</p>
                            </div>
                        </div>
                    </div>

                    {/* Q4 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">4.</span> Invalid Probability
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Which of the following cannot be the probability of an event?"</p>
                            <p className="mb-2 pl-4">(A) 2/3 &nbsp;&nbsp;&nbsp; (B) -1.5 &nbsp;&nbsp;&nbsp; (C) 15% &nbsp;&nbsp;&nbsp; (D) 0.7</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>The probability of an event E, denoted as P(E), must always satisfy the condition: <strong>0 ≤ P(E) ≤ 1</strong>.</p>
                                <p className="mt-2">Since probability cannot be a negative number, <span className="font-bold text-red-600">(B) -1.5</span> cannot be the probability of an event.</p>
                            </div>
                        </div>
                    </div>

                    {/* Q5 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">5.</span> Probability of 'not E'
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"If P(E) = 0.05, what is the probability of 'not E'?"</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>We know that the sum of the probabilities of an event happening and not happening is always 1.</p>
                                <p>Therefore, P(E) + P(not E) = 1</p>
                                <p>0.05 + P(not E) = 1</p>
                                <p>P(not E) = 1 - 0.05 = <span className="font-bold text-green-700">0.95</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q6 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">6.</span> Lemon Flavoured Candies
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A bag contains lemon flavoured candies only. Malini takes out one candy without looking into the bag. What is the probability that she takes out (i) an orange flavoured candy? (ii) a lemon flavoured candy?"</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <div>
                                    <p className="font-semibold text-slate-800">(i) An orange flavoured candy:</p>
                                    <p>Since the bag contains ONLY lemon flavoured candies, picking an orange flavoured candy is an impossible event.</p>
                                    <p>P(orange candy) = <span className="font-bold text-green-700">0</span></p>
                                </div>
                                <div className="border-t pt-4">
                                    <p className="font-semibold text-slate-800">(ii) A lemon flavoured candy:</p>
                                    <p>Since all candies are lemon flavoured, taking out a lemon flavoured candy is a sure (certain) event.</p>
                                    <p>P(lemon candy) = <span className="font-bold text-green-700">1</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q7 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">7.</span> Birthday Probability
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"It is given that in a group of 3 students, the probability of 2 students not having the same birthday is 0.992. What is the probability that the 2 students have the same birthday?"</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md">
                                <p>Given: P(students not having the same birthday) = 0.992</p>
                                <p className="my-2">We know that P(A) + P(not A) = 1</p>
                                <p>Therefore, P(students having the same birthday) = 1 - P(students not having the same birthday)</p>
                                <p>P(same birthday) = 1 - 0.992 = <span className="font-bold text-green-700">0.008</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q8 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">8.</span> Red and Black Balls
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A bag contains 3 red balls and 5 black balls. A ball is drawn at random from the bag. What is the probability that the ball drawn is (i) red ? (ii) not red?"</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <p>Total number of possible outcomes = 3 (red) + 5 (black) = <strong>8</strong></p>

                                <div>
                                    <p className="font-semibold text-slate-800">(i) Probability of getting a red ball:</p>
                                    <p>Number of favourable outcomes (red balls) = 3</p>
                                    <p>P(red) = Number of favourable outcomes / Total outcomes = <span className="font-bold text-green-700">3 / 8</span></p>
                                </div>
                                <div className="border-t pt-2">
                                    <p className="font-semibold text-slate-800">(ii) Probability of not getting a red ball:</p>
                                    <p>P(not red) = 1 - P(red) = 1 - 3/8 = <span className="font-bold text-green-700">5 / 8</span></p>
                                    <p className="text-sm text-slate-500 italic">(Alternatively, favorable outcomes = 5 black balls, so P(not red) = 5/8)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q9 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">9.</span> Marbles in a Box
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A box contains 5 red marbles, 8 white marbles and 4 green marbles. One marble is taken out of the box at random. What is the probability that the marble taken out will be (i) red ? (ii) white ? (iii) not green?"</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <p>Total number of possible outcomes = 5 (red) + 8 (white) + 4 (green) = <strong>17</strong></p>

                                <div className="space-y-2">
                                    <p><strong>(i) P(red):</strong> Favourable outcomes = 5. Therefore, P(red) = <span className="font-bold text-green-700">5 / 17</span></p>
                                    <p><strong>(ii) P(white):</strong> Favourable outcomes = 8. Therefore, P(white) = <span className="font-bold text-green-700">8 / 17</span></p>
                                    <p><strong>(iii) P(not green):</strong> We can observe this as taking out a red or white marble.</p>
                                    <p className="pl-6">Favourable outcomes = 5 + 8 = 13. Therefore, P(not green) = <span className="font-bold text-green-700">13 / 17</span></p>
                                    <p className="pl-6 text-sm text-slate-500 italic">(Or, P(not green) = 1 - P(green) = 1 - 4/17 = 13/17)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q10 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">10.</span> Piggy Bank Coins
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A piggy bank contains hundred 50p coins, fifty ₹ 1 coins, twenty ₹ 2 coins and ten ₹ 5 coins. If it is equally likely that one of the coins will fall out when the bank is turned upside down, what is the probability that the coin (i) will be a 50 p coin? (ii) will not be a ₹ 5 coin?"</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <div>
                                    <p>Number of 50p coins = 100</p>
                                    <p>Number of ₹ 1 coins = 50</p>
                                    <p>Number of ₹ 2 coins = 20</p>
                                    <p>Number of ₹ 5 coins = 10</p>
                                    <p className="font-semibold text-slate-800 mt-2">Total possible outcomes = 100 + 50 + 20 + 10 = 180</p>
                                </div>
                                <div className="border-t pt-2">
                                    <p><strong>(i) P(50p coin):</strong> Favourable outcomes = 100</p>
                                    <p>P(50p coin) = 100 / 180 = <span className="font-bold text-green-700">5 / 9</span></p>
                                </div>
                                <div className="border-t pt-2">
                                    <p><strong>(ii) P(not ₹ 5 coin):</strong> Number of ₹ 5 coins = 10</p>
                                    <p>P(₹ 5 coin) = 10 / 180 = 1 / 18</p>
                                    <p>P(not ₹ 5 coin) = 1 - 1/18 = <span className="font-bold text-green-700">17 / 18</span></p>
                                    <p className="text-sm text-slate-500 italic">(Alternatively, favourable outcomes = 100 + 50 + 20 = 170. P(not ₹ 5) = 170 / 180 = 17 / 18)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q11 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">11.</span> Aquarium Fish
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Gopi buys a fish from a shop for his aquarium. The shopkeeper takes out one fish at random from a tank containing 5 male fish and 8 female fish. What is the probability that the fish taken out is a male fish?"</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-2">
                                <p>Number of male fish = 5</p>
                                <p>Number of female fish = 8</p>
                                <p>Total number of fish in the tank = 5 + 8 = <strong>13</strong></p>
                                <p className="pt-4 mt-2 border-t">P(male fish) = Number of male fish / Total fish = <span className="font-bold text-green-700">5 / 13</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q12 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">12.</span> Spinning an Arrow
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A game of chance consists of spinning an arrow which comes to rest pointing at one of the numbers 1, 2, 3, 4, 5, 6, 7, 8, and these are equally likely outcomes. What is the probability that it will point at (i) 8 ? (ii) an odd number? (iii) a number greater than 2? (iv) a number less than 9?"</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <p>Total number of possible outcomes = <strong>8</strong></p>

                                <div>
                                    <p className="font-semibold text-slate-800">(i) Pointing at 8:</p>
                                    <p>Number of favourable outcomes = 1 (only the number 8). P(8) = <span className="font-bold text-green-700">1 / 8</span></p>
                                </div>
                                <div className="border-t pt-2">
                                    <p className="font-semibold text-slate-800">(ii) An odd number:</p>
                                    <p>Odd numbers are 1, 3, 5, 7. Favourable outcomes = 4.</p>
                                    <p>P(odd number) = 4 / 8 = <span className="font-bold text-green-700">1 / 2</span></p>
                                </div>
                                <div className="border-t pt-2">
                                    <p className="font-semibold text-slate-800">(iii) A number greater than 2:</p>
                                    <p>Numbers greater than 2 are 3, 4, 5, 6, 7, 8. Favourable outcomes = 6.</p>
                                    <p>P(greater than 2) = 6 / 8 = <span className="font-bold text-green-700">3 / 4</span></p>
                                </div>
                                <div className="border-t pt-2">
                                    <p className="font-semibold text-slate-800">(iv) A number less than 9:</p>
                                    <p>All numbers are less than 9. Favourable outcomes = 8.</p>
                                    <p>P(less than 9) = 8 / 8 = <span className="font-bold text-green-700">1</span> (Sure event)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q13 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">13.</span> Throwing a Die
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A die is thrown once. Find the probability of getting (i) a prime number; (ii) a number lying between 2 and 6; (iii) an odd number."</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <p>Total possible outcomes on a die = 6 (which are 1, 2, 3, 4, 5, 6).</p>

                                <div>
                                    <p className="font-semibold text-slate-800">(i) A prime number:</p>
                                    <p>Prime numbers on a die are 2, 3, 5. Favourable outcomes = 3.</p>
                                    <p>P(prime number) = 3 / 6 = <span className="font-bold text-green-700">1 / 2</span></p>
                                </div>
                                <div className="border-t pt-2">
                                    <p className="font-semibold text-slate-800">(ii) A number lying between 2 and 6:</p>
                                    <p>Numbers strictly between 2 and 6 are 3, 4, 5. Favourable outcomes = 3.</p>
                                    <p>P(between 2 and 6) = 3 / 6 = <span className="font-bold text-green-700">1 / 2</span></p>
                                </div>
                                <div className="border-t pt-2">
                                    <p className="font-semibold text-slate-800">(iii) An odd number:</p>
                                    <p>Odd numbers are 1, 3, 5. Favourable outcomes = 3.</p>
                                    <p>P(odd number) = 3 / 6 = <span className="font-bold text-green-700">1 / 2</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q14 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">14.</span> Drawing a Card
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"One card is drawn from a well-shuffled deck of 52 cards. Find the probability of getting (i) a king of red colour (ii) a face card (iii) a red face card (iv) the jack of hearts (v) a spade (vi) the queen of diamonds"</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <p>Total number of possible outcomes = <strong>52</strong></p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                                    <div>
                                        <p><strong>(i) P(King of red colour):</strong></p>
                                        <p>Number of red kings = 2 (Heart, Diamond). P = 2/52 = <span className="font-bold text-green-700">1 / 26</span></p>
                                    </div>
                                    <div>
                                        <p><strong>(ii) P(A face card):</strong></p>
                                        <p>Number of face cards (J, Q, K in 4 suits) = 12. P = 12/52 = <span className="font-bold text-green-700">3 / 13</span></p>
                                    </div>
                                    <div className="border-t pt-2 md:border-0 md:pt-0">
                                        <p><strong>(iii) P(A red face card):</strong></p>
                                        <p>Number of red face cards = 6. P = 6/52 = <span className="font-bold text-green-700">3 / 26</span></p>
                                    </div>
                                    <div className="border-t pt-2 md:border-0 md:pt-0">
                                        <p><strong>(iv) P(The jack of hearts):</strong></p>
                                        <p>Number of jack of hearts = 1. P = <span className="font-bold text-green-700">1 / 52</span></p>
                                    </div>
                                    <div className="border-t pt-2 md:border-t pt-2">
                                        <p><strong>(v) P(A spade):</strong></p>
                                        <p>Number of spades = 13. P = 13/52 = <span className="font-bold text-green-700">1 / 4</span></p>
                                    </div>
                                    <div className="border-t pt-2 md:border-t pt-2">
                                        <p><strong>(vi) P(The queen of diamonds):</strong></p>
                                        <p>Number of queen of diamonds = 1. P = <span className="font-bold text-green-700">1 / 52</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q15 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">15.</span> Five Cards
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Five cards—the ten, jack, queen, king and ace of diamonds, are well-shuffled with their face downwards. One card is then picked up at random. (i) What is the probability that the card is the queen? (ii) If the queen is drawn and put aside, what is the probability that the second card picked up is (a) an ace? (b) a queen?"</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <p>Initial total number of cards = <strong>5</strong></p>

                                <div>
                                    <p className="font-semibold text-slate-800">(i) Probability that the card is the queen:</p>
                                    <p>Number of queens = 1. P(queen) = <span className="font-bold text-green-700">1 / 5</span></p>
                                </div>
                                <div className="border-t pt-4">
                                    <p className="font-semibold text-slate-800">(ii) If the queen is drawn and put aside:</p>
                                    <p>Now, the remaining number of cards = <strong>4</strong> (ten, jack, king, ace of diamonds).</p>
                                    <ul className="list-disc pl-5 mt-2 space-y-2">
                                        <li><strong>(a)</strong> Probability that the second card is an ace: There is exactly 1 ace left. P(ace) = <span className="font-bold text-green-700">1 / 4</span></li>
                                        <li><strong>(b)</strong> Probability that the second card is a queen: There are 0 queens left. P(queen) = <span className="font-bold text-green-700">0</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q16 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">16.</span> Defective Pens
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"12 defective pens are accidentally mixed with 132 good ones. It is not possible to just look at a pen and tell whether or not it is defective. One pen is taken out at random from this lot. Determine the probability that the pen taken out is a good one."</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-2">
                                <p>Number of good pens = 132</p>
                                <p>Number of defective pens = 12</p>
                                <p>Total number of pens = 132 + 12 = <strong>144</strong></p>
                                <p className="pt-4 mt-2 border-t">P(good pen) = Number of good pens / Total pens = 132 / 144 = <span className="font-bold text-green-700">11 / 12</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Q17 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">17.</span> Lot of Bulbs
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"(i) A lot of 20 bulbs contain 4 defective ones. One bulb is drawn at random from the lot. What is the probability that this bulb is defective? (ii) Suppose the bulb drawn in (i) is not defective and is not replaced. Now one bulb is drawn at random from the rest. What is the probability that this bulb is not defective?"</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <div>
                                    <p className="font-semibold text-slate-800">(i) Probability of drawing a defective bulb:</p>
                                    <p>Total bulbs = 20, Defective bulbs = 4.</p>
                                    <p>P(defective) = 4 / 20 = <span className="font-bold text-green-700">1 / 5</span></p>
                                </div>
                                <div className="border-t pt-2">
                                    <p className="font-semibold text-slate-800">(ii) If the first drawn bulb is not defective and not replaced:</p>
                                    <p>The bulb was good, so remaining good bulbs = 16 - 1 = 15.</p>
                                    <p>Total remaining bulbs = 20 - 1 = 19.</p>
                                    <p>P(not defective) = <span className="font-bold text-green-700">15 / 19</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q18 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">18.</span> Numbered Discs
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A box contains 90 discs which are numbered from 1 to 90. If one disc is drawn at random from the box, find the probability that it bears (i) a two-digit number (ii) a perfect square number (iii) a number divisible by 5."</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <p>Total possible outcomes = <strong>90</strong></p>

                                <div className="space-y-4">
                                    <div className="border-b pb-2">
                                        <p><strong>(i) P(A two-digit number):</strong></p>
                                        <p>Two-digit numbers from 1 to 90 are 10, 11, ..., 90. Number of such discs = 90 - 9 = 81.</p>
                                        <p>P(two-digit number) = 81 / 90 = <span className="font-bold text-green-700">9 / 10</span></p>
                                    </div>
                                    <div className="border-b pb-2">
                                        <p><strong>(ii) P(A perfect square number):</strong></p>
                                        <p>Perfect squares from 1 to 90 are: 1, 4, 9, 16, 25, 36, 49, 64, 81. Number of such discs = 9.</p>
                                        <p>P(perfect square) = 9 / 90 = <span className="font-bold text-green-700">1 / 10</span></p>
                                    </div>
                                    <div>
                                        <p><strong>(iii) P(A number divisible by 5):</strong></p>
                                        <p>Numbers divisible by 5 from 1 to 90 are: 5, 10, 15, ..., 90. Number of such discs = 90 / 5 = 18.</p>
                                        <p>P(divisible by 5) = 18 / 90 = <span className="font-bold text-green-700">1 / 5</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q19 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">19.</span> Lettered Die
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A child has a die whose six faces show the letters as given below: A, B, C, D, E, A. The die is thrown once. What is the probability of getting (i) A? (ii) D?"</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <p>Total number of possible outcomes (faces) = <strong>6</strong></p>

                                <div>
                                    <p className="font-semibold text-slate-800">(i) Probability of getting 'A':</p>
                                    <p>The letter 'A' appears on 2 faces. P(A) = 2 / 6 = <span className="font-bold text-green-700">1 / 3</span></p>
                                </div>
                                <div className="border-t pt-2">
                                    <p className="font-semibold text-slate-800">(ii) Probability of getting 'D':</p>
                                    <p>The letter 'D' appears on 1 face. P(D) = <span className="font-bold text-green-700">1 / 6</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q20 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">20.</span> Drop a Die in Circle
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Suppose you drop a die at random on the rectangular region shown... What is the probability that it will land inside the circle with diameter 1m?"</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <p>Area of the rectangular region = length × breadth = 3m × 2m = <strong>6 sq. m</strong></p>
                                <p>Diameter of the circle = 1m. Thus, radius r = 0.5m (or 1/2 m).</p>
                                <p>Area of the circle = πr² = π(1/2)² = <strong>π/4 sq. m</strong></p>

                                <div className="border-t pt-4">
                                    <p>Probability that the die will land inside the circle = (Area of circle) / (Area of rectangle)</p>
                                    <p>P(inside circle) = (π/4) / 6 = <span className="font-bold text-green-700">π / 24</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q21 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">21.</span> Buying a Pen
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A lot consists of 144 ball pens of which 20 are defective and the others are good. Nuri will buy a pen if it is good, but will not buy if it is defective. The shopkeeper draws one pen at random and gives it to her. What is the probability that (i) She will buy it? (ii) She will not buy it?"</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <p>Total number of pens = <strong>144</strong></p>
                                <p>Number of defective pens = <strong>20</strong></p>
                                <p>Number of good pens = 144 - 20 = <strong>124</strong></p>

                                <div className="border-t pt-4">
                                    <p className="font-semibold text-slate-800">(i) Probability she will buy it:</p>
                                    <p>She buys the pen if it is good. Favourable outcomes = 124.</p>
                                    <p>P(She will buy it) = 124 / 144 = <span className="font-bold text-green-700">31 / 36</span></p>
                                </div>
                                <div className="border-t pt-2">
                                    <p className="font-semibold text-slate-800">(ii) Probability she will not buy it:</p>
                                    <p>She will not buy it if it is defective. Favourable outcomes = 20.</p>
                                    <p>P(She will not buy it) = 20 / 144 = <span className="font-bold text-green-700">5 / 36</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q22 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">22.</span> Sum on 2 Dice
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"(i) Complete the following table: (ii) A student argues that 'there are 11 possible outcomes... Do you agree?"</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <div>
                                    <p className="font-semibold text-slate-800">(i) Complete table of probabilities for sums:</p>
                                    <p className="mb-2">Total possible outcomes for 2 dice = 6 × 6 = 36.</p>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full border-collapse border border-slate-300 bg-white">
                                            <thead>
                                                <tr className="bg-slate-100">
                                                    <th className="border border-slate-300 p-2">Event: 'Sum'</th>
                                                    <th className="border border-slate-300 p-2 text-center">2</th><th className="border border-slate-300 p-2 text-center">3</th><th className="border border-slate-300 p-2 text-center">4</th><th className="border border-slate-300 p-2 text-center">5</th><th className="border border-slate-300 p-2 text-center">6</th><th className="border border-slate-300 p-2 text-center">7</th><th className="border border-slate-300 p-2 text-center">8</th><th className="border border-slate-300 p-2 text-center">9</th><th className="border border-slate-300 p-2 text-center">10</th><th className="border border-slate-300 p-2 text-center">11</th><th className="border border-slate-300 p-2 text-center">12</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="border border-slate-300 p-2 font-semibold">Probability</td>
                                                    <td className="border border-slate-300 p-2 text-center">1/36</td>
                                                    <td className="border border-slate-300 p-2 text-center text-blue-700 font-bold">2/36</td>
                                                    <td className="border border-slate-300 p-2 text-center text-blue-700 font-bold">3/36</td>
                                                    <td className="border border-slate-300 p-2 text-center text-blue-700 font-bold">4/36</td>
                                                    <td className="border border-slate-300 p-2 text-center text-blue-700 font-bold">5/36</td>
                                                    <td className="border border-slate-300 p-2 text-center text-blue-700 font-bold">6/36</td>
                                                    <td className="border border-slate-300 p-2 text-center">5/36</td>
                                                    <td className="border border-slate-300 p-2 text-center text-blue-700 font-bold">4/36</td>
                                                    <td className="border border-slate-300 p-2 text-center text-blue-700 font-bold">3/36</td>
                                                    <td className="border border-slate-300 p-2 text-center text-blue-700 font-bold">2/36</td>
                                                    <td className="border border-slate-300 p-2 text-center">1/36</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="border-t pt-2">
                                    <p className="font-semibold text-slate-800">(ii) Argument evaluation:</p>
                                    <p>We <strong>do not agree</strong> with this argument. While there are indeed 11 possible outcomes for the sum, these outcomes are <strong>not equally likely</strong> (as clearly shown in the completed table). Therefore, the probability of each is NOT 1/11.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q23 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">23.</span> Tossing a Coin 3 Times
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A game consists of tossing a one rupee coin 3 times... Hanif wins if all the tosses give the same result i.e., three heads or three tails, and loses otherwise. Calculate the probability that Hanif will lose the game."</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <p>Total possible outcomes of tossing a coin 3 times = 2³ = <strong>8</strong></p>
                                <p>The possible outcomes are: HHH, HHT, HTH, HTT, THH, THT, TTH, TTT.</p>
                                <p>Hanif wins if he gets three heads (HHH) or three tails (TTT). Favourable outcomes for winning = 2.</p>
                                <p>Thus, the favourable outcomes for <strong>losing</strong> the game are the remaining 6 outcomes (HHT, HTH, HTT, THH, THT, TTH).</p>
                                <div className="border-t pt-2">
                                    <p>P(Hanif loses the game) = 6 / 8 = <span className="font-bold text-green-700">3 / 4</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q24 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">24.</span> Throwing a Die Twice
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"A die is thrown twice. What is the probability that (i) 5 will not come up either time? (ii) 5 will come up at least once?"</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-4">
                                <p>Total number of possible outcomes for throwing two dice = 6 × 6 = <strong>36</strong></p>

                                <p>The outcomes where 5 comes up at least once are: (1,5), (2,5), (3,5), (4,5), (5,5), (6,5), (5,1), (5,2), (5,3), (5,4), (5,6).</p>
                                <p>Total favourable outcomes for 5 coming up at least once = <strong>11</strong>.</p>

                                <div className="border-t pt-4">
                                    <p className="font-semibold text-slate-800">(ii) P(5 will come up at least once):</p>
                                    <p>P(5 comes up at least once) = <span className="font-bold text-green-700">11 / 36</span></p>
                                </div>
                                <div className="border-t pt-2">
                                    <p className="font-semibold text-slate-800">(i) P(5 will not come up either time):</p>
                                    <p>This is the complement of the event in part (ii).</p>
                                    <p>P(5 will not come up) = 1 - P(5 comes up at least once) = 1 - 11/36 = <span className="font-bold text-green-700">25 / 36</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Q25 */}
                    <div className="border border-slate-200 rounded-lg overflow-hidden">
                        <div className="bg-slate-100 p-4 border-b border-slate-200 text-lg font-semibold flex items-center gap-4">
                            <span className="text-blue-700">25.</span> True or False Arguments
                        </div>
                        <div className="bg-slate-50 p-6 space-y-4 text-slate-700">
                            <p className="italic mb-2">"Which of the following arguments are correct and which are not correct? Give reasons for your answer."</p>

                            <div className="font-serif text-lg bg-white p-4 border rounded-md space-y-6">
                                <div>
                                    <p className="font-semibold text-slate-800">(i) "If two coins are tossed simultaneously there are three possible outcomes—two heads, two tails or one of each. Therefore, for each of these outcomes, the probability is 1/3."</p>
                                    <p className="mt-2 text-slate-800">Conclusion: <span className="font-bold text-red-600">Incorrect.</span></p>
                                    <p><strong>Reason:</strong> The outcome "one of each" can happen in TWO different ways: Head on 1st coin & Tail on 2nd (HT), OR Tail on 1st coin & Head on 2nd (TH). Therefore, the three named events (Two Heads, Two Tails, One of Each) are NOT equally likely. Their probabilities are 1/4, 1/4, and 2/4 (which is 1/2), respectively.</p>
                                </div>
                                <div className="border-t pt-4">
                                    <p className="font-semibold text-slate-800">(ii) "If a die is thrown, there are two possible outcomes—an odd number or an even number. Therefore, the probability of getting an odd number is 1/2."</p>
                                    <p className="mt-2 text-slate-800">Conclusion: <span className="font-bold text-green-700">Correct.</span></p>
                                    <p><strong>Reason:</strong> When a die is thrown, there are 3 odd numbers (1, 3, 5) and 3 even numbers (2, 4, 6). Since there are an equal number of odd and even possibilities (3 each) out of the 6 total outcomes, these two events (odd or even) are equally likely. Thus, the probability of getting an odd number is 3/6 = 1/2.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
