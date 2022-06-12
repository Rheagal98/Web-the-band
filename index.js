var header = document.getElementById("header");
var menu_bar = header.querySelector("#menu-bar");

const header_height = header.clientHeight;

menu_bar.onclick = function() {

    var isClose = header.clientHeight === header_height;
    console.log(isClose)
    if (isClose) {
        header.style.height = "auto";
    } else {
        header.style.height = null;
    }
}

var nav_li =document.querySelectorAll('#nav >li a');
console.log(nav_li)

nav_li.forEach(function(item) {

    item.onclick = function(event) { 

        var is_subnav = this.nextElementSibling && this.nextElementSibling.className === "subnav";
        if (is_subnav) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
})