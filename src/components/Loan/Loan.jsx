import React from 'react';

export default function Loan() {
	return (
		<div className='operation operation--loan'>
			<h2>Request loan</h2>
			<form className='form form--loan'>
				<input
					type='number'
					className='form__input form__input--loan-amount'
				/>
				<button className='form__btn form__btn--loan'>Request Loan</button>
				<label className='form__label form__label--loan'>Amount</label>
			</form>
		</div>
	);
}
