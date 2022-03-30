import { UserContext } from 'context'
import { MainPage } from 'pages'
import { FC, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

export const App: FC = (): JSX.Element => {
	const [user, setUser] = useState<any>({})

	return (
		<UserContext.Provider value={{ user, setUser }}>
			<BrowserRouter>
				<MainPage />
			</BrowserRouter>
		</UserContext.Provider>
	)
}
