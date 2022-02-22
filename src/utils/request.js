import axios from 'axios';
import qs from 'qs';

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8081' : 'http://xxx.xxx.139.238:5005'; // 线上地址
axios.defaults.timeout = 60000;
axios.interceptors.response.use(
	response => {
		if (response.status == 200) {
			return Promise.resolve(response);
		} else {
			return Promise.reject(response);
		}
	},
	error => {
		console.log(`异常请求：${JSON.stringify(error.message)}`);
	}
);

export default {
	post(url, data) {
		return new Promise((resolve, reject) => {
			axios({
				method: 'post',
				url,
				data: qs.stringify(data)
			})
				.then(res => {
					resolve(res.data);
				})
				.catch(err => {
					reject(err);
				});
		});
	},

	get(url, data) {
		return new Promise((resolve, reject) => {
			axios({
				method: 'get',
				url,
				params: data
			})
				.then(res => {
					resolve(res.data);
				})
				.catch(err => {
					reject(err);
				});
		});
	}
};
