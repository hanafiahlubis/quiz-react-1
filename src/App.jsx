import { createContext } from "react";
import { useState } from "react";
import Register from "./pages/Register";

//membuat contex
export const LanguetsContex = createContext();
export const bahasa = {
  id: {
    akun: "pengguna",
    sandi: "sandi",
    masuk: "masuk",
    lahir: "lahir",
    hp: "nomer Hp",
  },
  en: {
    akun: "user",
    sandi: "password",
    masuk: "login",
    lahir: "addrest",
    hp: "phone number",
  },
};
export default function App() {
  const [languets, setLanguets] = useState("id");

  return (
    <LanguetsContex.Provider //menyiapkan
      value={{
        languets,
        setLanguets,
      }}
    >
      <Register />
    </LanguetsContex.Provider>
  );
}
