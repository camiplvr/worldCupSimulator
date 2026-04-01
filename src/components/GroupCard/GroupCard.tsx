import type { Group } from "../../types";

export function GroupCard({
  groups,
  teamsPerGroup,
  groupCount,
}: {
  groups: Group[];
  groupCount: number;
  teamsPerGroup: number;
}) {
  const emptyGroups = Array.from({ length: groupCount }, (_, i) => ({
    name: `Grupo ${String.fromCharCode(65 + i)}`,
    teams: [],
  }));
  const displayGroups = groups.length >= 0 ? groups : emptyGroups;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:min-w-50 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {displayGroups.map((group, index) => (
        <div
          key={index}
          className="bg-white/10 hover:bg-white/20 transition backdrop-blur border border-white/10 rounded-xl p-4"
        >
          <div className="flex items-center justify-between mb-3 truncate">
            <span className="font-bold text-white text-lg mr-2 ">
              Grupo {String.fromCharCode(65 + index)}{" "}
            </span>

            <span className="text-sm text-gray-300">
              {group.teams.length}/{teamsPerGroup}
            </span>
          </div>

          <div className="space-y-2">
            {group.teams.length === 0 && (
              <p className="text-gray-400 text-sm">Aguardando sorteio...</p>
            )}

            {group.teams.map((team) => (
              <div
                key={team.code}
                className="bg-white/5 rounded-md px-3 py-2 flex items-center justify-between gap-2"
              >
                <span className="text-white text-sm break-words flex-1 truncate">
                  {team.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
