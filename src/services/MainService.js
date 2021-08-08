import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:5000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

export default {
    getFNGIndex() {
        return apiClient.get('/fng_index')
    },
    getFNGBTCIndex() {
        return apiClient.get('/fng_index_btc')
    },
    getEthGas() {
        return apiClient.get('/ethgas')
    },
    getEth2Contract() {
        return apiClient.get('/eth2contract')
    }

}
