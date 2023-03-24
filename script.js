var slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("foto");
    var dots = document.getElementsByClassName("mini");
    if (i > x.length) { slideIndex = 1 }
    if (i < 1) { slideIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("selected", " ");
    }
    x[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " selected";
}