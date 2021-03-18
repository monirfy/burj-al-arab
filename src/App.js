import React, { createContext, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Login from './components/Login';
import About from './components/About';
import Promo from './components/Promo';
import Rooms from './components/Rooms';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import BookRoom from './components/BookRoom';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Promo></Promo>
            <Rooms></Rooms>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <PrivateRoute path='/book-room'>
            <BookRoom></BookRoom>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
