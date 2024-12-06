const mssqlConnector = require('../NodeBackend/src/database/mssql_connector')
const express = require('express')

const app = express()

app.listen(80, () => {
    console.log("Server running on port 3000")
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