import axios from 'axios'

const API_URL: string = 'https://api.rawg.io/api'
const API_KEY: string = '46dc151c134b4bedb29ee008defc8490'

export default axios.create({
  baseURL: API_URL,
  params: { key: API_KEY }
})