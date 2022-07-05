const express = require("express")
const controller = require("../controller/userController");
const adminController = require("../controller/adminController");


const route = express.Router();

//user api
route.post("/create",controller.createUser)
route.get("/read",controller.getUser);
route.put("/update",controller.updateUser);
route.delete("/delete",controller.deleteUser);

//admin api

route.post("/admin/create",adminController.authenticateAdmin,adminController.createAdmin);
route.get("/admin/getusers",adminController.authenticateAdmin,adminController.getAllUsers);
route.put("/admin/updateuser",adminController.authenticateAdmin,adminController.updateUsers);
route.delete("/admin/deleteuser",adminController.authenticateAdmin,adminController.deleteUser);
route.post("/admin/createUserByAdmin",adminController.authenticateAdmin,controller.createUser);
route.delete("/admin/deleteAdmin",adminController.authenticateAdmin,adminController.deleteAdmin);



module.exports = route;