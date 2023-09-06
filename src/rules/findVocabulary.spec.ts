const formatToSimpleStrings = (frase: string): string => {
  return frase.replace(/_/g, "").toLowerCase().trim();
};

const stringsAreEquivalentRegardlessOfConvention = (
  pharse: string,
  word: string
): boolean => {
  return formatToSimpleStrings(pharse).includes(formatToSimpleStrings(word));
};

describe("stringsAreEquivalentRegardlessOfConvention", () => {
  it("should check that regardless of convention, the strings are equivalent 1", () => {
    const pharse = "thisNotExistsOk";
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "not_exists")
    ).toEqual(true);
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "notexists")
    ).toEqual(true);
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "Notexists")
    ).toEqual(true);
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "NotExists")
    ).toEqual(true);
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "NotExistS")
    ).toEqual(true);
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "NOT_EXISTS")
    ).toEqual(true);
  });

  it("should check that regardless of convention, the strings are equivalent 1", () => {
    const pharse = "THIS NOT_EXISTS";
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "not_exists")
    ).toEqual(true);
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "notexists")
    ).toEqual(true);
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "Notexists")
    ).toEqual(true);
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "NotExists")
    ).toEqual(true);
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "NotExistS")
    ).toEqual(true);
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "NOT_EXISTS")
    ).toEqual(true);
  });

  it("should return false because strings are different", () => {
    const pharse = "thisNotExistz";
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "not_exists")
    ).toEqual(false);
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "notexists")
    ).toEqual(false);
  });
});
