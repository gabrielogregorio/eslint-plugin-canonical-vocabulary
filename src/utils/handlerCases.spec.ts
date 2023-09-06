import { handlerCases } from "./handleCases";

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
    expect(handlerCases.toCamelCase("snakeCase")).toEqual("snakeCase");
    expect(handlerCases.toCamelCase("snake_case")).toEqual("snakeCase");
    expect(handlerCases.toCamelCase("SNAKE_CASE")).toEqual("snakeCase");
    expect(handlerCases.toCamelCase("SnakeCase")).toEqual("snakeCase");
  });

  it("convert to any case to pascal case", () => {
    expect(handlerCases.toPascalCase("SnakeCase")).toEqual("SnakeCase");
    expect(handlerCases.toPascalCase("snake_case")).toEqual("SnakeCase");
    expect(handlerCases.toPascalCase("SNAKE_CASE")).toEqual("SnakeCase");
    expect(handlerCases.toPascalCase("snakeCase")).toEqual("SnakeCase");
  });

  it("convert to any case to toSnakeCase", () => {
    expect(handlerCases.toSnakeCase("snake_case")).toEqual("snake_case");
    expect(handlerCases.toSnakeCase("SnakeCase")).toEqual("snake_case");
    expect(handlerCases.toSnakeCase("SNAKE_CASE")).toEqual("snake_case");
    expect(handlerCases.toSnakeCase("snakeCase")).toEqual("snake_case");
  });

  it("convert to any case to toUpperSnakeCase", () => {
    expect(handlerCases.toUpperSnakeCase("SNAKE_CASE")).toEqual("SNAKE_CASE");
    expect(handlerCases.toUpperSnakeCase("SnakeCase")).toEqual("SNAKE_CASE");
    expect(handlerCases.toUpperSnakeCase("snake_case")).toEqual("SNAKE_CASE");
    expect(handlerCases.toUpperSnakeCase("snakeCase")).toEqual("SNAKE_CASE");
  });
});
