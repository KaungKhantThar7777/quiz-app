import { useContext, createContext } from "react";

export const FirebaseContext = createContext();

export const useFirebase = () => useContext(FirebaseContext);
