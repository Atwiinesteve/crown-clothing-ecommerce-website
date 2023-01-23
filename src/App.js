// importing react modules
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// impoering routes
import Home from './routes/home/home';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
};

export default App;
