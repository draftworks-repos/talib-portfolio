export type Category = "IT Projects" | "Media Projects";

export interface ProjectVideo {
  id: string;
  name: string;
  logo: string;
  videoUrl: string;
  tags: string[];
}

export interface VideoShowcaseData {
  "IT Projects": ProjectVideo[];
}
