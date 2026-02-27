import React, { createContext, useState, ReactNode } from 'react';
import { decryptPassword, encryptPassword } from '../utils/Crypto';


interface User {
    email: string;
    password: string;
}

interface AuthContextProps {
    user: User | null;
    registro: (email: string, pass: string) => void;
    login: (email: string, pass: string) => boolean;
    logout: () => void;
}

export const Context = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [savedUser, setSavedUser] = useState<User | null>(null);


    const registro = (email: string, pass: string) => {
        if (!email || !pass) return;

        const encrypted = encryptPassword(pass);
        console.log('Usuario Registrado', { email, encrypted });

        setSavedUser({ email, password: encrypted });
    };

    const login = (email: string, pass: string) => {
        if (!email || !pass) return false;
        if (!savedUser) {
            console.log('Error: No hay usuario registrado..!!');
            return false;
        }

        const realPass = decryptPassword(savedUser.password);

        console.log('Usuario: ', { email, pass });
        console.log('Contraseña: ', realPass);

        if (email === savedUser.email && pass === realPass) {
            setUser(savedUser);
            console.log('Ingreso exitoso');
            return true;
        }

        console.log('Error: Credenciales incorrectas');
        return false;
    };

    const logout = () => {
        setUser(null);
        console.log('Salir');
    };

    return (
        <Context.Provider value={{ user, registro, login, logout }}>
            {children}
        </Context.Provider>
    );
};