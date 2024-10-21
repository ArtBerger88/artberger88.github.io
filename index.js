//this is my java script file // 
window.addEventListener('load', function() {
    console.log('Window loaded'); // loaded log

    emailjs.init("Sdo8-Z9nfVOIvI3fs");
    console.log('EmailJS initialized'); // emailJS log check

    setTimeout(function() {
        const form = document.getElementById('contact-form');
        if (form) {
            console.log('Form found'); // Form found log

            form.addEventListener('submit', function(event) {
                event.preventDefault();
                console.log('Form submit event triggered'); // Log for form submit event

                const name = document.querySelector('input[name="Contact-Name"]');
                console.log('Name input selection:', name); // Log for name input selection
                const email = document.querySelector('input[name="Contact-Email"]');
                const message = document.querySelector('textarea[name="Contact-Message"]');
                const errorMessage = document.getElementById('message-error');
            
                //logs for form data
                console.log('Form submitted');
                if (name) {
                    console.log('Name input found:', name.value);
                    if (!name.value.trim()) {
                        console.log('Name is empty');
                        errorMessage.textContent = 'Please input your name.';
                        console.log('Error message set:', errorMessage.textContent);
                        return;
                    }
                } else {
                    console.log('Name input not found');
                }

                if (email) {
                    console.log('Email:', email.value);
                    if (!email.value.trim()) {
                        console.log('Email is empty');
                        errorMessage.textContent = 'Please input an Email.';
                        return;
                    }
                } else {
                    console.log('Email input not found');
                }

                if (message) {
                    console.log('Message:', message.value);
                    if (!message.value.trim()) {
                        console.log('Message is empty');
                        errorMessage.textContent = 'Please input a message.';
                        return;
                    }
                } else {
                    console.log('Message input not found');
                }

                emailjs.sendForm('service_wdhkm95', 'template_01jpnfu', this)
                    .then(() => {
                        console.log('SUCCESS!'); // Form Submit success log
                        this.reset();
                    }, (error) => {
                        console.log('FAILED...', error); // Form failed to submit log
                    });
            });
        } else {
            console.log('Form not found'); // Form not found log
        }
    }, 500); // Delay of .5 second
}); 
