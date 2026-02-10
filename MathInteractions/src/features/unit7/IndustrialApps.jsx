import { ClipboardCheck, Umbrella, BrainCircuit } from 'lucide-react';

export default function IndustrialApps() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 p-6 border-b border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    Industrial Applications of Statistics & Probability
                </h3>
            </div>

            <div className="p-6 grid md:grid-cols-3 gap-8">
                {/* Quality Control */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600">
                            <ClipboardCheck className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-700">Quality Control (Six Sigma)</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Factories use <span className="font-bold text-slate-800">Normal Distribution</span> and <span className="font-bold text-slate-800">Standard Deviation</span> to
                        detect defects. "Six Sigma" aims to reduce defects to fewer than 3.4 per million parts by analyzing statistical data.
                    </p>
                </div>

                {/* Insurance */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                            <Umbrella className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-700">Insurance (Actuarial Science)</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Insurance companies use <span className="font-bold text-slate-800">Probability</span> to calculate premiums.
                        By analyzing data (age, health, driving history), they calculate the risk (probability) of a claim being made.
                    </p>
                </div>

                {/* AI & Data Science */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-violet-100 rounded-lg text-violet-600">
                            <BrainCircuit className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-700">AI & Machine Learning</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Artificial Intelligence is built on statistics. Neural networks learn by adjusting weights based on
                        <span className="font-bold text-slate-800"> statistical probability</span> to predict outcomes, recognize faces, or recommend movies.
                    </p>
                </div>
            </div>
        </div>
    );
}
