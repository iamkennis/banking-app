import React from 'react'
import Login from '../../components/LogIn/Login'

export default function Home() {
    return (
			<nav>
				<p className='welcome'>Log in to get started</p>
				<img src='logo.png' alt='Logo' className='logo' />
				<Login/>
			</nav>
		);
}
