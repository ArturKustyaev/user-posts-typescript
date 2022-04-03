import styled from 'styled-components'

export const StyledPostTitle = styled.h2`
	color: #384758;
	font-size: 24px;
	font-weight: 500;
	line-height: 28px;
	margin-bottom: 7px;

	@media screen and (max-width: 900px) {
		font-size: 22px;
		line-height: 24px;
	}
`
export const StyledPostBody = styled.p`
	color: #606f81;
	font-size: 20px;
	font-weight: 400;
	line-height: 28px;

	@media screen and (max-width: 900px) {
		font-size: 18px;
		line-height: 22px;
	}
`