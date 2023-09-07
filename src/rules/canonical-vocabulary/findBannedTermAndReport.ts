import { fixBasedInCase } from '../../utils/fixBasedInCase';
import { formatMessage } from '../../utils/formatMessage';
import { stringsAreEquivalentRegardlessOfConvention } from '../../utils/stringsAreEquivalentRegardlessOfConvention';
import { AstNode, Context, RuleOption } from '../../utils/types';
import { getMessageByParams } from './utils';

const sendReport = (context: Context, node: AstNode, fixTo: string, message: string) => {
  context.report({
    node,
    message,
    fix(fixer) {
      if (!fixTo) {
        return fixer;
      }
      return fixer.replaceText(node.id, node.id.name.replace(node.id.name, fixTo));
    },
  });
};

export const findBannedTermAndReport = (options: RuleOption[], nameVar: string, context: Context, node: AstNode) => {
  options.forEach((option: RuleOption) => {
    const banWorlds = option.words;
    const fixTo = option.fixTo || '';
    const message = getMessageByParams(option);

    let bannedWordIsInStart = false;
    const banWorldFounded = banWorlds.find((banWord: string) => {
      const response = stringsAreEquivalentRegardlessOfConvention(nameVar, banWord);
      bannedWordIsInStart = response.bannedWordIsInStart;
      return response.equivalent;
    });

    if (banWorldFounded) {
      const fixToBasedInCase = fixBasedInCase(nameVar, banWorldFounded, fixTo, bannedWordIsInStart);
      sendReport(context, node, fixToBasedInCase, formatMessage(banWorldFounded, fixTo, message));
    }
  });
};
