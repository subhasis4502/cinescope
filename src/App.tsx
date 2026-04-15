import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './styles/tokens.css';
import './styles/theme.css';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Home/HomePage';
import FilmsPage from './pages/Films/FilmsPage';
import PortfolioPage from './pages/Portfolio/PortfolioPage';
import ContactPage from './pages/Contact/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="page-wrapper">
        <Routes>
          <Route path="/"          element={<HomePage />} />
          <Route path="/films"     element={<FilmsPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact"   element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}