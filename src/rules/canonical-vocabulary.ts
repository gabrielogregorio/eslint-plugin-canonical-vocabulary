import { fixBasedInCase } from "../utils/fixBasedInCase";
import { stringsAreEquivalentRegardlessOfConvention } from "../utils/stringsAreEquivalentRegardlessOfConvention";

interface RuleOption {
  message?: string;
  fixTo?: string;
  words: string[];
}

type AstNode = {
  parent: { kind: string };
  id: { name: string; type: string };
};
type Context = {
  options: RuleOption[][];
  report: (arg0: { node: any; message: string; fix(fixer: any): any }) => void;
};

const formatMessage = (
  word: string,
  fixTo: string,
  messageLocal: string
): string => {
  return messageLocal.replace(/<word>/g, word).replace(/<fixTo>/g, fixTo);
};

const sendReport = (
  context: Context,
  node: AstNode,
  banWorld: string,
  fixToRef: string,
  fixTo: string,
  message: string
) => {
  context.report({
    node,
    message: formatMessage(banWorld, fixToRef, message),
    fix(fixer) {
      if (!fixTo) {
        return fixer;
      }
      return fixer.replaceText(
        node.id,
        node.id.name.replace(node.id.name, fixTo)
      );
    },
  });
};

const getMessageByParams = (options: RuleOption): string => {
  if (options?.message) {
    return options.message;
  }

  if (!options.fixTo) {
    return "The term <word> is not recommended";
  }

  return "The term <word> is not recommended, use the term <fixTo>";
};

const findInvalidName = (
  options: RuleOption[],
  nameVar: string,
  context: Context,
  node: AstNode
) => {
  options.forEach((option: RuleOption) => {
    const banWorlds = option.words;
    const fixTo = option.fixTo || "";
    const message = getMessageByParams(option);

    let bannedWordIsInStart = false;

    const banWorldFounded = banWorlds.find((banWord: string) => {
      const response = stringsAreEquivalentRegardlessOfConvention(
        nameVar,
        banWord
      );
      bannedWordIsInStart = response.bannedWordIsInStart;
      return response.equivalent;
    });

    if (banWorldFounded) {
      const fixToBasedInCase = fixBasedInCase(
        nameVar,
        banWorldFounded,
        fixTo,
        bannedWordIsInStart
      );
      sendReport(
        context,
        node,
        banWorldFounded,
        fixTo,
        fixToBasedInCase,
        message
      );
    }
  });
};

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "This ESLint plugin helps developers maintain a consistent vocabulary in their code. By defining canonical terms, developers can ensure that their codebase remains coherent and understandable.",
    },
    fixable: "code",
    schema: [
      {
        type: "array",
        items: {
          type: "object",
          properties: {
            message: {
              type: "string",
            },
            fixTo: {
              type: "string",
            },
            words: {
              type: "array",
              items: {
                type: "string",
              },
            },
          },
          additionalProperties: false,
        },
      },
    ],
  },

  create(context: Context) {
    let options = context.options[0];

    return {
      VariableDeclarator(node: AstNode) {
        if (["const", "let", "var"].includes(node.parent.kind)) {
          const name = node.id.name;

          if (node.id.type === "Identifier") {
            findInvalidName(options, name, context, node);
          }
        }
      },

      ClassDeclaration(node: AstNode) {
        findInvalidName(options, node.id.name, context, node);
      },

      FunctionDeclaration(node: AstNode) {
        findInvalidName(options, node.id.name, context, node);
      },
    };
  },
};
