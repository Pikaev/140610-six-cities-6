import React, {useState} from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../placeСard/placeСard';

const PlaceCardList = (props) => {
  const {offers, reviews} = props;

  return (
    <React.Fragment>
      <PlaceCard />
    </React.Fragment>
  );
};

PlaceCardList.propTypes = {
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
};

export default PlaceCardList;
