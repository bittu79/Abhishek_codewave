const services = require("../services/userServices");
const dbModel = require("../model/userModel");

exports.getUser = async(req,res)=>{
    if(!req.query.id){
        services.find().then(data=>{
            res.status(200).send({
                message:data
            })
        })
        .catch(err=>{
            res.status(500).send({
                message:err.message || "some error occured while retriving data"
            })
        })
    }
    else{
        const id = req.query.id;
        
        services.findById(id).then(data=>{
            if(!data){
                res.status(400).send({
                    message:data
                })
            }
            else{
            res.send(data)
            }
        }).catch(err=>{
            res.status(500).send({
                message: "some error occured while retriving data"
            })
        })
    }
}


exports.createUser = async(req,res)=>{
    if(!req.body){
       return
    }
    const insertData = new dbModel({
        name:req.body.name,
        city:req.body.city
    })

    services.createuser(insertData).then(data=>{
        res.send({message: "Data Inserted Successfully"})
    })
    .catch(err =>{
        res.status(500).send({
            message:err.message || "some error occured while create operation"
        })
    })       

}


exports.updateUser = async (req,res)=>{
    const id = req.query.id;
    services.updateuser(id,req.body).then(data=>{
        res.send({
            message:"User Updated Successfully"
        })
    })
    .catch(err=>{
        res.status(500).send({
            message:"Some error occured while updating"
        })
    })
}

exports.deleteUser = async (req,res)=>{
    const id = req.query.id;
    services.deleteuser(id).then(data=>{
        res.send({
            message:"User Deleted Successfully"
        })
    })
    .catch(err=>{
        res.status(500).send({
            message:"Some error occured while delteting"
        })
    })
}