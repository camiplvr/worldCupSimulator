export function DrawPanel({
  onDraw,
  disabled,
  selectedTeams,
  totalNeeded,
  setGroupCount,
  setTeamsPerGroup,
  groupCount,
  teamsPerGroup,
}: {
  onDraw: () => void;
  disabled: boolean;
  selectedTeams: number;
  totalNeeded: number;
  setGroupCount: (count: number) => void;
  setTeamsPerGroup: (size: number) => void;
  groupCount: number;
  teamsPerGroup: number;
}) {
  return (
    <>
      <div className="block mt-4 ">
        <button
          onClick={onDraw}
          disabled={disabled}
          className="w-full bg-yellow-400 text-black font-semibold py-2 rounded disabled:opacity-50"
        >
          Sortear grupos
        </button>

        <div className="flex gap-4 m-2 align-items-center">
          <div>
            <label className="block text-sm m-2">Grupos</label>
            <input
              type="number"
              min={1}
              value={groupCount}
              onChange={(e) => setGroupCount(Number(e.target.value))}
              className="border p-1 rounded w-20"
            />
          </div>
          <div>
            <label className="block text-sm m-2">Times por grupo</label>
            <input
              type="number"
              min={1}
              value={teamsPerGroup}
              onChange={(e) => setTeamsPerGroup(Number(e.target.value))}
              className="border p-1 rounded w-20"
            />
          </div>
        </div>

        {disabled && (
          <p className="text-gray-500 mt-2">
            Selecione {totalNeeded - selectedTeams} times para sortear
          </p>
        )}
      </div>
    </>
  );
}
