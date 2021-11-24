import React from "react";
import {Link} from 'react-router-dom';
import './header.styles.scss';
import {ReactComponent as Logo} from '../../assets/crown.svg'; //svg should be imported like this
import {auth} from "../../firebase/firebase.utils";

const Header = ({ currenUser }) => (
  <div className="header">
    {/* {console.log(currenUser)} */}
    <Link className="logo-container" to="/">
      {/*logo will redirect to home page */}
      <Logo className="logo" />
    </Link>

    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currenUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

export default Header;