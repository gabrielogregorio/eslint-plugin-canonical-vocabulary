import { fixBasedInCase } from './fixBasedInCase';

describe('handler check cases', () => {
  it('should replace fix to based in camelCaseTypes', () => {
    expect(fixBasedInCase('doYouChangeMe', 'CHANGE_ME', 'fix_to', false)).toEqual('doYouFixTo');
    expect(fixBasedInCase('doYouChangeMe', 'change_me', 'fix_to', false)).toEqual('doYouFixTo');
    expect(fixBasedInCase('doYouChangeMe', 'ChangeMe', 'fix_to', false)).toEqual('doYouFixTo');
    expect(fixBasedInCase('doYouChangeMe', 'changeMe', 'fix_to', false)).toEqual('doYouFixTo');
    expect(fixBasedInCase('doYouChangeMe', 'changeMe', 'FIX_TO', false)).toEqual('doYouFixTo');
    expect(fixBasedInCase('changeMeDoYou', 'CHANGE_ME', 'fix_to', true)).toEqual('fixToDoYou');
    expect(fixBasedInCase('changeMeDoYou', 'changeMe', 'fix_to', true)).toEqual('fixToDoYou');
    expect(fixBasedInCase('changeMeDoYou', 'changeMe', 'FixTo', true)).toEqual('fixToDoYou');
    expect(fixBasedInCase('change', 'change', 'fixTo', true)).toEqual('fixTo');
  });

  it('should replace fix to based in pascalCase', () => {
    expect(fixBasedInCase('DoYouChangeMe', 'CHANGE_ME', 'fix_to', false)).toEqual('DoYouFixTo');
    expect(fixBasedInCase('DoYouChangeMe', 'change_me', 'fix_to', false)).toEqual('DoYouFixTo');
    expect(fixBasedInCase('ChangeMeDoYou', 'CHANGE_ME', 'fix_to', true)).toEqual('FixToDoYou');
    expect(fixBasedInCase('ChangeMeDoYou', 'changeMe', 'fix_to', true)).toEqual('FixToDoYou');
  });

  it('should replace fix to based in snake case types', () => {
    expect(fixBasedInCase('do_you_change_to', 'CHANGE_TO', 'fix_to', false)).toEqual('do_you_fix_to');
    expect(fixBasedInCase('change_to_do_you', 'CHANGE_TO', 'fix_to', true)).toEqual('fix_to_do_you');
  });

  it('should replace fix to based in snake upper case types', () => {
    expect(fixBasedInCase('DO_YOU_CHANGE_TO', 'CHANGE_TO', 'fix_to', false)).toEqual('DO_YOU_FIX_TO');
    expect(fixBasedInCase('CHANGE_TO_DO_YOU', 'CHANGE_TO', 'fix_to', true)).toEqual('FIX_TO_DO_YOU');
  });
});
