import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import { describe, it, expect, beforeEach } from "vitest";

describe("App flow", () => {
  it("should allow selecting teams and performing draw", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/buscar seleção/i);

    fireEvent.change(input, { target: { value: "a" } });

    const items = screen.getAllByRole("option");

    items.slice(0, 16).forEach((item) => {
      fireEvent.click(item);
    });

    const button = screen.getByText(/sortear/i);

    fireEvent.click(button);

    expect(screen.getByText(/grupo a/i)).toBeInTheDocument();
  });
});

describe("persistência", () => {
  beforeEach(() => {
    localStorage.clear();
  });
  it("should load data from localStorage on init", async () => {
    const mockGroups = [
      { name: "Grupo A", teams: [{ name: "Brazil", code: "BRA" }] },
    ];

    localStorage.setItem("draw-groups", JSON.stringify(mockGroups));

    render(<App />);

    await waitFor(() => {
      expect(screen.getAllByText(/grupo/i).length).toBeGreaterThan(0);
    });
    expect(screen.getByText(/brazil/i)).toBeInTheDocument();
  });
});
