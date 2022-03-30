import { usersApi } from 'api'
import { IPost, IUser, PostList, UserList } from 'components'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Container } from 'ui-kit'
import './MainPage.css'

export const MainPage = () => {
	const [users, setUsers] = useState<Array<IUser>>([])
	const [posts, setPosts] = useState<Array<IPost>>([])
	const [searchParams] = useSearchParams()
	const id = searchParams.get('userId')

	useEffect(() => {
		usersApi.fetchUsers().then(response => {
			setUsers(response.data)
		})
	}, [])

	useEffect(() => {
		if (id) {
			usersApi.fetchPostsByUserId(id).then(response => {
				setPosts(response.data)
			})
		}
	}, [id])

	return (
		<Container>
			<h1 className='mainPage__title'>Наши топ-блогеры</h1>
			<p className='mainPage__subtitle'>
				Лучше специалисты в своем деле,<br/> средний опыт работы в профессии - 27 лет
			</p>
			<UserList users={users} />
			{posts.length !== 0 && <PostList posts={posts} username={id} />}
		</Container>
	)
}
