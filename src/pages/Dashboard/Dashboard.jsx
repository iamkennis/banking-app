import React from 'react'
import Balance from '../../components/Balance/Balance'
import Movements from '../../components/Movements/Movements'
import Summary from '../../components/Summary/Summary'
import Transfer from '../../components/Transfer/Transfer'
import Loan from '../../components/Loan/Loan'
import CloseAccount from '../../components/CloseAcc/CloseAcc'
import LogOut from '../../components/Logout/Logout'

export default function Dashboard(props) {
    return (
			<div className='app' style={props.style} >
				<Balance />
				<Movements />
				<Summary />
				<Transfer />
				<Loan />
				<CloseAccount />
				<LogOut />
			</div>
		);
}
