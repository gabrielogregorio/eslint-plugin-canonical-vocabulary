import { RuleOption } from '../../utils/types';

export const getReportMessage = (options: RuleOption): string => {
  if (options?.message) {
    return options.message;
  }

  if (options.fixTo) {
    return 'The term <word> is not recommended, use the term <fixTo>';
  }

  return 'The term <word> is not recommended';
};
