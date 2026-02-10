import SectorArea from '../../features/unit6/SectorArea';
import SegmentArea from '../../features/unit6/SegmentArea';
import SolidLab from '../../features/unit6/SolidLab';

export default function Mensuration() {
    return (
        <div className="space-y-12">
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
    );
}
