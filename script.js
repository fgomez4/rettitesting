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
