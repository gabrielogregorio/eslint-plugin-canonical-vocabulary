import { handlerCases } from './handleCases';

type caseDetectedType = 'isUpperSnakeCase' | 'isSnakeCase' | 'isPascalCase' | 'isCamelCase';

const detectCase = (phraseInAnyCase: string): caseDetectedType => {
  if (handlerCases.isUpperSnakeCase(phraseInAnyCase)) {
    return 'isUpperSnakeCase';
  }

  if (handlerCases.isSnakeCase(phraseInAnyCase) && phraseInAnyCase.includes('_')) {
    return 'isSnakeCase';
  }

  if (handlerCases.isPascalCase(phraseInAnyCase)) {
    return 'isPascalCase';
  }

  return 'isCamelCase';
};

const applyCase = (phrase: string, cases: caseDetectedType, bannedWordIsInStart: boolean) => {
  if (cases === 'isUpperSnakeCase') {
    return handlerCases.toUpperSnakeCase(phrase);
  }

  if (cases === 'isSnakeCase') {
    return handlerCases.toSnakeCase(phrase);
  }

  if (cases === 'isPascalCase') {
    return handlerCases.toPascalCase(phrase);
  }

  const isCamelCaseButNoIsInStart = !bannedWordIsInStart;
  if (isCamelCaseButNoIsInStart) {
    return handlerCases.toPascalCase(phrase);
  }

  return handlerCases.toCamelCase(phrase);
};

export const fixBasedInCase = (
  phraseInAnyCase: string,
  wordTargetInAnyCase: string,
  fixToInAnyCase: string,
  bannedWordIsInStart: boolean,
): string => {
  const caseDetected = detectCase(phraseInAnyCase);
  const wordInCase = applyCase(wordTargetInAnyCase, caseDetected, bannedWordIsInStart);
  const fixToInCase = applyCase(fixToInAnyCase, caseDetected, bannedWordIsInStart);

  return phraseInAnyCase.replace(wordInCase, fixToInCase);
};
