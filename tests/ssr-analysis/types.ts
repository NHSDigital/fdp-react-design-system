// Types for SSR analysis testing

export type SSRIssueType = 
  | 'browser-api' 
  | 'dom-access' 
  | 'window-object'
  | 'document-object'
  | 'useEffect'
  | 'useLayoutEffect'
  | 'localStorage'
  | 'sessionStorage'
  | 'navigator'
  | 'event-listener'
  | 'resize-observer'
  | 'intersection-observer'
  | 'media-query'
  | 'third-party-library'
  | 'conditional-hydration';

export type SSRCompatibilityLevel = 
  | 'fully-compatible' 
  | 'compatible-with-hydration'
  | 'client-only'
  | 'requires-refactoring';

export interface ComponentSSRIssue {
  type: SSRIssueType;
  line: number;
  code: string;
  severity: 'low' | 'medium' | 'high' | 'blocking';
  description: string;
  suggestion: string;
  canAutoFix: boolean;
}

export interface ComponentAnalysis {
  name: string;
  filePath: string;
  compatibilityLevel: SSRCompatibilityLevel;
  issues: ComponentSSRIssue[];
  hasHooks: boolean;
  usesBrowserAPIs: boolean;
  usesDOM: boolean;
  canBeServerSide: boolean;
  refactoringNeeded: RefactoringAction[];
}

export interface RefactoringAction {
  type: 'wrap-use-client' | 'lazy-load' | 'conditional-render' | 'dynamic-import' | 'move-to-hook' | 'add-ssr-guard';
  description: string;
  automated: boolean;
  complexity: 'low' | 'medium' | 'high';
  example?: string;
}

export interface SSRAnalysisResult {
  totalComponents: number;
  fullyCompatible: number;
  compatibleWithHydration: number;
  clientOnly: number;
  requiresRefactoring: number;
  components: ComponentAnalysis[];
  summary: {
    overallCompatibility: number; // percentage
    majorIssues: ComponentSSRIssue[];
    quickWins: ComponentAnalysis[];
    complexRefactors: ComponentAnalysis[];
  };
}
