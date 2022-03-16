const express = require('express');
const router = express.Router();
const User = require('../models/user');

// get a list of users from the database
router.get('/users',async(req,res)=>{
  
    try{
        const users = await User.find();
        res.json(users);
      
    } catch(err){res.status(400).json({message:err.message});}
});

// add a new user to database
router.post('/users',async(req,res)=>{
  
    const user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
    });
    try{
        const newUser = await user.save();
        res.status(201).json({newUser});
    } catch (err){res.status(500).json({message:err.message});}

});

// update a user in the database
router.put('/users/:id',async(req,res)=>{
 
    try{
    let user = await User.findById(req.params.id);

     if(user !== null){
     user.username = req.body.username;
     user.password = req.body.password;
     user.email = req.body.email;
     const updatedUser = await user.save();
     res.json({message : "user data is updated"});
    }
    } catch(err){ res.status(500).json({message:err.message});    }
  
});

// delete a user in the database
router.delete('/users/:id',async(req,res)=>{

    try{
        let user = await User.findById(req.params.id);
        await user.deleteOne();
        res.json({message : "user has been deleted"});
    } catch (err){
        res.status(500).json({message: err.message});
    }
});

module.exports = router;