// Get the modal
var modal2 = document.getElementById("myModal_second_box");

// Get the button that opens the modal
var btn2 = document.getElementById("second-box-modal");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it




var slideIndex2 = 0;
showSlides2();
//add the global timer variable
var slides2,dots2,timer2;

function showSlides2() {
    var i;
    slides2 = document.getElementsByClassName("mySlides2");
    dots2 = document.getElementsByClassName("dot2");
    for (i = 0; i < slides2.length; i++) {
       slides2[i].style.display = "none";  
    }
    slideIndex2++;
    if (slideIndex2> slides2.length) {slideIndex2 = 1}    
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideIndex2-1].style.display = "block";  
    dots2[slideIndex2-1].className += " active";
    //put the timeout in the timer variable
    timer2 = setTimeout(showSlides2, 4000); // Change image every 8 seconds
}

function plusSlides2(position) {
    //clear/stop the timer
    clearTimeout(timer2);
    slideIndex2 +=position;
    if (slideIndex2> slides2.length) {slideIndex2 = 1}
    else if(slideIndex2<1){slideIndex2 = slides2.length}
    for (i = 0; i < slides2.length; i++) {
       slides2[i].style.display = "none";  
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[slideIndex2-1].style.display = "block";  
    dots2[slideIndex2-1].className += " active";
    //create a new timer
    timer2 = setTimeout(showSlides2, 4000);
}

function currentSlide2(index) {
    //clear/stop the timer
    clearTimeout(timer2);
    if (index> slides2.length) {index = 1}
    else if(index<1){index = slides2.length}
    //set the slideIndex with the index of the function
    slideIndex2 = index;
    for (i = 0; i < slides2.length; i++) {
       slides2[i].style.display = "none";  
    }
    for (i = 0; i < dots2.length; i++) {
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides2[index-1].style.display = "block";  
    dots2[index-1].className += " active";
    //create a new timer
    timer2 = setTimeout(showSlides2, 4000);
}