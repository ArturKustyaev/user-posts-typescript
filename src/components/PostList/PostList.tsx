import { IPost } from 'components/Post/'
import { Post } from 'components/Post/Post'
import { FC } from 'react'
import './PostList.sass'

interface Props {
	posts: Array<IPost>
	username?: string | null
}

export const PostList: FC<Props> = ({ posts, username }) => {
	return (
		<div className='postList'>
			<h2 className='postList__title'>3 актуальных поста {username}</h2>
			{posts.map(post => (
				<Post className='postList__post' key={post.id} post={post} />
			))}
		</div>
	)
}
