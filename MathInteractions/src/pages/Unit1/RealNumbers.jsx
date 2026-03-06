import React, { useState } from 'react';
import ExplodingPrimes from '../../features/unit1/ExplodingPrimes';
import ContradictionJourney from '../../features/unit1/ContradictionJourney';
import Exercises from './Exercises';

export default function RealNumbers() {
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
                        <h2 className="text-3xl font-bold text-slate-800 mb-2">Fundamental Theorem of Arithmetic</h2>
                        <p className="text-slate-600 mb-6">
                            Every composite number can be expressed (factorised) as a product of primes, and this factorisation is unique, apart from the order in which the prime factors occur.
                        </p>
                        <div className="border border-slate-200 rounded-2xl bg-white shadow-sm overflow-hidden">
                            <div className="bg-slate-50 p-4 border-b border-slate-200">
                                <h3 className="font-semibold text-slate-700">Interactive: Prime Factorization Tree</h3>
                            </div>
                            <ExplodingPrimes />
                        </div>
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-slate-800 mb-2">Proofs of Irrationality</h2>
                        <p className="text-slate-600 mb-6">
                            Understanding why numbers like √2 cannot be expressed as simple fractions.
                        </p>
                        <ContradictionJourney />
                    </section>
                </div>
            ) : (
                <Exercises />
            )}
        </div>
    );
}
