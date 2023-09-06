import { fixBasedInCase } from "../utils/fixBasedInCase";
import { stringsAreEquivalentRegardlessOfConvention } from "../utils/stringsAreEquivalentRegardlessOfConvention";

interface RuleOption {
  message: string;
  fixTo: string;
  words: string[];
}

const formatMessage = (
  messageLocal: string,
  word: string,
  fixTo: string
): string => {
  return messageLocal.replace(/<word>/g, word).replace(/<fixTo>/g, fixTo);
};

const sendReport = (
  context: {
    report: (arg0: {
      node: any;
      message: string;
      fix(fixer: any): any;
    }) => void;
  },
  node: { id: { name: string } },
  message: string,
  banWorld: string,
  fixToRef: string,
  fixTo: string
) => {
  context.report({
    node,
    message: formatMessage(message, banWorld, fixToRef),
    fix(fixer) {
      return fixer.replaceText(
        node.id,
        node.id.name.replace(node.id.name, fixTo)
      );
    },
  });
};

const findInvalidName = (
  options: { words: any; fixTo: any; message: any }[],
  nameVar: string,
  context: any,
  node: any
) => {
  options.forEach((option: { words: any; fixTo: any; message: any }) => {
    const banWorlds = option.words;
    const fixTo = option.fixTo;
    const message = option.message;

    let isInStart = false;

    const banWorldFounded = banWorlds.find((banWord: string) => {
      const response = stringsAreEquivalentRegardlessOfConvention(
        nameVar,
        banWord
      );
      isInStart = response.isInStart;
      return response.equivalent;
    });

    if (banWorldFounded) {
      const fixToBasedInCase = fixBasedInCase(
        nameVar,
        banWorldFounded,
        fixTo,
        isInStart
      );
      sendReport(
        context,
        node,
        message,
        banWorldFounded,
        fixTo,
        fixToBasedInCase
      );
    }
  });
};

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description:
        "Padroniza escrita de código, banindo e recomendando certos padrões",
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
              default: "",
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
  create(context: { options: RuleOption[][] }) {
    let options = context.options[0] as RuleOption[];

    return {
      VariableDeclarator(node: {
        parent: { kind: string };
        id: { name: any; type: any };
      }) {
        if (["const", "let", "var"].includes(node.parent.kind)) {
          const nameVar = node.id.name;
          const identifierType = node.id.type;

          if (identifierType === "Identifier") {
            findInvalidName(options, nameVar, context, node);
          }
        }
      },

      ClassDeclaration(node: { id: { name: any } }) {
        const nameVar = node.id.name;
        findInvalidName(options, nameVar, context, node);
      },

      FunctionDeclaration(node: { id: { name: any } }) {
        const nameVar = node.id.name;
        findInvalidName(options, nameVar, context, node);
      },
    };
  },
};
