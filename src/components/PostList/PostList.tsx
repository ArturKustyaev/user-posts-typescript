import { IPost, Post } from 'components'
import { UserContext } from 'context'
import { FC, useContext } from 'react'
import './PostList.sass'

interface Props {
	posts: Array<IPost>
}

export const PostList: FC<Props> = ({ posts }): JSX.Element => {
	const { users, selectedUserIndex } = useContext(UserContext)

	if (posts.length === 0) {
		return <div className='postList__subtitle'>Для отображения постов выберите пользователя</div>
	}

	return (
		<div className='postList'>
			<div className='postList__inner'>
				<h2 className='postList__title'>3 актуальных поста {users[selectedUserIndex]?.name}</h2>
				{posts.map(post => (
					<Post className='postList__post' key={post.id} post={post} />
				))}
			</div>
		</div>
	)
}
