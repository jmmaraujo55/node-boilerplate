const colors = require('colors');
const moment = require('moment-timezone');
colors.enabled = true;

class Logger {
    constructor() {
        this.colors = {
            info: 'green',
            warn: 'yellow',
            error: 'red'
        };
    }

    log(type, msg) {
        try {
            console.log(`${moment().tz(process.env.TIMEZONE).format('YYYY-MM-DD HH:mm:ss.SSSS')} - ${colors[this.colors[type]](`[${type.toUpperCase()}]`)} - ${msg}`);
        } catch (e) {
            console.log(`${moment().tz(process.env.TIMEZONE).format('YYYY-MM-DD HH:mm:ss.SSSS')} - ${colors.red('[ERROR]')} - Log type not found`);
        }
    }
}

module.exports = new Logger();
