const dbModel = require("../model/userModel");
 
exports.findById = async (id)=>{
    return await dbModel.findById(id)
}
exports.find = async (id)=>{
    return await dbModel.find()
}

exports.createuser = async (insertData)=>{
    return await insertData.save(insertData)
}

exports.updateuser = async (id,data)=>{
    return await dbModel.findByIdAndUpdate(id,data)
}

exports.deleteuser = async (id)=>{
    return await dbModel.findByIdAndDelete(id);
}