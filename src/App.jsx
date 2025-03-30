import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import History from './pages/History';
import Downloads from './pages/Downloads';
import AccountsDepartment from "./pages/AccountsDepartment";
import EnggDepartment from "./pages/EnggDepartment";
import HealthServices from "./pages/HealthServices";
import HostelServices from "./pages/HostelServices";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100 overflow-x-hidden">
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>
        <main className="flex-grow px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <div className="max-w-7xl mx-auto w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/history" element={<History />} />
              <Route path="/Departments/accountsDepartment" element={<AccountsDepartment />} />
              <Route path="/Departments/enggDepartment" element={<EnggDepartment />} />
              <Route path="/Services/healthServices" element={<HealthServices />} />
              <Route path="/Services/hostelServices" element={<HostelServices />} />
              <Route path="/downloads" element={<Downloads />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;