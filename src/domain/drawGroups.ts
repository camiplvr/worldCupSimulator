import type { Team, Group } from "../types";

export function drawGroups(
  teams: Team[],
  groupCount: number,
  groupSize: number,
): Group[] {
  if (teams.length < groupCount * groupSize) {
    throw new Error(`Selecione pelo menos ${groupCount * groupSize} times`);
  }

  const shuffled = [...teams].sort(() => Math.random() - 0.5);

  const groups: Group[] = [];

  for (let i = 0; i < groupCount; i++) {
    groups.push({
      id: `Grupo ${String.fromCharCode(65 + i)}`,
      teams: [],
    });
  }

  let teamIndex = 0;

  for (let i = 0; i < groupCount; i++) {
    for (let j = 0; j < groupSize; j++) {
      groups[i].teams.push(shuffled[teamIndex]);
      teamIndex++;
    }
  }

  return groups;
}
