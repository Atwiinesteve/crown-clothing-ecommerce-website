// importing react
import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

// navbar styles.
import "../navigation/navigation.css";

// import context
import { UserContext } from "../../context/user.context";
import { cartContext } from "../../context/cart.context";

// firebase
import { signOutUser } from "../../utils/firebase/firebase.utils";

// components
import CartIcon from "../../components/CartIcon";
import DropDownCard from "../../components/CartDropDown";

// navbar component
function Navbar() {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(cartContext);

	// const signOutHandler = async () => {
	// 	await signOutUser();
	// 	setCurrentUser(null);
	// };

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

					{currentUser ? (
						<Link onClick={signOutUser} className="nav-link">
							SIGNOUT
						</Link>
					) : (
						<Link className="nav-link" to="/sign-in">
							SIGNIN
						</Link>
					)}
					<CartIcon />
				</div>
				{ isCartOpen && <DropDownCard />}
			</nav>
			<Outlet />
		</Fragment>
	);
}

export default Navbar;
