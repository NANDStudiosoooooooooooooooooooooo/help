document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const formSubmitUrl = 'https://formsubmit.co/help.nand-studios.com';

        fetch(formSubmitUrl, {
            method: 'POST',
            body: formData,
            headers: {
                Accept: 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            // Öffne die FormSubmit-Seite in einem neuen Tab im Hintergrund
            const formSubmitPage = window.open('about:blank', '_blank');
            formSubmitPage.location.href = data.success ? 'https://help.nand-studios.com/success' : 'https://formsubmit.co/help.nand-studios.com/error';
        })
        .catch(error => {
            console.error('Form submission error:', error);
        });
    });
});
