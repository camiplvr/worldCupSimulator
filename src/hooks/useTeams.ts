import { useState, useMemo } from "react";
import teamsData from "../data/teams.json";
import { filterTeams } from "../utils/filterTeams.ts";

export function useTeams() {
  const [query, setQuery] = useState("");

  const teams = useMemo(() => filterTeams(teamsData.teams, query), [query]);

  return {
    query,
    setQuery,
    teams,
    hasResults: teams.length > 0,
  };
}
