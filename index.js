//this is my java script file // 
window.onload = function() {
    emailjs.init(
        "Sdo8-Z9nfVOIvI3fs");
    
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_wdhkm95', 'template_dp1nv7d', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}