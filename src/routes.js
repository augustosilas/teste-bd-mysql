const express = require("express");
const router = express.Router();

const EmpregadoController = require("./controller/clienteController");

router.get("/empregados", EmpregadoController.index);
router.post("/empregados", EmpregadoController.create);
router.put("/empregados/:id", EmpregadoController.update);
router.delete("/empregados/:id", EmpregadoController.delete);

module.exports = router;
