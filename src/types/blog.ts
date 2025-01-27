export interface BlogSection {
  title: string;
  content: string;
  tip?: string;
  avoid?: string[];
  options?: string[];
  note?: string;
  image?: string;
}

export interface BlogFooter {
  location: string;
  slogan: string;
  content?: string;
}

export interface BlogContent {
  title: string;
  subtitle: string;
  intro: string;
  mainTitle: string;
  sections: BlogSection[];
  avoid?: {
    title: string;
    items: string[];
  };
  whyItMatters?: {
    title: string;
    content: string;
  };
  booking?: {
    title: string;
    content: string;
  };
  footer: BlogFooter;
}

export interface BlogTranslations {
  en: BlogContent;
  th: BlogContent;
}