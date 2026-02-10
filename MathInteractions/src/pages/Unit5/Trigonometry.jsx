import TrigRatios from '../../features/unit5/TrigRatios';
import SpecialAngles from '../../features/unit5/SpecialAngles';
import TrigRelationships from '../../features/unit5/TrigRelationships';
import PythagoreanIdentity from '../../features/unit5/PythagoreanIdentity';
import TrigIdentities from '../../features/unit5/TrigIdentities';
import HeightsDistances from '../../features/unit5/HeightsDistances';

export default function Trigonometry() {
    return (
        <div className="space-y-12">
            <section>
                <div className="mb-6">
                    <h2 className="text-3xl font-bold text-slate-800 mb-2">Trigonometric Ratios</h2>
                    <p className="text-slate-600">
                        Understand the relationship between the angle of elevation and the ratio of sides in a right-angled triangle.
                    </p>
                </div>
                <TrigRatios />
            </section>

            <section>
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Special Angles</h2>
                <p className="text-slate-600 mb-6">
                    Exact values of trigonometric ratios at 0°, 30°, 45°, 60°, and 90° are fundamental in mathematics and engineering.
                </p>
                <SpecialAngles />
            </section>

            <section>
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Trigonometric Relationships</h2>
                <p className="text-slate-600 mb-6">
                    Reciprocal, quotient, and complementary angle relationships connect the six trigonometric functions.
                </p>
                <TrigRelationships />
            </section>

            <section>
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Pythagorean Identity</h2>
                <p className="text-slate-600 mb-6">
                    The fundamental identity sin²θ + cos²θ = 1 is derived from the Pythagorean theorem on the unit circle.
                </p>
                <PythagoreanIdentity />
            </section>

            <section>
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Simple Trigonometric Identities</h2>
                <p className="text-slate-600 mb-6">
                    Identities derived from the Pythagorean identity help simplify complex trigonometric expressions.
                </p>
                <TrigIdentities />
            </section>

            <section>
                <h2 className="text-3xl font-bold text-slate-800 mb-2">Heights and Distances</h2>
                <p className="text-slate-600 mb-6">
                    Use a clinometer to measure the angle of elevation and calculate the height of lofty objects.
                </p>
                <HeightsDistances />
            </section>
        </div>
    );
}
