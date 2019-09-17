import appInitAction, { appInitActionType } from './appInitActions';

describe('appInitActions', () => {
  it('init', () => {
    expect(appInitAction.init()).toEqual({
      type: appInitActionType.INIT,
      payload: null,
    });
  });
});
