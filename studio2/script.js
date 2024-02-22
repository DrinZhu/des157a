(function(){
    'use strict';
    console.log('reading js');

    const sections = document.querySelectorAll('section');
    const next = document.querySelector('#next');
    const previous = document.querySelector('#previous');
    let sectionCounter = 0;

    next.addEventListener('click', function(){
        if( sectionCounter < sections.length-1){
            sectionCounter++;
        } else {
            sectionCounter = 0;
        }
        
        for( const eachSection of sections){
            eachSection.style.zIndex = 0;
        }
        sections[sectionCounter].style.zIndex = 1;
    });

    previous.addEventListener('click', function(){
        if( sectionCounter > 0){
            sectionCounter--;
        } else {
            sectionCounter = 4;
        }
        
        for( const eachSection of sections){
            eachSection.style.zIndex = 0;
        }
        sections[sectionCounter].style.zIndex = 1;
    });


    const meme1 = document.querySelector('#wait1')

    const images1= ['image1.png', 'image7.gif']
    let currentImage1 = 0;

    document.querySelector('#send1').addEventListener('click', nextPhoto1);
    function nextPhoto1(){
        currentImage1 = (currentImage1 + 1) % images1.length;
        meme1.src=`images/${images1[currentImage1]}`;
    }

    document.querySelector('#clear1').addEventListener('click', clearPhoto1);
    function clearPhoto1(){
        currentImage1 = (currentImage1 - 1) % images1.length;
        meme1.src=`images/${images1[currentImage1]}`;
    }


    const meme2 = document.querySelector('#wait2')

    const images2= ['image1.png', 'image8.gif']
    let currentImage2 = 0;

    document.querySelector('#send2').addEventListener('click', nextPhoto2);
    function nextPhoto2(){
        currentImage2 = (currentImage2 + 1) % images2.length;
        meme2.src=`images/${images2[currentImage2]}`;
    }

    document.querySelector('#clear2').addEventListener('click', clearPhoto2);
    function clearPhoto2(){
        currentImage2 = (currentImage2 - 1) % images2.length;
        meme2.src=`images/${images2[currentImage2]}`;
    }


    const meme3 = document.querySelector('#wait3')

    const images3= ['image1.png', 'image9.gif']
    let currentImage3 = 0;

    document.querySelector('#send3').addEventListener('click', nextPhoto3);
    function nextPhoto3(){
        currentImage3 = (currentImage3 + 1) % images3.length;
        meme3.src=`images/${images3[currentImage3]}`;
    }

    document.querySelector('#clear3').addEventListener('click', clearPhoto3);
    function clearPhoto3(){
        currentImage3 = (currentImage3 - 1) % images3.length;
        meme3.src=`images/${images3[currentImage3]}`;
    }


    const meme4 = document.querySelector('#wait4')

    const images4= ['image1.png', 'image10.gif']
    let currentImage4 = 0;

    document.querySelector('#send4').addEventListener('click', nextPhoto4);
    function nextPhoto4(){
        currentImage4 = (currentImage4 + 1) % images4.length;
        meme4.src=`images/${images4[currentImage4]}`;
    }

    document.querySelector('#clear4').addEventListener('click', clearPhoto4);
    function clearPhoto4(){
        currentImage4 = (currentImage4 - 1) % images4.length;
        meme4.src=`images/${images4[currentImage4]}`;
    }


    const meme5 = document.querySelector('#wait5')

    const images5= ['image1.png', 'image11.gif']
    let currentImage5 = 0;

    document.querySelector('#send5').addEventListener('click', nextPhoto5);
    function nextPhoto5(){
        currentImage5 = (currentImage5 + 1) % images5.length;
        meme5.src=`images/${images5[currentImage5]}`;
    }

    document.querySelector('#clear5').addEventListener('click', clearPhoto5);
    function clearPhoto5(){
        currentImage5 = (currentImage5 - 1) % images5.length;
        meme5.src=`images/${images5[currentImage5]}`;
    }


})()