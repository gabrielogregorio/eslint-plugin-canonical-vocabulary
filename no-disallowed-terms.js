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
    let banWorlds = context.options[0][0].words; // FIX TO USE LIST
    let fixTo = context.options[0][0].fixTo; // FIX TO USE LIST
    let message = context.options[0][0].message; // FIX TO USE LIST

    const formatMessage = (messageLocal, word) => {
      return messageLocal.replace("<word>", word).replace("<fixTo>", fixTo);
    };

    return {
      VariableDeclarator(node) {
        if (["const", "let", "var"].includes(node.parent.kind)) {
          const banWorldFounded = banWorlds.find((banWord) =>
            node.id.name.toLowerCase().includes(banWord.toLowerCase())
          );
          if (node.id.type === "Identifier" && banWorldFounded?.length) {
            // if (node.init && node.init.type === "Literal" && node.init.value !== "bar") {
            context.report({
              node,
              message: formatMessage(message, banWorldFounded),

              fix(fixer) {
                return fixer.replaceText(
                  node.id,
                  node.id.name.replace(banWorldFounded[0], fixTo)
                );
              },
            });
            // }
          }
        }
      },
    };
  },
};
