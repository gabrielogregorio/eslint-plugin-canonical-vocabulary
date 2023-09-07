export const handlerCases = {
  isCamelCase: (text: string): boolean => {
    return /^[a-z][a-zA-Z]*$/.test(text);
  },

  toCamelCase: (text: string): string => {
    let textToAnalisis = text;
    if (handlerCases.isUpperSnakeCase(textToAnalisis)) {
      textToAnalisis = textToAnalisis.toLowerCase();
    }

    if (handlerCases.isPascalCase(textToAnalisis)) {
      textToAnalisis = textToAnalisis[0].toLowerCase() + textToAnalisis.slice(1);
    }

    return textToAnalisis.replace(/([-_]\w)/g, (g) => {
      return g[1].toUpperCase();
    });
  },

  toPascalCase: (text: string): string => {
    let textToAnalisis = text;
    if (handlerCases.isUpperSnakeCase(textToAnalisis)) {
      textToAnalisis = textToAnalisis.toLowerCase();
    }
    return textToAnalisis.replace(/(^\w|[-_]\w)/g, (g) => {
      return g.replace(/[-_]/, '').toUpperCase();
    });
  },

  isPascalCase: (text: string): boolean => {
    return /^[A-Z][a-zA-Z]*$/.test(text);
  },

  isSnakeCase: (text: string): boolean => {
    return /^[a-z]+(_[a-z]+)*$/.test(text);
  },
  toSnakeCase: (text: string): string => {
    let textToAnalisis = text;
    if (handlerCases.isUpperSnakeCase(textToAnalisis)) {
      textToAnalisis = textToAnalisis.toLowerCase();
    }

    return textToAnalisis.replace(/(?:[A-Z])/g, (g) => '_' + g.toLowerCase()).replace(/^_/, '');
  },

  isUpperSnakeCase: (text: string): boolean => {
    return /^[A-Z]+(_[A-Z]+)*$/.test(text);
  },

  toUpperSnakeCase: (text: string): string => {
    if (handlerCases.isUpperSnakeCase(text)) {
      return text;
    }

    let result = text.replace(/([A-Z])/g, '_$1');

    result = result.toUpperCase();

    return result.charAt(0) === '_' ? result.slice(1) : result;
  },
};
