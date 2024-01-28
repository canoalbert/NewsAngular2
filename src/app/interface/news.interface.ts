import { Section } from './section.interface';

export interface News {
  _id?: string;
  section: Section;
  images: string[];
  title: string;
  subtitle: string;
  author: string;
  date: Date;
  content: string;
}
