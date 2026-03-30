import { useTeams } from "../../hooks/useTeams";
import { useDrawStore } from "../../store/useDrawStore";

export function SearchSelect() {
  const { query, setQuery, teams, hasResults } = useTeams();
  const { selectedTeams, addTeam, removeTeam, setAllTeams, clearTeams } =
    useDrawStore();

  const allSelected = selectedTeams.length === teams.length;
  const isSelected = (code: string) =>
    selectedTeams.some((t) => t.code === code);

  const handleSelect = (team: any) => {
    isSelected(team.code) ? removeTeam(team.code) : addTeam(team);
  };

  return (
    <>
      <div className="mb-4">
        <input
          aria-label="Buscar seleção"
          role="combobox"
          aria-controls="results-list"
          placeholder="Buscar seleção..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full border p-2 rounded"
        />
        <button
          onClick={() => {
            if (allSelected) {
              clearTeams();
            } else {
              setAllTeams(teams);
            }
          }}
          className="mb-2 text-sm text-blue-500 hover:underline"
        >
          {allSelected ? "Remover todos" : "Selecionar todos"}
        </button>
      </div>
      <div>
        <ul
          id="results-list"
          role="listbox"
          className="border mt-2 max-h-40 overflow-y-auto"
        >
          {!hasResults && (
            <li role="option" className="p-2 text-gray-500">
              Nenhuma seleção encontrada
            </li>
          )}

          {teams.map((team) => (
            <li
              role="option"
              key={team.code}
              className={`p-2 hover:bg-gray-100 cursor-pointer ${isSelected(team.code) ? "bg-green-200" : ""}`}
              onClick={() => handleSelect(team)}
            >
              {team.name} ({team.code})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
