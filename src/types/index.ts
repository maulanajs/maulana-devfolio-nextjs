export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  demoLink: string;
  image: string;
}

export interface Blog {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  slug: string;
  // Optional fields for future extension
  content?: string;
  author?: {
    name: string;
    image?: string;
    bio?: string;
  };
  tags?: string[];
  coverImage?: string;
}
