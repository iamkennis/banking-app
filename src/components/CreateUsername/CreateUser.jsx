import React,{useState} from 'react'
import data from '../../Data'

export default function CreateUser() {
 const [accounts, setAccount] = useState(data)

    
	const createUser = (accounts) =>
		accounts.map(
			(account) =>
				(account.username = account.owner
					.toLowerCase()
					.split(' ')
					.map((name) => name[0])
					.join(''))
		);
	                    
  createUser(accounts);

    return (
        <div>
            
        </div>
    );
}



