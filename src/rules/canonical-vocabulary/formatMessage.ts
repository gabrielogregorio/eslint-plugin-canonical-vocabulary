export const formatMessage = (word: string, fixTo: string, message: string): string => {
  return message.replace(/<word>/g, word).replace(/<fixTo>/g, fixTo);
};
