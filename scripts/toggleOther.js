function toggleOtherAccommodations() {
    var checkBox = document.getElementById("accommodations");
    var textArea = document.getElementById("otherAccommodationsTextArea");
    if (checkBox.checked) {
        textArea.style.display = "block";
    } else {
        textArea.style.display = "none";
    }
}

// this is what toggles Other Accommodations by manipulation CSS to show and hide the comment box. 