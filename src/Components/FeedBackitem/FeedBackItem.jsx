import { useState } from 'react'

const FeedBackItem = () => {
	const [raiting, setRaiting] = useState(1)
	const [text, setText] = useState('This is examle of a FeedBack item...')

	const handleClick = () => {
		setRaiting(prev => {
			return prev + 1
		})
	}

	return (
		<div className='card'>
			<div className='num-display'>{raiting}</div>
			<div className='text-display'>{text}</div>
			{/* <button onClick={handleClick}>click...</button> */}
		</div>
	)
}

export default FeedBackItem
