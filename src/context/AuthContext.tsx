import React, { createContext, useState, useContext } from 'react';

interface User {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNumber: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (phoneNumber: string, password: string) => Promise<void>;
  signUp: (user: User) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);

  const login = async (phoneNumber: string, password: string) => {
    // Simulate API call
    await Promise.resolve();
    const mockUser: User = {
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-01-01',
      phoneNumber: phoneNumber,
    };
    setUser(mockUser);
    setIsAuthenticated(true);
  };

  const signUp = async (newUser: User) => {
    // Simulate API call
    await Promise.resolve();
    setUser(newUser);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  const value = {
    isAuthenticated,
    user,
    login,
    signUp,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};