import { formatMessage } from './formatMessage';

describe('formatMessage', () => {
  it('should format message', () => {
    expect(formatMessage('changeMe', 'goTo', 'should change <word> to <fixTo>')).toEqual(
      'should change changeMe to goTo',
    );
  });

  it('should format message on fixTo is empty', () => {
    expect(formatMessage('changeMe', '', 'should change <word> to <fixTo>')).toEqual('should change changeMe to ');
  });

  it('should format message on word is empty', () => {
    expect(formatMessage('', 'goTo', 'should change <word> to <fixTo>')).toEqual('should change  to goTo');
  });

  it('should format message on word and goTo is empty', () => {
    expect(formatMessage('', '', 'should change <word> to <fixTo>')).toEqual('should change  to ');
  });
});
