import React, { useState } from 'react';
import './helloWorld.scss';

function HelloWorld() {
	const [world, setWorld] = useState('hello world')

	return (
		<div className="world">{world}</div>
	)
}
export default HelloWorld