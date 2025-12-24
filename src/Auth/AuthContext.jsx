import React, { createContext, useEffect, useState } from 'react'
export const LogContext = createContext();

const AuthContext = ({ children }) => {
    const [User, setUser] = useState(null);

    // for data not lost after refresh
    useEffect(() => {
        let saved = JSON.parse(localStorage.getItem("user"));

        if (saved) {
            setUser(saved);
        }

    }, []);

    const login = (email) => {
        let userData = {
            email: email
        }

        setUser(userData);

        localStorage.setItem("user", JSON.stringify(userData));
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    }

    return (
        <LogContext.Provider value={{ User, login, logout }}>
            {children}
        </LogContext.Provider>
    )
}

export default AuthContext;