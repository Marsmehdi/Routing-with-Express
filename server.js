const express = require('express')
const app = express()

app. use(date=(req,res,next)=>{
let requestAt =new Date().getHours()
console.log(requestAt)
if ((requestAt >17) || (requestAt < 8)){
    res.sendFile(__dirname +'/public/ourservices.html')
}
else{next()}

})
app.get('/home',(req,res)=>{
    res.sendFile(__dirname +'/public/home.html')
})
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname +'/public/contact.html')
})

app.listen(3000,(err)=>{
    if (err) console.log("server is not running")
    else console.log("server is running on port 3000")
})