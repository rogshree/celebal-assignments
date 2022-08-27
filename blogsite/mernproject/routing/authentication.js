const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const authofuser = require('../middleware/authofuser');
const router = express.Router();
require('../database/mongoconnection')
const User = require('../schema/userSchema')







router.get('/',(req,res)=>{
    res.send("Hello from router");
});




router.post('/register', async (req,res)=>{

    const { name, email, password, confirm} = req.body;
   
    if(!name || !email || !password || !confirm){ 
        return res.status(400).json({error:"Plz fill the fields properly" });
    }
    try{
   const userExist =  await User.findOne({email:email})
     if(userExist){
            return res.status(422).json({error:"user already exist" });
        }
        else if(password!=confirm)
        {
            return res.status(423).json({error:"password not matched" });
        }
        else{
        const user = new User({name, email, password, confirm});

        const userRegister = await user.save()
            if(userRegister)
            {
                res.status(201).json({message:"user registered successfuly"});
                
            }
            else{
                res.status(500).json({error:"failed to register"});
            }
        }
} catch(err) {
    console.log(err);
}
});





router.post('/signin', async (req,res)=>{
    let token;
    const { email, password} = req.body;
    if(!email ||!password)
    {
        res.status(400).send({error:"Please fill the data"})
    }
    else{try{

    const userLogin = await User.findOne({email:email})
    if(!userLogin){
        res.status(422).json({error:"Invalid Credentials"});
    }
    else{
        const isMatch = await bcrypt.compare(password, userLogin.password)
    if(!isMatch){
        res.status(422).json({error:"Invalid Credentials"});
    }
   else{
     token = await userLogin.generateAuthToken();
    res.cookie("jwttoken",token,{
        httpOnly:true
    });
    res.json({message:"user signin success"});
}
}
 }catch(err){
    console.log(err);
 }
}
});








    router.get('/myblogsdata',authofuser,async (req,res)=>{
    res.status(200).send(req.rootUser);
});






    router.post('/blogsupload',authofuser,async (req,res)=>{
    try{
        const { blogtitle, blogcontent } = req.body;
    if(!blogtitle || !blogcontent)
    {
        console.log("error in writing blog");
        return res.status(400).json({ error: "plz write the blog correctly"});
    }
    else{
    const userContact = await User.findOne({_id:req.userID})
    if(userContact)
    {
        const userBlog = await userContact.addMessage(blogtitle, blogcontent);
        await userContact.save();
        res.status(201).json({message:"Your Blog saved successfully"});
    }
}
}catch(error){
    console.log(error);
}
});


router.get('/theblogs',async (req,res)=>{
    req.change = await User.find()
    res.status(200).send(req.change);
});


router.get('/loggingout',authofuser,(req,res)=>{
    res.clearCookie('jwttoken',{path:'/'});
    res.status(200).send("user logout");
})
module.exports = router;