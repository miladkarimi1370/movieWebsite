import { createContext, useState } from "react";

export const IdMovieContext = createContext({
  idMovie : "",
  setIdMovie: () => {},
});

export const ContextProvider = ({ children }) => {
  const [idMovie, setIdMovie] = useState();

  return (
    <IdMovieContext.Provider value={{ idMovie, setIdMovie }}>
      {children}
    </IdMovieContext.Provider>
  );
};
