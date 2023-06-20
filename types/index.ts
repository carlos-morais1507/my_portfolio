export interface ProjectBoxProps {
  id: string;
  name: string;
  imgurl: string;
  url: string;
  stack: Array<string>;
  desc: string;
}

export interface Project {
  id: string;
  name: string;
  url: string;
  stack: string[];
  desc__en?: string;
  desc__pt?: string;
}