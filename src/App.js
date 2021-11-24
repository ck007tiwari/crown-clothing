import React from 'react';
import {Switch, Route} from "react-router-dom"; // used for routing the pages
import ShopPage from './pages/shop/shop.component';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
import './App.css';
import {auth} from './firebase/firebase.utils';

class App extends React.Component { //using class to define the state so that we can store  or know who's is loged-in.
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }
  
  unsubscriberFromAuth = null

  componentDidMount() { //this function is telling the user is logged in or not
    this.unsubscriberFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount() { //this function make user logged-out by setting the state valure is null
    this.unsubscriberFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
