import React, { useState, useEffect, createContext } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Outlet,
} from 'react-router-dom';
import Login from './components/LogIn/Login';
import Dashboard from './pages/Dashboard/Dashboard';

export const UserDetailsContext = createContext(null);

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route
						exact
						path='/'
						element={<Login />}
					/>
					<Route
						path='/dashboard'
						element={<Dashboard />}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
