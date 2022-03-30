// Get the modal
var modal3 = document.getElementById("myModal_third_box");

// Get the button that opens the modal
var btn3 = document.getElementById("third-box-modal");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
btn3.onclick = function() {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it




var slideIndex3 = 0;
showSlides3();
//add the global timer variable
var slides3,dots3,timer3;

function showSlides3() {
    var i;
    slides3 = document.getElementsByClassName("mySlides3");
    dots3 = document.getElementsByClassName("dot3");
    for (i = 0; i < slides3.length; i++) {
       slides3[i].style.display = "none";  
    }
    slideIndex3++;
    if (slideIndex3> slides3.length) {slideIndex3 = 1}    
    for (i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace(" active", "");
    }
    slides3[slideIndex3-1].style.display = "block";  
    dots3[slideIndex3-1].className += " active";
    //put the timeout in the timer variable
    timer3 = setTimeout(showSlides3, 4000); // Change image every 8 seconds
}

function plusSlides3(position) {
    //clear/stop the timer
    clearTimeout(timer3);
    slideIndex3 +=position;
    if (slideIndex3> slides3.length) {slideIndex3 = 1}
    else if(slideIndex3<1){slideIndex3 = slides3.length}
    for (i = 0; i < slides3.length; i++) {
       slides3[i].style.display = "none";  
    }
    for (i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace(" active", "");
    }
    slides3[slideIndex3-1].style.display = "block";  
    dots3[slideIndex3-1].className += " active";
    //create a new timer
    timer3 = setTimeout(showSlides3, 4000);
}

function currentSlide3(index) {
    //clear/stop the timer
    clearTimeout(timer3);
    if (index> slides3.length) {index = 1}
    else if(index<1){index = slides3.length}
    //set the slideIndex with the index of the function
    slideIndex3 = index;
    for (i = 0; i < slides3.length; i++) {
       slides3[i].style.display = "none";  
    }
    for (i = 0; i < dots3.length; i++) {
        dots3[i].className = dots3[i].className.replace(" active", "");
    }
    slides3[index-1].style.display = "block";  
    dots3[index-1].className += " active";
    //create a new timer
    timer3 = setTimeout(showSlides3, 4000);
}