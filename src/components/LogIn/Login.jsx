import React,{useState} from 'react'
import accounts from '../../Data'
import { Route, Redirect } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard/Dashboard'
import './Login.css'

export default function Login() {
	// const classes = useStyles();
	const [nameUser, setNameUser] = useState('');
	const [password, setPassword] = useState('');
    const [showpage, setShowPage] = useState()

	const createUser = (accounts) => {
		accounts.forEach(account => {
			account.username = account.owner
				.toLowerCase()
				.split(' ')
				.map((name) => name[0])
				.join('');
			//   console.log(account.username);
		});
	}
	createUser(accounts)
	

	const handleSubmit = (e) => {
// To make prevent form from submission

		e.preventDefault();		
	}
	
	

	
	const handleBtn = (e) => {
		e.preventDefault();
		let createAccount;
		createAccount = accounts.find(
			(account) => account.username === nameUser);
		if (createAccount?.pin === Number(password)) {
			console.log(createAccount);
			return;
			
		 }
		
		setNameUser('');
		setPassword('');
		setShowPage(false)
	}




	return (
		<div>
			<form className='login' onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='user'
					className='login__input'
					onChange={(e) => setNameUser(e.target.value)}
					value={nameUser}
				/>
				<input
					type='text'
					placeholder='PIN'
					maxLength='4'
					className='login__input'
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
				  <button className='login__btn ' onClick={handleBtn}>
					&rarr;
				</button>
			</form>


			<Dashboard/>
		</div>
	);
}
