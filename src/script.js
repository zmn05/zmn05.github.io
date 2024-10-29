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
const themeSwitcher = document.getElementById('theme-switcher');

// Event listener for theme switching link
if (themeSwitcher) {
    themeSwitcher.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default action for the anchor tag

        // Toggle the theme on the body element
        document.body.classList.toggle('light-theme');

        // Toggle red to blue for theme switch
        const elementsToToggle = document.querySelectorAll('.red-theme, nav a, h1, h2, h3, h4, .role-badge, #experience a');
        elementsToToggle.forEach(element => {
            if (document.body.classList.contains('light-theme')) {
                element.classList.remove('red-theme');
                element.classList.add('blue-theme');
            } else {
                element.classList.remove('blue-theme');
                element.classList.add('red-theme');
            }
        });

        // Save the user's preference to localStorage
        const currentTheme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
        localStorage.setItem('theme', currentTheme);
    });
}

// Set initial theme based on user's saved preference
window.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme === 'light') {
        document.body.classList.add('light-theme');
        const elementsToToggle = document.querySelectorAll('.red-theme');
        elementsToToggle.forEach(element => {
            element.classList.remove('red-theme');
            element.classList.add('blue-theme');
        });
    }
});