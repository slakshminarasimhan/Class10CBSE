import DistanceFormula from '../../features/unit3/DistanceFormula';
import SectionFormula from '../../features/unit3/SectionFormula';

export default function CoordinateGeometry() {
    return (
        <div className="space-y-12">
            <section>
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">Distance Formula</h2>
                    <p className="text-slate-600">
                        {'The distance between two points $(x_1, y_1)$ and $(x_2, y_2)$ is given by $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.'}
                    </p>
                </div>
                <DistanceFormula />
            </section>

            <section>
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Section Formula</h2>
                <p className="text-slate-600 mb-6">
                    Find the coordinates of the point which divides the line segment joining two given points in a given ratio $m:n$ internally.
                </p>
                <SectionFormula />
            </section>
        </div>
    );
}
