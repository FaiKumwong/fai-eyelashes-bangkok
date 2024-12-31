export interface BlogSection {
  title: string;
  content: string;
  tip?: string;
  avoid?: string[];
  options?: string[];
  note?: string;
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
  footer: {
    location: string;
    slogan: string;
  };
}

export interface BlogTranslations {
  en: BlogContent;
  th: BlogContent;
}