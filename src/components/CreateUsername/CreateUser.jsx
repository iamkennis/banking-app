import React,{useState} from 'react'
import data from '../../Data'

export default function CreateUser() {
 const [accounts, setAccount] = useState(data)

    
    return (
        <div>
            {
				setAccount.accounts.map(
			({}) =>
				(account.username = account.owner
					.toLowerCase()
					.split(' ')
					.map((name) => name[0])
					.join(''))
		)
			}
        </div>
    );
}



