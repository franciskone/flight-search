const initState = {
  ciao: 'hello',
};

const flightSearchReducer = (state = initState, action) => {
  const reducers = {
    '%ACTION_TYPE_ONE%': actionTypeOneCase,
    default: () => state,
  };
  
  return reducers[action.type]
    ? reducers[action.type](state, action)
    : reducers.default();
};
export default flightSearchReducer;

function actionTypeOneCase(state, action) {

}
