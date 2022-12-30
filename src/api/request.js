import axios from 'axios'
import { Message } from 'element-ui'
// const BASE_API = process.env.NODE_ENV === 'production' ? localStorage.getItem('BASE_API') : process.env.VUE_APP_BASE_API
// create an axios instance
const service = axios.create({
	baseURL: '',
	timeout: 600000 // request timeout
})

// request interceptor
service.interceptors.request.use(
	async config => {
		if (process.env.NODE_ENV === 'production') {
			// config.baseURL = localStorage.getItem('BASE_API')
			config.baseURL = 'https://mu-api.yuk0.com'
		} else {
			// config.baseURL = process.env.VUE_APP_BASE_API
			config.baseURL = 'https://mu-api.yuk0.com'
		}
		// const urlInfo = JSON.parse(Cookies.get('urlInfo'))
		// config.headers['Authorization'] = `Bearer ${urlInfo.token}`
		// config.headers['systemCode'] = urlInfo.systemCode
		config.headers['Content-Type'] = config.headers['Content-Type'] ? config.headers['Content-Type'] : 'application/json'
		config['show_message'] = !(config.data && config.data.not_show_message)
		return config
	},
	error => {
		// for debug
		Promise.reject(error)
	}
)
// response interceptor
service.interceptors.response.use(
	response => {
		const res = response.data
		if (res.code && res.code === 200) {
			if (response.config.method === 'post') {
				// 屏蔽message
				if (response.config.show_message) {
					Message({
						message: response.data.message,
						type: 'success',
						duration: 5 * 1000
					})
				}
			}
			return response.data
		} else {
			if (response.config.show_message) {
				Message({
					message: res.message,
					type: 'error',
					duration: 5000
				})
			}
			return Promise.reject(response)
		}
	},
	error => {
		Message({
			message: error.message,
			type: 'error',
			duration: 5000
		})
		return Promise.reject(error)
	}
)

export default service
