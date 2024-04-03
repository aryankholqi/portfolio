import { StaticImageData } from "next/image";

interface works {
  id: number;
  title: string;
  image: StaticImageData;
  description: string;
  skills: string[];
  url: string;
}

export type { works };
