const winston = require('winston')

const logFormat = winston.format.combine(
    winston.format.colorize(),
    winston.format.timestamp({ format: 'YYYY-MM-DD hh:mm:ss' }),
    winston.format.printf(({ timestamp, level, message }) => {
        return `[${timestamp}] [${level}]: ${message}`
    })
)

const logger = winston.createLogger({
    level: 'info',
    format: logFormat,
    transports: [new winston.transports.Console()]
})

module.exports = logger;