import React from 'react'



export default function Movements() {

    return (
			<div className='movements'>
				<div className='movements__row'>
				<div className='movements__type movements__type--deposit'>{ }</div>
				<div className='movements__date'>{ }</div>
				<div className='movements__value'>{ }</div>
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
