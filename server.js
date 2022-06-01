const express = require('express')
const app = express() // we're using express and storing it in APP .. Very common in express
const PORT = 8000
const rappers = { // created an object
    '21 savage':{
        'age':29,
        'birthName':'Shéyaa Bin Abraham-Joseph',
        'birthLocation':'London, England'
    },
    '2 chainz':{
        'age':29,
        'birthName':'Tauheed K. Epps',
        'birthLocation':'College Park, Georgia'
    },
    'dylan':{
        'age':32,
        'birthName':'Dylan From Da Band',
        'birthLocation':'Jamaica, Jamaica'
    },
}

// I want to setup my server to listen and generate a response
app.get('/',(request, response)=>{
    response.sendFile(__dirname + '/index.html') // Start whereever server.js is then find index.html
})

app.get('/api/:rapperName', (request, response)=>{  //rapperName is the query param
    const rappersName = request.params.rapperName.toLowerCase() // whatever is typed is will be lowercase 
    if(rappers[rapperName]){
        response.json(rappers[rappersName]) //if rappers name exists, respond with their info
    }else{
        response.json(rappers['dylan']) //else respond with this
    }
    // response.json(rappers) // to send JSON
})

app.listen(PORT, ()=>{
    console.log(`The server is running on ${PORT}! You better go catch it!`)
})