const fs =require("fs")
// -------------readFile------------------------
fs.readFile("./data.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }
    console.log(data);
})
// ----------------------writeFIle----------------
fs.writeFile("new2.txt","this is new file....",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("file is created");
})
// --------------------appendFile------------------------
fs.appendFile("new.txt","\n this is appended file.... ",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("file is created");
})
// -------------------rename-------------------------------
fs.rename("./check/work.txt","./work.txt",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("file renamed");
})
// ------------------unlink-------*delete*-------------------
fs.unlink("./check/data.txt",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("deleted");
})