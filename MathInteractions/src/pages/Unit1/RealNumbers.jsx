import ExplodingPrimes from '../../features/unit1/ExplodingPrimes';
import ContradictionJourney from '../../features/unit1/ContradictionJourney';

export default function RealNumbers() {
    return (
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
    );
}
