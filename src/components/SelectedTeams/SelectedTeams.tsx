import { useDrawStore } from "../../store/useDrawStore";

export function SelectedTeams() {
  const { selectedTeams, removeTeam, clearTeams } = useDrawStore();

  if (selectedTeams.length === 0) {
    return (
      <div className="min-h-150">
        <h2 className="font-bold m-2 ">
          Times selecionados ({selectedTeams.length})
        </h2>
        <p className="text-gray-200 text-center p-8">Nenhum time selecionado</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold m-2">
          Times selecionados ({selectedTeams.length})
        </h2>

        <button
          onClick={clearTeams}
          className="text-sm ml-2 text-red-500 hover:underline"
        >
          Limpar todos
        </button>
      </div>

      <ul className="border rounded mt-2 p-2 overflow-y-auto max-h-150">
        {selectedTeams.map((team) => (
          <li
            role="option"
            key={team.code}
            className="flex justify-between items-center p-2 border-b last:border-none"
          >
            <span>
              {team.flag} {team.name} ({team.code})
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
