import moment from 'moment'

export default {
    dateFormat(timestamp, format = "DD-MM-YYYY") {
        return moment.unix(timestamp).format(format);
    },
    secondsToHours(seconds) {
        return new Date(seconds * 1000).toISOString().substr(11, 5)
    },
    fngZones(fng) {
        if (fng >= 75) {
            return 'Extreme Greed'
        } else if (fng >= 50 && fng <= 74) {
            return 'Greed'
        } else if (fng >= 25 && fng <= 49) {
            return 'Fear'
        } else if (fng <= 25) {
            return 'Extreme Fear'
        }
    }
}
