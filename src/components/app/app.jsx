import React from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main';


const App = (props) => {
  const {numberOfOffers} = props;

  return (
    <Main numberOfOffers={numberOfOffers} />
  );
};

App.propTypes = {
  numberOfOffers: PropTypes.number.isRequired
};

export default App;
