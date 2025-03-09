// Theme
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
});

function applyTheme(theme) {
    const themeStyle = document.getElementById('theme-style');
    themeStyle.href = theme === 'dark' ? 'theme/dark.css' : 'theme/light.css';

    const themeIcon = document.getElementById('theme-icon');
    themeIcon.src = theme === 'dark' ? 'assets/sun.svg' : 'assets/moon.svg';
    themeIcon.alt = theme === 'dark' ? 'Dark Theme Icon' : 'Light Theme Icon';
}

function toggleTheme() {
    const currentTheme = localStorage.getItem('theme') || 'light';
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
}

// Hash
function generateAndCopyHash() {
    const inputText = document.getElementById('inputText').value;
    if (!inputText) {
        addMessageToConsole('Please enter string.', true);
        return;
    }

    const shaObj = new jsSHA("SHA3-512", "TEXT");
    shaObj.update(inputText);
    const hashHex = shaObj.getHash("HEX");

    navigator.clipboard.writeText(hashHex)
        .then(() => {
            addMessageToConsole('The hash value has been copied to the clipboard.');
        })
        .catch(err => {
            addMessageToConsole('Failed to copy to the clipboard: ' + err, true);
        });
}

function addMessageToConsole(message, isWarning = false) {
    const consoleElement = document.getElementById('console');
    const timestamp = new Date().toLocaleString('ja-JP', { hour12: false });
    const messageElement = document.createElement('p');
    messageElement.className = 'message';
    messageElement.innerText = `${timestamp} >> ${message}`;
    messageElement.style.color = isWarning ? '#FF4B00' : '#00B06B';

    consoleElement.prepend(messageElement);
}

document.getElementById('inputText').addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        generateAndCopyHash();
    }
});
