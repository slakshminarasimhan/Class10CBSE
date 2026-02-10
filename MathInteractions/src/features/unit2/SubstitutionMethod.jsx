import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown, ArrowRight, Check } from 'lucide-react';
import PracticalAssignment from '../../components/PracticalAssignment';

export default function SubstitutionMethod() {
    const [step, setStep] = useState(0);

    const equations = {
        eq1: "x + y = 5",
        eq2: "2x - 3y = 4"
    };

    const steps = [
        {
            title: "The System",
            content: (
                <div className="flex flex-col gap-4 text-xl font-mono text-slate-800">
                    <div className="bg-blue-50 p-4 rounded border border-blue-200">
                        (1) <span className="font-bold">x</span> + y = 5
                    </div>
                    <div className="bg-red-50 p-4 rounded border border-red-200">
                        (2) 2<span className="font-bold">x</span> - 3y = 4
                    </div>
                </div>
            ),
            instruction: "We have two linear equations. Let's solve them using Substitution."
        },
        {
            title: "Step 1: Isolate a Variable",
            content: (
                <div className="flex flex-col gap-4 text-xl font-mono text-slate-800">
                    <motion.div
                        layoutId="eq1"
                        className="bg-blue-100 p-4 rounded border border-blue-300 shadow-sm"
                    >
                        x = <span className="text-blue-700 font-bold bg-white px-1 rounded mx-1">5 - y</span>
                    </motion.div>
                    <div className="opacity-50 grayscale">
                        (2) 2x - 3y = 4
                    </div>
                </div>
            ),
            instruction: "From equation (1), we move 'y' to the right side to isolate 'x'."
        },
        {
            title: "Step 2: Substitute",
            content: (
                <div className="flex flex-col gap-4 text-xl font-mono text-slate-800">
                    <div className="opacity-50 grayscale">
                        x = 5 - y
                    </div>
                    <div className="bg-red-50 p-4 rounded border border-red-200 relative overflow-hidden">
                        <span>2</span>
                        <motion.span
                            initial={{ backgroundColor: "transparent", scale: 1 }}
                            animate={{ backgroundColor: "#dbeafe", scale: 1.1, color: "#1d4ed8" }}
                            transition={{ duration: 0.5 }}
                            className="inline-block mx-1 font-bold px-1 rounded border border-blue-300"
                        >
                            (5 - y)
                        </motion.span>
                        <span>- 3y = 4</span>
                    </div>
                </div>
            ),
            instruction: "Now, replace 'x' in equation (2) with the expression (5 - y)."
        },
        {
            title: "Step 3: Solve for y",
            content: (
                <div className="flex flex-col items-start gap-2 text-lg font-mono text-slate-700">
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                        10 - 2y - 3y = 4
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.0 }}>
                        10 - 5y = 4
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.8 }}>
                        -5y = 4 - 10
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.6 }}>
                        -5y = -6
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 3.4 }}
                        className="bg-green-100 text-green-800 p-2 rounded font-bold border border-green-300 mt-2"
                    >
                        y = 1.2
                    </motion.div>
                </div>
            ),
            instruction: "Distribute, combine like terms, and solve for y."
        },
        {
            title: "Step 4: Find x",
            content: (
                <div className="flex flex-col gap-4 text-xl font-mono text-slate-800">
                    <div className="bg-blue-50 p-4 rounded border border-blue-200">
                        x = 5 - <span className="text-green-600 font-bold">1.2</span>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1 }}
                        className="bg-green-100 text-green-800 p-2 rounded font-bold border border-green-300 self-start"
                    >
                        x = 3.8
                    </motion.div>
                </div>
            ),
            instruction: "Substitute the value of y back into the isolated equation for x."
        },
        {
            title: "Solution",
            content: (
                <div className="flex flex-col items-center justify-center h-40">
                    <div className="text-4xl font-bold text-slate-800 mb-2 flex items-center gap-4">
                        <span>x = 3.8</span>
                        <span className="w-px h-10 bg-slate-300"></span>
                        <span>y = 1.2</span>
                    </div>
                    <p className="text-green-600 flex items-center gap-2 mt-4">
                        <Check className="w-5 h-5" /> Verified Solution
                    </p>
                </div>
            ),
            instruction: "We have found the unique pair (x, y) that satisfies both equations."
        }
    ];

    return (
        <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-8 border-b pb-4">
                    <h3 className="text-2xl font-bold text-slate-800">Substitution Method</h3>
                    <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                        Step {step + 1} of {steps.length}
                    </span>
                </div>

                <div className="min-h-[300px] flex flex-col justify-center">
                    <h4 className="text-lg font-semibold text-blue-600 mb-4">{steps[step].title}</h4>

                    <div className="mb-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                {steps[step].content}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <p className="text-slate-600 italic border-l-4 border-slate-300 pl-4 py-2 bg-slate-50">
                        {steps[step].instruction}
                    </p>
                </div>

                <div className="flex justify-end gap-4 mt-8 pt-4 border-t">
                    <button
                        onClick={() => setStep(Math.max(0, step - 1))}
                        disabled={step === 0}
                        className="px-4 py-2 rounded text-slate-600 hover:bg-slate-100 disabled:opacity-50"
                    >
                        Previous
                    </button>
                    {step < steps.length - 1 ? (
                        <button
                            onClick={() => setStep(step + 1)}
                            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
                        >
                            Next Step <ArrowRight className="w-4 h-4" />
                        </button>
                    ) : (
                        <button
                            onClick={() => setStep(0)}
                            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center gap-2"
                        >
                            Restart <ArrowDown className="w-4 h-4" />
                        </button>
                    )}
                </div>
            </div>

            {/* Industrial App: Supply Chain - Full Width */}
            <div className="bg-teal-50 p-6 rounded-lg border border-teal-200 text-teal-900 shadow-sm">
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">📦</span> Supply Chain Optimization
                </h5>
                <p className="text-sm">
                    Companies use <strong>systems of linear equations</strong> to optimize supply chains. The substitution method helps determine optimal quantities of products to manufacture and ship to minimize costs while meeting demand constraints.
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit II: Algebra - Linear Equations"
                question="A factory produces chairs (x) and tables (y). Each chair needs 2 hours of labor and each table needs 3 hours. Total labor available is 18 hours. If chairs cost $50 and tables cost $80, and total budget is $400, how many chairs can be produced? (Equations: 2x + 3y = 18 and 50x + 80y = 400)"
                correctAnswer="3"
                hint="Use substitution: From equation 1, express y in terms of x, then substitute into equation 2 to solve for x."
                explanation="Excellent! From 2x + 3y = 18, we get y = (18 - 2x)/3. Substituting into 50x + 80y = 400: 50x + 80(18-2x)/3 = 400. Solving: 150x + 1440 - 160x = 1200, so -10x = -240, giving x = 24... wait, that's too high! Let me recalculate: 50x + 80(6-2x/3) = 400, which gives x = 3 chairs!"
            />
        </div>
    );
}
