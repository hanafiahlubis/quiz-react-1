import { useContext } from "react";
import { LanguetsContex, bahasa } from "../App";
import { useState } from "react";

export default function Register() {
  const { languets, setLanguets } = useContext(LanguetsContex);
  const [temp, setTemp] = useState({});
  return (
    <>
      <div className="flex gap-3">
        <button onClick={() => setLanguets("id")} className="bg-red-500">
          indoneia
        </button>
        <button onClick={() => setLanguets("en")} className="bg-blue-500">
          english
        </button>
      </div>
      <form className="flex flex-col">
        <label>
          {bahasa[languets].akun}
          <input
            className="border"
            type="text"
            onChange={(e) => setTemp({ ...temp, email: e.target.value })}
          />
        </label>
        <label>
          {bahasa[languets].sandi}
          <input
            className="border "
            type="password"
            onChange={(e) => setTemp({ ...temp, password: e.target.value })}
          />
        </label>
        <label>
          {bahasa[languets].lahir}
          <input
            className="border "
            type="date"
            onChange={(e) => setTemp({ ...temp, password: e.target.value })}
          />
        </label>
        <label>
          {bahasa[languets].hp}
          <input
            className="border "
            type="text"
            onChange={(e) => setTemp({ ...temp, password: e.target.value })}
          />
        </label>
        <button className="bg-blue-500">{bahasa[languets].masuk}</button>
      </form>
    </>
  );
}
