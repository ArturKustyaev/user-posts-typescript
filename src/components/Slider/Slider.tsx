import { UserCard } from 'components'
import { UserContext } from 'context'
import { FC, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Arrow from '../../assets/img/arrow.svg'
import './Slider.sass'

interface Props {
	data: any
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
		<div className='ui-slider'>
			<div className='ui-slider__navigation'>
				<button
					className='ui-slider__button ui-slider__button--prev'
					onClick={prevClick}
					disabled={selectedUserIndex === 0}
				>
					<img src={Arrow} alt='arrow' />
				</button>
				<button
					className='ui-slider__button'
					onClick={nextClick}
					disabled={selectedUserIndex === users?.length - 1}
				>
					<img src={Arrow} alt='arrow' />
				</button>
			</div>
			<div className='ui-slider__slide-wrapper'>
				{data.map((item: any) => (
					<div
						className='ui-slider__slide'
						key={item.id}
						style={{
							transform: `translate(${selectedUserIndex * -100}%)`
						}}
					>
						<UserCard user={item} />
					</div>
				))}
			</div>
		</div>
	)
}
