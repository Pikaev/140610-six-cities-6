import React from 'react';
import PropTypes from 'prop-types';

import FavoritesCard from '../favoritesCard/favoritesCard';

const FavoritesCardList = ({offers}) => {

  return (
    <>
      {offers.map((offer) => (
        <FavoritesCard
          apartImage={offer.images}
          cityName={offer.city.name}
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

FavoritesCardList.propTypes = {
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
};

export default FavoritesCardList;
