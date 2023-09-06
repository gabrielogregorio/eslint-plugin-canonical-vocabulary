import { stringsAreEquivalentRegardlessOfConvention } from "./stringsAreEquivalentRegardlessOfConvention";

describe("stringsAreEquivalentRegardlessOfConvention", () => {
  it("should check that regardless of convention, the strings are equivalent 1", () => {
    const pharse = "thisNotExistsOk";
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "not_exists")
    ).toEqual({ equivalent: true, isInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "notexists")
    ).toEqual({ equivalent: true, isInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "Notexists")
    ).toEqual({ equivalent: true, isInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "NotExists")
    ).toEqual({ equivalent: true, isInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "NotExistS")
    ).toEqual({ equivalent: true, isInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "NOT_EXISTS")
    ).toEqual({ equivalent: true, isInStart: false });
  });

  it("should check that regardless of convention, the strings are equivalent 1", () => {
    const pharse = "THIS NOT_EXISTS";
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "not_exists")
    ).toEqual({ equivalent: true, isInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "notexists")
    ).toEqual({ equivalent: true, isInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "Notexists")
    ).toEqual({ equivalent: true, isInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "NotExists")
    ).toEqual({ equivalent: true, isInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "NotExistS")
    ).toEqual({ equivalent: true, isInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "NOT_EXISTS")
    ).toEqual({ equivalent: true, isInStart: false });
  });

  it("should check that regardless of convention, the strings are equivalent 1", () => {
    const pharse = "NOT_EXISTS_THIS";
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "not_exists")
    ).toEqual({ equivalent: true, isInStart: true });
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "notexists")
    ).toEqual({ equivalent: true, isInStart: true });
  });

  it("should return false because strings are different", () => {
    const pharse = "thisNotExistz";
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "not_exists")
    ).toEqual({ equivalent: false, isInStart: false });
    expect(
      stringsAreEquivalentRegardlessOfConvention(pharse, "notexists")
    ).toEqual({ equivalent: false, isInStart: false });
  });
});
