import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { TransactionProvider } from './context/TransactionContext';
import { ToastProvider } from './context/ToastContext';
import HomeScreen from './components/HomeScreen';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import OTPVerificationPage from './components/OTPVerificationPage';
import SendPage from './components/SendPage';
import ReceivePage from './components/ReceivePage';
import CardPage from './components/CardPage';
import ProfilePage from './components/ProfilePage';
import AccountsPage from './components/AccountsPage';
import AddMoneyPage from './components/AddMoneyPage';
import ExchangePage from './components/ExchangePage';
import StatementPage from './components/StatementPage';
import TransferSummaryPage from './components/TransferSummaryPage';
import ConfirmationPage from './components/ConfirmationPage';
import ReceiveConfirmationPage from './components/ReceiveConfirmationPage';
import AddMoneyConfirmationPage from './components/AddMoneyConfirmationPage';
import AddMoneySuccessPage from './components/AddMoneySuccessPage';
import ExchangeConfirmationPage from './components/ExchangeConfirmationPage';
import ExchangeSuccessPage from './components/ExchangeSuccessPage';

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <TransactionProvider>
            <ToastProvider>
              <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/otp-verification" element={<OTPVerificationPage />} />
                <Route path="/send" element={<SendPage />} />
                <Route path="/receive" element={<ReceivePage />} />
                <Route path="/card" element={<CardPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/accounts" element={<AccountsPage />} />
                <Route path="/add-money" element={<AddMoneyPage />} />
                <Route path="/exchange" element={<ExchangePage />} />
                <Route path="/statement" element={<StatementPage />} />
                <Route path="/transfer-summary" element={<TransferSummaryPage />} />
                <Route path="/confirmation" element={<ConfirmationPage />} />
                <Route path="/receive-confirmation" element={<ReceiveConfirmationPage />} />
                <Route path="/add-money-confirmation" element={<AddMoneyConfirmationPage />} />
                <Route path="/add-money-success" element={<AddMoneySuccessPage />} />
                <Route path="/exchange-confirmation" element={<ExchangeConfirmationPage />} />
                <Route path="/exchange-success" element={<ExchangeSuccessPage />} />
              </Routes>
            </ToastProvider>
          </TransactionProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;