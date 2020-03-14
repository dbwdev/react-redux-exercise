import React from 'react';
import { connect } from 'react-redux';
import {
  toggleCityCountVisibility,
  selectRandomCity,
} from '../actions/mainActions';

const Search = props => {
  return (
    <div>
      <button onClick={props.selectRandomCity}>Random City</button>
      <button onClick={props.toggleCityCountVisibility}>Show City Count</button>
      {props.isCityCountVisible && props.cities.length}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cities: state.mainReducer.cities,
    isCityCountVisible: state.mainReducer.isCityCountVisible,
  };
};

const mapDispatchToProps = {
  selectRandomCity,
  toggleCityCountVisibility,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
