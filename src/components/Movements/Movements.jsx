import React from 'react'



export default function Movements() {


const displayMovements = function (movements, sort = false) {
	// containerMovements.innerHTML = '';

	const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

	movs.forEach(function (mov, i) {
		const type = mov > 0 ? 'deposit' : 'withdrawal';

	// 	const html = `
    //   <div class="movements__row">
    //     <div class="movements__type movements__type--${type}">${
	// 		i + 1
	// 	} ${type}</div>
    //     <div class="movements__value">${mov}€</div>
    //   </div>
    // `;

		// containerMovements.insertAdjacentHTML('afterbegin', html);
	});
};
















    return (
			<div className='movements'>
				<div className='movements__row'>
				<div className='movements__type movements__type--deposit'>{ }</div>
				<div className='movements__date'>{ }</div>
				<div className='movements__value'>{mov}</div>
				</div>
				<div className='movements__row'>
					<div className='movements__type movements__type--withdrawal'>
						{type}
					</div>
					<div className='movements__date'>24/01/2037</div>
					<div className='movements__value'>-378€</div>
				</div>
			</div>
		);
}
