import React, { useEffect } from 'react';
import './about.scss';

function About() {
	useEffect(() => {
		console.log('About')
	}, [])

	return (
		<div className='about'>hello About</div>
	)
}

export default React.memo(About)