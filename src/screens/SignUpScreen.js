import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useToast } from '../context/ToastContext';

const SignUpScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const { showToast } = useToast();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await signUp({ firstName, lastName, dateOfBirth, phoneNumber });
      showToast('Inscription réussie ! Veuillez vérifier votre numéro de téléphone.', 'success');
      navigate('/');
    } catch (error) {
      showToast('Échec de l\'inscription. Veuillez réessayer.', 'error');
    }
  };

  return (
    <div>
      <h2>Inscription</h2>
      <form onSubmit={handleSignUp}>
        <input
          type="text"
          placeholder="Prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Nom"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Date de naissance"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Numéro de téléphone"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <button type="submit">S'inscrire</button>
      </form>
    </div>
  );
};

export default SignUpScreen;