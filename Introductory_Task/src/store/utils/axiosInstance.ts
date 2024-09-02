import axios from 'axios'

const axiosInstance = axios.create({
	baseURL: 'https://serverssv1.vercel.app', // новый URL для всех запросов
	headers: {
		'Content-Type': 'application/json',
	},
})

export default axiosInstance
