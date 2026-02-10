import { Plane, Ship, MoonStar } from 'lucide-react';

export default function IndustrialApps() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 p-6 border-b border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    Industrial Applications of Trigonometry
                </h3>
            </div>

            <div className="p-6 grid md:grid-cols-3 gap-8">
                {/* Aviation */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-sky-100 rounded-lg text-sky-600">
                            <Plane className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-700">Aviation & Navigation</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Pilots and air traffic controllers use <span className="font-bold text-slate-800">Trigonometry</span> to calculate
                        wind correction angles, heading, and ground speed. Triangulation helps determine the exact location of the aircraft.
                    </p>
                </div>

                {/* Oceanography */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-cyan-100 rounded-lg text-cyan-600">
                            <Ship className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-700">Oceanography</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        The height of tides and the shape of waves are modeled using <span className="font-bold text-slate-800">Sine and Cosine functions</span>.
                        Engineers use these models to build safe docks, bridges, and coastal defenses.
                    </p>
                </div>

                {/* Astronomy */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                            <MoonStar className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-700">Astronomy</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Astronomers use <span className="font-bold text-slate-800">Parallax</span> (a trigonometric method) to measure the massive distances
                        to nearby stars. By measuring the angle to a star from opposite sides of Earth's orbit, they calculate the distance accurately.
                    </p>
                </div>
            </div>
        </div>
    );
}
