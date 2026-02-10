import Statistics from '../../features/unit7/Statistics';
import MeanMethods from '../../features/unit7/MeanMethods';
import Probability from '../../features/unit7/Probability';

export default function StatsProb() {
    return (
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
    );
}
