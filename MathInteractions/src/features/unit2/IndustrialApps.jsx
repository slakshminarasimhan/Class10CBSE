import { motion } from 'framer-motion';
import { TrendingUp, Activity, Satellite } from 'lucide-react';

export default function IndustrialApps() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 p-6 border-b border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    Industrial Applications of Algebra
                </h3>
            </div>

            <div className="p-6 grid md:grid-cols-3 gap-8">
                {/* Financial Modelling */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-green-100 rounded-lg text-green-600">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-700">Finance & Economics</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        <span className="font-bold text-slate-800">Arithmetic Progressions (AP)</span> are used to calculate
                        Simple Interest and depreciation. Compound Interest and population growth are modeled using
                        <span className="font-bold text-slate-800"> Geometric Progressions (GP)</span> and exponential functions.
                    </p>
                </div>

                {/* Physics & Trajectories */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                            <Satellite className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-700">Physics & Ballistics</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        <span className="font-bold text-slate-800">Quadratic Equations</span> describe the path of projectiles (balls, missiles, satellites).
                        Parabolic reflectors in satellite dishes and car headlights rely on the focal properties of parabolas.
                    </p>
                </div>

                {/* Chemical Engineering */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                            <Activity className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-700">Chemical Engineering</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Systems of <span className="font-bold text-slate-800">Linear Equations</span> are used to balance chemical equations
                        and determine the precise mix of ingredients in manufacturing processes (e.g., mixing alloys or pharmaceutical compounds).
                    </p>
                </div>
            </div>
        </div>
    );
}
