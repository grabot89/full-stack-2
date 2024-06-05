// Define the types for the shared structures

// Define a type for the props
interface Framework {
  url: string;
  name: string;
};

interface Module {
  name: string;
  noLectures: number;
  noPracticals: number;
};

export interface FrameworkProps {
  type: string;
  frameworks: Framework[];
}

export interface LanguageProps {
  heading: string;
  languages: string[];
};

export interface ModuleProps {
  heading: string;
  modules: Module[];
};
