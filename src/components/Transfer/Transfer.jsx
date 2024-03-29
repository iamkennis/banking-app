import React, { useState } from 'react';
import accounts from '../../Data';

export default function Transfer() {
	const [username, setUsername] = useState('');
	const [inputAmount, setInputAmount] = useState('');
	const [userDetails] = useState(
		JSON.parse(localStorage.getItem('userDetails')),
	);
	// console.log(userDetails);

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	// const createAccount = accounts.find(
	// 	(account) => account.username === username
	// );

	function handleTransferBtn() {
		const amountInput = Number(inputAmount);
		const receiverAccount = accounts.find(
			(account) => account.username === username,
		);
		// setUsername('');
		// setInputAmount('');

		if (
			amountInput > 0 &&
			receiverAccount &&
			userDetails.balance >= amountInput &&
			receiverAccount?.username !== userDetails.username
		) {
			userDetails.movements.push(-amountInput);
			receiverAccount.movements.push(amountInput);
		}
		// console.log(receiverAccount, amountInput);
	}

	return (
		<div className='operation operation--transfer'>
			<h2>Transfer money</h2>
			<form
				className='form form--transfer'
				onSubmit={handleSubmit}>
				<div>
					<label className='form__label'>Transfer to</label>
					<input
						type='text'
						className='form__input form__input--to'
						onChange={(e) => setUsername(e.target.value)}
						value={username}
					/>
				</div>
				<div>
					<label className='form__label'>Amount</label>
					<input
						type='number'
						className='form__input form__input--amount'
						onChange={(e) => setInputAmount(e.target.value)}
						value={inputAmount}
					/>
				</div>
				<div className='btn--global'>
					<button
						className='form__btn form__btn--transfer'
						onClick={handleTransferBtn}>
						&rarr;
					</button>
				</div>
			</form>
		</div>
	);
}
