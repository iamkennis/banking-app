import React from 'react';

export default function CloseAcc() {
	return (
		<div className='operation operation--close'>
			<h2>Close account</h2>
			<form className='form form--close'>
				<div>
					<label className='form__label'>Confirm user</label>
					<input
						type='text'
						className='form__input form__input--user'
					/>
				</div>
				<div>
					<label className='form__label'>Confirm PIN</label>
					<input
						type='password'
						maxLength='6'
						className='form__input form__input--pin'
					/>
				</div>
				<div className='btn--global'>
					<button className='form__btn form__btn--close'>&rarr;</button>
				</div>
			</form>
		</div>
	);
}
