const express = require('express')
const server = express()
const nunjucks = require('nunjucks')

server.set ("view engine","html")
nunjucks.configure ("views",{
    express:server
})
server.listen (5000,function(){
    console.log("hello word!!!")
    server.get("/", function(req,res){
        return res.render ("index")
    })

    
})