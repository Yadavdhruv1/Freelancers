import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FreelancerProvider } from './context/FreelancerContext';
import HomePage from './pages/HomePage';
import FreelancerPage from './pages/FreelancerPage';
import SavedFreelancersPage from './pages/SavedFreelancersPage';

function App() {
  return (
    <FreelancerProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/freelancer/:id" element={<FreelancerPage />} />
          <Route path="/saved" element={<SavedFreelancersPage />} />
        </Routes>
      </Router>
    </FreelancerProvider>
  );
}

export default App;