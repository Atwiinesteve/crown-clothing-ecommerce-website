// importing react
import React, {Fragment, useContext} from 'react';
import { Outlet, Link } from 'react-router-dom';

// navbar styles.
import "../navigation/navigation.css";

// import context
import {UserContext} from '../../context/user.context';

// navbar component
function Navbar() {
	const {currentUser} = useContext(UserContext);
	console.log(currentUser)
  return (
		<Fragment>
			<nav className="navigation">
				<div className="logo-container">
					<Link className="logo" to="/">
						<img
							src="https://raw.githubusercontent.com/ZhangMYihua/crwn-clothing-v2/39aaa7ba2322046d6bfbc6d4b74f291f10d61cb6/src/assets/crown.svg"
							alt="logo"
						/>
					</Link>
				</div>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						SHOP
					</Link>
					<Link className="nav-link" to="/sign-in">
						SIGNIN
					</Link>
				</div>
			</nav>
			<Outlet />
		</Fragment>
	);
}

export default Navbar;