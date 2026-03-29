import { useTeams } from "../../hooks/useTeams";
import { useDrawStore } from "../../store/useDrawStore";

export function SearchSelect() {
  const { query, setQuery, teams, hasResults } = useTeams();
  const { selectedTeams, addTeam, removeTeam } = useDrawStore();

  const isSelected = (code: string) =>
    selectedTeams.some((t) => t.code === code);

  const handleSelect = (team: any) => {
    isSelected(team.code) ? removeTeam(team.code) : addTeam(team);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Buscar seleção..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full border p-2 rounded"
      />

      <ul className="border mt-2 max-h-40 overflow-y-auto">
        {!hasResults && (
          <li className="p-2 text-gray-500">Nenhuma seleção encontrada</li>
        )}

        {teams.map((team) => (
          <li
            key={team.code}
            className={`p-2 hover:bg-gray-100 cursor-pointer ${isSelected(team.code) ? "bg-green-200" : ""}`}
            onClick={() => handleSelect(team)}
          >
            {team.name} ({team.code})
          </li>
        ))}
      </ul>
    </div>
  );
}
