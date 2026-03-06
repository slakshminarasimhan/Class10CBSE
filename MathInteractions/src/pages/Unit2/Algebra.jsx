import React, { useState } from 'react';
import ParabolaGraph from '../../features/unit2/ParabolaGraph';
import ZerosCoefficients from '../../features/unit2/ZerosCoefficients';
import LinearSystemGraph from '../../features/unit2/LinearSystemGraph';
import SubstitutionMethod from '../../features/unit2/SubstitutionMethod';
import DiscriminantVisualizer from '../../features/unit2/DiscriminantVisualizer';
import APSums from '../../features/unit2/APSums';
import Exercises from './Exercises';

export default function Algebra() {
    const [activeTab, setActiveTab] = useState('concepts');

    return (
        <div className="space-y-8">
            {/* Tabs */}
            <div className="flex space-x-2 border-b border-slate-200 mb-6">
                <button
                    onClick={() => setActiveTab('concepts')}
                    className={`px-6 py-3 font-semibold text-lg border-b-2 transition-colors duration-200 ${activeTab === 'concepts'
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                        }`}
                >
                    Concepts & Interactive Tools
                </button>
                <button
                    onClick={() => setActiveTab('exercises')}
                    className={`px-6 py-3 font-semibold text-lg border-b-2 transition-colors duration-200 ${activeTab === 'exercises'
                            ? 'border-blue-600 text-blue-600'
                            : 'border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300'
                        }`}
                >
                    Exercises
                </button>
            </div>

            {/* Content */}
            {activeTab === 'concepts' ? (
                <div className="space-y-12">
                    <section>
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-slate-800 mb-2">Polynomials: Zeros of a Polynomial</h2>
                            <p className="text-slate-600">
                                Geometrically, the zeros of a polynomial are the x-coordinates of the points where its graph intersects the x-axis.
                            </p>
                        </div>
                        <ParabolaGraph />
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-slate-800 mb-2">Relationship between Zeros and Coefficients</h2>
                        <p className="text-slate-600 mb-6">
                            {'For a quadratic polynomial $ax^2 + bx + c$, Sum of zeros = $-b/a$ and Product of zeros = $c/a$.'}
                        </p>
                        <ZerosCoefficients />
                    </section>

                    <section>
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-slate-800 mb-2">Linear Equations: Graphical Method</h2>
                            <p className="text-slate-600">
                                Interact with two lines to see when they have a unique solution, no solution (parallel), or infinite solutions (coincident).
                            </p>
                        </div>
                        <LinearSystemGraph />
                    </section>

                    <section>
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-slate-800 mb-2">Linear Equations: Algebraic Methods</h2>
                            <p className="text-slate-600">
                                Step-by-step visualization of the Substitution Method.
                            </p>
                        </div>
                        <SubstitutionMethod />
                    </section>

                    <section>
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-slate-800 mb-2">Quadratic Equations: Nature of Roots</h2>
                            <p className="text-slate-600">
                                {'The Discriminant $D = b^2 - 4ac$ tells us whether the roots are real, equal, or imaginary.'}
                            </p>
                        </div>
                        <DiscriminantVisualizer />
                    </section>

                    <section>
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-slate-800 mb-2">Arithmetic Progressions: Sum of N Terms</h2>
                            <p className="text-slate-600">
                                {'Visualizing the sum formula $S_n = \\frac{n}{2}(a+l)$ by completing the rectangle.'}
                            </p>
                        </div>
                        <APSums />
                    </section>
                </div>
            ) : (
                <Exercises />
            )}
        </div>
    );
}
