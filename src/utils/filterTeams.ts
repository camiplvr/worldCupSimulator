import type { Team } from "../types/index";
import { normalizedString } from "./normalizedString";

export function filterTeams(teams: Team[], query: string): Team[] {
  if (!query.trim()) return teams;

  const normalizedQuery = normalizedString(query);

  return teams.filter((team) => {
    return (
      normalizedString(team.name).includes(normalizedQuery) ||
      normalizedString(team.code).includes(normalizedQuery)
    );
  });
}
