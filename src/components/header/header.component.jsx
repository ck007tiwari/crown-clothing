import React from "react";
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg'; //svg should be imported like this
import {auth} from "../../firebase/firebase.utils";
import {connect} from 'react-redux'; //here we want to take our currentUser value from reducer not from anywere else thats why importing. connect it's a higher order function.
import './header.styles.scss';

const Header = ({currentUser}) => (
  <div className="header">
    {/* {console.log(currentUser)} */}
    <Link className="logo-container" to="/">
      {/*logo will redirect to home page */}
      <Logo className="logo"/>
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>

      {currentUser
        ? (
          <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
        )
        : (
          <Link className="option" to="/signin">SIGN IN</Link>
        )
}

    </div>
  </div>
);
const mapStateToProps = state => ({currnetUser: state.user.currentUser}); //here tha state is the top level root reducer 

export default connect(mapStateToProps)(Header); //here we are passing 2 functions 2nd one is optional and both connected by connect function which is higher order function. mapStateToProps is our frist argument of the function.