import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useToast } from '../context/ToastContext';

const OTPVerificationScreen = () => {
  const [otp, setOtp] = useState('');
  const [countdown, setCountdown] = useState(30);
  const navigation = useNavigation();
  const route = useRoute();
  const { showToast } = useToast();
  const phoneNumber = (route.params as { phoneNumber: string })?.phoneNumber;

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => (prevCountdown > 0 ? prevCountdown - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleVerify = () => {
    if (otp === '123456' || otp === '') {
      // Simulating successful verification
      showToast('OTP verified successfully!');
      navigation.navigate('Home' as never);
    } else {
      showToast('Invalid OTP. Please try again.');
    }
  };

  const handleResendOTP = () => {
    setCountdown(30);
    showToast('New OTP sent!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verify Your Phone Number</Text>
      <Text style={styles.subtitle}>We've sent a 6-digit code to {phoneNumber}</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        value={otp}
        onChangeText={setOtp}
        keyboardType="number-pad"
        maxLength={6}
      />
      <TouchableOpacity style={styles.button} onPress={handleVerify}>
        <Text style={styles.buttonText}>Verify OTP</Text>
      </TouchableOpacity>
      {countdown > 0 ? (
        <Text style={styles.countdownText}>Resend OTP in {countdown} seconds</Text>
      ) : (
        <TouchableOpacity onPress={handleResendOTP}>
          <Text style={styles.resendText}>Resend OTP</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 25,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  countdownText: {
    marginTop: 20,
    color: 'gray',
  },
  resendText: {
    marginTop: 20,
    color: 'blue',
  },
});

export default OTPVerificationScreen;