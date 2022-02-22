import { get } from "../utils/request";

// 获取数据数据
const getData = (data) => get(`/user/v2/getData`, data)

export {
	getData
}