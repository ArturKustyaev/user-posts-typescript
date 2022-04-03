import { IPost, Post } from 'components'
import { UserContext } from 'context'
import { FC, useContext } from 'react'
import {
	StyledPostList,
	StyledPostListInner,
	StyledPostListSubtitle,
	StyledPostListTitle
} from './PostList.styles'

interface Props {
	posts: Array<IPost>
}

export const PostList: FC<Props> = ({ posts }): JSX.Element => {
	const { users, selectedUserIndex } = useContext(UserContext)

	if (posts.length === 0) {
		return (
			<StyledPostListSubtitle>Для отображения постов выберите пользователя</StyledPostListSubtitle>
		)
	}

	return (
		<StyledPostList>
			<StyledPostListInner>
				<StyledPostListTitle>
					3 актуальных поста {users[selectedUserIndex]?.name}
				</StyledPostListTitle>
				
				{posts.map(post => (
					<Post className='post' key={post.id} post={post} />
				))}
			</StyledPostListInner>
		</StyledPostList>
	)
}
