import "./index.css";
import { useState } from "react";
import { SearchSelect } from "./components/SearchSelect/SearchSelect";
import { SelectedTeams } from "./components/SelectedTeams/SelectedTeams";
import { drawGroups } from "./services/drawGroups";
import { useDrawStore } from "./store/useDrawStore";
import type { Group } from "./types";

function App() {
  const { selectedTeams } = useDrawStore();
  const [error, setError] = useState("");
  const [groups, setGroups] = useState<Group[]>([]);

  const handleTest = () => {
    try {
      const groups = drawGroups(selectedTeams, 4, 4);
      setGroups(groups);
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
          {error && <p className="text-red-500 mt-2">{error}</p>}
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
        {groups.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {groups.map((group) => (
              <div key={group.id} className="border p-3 rounded">
                <h3 className="font-bold  text-blue-600 mb-2">{group.id}</h3>

                <ul>
                  {group.teams.map((team) => (
                    <li key={team.code}>
                      {team.name} ({team.code})
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
export default App;
