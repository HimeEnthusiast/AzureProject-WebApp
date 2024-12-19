const logger = require('../logger/logger')

const sql = require('mssql')
require('dotenv').config()

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    server: process.env.DB_SERVER,
    database: process.env.DB_NAME,
    authentication: { type: 'default' },
    options: { encrypt: true, trustServerCertificate: true }
}

async function selectAll() {
    try {
        await sql.connect(config)
        return await sql.query('SELECT * FROM [shop].[food];')
    } catch(err) {
        logger.error(`failed to query database; ${err}`)
    }
}

module.exports = { selectAll }