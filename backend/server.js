const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');

db = "mongodb+srv://forum:forum@forum.z24pj.mongodb.net/forum?retryWrites=true&w=majority"

mongoose.connect(db).then(()=>{
    console.log("Database Connected")
}).catch((error)=>{
    console.log("Error in Connection : "+error);
})

app = express();
app.use(cors());

app.use(function (req, res, next) {   
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,DELETE,PUT');
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
  
  
app.use(express.json());

userschema = new mongoose.Schema({   // userschema
    email : String,
    username : String,
    password : String
})

const usermodel = mongoose.model('user',userschema);


questionschema = new mongoose.Schema({   //question schema
    questioner: String,
    question : String,
    answer : [{ans:String,answerer:String}]
})

const questionmodel = mongoose.model('question',questionschema);

const port = 3000;


app.get('/',(req,res)=>{   
    res.send('App is Running in Port:'+port);
});

//get all userdata
app.get('/getuser',(req,res)=>{
    usermodel.find().then((result)=>{
        res.send(result);
    })
})

//post answer
app.post('/addans',(req,res)=>{

    questionmodel.updateOne({question:req.body.question,questioner:req.body.questioner},{$push: {answer: {ans:req.body.ans,answerer:req.body.answerer} } } ).then((result)=>{
            res.send({status:1,message:"Answer Added"});
            console.log("answer added")
    }).catch((error)=>{
        res.send({status:0,message:"Cannot post Answer"});
        console.log("Answer not added")
    })
})


//get all questions
app.get('/allquestion',(req,res)=>{
    questionmodel.find().then((result)=>{
        res.send(result);
    })
})


//login request
app.post('/login',(req,res)=>{
    usermodel.find({email:req.body.email}).then((result)=>{
        if (result.length!=0){
            if(result[0].password==req.body.password){  //result is an array of object so indexing
                console.log("Login Success")
                res.send({status:1,userinfo:result[0]})
            }
            else{
                console.log("Invalid Input")
                res.send({status:0,message:"Invalid Input"})   //send only send object
            }
        }
        else{
            console.log("No Account Exist")
            res.send({status:0,message:"Account doesnot Exist"})
        }
        
    }).catch((err)=>{
        console.log("Error Occured: "+err)
    })
})


//create account request
app.post('/createacc',(req,res)=>{
    //console.log(req.body.username);
    const user = new usermodel({
        username : req.body.username,
        password : req.body.password,
        email : req.body.email
    });

    //console.log("Received in Server : "+data)

    usermodel.find({email:req.body.email}).then((result)=>{   // if same email exist
        if(result.length==0){
            user.save().then(()=>{
                res.send({message:"User Account Created",status:1})
                console.log("User Account Created");
            }).catch((error)=>{
                res.send({message:"Cannot Create Account (Check Server or Internet",status:0})
                console.log("Cannot Create Account : "+error);
            })
        }else{
            res.send({message:"Cannot Create Account : (Acount with same Email exists)",status:0});
            console.log("Cannot Create Account : (Acount with same Email exists)");
        }
    })
})

app.post('/addquestion',(req,res)=>{   // save question
    const question = questionmodel({
        questioner : req.body.userinfo.username,
        question : req.body.question.que
    })

    question.save().then(()=>{
        res.send({status:1,message:"Question Posted"})
        console.log("Question Posted")
    }).catch((error)=>{
        res.send({status:0,message:"Cannot Post Question"})
        console.log("Cannot Post Question"+error)
    })

})

app.post('/deletequestion',(req,res)=>{
    questionmodel.deleteOne({question:req.body.question,questioner:req.body.questioner}).then((result)=>{ 
      res.send({status:1,message:"Question Deleted ..."})
      console.log("QWuestion deleted")
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(port,()=>{
    console.log("App running in port:"+port);
});