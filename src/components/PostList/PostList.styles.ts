import styled from 'styled-components'
import figure from '../../assets/img/figure.svg'
import quotes from '../../assets/img/quotes.svg'

export const StyledPostList = styled.div`
	margin-bottom: 120px;
	position: relative;

	.post:not(:last-child) {
		margin-bottom: 19px;
	}

	&::after {
		background: url(${figure}) no-repeat;
		content: '';
		height: 100%;
		left: -100px;
		max-height: 330px;
		max-width: 310px;
		position: absolute;
		top: 100px;
		width: 100%;

		@media screen and (max-width: 900px) {
			display: none;
		}
	}

	@media screen and (max-width: 900px) {
		margin-bottom: 80px;
	}
`

export const StyledPostListInner = styled.div`
	margin-left: 25%;
	position: relative;

	@media screen and (max-width: 900px) {
		margin: 0;
	}
`
export const StyledPostListTitle = styled.h2`
	color: #384758;
	font-size: 48px;
	font-weight: 600;
	margin-bottom: 27px;

	@media screen and (max-width: 900px) {
		font-size: 42px;
	}

	@media screen and (max-width: 600px) {
		font-size: 28px;
	}

	&::after {
		background: url(${quotes}) no-repeat;
		content: '';
		height: 87px;
		left: -34px;
		position: absolute;
		top: 0;
		transform: translateX(-100%);
		width: 100px;

		@media screen and (max-width: 900px) {
			display: none;
		}
	}
`

export const StyledPostListSubtitle = styled.div`
	color: #384758;
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 27px;
	text-align: center;
`