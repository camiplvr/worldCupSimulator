import { useDrawStore } from "../../store/useDrawStore";

export function SelectedTeams() {
  const { selectedTeams, removeTeam, clearTeams } = useDrawStore();

  if (selectedTeams.length === 0) {
    return (
      <div className="mt-4">
        <h2 className="font-bold mb-2">Times selecionados</h2>
        <p className="text-gray-500">Nenhum time selecionado</p>
      </div>
    );
  }

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-bold">Times selecionados</h2>

        <button
          onClick={clearTeams}
          className="text-sm text-red-500 hover:underline"
        >
          Limpar todos
        </button>
      </div>

      <ul className="border rounded p-2">
        {selectedTeams.map((team) => (
          <li
            key={team.code}
            className="flex justify-between items-center p-2 border-b last:border-none"
          >
            <span>
              {team.name} ({team.code})
            </span>

            <button
              onClick={() => removeTeam(team.code)}
              className="text-red-500 text-sm hover:underline"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
