import { Ruler, Aperture, Paintbrush } from 'lucide-react';

export default function IndustrialApps() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 p-6 border-b border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    Industrial Applications of Geometry
                </h3>
            </div>

            <div className="p-6 grid md:grid-cols-3 gap-8">
                {/* Construction */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-amber-100 rounded-lg text-amber-600">
                            <Ruler className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-700">Architecture & Construction</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        <span className="font-bold text-slate-800">Triangle Similarity</span> is crucial in civil engineering for
                        creating scaled models and blueprints. The structural stability of bridges (trusses) relies on the rigidity of triangles.
                    </p>
                </div>

                {/* Optics */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-cyan-100 rounded-lg text-cyan-600">
                            <Aperture className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-700">Optics & Lenses</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Designing camera lenses, glasses, and telescopes involves calculating <span className="font-bold text-slate-800">tangents</span> and
                        normals to curved surfaces (circles and lenses) to predict how light rays will refract or reflect.
                    </p>
                </div>

                {/* Art & Design */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-pink-100 rounded-lg text-pink-600">
                            <Paintbrush className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-700">Art & Perspective</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Artists and designers use the concepts of <span className="font-bold text-slate-800">projections and similarity</span> (BPT)
                        to create realistic 3D perspective drawings on 2D surfaces, ensuring deeper objects look smaller proportionally.
                    </p>
                </div>
            </div>
        </div>
    );
}
