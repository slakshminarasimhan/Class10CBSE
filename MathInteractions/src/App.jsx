import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Layout() {
  return (
    <div className="min-h-screen flex bg-slate-50">
      <aside className="w-64 bg-slate-900 text-white p-4 hidden md:block">
        <h1 className="text-xl font-bold mb-6">Math Interactions</h1>
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
    <div>
      <h2 className="text-3xl font-bold mb-4">Welcome to Class X Math</h2>
      <p className="text-slate-600">Select a unit from the sidebar to start exploring interactive modules.</p>
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
