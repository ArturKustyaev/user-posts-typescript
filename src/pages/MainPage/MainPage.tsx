import { Container, PostList, Slider } from 'components'
import { useFetchUserPosts, useFetchUsers } from 'hooks'
import { FC } from 'react'
import './MainPage.sass'

export const MainPage: FC = (): JSX.Element => {
	const { users, error: fetchUsersError } = useFetchUsers()

	const { posts, error: fetchPostsError } = useFetchUserPosts()

	return (
		<Container>
			<h1 className='mainPage__title'>Наши топ-блогеры</h1>
			<p className='mainPage__subtitle'>
				Лучше специалисты в своем деле,
				<br />
				средний опыт работы в профессии - 27 лет
			</p>

			{fetchUsersError && <span className='fetch-error'>{fetchUsersError}</span>}
			{!fetchUsersError && <Slider data={users} />}

			{fetchPostsError && <span className='fetch-error'>{fetchPostsError}</span>}

			{!fetchPostsError && <PostList posts={posts} />}
		</Container>
	)
}
