import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import FavoritesScreen from '../favoritesScreen/favoritesScreen';
import MainScreen from '../mainScreen/mainScreen';
import NotFoundScreen from '../notFoundScreen/notFoundScreen';
import RoomScreen from '../roomScreen/roomScreen';
import SignInScreen from '../signInScreen/signInScreen';

const App = (props) => {
  const {numberOfOffers, offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainScreen
            numberOfOffers={numberOfOffers}
            offers={offers}
          />
        </Route>
        <Route exact path="/login">
          <SignInScreen />
        </Route>
        <Route exact path="/favorites">
          <FavoritesScreen
            offers={offers}
          />
        </Route>
        <Route exact path="/offer" component={RoomScreen} />
        <Route exact path="/offer/:id" component={RoomScreen} />
        <Route
          render={() => (
            <Fragment>
              <NotFoundScreen />
            </Fragment>
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  numberOfOffers: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired
};

export default App;
