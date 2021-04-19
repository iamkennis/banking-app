import React from 'react'


export default function Summary() {
const calcDisplaySummary = function (acc) {
	const incomes = acc.movements
		.filter((mov) => mov > 0)
		.reduce((acc, mov) => acc + mov, 0);
	 `${incomes}€`

	const out = acc.movements
		.filter((mov) => mov < 0)
		.reduce((acc, mov) => acc + mov, 0);
	`${Math.abs(out)}€`

	const interest = acc.movements
		.filter((mov) => mov > 0)
		.map((deposit) => (deposit * acc.interestRate) / 100)
		.filter((int, i, arr) => {
			// console.log(arr);
			return int >= 1;
		})
		.reduce((acc, int) => acc + int, 0);
	 `${interest}€`
};




    return (
			<div className='summary'>
				<p className='summary__label'>In</p>
				<p className='summary__value summary__value--in'>0000€</p>
				<p className='summary__label'>Out</p>
				<p className='summary__value summary__value--out'>0000€</p>
				<p className='summary__label'>Interest</p>
				<p className='summary__value summary__value--interest'>0000€</p>
				<button className='btn--sort'>&downarrow; SORT</button>
			</div>
		);
}
