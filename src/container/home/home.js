import React, { useEffect } from 'react';
import './home.scss';
import { useStore } from '@/store/contextProvider';
import CutTime from '@/components/cutTime';
import PayBanner from '@/assets/image/pay-banner.png';

function Home() {
	// 声明一个新的叫做 “count” 的 state 变量
	const store = useStore()
	useEffect(() => {
		console.log('请求初始数据')
	}, [])

	const TopBanner = () => {
		return (
			<div className="top-banner">

			</div>
		)
	}

	const GoodsContent = () => {
		const array = [1, 2, 3, 4]
		return (
			<div className="content">
				{
					array.map((item) => {
						return <div className="content-item"></div>
					})
				}
			</div>
		)
	}

	const changeName = () => {
		store.dispatch({
			type: 'name',
			value: 'fafa'
		})
	}

	return (
		<div className="home">
			<TopBanner></TopBanner>
			<CutTime></CutTime>
			<GoodsContent></GoodsContent>
			<div onClick={changeName}>
				全局数据：{store.state.user.name}
			</div>
			<div>
				<img className="home-image" src={PayBanner} />
			</div>
		</div>
	);
}

export default React.memo(Home)