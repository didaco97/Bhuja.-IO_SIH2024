import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Terms from './pages/Terms';
import NOCGuidelines from './pages/NOCGuidelines';
import Training from './pages/Training';
import AIReports from './pages/AIReports';

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/noc" element={<NOCGuidelines />} />
          <Route path="/training" element={<Training />} />
          <Route path="/reports" element={<AIReports />} />
        </Routes>

        {/* Footer */}
        <footer className="bg-gradient-to-r from-primary to-secondary text-white mt-16 py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold mb-4">About Bhujal.io</h3>
                <p className="text-gray-200 text-sm">
                  A comprehensive platform for groundwater information and management powered by AI technology.
                </p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-200 text-sm">
                  <li><a href="/" className="hover:text-white">Home</a></li>
                  <li><a href="/terms" className="hover:text-white">Groundwater Terms</a></li>
                  <li><a href="/noc" className="hover:text-white">NOC Guidelines</a></li>
                  <li><a href="/training" className="hover:text-white">Training</a></li>
                  <li><a href="/reports" className="hover:text-white">AI Reports</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Contact Us</h3>
                <p className="text-gray-200 text-sm">Email: contact@bhujal.io</p>
                <p className="text-gray-200 text-sm">Phone: 1800-XXX-XXXX</p>
              </div>
            </div>
            <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-200 text-sm">
              © {currentYear} Bhujal.io - National Groundwater Information Portal. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;