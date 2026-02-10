import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, HelpCircle, ArrowRight } from 'lucide-react';

export default function PracticalAssignment({
    question,
    image,
    correctAnswer,
    hint,
    explanation,
    unit
}) {
    const [input, setInput] = useState('');
    const [status, setStatus] = useState('idle'); // 'idle', 'correct', 'incorrect'
    const [showHint, setShowHint] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Normalize input: remove spaces, lowercase
        const normalizedInput = input.trim().toLowerCase();
        const normalizedAnswer = String(correctAnswer).trim().toLowerCase();

        // Allow for strict equality or custom validation function if needed in future
        // For now, simple string/number matching
        if (normalizedInput === normalizedAnswer) {
            setStatus('correct');
        } else {
            setStatus('incorrect');
        }
    };

    return (
        <div className="mt-6 bg-white rounded-xl border-2 border-slate-200 overflow-hidden shadow-sm">
            <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                <h4 className="font-bold text-slate-700 flex items-center gap-2">
                    <span className="bg-slate-200 p-1 rounded text-slate-600">📝</span>
                    Practical Assignment
                </h4>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{unit}</span>
            </div>

            <div className="p-6">
                <p className="text-slate-800 font-medium mb-4">{question}</p>

                {image && (
                    <div className="mb-6 rounded-lg overflow-hidden border border-slate-100 bg-slate-50 flex justify-center">
                        {image}
                    </div>
                )}

                <AnimatePresence mode="wait">
                    {status === 'correct' ? (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-green-50 rounded-lg p-5 border border-green-100"
                        >
                            <div className="flex items-start gap-3">
                                <div className="bg-green-100 p-2 rounded-full text-green-600 mt-1">
                                    <Check className="w-5 h-5" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-green-800 mb-1">Excellent Work!</h5>
                                    <p className="text-green-700 text-sm leading-relaxed">{explanation}</p>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-4"
                        >
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => {
                                        setInput(e.target.value);
                                        if (status === 'incorrect') setStatus('idle');
                                    }}
                                    placeholder="Enter your answer..."
                                    className={`flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 transition-all
                                        ${status === 'incorrect'
                                            ? 'border-red-300 focus:ring-red-200 bg-red-50 text-red-700'
                                            : 'border-slate-200 focus:ring-blue-200 focus:border-blue-400'
                                        }`}
                                />
                                <button
                                    type="submit"
                                    disabled={!input}
                                    className="bg-slate-900 text-white px-6 rounded-lg font-medium hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                >
                                    Submit
                                </button>
                            </div>

                            {status === 'incorrect' && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="flex items-center gap-2 text-red-600 text-sm"
                                >
                                    <X className="w-4 h-4" />
                                    <span>That's not quite right. Try again!</span>
                                    <button
                                        type="button"
                                        onClick={() => setShowHint(!showHint)}
                                        className="ml-auto text-slate-500 hover:text-blue-600 flex items-center gap-1 text-xs underline"
                                    >
                                        <HelpCircle className="w-3 h-3" />
                                        {showHint ? "Hide Hint" : "Need a Hint?"}
                                    </button>
                                </motion.div>
                            )}

                            {showHint && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="bg-yellow-50 text-yellow-800 p-3 rounded text-sm border border-yellow-100 flex gap-2"
                                >
                                    <span className="font-bold">Hint:</span>
                                    {hint}
                                </motion.div>
                            )}
                        </motion.form>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
