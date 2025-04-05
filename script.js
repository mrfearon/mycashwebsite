document.addEventListener('DOMContentLoaded', function() {
    const popup = document.getElementById('popup');
    const claimantName = document.getElementById('claimant-name');
    const cashDing = document.getElementById('cashDing');

    // List of random names
    const names = [
        "Ava W.",
        "Liam S.",
        "Emma R.",
        "Noah K.",
        "Olivia M.",
        "Ethan J.",
        "Sophia L.",
        "Mason P.",
        "Isabella T.",
        "James H."
    ];

    let lastName = ''; // To track the last name used

    // Function to get a random name that isn't the same as the last one
    function getRandomName() {
        let newName;
        do {
            newName = names[Math.floor(Math.random() * names.length)];
        } while (newName === lastName); // Keep picking until we get a different name
        lastName = newName; // Update the last name used
        return newName;
    }

    // Function to show the pop-up with a new name
    function showPopup() {
        const name = getRandomName();
        claimantName.textContent = `${name} claimed $750!`;
        popup.classList.remove('hidden');
        popup.classList.add('fade-in');
        cashDing.play();
    }

    // Show the first pop-up after a 1-second delay
    setTimeout(() => {
        showPopup();
    }, 1000);

    // Update the pop-up with a new name every 3 seconds
    setInterval(() => {
        // Hide the pop-up, then show it again with a new name
        popup.classList.add('hidden');
        setTimeout(() => {
            showPopup();
        }, 500); // Small delay to allow the fade-out effect
    }, 3000); // Repeat every 3 seconds
});