import axios from 'axios'

const apiClient = axios.create({
    baseURL: 'https://api.alternative.me/fng/',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
})

export default {
    getFNGIndex() {
        return apiClient.get()
    }
}
