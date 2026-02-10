import { useState } from 'react';
import { motion } from 'framer-motion';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function MeanMethods() {
    const [data, setData] = useState([
        { class: '0-10', midpoint: 5, frequency: 3 },
        { class: '10-20', midpoint: 15, frequency: 5 },
        { class: '20-30', midpoint: 25, frequency: 8 },
        { class: '30-40', midpoint: 35, frequency: 4 },
        { class: '40-50', midpoint: 45, frequency: 2 }
    ]);

    const [assumedMean, setAssumedMean] = useState(25);
    const [classWidth, setClassWidth] = useState(10);

    const handleFreqChange = (index, value) => {
        const newData = [...data];
        newData[index].frequency = Math.max(0, parseInt(value) || 0);
        setData(newData);
    };

    // Method 1: Direct Method
    const calculateDirectMethod = () => {
        let sumFx = 0;
        let sumF = 0;
        data.forEach(item => {
            sumFx += item.midpoint * item.frequency;
            sumF += item.frequency;
        });
        return sumF > 0 ? sumFx / sumF : 0;
    };

    // Method 2: Assumed Mean Method
    const calculateAssumedMeanMethod = () => {
        let sumFd = 0;
        let sumF = 0;
        data.forEach(item => {
            const d = item.midpoint - assumedMean;
            sumFd += item.frequency * d;
            sumF += item.frequency;
        });
        return sumF > 0 ? assumedMean + (sumFd / sumF) : assumedMean;
    };

    // Method 3: Step Deviation Method
    const calculateStepDeviationMethod = () => {
        let sumFu = 0;
        let sumF = 0;
        data.forEach(item => {
            const u = (item.midpoint - assumedMean) / classWidth;
            sumFu += item.frequency * u;
            sumF += item.frequency;
        });
        return sumF > 0 ? assumedMean + ((sumFu / sumF) * classWidth) : assumedMean;
    };

    const directMean = calculateDirectMethod();
    const assumedMeanResult = calculateAssumedMeanMethod();
    const stepDeviationResult = calculateStepDeviationMethod();

    return (
        <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                <h3 className="text-lg font-semibold text-slate-800 mb-6">Methods to Calculate Mean of Grouped Data</h3>
                <p className="text-sm text-slate-600 mb-6">
                    Three different methods to calculate the mean of grouped frequency distribution. All methods give the same result!
                </p>

                {/* Data Table */}
                <div className="mb-6">
                    <h4 className="font-semibold text-purple-600 mb-3">Grouped Frequency Distribution</h4>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-slate-100">
                                    <th className="border border-slate-300 p-2">Class Interval</th>
                                    <th className="border border-slate-300 p-2">Midpoint (x)</th>
                                    <th className="border border-slate-300 p-2">Frequency (f)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, idx) => (
                                    <tr key={idx} className="hover:bg-slate-50">
                                        <td className="border border-slate-300 p-2 text-center font-semibold">{item.class}</td>
                                        <td className="border border-slate-300 p-2 text-center">{item.midpoint}</td>
                                        <td className="border border-slate-300 p-2 text-center">
                                            <input
                                                type="number"
                                                min="0"
                                                value={item.frequency}
                                                onChange={(e) => handleFreqChange(idx, e.target.value)}
                                                className="w-16 px-2 py-1 border border-slate-300 rounded text-center"
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Parameters for Assumed Mean and Step Deviation */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <label className="block text-sm font-semibold text-blue-700 mb-2">
                            Assumed Mean (A) = {assumedMean}
                        </label>
                        <input
                            type="range"
                            min="5"
                            max="45"
                            step="10"
                            value={assumedMean}
                            onChange={(e) => setAssumedMean(Number(e.target.value))}
                            className="w-full accent-blue-600"
                        />
                        <p className="text-xs text-blue-600 mt-1">Used in Methods 2 & 3</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <label className="block text-sm font-semibold text-green-700 mb-2">
                            Class Width (h) = {classWidth}
                        </label>
                        <p className="text-xs text-green-600 mt-1">Used in Method 3 (Step Deviation)</p>
                    </div>
                </div>

                {/* Three Methods Side by Side */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Method 1: Direct */}
                    <div className="bg-gradient-to-br from-rose-50 to-rose-100 p-6 rounded-lg border border-rose-200">
                        <h5 className="font-bold text-rose-700 mb-3 border-b border-rose-300 pb-2">
                            Method 1: Direct Method
                        </h5>
                        <div className="space-y-2 text-sm">
                            <p className="font-mono text-xs bg-white p-2 rounded">
                                Mean = Σ(fx) / Σf
                            </p>
                            <div className="bg-white p-3 rounded space-y-1">
                                <p className="text-xs text-slate-600">Σ(fx) = {data.reduce((sum, item) => sum + (item.midpoint * item.frequency), 0)}</p>
                                <p className="text-xs text-slate-600">Σf = {data.reduce((sum, item) => sum + item.frequency, 0)}</p>
                            </div>
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 0.5 }}
                                className="bg-rose-600 text-white p-3 rounded-lg text-center"
                            >
                                <p className="text-xs">Mean =</p>
                                <p className="text-2xl font-bold">{directMean.toFixed(2)}</p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Method 2: Assumed Mean */}
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                        <h5 className="font-bold text-blue-700 mb-3 border-b border-blue-300 pb-2">
                            Method 2: Assumed Mean
                        </h5>
                        <div className="space-y-2 text-sm">
                            <p className="font-mono text-xs bg-white p-2 rounded">
                                Mean = A + Σ(fd) / Σf
                            </p>
                            <div className="bg-white p-3 rounded space-y-1">
                                <p className="text-xs text-slate-600">A = {assumedMean}</p>
                                <p className="text-xs text-slate-600">d = x - A</p>
                                <p className="text-xs text-slate-600">Σ(fd) = {data.reduce((sum, item) => sum + (item.frequency * (item.midpoint - assumedMean)), 0)}</p>
                                <p className="text-xs text-slate-600">Σf = {data.reduce((sum, item) => sum + item.frequency, 0)}</p>
                            </div>
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 0.5 }}
                                className="bg-blue-600 text-white p-3 rounded-lg text-center"
                            >
                                <p className="text-xs">Mean =</p>
                                <p className="text-2xl font-bold">{assumedMeanResult.toFixed(2)}</p>
                            </motion.div>
                        </div>
                    </div>

                    {/* Method 3: Step Deviation */}
                    <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200">
                        <h5 className="font-bold text-green-700 mb-3 border-b border-green-300 pb-2">
                            Method 3: Step Deviation
                        </h5>
                        <div className="space-y-2 text-sm">
                            <p className="font-mono text-xs bg-white p-2 rounded">
                                Mean = A + (Σfu / Σf) × h
                            </p>
                            <div className="bg-white p-3 rounded space-y-1">
                                <p className="text-xs text-slate-600">A = {assumedMean}</p>
                                <p className="text-xs text-slate-600">u = (x - A) / h</p>
                                <p className="text-xs text-slate-600">h = {classWidth}</p>
                                <p className="text-xs text-slate-600">Σ(fu) = {data.reduce((sum, item) => sum + (item.frequency * ((item.midpoint - assumedMean) / classWidth)), 0).toFixed(2)}</p>
                                <p className="text-xs text-slate-600">Σf = {data.reduce((sum, item) => sum + item.frequency, 0)}</p>
                            </div>
                            <motion.div
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 0.5 }}
                                className="bg-green-600 text-white p-3 rounded-lg text-center"
                            >
                                <p className="text-xs">Mean =</p>
                                <p className="text-2xl font-bold">{stepDeviationResult.toFixed(2)}</p>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Verification */}
                <div className="mt-6 bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <p className="text-sm text-purple-800 font-semibold text-center">
                        ✓ All three methods give the same result: Mean ≈ {directMean.toFixed(2)}
                    </p>
                    <p className="text-xs text-purple-600 text-center mt-1">
                        Choose the method that makes calculation easiest for your data!
                    </p>
                </div>
            </div>

            {/* Industrial App: Market Research - Full Width */}
            <div className="bg-sky-50 p-6 rounded-lg border border-sky-200 text-sky-900 shadow-sm">
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">📈</span> Market Research
                </h5>
                <p className="text-sm">
                    Market researchers use <strong>mean calculation methods</strong> to analyze survey data efficiently. When processing thousands of responses grouped by age ranges or income brackets, the step deviation method simplifies calculations significantly, especially when dealing with large numbers. This helps companies understand consumer behavior and make data-driven decisions!
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit VII: Statistics - Mean Calculation Methods"
                question="Calculate the mean of the following grouped data using the Assumed Mean Method (A = 25): Classes: 0-10(f=2), 10-20(f=5), 20-30(f=7), 30-40(f=3), 40-50(f=3). Use midpoints: 5, 15, 25, 35, 45."
                correctAnswer="25"
                hint="Mean = A + Σ(fd)/Σf. Calculate d = x - A for each class, then find Σ(fd) and Σf."
                explanation="Perfect! With A = 25: d values are -20, -10, 0, 10, 20. Σ(fd) = 2(-20) + 5(-10) + 7(0) + 3(10) + 3(20) = -40 - 50 + 0 + 30 + 60 = 0. Σf = 20. Mean = 25 + (0/20) = 25!"
            />
        </div>
    );
}
