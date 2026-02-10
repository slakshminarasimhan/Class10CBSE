import TriangleSimilarity from '../../features/unit4/TriangleSimilarity';
import BPTVisualizer from '../../features/unit4/BPTVisualizer';
import AAASimilarity from '../../features/unit4/AAASimilarity';
import SSSSimilarity from '../../features/unit4/SSSSimilarity';
import SASSimilarity from '../../features/unit4/SASSimilarity';
import TangentsCircle from '../../features/unit4/TangentsCircle';
import TangentsExternalPoint from '../../features/unit4/TangentsExternalPoint';
import IndustrialApps from '../../features/unit4/IndustrialApps';

export default function Geometry() {
    return (
        <div className="space-y-12">
            <section>
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">Triangles: Similarity</h2>
                    <p className="text-slate-600">
                        Two triangles are similar if their corresponding angles are equal and their corresponding sides are in the same ratio (or proportion).
                    </p>
                </div>
                <TriangleSimilarity />
            </section>

            <section>
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Basic Proportionality Theorem (BPT)</h2>
                <p className="text-slate-600 mb-6">
                    If a line is drawn parallel to one side of a triangle to intersect the other two sides in distinct points, the other two sides are divided in the same ratio.
                </p>
                <BPTVisualizer />
            </section>

            <section>
                <h2 className="text-3xl font-bold text-slate-800 mb-2">AAA Similarity Criterion</h2>
                <p className="text-slate-600 mb-6">
                    If the corresponding angles of two triangles are equal, their corresponding sides are proportional and the triangles are similar.
                </p>
                <AAASimilarity />
            </section>

            <section>
                <h2 className="text-3xl font-bold text-slate-800 mb-2">SSS Similarity Criterion</h2>
                <p className="text-slate-600 mb-6">
                    If the corresponding sides of two triangles are proportional, their corresponding angles are equal and the two triangles are similar.
                </p>
                <SSSSimilarity />
            </section>

            <section>
                <h2 className="text-3xl font-bold text-slate-800 mb-2">SAS Similarity Criterion</h2>
                <p className="text-slate-600 mb-6">
                    If one angle of a triangle is equal to one angle of another triangle and the sides including these angles are proportional, the two triangles are similar.
                </p>
                <SASSimilarity />
            </section>

            <section>
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Circles: Tangents</h2>
                <p className="text-slate-600 mb-6">
                    A tangent to a circle is drawn through a point on the circle. It is perpendicular to the radius at the point of contact.
                </p>
                <TangentsCircle />
            </section>

            <section>
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Tangents from External Point</h2>
                <p className="text-slate-600 mb-6">
                    The lengths of tangents drawn from an external point to a circle are equal.
                </p>
                <TangentsExternalPoint />
            </section>

            <section>
                <IndustrialApps />
            </section>
        </div>
    );
}

