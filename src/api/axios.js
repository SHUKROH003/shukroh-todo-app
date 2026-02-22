import axios from "axios"

const api = axios.create({
  baseURL: "https://api.oluwasetemi.dev",
})

export default api
