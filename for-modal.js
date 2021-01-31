
        const refs = {
            openModal: document.querySelector(".js-gallery"),
            closeModalBtn: document.querySelector("[data-close-modal]"),

            lightbox: document.querySelector('.lightbox'),
        };
        refs.openModal.addEventListener("click", toggleModal);
        refs.closeModalBtn.addEventListener("click", toggleModal);


        refs.lightbox.addEventListener("click", logLightboxClick);

        function toggleModal() {
            refs.lightbox.classList.toggle("is-open");
        }