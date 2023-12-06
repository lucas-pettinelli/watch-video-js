const buttonTrailler = document.querySelector(".button-trailler");
const hiddenButtonsSide = document.querySelector(".buttons-right-side")
const modal = document.querySelector(".modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;
const buttonCloseModal = document.querySelector(".close-modal")

function altModal(){
    modal.classList.toggle("open");
}

buttonTrailler.addEventListener("click", ()=>{
    altModal();
    video.setAttribute("src", linkDoVideo);
});

buttonCloseModal.addEventListener("click", ()=>{
    altModal();
    video.setAttribute("src", "");
})