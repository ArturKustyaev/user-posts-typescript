import { PostList, Slider } from 'components'
import { useFetchUserPosts, useFetchUsers } from 'hooks'
import { FC } from 'react'
import { Container } from 'ui-kit'
import './MainPage.sass'

export const MainPage: FC = (): JSX.Element => {
	const { users, error } = useFetchUsers()
	
	const { posts } = useFetchUserPosts()

	return (
		<Container>
			<h1 className='mainPage__title'>Наши топ-блогеры</h1>
			<p className='mainPage__subtitle'>
				Лучше специалисты в своем деле,
				<br />
				средний опыт работы в профессии - 27 лет
			</p>

			{error && <span>{error}</span>}
			<Slider data={users} />

			<PostList posts={posts} />
		</Container>
	)
}
