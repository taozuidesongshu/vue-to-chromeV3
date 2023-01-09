//绩效评估API
import request from './request'
/**
 * @description: 获取列表
 * keywords: str
 */
export function apiGetList(params) {
	return request({
		url: '/cloudsearch',
		method: 'get',
		params,
	})
}
/**
 * @description: 每日60s
 * keywords: str
 */
export function api60s(params) {
	return request({
		baseURL:'https://api.vvhan.com',
		url: '/api/60s',
		method: 'get',
		params,
	})
}