export interface ISkillInfo {
  name: string;
  notes: string;
}

export interface ISocialInfo {
  icon: string;
  name: string;
  link: string;
}

export interface IAboutMeInfo {
  id: number;
  name: string;
  icon: string;
  description: string;
}

export interface IExperienceInfo extends IAboutMeInfo {
  technologies: Array<string>;
}

export interface IProjectInfo {
  id: number;
  name: string;
  image: string;
  description: string;
  text: string;
  technologies: Array<string>;
}

export interface IImprintInfo {
  heading?: string;
  name: string;
  address: string;
  city: string;
  email: string;
  phone: string;
}

export interface IBlogPost {
  name: string;
  date: string;
  path: string;
  image: string;
  markdown: string;
  tags: Array<string>;
}

export interface IPostInfo {
  post: string;
  filePath: string;
}
