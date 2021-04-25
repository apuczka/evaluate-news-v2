const FormData = require('form-data');
var fs = require('fs');

const formdata = new FormData();

const dotenv = require('dotenv').config({ path: '/Users/ppuczka/angela/fend-refresh-2019/projects/evaluate-news-nlp/src/.env' })
const fetch = require('node-fetch')
const cors = require('cors')
const express = require('express')

const API_KEY = process.env.API_KEY;
const baseURL = "https://api.meaningcloud.com/sentiment-2.1";
const json = '&of=json&txt=';

formdata.append("key", API_KEY);
formdata.append("txt", "Zara is great, lots of stylish and affordable clothes, shoes, and accessories.");

console.log(`Your API key is ${API_KEY}`);

var path = require('path')

const mockAPIResponse = require('./mockAPI.js')

const app = express()
app.use(cors())

// app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/zara', function (req, res) {
    console.log("test log")
    res.send(mockAPIResponse)
})

app.post('/zara', async(req, res) => {
    let text = "Zara is great, lots of stylish and affordable clothes, shoes, and accessories."
    // let url = `${baseURL}${API_KEY}&text=${text}`
    // console.log(url)
    console.log('test-----')
    const getMeaningResponse = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
    };
    try{
    const data = await fetch(baseURL, getMeaningResponse)
        .then(res => ({
        status: res.status, 
        body: res.json()
        }))
        .then((status, body) => console.log(status, body))
        console.log(getMeaningResponse, data)
        res.send(data);
    } catch(error){
        console.log("error", error);
}
});



