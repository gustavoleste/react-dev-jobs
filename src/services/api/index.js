import axios from'axios'
import key from './gitHubKey'

const api = axios.create({
          baseURL: 'https://api.github.com/repos/',
          params: {
                    access_token: key,
                    per_page: 10
          }
})

export default api