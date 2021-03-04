import React, {useState} from 'react';
import PropTypes from 'prop-types';

import PlaceCard from '../placeСard/placeСard';

const PlaceCardList = ({offers}) => {
  const [activeСard, setActiveCard] = useState({});

  return (
    <>
      {offers.map((offer) => (
        <PlaceCard
          id={offer.id}
          isFavorite={offer.is_favorite}
          isPremium={offer.is_premium}
          key={offer.id}
          previewImage={offer.preview_image}
          price={offer.price}
          rating={offer.rating}
          title={offer.title}
          type={offer.type}
        />
      ))}
    </>
  );
};

PlaceCardList.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPremium: PropTypes.bool.isRequired,
  key: PropTypes.number.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default PlaceCardList;
