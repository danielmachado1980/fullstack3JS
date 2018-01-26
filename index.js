const express = require('express')
const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send('home')
})

app.listen(3000, err => {
    if(err)
        console.log('Ocorreu um erro ao iniciar servidor...')
    else console.log('Servidor rodando...')
})