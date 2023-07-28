import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import { useAuthContext } from './hooks/useAuthContext'

// pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar';
import Signup from './pages/Signup'
import Login from './pages/Login';
import Forums from './pages/Forums';
import Profile from './pages/Profile';

function App() {
  const { user } = useAuthContext()

  return (
      <Router>
        <Navbar title="ForSure" />
        <Routes>
          <Route exact path="/Home" element={<Home />} />
          <Route exact path="/Forums" element={<Forums />} />
          <Route exact path="/Signup" element={!user ? <Signup /> : <Navigate to="/Home" />}  />
          <Route exact path="/Login" element={!user ? <Login /> : <Navigate to="/Home" />} />
          <Route exact path="/Profile" element={<Profile />} />
        </Routes>
      </Router>
  );
}

export default App;
