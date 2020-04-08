const express = require("express");
const router = express.Router();

const EmpregadoController = require("./controller/clienteController");

router.get("/empregados", EmpregadoController.index);
router.post("/empregados", EmpregadoController.create);

module.exports = router;
