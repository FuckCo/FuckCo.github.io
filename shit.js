document.getElementById('generateButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputField').value;
    const fileName = inputText.trim() ? `${inputText}.shit` : 'shitfile.shit'; // Default name if no input

    // Generate content with metadata and random id
    const randomContent = generateShitFileContent();

    // Create a Blob from the content
    const blob = new Blob([randomContent], { type: 'text/plain' });

    // Create a download link
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = fileName;
    downloadLink.textContent = `Download your .shit file here!`;

    // Show the download link
    document.getElementById('downloadLink').style.display = 'block';
    document.getElementById('downloadLink').innerHTML = '';
    document.getElementById('downloadLink').appendChild(downloadLink);
});

function generateShitFileContent() {
    // Randomly generate values for each field
    const author = "Author: " + getRandomAuthor();
    const date = "Date: " + new Date().toLocaleDateString();
    const time = "Time: " + new Date().toLocaleTimeString();
    const size = "Size: " + getRandomSize() + " KB";
    const place = "Place: " + getRandomPlace();
    const stupidId = "Stupid as fuck id: " + generateRandomId();

    // Combine all the data into the file content
    return `
        ${author}
        ${date}
        ${time}
        ${size}
        ${place}
        ${stupidId}

        *This file is 100% useless. Do not attempt to open it!*
    `;
}

// Function to generate a random author name (mocked for simplicity)
function getRandomAuthor() {
    const authors = ["John Doe", "Jane Doe", "Anonymous", "Silly Goose", "Your Mom"];
    return authors[Math.floor(Math.random() * authors.length)];
}

// Function to generate a random size (in KB)
function getRandomSize() {
    return Math.floor(Math.random() * 1000); // Random size between 0 and 999 KB
}

// Function to generate a random place
function getRandomPlace() {
    const places = ["Mordor", "The Moon", "A Trash Can", "Your Bedroom", "The Void"];
    return places[Math.floor(Math.random() * places.length)];
}

// Function to generate a random ID
function generateRandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomId = '';
    for (let i = 0; i < 10; i++) {
        randomId += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return randomId;
}
