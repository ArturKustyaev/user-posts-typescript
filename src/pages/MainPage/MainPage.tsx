import { Container, PostList, Slider } from 'components'
import { useFetchUserPosts, useFetchUsers } from 'hooks'
import { FC } from 'react'
import { StyledFetchError, StyledMainPageSubtitle, StyledMainPageTitle } from './MainPage.styles'

export const MainPage: FC = (): JSX.Element => {
	const { users, error: fetchUsersError } = useFetchUsers()

	const { posts, error: fetchPostsError } = useFetchUserPosts()

	return (
		<Container>
			<StyledMainPageTitle>Наши топ-блогеры</StyledMainPageTitle>
			<StyledMainPageSubtitle>
				Лучше специалисты в своем деле,
				<br />
				средний опыт работы в профессии - 27 лет
			</StyledMainPageSubtitle>

			{fetchUsersError && <StyledFetchError>{fetchUsersError}</StyledFetchError>}
			{!fetchUsersError && <Slider data={users} />}

			{fetchPostsError && <StyledFetchError>{fetchPostsError}</StyledFetchError>}
			{!fetchPostsError && <PostList posts={posts} />}
		</Container>
	)
}
