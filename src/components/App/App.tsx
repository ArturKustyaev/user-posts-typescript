import { IUser } from 'components'
import { UserContext } from 'context'
import { MainPage } from 'pages'
import { FC, useState } from 'react'

export const App: FC = (): JSX.Element => {
	const [users, setUsers] = useState<Array<IUser>>([])
	const [selectedUserIndex, setIndex] = useState<number>(-1)

	return (
		<UserContext.Provider value={{ users, setUsers, selectedUserIndex, setIndex }}>
			<MainPage />
		</UserContext.Provider>
	)
}
