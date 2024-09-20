const header = document.querySelector(".navbar")

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.btn-toggle');
    const sections = document.querySelectorAll('.skills-section');

    // Hide all sections initially
    sections.forEach(section => section.style.display = 'none');

    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);

            // Hide all sections
            sections.forEach(section => section.style.display = 'none');

            // Show the clicked section
            if (targetSection) {
                targetSection.style.display = 'block';
            }
        });
    });
});
