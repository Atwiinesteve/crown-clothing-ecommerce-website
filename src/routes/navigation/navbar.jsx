// importing react
import React, {Fragment} from 'react';
import { Outlet, Link } from 'react-router-dom';

// navbar styles.
import "../navigation/navigation.css"

// navbar component
function Navbar() {
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
						Shop
					</Link>
					<Link className="nav-link" to="/signin">
						Signin
					</Link>
				</div>
			</nav>
			<Outlet />
		</Fragment>
	);
}

export default Navbar;