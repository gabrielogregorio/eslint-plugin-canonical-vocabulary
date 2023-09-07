export interface RuleOption {
  message?: string;
  fixTo?: string;
  words: string[];
}

export type AstNode = {
  parent: { kind: string };
  id: { name: string; type: string };
};

export type Context = {
  options: RuleOption[][];
  report: (arg0: { node: AstNode; message: string; fix(fixer: any): any }) => void;
};
