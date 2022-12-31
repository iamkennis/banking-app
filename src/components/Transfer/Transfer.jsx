import React, { useState } from 'react'
import accounts from '../../Data';


export default function Transfer() {
	const [username, setUsername] = useState("");
	const [inputAmount,setInputAmount] = useState("")

	const handleSubmit = (e) => {
	e.preventDefault();
	}

	// const createAccount = accounts.find(
	// 	(account) => account.username === username
	// );

	
	function handleTransferBtn() {
    const amountInput = Number(inputAmount)
    const receiverAccount = accounts.find(account => account.username === username)
     setUsername('');
	 setInputAmount('');
		
		if (amountInput > 0 && receiverAccount && accounts.balance >= amountInput && receiverAccount?.username !== accounts.username) {
		accounts.movement.push(amountInput)
	} 
        console.log(receiverAccount);
  }

    return (
			<div className='operation operation--transfer'>
				<h2>Transfer money</h2>
				<form className='form form--transfer' onSubmit={handleSubmit}>
					<input
						type='text'
						className='form__input form__input--to'
						onChange={(e) => setUsername(e.target.value)}
						value={username}
					/>
					<input
						type='number'
						className='form__input form__input--amount'
						onChange={(e) => setInputAmount(e.target.value)}
						value={inputAmount}
					/>
					<button
						className='form__btn form__btn--transfer'
						onClick={handleTransferBtn}>
						&rarr;
					</button>
					<label className='form__label'>Transfer to</label>
					<label className='form__label'>Amount</label>
				</form>
			</div>
		);
}
