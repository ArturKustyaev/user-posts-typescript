import classNames from 'classnames'
import { UserContext } from 'context'
import { FC, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import './UserCard.css'

export interface IUser {
	id: string
	name: string
	photoUrl: string
	company: {
		name: string
	}
}

interface Props {
	user: IUser
}

export const UserCard: FC<Props> = ({ user }): JSX.Element => {
	const navigate = useNavigate()

	const clickHandler = () => {
		navigate('?userId=' + user.id)
	}

	return (
		<div className={classNames('userCard')} onClick={clickHandler}>
			<div className='userCard__photoWrapper'>
				<img className='userCard__photo' src={'https://i.pravatar.cc/'} alt='avatar' />
			</div>
			<div className='userCard__info'>
				<p className='userCard__name'>{user.name}</p>
				<p className='userCard__companyName'>{user.company.name}</p>
			</div>
		</div>
	)
}
