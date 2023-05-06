export default class Slider {
    constructor({
        slideSelector = '.slider',
        sliderContainerSelector='.slider-container',
        previousSelector = '.prev',
        nextSelector = '.next',
        transitionTime=4500,
    }= {}){
        this.slider=document.querySelector(slideSelector);
        this.slides=document.querySelectorAll(`${sliderContainerSelector} img`).length;
        this.sliderContainer=document.querySelector(sliderContainerSelector);
        this.previousBtn=document.querySelector(previousSelector);
        this.nextBtn=document.querySelector(nextSelector);
        this.slideSize = 100;
        this.currentSlide=0;
        this.pauseBtn = document.querySelector("#animate-btn");
        this.setEventListeners();
        // this.setAutoPlay(transitionTime);
        this.generateShortcuts();
       
        this.setAutoPlay=setInterval(this.nextSlide.bind(this),transitionTime);
    }

    moveSlides(){
    this.sliderContainer.style.transform= `translateX(-${this.currentSlide * this.slideSize}%)`;
    
    }

    nextSlide(){
        console.log(this);
        this.currentSlide=this.currentSlide >= this.slides -1 ? 0 : this.currentSlide + 1;
        this.moveSlides();
    }

    previousSlide(){
        this.currentSlide=this.currentSlide <= 0 ? this.slides - 1 : this.currentSlide - 1;
        this.moveSlides();
    }

    setEventListeners(){
        this.nextBtn.addEventListener('click',this.nextSlide.bind(this));
        this.previousBtn.addEventListener('click',this.previousSlide.bind(this));
        this.pauseBtn.addEventListener("click",this.stopAutoPlay);
    }

    
        
    

    stopAutoPlay(){
    pauseBtn.classList.toggle("pause");
    if(pauseBtn.classList.contains("pause")){
        pauseBtn.src ="images/Play.png";
        clearInterval(this.setAutoPlay);
        console.log(this.setAutoPlay);
    }else{
        pauseBtn.src ="images/Pause.png";
    }
     
   
    }

    generateShortcuts(){
        const shortcuts=document.querySelectorAll('.demo');
        
        for(let i=0;i<shortcuts.length;i++){
            shortcuts[i].classList.remove('active');
            shortcuts[i].addEventListener('click',()=>{
                console.log(this);
                this.currentSlide=i;
                this.moveSlides();
                shortcuts.forEach(images=>{
                    images.classList.remove('active');
                })
                shortcuts[i].classList.toggle('active');
            });
            
        }
    }
  
}

// function stopSlide() {
//     sliderContent.classList.toggle("pause");
//     if (sliderContent.classList.contains("pause")) {
//         pauseBtn.src = "images/Play.png";
//     } else {
//         pauseBtn.src = "images/Pause.png";

//     }

// }

// pauseBtn.addEventListener("click", stopSlide);