import { Author } from "./Author";

export type Poetry = {
  title: string;
  author: Author;
  lines: string[];
  lineCount: string;
};
