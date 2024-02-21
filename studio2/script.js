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


})()