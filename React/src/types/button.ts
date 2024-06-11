const COLOR = ["primary", "secondary", "destructive"] as const;
export type ButtonColor = typeof COLOR[number];