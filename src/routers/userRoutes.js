const  { Router } = require("express");
const userController = require("../controllers/userController");
 
const router = Router();
 
router.get("/", (req, res) => userController.getAll(req, res));
 
router.post("/", (req, res) => userController.create(req, res));
 
router.delete("/:id", (req, res) => userController.delete(req, res));
 
router.put("/:id", (req, res) => userController.update(req, res));

module.exports = router;