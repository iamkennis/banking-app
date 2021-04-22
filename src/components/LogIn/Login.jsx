import React,{useState} from 'react'
import accounts from '../../Data'
import Dashboard from '../../pages/Dashboard/Dashboard'
import './Login.css'

export default function Login() {
	const [nameUser, setNameUser] = useState('');
	const [password, setPassword] = useState('');
	const [listStyle, setListStyle] = useState(false)
	const [welcomeText, setWelcomeText] = useState('')

	// The getStyle variable returns the opacity,if the liststyle is true
	const getStyle = () => {
		return {
			opacity: listStyle? 100 : 0,
		}
	}

	// 	const textWelcome = () => {
	// 		if (!welcomeText) {
	// 			return <h1>Welcome Back,{accounts.username}</h1>;       
	// 		}
			
	// };
	


	
const createUser = (accounts) => {
	accounts.forEach((account) => {
		// Loop through the accounts array to return the elements
		account.username = account.owner
		// transfer the account.owner to account.username, and change the usename to lowercase, 
		// split them, map them to retrun the first letter and join the first letter to form e.g "stw"
			.toLowerCase()
			.split(' ')
			.map((name) => name[0])
			.join('');
		//   console.log(account.username);
	});
};
createUser(accounts);


	const handleBtn = () => {
		let createAccount;
		// declare a variable createAccount and pass the accounts.find has value to return and 
		//find the account.username if it equal the nameUser input into the form field.
		createAccount = accounts.find(
			(account) => account.username === nameUser
		);
		if (createAccount?.pin === Number(password)) {
			console.log(createAccount);
			setListStyle(true);
			setWelcomeText(<h1>Welcome Back,{accounts.username}</h1>)
			// the if statement check for account.pin from the DATA.JS ,
			// if its equal to the password input into the form field
		}
		
		setNameUser('');
		setPassword('')
	};

	


	// The handleSubmit prevent default submit form

	const handleSubmit = (e) => {
		e.preventDefault();		
	}

// These handle the event to changing input to target the value
	
	const handleNameChange = (e) => {
        setNameUser(e.target.value)
	}

	const handleEmailChange = (e) => {
		setPassword(e.target.value);
	}
	

	return (
		<div>
			<nav>
				<p className='welcome'>Log in to get started</p>
				<img src='logo.png' alt='Logo' className='logo' />
				{welcomeText}
			</nav>

			<form className='login' onSubmit={handleSubmit}>
				<input
					type='text'
					placeholder='user'
					className='login__input'
					onChange={handleNameChange}
					value={nameUser}
				/>
				<input
					type='text'
					placeholder='PIN'
					maxLength='4'
					className='login__input'
					onChange={handleEmailChange}
					value={password}
				/>
				<button className='login__btn ' onClick={handleBtn}>
					&rarr;
				</button>
			</form>
			<Dashboard style={getStyle()}  />
		</div>
	);
}
