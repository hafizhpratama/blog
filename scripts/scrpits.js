function myFunction() {
    var element = document.body;
    var element2 = document.getElementById("card");
    var element3 = document.getElementById("footer");
    var element4 = document.getElementById("font-1");
    var element5 = document.getElementById("font-2");
    element.classList.toggle("dark-mode");
    element2.classList.toggle("card");
    element3.classList.toggle("dark-mode");
    element4.classList.toggle("font-black");
    element5.classList.toggle("font-black");
}