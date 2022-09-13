addEventListener('scroll', (event) => {
    const header = document.getElementById("header");
    const headerSticky = document.getElementById("headerSticky");

    if(window.scrollY > 1)
    {
        header.classList.add('fadeIn');
        header.classList.remove('fadeOut');
        headerSticky.classList.add('fadeOutDown');
        headerSticky.classList.remove('fadeInUp');
        headerSticky.classList.remove('fadeInUpFast');
    }
    else
    {
        header.classList.add('fadeOut');
        header.classList.remove('fadeIn');
        headerSticky.classList.add('fadeInUp');
        headerSticky.classList.remove('fadeOutDown');
    }
})