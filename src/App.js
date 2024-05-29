import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rootlayout from './pages/RootLayout';
import Home from './pages/Home';
import Work from './pages/Work';
import Contact from './pages/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Rootlayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
          {/* Ajoutez d'autres routes ici */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
