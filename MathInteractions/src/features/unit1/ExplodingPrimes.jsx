import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import PracticalAssignment from '../../components/PracticalAssignment';

const getPrimeFactors = (n) => {
    const factors = [];
    let d = 2;
    let temp = n;
    while (d * d <= temp) {
        while (temp % d === 0) {
            factors.push(d);
            temp /= d;
        }
        d++;
    }
    if (temp > 1) factors.push(temp);
    return factors;
};

// A node in the factorization tree
const FactorNode = ({ value, onExpand, isPrime, isExpanded }) => {
    return (
        <div className="flex flex-col items-center">
            <motion.button
                layout
                onClick={!isPrime && !isExpanded ? onExpand : undefined}
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg 
        ${isPrime ? 'bg-green-500 cursor-default' : 'bg-blue-600 hover:bg-blue-700 cursor-pointer'} 
        ${isExpanded ? 'opacity-50' : 'opacity-100'}`}
                whileHover={!isPrime && !isExpanded ? { scale: 1.1 } : {}}
                whileTap={!isPrime && !isExpanded ? { scale: 0.95 } : {}}
            >
                {value}
            </motion.button>
            {!isPrime && !isExpanded && (
                <span className="text-xs text-slate-500 mt-1">Click to factor</span>
            )}
        </div>
    );
};

export default function ExplodingPrimes() {
    const [number, setNumber] = useState(30);
    const [tree, setTree] = useState({ value: 30, id: 'root', children: [] });

    const reset = () => {
        setTree({ value: number, id: 'root', children: [] });
    };

    const factorizeNode = (nodeId, currentValue) => {
        // Find two factors for visualization (simplest split)
        let factor1 = 1;
        let factor2 = currentValue;

        // Find the smallest factor
        for (let i = 2; i <= Math.sqrt(currentValue); i++) {
            if (currentValue % i === 0) {
                factor1 = i;
                factor2 = currentValue / i;
                break;
            }
        }

        if (factor1 === 1) return; // Primitive, shouldn't happen if check is correct

        setTree(prev => {
            const clone = JSON.parse(JSON.stringify(prev));
            const findAndExpand = (node) => {
                if (node.id === nodeId) {
                    node.children = [
                        { value: factor1, id: `${nodeId}-left`, children: [] },
                        { value: factor2, id: `${nodeId}-right`, children: [] }
                    ];
                } else if (node.children) {
                    node.children.forEach(findAndExpand);
                }
            };
            findAndExpand(clone);
            return clone;
        });
    };

    const renderTree = (node) => {
        const isPrime = getPrimeFactors(node.value).length === 1 && node.value !== 1; // Simplistic check, actually strictly prime check is better, but this works for >1
        const actualIsPrime = (n) => {
            if (n <= 1) return false;
            for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
            return true;
        };
        const primeStatus = actualIsPrime(node.value);
        const isExpanded = node.children && node.children.length > 0;

        return (
            <div className="flex flex-col items-center">
                <FactorNode
                    value={node.value}
                    isPrime={primeStatus}
                    isExpanded={isExpanded}
                    onExpand={() => factorizeNode(node.id, node.value)}
                />

                <AnimatePresence>
                    {isExpanded && (
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex flex-col items-center mt-2"
                        >
                            <ArrowDown className="w-4 h-4 text-slate-400 mb-2" />
                            <div className="flex gap-8 relative">
                                {/* Connecting lines could be SVG, here just using gap */}
                                {node.children.map(child => (
                                    <div key={child.id} className="relative">
                                        {renderTree(child)}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        );
    };

    return (
        <div className="space-y-6">
            <div className="flex flex-col items-center gap-6 p-8 bg-slate-50 rounded-xl">
                <div className="flex gap-4 items-center">
                    <label className="font-semibold text-slate-700">Explode Number:</label>
                    <input
                        type="number"
                        value={number}
                        onChange={(e) => {
                            const val = parseInt(e.target.value) || 2;
                            setNumber(val);
                            setTree({ value: val, id: 'root', children: [] }); // Auto reset on change
                        }}
                        className="p-2 border rounded-md w-24 text-center font-mono"
                        min="2"
                        max="999"
                    />
                    <button
                        onClick={reset}
                        className="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded text-slate-700"
                    >
                        Reset
                    </button>
                </div>

                <div className="mt-8">
                    {renderTree(tree)}
                </div>

                <p className="text-sm text-slate-500 mt-8 max-w-md text-center">
                    Click on any blue composite number to break it down into smaller factors until only green prime numbers remain.
                </p>
            </div>

            {/* Industrial Application: Cryptography - Full Width */}
            {/* Industrial Application: Cryptography - Full Width */}
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-blue-900 shadow-sm">
                <div className="flex items-center gap-2 mb-2 opacity-80">
                    <span className="text-lg">🏭</span>
                    <span className="text-xs font-bold uppercase tracking-wider">Industrial Application</span>
                </div>
                <h5 className="font-bold flex items-center gap-2 mb-2">
                    <span className="text-xl">🔐</span> Cryptography
                </h5>
                <p className="text-sm">
                    <strong>RSA Encryption</strong> relies on prime factorization. It is easy to multiply two large primes together, but incredibly difficult to take the result and find the original primes. This one-way function secures your credit card details online.
                </p>
            </div>

            {/* Practical Assignment - Full Width */}
            <PracticalAssignment
                unit="Unit I: Number Systems"
                question="If an RSA key is generated by multiplying two small primes, p=3 and q=11, what is the public key modulus (N = p × q)?"
                correctAnswer="33"
                hint="Multiply the two prime numbers together: 3 × 11."
                explanation="Correct! In real RSA, these primes are hundreds of digits long. The fact that it's easy to calculate N (multiplication) but hard to find p and q starting from N (factorization) is what keeps the internet secure!"
            />
        </div>
    );
}
