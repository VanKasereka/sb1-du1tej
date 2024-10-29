import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useToast } from '../context/ToastContext';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "./ui/input-otp"

const OTPVerificationPage: React.FC = () => {
  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState(30);
  const navigate = useNavigate();
  const location = useLocation();
  const { showToast } = useToast();
  const phoneNumber = (location.state as { phoneNumber: string })?.phoneNumber;

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleVerify = () => {
    if (otp.length === 6) {
      showToast('OTP verified successfully!', 'success');
      navigate('/');
    } else {
      showToast('Invalid OTP. Please try again.', 'error');
    }
  };

  const handleResendOTP = () => {
    setCountdown(30);
    showToast('New OTP sent!', 'info');
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-lg p-8 shadow-sm">
        <h1 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">Verify Your Phone Number</h1>
        <p className="text-center mb-6 text-gray-600 dark:text-gray-400">We've sent a 6-digit code to {phoneNumber}</p>
        
        <InputOTP
          value={otp}
          onChange={(value) => setOtp(value)}
          maxLength={6}
          className="mb-6"
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>

        <button
          onClick={handleVerify}
          className="w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors mb-4"
        >
          Verify OTP
        </button>

        {countdown > 0 ? (
          <p className="text-center text-gray-600 dark:text-gray-400">Resend OTP in {countdown} seconds</p>
        ) : (
          <button
            onClick={handleResendOTP}
            className="w-full text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Resend OTP
          </button>
        )}
      </div>
    </div>
  );
};

export default OTPVerificationPage;