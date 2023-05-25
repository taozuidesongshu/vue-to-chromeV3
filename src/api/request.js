import axios from 'axios'
import { Message } from 'element-ui'
const service = axios.create({
	baseURL: '',
	timeout: 600000 // request timeout
})

service.interceptors.request.use(
	async config => {
		// if (process.env.NODE_ENV === 'production') {
		// 	// config.baseURL = localStorage.getItem('BASE_API')
		// 	config.baseURL = 'https://mu-api.yuk0.com'
		// } else {
		// 	// config.baseURL = process.env.VUE_APP_BASE_API
		// 	config.baseURL = 'https://node-lwldp.run.goorm.io/'
		// }
		config.baseURL?config.baseURL:(config.baseURL="https://node-lwldp.run.goorm.io/")
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
		if (response.status && response.status === 200) {
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
					message: response.data.message,
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
