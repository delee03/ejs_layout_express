// index.js (trong thư mục admin)
const express = require("express");
const router = express.Router();

const homeController = require("./homecontroller");
const galleryController = require("./gallerycontroller");
const aboutController = require("./aboutcontroller");

router.get("/", homeController.getHomePage);

// Tuyến đường cho trang gallery
router.get("/gallery", galleryController.getGalleryPage);

// Tuyến đường cho trang about
router.get("/about", aboutController.getAboutPage);

module.exports = router;
