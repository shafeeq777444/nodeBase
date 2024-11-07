const http=require("http")
const url=require("url")
const server=http.createServer((req,res)=>{
   const rUrl=url.parse(req.url,true).pathname;
   if(rUrl=="/"){
    res.write("home page")
    res.end();
   }
   else if(rUrl=="/about"){
    res.write("about page")
    res.end();
   }
})
// .listen(8080) or
server.listen(9090)