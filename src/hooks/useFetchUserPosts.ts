import { usersApi } from 'api'
import { useSearchParams } from 'react-router-dom'
import { IPost } from 'components'
import { useState, useEffect } from 'react'

const useFetchUserPosts = () => {
	const [posts, setPosts] = useState<Array<IPost>>([])
	const [error, setError] = useState<string>('')
	const [searchParams] = useSearchParams()
	const id = searchParams.get('userId')

	useEffect(() => {
		if (id) {
			usersApi
				.fetchPostsByUserId(id)
				.then(response => {
					setPosts(response.data)
				})
				.catch(() => {
					setError('Ошибка при загрузке постов!')
				})
		}
	}, [id])

	return { posts, error }
}

export default useFetchUserPosts
