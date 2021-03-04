import React from 'react';
import PropTypes from 'prop-types';

const FavoritesCard = ({
  apartImage,
  cityName,
  isFavorite,
  price,
  rating,
  title,
  type
}) => {

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{cityName}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        <article className="favorites__card place-card">
          <div className="favorites__image-wrapper place-card__image-wrapper">
            <a href="#">
              <img
                className="place-card__image"
                src={apartImage}
                width="150"
                height="110"
                alt="Place image"
              />
            </a>
          </div>
          <div className="favorites__card-info place-card__info">
            <div className="place-card__price-wrapper">
              <div className="place-card__price">
                <b className="place-card__price-value">&euro;{price}</b>
                <span className="place-card__price-text">&#47;&nbsp;night</span>
              </div>
              <button
                className="place-card__bookmark-button place-card__bookmark-button--active button"
                type="button"
                style={{display: isFavorite ? `block` : `none`}}
              >
                <svg
                  className="place-card__bookmark-icon"
                  width="18"
                  height="19"
                >
                  <use xlinkHref="#icon-bookmark"></use>
                </svg>
                <span className="visually-hidden">In bookmarks</span>
              </button>
            </div>
            <div className="place-card__rating rating">
              <div className="place-card__stars rating__stars">
                <span style={{width: `${20 * rating}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <h2 className="place-card__name">
              <a href="#">{title}</a>
            </h2>
            <p className="place-card__type">{type}</p>
          </div>
        </article>
      </div>
    </li>
  );
};

FavoritesCard.PropTypes = {
  apartImage: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  offers: PropTypes.array.isRequired,
  price: PropTypes.number.isRequired,
  reviews: PropTypes.array.isRequired,
  rating: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FavoritesCard;
