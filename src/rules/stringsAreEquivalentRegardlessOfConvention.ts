const formatToSimpleStrings = (frase: string): string => {
  return frase.replace(/_/g, "").toLowerCase().trim();
};

export const stringsAreEquivalentRegardlessOfConvention = (
  pharse: string,
  word: string
): boolean => {
  return formatToSimpleStrings(pharse).includes(formatToSimpleStrings(word));
};
