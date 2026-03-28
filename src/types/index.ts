export interface Team {
  name: string;
  code: string;
  confederation: string;
  qualificationType?: string;
  pot?: number;
}

export interface Group {
  id: string;
  teams: Team[];
}

export interface DrawSettings {
  groupCount: number;
  teamsPerGroup: number;
}

export interface DrawResult {
  groups: Group[];
}
