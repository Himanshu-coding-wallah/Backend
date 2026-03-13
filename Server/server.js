const http = require('http')
const fs = require("fs")
const path = require('path')

const port = 3000

const server = http.createServer((req,res)=>{
    const filePath = path.join(__dirname, req.url === '/' ? "Index.html": req.url )
    console.log(filePath)

    const extName = String(path.extname(filePath).toLowerCase())

    const mimiTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.png': 'text/png',
    }

    const contentType = mimiTypes[extName] || 'application/octet-stream'

    fs.readFile(filePath, (err, content)=>{
        if(err){
            if(err.code === "ENOENT"){
                res.writeHead(404, {"content-type": 'text/html'})
                res.end('404: file not found bruh !! ')
            }
        }else{
            res.writeHead(200, {"content-type" : contentType})
            res.end(content, "utf-8")
        }
    })
})

server.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
})