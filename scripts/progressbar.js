window.onscroll = function () {
    myFunction2()
};

function myFunction2() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

function myFunction() {
    var element = document.body;
    // var element2 = document.getElementById("card");
    var element3 = document.getElementById("footer");
    element.classList.toggle("dark-mode");
    // element2.classList.toggle("card");
    element3.classList.toggle("dark-mode");
}