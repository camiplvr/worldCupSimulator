import "../../index.css";
import { useState, useEffect } from "react";
import { SearchSelect } from "../../components/SearchSelect/SearchSelect";
import { SelectedTeams } from "../../components/SelectedTeams/SelectedTeams";
import { drawGroups } from "../../domain/drawGroups";
import { useDrawStore } from "../../store/useDrawStore";
import type { Group, DrawSettings } from "../../types";
import { Navbar } from "../../components/Navbar/Navbar";
import { DrawPanel } from "../../components/DrawPanel/DrawPanel";
import { GroupCard } from "../../components/GroupCard/GroupCard";

const GROUPS_KEY = "draw-groups";
const CONFIG_KEY = "draw-config";

function Home() {
  const { selectedTeams } = useDrawStore();
  const [error, setError] = useState("");
  const [groups, setGroups] = useState<Group[]>([]);

  const savedConfig = localStorage.getItem(CONFIG_KEY);
  const initialConfig = savedConfig
    ? JSON.parse(savedConfig)
    : ({ groupCount: 2, teamsPerGroup: 4 } as DrawSettings);

  const [groupCount, setGroupCount] = useState(initialConfig.groupCount || 2);
  const [teamsPerGroup, setTeamsPerGroup] = useState(
    initialConfig.teamsPerGroup || 4,
  );
  const totalNeeded = groupCount * teamsPerGroup;

  useEffect(() => {
    const saved = localStorage.getItem(GROUPS_KEY);

    if (saved) {
      setGroups(JSON.parse(saved));
    }
  }, []);

  const handleDraw = () => {
    try {
      const groups = drawGroups(selectedTeams, groupCount, teamsPerGroup);
      setGroups(groups);
      localStorage.setItem(GROUPS_KEY, JSON.stringify(groups));
    } catch (err: unknown) {
      setError((err as Error).message);
    }
  };

  return (
    <>
      <div className="bg-gradient-to-br from-green-900 via-green-800 to-black">
        <Navbar />
        <div
          className="flex content-center justify-center gap-4 p-4
         min-h-screen bg-gradient-to-br from-green-900 to-black text-white"
        >
          <div className="mt-4 backdrop-blur h-full rounded-xl p-4 border border-white/10">
            <SearchSelect />
            <DrawPanel
              onDraw={handleDraw}
              disabled={selectedTeams.length < totalNeeded}
              selectedTeams={selectedTeams.length}
              totalNeeded={totalNeeded}
              setGroupCount={setGroupCount}
              setTeamsPerGroup={setTeamsPerGroup}
              groupCount={groupCount}
              teamsPerGroup={teamsPerGroup}
            />
          </div>
          <div className="block col-span-9 gap-4 p-4">
            <GroupCard
              groups={groups}
              groupCount={groupCount}
              teamsPerGroup={teamsPerGroup}
            />
          </div>
          <SelectedTeams />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </>
  );
}
export default Home;
