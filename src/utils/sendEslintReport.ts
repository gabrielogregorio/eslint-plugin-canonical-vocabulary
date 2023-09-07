import { AstNode, Context } from './types';

export const sendEslintReport = (context: Context, node: AstNode, fixTo: string, message: string) => {
  context.report({
    node,
    message,
    fix(fixer) {
      if (!fixTo) {
        return fixer;
      }

      return fixer.replaceText(node.id, node.id.name.replace(node.id.name, fixTo));
    },
  });
};
