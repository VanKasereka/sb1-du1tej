import React from 'react';
import { useAuth } from '../context/AuthContext';

const HomeScreen = () => {
  const { isAuthenticated, user } = useAuth();

  return (
    <div>
      <h1>Bienvenue sur ApexPay</h1>
      {isAuthenticated ? (
        <div>
          <p>Bonjour, {user?.firstName}!</p>
          <p>Votre solde: $1000</p>
          <button>Envoyer</button>
          <button>Recevoir</button>
        </div>
      ) : (
        <div>
          <p>Veuillez vous connecter ou vous inscrire pour commencer.</p>
        </div>
      )}
    </div>
  );
};

export default HomeScreen;