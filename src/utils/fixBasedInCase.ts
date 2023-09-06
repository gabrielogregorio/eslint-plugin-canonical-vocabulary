import { handlerCases } from "./handleCases";

type availableCases =
  | "isUpperSnakeCase"
  | "isSnakeCase"
  | "isPascalCase"
  | "isCamelCase";

const discoveryCase = (pharseInAnyCase: string): availableCases => {
  if (handlerCases.isUpperSnakeCase(pharseInAnyCase)) {
    return "isUpperSnakeCase";
  }

  if (handlerCases.isSnakeCase(pharseInAnyCase)) {
    return "isSnakeCase";
  }

  if (handlerCases.isPascalCase(pharseInAnyCase)) {
    return "isPascalCase";
  }

  return "isCamelCase";
};

const convertBasedInCase = (
  phare: string,
  cases: availableCases,
  targetIsInStart: boolean
) => {
  if (cases === "isUpperSnakeCase") {
    return handlerCases.toUpperSnakeCase(phare);
  }

  if (cases === "isSnakeCase") {
    return handlerCases.toSnakeCase(phare);
  }

  if (cases === "isPascalCase") {
    return handlerCases.toPascalCase(phare);
  }

  if (!targetIsInStart) {
    return handlerCases.toPascalCase(phare);
  }
  return handlerCases.toCamelCase(phare);
};

export const fixBasedInCase = (
  phraseInAnyCase: string,
  wordTargetInAnyCase: string,
  fixToInAnyCase: string,
  targetIsInStart: boolean
): string => {
  const phareseCase = discoveryCase(phraseInAnyCase);
  const wordTarge = convertBasedInCase(
    wordTargetInAnyCase,
    phareseCase,
    targetIsInStart
  );
  const fixToInAnyCaseInCase = convertBasedInCase(
    fixToInAnyCase,
    phareseCase,
    targetIsInStart
  );

  return phraseInAnyCase.replace(wordTarge, fixToInAnyCaseInCase);
};
