// importing react modules
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// importing routes
import Home from './routes/home/home';
import Navbar from './routes/navigation/navbar';
import Signin from './components/Signin';

const Shop = () => {
	return <h1>I am a Shop</h1>
}

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navbar />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop/>} />
				<Route path="sign-in" element={<Signin/>} />
			</Route>
		</Routes>
	);
};

export default App;
