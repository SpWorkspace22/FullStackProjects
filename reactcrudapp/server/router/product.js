const express = require("express")
const {getAllProduct, createProduct, removeProduct,updateProduct } = require("../controller/product")

const router = express.Router()

router.route("/").get(getAllProduct).post(createProduct)
router.route("/:id").put(updateProduct).delete(removeProduct)

module.exports = router