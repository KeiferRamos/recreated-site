import React, { createContext, useContext, useEffect, useState } from "react";

const Globalcontext = createContext([]);

export function AppProvider({ children }) {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [isOpen, setisOpen] = useState(false);

  useEffect(() => {
    const setWidth = () => setScreenWidth(window.innerWidth);

    window.addEventListener("resize", setWidth);
    return () => window.removeEventListener("resize", setWidth);
  }, [window.innerWidth]);

  return (
    <Globalcontext.Provider value={{ screenWidth, isOpen, setisOpen }}>
      {children}
    </Globalcontext.Provider>
  );
}

export default () => useContext(Globalcontext);
