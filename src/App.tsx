import "./index.css";
import { useState, useEffect } from "react";
import { SearchSelect } from "./components/SearchSelect/SearchSelect";
import { SelectedTeams } from "./components/SelectedTeams/SelectedTeams";
import { drawGroups } from "./domain/drawGroups";
import { useDrawStore } from "./store/useDrawStore";
import type { Group } from "./types";

const GROUPS_KEY = "draw-groups";
const CONFIG_KEY = "draw-config";

function App() {
  const { selectedTeams } = useDrawStore();
  const [error, setError] = useState("");
  const [groups, setGroups] = useState<Group[]>([]);

  const savedConfig = localStorage.getItem(CONFIG_KEY);
  const initialConfig = savedConfig
    ? JSON.parse(savedConfig)
    : { groupCount: 4, groupSize: 4 };

  const [groupCount, setGroupCount] = useState(initialConfig.groupCount || 4);
  const [groupSize, setGroupSize] = useState(initialConfig.groupSize || 4);
  const totalNeeded = groupCount * groupSize;

  useEffect(() => {
    const saved = localStorage.getItem(GROUPS_KEY);

    if (saved) {
      setGroups(JSON.parse(saved));
    }
  }, []);

  const handleTest = () => {
    try {
      const groups = drawGroups(selectedTeams, groupCount, groupSize);
      setGroups(groups);
      localStorage.setItem(GROUPS_KEY, JSON.stringify(groups));
    } catch (err: unknown) {
      setError((err as Error).message);
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
          <div className="flex gap-4 mb-4">
            <div>
              <label className="block text-sm">Grupos</label>
              <input
                type="number"
                min={1}
                value={groupCount}
                onChange={(e) => setGroupCount(Number(e.target.value))}
                className="border p-1 rounded w-20"
              />
            </div>

            <div>
              <label className="block text-sm">Times por grupo</label>
              <input
                type="number"
                min={1}
                value={groupSize}
                onChange={(e) => setGroupSize(Number(e.target.value))}
                className="border p-1 rounded w-20"
              />
            </div>
          </div>

          <button
            onClick={handleTest}
            disabled={selectedTeams.length < totalNeeded}
            className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Sortear Grupos
          </button>
          {selectedTeams.length < totalNeeded && (
            <p className="text-gray-500 mt-2">
              Selecione {totalNeeded - selectedTeams.length} times para sortear
            </p>
          )}
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
