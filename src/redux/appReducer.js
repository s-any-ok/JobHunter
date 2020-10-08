const INITIALIZED_SUCCESS = "app/INITIALIZED-SUCCESSS";

let initState = {
  initialized: false,
};
const appReducer = (state = initState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCESS:
      return { ...state, initialized: true };
    default:
      return state;
  }
};

//--------Actions--------//
export const initializedSuccess = () => ({
  type: INITIALIZED_SUCCESS,
});
//--------Thunks--------//
export const initializeApp = () => (dispath) => {};

export default appReducer;
