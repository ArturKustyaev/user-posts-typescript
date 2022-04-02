import { IUser } from 'components'
import { createContext } from 'react'

interface IUserContext {
	users: Array<IUser>
	selectedUserIndex: number
	setUsers: (users: Array<IUser>) => void

	setIndex: (index: number) => void
}

const initialState: IUserContext = {
	users: [],
	selectedUserIndex: -1,
	setUsers: () => {},
	setIndex: () => {}
}

export const UserContext = createContext<IUserContext>(initialState)
