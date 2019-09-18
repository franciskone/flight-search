const allowedCharCodes = [13, 32];
export const actionItemOnKeyPress = action => (evt) => {
  if (allowedCharCodes.includes(evt.charCode)) action();
};
