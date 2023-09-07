const formatToSimpleStrings = (frase: string): string => {
  return frase.replace(/_/g, "").toLowerCase().trim();
};

export const stringsAreEquivalentRegardlessOfConvention = (
  phrase: string,
  word: string
): { equivalent: boolean; bannedWordIsInStart: boolean } => {
  const phraseFormatted = formatToSimpleStrings(phrase);
  const wordFormatted = formatToSimpleStrings(word);

  return {
    bannedWordIsInStart: phraseFormatted.startsWith(wordFormatted),
    equivalent: phraseFormatted.includes(wordFormatted),
  };
};
