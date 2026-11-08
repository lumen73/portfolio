export interface ProjectScreenshot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface ProjectMedia {
  cover?: string;
  coverSrcSet?: string;
  coverSizes?: string;
  coverAlt?: string;
  coverWidth?: number;
  coverHeight?: number;
  screenshots?: ProjectScreenshot[];
  demoVideo?: string;
  poster?: string;
  note?: string;
}

export interface ProjectVersion {
  id: string;
  label: string;
  problem: string;
  features?: string;
  security?: string;
  techStack: string[];
  codeUrl?: string;
  demoUrl?: string;
  media: ProjectMedia;
}

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  summary: string;
  problem?: string;
  features?: string;
  security?: string;
  techStack?: string[];
  comparison?: { criterion: string; v1: string; v5: string }[];
  codeUrl?: string;
  demoUrl?: string;
  media?: ProjectMedia;
  versions?: ProjectVersion[];
}

export const projectsData: ProjectData[];
export default projectsData;
