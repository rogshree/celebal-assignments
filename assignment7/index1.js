const fs = require("fs");
const http = require("http");
fs.mkdir("Shreyansh",(err)=>{});//comment out other commands while running this because this make dir asynchronously
fs.writeFile("./Shreyansh/biodata.txt","Shreyansh here.",(err)=>{});//comment out other commands while running this because this write in file asynchronously
fs.appendFile("./Shreyansh/biodata.txt"," I live in jaipur. I am persuing Btech in CSE branch from GIT.",(err)=>{});//comment out other commands while running this because this append in file asynchronously
const data = fs.readFileSync("./Shreyansh/biodata.txt","utf-8");//run this after above code executed
console.log(data);

const server = http.createServer((req,res)=>{
    res.end(data);
})

server.listen(5000,()=>{
    console.log("Server listening on 5000......");
})