import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '@/pages/LandingPage';
import bg from '@/assets/images/bg.png';

function App() {
  return (
    <div className='bg-black' style={{ backgroundImage: `url(${bg})` }}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} exact />
        </Routes>
      </Router>
    </div>
  )
}

export default App
