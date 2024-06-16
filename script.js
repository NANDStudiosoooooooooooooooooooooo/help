document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const submitButton = document.getElementById('submitButton');
    const spinner = document.getElementById('spinner');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Button deaktivieren und Spinner anzeigen
        submitButton.classList.add('disabled');
        spinner.style.display = 'inline-block';

        const formData = new FormData(contactForm);
        const formSubmitUrl = 'https://formsubmit.co/help@nand-studios.com';
        const successRedirectUrl = 'https://help.nand-studios.com/success';

        fetch(formSubmitUrl, {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            // Erfolgs-URL, zu der der Benutzer weitergeleitet werden soll
            window.location.href = successRedirectUrl;
        })
        .catch(error => {
            console.error('Form submission error:', error);
            // Button und Spinner wieder zurücksetzen im Fehlerfall
            submitButton.classList.remove('disabled');
            spinner.style.display = 'none';
        });
    });
});
