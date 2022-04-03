import styled from 'styled-components'

interface IActiveUser {
	isActiveUser: boolean
}

export const StyledUserCard = styled.div`
	cursor: pointer;
	display: inline-block;
	max-width: 290px;
	position: relative;
	width: 100%;
	z-index: 100;

	&:not(:last-child) {
		margin-right: 34px;
	}
`
export const StyledUserCardPhotoWrapper = styled.div<IActiveUser>`
	display: flex;
	position: relative;
	max-width: 290px;
	margin-bottom: 19px;

	&::after {
		background-color: #fe8700;
		bottom: 0;
		content: '';
		height: 5px;
		left: 0;
		opacity: ${props => (props.isActiveUser ? 1 : 0)};
		position: absolute;
		transition: opacity 0.2s ease-in;
		width: 100%;
	}
`

export const StyledUserCardPhoto = styled.img`
	height: 100%;
	max-height: 320px;
	object-fit: cover;
	vertical-align: middle;
	width: 100%;
`

export const StyledUserCardName = styled.p<IActiveUser>`
	color: ${props => (props.isActiveUser ? '#FE8700' : '#384758')};
	font-size: 24px;
	font-weight: 500;
	line-height: 36px;
	transition: color 0.1s ease-in;

	@media screen and (max-width: 900px) {
		font-size: 22px;
		line-height: 30px;
	}
`

export const StyledUserCardCompanyName = styled.p<IActiveUser>`
	color: ${props => (props.isActiveUser ? '#FE8700' : '#606f81')};
	font-size: 18px;
	font-weight: 400;
	line-height: 27px;
	transition: color 0.1s ease-in;
`