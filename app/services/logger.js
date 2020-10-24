const colors = require('colors');
const moment = require('moment-timezone');
colors.enabled = true;

class Logger {
    constructor() {
        this.info = (...msg) => this.log('info', 'green', ...msg);
        this.warn = (...msg) => this.log('warn', 'yellow', ...msg);
        this.error = (...msg) => this.log('error', 'red', ...msg);
    }

    log(type, color, ...msg) {
        try {
            console.log(`${moment().tz(process.env.TIMEZONE).format('YYYY-MM-DD HH:mm:ss.SSSS')} - ${colors[color](`[${type.toUpperCase()}]`)} -`, ...msg);
        } catch (e) {
            console.log(`${moment().tz(process.env.TIMEZONE).format('YYYY-MM-DD HH:mm:ss.SSSS')} - ${colors.red('[ERROR]')} -`, e);
        }
    }
}

module.exports = new Logger();
