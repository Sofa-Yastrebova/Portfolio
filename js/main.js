// 1. Создать константу в js
// 2. Найти в эту константу кнопку burger
// 3. Отловить на кнопке клик
// 4. Выводить в консоль любое сообщение при клике на бургер



const burger = document.querySelector(".burger");
const mobileMenu = document.querySelector("#mobile-menu");
const listLinks = document.querySelectorAll(".anchor-link");
console.log(listLinks);

burger.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
})

for (let i = 0; i < listLinks.length; i++) {
    listLinks[i].addEventListener("click", function(){
        mobileMenu.classList.add("hidden");
    })
}


















































































































