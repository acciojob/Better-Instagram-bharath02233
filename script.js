const parent = document.getElementById("parent");
let draggedElement = null;

// Add event listeners to each image div
document.querySelectorAll(".image").forEach((image) => {
    image.addEventListener("dragstart", (event) => {
        draggedElement = event.target;
        event.dataTransfer.setData("text/plain", ""); // Required for Firefox
    });

    image.addEventListener("dragover", (event) => {
        event.preventDefault(); // Allows drop
    });

    image.addEventListener("drop", (event) => {
        event.preventDefault();

        if (draggedElement && draggedElement !== event.target) {
            // Swap the positions of the dragged and target elements
            let temp = draggedElement.innerHTML;
            draggedElement.innerHTML = event.target.innerHTML;
            event.target.innerHTML = temp;
        }
    });
});
