import { describe, it, expect } from "vitest";
import { normalizedString } from "./normalizedString";

describe("normalizeString", () => {
  it("should convert string to lowercase", () => {
    const result = normalizedString("BRAZIL");
    expect(result).toBe("brazil");
  });

  it("should remove accents from characters", () => {
    const result = normalizedString("França");
    expect(result).toBe("franca");
  });

  it("should handle mixed cases and accents", () => {
    const result = normalizedString("MéXiCo");

    expect(result).toBe("mexico");
  });

  it("should return empty string when input is empty", () => {
    const result = normalizedString("");

    expect(result).toBe("");
  });
  it("should trim spaces", () => {
    const result = normalizedString("  Brazil  ");

    expect(result).toBe("brazil");
  });
});
