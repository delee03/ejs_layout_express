// homecontroller.js
exports.getHomePage = (req, res) => {
    res.render("home", { title: "Home Page" });
};
