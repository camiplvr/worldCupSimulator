import type { Team } from "../types/index";
import { normalizeString } from "./normalizedString";

export function filterTeams(teams: Team[], query: string): Team[] {
  if (!query.trim()) return teams;

  const normalizedQuery = normalizeString(query);

  return teams.filter((team) => {
    return (
      normalizeString(team.name).includes(normalizedQuery) ||
      normalizeString(team.code).includes(normalizedQuery)
    );
  });
}
