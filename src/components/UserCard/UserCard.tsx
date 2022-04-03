import { UserContext } from 'context'
import { FC, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import {
	StyledUserCard,
	StyledUserCardCompanyName,
	StyledUserCardName,
	StyledUserCardPhoto,
	StyledUserCardPhotoWrapper
} from './UserCard.styles'

export interface IUser {
	id: number
	name: string
	company: {
		name: string
	}
}

interface Props {
	user: IUser
}

export const UserCard: FC<Props> = ({ user }): JSX.Element => {
	const navigate = useNavigate()
	const { users, selectedUserIndex, setIndex } = useContext(UserContext)
	const isActiveUser = user.id === users[selectedUserIndex]?.id

	const clickHandler = () => {
		navigate('?userId=' + user.id)
		setIndex(users.indexOf(user))
	}

	return (
		<StyledUserCard onClick={clickHandler}>
			<StyledUserCardPhotoWrapper isActiveUser={isActiveUser}>
				<StyledUserCardPhoto src={'https://i.pravatar.cc/'} alt='avatar' />
			</StyledUserCardPhotoWrapper>
			<StyledUserCardName isActiveUser={isActiveUser}>{user.name}</StyledUserCardName>
			<StyledUserCardCompanyName isActiveUser={isActiveUser}>
				{user.company.name}
			</StyledUserCardCompanyName>
		</StyledUserCard>
	)
}
