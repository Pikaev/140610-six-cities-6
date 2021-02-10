import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Places = {
  NUMBER_OF_OFFERS: 5
};

ReactDOM.render(
    <App
      numberOfOffers={Places.NUMBER_OF_OFFERS}
    />,
    document.querySelector(`#root`)
);
