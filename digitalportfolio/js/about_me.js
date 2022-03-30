function myFunction() {
    /* Get the text field */
    var copyText = "kangkhen182@gmail.com";
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText);
  
    /* Alert the copied text */
    alert("Copied to clipboard! 📋");
  }