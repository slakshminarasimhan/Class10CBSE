import { Map, Monitor, Bot } from 'lucide-react';

export default function IndustrialApps() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 p-6 border-b border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    Industrial Applications of Coordinate Geometry
                </h3>
            </div>

            <div className="p-6 grid md:grid-cols-3 gap-8">
                {/* GPS */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-sky-100 rounded-lg text-sky-600">
                            <Map className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-700">GPS & Navigation</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Global Positioning Systems (GPS) use the <span className="font-bold text-slate-800">Distance Formula</span> to
                        calculate the distance between your location and the nearest satellite, determining your precise position on Earth via triangulation.
                    </p>
                </div>

                {/* Computer Graphics */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-indigo-100 rounded-lg text-indigo-600">
                            <Monitor className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-700">Computer Graphics</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Every pixel on a screen is a point $(x, y)$.
                        <span className="font-bold text-slate-800"> Section Formula</span> and transformations
                        (scaling, rotation) are used to render 3D games, resize images, and create visual effects.
                    </p>
                </div>

                {/* Robotics */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-orange-100 rounded-lg text-orange-600">
                            <Bot className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-700">Robotics</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Robotic arms use coordinate geometry to calculate exact movement paths. To move an arm to pick up an object,
                        the software calculates the equations of lines and curves along the trajectory.
                    </p>
                </div>
            </div>
        </div>
    );
}
