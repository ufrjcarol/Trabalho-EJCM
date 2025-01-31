const { Router } = require("express");
const router = Router();

const ProdutoController = require("../controllers/produtocontroller")

router.post("/produto", ProdutoController.create)
router.get("/produto", ProdutoController.read)
router.put("/produto", ProdutoController.update)
router.delete("/produto", ProdutoController.delete)

module.exports = router;
