const express = require("express");

const router = express.Router();

const {
  authenticateUser,
  authorizePermission,
} = require("../middleware/authentication");
const {
  createProduct,
  getAllProducts,
  uploadImage,
  getSingleProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
const { getSingleProductReviews } = require("../controllers/reviewController");

// router
//   .route("/")
//   .post([authenticateUser, authorizePermission("admin")], createProduct)
//   .get(getAllProducts);

router
  .route("/")
  .post([authenticateUser, authorizePermission("admin")], createProduct)
  .get(getAllProducts);

router
  .route("/uploadImage")
  .post([authenticateUser, authorizePermission("admin")], uploadImage);

router
  .route("/:id")
  .get(getSingleProduct)
  .patch([authenticateUser, authorizePermission("admin")], updateProduct)
  .delete([authenticateUser, authorizePermission("admin")], deleteProduct);

router.route("/:id/reviews").get(getSingleProductReviews);
module.exports = router;
