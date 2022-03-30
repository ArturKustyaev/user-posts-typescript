import classNames from 'classnames'
import { FC, HTMLAttributes } from 'react'
import './Post.css'

export interface IPost {
	id: string
	title: string
	body: string
}

interface Props extends HTMLAttributes<HTMLDivElement> {
	className?: string
	post: IPost
}

export const Post: FC<Props> = ({ className, post, ...rest }) => {
	return (
		<div className={classNames('post', className)} {...rest}>
			<h2 className='post__title'>{post.title}</h2>
			<p className='post__body'>{post.body}</p>
		</div>
	)
}
