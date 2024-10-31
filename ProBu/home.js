window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.section');

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;

        if (inView) {
            section.classList.add('in-view');
        } else {
            section.classList.remove('in-view');
        }
    });
});