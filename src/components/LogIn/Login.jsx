import React,{useState} from 'react'
import accounts from '../../Data'
import CreateUser from '../CreateUsername/CreateUser'

import './Login.css'

const useStyles = (theme) => ({
	loginStyle: {
		opacity: '100',
	},

	loginOpacity: {
		opacity: '0',
	},
});


export default function Login() {
	const classes = useStyles();
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
		console.log(handleChange);
}

	const handleBtn = (e) => {
		 e.preventDefault();
		accounts.find(acc => (e.target.type === accounts.username));
		if (Number(e.target.type) === accounts.pin) {
			return (
				<div  className={accounts ? classes.loginOpacity : classes.loginStyle}>
					<h3>
						`Welcome back, ${accounts.owner.split(' ')[0]}
						`;
					</h3>
				</div>

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
