import moment from 'moment'

export default {
    dateFormat(timestamp) {
        return moment.unix(timestamp).format("DD-MM-YYYY");
    },
    secondsToHours(seconds) {
        return new Date(seconds * 1000).toISOString().substr(11, 5)
    }
}
