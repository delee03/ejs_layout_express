// aboutcontroller.js
exports.getAboutPage = (req, res) => {
    res.render("about", { title: "About Page" });
};
