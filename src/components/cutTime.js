import React, { useState, useEffect } from 'react';

function CutTime() {
	const [delay] = useState(1000)
	const timeStr = new Date().toTimeString().slice(0, 8);
	const [time, setTime] = useState(timeStr)

	useEffect(() => {
		const timer = setInterval(() => {
			const newTime = new Date().toTimeString().slice(0, 8);
			setTime(newTime)
		}, delay)
		return () => clearInterval(timer)
	}, [delay])

	return (
		<div className="time">{time}</div>
	)
}
export default CutTime