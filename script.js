document.querySelectorAll('.FAQ-header').forEach(button => {
    button.addEventListener('click', () => {
        const FAQContent = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            FAQContent.style.maxHeight = FAQContent.scrollHeight + 'px';
        } else {
            FAQContent.style.maxHeight = 0;
        }

        // Close other open accordion items
        document.querySelectorAll('.FAQ-header').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove('active');
                otherButton.nextElementSibling.style.maxHeight = 0;
            }
        });
    });
});