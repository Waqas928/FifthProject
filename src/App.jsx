import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import History from './pages/History';
import Downloads from './pages/Downloads';
import AccountsDepartment from "./pages/AccountsDepartment"; // Import your Accounts page
import EnggDepartment from "./pages/EnggDepartment"; // Import your Engineering page
import HealthServices from "./pages/HealthServices"; // Import your Health Services page
import HostelServices from "./pages/HostelServices"; // Import your Hostel Services page


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/Departments/accountsDepartment" element={<AccountsDepartment />} />
            <Route path="/Departments/enggDepartment" element={<EnggDepartment />} />
            <Route path="/Services/healthServices" element={<HealthServices />} />
            <Route path="/Services/hostelServices" element={<HostelServices />} />

                      <Route path="/downloads" element={<Downloads />} />
                      </Routes>

        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;