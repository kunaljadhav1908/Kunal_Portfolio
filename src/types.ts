export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'Frontend' | 'Backend';
  technologies: string[];
  description: string;
  features: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  isFeatured?: boolean;
  thumbnailPattern: 'dairy' | 'kcart' | 'tweetbar' | 'bus' | 'cab' | 'blog';
}

export interface SkillCategory {
  id: string;
  title: string;
  categoryName: string;
  icon: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  highlights: string[];
  skillsUsed: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  year: string;
  grade: string;
  gradeType: 'CGPA' | 'Percentage';
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  organization: string;
  category: string;
  skills: string[];
}
