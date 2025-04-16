// Change text content dynamically when the "Change Text" button is clicked
document.getElementById("changeTextButton").addEventListener("click", function() {
    document.getElementById("paragraph").textContent = "There are other fun units you can explore!";
});

// Modify CSS styles when the "Change Color" button is clicked
document.getElementById("changeColorButton").addEventListener("click", function() {
    document.getElementById("header").style.color = "green";
});

// Add a new element when the "Add Element" button is clicked
document.getElementById("addElementButton").addEventListener("click", function() {
    const newElement = document.createElement("div");
    newElement.textContent = "we got this lets keep going!";
    newElement.style.backgroundColor = "lightyellow";
    newElement.style.padding = "10px";
    newElement.style.marginTop = "10px";
    
    document.getElementById("container").appendChild(newElement);
});
