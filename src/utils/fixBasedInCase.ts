import { handlerCases } from './handleCases';

type availableCases = 'isUpperSnakeCase' | 'isSnakeCase' | 'isPascalCase' | 'isCamelCase';

const discoveryCase = (phraseInAnyCase: string): availableCases => {
  if (handlerCases.isUpperSnakeCase(phraseInAnyCase)) {
    return 'isUpperSnakeCase';
  }

  if (handlerCases.isSnakeCase(phraseInAnyCase)) {
    return 'isSnakeCase';
  }

  if (handlerCases.isPascalCase(phraseInAnyCase)) {
    return 'isPascalCase';
  }

  return 'isCamelCase';
};

const convertBasedInCase = (phrase: string, cases: availableCases, targetBannedWordIsInStart: boolean) => {
  if (cases === 'isUpperSnakeCase') {
    return handlerCases.toUpperSnakeCase(phrase);
  }

  if (cases === 'isSnakeCase') {
    return handlerCases.toSnakeCase(phrase);
  }

  if (cases === 'isPascalCase') {
    return handlerCases.toPascalCase(phrase);
  }

  if (!targetBannedWordIsInStart) {
    return handlerCases.toPascalCase(phrase);
  }
  return handlerCases.toCamelCase(phrase);
};

export const fixBasedInCase = (
  phraseInAnyCase: string,
  wordTargetInAnyCase: string,
  fixToInAnyCase: string,
  targetBannedWordIsInStart: boolean,
): string => {
  const phraseCase = discoveryCase(phraseInAnyCase);
  const wordTarge = convertBasedInCase(wordTargetInAnyCase, phraseCase, targetBannedWordIsInStart);
  const fixToInAnyCaseInCase = convertBasedInCase(fixToInAnyCase, phraseCase, targetBannedWordIsInStart);

  return phraseInAnyCase.replace(wordTarge, fixToInAnyCaseInCase);
};
