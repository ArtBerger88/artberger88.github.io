window.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const submitButton = document.getElementById("submitButton");
    const errorMessage = document.getElementById("message-error");
    const successMessage = document.getElementById("message-success");

    if (form && submitButton && errorMessage && successMessage) {
        form.addEventListener("submit", async (event) => {
            event.preventDefault();

            const nameInput = form.querySelector('input[name="Contact-Name"]');
            const emailInput = form.querySelector('input[name="Contact-Email"]');
            const messageInput = form.querySelector('textarea[name="Contact-Message"]');

            errorMessage.textContent = "";
            successMessage.textContent = "";

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