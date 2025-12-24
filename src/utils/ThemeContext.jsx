import React, { createContext, useEffect, useState } from 'react'
export const ColourContext = createContext();

const ThemeContext = ({children}) => {
    const [Theme, setTheme] = useState("light");

    useEffect(()=>{
        let saveditem = localStorage.getItem("theme");
        if(saveditem){
            setTheme(saveditem);
        }
    },[]);

    // saved theme after changing
    useEffect(()=>{
        localStorage.setItem("theme", Theme);
        document.documentElement.className = Theme;
    },[Theme]);

    const toggleTheme = ()=>{
        setTheme((prev)=>{
            return (prev === "light" ? "dark" : "light")
        });
    }
  return (
    <ColourContext.Provider value={{Theme, toggleTheme}}>
        {children}
    </ColourContext.Provider>
  )
}

export default ThemeContext;