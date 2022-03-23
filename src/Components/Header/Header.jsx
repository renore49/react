import PropType from 'prop-types'

import React from 'react'

const Header = ({ text, bgColor, textColor }) => {
	const headerStyle = {
		color: textColor,
		background: bgColor,
	}
	return (
		<header style={headerStyle}>
			<div className='container'>
				<h2>{text}</h2>
			</div>
		</header>
	)
}

Header.defaultProps = {
	text: 'Feedback UI App',
	bgColor: 'rgba(0, 0, 0, 0.4)',
	textColor: '#ff6a95',
}

Header.propTypes = {
	text: PropType.string,
	bgColor: PropType.string,
	textColor: PropType.string,
}

export default Header
