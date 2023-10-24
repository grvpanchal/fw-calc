import {
  ADD_ASSET,
  REMOVE_ASSET,
  UPDATE_ASSET,
} from './assets-action-types.js';
import initialState from '../../initial.js';


const INITIAL_STATE = initialState.balanceSheet.assets;

const assetsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ASSET:
      return [...state, action.payload];
    case UPDATE_ASSET:
      return state.map(ass => ass.id === action.payload.id ? action.payload : ass);
    case REMOVE_ASSET:
      return state.filter(ass => ass.id !== action.payload.id);
    default:
      return state;
  }
};

export default assetsReducer;