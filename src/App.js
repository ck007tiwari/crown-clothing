import React from 'react';
import {Switch, Route} from "react-router-dom"; // used for routing the pages
import ShopPage from './pages/shop/shop.component';
import {connect} from 'react-redux';
import HomePage from './pages/homepage/homepage.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";
// import test from './testState';
import './App.css';
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {setCurrentUser} from './redux/user/user.action'
class App extends React.Component {
  // using class to define the state so that we can store  or know who's is
  // loged-in. React Component LifeCyle Methods - The series of events that
  // happens from the mountiong of a react component its Unmounting.
  // Mount/Mounting  - means birth of your component Unmount - means death of your
  // component Update  - means groth of your component unsubscribeFromAuth;

  unsubscribeFromAuth = null;

  //componentDidMothis function is telling the user is logged in or not
  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });

      } else {
        setCurrentUser(userAuth);
      }
      // createUserProfileDocument(user); this.setState({currentUser: user});
      // console.log(user);
    });
  }

  componentWillUnmount() {
    //this function make user logged-out by setting the state valure is null
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/shop" component={ShopPage}/>
          <Route path="/signin" component={SignInAndSignUpPage}/>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(null, mapDispatchToProps)(App);
