document.addEventListener('DOMContentLoaded', function () {
    const iosButton = document.getElementById('iosButton');
    const androidButton = document.getElementById('androidButton');
    const iosInstructions = document.getElementById('iosInstructions');
    const androidInstructions = document.getElementById('androidInstructions');
    const buttonContainer = document.getElementById('buttonContainer');
    const backButton = document.getElementById('backButton');

    // Show iOS instructions and adjust buttons
    iosButton.addEventListener('click', function () {
        iosInstructions.classList.remove('hidden');
        iosInstructions.classList.add('active');
        androidInstructions.classList.remove('active');
        androidInstructions.classList.add('hidden');
        buttonContainer.classList.add('back-shown');
        backButton.classList.remove('hidden');
        iosButton.classList.add('hidden');
        androidButton.classList.add('hidden');
    });

    // Show Android instructions and adjust buttons
    androidButton.addEventListener('click', function () {
        androidInstructions.classList.remove('hidden');
        androidInstructions.classList.add('active');
        iosInstructions.classList.remove('active');
        iosInstructions.classList.add('hidden');
        buttonContainer.classList.add('back-shown');
        backButton.classList.remove('hidden');
        iosButton.classList.add('hidden');
        androidButton.classList.add('hidden');
    });

    // Handle the Back button
    backButton.addEventListener('click', function () {
        iosInstructions.classList.add('hidden');
        iosInstructions.classList.remove('active');
        androidInstructions.classList.add('hidden');
        androidInstructions.classList.remove('active');
        buttonContainer.classList.remove('back-shown');
        backButton.classList.add('hidden');
        iosButton.classList.remove('hidden');
        androidButton.classList.remove('hidden');
    });
});
