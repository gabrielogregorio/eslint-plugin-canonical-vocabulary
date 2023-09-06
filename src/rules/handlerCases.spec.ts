const handlerCases = {
  isCamelCase: (text: string): boolean => {
    return /^[a-z][a-zA-Z]*$/.test(text);
  },

  toCamelCase: (text: string): string => {
    let textToAnalisis = text;
    if (handlerCases.isUpperSnakeCase(textToAnalisis)) {
      textToAnalisis = textToAnalisis.toLowerCase();
    }

    if (handlerCases.isPascalCase(textToAnalisis)) {
      textToAnalisis =
        textToAnalisis[0].toLowerCase() + textToAnalisis.slice(1);
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
      return g.replace(/[-_]/, "").toUpperCase();
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

    return textToAnalisis
      .replace(/(?:[A-Z])/g, (g) => "_" + g.toLowerCase())
      .replace(/^_/, "");
  },

  isUpperSnakeCase: (text: string): boolean => {
    return /^[A-Z]+(_[A-Z]+)*$/.test(text);
  },

  toUpperSnakeCase: (text: string): string => {
    let result = text.replace(/([A-Z])/g, "_$1");

    result = result.toUpperCase();

    return result.charAt(0) === "_" ? result.slice(1) : result;
  },
};

describe("handler check cases", () => {
  describe("handlerCases.isCamelCase", () => {
    it("should check if is in camelCase", () => {
      expect(handlerCases.isCamelCase("iBeInCamelCase")).toBeTruthy();
      expect(handlerCases.isCamelCase("ibe")).toBeTruthy();
    });

    it("should check if not is in camelCase", () => {
      expect(handlerCases.isCamelCase("")).toBeFalsy();
    });

    it("should check if not is in camelCase", () => {
      expect(handlerCases.isCamelCase("INotBeInCamelCase")).toBeFalsy();
    });

    it("should check if not is in camelCase", () => {
      expect(handlerCases.isCamelCase("I_NOT_CAMEL_CASE")).toBeFalsy();
    });

    it("should check if not is in camelCase", () => {
      expect(handlerCases.isCamelCase("i_not_camel_case")).toBeFalsy();
    });
  });

  describe("handlerCases.isPascalCase", () => {
    it("should check if is in isPascalCase", () => {
      expect(handlerCases.isPascalCase("IBeInCamelCase")).toBeTruthy();
      expect(handlerCases.isPascalCase("IBE")).toBeTruthy();
    });

    it("should check if not is in camelCase", () => {
      expect(handlerCases.isPascalCase("")).toBeFalsy();
    });

    it("should check if not is in camelCase", () => {
      expect(handlerCases.isPascalCase("iNotBeInCamelCase")).toBeFalsy();
    });

    it("should check if not is in camelCase", () => {
      expect(handlerCases.isPascalCase("I_NOT_CAMEL_CASE")).toBeFalsy();
    });

    it("should check if not is in camelCase", () => {
      expect(handlerCases.isPascalCase("i_not_camel_case")).toBeFalsy();
    });
  });

  describe("handlerCases.isSnakeCase", () => {
    it("should check if is in isPascalCase", () => {
      expect(handlerCases.isSnakeCase("i_be_snake_case")).toBeTruthy();
      expect(handlerCases.isSnakeCase("case")).toBeTruthy();
    });

    it("should check if not is in camelCase", () => {
      expect(handlerCases.isSnakeCase("")).toBeFalsy();
    });

    it("should check if not is in camelCase", () => {
      expect(handlerCases.isSnakeCase("iNotBeInCamelCase")).toBeFalsy();
    });

    it("should check if not is in camelCase", () => {
      expect(handlerCases.isSnakeCase("I_NOT_CAMEL_CASE")).toBeFalsy();
    });

    it("should check if not is in camelCase", () => {
      expect(handlerCases.isSnakeCase("iNotSnakeCase")).toBeFalsy();
    });
  });

  describe("handlerCases.isUpperSnakeCase", () => {
    it("should check if is in isUpperSnakeCase", () => {
      expect(
        handlerCases.isUpperSnakeCase("I_BE_IN_UPPER_CASE_SNAKE_CASE")
      ).toBeTruthy();
      expect(handlerCases.isUpperSnakeCase("IBE")).toBeTruthy();
    });

    it("should check if not is in isUpperSnakeCase", () => {
      expect(handlerCases.isUpperSnakeCase("")).toBeFalsy();
    });

    it("should check if not is in isUpperSnakeCase", () => {
      expect(handlerCases.isUpperSnakeCase("iNotBeInCamelCase")).toBeFalsy();
    });

    it("should check if not is in isUpperSnakeCase", () => {
      expect(handlerCases.isUpperSnakeCase("I_not_be")).toBeFalsy();
    });

    it("should check if not is in isUpperSnakeCase", () => {
      expect(handlerCases.isUpperSnakeCase("iNotSnakeCase")).toBeFalsy();
    });
  });
});

describe("handler check cases", () => {
  it("convert to any case to camel case", () => {
    expect(handlerCases.toCamelCase("snake_case")).toEqual("snakeCase");
    expect(handlerCases.toCamelCase("SNAKE_CASE")).toEqual("snakeCase");
    expect(handlerCases.toCamelCase("SnakeCase")).toEqual("snakeCase");
  });

  it("convert to any case to pascal case", () => {
    expect(handlerCases.toPascalCase("snake_case")).toEqual("SnakeCase");
    expect(handlerCases.toPascalCase("SNAKE_CASE")).toEqual("SnakeCase");
    expect(handlerCases.toPascalCase("snakeCase")).toEqual("SnakeCase");
  });

  it("convert to any case to toSnakeCase", () => {
    expect(handlerCases.toSnakeCase("SnakeCase")).toEqual("snake_case");
    expect(handlerCases.toSnakeCase("SNAKE_CASE")).toEqual("snake_case");
    expect(handlerCases.toSnakeCase("snakeCase")).toEqual("snake_case");
  });

  it("convert to any case to toUpperSnakeCase", () => {
    expect(handlerCases.toUpperSnakeCase("SnakeCase")).toEqual("SNAKE_CASE");
    expect(handlerCases.toUpperSnakeCase("snake_case")).toEqual("SNAKE_CASE");
    expect(handlerCases.toUpperSnakeCase("snakeCase")).toEqual("SNAKE_CASE");
  });
});
