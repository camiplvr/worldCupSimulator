import type { Group } from "../../types";

export function GroupCard({
  groups,
  teamsPerGroup,
}: {
  groups: Group[];
  groupCount: number;
  teamsPerGroup: number;
}) {
  if (groups.length === 0) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4">
      {groups.map((group) => (
        <div
          key={group.id}
          className="bg-white/10 hover:bg-white/20 transition backdrop-blur border border-white/10 rounded-xl p-4"
        >
          <div className="flex justify-between mb-3">
            <span className="font-bold text-white"> {group.id}</span>

            <span className="text-sm text-gray-300">
              {group.teams.length}/{teamsPerGroup}
            </span>
          </div>

          <div className="space-y-2">
            {group.teams.length === 0 && (
              <p className="text-gray-400 text-sm">Nenhum time ainda</p>
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
