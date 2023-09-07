import { stringsAreEquivalentRegardlessOfConvention } from "./stringsAreEquivalentRegardlessOfConvention";

describe("stringsAreEquivalentRegardlessOfConvention", () => {
  it("should check that regardless of convention, the strings are equivalent 1", () => {
    const phrase = "thisNotExistsOk";
    expect(
      stringsAreEquivalentRegardlessOfConvention(phrase, "not_exists")
    ).toEqual({ equivalent: true, bannedWordIsInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(phrase, "notexists")
    ).toEqual({ equivalent: true, bannedWordIsInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(phrase, "Notexists")
    ).toEqual({ equivalent: true, bannedWordIsInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(phrase, "NotExists")
    ).toEqual({ equivalent: true, bannedWordIsInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(phrase, "NotExistS")
    ).toEqual({ equivalent: true, bannedWordIsInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(phrase, "NOT_EXISTS")
    ).toEqual({ equivalent: true, bannedWordIsInStart: false });
  });

  it("should check that regardless of convention, the strings are equivalent 1", () => {
    const phrase = "THIS NOT_EXISTS";
    expect(
      stringsAreEquivalentRegardlessOfConvention(phrase, "not_exists")
    ).toEqual({ equivalent: true, bannedWordIsInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(phrase, "notexists")
    ).toEqual({ equivalent: true, bannedWordIsInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(phrase, "Notexists")
    ).toEqual({ equivalent: true, bannedWordIsInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(phrase, "NotExists")
    ).toEqual({ equivalent: true, bannedWordIsInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(phrase, "NotExistS")
    ).toEqual({ equivalent: true, bannedWordIsInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(phrase, "NOT_EXISTS")
    ).toEqual({ equivalent: true, bannedWordIsInStart: false });
  });

  it("should check that regardless of convention, the strings are equivalent 1", () => {
    const phrase = "NOT_EXISTS_THIS";
    expect(
      stringsAreEquivalentRegardlessOfConvention(phrase, "not_exists")
    ).toEqual({ equivalent: true, bannedWordIsInStart: true });
    expect(
      stringsAreEquivalentRegardlessOfConvention(phrase, "notexists")
    ).toEqual({ equivalent: true, bannedWordIsInStart: true });
  });

  it("should return false because strings are different", () => {
    const phrase = "thisNotExistz";
    expect(
      stringsAreEquivalentRegardlessOfConvention(phrase, "not_exists")
    ).toEqual({ equivalent: false, bannedWordIsInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(phrase, "notexists")
    ).toEqual({ equivalent: false, bannedWordIsInStart: false });
  });
});
