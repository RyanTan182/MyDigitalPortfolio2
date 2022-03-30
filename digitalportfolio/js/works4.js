// Get the modal
var modal4 = document.getElementById("myModal_fourth_box");

// Get the button that opens the modal
var btn4 = document.getElementById("fourth-box-modal");

// Get the <span> element that closes the modal
var span4 = document.getElementsByClassName("close4")[0];

// When the user clicks the button, open the modal 
btn4.onclick = function() {
    modal4.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span4.onclick = function() {
    modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it




var slideIndex4 = 0;
showSlides4();
//add the global timer variable
var slides4,dots4,timer4;

function showSlides4() {
    var i;
    slides4 = document.getElementsByClassName("mySlides4");
    dots4 = document.getElementsByClassName("dot4");
    for (i = 0; i < slides4.length; i++) {
       slides4[i].style.display = "none";  
    }
    slideIndex4++;
    if (slideIndex4> slides4.length) {slideIndex4 = 1}    
    for (i = 0; i < dots4.length; i++) {
        dots4[i].className = dots4[i].className.replace(" active", "");
    }
    slides4[slideIndex4-1].style.display = "block";  
    dots4[slideIndex4-1].className += " active";
    //put the timeout in the timer variable
    timer4 = setTimeout(showSlides4, 4000); // Change image every 8 seconds
}

function plusSlides4(position) {
    //clear/stop the timer
    clearTimeout(timer4);
    slideIndex4 +=position;
    if (slideIndex4> slides4.length) {slideIndex4 = 1}
    else if(slideIndex4<1){slideIndex4 = slides4.length}
    for (i = 0; i < slides4.length; i++) {
       slides4[i].style.display = "none";  
    }
    for (i = 0; i < dots4.length; i++) {
        dots4[i].className = dots4[i].className.replace(" active", "");
    }
    slides4[slideIndex4-1].style.display = "block";  
    dots4[slideIndex4-1].className += " active";
    //create a new timer
    timer4 = setTimeout(showSlides4, 4000);
}

function currentSlide4(index) {
    //clear/stop the timer
    clearTimeout(timer4);
    if (index> slides4.length) {index = 1}
    else if(index<1){index = slides4.length}
    //set the slideIndex with the index of the function
    slideIndex4 = index;
    for (i = 0; i < slides4.length; i++) {
       slides4[i].style.display = "none";  
    }
    for (i = 0; i < dots4.length; i++) {
        dots4[i].className = dots4[i].className.replace(" active", "");
    }
    slides4[index-1].style.display = "block";  
    dots4[index-1].className += " active";
    //create a new timer
    timer4 = setTimeout(showSlides4, 4000);
}