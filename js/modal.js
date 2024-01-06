document.getElementById("openModal").addEventListener("click", () => {
    document.getElementById("modal").classList.add("open")
})

document.getElementById("openModal1").addEventListener("click", () => {
    document.getElementById("modal").classList.add("open")
})

document.getElementById("closeModal").addEventListener("click", () => {
    document.getElementById("modal").classList.remove("open")
})

window.addEventListener('keydown', (e) => {
    if (e.key == "Escape") {
        document.getElementById("modal").classList.remove("open")
    }
});

document.querySelector("#modal .modal-content").addEventListener("click", event => {
    event._isClickWithInModal = true;
});
document.getElementById("modal").addEventListener("click", event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove("open");
});

document.getElementById("openModal").addEventListener("click", () => {
    document.getElementById("form1").value = ''
    document.getElementById("form2").value = ''
    document.getElementById("form3").value = ''
})

document.getElementById("openModal1").addEventListener("click", () => {
    document.getElementById("form4").value = ''
})