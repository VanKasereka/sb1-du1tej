import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { TransactionProvider } from './context/TransactionContext';
import { ToastProvider } from './context/ToastContext';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <TransactionProvider>
            <ToastProvider>
              <div style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
                <nav>
                  <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none', padding: 0 }}>
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/login">Connexion</Link></li>
                    <li><Link to="/signup">Inscription</Link></li>
                  </ul>
                </nav>
                <Routes>
                  <Route path="/" element={<HomeScreen />} />
                  <Route path="/login" element={<LoginScreen />} />
                  <Route path="/signup" element={<SignUpScreen />} />
                </Routes>
              </div>
            </ToastProvider>
          </TransactionProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;