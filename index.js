const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('home')
})

const mysql = require('mysql2/promise')
const init = async() => {
    const conn = await mysql.createConnection({
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'futiba'
    })
    const [rows, fields] = await conn.execute('select * from users')
    console.log(rows)
}
init()

app.listen(3000, err => {
    if(err)
        console.log('Ocorreu um erro ao iniciar servidor...')
    else console.log('Servidor rodando...')
})