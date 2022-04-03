import styled from 'styled-components'

export const StyledSlider = styled.div`
	margin-bottom: 51px;
	position: relative;
`

export const StyledSliderBg = styled.img`
	position: absolute;
	right: 0;
	top: 0;

	@media screen and (max-width: 900px) {
		display: none;
	}
`

export const StyledSliderNavigation = styled.div`
	display: flex;
	margin: 0 auto 20px auto;
	max-width: 120px;
`

export const StyledSliderButton = styled.button`
	width: 48px;
	height: 48px;
	background-color: #fe8700;
	outline: none;
	border: none;
	border-radius: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	&:hover {
		background-color: #ff9a28;
	}

	&:disabled {
		background-color: #ffb45f;
		cursor: default;
	}
`
export const StyledSliderButtonPrev = styled(StyledSliderButton)`
	transform: rotate(-180deg);
	margin-right: 19px;
`

export const StyledSliderWrapper = styled.div`
	overflow-x: scroll;
	position: relative;
	white-space: nowrap;
	z-index: 100;

	&::-webkit-scrollbar {
		width: 0;
	}
`

interface IStyledSliderSlide {
	userIndex: number
}

export const StyledSliderSlide = styled.div<IStyledSliderSlide>`
	display: inline-block;
	margin-right: 34px;
	transition: transform 0.2s ease;
	transform: ${props => (props.userIndex !== -1 ? `translate(${props.userIndex * -100}%)` : '')};
`
