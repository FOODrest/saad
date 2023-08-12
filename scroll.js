const header = document.querySelector('.first');

window.addEventListener('scroll', () => {
    header.classList.add('scrolled'); // Always add the class when scrolling starts
    if (window.scrollY === 0) {
        header.classList.remove('scrolled'); // Remove the class when scrolled back to the top
    }
});