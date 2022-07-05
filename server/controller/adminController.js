const adminservices = require("../services/adminServices");
const userservices = require("../services/userServices");

const adminModel = require("../model/adminModel");
const userModel = require("../model/userModel");

exports.authenticateAdmin = async(req,res,next)=>{
    const id = req.query.id;
    if(req.query.id){
        adminservices.authenticate(id).then(data=>{
            next()
        }).catch(err=>{
            res.status(500).send({
                message:"only the admins are having access give correct id"
            })
        })
    }
    else{
        res.status(500).send({
            message:"only the admins are having access give admin id for authentication"
        })
    }
}

exports.createAdmin = async(req,res)=>{
    const insertData = new adminModel({
        username:req.body.username,
        password:req.body.password
    })
    
    adminservices.createadmin(insertData).then(data=>{
        res.status(200).send({
            message:data
        })
    }).catch(err=>{
        res.send({
            message:"something went wrong"
        })
    })

}

exports.getAllUsers = async (req,res)=>{
    userservices.find().then(data=>{
        res.status(200).send({
            message:data
        })
    }).catch(err=>{
        res.status(500).send({
            message:"No Data"
        })
    })
}

exports.updateUsers = async (req,res)=>{
    const id = req.query.userid
    userservices.updateuser(id,req.body).then(data=>{
        res.status(200).send({
            message:data
        })
    }).catch(err=>{
        res.status(500).send({
            message:"wrong userid to updating"
        })
    })
}

exports.deleteUser = async (req,res)=>{
    const id = req.query.userid
    userservices.deleteuser(id).then(data=>{
        res.status(200).send({
            message:"User deleted Successfully"
        })
    }).catch(err=>{
        res.status(500).send({
            message:"wrong user id to delete"
        })
    })
}

exports.deleteAdmin = async (req,res)=>{
    const id = req.query.deleteadminid
    if(id){
        adminservices.deleteadmin(id).then(data=>{
            res.status(200).send({
                message:"Admin deleted Successfully"
            })
        }).catch(err=>{
            res.status(500).send({
                message:"wrong id to delete"
            })
        })
    }
    else{
        res.status(500).send({message:"Give the id to delete"})
    }
}