import React,{useState} from 'react'
import accounts from '../../Data'
import CreateUser from '../CreateUsername/CreateUser'

import './Login.css'


export default function Login() {
	const [userLogin, setUserLogin] = useState({
		owner: '',
		movements: [],
		interestRate: null,
		pin: null
	});
	
	const handleChange = (e) => {
		 e.preventDefault();
		setUserLogin({
			...userLogin,
		})
		console.log(handleChange)
}

	const handleBtn = (e) => {
		 e.preventDefault();
		accounts.find(acc => (e.target.type === accounts.username));
		if (Number(e.target.type) === accounts.pin) {
			return (
				<h3>
					`Welcome back, ${accounts.owner.split(' ')[0]}
					`;
				</h3>
             
			);
		
		}
		console.log(handleBtn)
	}
	



	return (
		<div className='web-live'>
			<form className='login'>
				<input
					type='text'
					placeholder='user'
					className='login__input'
					onChange={handleChange}
				/>
				<input
					type='text'
					placeholder='PIN'
					maxLength='4'
					className='login__input'
					onChange={handleChange}
				/>
				<button onClick={handleBtn} className='login__btn'>
					&rarr;
				</button>
			</form>
			<CreateUser />
		</div>
	);
}
