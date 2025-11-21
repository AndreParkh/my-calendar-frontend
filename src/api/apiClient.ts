import axios from 'axios'
import Cookies from 'js-cookie'

const apiClient = axios.create()

apiClient.interceptors.request.use((config) => {
  const url = config.url || ''
  const isPrivateApi = /\/api\/private\/.+/i.test(url)

  if (isPrivateApi) {
    const token = Cookies.get('authToken')
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export default apiClient
