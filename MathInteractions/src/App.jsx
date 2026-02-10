import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen flex bg-slate-50">
      <aside className="w-64 bg-slate-900 text-white p-4 hidden md:block">
        <h1 className="text-xl font-bold mb-6">CBSE Class X Mathematics</h1>
        <nav>
          <ul className="space-y-2">
            <li><a href="/" className="block p-2 hover:bg-slate-800 rounded">Home</a></li>
            <li><a href="/unit1" className="block p-2 hover:bg-slate-800 rounded">Unit I: Number Systems</a></li>
            <li><a href="/unit2" className="block p-2 hover:bg-slate-800 rounded">Unit II: Algebra</a></li>
            <li><a href="/unit3" className="block p-2 hover:bg-slate-800 rounded">Unit III: Coordinate Geometry</a></li>
            <li><a href="/unit4" className="block p-2 hover:bg-slate-800 rounded">Unit IV: Geometry</a></li>
            <li><a href="/unit5" className="block p-2 hover:bg-slate-800 rounded">Unit V: Trigonometry</a></li>
            <li><a href="/unit6" className="block p-2 hover:bg-slate-800 rounded">Unit VI: Mensuration</a></li>
            <li><a href="/unit7" className="block p-2 hover:bg-slate-800 rounded">Unit VII: Statistics & Probability</a></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/unit1" element={<Unit1 />} />
            <Route path="/unit2" element={<Unit2 />} />
            <Route path="/unit3" element={<Unit3 />} />
            <Route path="/unit4" element={<Unit4 />} />
            <Route path="/unit5" element={<Unit5 />} />
            <Route path="/unit6" element={<Unit6 />} />
            <Route path="/unit7" element={<Unit7 />} />
          </Routes>
        </div>
      </main>
    </div>
  );
}

function Home() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-slate-200">
      <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-100 text-slate-700">
        <h3 className="text-lg font-bold text-blue-800 mb-3">About This Application</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>CBSE Maths 10th Std:</strong> Comprehensive interactive animations covering the entire syllabus.</li>
          <li><strong>Interactive Learning:</strong> Explore concepts through hands-on simulations and visualizers.</li>
          <li><strong>Industrial Applications:</strong> Real-world examples (🏭) provided for every concept to show practical utility.</li>
          <li><strong>Practical Assignments:</strong> Each industrial application is followed by a related assignment to test understanding.</li>
        </ul>
      </div>

      <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center border-b pb-4">
        COURSE STRUCTURE CLASS –X, CBSE Syllabus
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-100 text-slate-700">
              <th className="p-3 border border-slate-300 font-bold w-20 text-center">Units</th>
              <th className="p-3 border border-slate-300 font-bold">Unit Name</th>
            </tr>
          </thead>
          <tbody className="text-slate-600">
            <tr>
              <td className="p-3 border border-slate-300 text-center font-mono">I</td>
              <td className="p-3 border border-slate-300 font-semibold">NUMBER SYSTEMS</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-300 text-center font-mono">II</td>
              <td className="p-3 border border-slate-300 font-semibold">ALGEBRA</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-300 text-center font-mono">III</td>
              <td className="p-3 border border-slate-300 font-semibold">COORDINATE GEOMETRY</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-300 text-center font-mono">IV</td>
              <td className="p-3 border border-slate-300 font-semibold">GEOMETRY</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-300 text-center font-mono">V</td>
              <td className="p-3 border border-slate-300 font-semibold">TRIGONOMETRY</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-300 text-center font-mono">VI</td>
              <td className="p-3 border border-slate-300 font-semibold">MENSURATION</td>
            </tr>
            <tr>
              <td className="p-3 border border-slate-300 text-center font-mono">VII</td>
              <td className="p-3 border border-slate-300 font-semibold">STATISTICS AND PROBABILITY</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

import RealNumbers from './pages/Unit1/RealNumbers';

function Unit1() {
  return <RealNumbers />;
}

import Algebra from './pages/Unit2/Algebra';
import ErrorBoundary from './components/ErrorBoundary';

function Unit2() {
  return (
    <ErrorBoundary>
      <Algebra />
    </ErrorBoundary>
  );
}

import CoordinateGeometry from './pages/Unit3/CoordinateGeometry';

function Unit3() {
  return (
    <ErrorBoundary>
      <CoordinateGeometry />
    </ErrorBoundary>
  );
}

import Geometry from './pages/Unit4/Geometry';

function Unit4() {
  return <Geometry />;
}

import Trigonometry from './pages/Unit5/Trigonometry';

function Unit5() {
  return <Trigonometry />;
}

import Mensuration from './pages/Unit6/Mensuration';

function Unit6() {
  return <Mensuration />;
}

import StatsProb from './pages/Unit7/StatsProb';

function Unit7() {
  return <StatsProb />;
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
