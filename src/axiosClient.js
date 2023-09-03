import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // Set your API base URL here
  timeout: 10000, // Set a timeout for requests
  headers: {
    'Content-Type': 'application/json'
    // You can add other default headers here
  }
})

export default apiClient
