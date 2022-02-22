import React, { useEffect } from 'react';
import './home.scss';
import { useStore } from '@/store/contextProvider';
import HelloWorld from '@/components/helloWorld';
import { useLocation } from 'react-router-dom';
import { Button } from 'antd-mobile';

function Home(props) {
	// 声明一个新的叫做 “count” 的 state 变量
	const store = useStore()
	const location = useLocation();
	useEffect(() => {
		console.log('请求初始数据', location)
	}, [])

	const changeName = () => {
		const value = store.state.user.name === 'th'?'fafa':'th'
		store.dispatch({
			type: 'name',
			value: value
		})
	}

	return (
		<div className="home">
			<HelloWorld></HelloWorld>
			<div className='home-name' onClick={changeName}>
				<span>点我：</span>
				<Button color='primary'>{store.state.user.name}</Button>
			</div>
		</div>
	);
}

export default React.memo(Home)