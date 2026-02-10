import { motion } from 'framer-motion';
import { Lock, Cpu } from 'lucide-react';

export default function IndustrialApps() {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 p-6 border-b border-slate-200">
                <h3 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    Industrial Applications of Number Systems
                </h3>
            </div>

            <div className="p-6 grid md:grid-cols-2 gap-8">
                {/* Cryptography */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                            <Lock className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-700">Cryptography (RSA Encryption)</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        The security of online transactions (banking, shopping) relies heavily on the
                        <span className="font-bold text-slate-800"> Fundamental Theorem of Arithmetic</span>.
                        RSA encryption uses a very large number (often 200+ digits) which is the product of two large prime numbers.
                    </p>
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100 text-sm">
                        <p className="font-mono text-slate-700 mb-2">
                            <span className="text-blue-600 font-bold">Public Key:</span> Product (N) is shared.
                        </p>
                        <p className="font-mono text-slate-700">
                            <span className="text-red-500 font-bold">Private Key:</span> The two prime factors are kept secret.
                        </p>
                        <p className="mt-3 text-xs text-slate-500 italic">
                            Factoring N back into primes is incredibly difficult for computers, keeping data safe.
                        </p>
                    </div>
                </div>

                {/* Computer Science */}
                <div className="space-y-4">
                    <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                            <Cpu className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-semibold text-slate-700">Digital Computing</h4>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                        Computers don't use decimal (base-10) like humans. They largely operate on
                        <span className="font-bold text-slate-800"> Binary (Base-2)</span> and
                        <span className="font-bold text-slate-800"> Hexadecimal (Base-16)</span> number systems.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-900 p-3 rounded text-center">
                            <div className="text-xs text-slate-400 mb-1">Human (Decimal)</div>
                            <div className="text-xl font-mono text-green-400 font-bold">255</div>
                        </div>
                        <div className="bg-slate-900 p-3 rounded text-center">
                            <div className="text-xs text-slate-400 mb-1">Computer (Hex)</div>
                            <div className="text-xl font-mono text-blue-400 font-bold">FF</div>
                        </div>
                    </div>
                    <p className="text-xs text-slate-500 italic">
                        Colors in web design (like #FFFFFF) uses hexadecimal real numbers to represent RGB values.
                    </p>
                </div>
            </div>
        </div>
    );
}
