import { FC, ReactNode } from 'react'
import { StyledContainer } from './Container.styles'

interface Props {
	children?: ReactNode
}

export const Container: FC<Props> = ({ children }): JSX.Element => {
	return <StyledContainer>{children}</StyledContainer>
}
