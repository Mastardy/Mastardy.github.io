setInterval(ChangeImage, 5000);

const images = [
    "https://img.itch.zone/aW1hZ2UvMTYzNTMzMy85NjQxNTAyLnBuZw==/original/lRx807.png",
    "https://img.itch.zone/aW1hZ2UvMTYzNTMzMy8xMDAzMjY5Ni5wbmc=/original/iJ%2BZ4P.png",
    "https://img.itch.zone/aW1hZ2UvMTYzNTMzMy8xMDAzMjcwMy5wbmc=/original/MWpPdE.png",
    "https://img.itch.zone/aW1hZ2UvMTYzNTMzMy8xMDAzMjY5NS5wbmc=/original/yxqid8.png",
    "https://img.itch.zone/aW1hZ2UvMTYzNTMzMy8xMDAzMjY5Ny5wbmc=/original/me5luK.png",
    "https://img.itch.zone/aW1hZ2UvMTYzNTMzMy8xMDAzMjcwMi5wbmc=/original/NZ4On8.png",
    "https://img.itch.zone/aW1hZ2UvMTYzNTMzMy8xMDAzMjcwMC5wbmc=/original/%2BheRw9.png",
    "https://img.itch.zone/aW1hZ2UvMTYzNTMzMy8xMDAzMjY5OS5wbmc=/original/jNrOgc.png",
    "https://img.itch.zone/aW1hZ2UvMTYzNTMzMy8xMDAzMjY5OC5wbmc=/original/4Ip8FA.png"
];

let currentImageIndex = 0;
let switcher = 0;

function ChangeImage() {
    if(currentImageIndex === images.length - 1) currentImageIndex = 0;
    else currentImageIndex++;

    if(switcher === 0) {
        document.getElementById("backgroundImg").src = images[currentImageIndex];
        document.getElementById("backgroundImg2").classList.remove("fadeOut");
        document.getElementById("backgroundImg2").classList.add("fadeIn");
        document.getElementById("backgroundImg").classList.remove("fadeIn");
        document.getElementById("backgroundImg").classList.add("fadeOut");
    } else {
        document.getElementById("backgroundImg2").src = images[currentImageIndex];
        document.getElementById("backgroundImg").classList.remove("fadeOut");
        document.getElementById("backgroundImg").classList.add("fadeIn");
        document.getElementById("backgroundImg2").classList.remove("fadeIn");
        document.getElementById("backgroundImg2").classList.add("fadeOut");
    }

    if(switcher === 0) switcher = 1;
    else switcher = 0;
}