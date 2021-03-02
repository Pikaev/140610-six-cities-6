import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

const Places = {
  NUMBER_OF_OFFERS: 5
};

ReactDOM.render(
    <App
      numberOfOffers={Places.NUMBER_OF_OFFERS}
      offers={offers}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
