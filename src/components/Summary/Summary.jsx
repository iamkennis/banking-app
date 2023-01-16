import React, { useState } from 'react';

export default function Summary() {
	const movements = [5000, 3400, -150, -790, -3210, 1000, 8500, -30];
	const interestRate = 1.2;
	// const [calSummary, setCalSummary] = useState('')

	const incomes = movements
		.filter((mov) => mov > 0)
		.reduce((acc, mov) => acc + mov, 0);

	const outcomes = movements
		.filter((mov) => mov < 0)
		.reduce((acc, mov) => acc + mov, 0);

	const interest = movements
		.filter((mov) => mov > 0)
		.map((deposit) => (deposit * interestRate) / 100)
		.filter((int, i, arr) => {
			return int >= 1;
		})
		.reduce((acc, int) => acc + int, 0);

	return (
		<div className='summary'>
			<p className='summary__label'>In</p>
			<p className='summary__value summary__value--in'>{incomes}€</p>
			<p className='summary__label'>Out to Customer</p>
			<p className='summary__value summary__value--out'>
				{Math.abs(outcomes)}€
			</p>
			<p className='summary__label'>Interest</p>
			<p className='summary__value summary__value--interest'>{interest}€</p>
			<button className='btn--sort'>&downarrow; SORT</button>
			<button className='btn--sort'>&downarrow; SORT</button>
			<button className='btn--sort'>&downarrow; SORT</button>
		</div>
	);
}
