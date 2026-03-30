import { describe, it, expect } from "vitest";
import { filterTeams } from "./filterTeams";

const mockTeams = [
  { name: "Brazil", code: "BRA", confederation: "CONMEBOL" },
  { name: "Argentina", code: "ARG", confederation: "CONMEBOL" },
  { name: "Germany", code: "GER", confederation: "UEFA" },
  { name: "Spain", code: "ESP", confederation: "UEFA" },
];

describe("filterTeams", () => {
  it("should return all teams when query is empty", () => {
    const result = filterTeams(mockTeams, "");
    expect(result).toEqual(mockTeams);
    expect(result).toHaveLength(4);
  });

  it("should filter teams by name", () => {
    const result = filterTeams(mockTeams, "bra");
    expect(result[0].name).toBe("Brazil");
    expect(result).toHaveLength(1);
  });

  it("should filter teams by code", () => {
    const result = filterTeams(mockTeams, "arg");
    expect(result[0].code).toBe("ARG");
    expect(result).toHaveLength(1);
  });
});
