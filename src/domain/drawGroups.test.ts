import { describe, it, expect } from "vitest";
import { drawGroups } from "./drawGroups";

const mockTeams = Array.from({ length: 32 }, (_, i) => ({
  name: `Team ${i + 1}`,
  code: `T${i + 1}`,
  confederation: `TEST`,
}));

describe("drawGroups", () => {
  it("should create the correct number of groups", () => {
    const groups = drawGroups(mockTeams, 4, 8);
    expect(groups).toHaveLength(4);
  });

  it("should distribute teams correctly", () => {
    const groups = drawGroups(mockTeams, 4, 4);

    groups.forEach((group) => {
      expect(group.teams).toHaveLength(4);
    });
  });

  it("should throw error when insuficient teams", () => {
    const insufficientTeams = mockTeams.slice(0, 10);
    expect(() => drawGroups(insufficientTeams, 4, 4)).toThrow(
      "Selecione pelo menos 16 times",
    );
  });
});
