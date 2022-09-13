addEventListener('scroll', (event) => {
    if(innerWidth < '768') return;

    const header = document.getElementById("header");
    const headerSticky = document.getElementById("headerSticky");

    if(window.scrollY > 200)
    {
        header.classList.add('fadeIn');
        header.classList.remove('fadeOut');
        header.classList.remove('fadeInOut');
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