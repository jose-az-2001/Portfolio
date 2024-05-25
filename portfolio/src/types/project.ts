// types.ts
export interface Project {
    id: number;
    title: string;
    description: string;
    role: string;
    impact: string;
    process: string;
    media: { src: string; alt: string }[];
  }
  