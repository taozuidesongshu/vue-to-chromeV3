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