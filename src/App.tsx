import { BrowserRouter } from 'react-router-dom';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { HomeContent } from './components/HomeContent';
import { Sidebar } from './components/Sidebar';
import './global.css';

export function App() {
  return (
    <BrowserRouter>
      <Hero />
      <Experience />
      <HomeContent />
      <Sidebar />
      <Footer />
    </BrowserRouter>
  )
}
