import { stringsAreEquivalent } from './stringsAreEquivalent';

describe('stringsAreEquivalent', () => {
  it('should check that regardless of convention, the strings are equivalent 1', () => {
    const phrase = 'thisNotExistsOk';
    expect(stringsAreEquivalent(phrase, 'not_exists')).toEqual({
      isEquivalent: true,
      bannedWordIsInStart: false,
    });
    expect(stringsAreEquivalent(phrase, 'notexists')).toEqual({
      isEquivalent: true,
      bannedWordIsInStart: false,
    });
    expect(stringsAreEquivalent(phrase, 'Notexists')).toEqual({
      isEquivalent: true,
      bannedWordIsInStart: false,
    });
    expect(stringsAreEquivalent(phrase, 'NotExists')).toEqual({
      isEquivalent: true,
      bannedWordIsInStart: false,
    });
    expect(stringsAreEquivalent(phrase, 'NotExistS')).toEqual({
      isEquivalent: true,
      bannedWordIsInStart: false,
    });
    expect(stringsAreEquivalent(phrase, 'NOT_EXISTS')).toEqual({
      isEquivalent: true,
      bannedWordIsInStart: false,
    });
  });

  it('should check that regardless of convention, the strings are equivalent 1', () => {
    const phrase = 'THIS NOT_EXISTS';
    expect(stringsAreEquivalent(phrase, 'not_exists')).toEqual({
      isEquivalent: true,
      bannedWordIsInStart: false,
    });
    expect(stringsAreEquivalent(phrase, 'notexists')).toEqual({
      isEquivalent: true,
      bannedWordIsInStart: false,
    });
    expect(stringsAreEquivalent(phrase, 'Notexists')).toEqual({
      isEquivalent: true,
      bannedWordIsInStart: false,
    });
    expect(stringsAreEquivalent(phrase, 'NotExists')).toEqual({
      isEquivalent: true,
      bannedWordIsInStart: false,
    });
    expect(stringsAreEquivalent(phrase, 'NotExistS')).toEqual({
      isEquivalent: true,
      bannedWordIsInStart: false,
    });
    expect(stringsAreEquivalent(phrase, 'NOT_EXISTS')).toEqual({
      isEquivalent: true,
      bannedWordIsInStart: false,
    });
  });

  it('should check that regardless of convention, the strings are equivalent 1', () => {
    const phrase = 'NOT_EXISTS_THIS';
    expect(stringsAreEquivalent(phrase, 'not_exists')).toEqual({
      isEquivalent: true,
      bannedWordIsInStart: true,
    });
    expect(stringsAreEquivalent(phrase, 'notexists')).toEqual({
      isEquivalent: true,
      bannedWordIsInStart: true,
    });
  });

  it('should return false because strings are different', () => {
    const phrase = 'thisNotExistz';
    expect(stringsAreEquivalent(phrase, 'not_exists')).toEqual({
      isEquivalent: false,
      bannedWordIsInStart: false,
    });
    expect(stringsAreEquivalent(phrase, 'notexists')).toEqual({
      isEquivalent: false,
      bannedWordIsInStart: false,
    });
  });
});
