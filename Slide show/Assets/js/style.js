//bring the UI elements
let sliderImages = document.querySelectorAll('.slide');
    arrowRight = document.querySelector('#arrow-right');
    arrowLeft = document.querySelector('#arrow-left');
    current=0;

    function reset(){
        for (let i = 0; i < sliderImages.length; i++) {
            sliderImages[i].style.display='none';
            
        }
    }

    function startSlide(){
        reset();
        sliderImages[0].style.display='block';

    }

    //show the previous image
    function slideLeft(){
        reset();
        sliderImages[current-1].style.display='block';
        current--;

    }

    //show the next image
    function slideRight(){
        reset();
        sliderImages[current+1].style.display='block';
        current++;

    }

    //add click listener for the left slider

    arrowLeft.addEventListener('click',()=>{
        if(current==0){
            current=sliderImages.length;
        }
        slideLeft()

    })


    //add click listener for the left slider

    arrowRight.addEventListener('click',()=>{
        if(current==sliderImages.length-1){
            current=-1;
        }
        slideRight()

    })

    //invoke the container function
    startSlide();
