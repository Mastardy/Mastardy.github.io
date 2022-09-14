setInterval(ChangeImage, 5000);

const caelumImages = [
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

const ctrlEscImages = [
    "https://img.itch.zone/aW1hZ2UvMTEwMTYwOS82MzU0NTIzLnBuZw==/original/OyAWVx.png",
    "https://img.itch.zone/aW1hZ2UvMTEwMTYwOS82MzU0NTA2LnBuZw==/original/8MrZyM.png",
    "https://img.itch.zone/aW1hZ2UvMTEwMTYwOS82MzU0NTA5LnBuZw==/original/w8UoMk.png",
    "https://img.itch.zone/aW1hZ2UvMTEwMTYwOS82MzU0NTA1LnBuZw==/original/MrrG9u.png",
    "https://img.itch.zone/aW1hZ2UvMTEwMTYwOS82MzU0NTI1LnBuZw==/original/gg%2BooF.png"
];

const mutantPizzasImages = [
    "https://img.itch.zone/aW1hZ2UvMTAyNjk5MS81ODU3Nzk0LnBuZw==/original/P%2F1P9q.png",
    "https://img.itch.zone/aW1nLzU4NTc4ODUucG5n/original/5Auf%2Bi.png",
    "https://img.itch.zone/aW1hZ2UvMTAyNjk5MS81ODU3NzkzLnBuZw==/original/oYkG6T.png",
    "https://img.itch.zone/aW1hZ2UvMTAyNjk5MS81ODY5MzExLnBuZw==/original/YcOWxH.png",
    "https://img.itch.zone/aW1hZ2UvMTAyNjk5MS81ODY5MzEzLnBuZw==/original/FsQ3bv.png"
];

const gladePartyImages = [
    "https://bnz05pap001files.storage.live.com/y4mXPqpYtDqJS2ujpZXXLNGPhLO7KWgiL0dAI2wdq9NKOIqyh__seIUCawu2Jz1e0mhtes-VovrrJ2-haPiYuqI-fivUl4E4YbvUl48BVG3tZfM7n0Yc_PRShSZhcHnNxgTLcv0m3IBNW1zymMr_90p-ag9UYeLTJj7Cln28CFVn-4hJR3fLwLyBehYNA4J8JqQyVu16_3dgwY5y6vMpUcX5g?encodeFailures=1&width=1569&height=883",
    "https://bnz05pap001files.storage.live.com/y4m41V7_nimdGWYrx6MtjSxKh10tNWrQLrV2aoFIzwAULgEg_1B8sHSV7I9kmZ_OqXeLxb2W2fZaQeznmfJ8Suait0KTVytmIc7ynjxYTOIDOJJySa_lzvQIud-a6x2bXcFmVMpdLnMXLnm1-Fxz76-70QENRuBLlE-aMcGm5MZxyjDdhSDOrYBNAZhGJB6X4d5HHnavDLLlikNEFSnZjcdzw?encodeFailures=1&width=1569&height=883",
    "https://bnz05pap001files.storage.live.com/y4mmBVu0mQQ3VUIbcyy8qW2u_4A5F8MhBH8gYll_r-HWMzYc82J0PXcK1evneiJAek_Tp9ZVzME3IHUxW0KMfsvN5bEn-ujNfAarbIFB5xlSbOgvd8_-XtZg8D49p0H4LkLyKeEL_7zfZoirNettIuAFOIvEeVx27V00al6r-u3v3FDwpD37xzBD-JvPnYKnfkJCR96HVpltY98DX00EOyzHQ?encodeFailures=1&width=1569&height=883",
    "https://bnz05pap001files.storage.live.com/y4m46brSNcJA6P_LBL78uIjeKxXwyYTwgZFqF9eJhpNmfrW7K6x0ZE3rG_1KPs8X7wYcyf2fSFuybsBhEBgTy-bEO7DIxuuHU09L4i3tLfWeyGDx_Te0-BwtWgWX_z4ss4lJxWwA-JTnG4L-SbIAzGxeCK9QbuwE0OhtJe0xfzu6p0sZmy40o14Xyy9n5UT2gfbSccVIeSBsmAq_jo3ZPZABw?encodeFailures=1&width=1236&height=699",
    "https://bnz05pap001files.storage.live.com/y4mobSGljL6Si1Kj9W3IQb-o3kXRGkL_L3NSSbADlAIt67UZ2IGEyoq0D7_DOjTP3u6xSsctmr6ekbUPfhu03FLSTVMmYx1c8iKO5Z2Y1minKrTSZuesQYsk_GtoYmL8_90zzoQWMbSna8H-DlsxnZRJdQZxbGyt3f0JKuPGrIgq2949NwzngEP6wNNvIm-kGUKevsEEQldWNWBgl3FKiujvg?encodeFailures=1&width=1237&height=697",
    "https://bnz05pap001files.storage.live.com/y4mJTC46Kog8nfb5g5cZAbpVvFfSYpxhmWMX79bMgPbmHrdp6ETdbg7nn4ejpl9FP_M1iUyVIlSy3WYpYZ1Kyujmx6J9w6pKPhAOEvEzK4uO8yvVdpYexnE4FgB_UlB6xoOmsBmVdmQ-etf5oL1NXuyeEVl4SnZfqlZKOQPquCPR49y-4M4HvzlT0v186TzWt5FRNFTc-_4gLbu-lnTPQfPCQ?encodeFailures=1&width=1230&height=695",
    "https://bnz05pap001files.storage.live.com/y4mmrDoLcd2DMF-mTMC_Lv_V3eOWiR7CM2jPXXAnVzci5IWMPYXuK3VL8G7zGSDOytnDLwtD2Z2t9Y4xeyOTrRhT2kJg-zKqBjGRhMMOyVFTEyu8xfn1EveB6QjHovtMz_UgghpqBu19MRM0RGUM2AARo3W-2txnA-kKAp0OvlLPW-clSHunXSREGjo3oKb9P4DYyQZb83STbBylx5m03aI8A?encodeFailures=1&width=1240&height=701",
    "https://bnz05pap001files.storage.live.com/y4mm6AbLXaTwpzO2AQ9ODi0vxs-Ahv921_26kPaK6VfBooqS0f6GrGqtU8BJq6q9Lsl40nhQvRujAsQsGStc3C1PTEbjmfkG6bflzDo7xPeHaKkRv6o3Hrgi48el0UI-eX2l4QARu4-opgtndDZ3FV585_3kKH8-AmmrFJ2LmSfCaMSQY2uIR-b_f9iEFQnIVk6ErNQCM3Fw6qGuWzPVAYLDg?encodeFailures=1&width=1238&height=700"
];

let currentImageIndex = 0;
let switcher = 0;

let images = []
if(document.URL.includes("caelum.html"))
{
    images = caelumImages;
}
else if(document.URL.includes("ctrlesc.html"))
{
    images = ctrlEscImages;
}
else if(document.URL.includes("mutantpizzas.html"))
{
    images = mutantPizzasImages;
}
else if(document.URL.includes("gladeparty.html"))
{
    images = gladePartyImages;
}

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