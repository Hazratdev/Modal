const btn = document.querySelector(".open-btn")
const closeBtn = document.querySelector(".close-btn")
const modal = document.querySelector(".modal")
const bg = document.querySelector(".blur-window")

btn.addEventListener("click", () => {
    modal.style.transform = "scale(1)"
    modal.style.transition = "1.5s"
    bg.style.display = "block"
})
closeBtn.addEventListener("click", () => {
    modal.style.transform = "scale(0)"
    bg.style.display = "none"
})
