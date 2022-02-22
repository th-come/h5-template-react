import Home from '@/container/home/home'
import About from '@/container/about/about'

const routes = [
	{
		path: "/",
		exact: true,
		component: Home
	},
	{
		path: "/about",
		component: About,
	}
]

export default routes