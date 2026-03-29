import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Team } from "../types/index";

type DrawState = {
  selectedTeams: Team[];
  addTeam: (team: Team) => void;
  removeTeam: (code: string) => void;
  clearTeams: () => void;
};

export const useDrawStore = create<DrawState>()(
  persist(
    (set, get) => ({
      selectedTeams: [] as unknown as Team[],

      addTeam: (team) => {
        const exists = get().selectedTeams.some((t) => t.code === team.code);

        if (exists) return;

        set((state) => ({
          selectedTeams: [...state.selectedTeams, team],
        }));
      },

      removeTeam: (code) => {
        set((state) => ({
          selectedTeams: state.selectedTeams.filter((t) => t.code !== code),
        }));
      },

      clearTeams: () => set({ selectedTeams: [] }),
    }),
    {
      name: "draw-storage",
    },
  ),
);
