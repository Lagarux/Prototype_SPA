const checkbox = document.querySelector(".checkbox");
const modalC = document.getElementById("contact");
const contact = document.getElementById("open");
const cButton = document.getElementById("close-1");
const animSide = document.querySelector(".modal-content");
const navButton = document.querySelectorAll(".navOpt");
const navOpt = document.querySelectorAll('.navOpt');
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const pauseBtn = document.querySelector("#animate-btn");
const sliderContent = document.querySelector(".slider-content");
const galleryText = document.querySelector(".gallery-header");
const gallerySplit = document.querySelector(".splt");
// let slides = document.getElementsByClassName("galImg");
// let dots = document.getElementsByClassName("demo");

navOpt.forEach(item => {
    item.addEventListener('click', () => {

        navOpt.forEach(item2 => {
            item2.classList.remove("active");
        })
        item.classList.toggle("active");
    });
});

//Fonksiyonlar
checkbox.addEventListener("change", turnMode);

// next.addEventListener("click",leaveAnim);
// prev.addEventListener("click",comeAnim);





function turnMode() {
    //arkaplan rengiyle beraber diğer yazıların da rengini değiştireceğiz
    document.querySelector(".container").classList.toggle("dark");
    document.querySelector(".title").classList.toggle("white");
    document.querySelector("ul").classList.toggle("dark");
    document.querySelectorAll("a").forEach(function(a) {
        a.classList.toggle("white");
    });
    document.body.classList.toggle("light");
    document.querySelector(".label").classList.toggle("dark");
    document.querySelector(".label").classList.toggle("white-border");
    document.querySelector(".ball").classList.toggle("light");
    if (document.querySelector(".container").classList.contains("dark")) {
        document.querySelector(".logo").src = "images/logoAs2.png";
    } else {
        document.querySelector(".logo").src = "images/logoAs.png";
    }
    document.querySelector(".about-us").classList.toggle("white");
}




contact.addEventListener("click", function() {
    modalC.style.display = "flex";
    setTimeout(function() {
        animSide.classList.remove("animate-top");
    }, 800);
});



cButton.addEventListener("click", function() {

    animSide.classList.toggle("leave-anim");
    setTimeout(function() {
        modalC.style.display = "none";
        animSide.classList.remove("leave-anim");
        animSide.classList.toggle("animate-top");
    }, 600);
    const link = document.querySelector("#open");
    link.classList.remove("active");

});

window.addEventListener("click", function(event) {
    if (event.target == modalC) {
        animSide.classList.toggle("leave-anim");

        setTimeout(function() {
            modalC.style.display = "none";
            animSide.classList.remove("leave-anim");
            animSide.classList.toggle("animate-top");

        }, 600);
        const link = document.querySelector("#open");
        link.classList.remove("active");
    }
});


function change(ele) {

    ele.style.background = "#2d363b";
    ele.style.color = "#ECE3B7";
}














