// Function to copy text to the clipboard
function textToClipboard(text) {
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("Copy Done");
}

// Get the content of an element with the class "copyable-text" (assuming there's at least one such element)
var numbers = document.getElementsByClassName("copyable-text")[1].innerHTML;

// Get the text content of an element with the class "_3W2ap" (assuming there's at least one such element)
var grpname = document.getElementsByClassName("_3W2ap")[0].innerText;

// Create a string combining the group name and numbers with HTML tags
var x = '<h3>';
var y = '</h3>';
var data = x + grpname + y + numbers;

// Call the textToClipboard function with the combined data
textToClipboard(data);
