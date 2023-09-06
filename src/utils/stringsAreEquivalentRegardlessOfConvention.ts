const formatToSimpleStrings = (frase: string): string => {
  return frase.replace(/_/g, "").toLowerCase().trim();
};

export const stringsAreEquivalentRegardlessOfConvention = (
  pharse: string,
  word: string
): { equivalent: boolean; isInStart: boolean } => {
  const pharseFormated = formatToSimpleStrings(pharse);
  const wordFormatted = formatToSimpleStrings(word);

  return {
    isInStart: pharseFormated.startsWith(wordFormatted),
    equivalent: pharseFormated.includes(wordFormatted),
  };
};
