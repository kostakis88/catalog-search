import { CHANGE_SEARCHFIELD } from '../actions/actionTypes';

const initialState = {
  searchField: ''
};

const searchFilter = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SEARCHFIELD:
      return Object.assign({}, state, {searchField: action.payload});
    default:
      return state;
  }
}

export default searchFilter;