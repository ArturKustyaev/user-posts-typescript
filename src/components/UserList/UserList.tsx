import { IUser } from 'components'
import UserCard from 'components/UserCard'
import { FC } from 'react'
import './UserList.css'

interface Props {
	users: Array<IUser>
}

export const UserList: FC<Props> = ({ users }): JSX.Element => {
	return (
		<div className='userList'>
			{users.map(user => (
				<UserCard key={user.id} user={user} />
			))}
		</div>
	)
}
