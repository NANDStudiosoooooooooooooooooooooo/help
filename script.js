document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const formSubmitUrl = 'https://formsubmit.co/help@nand-studios.com';

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
            window.location.href = 'https://help.nand-studios.com/success';
        })
        .catch(error => {
            console.error('Form submission error:', error);
        });
    });
});
