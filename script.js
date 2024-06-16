document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Formular-Daten sammeln
        const formData = new FormData(contactForm);

        // FormSubmit URL
        const formSubmitUrl = 'https://formsubmit.co/your_email_here';

        // Fetch-Anfrage für das FormSubmit
        fetch(formSubmitUrl, {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            // Erfolg! Weiterleitung zur Erfolgsseite
            window.location.href = 'https://help.nandstudios.com/success';
        })
        .catch(error => {
            // Fehlerbehandlung, falls erforderlich
            console.error('Form submission error:', error);
        });
    });
});
