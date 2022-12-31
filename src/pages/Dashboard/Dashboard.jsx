import React from 'react'
import Accountmovements from '../../components/Movements/Movements'
import Transfer from '../../components/Transfer/Transfer'
import Loan from '../../components/Loan/Loan'
import CloseAccount from '../../components/CloseAcc/CloseAcc'


export default function Dashboard({createAccount}) {
	
	
	return (
		<div className='app'>
			<Accountmovements createAccount={createAccount} />
			<Transfer />
			<Loan/>
			<CloseAccount />
		</div>
	);
}



	