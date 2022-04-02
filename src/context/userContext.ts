import { IUser } from 'components'
import { createContext } from 'react'

interface IUserContext {
	users: Array<IUser>
	setUsers: (users: Array<IUser>) => void
	selectedUserIndex: number
	setIndex: (index: number) => void
}

const context: IUserContext = {
	users: [],
	setUsers: () => {},
	selectedUserIndex: 0,
	setIndex: () => {}
}

export const UserContext = createContext<IUserContext>(context)
