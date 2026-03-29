import { useTeams } from "../../hooks/useTeams";

export function SearchSelect() {
  const { query, setQuery, teams, hasResults } = useTeams();

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
          <li key={team.code} className="p-2 hover:bg-gray-100 cursor-pointer">
            {team.name} ({team.code})
          </li>
        ))}
      </ul>
    </div>
  );
}
