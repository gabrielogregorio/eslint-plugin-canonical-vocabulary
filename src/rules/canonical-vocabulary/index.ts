import { AstNode, Context } from '../../utils/types';
import { findBannedTermAndReport } from './findBannedTermAndReport';

module.exports = {
  create(context: Context) {
    let options = context.options[0];

    return {
      VariableDeclarator(node: AstNode) {
        if (['const', 'let', 'var'].includes(node.parent.kind)) {
          const name = node.id.name;

          if (node.id.type === 'Identifier') {
            findBannedTermAndReport(options, name, context, node);
          }
        }
      },

      ClassDeclaration(node: AstNode) {
        findBannedTermAndReport(options, node.id.name, context, node);
      },

      FunctionDeclaration(node: AstNode) {
        findBannedTermAndReport(options, node.id.name, context, node);
      },
    };
  },

  meta: {
    type: 'problem',
    docs: {
      description:
        'This ESLint plugin helps developers maintain a consistent vocabulary in their code. By defining canonical terms, developers can ensure that their codebase remains coherent and understandable.',
    },
    fixable: 'code',
    schema: [
      {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
            },
            fixTo: {
              type: 'string',
            },
            words: {
              type: 'array',
              items: {
                type: 'string',
              },
            },
          },
          additionalProperties: false,
        },
      },
    ],
  },
};
