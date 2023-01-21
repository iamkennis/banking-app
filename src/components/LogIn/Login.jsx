import React, { useState } from 'react';
import accountData from '../../Data';
import { useNavigate } from 'react-router-dom';
import { accountCreate } from '../../action/useAccout';
import './Login.css';
import { useEffect } from 'react';

let username;

export default function Login() {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const createAccount = accountData
		? accountData.find((account) => account.username === userName)
		: null;

	function handleBtn(e) {
		e.preventDefault();

		if (createAccount?.pin === Number(password)) {
			console.log(createAccount.username);
			return navigate('/dashboard');
		} else {
			alert('Incorrect username or password');
		}
	}
	return (
		<div>
			<nav className='overlay'>
				<img
					src='logo.svg'
					alt='All Banking'
					className='logo'
				/>
				<form className='login'>
					<p className='welcome'>Log in to get started</p>
					<input
						type='text'
						placeholder='Username'
						className='login__input login__input--user'
						value={userName}
						onChange={(e) => setUserName(e.target.value)}
						required
					/>
					<input
						type='text'
						placeholder='Password'
						required
						onChange={(e) => setPassword(e.target.value)}
						value={password}
						className='login__input login__input--pin'
					/>
					<button
						className='login__btn'
						onClick={handleBtn}>
						Login
					</button>
				</form>
			</nav>
		</div>
	);
}
