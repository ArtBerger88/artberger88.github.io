window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const submitButton = document.getElementById("submitButton");
    const errorMessage = document.getElementById("message-error");
    const successMessage = document.getElementById("message-success");
    const formStartedAtInput = document.getElementById("form-started-at");

    const MIN_FILL_SECONDS = 6;
    const RATE_LIMIT_MS = 10 * 60 * 1000;
    const LAST_SUBMIT_KEY = "contactFormLastSubmitAt";

    if (form && submitButton && errorMessage && successMessage) {
        if (formStartedAtInput) {
            formStartedAtInput.value = String(Date.now());
        }

        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            const nameInput = form.querySelector('input[name="Contact-Name"]');
            const emailInput = form.querySelector('input[name="Contact-Email"]');
            const messageInput = form.querySelector('textarea[name="Contact-Message"]');
            const honeyInput = form.querySelector('input[name="_honey"]');
            const websiteTrapInput = form.querySelector('input[name="website"]');

            errorMessage.textContent = "";
            successMessage.textContent = "";

            if ((honeyInput && honeyInput.value.trim()) || (websiteTrapInput && websiteTrapInput.value.trim())) {
                errorMessage.textContent = "Submission blocked. Please try again.";
                return;
            }

            const startedAt = Number(formStartedAtInput && formStartedAtInput.value ? formStartedAtInput.value : 0);
            if (!startedAt || Date.now() - startedAt < MIN_FILL_SECONDS * 1000) {
                errorMessage.textContent = "Please take a moment to complete the form before submitting.";
                return;
            }

            try {
                const lastSubmitAt = Number(localStorage.getItem(LAST_SUBMIT_KEY) || 0);
                if (lastSubmitAt && Date.now() - lastSubmitAt < RATE_LIMIT_MS) {
                    errorMessage.textContent = "Please wait a few minutes before sending another message.";
                    return;
                }
            } catch (storageError) {
                // Ignore storage failures and continue.
            }

            if (!nameInput || !nameInput.value.trim()) {
                errorMessage.textContent = "Please enter your name.";
                return;
            }
            if (!emailInput || !emailInput.value.trim()) {
                errorMessage.textContent = "Please enter your email.";
                return;
            }
            if (!messageInput || !messageInput.value.trim()) {
                errorMessage.textContent = "Please enter your message.";
                return;
            }

            const messageValue = messageInput.value.trim();
            if (messageValue.length < 12) {
                errorMessage.textContent = "Please include a little more detail in your message.";
                return;
            }

            if (/https?:\/\/|www\./i.test(messageValue)) {
                errorMessage.textContent = "Please remove links from your message and try again.";
                return;
            }

            // Block common unsolicited sales/outreach language while allowing normal service requests.
            const spamPhrasePattern = /seo|marketing|lead generation|backlink|guest post|domain rating|crypto|telegram|whatsapp|cold email/i;
            if (spamPhrasePattern.test(messageValue)) {
                errorMessage.textContent = "Your message appears promotional. Please contact us directly if you need assistance.";
                return;
            }

            submitButton.disabled = true;
            submitButton.textContent = "Sending...";

            try {
                const response = await fetch(form.action, {
                    method: "POST",
                    body: new FormData(form),
                    headers: {
                        Accept: "application/json"
                    }
                });

                if (!response.ok) {
                    throw new Error("Submit failed");
                }

                form.reset();
                if (formStartedAtInput) {
                    formStartedAtInput.value = String(Date.now());
                }
                try {
                    localStorage.setItem(LAST_SUBMIT_KEY, String(Date.now()));
                } catch (storageError) {
                    // Ignore storage failures and continue.
                }
                successMessage.textContent = "Thanks. Your message has been sent successfully.";
            } catch (error) {
                errorMessage.textContent = "We could not send your message right now. Please call or email us directly.";
            } finally {
                submitButton.disabled = false;
                submitButton.innerHTML = "<strong>Send</strong>";
            }
        });
    }

    const lightboxEl = document.getElementById("mainGalleryLightbox");
    const lightboxImage = document.getElementById("mainLightboxImage");
    const galleryLinks = document.querySelectorAll(".gallery-link");

    if (lightboxEl && lightboxImage && galleryLinks.length > 0 && window.bootstrap) {
        const lightboxModal = new bootstrap.Modal(lightboxEl);

        galleryLinks.forEach((link) => {
            link.addEventListener("click", (event) => {
                const image = link.querySelector("img.gallery-image");

                if (!image) {
                    return;
                }

                event.preventDefault();
                lightboxImage.src = image.currentSrc || image.src;
                lightboxImage.alt = image.alt || "Gallery image";
                lightboxModal.show();
            });
        });

        lightboxEl.addEventListener("hidden.bs.modal", () => {
            lightboxImage.src = "";
            lightboxImage.alt = "";
        });
    }
});