const prefix = 'appInit';

export const appInitActionType = {
  INIT: `${prefix}/INIT`,
};

const appInitAction = {
  init,
};
export default appInitAction;

function init() {
  return {
    type: appInitActionType.INIT,
    paypload: null,
  };
}
