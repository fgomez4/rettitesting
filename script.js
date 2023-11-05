function updateSliderValue(sliderId, displayId) {
    var slider = document.getElementById(sliderId);
    var display = document.getElementById(displayId);

    display.textContent = slider.value;
}

function openContactPage() {
    var name = document.getElementById('name').value;
    var phone = document.getElementById('phone').value;
    var income = document.getElementById('income').value;
    var creditScore = document.getElementById('creditScore').value;

    // You can use the collected data to customize the contact page or perform other actions.
    // For now, let's simply alert the user with the information.
    alert(`Thank you, ${name}!\n\nContact Details:\nPhone: ${phone}\nIncome: ${income}\nCredit Score: ${creditScore}`);
}
document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const toggleSwitch = document.getElementById('theme-switch');

    // Check the user's preference from localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.add(currentTheme);
    } else {
        // Set the initial theme based on user's preference or default to light
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        body.classList.add(prefersDarkMode ? 'dark-mode' : 'light-mode');
    }

    // Toggle between light and dark modes
    toggleSwitch.addEventListener('change', function () {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');

        // Save the user's preference to localStorage
        const theme = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';
        localStorage.setItem('theme', theme);
    });
});

