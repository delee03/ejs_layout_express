// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(
        document.getElementById("googleMap"),
        mapProp
    );
}

// // bắt sự kiện click vào nav-item hiển thị class active và bỏ class active của các nav-item khác

document.addEventListener("DOMContentLoaded", function () {
    var navItems = document.querySelectorAll(".nav-item");

    // Lấy đường dẫn hiện tại
    var currentPath = window.location.pathname;

    // Lặp qua tất cả các nav-item để kiểm tra và thêm class active
    navItems.forEach(function (navItem) {
        var link = navItem.querySelector("a");

        if (link && link.getAttribute("href") === currentPath) {
            navItem.classList.add("active");
        }
        // } else {
        //     navItem.classList.remove("active");
        // }
    });
});
