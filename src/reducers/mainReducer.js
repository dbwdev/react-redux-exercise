import cities from '../us-cities';
import _ from 'lodash';

const initialState = { cities, isCityCountVisible: false, cityIndex: 0 };

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_CITY_COUNT_VISIBILITY':
      return {
        ...state,
        isCityCountVisible: !state.isCityCountVisible,
      };
    case 'SELECT_RANDOM_CITY':
      const shuffled = _.shuffle(state.cities);
      return {
        ...state,
        cities: shuffled,
      };
    default:
      return state;
  }
};

export default mainReducer;
