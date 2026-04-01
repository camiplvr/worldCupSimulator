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
      <div className="min-w-content">
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
          {allSelected ? "Limpar todos" : "Selecionar todos"}
        </button>

        <div>
          <ul
            id="results-list"
            role="listbox"
            className="border rounded mt-2 max-h-100 overflow-y-auto"
          >
            {!hasResults && (
              <li role="option" className="p-2 text-gray-200">
                Nenhuma seleção encontrada
              </li>
            )}

            {teams.map((team) => (
              <li
                role="option"
                key={team.code}
                className={`p-2 border-b last:border-none hover:bg-yellow-400 cursor-pointer ${isSelected(team.code) ? "bg-black text-white" : ""}`}
                onClick={() => handleSelect(team)}
              >
                {team.flag} {team.name} ({team.code})
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
