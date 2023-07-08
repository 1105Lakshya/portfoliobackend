const express=require("express");
var nodemailer = require("nodemailer");
var cors = require('cors')
const app=express();


require("dotenv").config();

console.log(process.env);



app.listen("4000",()=>{
    console.log("server started on port 4000");
});
var bodyParser = require('body-parser')


app.use(bodyParser.json())

app.use(cors());

app.get("/",(req,res)=>{
    res.send("hi how hello")
})

app.post("/",(req,res)=>{

  // console.log(req.body);

    console.log(`message sent by ${req.body.name}`)

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "2kumarlakshya.1973@gmail.com",
          pass: "ulnmmlnuarrgfumg"
        }
      });
      
      var mailOptions = {
        from: req.body.email,
        to:" kumarlakshya.1973@gmail.com",
        subject: req.body.subject,
        text:`${req.body.email} person with this email and name==>${req.body.name} sent and message to you that is ${req.body.message}`
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
        res.json({"error":"error"});
     }else{
            console.log("Message sent: " + response.message);
        res.json({"sent":"true"});
         }
      });


      res.json({"done":"done"});



     



})


