import { createContext, useContext, useState, type ReactNode } from "react";
import type { Users } from "../types";

type AuthContextType = {
  user: Users | null;
  login: (name: string, password: string) => Promise<boolean>;
  logout: () => void;
  isAuth: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<Users | null>(null);

  const login = async (name: string, password: string): Promise<boolean> => {
  try {
    const res = await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password }),
    });

    const data = await res.json();

    if (res.ok) {
      setUser({
        id: data.id,
        name: data.name,
        permissions: ["read"],
        role: [data.role],
      });
      return true; // Login exitoso
    } else {
      alert(data.message || "Invalid credentials");
      return false; //  Login fallido
    }
  } catch (error) {
    console.error("Login error:", error);
    return false;
  }
};

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuth: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
