import React from 'react'



export default function Movements() {


const displayMovement = (movements, sort = false) => {
	
	const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

	movs.forEach(function (mov, i) {
		const type = mov > 0 ? 'deposit' : 'withdrawal';
     
	});
};
















    return (
			<div className='movements'>
				<div className='movements__row'>
				<div className='movements__type movements__type--deposit'>{ }</div>
				<div className='movements__date'>{ }</div>
				<div className='movements__value'>{}</div>
				</div>
				<div className='movements__row'>
					<div className='movements__type movements__type--withdrawal'>
						{}
					</div>
					<div className='movements__date'>24/01/2037</div>
					<div className='movements__value'>-378€</div>
				</div>
			</div>
		);
}
