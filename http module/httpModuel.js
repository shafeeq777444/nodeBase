const http=require("http")
const url=require("url")
const server=http.createServer((req,res)=>{
    res.write("hello server");
    res.end()
})
// .listen(8080) or
server.listen(9090)