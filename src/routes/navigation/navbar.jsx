// importing react
import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

// navbar styles.
import {NavigationContainer, LogoContainer, NavLinks, NavLink} from "../navigation/navigation.jsx";

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
			<NavigationContainer>
				<LogoContainer>
					<Link className="logo" to="/">
						<img
							src="https://raw.githubusercontent.com/ZhangMYihua/crwn-clothing-v2/39aaa7ba2322046d6bfbc6d4b74f291f10d61cb6/src/assets/crown.svg"
							alt="logo"
						/>
					</Link>
				</LogoContainer>
				<NavLinks>
					<NavLink className="nav-link" to="/shop">
						SHOP
					</NavLink>

					{currentUser ? (
						<NavLink onClick={signOutUser} className="nav-link">
							SIGNOUT
						</NavLink>
					) : (
						<NavLink className="nav-link" to="/sign-in">
							SIGNIN
						</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{ isCartOpen && <DropDownCard />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
}

export default Navbar;
