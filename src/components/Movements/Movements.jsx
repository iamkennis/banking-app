import React, { useEffect, useContext } from 'react';
import accountData from '../../Data';
import { useState } from 'react';
import { UserDetailsContext } from '../LogIn/Login';

export default function AccountMovements() {
	// const userDetails = useContext(UserDetailsContext);
	// console.log(userDetails);
	const [sorted] = useState(true);
	const [accountHistories, setAccountHistories] = useState(
		JSON.parse(localStorage.getItem('userDetails')),
	);
	const interestRate = [];
	// const accountH = accounts.find((account) => account.id === id);
	// console.log(accountHistories?.movements);
	// console.log(accounts);

	const incomes = accountHistories?.movements
		.filter((mov) => mov > 0)
		.reduce((acc, mov) => acc + mov, 0);

	const outcomes = accountHistories?.movements
		.filter((mov) => mov < 0)
		.reduce((acc, mov) => acc + mov, 0);

	const interest = accountHistories?.movements
		.filter((mov) => mov > 0)
		.map((deposit) => (deposit * interestRate) / 100)
		.filter((int, i, arr) => {
			return int >= 1;
		})
		.reduce((acc, int) => acc + int, 0);

	const accountBalance = accountHistories?.movements.reduce(
		(acc, mov) => acc + mov,
		0,
	);

	// const sortedAccounts = sorted
	// 	? movements.slice().sort((a, b) => a - b)
	// 	: movements;

	return (
		<div>
			<div className='balance'>
				<div>
					<p className='balance__label'>Current balance</p>
					<p className='balance__date'>
						As of <span className='date'>05/03/2037</span>
					</p>
				</div>
				<p className='balance__value'>{accountBalance}€</p>
			</div>
			<div className='movements'>
				{accountHistories?.movements &&
					accountHistories?.movements?.map((accountHistories, index) => {
						return (
							<div key={index}>
								{accountHistories > 0 ? (
									<div className='movements__row'>
										<div className='movements__type movements__type--deposit'>
											{index + 1} deposit
										</div>
										<div className='movements__date'>24/01/2037</div>
										<div className='movements__value'>${accountHistories}</div>
									</div>
								) : (
									<div className='movements__row'>
										<div className='movements__type movements__type--withdrawal'>
											{index + 1} withdrawal
										</div>
										<div className='movements__date'>24/01/2037</div>
										<div className='movements__value'>${accountHistories}</div>
									</div>
								)}
							</div>
						);
					})}
			</div>
			<div className='summary'>
				<p className='summary__label'>In</p>
				<p className='summary__value summary__value--in'>{incomes}€</p>
				<p className='summary__label'>Out</p>
				<p className='summary__value summary__value--out'>
					{Math.abs(outcomes)}€
				</p>
				<p className='summary__label'>Interest</p>
				<p className='summary__value summary__value--interest'>{interest}€</p>
				<button className='btn--sort'>&downarrow; SORT</button>
			</div>
		</div>
	);
}
