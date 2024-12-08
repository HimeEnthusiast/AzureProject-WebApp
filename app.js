const mssqlConnector = require('./src/database/mssql_connector')
const express = require('express')

const PORT = process.env.PORT || 8080

const app = express()

app.listen(PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
})
app.set('view engine', 'ejs')
app.use('/public', express.static('public'))

//Endpoints
app.get('/', async (req, res) => {
    let data = await mssqlConnector.selectAll()
    
    if(data == null) {
        res.render('home', { data : [] })
    } else {
        res.render('home', { data : data.recordset })
    }
})