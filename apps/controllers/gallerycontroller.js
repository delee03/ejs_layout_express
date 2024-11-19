// apps/controllers/admin/gallerycontroller.js
exports.getGalleryPage = (req, res) => {
    res.render("gallery", { title: "Gallery Page" });
};
