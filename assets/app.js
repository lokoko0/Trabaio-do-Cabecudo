// Project of daniel

// 1. Passo (Declarar as variaveis das fotos dos cogumelos)

let all_pics_of_gallery = document.querySelectorAll(".pics_of_gallery");

all_pics_of_gallery.forEach((pic) => {
    pic.addEventListener("click", () => {
        window.open(pic.querySelector("img").src)
    })
})