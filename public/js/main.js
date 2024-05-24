const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector("#mobile-menu");
const skills = document.querySelector("#skills");
const fadeBlock = document.querySelector(".fade-block");



burger.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    this.classList.toggle("cross");
})

mobileMenu.addEventListener("click", function(event){
    if (event.target.closest(".anchor-link")) {
        mobileMenu.classList.add("hidden");
        burger.classList.remove("cross");
    }
})


skills.addEventListener("click", function(event){
    if (event.target.closest(".skill-card__button")) {
        event.target.closest(".skill-card").classList.add("active");
        fadeBlock.classList.add("open");
    }
    if (event.target.closest(".skill-card__close")) {
        event.target.closest(".skill-card").classList.remove("active");
        fadeBlock.classList.remove("open");
    }
})


const inputs = document.querySelectorAll(".entry-field");
inputs.forEach(element => {
    element.addEventListener("focus", function() {
        const formItem = element.closest(".form__item");
        const placeholder = formItem.querySelector(".form__fake-placeholder");
        placeholder.classList.add("focus");
    })
});
inputs.forEach(element => {
    element.addEventListener("blur", function() {
        const formItem = element.closest(".form__item");
        const placeholder = formItem.querySelector(".form__fake-placeholder");
        if(element.value.length < 1) {
            placeholder.classList.remove("focus");
        }
    })
});





















































































































