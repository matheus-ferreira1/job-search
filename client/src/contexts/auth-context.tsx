import { FC, createContext, useState, useContext, ReactNode } from "react";
import { useLoaderData } from "react-router-dom";

interface User {
  id: string;
  name: string;
  lastName: string;
  email: string;
  role: string;
  location: string;
}

interface UserLoginType {
  email: string;
  password: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (userData: UserLoginType) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const AuthProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const initialUser = useLoaderData() as User | null;

  const [user, setUser] = useState<User | null>(initialUser);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!user);

  const login = (userData: User) => {
    setUser(userData);
    setIsAuthenticated(!!user);
  };

  const logout = async () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");

    return context;
  }
};

export { AuthProvider, useAuth };
