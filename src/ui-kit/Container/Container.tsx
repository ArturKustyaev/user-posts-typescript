import classNames from 'classnames'
import { FC, HTMLAttributes, ReactNode } from 'react'
import './Container.css'

interface IContainerProps extends HTMLAttributes<HTMLDivElement> {
	className?: string
	children?: ReactNode
}

export const Container: FC<IContainerProps> = ({ className, children, ...rest }): JSX.Element => {
	return (
		<div className={classNames('container', className)} {...rest}>
			{children}
		</div>
	)
}
