import { useSearchParams } from 'react-router-dom'
import { usersApi } from 'api'
import { UserContext } from 'context'
import { useContext, useEffect, useState } from 'react'

const useFetchUsers = () => {
	const { users, setUsers, setIndex } = useContext(UserContext)

	const [error, setError] = useState<string>('')

	const [searchParams] = useSearchParams()
	const id = searchParams.get('userId')

	useEffect(() => {
		usersApi
			.fetchUsers()
			.then(response => {
				setUsers(response.data)
			})
			.catch(() => {
				setError('Ошибка при загрузке пользователей!')
			})
	}, [])

	useEffect(() => {
		if (id) {
			const index = users.findIndex(user => user.id === +id)
			setIndex(index)
		}
	}, [id, users])

	return { users, error, setUsers, setIndex }
}

export default useFetchUsers
