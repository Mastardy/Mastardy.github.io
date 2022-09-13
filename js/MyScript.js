addEventListener('scroll', (event) => {
    const header = document.getElementById("header");
    const headerSticky = document.getElementById("headerSticky");

    if(window.screen.width < 400)
    {
        if(window.scrollY > 200)
        {
            headerSticky.classList.add('fadeOutDown');
            headerSticky.classList.remove('fadeInUp');
            headerSticky.classList.remove('fadeInUpFast');
        }
        else
        {
            headerSticky.classList.add('fadeInUp');
            headerSticky.classList.remove('fadeOutDown');
        }

        return;
    }
    
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