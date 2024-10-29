// Time Based Greeting
window.addEventListener('DOMContentLoaded', function () {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();

    // Initialize greeting message
    let greetingMessage;

    // Determine the greeting based on the current hour
    if (currentHour < 12) {
        greetingMessage = 'Good Morning';
    } else if (currentHour < 18) {
        greetingMessage = 'Good Afternoon';
    } else {
        greetingMessage = 'Good Evening';
    }

    // Set greeting to precede welcome message
    if (greetingElement) {
        greetingElement.textContent = greetingMessage;
    }

});