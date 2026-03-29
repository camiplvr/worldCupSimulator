import "./index.css";
import { useState } from "react";
import { SearchSelect } from "./components/SearchSelect/SearchSelect";
import { SelectedTeams } from "./components/SelectedTeams/SelectedTeams";
import { drawGroups } from "./services/drawGroups";
import { useDrawStore } from "./store/useDrawStore";

function App() {
  const { selectedTeams } = useDrawStore();
  const [error, setError] = useState("");

  const handleTest = () => {
    try {
      const groups = drawGroups(selectedTeams, 4, 4);
      console.log(groups);
      setError("");
    } catch (err: any) {
      setError(err.message);
    }
  };
  return (
    <>
      <div className="bg-white text-black font-bold p-10 text-2xl">
        Simulador de Sorteio da Copa do Mundo
        <div className="text-blue-500 mt-10">
          <SearchSelect />
          <SelectedTeams />
        </div>
        <div className="p-4">
          <button
            onClick={handleTest}
            disabled={selectedTeams.length < 16}
            className="disabled:opacity-50 border border-blue-500 text-blue-500 px-4 py-2 rounded hover:bg-blue-500 hover:text-white transition"
          >
            Testar sorteio
          </button>
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </>
  );
}
export default App;
