import { fixBasedInCase } from '../../utils/fixBasedInCase';
import { formatMessage } from '../../utils/formatMessage';
import { sendEslintReport } from '../../utils/sendEslintReport';
import { stringsAreEquivalent } from '../../utils/stringsAreEquivalent';
import { AstNode, Context, RuleOption } from '../../utils/types';
import { getReportMessage } from './utils';

const findBannedWord = (banWorlds: string[], nameVariable: string) => {
  let bannedWordIsInStart = false;

  const bannedWord = banWorlds.find((banWord: string) => {
    const response = stringsAreEquivalent(nameVariable, banWord);
    bannedWordIsInStart = response.bannedWordIsInStart;
    return response.isEquivalent;
  });

  return { bannedWord, bannedWordIsInStart };
};

export const findBannedTermAndReport = (
  options: RuleOption[],
  nameVariable: string,
  context: Context,
  node: AstNode,
) => {
  options.forEach((option: RuleOption) => {
    const banWorlds = option.words;
    const fixTo = option.fixTo || '';
    const message = getReportMessage(option);

    const { bannedWord, bannedWordIsInStart } = findBannedWord(banWorlds, nameVariable);

    if (bannedWord) {
      const reportMessageFormatted = formatMessage(bannedWord, fixTo, message);
      const fixToBasedInCase = fixBasedInCase(nameVariable, bannedWord, fixTo, bannedWordIsInStart);

      sendEslintReport(context, node, fixToBasedInCase, reportMessageFormatted);
    }
  });
};
