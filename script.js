document.getElementById("change-roll-button").addEventListener("click", function() {
    const newRollNumber = prompt("Please enter your roll number:");
    if (newRollNumber) {
        document.getElementById("roll-number").innerText = newRollNumber;
    }
});
