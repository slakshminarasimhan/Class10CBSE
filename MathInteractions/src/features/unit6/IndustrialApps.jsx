import { Package, Thermometer, Syringe } from 'lucide-react';

export default function IndustrialApps() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 p-6 border-b border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    Industrial Applications of Mensuration
                </h3>
            </div>

            <div className="p-6 grid md:grid-cols-3 gap-8">
                {/* Manufacturing */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                            <Package className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-700">Packaging & Manufacturing</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Designers calculate <span className="font-bold text-slate-800">Surface Area</span> to minimize material costs for boxes and cans.
                        Cost efficiency relies on finding the shape that holds the most <span className="font-bold text-slate-800">Volume</span> with the least material.
                    </p>
                </div>

                {/* HVAC */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-teal-100 rounded-lg text-teal-600">
                            <Thermometer className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-700">HVAC & Architecture</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Heating and Cooling systems (HVAC) require calculating the exact <span className="font-bold text-slate-800">Volume of air</span> in a building
                        to determine the size of AC units needed. Cylindrical pipe volumes determine flow rates for water and gas lines.
                    </p>
                </div>

                {/* Medicine */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-red-100 rounded-lg text-red-600">
                            <Syringe className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-700">Medicine</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Dosage calculations often involve volumes. Measuring the surface area of a patient's body (BSA) helps determine precise
                        chemotherapy dosages. Tumor growth is modeled using volume formulas for spheres and ellipsoids.
                    </p>
                </div>
            </div>
        </div>
    );
}
