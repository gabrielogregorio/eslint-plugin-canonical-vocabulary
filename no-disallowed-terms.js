const formatMessage = (messageLocal, word, fixTo) => {
  return messageLocal.replace("<word>", word).replace("<fixTo>", fixTo);
};

const sendReport = (context, node, message, banWorld, fixTo) => {
  context.report({
    node,
    message: formatMessage(message, banWorld, fixTo),
    fix(fixer) {
      return fixer.replaceText(node.id, node.id.name.replace(banWorld, fixTo));
    },
  });
};

const findInvalidName = (options, nameVar, context, node) => {
  options.forEach((option) => {
    const banWorlds = option.words;
    const fixTo = option.fixTo;
    const message = option.message;

    const banWorldFounded = banWorlds.find((banWord) =>
      nameVar.toLowerCase().includes(banWord.toLowerCase())
    );

    if (banWorldFounded) {
      sendReport(context, node, message, banWorldFounded, fixTo);
    }
  });
};

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Padroniza escrita de valores",
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
  create(context) {
    let options = context.options[0];

    return {
      VariableDeclarator(node) {
        if (["const", "let", "var"].includes(node.parent.kind)) {
          const nameVar = node.id.name;
          const identifierType = node.id.type;

          if (identifierType === "Identifier") {
            findInvalidName(options, nameVar, context, node);
          }
        }
      },

      ClassDeclaration(node) {
        const nameVar = node.id.name;
        findInvalidName(options, nameVar, context, node);
      },

      FunctionDeclaration(node) {
        const nameVar = node.id.name;
        findInvalidName(options, nameVar, context, node);
      },
    };
  },
};
