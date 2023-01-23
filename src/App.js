// importing react modules
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// importing routes
import Home from './routes/home/home';
import Navbar from './routes/navigation/navbar';

const Shop = () => {
	return <h1>I am a Shop</h1>
}

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navbar />}>
				<Route path="/home" element={<Home />} />
				<Route path="shop" element={<Shop/>} />
			</Route>
		</Routes>
	);
};

export default App;
