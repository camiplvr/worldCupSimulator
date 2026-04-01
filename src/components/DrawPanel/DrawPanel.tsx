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
      <p className="text-sm text-gray-200 mt-4">
        Selecione a quantidade de grupos e times por grupos:
      </p>

      <div className="block mt-4 ">
        <div className="flex gap-4 m-2 align-items-center">
          <div>
            <label className="block text-sm ">Grupos</label>
            <input
              type="number"
              min={1}
              value={groupCount}
              onChange={(e) => setGroupCount(Number(e.target.value))}
              className="border p-1 rounded w-20"
            />
          </div>
          <div>
            <label className="block text-sm ">Times por grupo</label>
            <input
              type="number"
              min={1}
              value={teamsPerGroup}
              onChange={(e) => setTeamsPerGroup(Number(e.target.value))}
              className="border p-1 rounded w-20"
            />
          </div>
        </div>

        <button
          onClick={onDraw}
          disabled={disabled}
          className="mt-4 w-full bg-yellow-400 text-black font-semibold py-3 rounded disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed"
        >
          Sortear grupos
        </button>

        {disabled && (
          <p className="text-gray-200 mt-2">
            Selecione {totalNeeded - selectedTeams} times para sortear
          </p>
        )}
      </div>
    </>
  );
}
