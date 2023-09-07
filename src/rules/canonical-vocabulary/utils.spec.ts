import { getMessageByParams } from './utils';

describe('getMessageByParams', () => {
  it('should return a message when it has the message property', () => {
    expect(getMessageByParams({ words: [], fixTo: '', message: 'any message' })).toEqual('any message');
    expect(getMessageByParams({ words: [], fixTo: 'anyFixTo', message: 'any message' })).toEqual('any message');
  });

  it('should return a default message when not has the message property and has any fixTo', () => {
    expect(getMessageByParams({ words: [], fixTo: 'example', message: '' })).toEqual(
      'The term <word> is not recommended, use the term <fixTo>',
    );
  });

  it('should return a default message when not has the message property and not has any fixTo', () => {
    expect(getMessageByParams({ words: [], fixTo: '', message: '' })).toEqual('The term <word> is not recommended');
  });
});
