const adminModel = require("../model/adminModel");

exports.createadmin = async(insertData)=>{
    return await insertData.save(insertData);
}

exports.authenticate = async(id)=>{
    return await adminModel.findById(id);
}

exports.deleteadmin = async(id)=>{
    return await adminModel.findByIdAndDelete(id);
}
