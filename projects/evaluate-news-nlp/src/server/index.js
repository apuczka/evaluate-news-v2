const dotenv = require('dotenv').config({ path: '/Users/ppuczka/angela/fend-refresh-2019/projects/evaluate-news-nlp/src/.env' })
const fetch = require('node-fetch')

const API_KEY = process.env.API_KEY;
const baseURL = "http://api.meaningcloud.com/lang-4.0/identification?key=";
const json = '&of=json&txt=';

console.log(`Your API key is ${API_KEY}`);

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

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
    let url = `${baseURL}${API_KEY}&text=${text}`
    const getMeaningResponse = await fetch(url ,{
        method: 'POST'
    });
    try{
    const data = await getMeaningResponse.json();
        console.log(getMeaningResponse, data)
        res.send(getMeaningResponse);
    }catch(error){
        console.log("error", error);
}

});




