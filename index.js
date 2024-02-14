const express = require('express')
const app = express()
const port = 8000
var cors = require('cors')
const bodyParser = require('body-parser');
const { chatgptfunction } = require('./chatgpt/chatgpt');
const { geminifunction, geminifunction_multichat } = require('./gemini/gemini');

app.use(cors())

app.use(bodyParser.json());


app.post('/chatgpt', (req, res) => {
    chatgptfunction(req.body).then((response)=>{
        res.send(response)
    })
})

app.post('/geminiapi',(req,res)=>{
    console.log(req.body);
    geminifunction_multichat(req.body).then((response)=>{
        res.send(response);
    })
})

app.get('/',(req,res)=>{
    geminifunction().then((response)=>{
        res.send(response)
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})