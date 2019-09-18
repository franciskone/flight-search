import { actionItemOnKeyPress } from './a11y';

describe('a11y util', () => {
  it('actionItemOnKeyPress', () => {
    const testAction = jest.fn(() => null);
    const action = actionItemOnKeyPress(testAction);
  
    action({ charCode: 0 });
    expect(testAction.mock.calls.length).toBe(0);
  
    testAction.mockReset();
  
    action({ charCode: 13 });
    action({ charCode: 0 });
    expect(testAction.mock.calls.length).toBe(1);
    
    testAction.mockReset();
  
    action({ charCode: 32 });
    action({ charCode: 0 });
    expect(testAction.mock.calls.length).toBe(1);
  });
  
  
});
