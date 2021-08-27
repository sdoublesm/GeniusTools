
/*  ✦ made by @sdoublesm in 2021. ×‿×  */ 


/* ---- Tabs -------------------------- */


function openTab(evt, tabName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
} 


/* ---- zero-width space -------------- */

var zero = "​"

function copyText() {
  /* Get the text field */
  var tocopyText = document.getElementById("input");

  /* Select the text field */
  tocopyText.select();
  tocopyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");

  /* Alert the copied text */
  /*alert("Copied the text: " + tocopyText.value);*/
} 


function resetText() {
  document.getElementById("input").value = zero;
}

/* ----------------------------------- */
