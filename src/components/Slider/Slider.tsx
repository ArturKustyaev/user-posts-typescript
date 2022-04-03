import { IUser, UserCard } from 'components'
import { UserContext } from 'context'
import { FC, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Arrow from '../../assets/img/arrow.svg'
import figure from '../../assets/img/figure.svg'
import {
	StyledSlider,
	StyledSliderBg,
	StyledSliderButton,
	StyledSliderButtonPrev,
	StyledSliderNavigation,
	StyledSliderSlide,
	StyledSliderWrapper
} from './Slider.styles'

interface Props {
	data: Array<IUser>
}

export const Slider: FC<Props> = ({ data }): JSX.Element => {
	const { users, selectedUserIndex, setIndex } = useContext(UserContext)
	const navigate = useNavigate()

	const nextClick = () => {
		setIndex(selectedUserIndex + 1)
	}

	const prevClick = () => {
		setIndex(selectedUserIndex - 1)
	}

	useEffect(() => {
		if (users.length !== 0) {
			navigate('?userId=' + users[selectedUserIndex]?.id)
		}
	}, [selectedUserIndex])

	return (
		<StyledSlider>
			<StyledSliderBg src={figure} alt='figure' />
			<StyledSliderNavigation>
				<StyledSliderButtonPrev
					onClick={prevClick}
					disabled={selectedUserIndex === -1 || selectedUserIndex === 0}
				>
					<img src={Arrow} alt='arrow' />
				</StyledSliderButtonPrev>
				<StyledSliderButton
					onClick={nextClick}
					disabled={selectedUserIndex === -1 || selectedUserIndex === users.length - 1}
				>
					<img src={Arrow} alt='arrow' />
				</StyledSliderButton>
			</StyledSliderNavigation>
			<StyledSliderWrapper>
				{data.map(user => (
					<StyledSliderSlide key={user.id} userIndex={selectedUserIndex}>
						<UserCard user={user} />
					</StyledSliderSlide>
				))}
			</StyledSliderWrapper>
		</StyledSlider>
	)
}
