const express =  require("express");
const bodyParser = require("body-parser")
const app = express();


app.use(bodyParser.urlencoded({extended: true}));
// to pass the https request, and urlencoded gives us hte form data and we can tap into properties


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")

})


app.post('/', function(req, res){
    let  num1 = Number(req.body.n1);
    let  num2 = Number(req.body.n1);
    let result =  num1 + num2;


    res.send("The sum is  "  + result)
}) 


app.listen(3000, function(){
    console.log("Server is running on port 3000.")
}) 

