import React,{useState} from 'react'
import accounts from '../../Data'
// import { Route, Redirect } from 'react-router-dom';
import Home from '../../pages/Home/Home'
import Dashboard from '../../pages/Dashboard/Dashboard'
import './Login.css'

export default function Login() {
	// const classes = useStyles();
	const [nameUser, setNameUser] = useState('');
	const [password, setPassword] = useState('');
	
	const createUser = (accounts) => {
		accounts.forEach(account => {
// Loop through the accounts array to return the elements
			account.username = account.owner
// transfer the account.owner to account.username, and change the usename to lowercase, split them, map them to retrun the first letter and join the first letter to form e.g "stw"
				.toLowerCase()
				.split(' ')
				.map((name) => name[0])
				.join('');
			//   console.log(account.username);
		});
	}
	createUser(accounts)

	const handleSubmit = (e) => {

// To prevent the form from submitting
		e.preventDefault();		
	}
	
	

	
	const handleBtn = (e) => {
		
		let createAccount;
		// declare a variable createAccount and pass the accounts.find has value to return and find the account.username if it equal the nameUser input into the form field.
		createAccount = accounts.find(
			(account) => account.username === nameUser);
		if (createAccount?.pin === Number(password)) {
				console.log(createAccount);
			// the if statement check for account.pin from the DATA.JS if its equal to the password input into the form field
			
		}
			setNameUser('');
		setPassword('');
		
		return createAccount;
	}

//WHAT I WANT YOU TO HELP ME DO
	// 1. how i can return the Dashboard components inside handleBtn or any where
	// and an opacity mast be set to 100 to help show the Dashboard component, the default opacity set in the style was 0

	// createAccount && handleBtn ?{' '}
	// 		<Home style={{ opacity: '0', transition: 'all 1s' }} />
	

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
		
		</div>
	);
}
