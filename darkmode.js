const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = darkModeToggle.querySelector('i');

if (localStorage.getItem('dark-mode') === 'enabled') {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'enabled');
    darkModeIcon.classList.add('fa-moon');
    darkModeIcon.classList.remove('fa-sun');
} else {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem('dark-mode', 'disabled');
    darkModeIcon.classList.add('fa-sun');
    darkModeIcon.classList.remove('fa-moon');
}

darkModeToggle.addEventListener('click', () => {
    // Update icon and store preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('dark-mode', 'disabled');
        darkModeIcon.classList.add('fa-sun');
        darkModeIcon.classList.remove('fa-moon');
    } else if (document.body.classList.contains('light-mode')) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode', 'enabled');
        darkModeIcon.classList.add('fa-moon');
        darkModeIcon.classList.remove('fa-sun')
    }
});
