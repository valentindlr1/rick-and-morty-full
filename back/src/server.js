// var http = require("http")
const express = require("express")
const router = require("./routes/index")
const cors = require("cors")
const morgan = require("morgan")
// var data = require("./utils/data")
// var fs = require("fs")

const server = express()
const PORT = 3001
server.use(cors())
server.use(morgan())
server.use(express.json())
server.use("/", router)



server.listen(PORT, ()=>{console.log('Server raised in port ' + PORT);})

// function cb(req, res){
//     console.log(`Server raised in port ${PORT}`);
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     let id = Number(req.url.split("/").at(-1));

//     if(req.url.includes('onsearch')){
//         getCharById(res, id)    
//     }
//     if(req.url.includes('detail')){
//       getCharDetail(res, id)
//     }

// }

//   module.exports =

//     http.createServer(cb).listen(PORT, "localhost");
  

    // let char = {}
        
        // data.forEach(character => {
        //   character.id === id ? char = character : null;
        // })
        
        // if (char === {}){
        //   res.writeHead(404, { 'Content-type': 'text/plain' }).end("not found")
        // } else {
        //  res.writeHead(200, { 'Content-type': 'application/json' }).end(JSON.stringify(char))
        //  return;
        // }
        