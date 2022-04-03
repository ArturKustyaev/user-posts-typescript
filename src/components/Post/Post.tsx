import { FC, HTMLAttributes } from 'react'
import { StyledPostBody, StyledPostTitle } from './Post.styles'

export interface IPost {
	id: string
	title: string
	body: string
}

interface Props extends HTMLAttributes<HTMLDivElement> {
	post: IPost
}

export const Post: FC<Props> = ({ post, ...rest }) => {
	return (
		<div {...rest}>
			<StyledPostTitle>{post.title}</StyledPostTitle>
			<StyledPostBody>{post.body}</StyledPostBody>
		</div>
	)
}
