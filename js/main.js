function myFunction() {


    var x = document.getElementById("sideMenu");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }


    var y = document.getElementById("logo-area");
    if (y.style.display === "none") {
        y.style.display = "inline-block";
    } else {
        y.style.display = "none";
    }


}



function myData(x) {
    if (x.matches) { // If media query matches
        document.getElementById("logo-area").style.display.margin.width = "block,  auto, 100%";
    } else {
        document.getElementById("logo-area").style.display = "inline-block";;
    }
}

var x = window.matchMedia("(max-width: 700px)")
myData(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes