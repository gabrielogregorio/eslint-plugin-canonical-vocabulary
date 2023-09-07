const formatToSimpleStrings = (phrase: string): string => {
  return phrase.replace(/_/g, '').toLowerCase().trim();
};

export const stringsAreEquivalent = (phrase: string, word: string) => {
  const formattedPhrase = formatToSimpleStrings(phrase);
  const formattedWord = formatToSimpleStrings(word);

  return {
    bannedWordIsInStart: formattedPhrase.startsWith(formattedWord),
    isEquivalent: formattedPhrase.includes(formattedWord),
  };
};
