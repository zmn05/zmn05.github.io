// Time Based Greeting
window.addEventListener('DOMContentLoaded', function () {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();

    // Initialize greeting message
    let greetingMessage;

    // Determine the greeting based on the current hour
    if (currentHour < 12) {
        greetingMessage = 'Good Morning,';
    } else if (currentHour < 17) {
        greetingMessage = 'Good Afternoon,';
    } else {
        greetingMessage = 'Good Evening,';
    }

    // Set greeting to precede welcome message
    if (greetingElement) {
        greetingElement.textContent = greetingMessage;
    }
});

// Animate Welcome Text
window.addEventListener('DOMContentLoaded', function () {
    const welcomeElement = document.getElementById('welcome-text');
    const welcomeText = 'Welcome to My Website!';
    let charIndex = 0;

    // Typing effect function to show one character at a time
    function typeText() {
        if (charIndex < welcomeText.length) {
            welcomeElement.textContent += welcomeText.charAt(charIndex);
            charIndex++;
            setTimeout(typeText, 105); // Adjust typing speed here
        }
    }

    // Call the typing effect function
    if (welcomeElement) {
        typeText();
    }
})


// Theme Switcher
