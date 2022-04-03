import styled from 'styled-components'

export const StyledMainPageTitle = styled.h1`
	color: #384758;
	font-size: 48px;
	font-weight: 600;
	line-height: 50px;
	margin: 64px 0 47px 0;
	text-align: center;

	@media screen and (max-width: 900px) {
		font-size: 44px;
		margin: 64px 0 30px 0;
		text-align: center;
	}
`
export const StyledMainPageSubtitle = styled.p`
	color: #606f81;
	font-size: 18px;
	font-weight: 400;
	line-height: 27px;
	margin-bottom: 31px;
	text-align: center;

	@media screen and (max-width: 900px) {
		color: #606f81;
		font-size: 18px;
		font-weight: 400;
		line-height: 27px;
		margin-bottom: 31px;
		text-align: center;
	}
`

export const StyledFetchError = styled.div`
	display: block;
	color: #384758;
	font-size: 24px;
	text-align: center;
`