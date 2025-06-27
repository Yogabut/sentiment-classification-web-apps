import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './pages/main_page/mainLayout'
import FeaturesLayout from './pages/features_page/featuresLayout'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> 
          <Routes>
            <Route path="/" element={<MainLayout />} />
            <Route path="/features" element={<FeaturesLayout />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App