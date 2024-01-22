const express = require('express');
const app = express()
const bodyparser = require('body-parser');

app.use(express.static('view/static'))
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())

app.get("/", (req, res)=>{
    res.render("index.html")
})

app.post("/submeter", (req, res)=>{
    res.send({
        
    })
})






const port = process.env.PORT || 9090
app.listen(port, ()=>{
    console.log(`App rodando na porta ${port}`)
})