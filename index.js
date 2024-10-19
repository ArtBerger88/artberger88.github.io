//this is my java script file // 
window.onload = function() {
    emailjs.init(
        "Sdo8-Z9nfVOIvI3fs");
    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.querySelector('input[name="Contact-Name"]');
        const email = document.querySelector('input[name="Contact-Email"]');
        const message = document.querySelector('textarea[name="Contact-Message"]');
        const errorMessage = document.getElementById('message-error');
        if (!name.value) {
            alert('Please input a name.');
            return;
        }
        if (!email.value) {
            alert('Please input an email.');
            return;
        }
        if (!message.value.trim()) {
            errorMessage.textContent = 'Please input a message.';
            return;
        }
        // these IDs from the previous steps
        emailjs.sendForm('service_wdhkm95', 'template_01jpnfu', this)
            .then(() => {
                console.log('SUCCESS!');
                    this.reset();
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}