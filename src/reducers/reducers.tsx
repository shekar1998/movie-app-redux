import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const initialstate = {
  name: '',
  age: 0,
};

const userReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_USER':
      state = {
        ...state,
        name: action.payload,
      };

      break;

    case 'SET_AGE':
      state = {
        ...state,
        age: action.payload,
      };

      break;

    default:
      break;
  }
  return state;
};

const store = createStore(userReducer, initialstate, applyMiddleware(thunk));
export default store;
