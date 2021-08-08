import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

export default {
    getStatus() {
        return apiClient.get('/ping')
    },
    getBasicData() {
        return apiClient('/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=2&page=1&sparkline=false')
    }
}
