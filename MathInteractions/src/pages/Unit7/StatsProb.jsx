import React, { useState } from 'react';
import Statistics from '../../features/unit7/Statistics';
import MeanMethods from '../../features/unit7/MeanMethods';
import Probability from '../../features/unit7/Probability';
import Exercises from './Exercises';

export default function StatsProb() {
    const [activeTab, setActiveTab] = useState('concepts');

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Header Content */}
            <div className="mb-8">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
                    Statistics and Probability
                </h1>
                <p className="text-xl text-slate-600 max-w-3xl">
                    Explore measures of central tendency, different methods for calculating the mean of grouped data, and concepts of theoretical and empirical probability.
                </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex space-x-1 border-b border-slate-200 mb-8 overflow-x-auto pb-2">
                <button
                    onClick={() => setActiveTab('concepts')}
                    className={`px-6 py-3 text-sm font-medium rounded-t-lg transition-colors whitespace-nowrap ${activeTab === 'concepts'
                            ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-700'
                            : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                        }`}
                >
                    Concepts & Interactive Tools
                </button>
                <button
                    onClick={() => setActiveTab('exercises')}
                    className={`px-6 py-3 text-sm font-medium rounded-t-lg transition-colors whitespace-nowrap ${activeTab === 'exercises'
                            ? 'bg-blue-50 text-blue-700 border-b-2 border-blue-700'
                            : 'text-slate-500 hover:text-slate-700 hover:bg-slate-50'
                        }`}
                >
                    Exercises
                </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'concepts' ? (
                <div className="space-y-12">
                    <section>
                        <div className="mb-6">
                            <h2 className="text-3xl font-bold text-slate-800 mb-2">Statistics: Grouped Data</h2>
                            <p className="text-slate-600">
                                Analyze the measures of central tendency (Mean, Median, Mode) for grouped data. Adjust the frequencies to see how the distribution shifts.
                            </p>
                        </div>
                        <Statistics />
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-slate-800 mb-2">Mean Calculation Methods</h2>
                        <p className="text-slate-600 mb-6">
                            Three different methods to calculate the mean of grouped frequency distribution: Direct Method, Assumed Mean Method, and Step Deviation Method.
                        </p>
                        <MeanMethods />
                    </section>

                    <section>
                        <h2 className="text-3xl font-bold text-slate-800 mb-2">Probability</h2>
                        <p className="text-slate-600 mb-6">
                            Theoretical probability is the ratio of favorable outcomes to total possible outcomes. Empirical probability converges to this value over many trials.
                        </p>
                        <Probability />
                    </section>
                </div>
            ) : (
                <Exercises />
            )}
        </div>
    );
}
