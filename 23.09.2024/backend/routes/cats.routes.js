const express = require("express");
const router = express.Router();
const catsController = require("../controllers/cats.controllers.js");
const {
  catsRouteMiddleware,
  catsGetRouteMiddleware,
} = require("../middlewares/cats.middlewares.js");

router.use(catsRouteMiddleware);

// /cats/ Get endpoint level middleware
router.get("/", catsGetRouteMiddleware, catsController.read);
router.post("/:name", catsController.create);
router.put("/:name", catsController.update);
router.delete("/:name", catsController.delete);

module.exports = router;