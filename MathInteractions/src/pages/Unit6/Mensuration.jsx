import React, { useState } from 'react';
import SectorArea from '../../features/unit6/SectorArea';
import SegmentArea from '../../features/unit6/SegmentArea';
import SolidLab from '../../features/unit6/SolidLab';
import Exercises from './Exercises';

export default function Mensuration() {
    const [activeTab, setActiveTab] = useState('concepts');

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8">
                <h1 className="text-4xl font-bold text-slate-800 mb-4">Mensuration & Circles</h1>
                <p className="text-lg text-slate-600 mb-8 max-w-3xl">
                    Explore the geometry of circles, tangents, and the surface areas and volumes of combined solid shapes.
                </p>

                {/* Tab Navigation */}
                <div className="flex space-x-1 bg-slate-100/50 p-1 rounded-xl mb-8 border border-slate-200/60 w-fit">
                    <button
                        onClick={() => setActiveTab('concepts')}
                        className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${activeTab === 'concepts'
                                ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200/50'
                                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                            }`}
                    >
                        Concepts & Interactive Tools
                    </button>
                    <button
                        onClick={() => setActiveTab('exercises')}
                        className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${activeTab === 'exercises'
                                ? 'bg-white text-indigo-600 shadow-sm ring-1 ring-slate-200/50'
                                : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                            }`}
                    >
                        Exercises
                    </button>
                </div>

                {/* Content Area */}
                <div>
                    {activeTab === 'concepts' && (
                        <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <section>
                                <div className="mb-6">
                                    <h2 className="text-3xl font-bold text-slate-800 mb-2">Area of Sectors</h2>
                                    <p className="text-slate-600">
                                        {'The area of a sector of angle $\\theta$ in a circle of radius $r$ is given by $\\frac{\\theta}{360} \\times \\pi r^2$.'}
                                    </p>
                                </div>
                                <SectorArea />
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold text-slate-800 mb-2">Area of Segments</h2>
                                <p className="text-slate-600 mb-6">
                                    A segment is the region between a chord and the arc it subtends. The area is calculated as the difference between the sector area and the triangle area.
                                </p>
                                <SegmentArea />
                            </section>

                            <section>
                                <h2 className="text-3xl font-bold text-slate-800 mb-2">Surface Areas of Solids</h2>
                                <p className="text-slate-600 mb-6">
                                    When solids are combined, the total surface area is the sum of the visible surface areas of the individual parts. Hidden surfaces are subtracted.
                                </p>
                                <SolidLab />
                            </section>
                        </div>
                    )}

                    {activeTab === 'exercises' && (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <Exercises />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
