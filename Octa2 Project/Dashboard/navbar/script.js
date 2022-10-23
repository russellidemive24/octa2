
const mediaMenu = document.querySelector('#menu-icon');
const mediaMenuRemover = document.querySelector('#remove-menu-icon');
const mediaDropdownMenu = document.querySelector('#nav-2');
const mediaMenu_Container = document.querySelector('.menu-icon-container');
const mediaMenu_RemContain = document.querySelector('.remove-menu-icon-container');

mediaMenu.addEventListener('click', () => {
    mediaDropdownMenu.classList.add('margin-left');
    if (mediaMenu_RemContain.classList.contains('remove-menu-icon-container')) {
        mediaMenu_RemContain.classList.add('active');
        mediaMenu_Container.classList.remove('active');
    }
})

mediaMenuRemover.addEventListener('click', () => {
    mediaDropdownMenu.classList.remove('margin-left');
    if (mediaMenu_Container.classList.contains('menu-icon-container')) {
        mediaMenu_Container.classList.add('active');
        mediaMenu_RemContain.classList.remove('active');
    }
})