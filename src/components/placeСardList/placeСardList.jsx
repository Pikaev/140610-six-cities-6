import React, {useState} from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../placeСard/placeСard';

const PlaceCardList = (props) => {
  const {offers, reviews} = props;
  const [activeСard, setActiveCard] = useState({});

  return (
    <>
      {offers.map((offer, i) => (
        <PlaceCard
          offers={offers}
          key={`${offers[i].id}`}
        />
      ))}
    </>
  );
};

PlaceCardList.propTypes = {
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
};

export default PlaceCardList;
