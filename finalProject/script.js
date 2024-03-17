(function(){
    'use strict';
    console.log('reading js');

    const pic1 = document.querySelector('#wait1');
    const pic2 = document.querySelector('#wait2');
    const pic3 = document.querySelector('#wait3');
    const pic4 = document.querySelector('#wait4');
    const pic5 = document.querySelector('#wait5');
    const sections = document.querySelectorAll('section');
    const next = document.querySelector('#next');
    const previous = document.querySelector('#previous');
    let sectionCounter = 0;
    const images =  ['wait.png', 'image7.gif', 'image8.gif', 'image9.gif', 'image10.gif', 'image11.gif'];
    let currentImage = 0

    document.getElementById('start').addEventListener('click', function() {
        document.getElementById('overlay').classList.remove('hidden');
        document.getElementById("homePage").className = "show";

    });

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

        pic1.src=`images/${images[currentImage]}`;
        pic2.src=`images/${images[currentImage]}`;
        pic3.src=`images/${images[currentImage]}`;
        pic4.src=`images/${images[currentImage]}`;
        pic5.src=`images/${images[currentImage]}`;
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

        pic1.src=`images/${images[currentImage]}`;
        pic2.src=`images/${images[currentImage]}`;
        pic3.src=`images/${images[currentImage]}`;
        pic4.src=`images/${images[currentImage]}`;
        pic5.src=`images/${images[currentImage]}`;
    });

    document.querySelector('#send1').addEventListener('click', nextPhoto1);
    function nextPhoto1(){
        pic1.src=`images/${images[currentImage+1]}`;
        pic1.style.width = '130px';
        pic1.style.height = '130px';
    }

    document.querySelector('#send2').addEventListener('click', nextPhoto2);
    function nextPhoto2(){
        pic2.src=`images/${images[currentImage+2]}`;
        pic2.style.width = '130px';
        pic2.style.height = '130px';
    }

    document.querySelector('#send3').addEventListener('click', nextPhoto3);
    function nextPhoto3(){
        pic3.src=`images/${images[currentImage+3]}`;
        pic3.style.width = '130px';
        pic3.style.height = '130px';
    }

    document.querySelector('#send4').addEventListener('click', nextPhoto4);
    function nextPhoto4(){
        pic4.src=`images/${images[currentImage+4]}`;
        pic4.style.width = '130px';
        pic4.style.height = '130px';
    }

    document.querySelector('#send5').addEventListener('click', nextPhoto5);
    function nextPhoto5(){
        pic5.src=`images/${images[currentImage+5]}`;
        pic5.style.width = '130px';
        pic5.style.height = '130px';
    }
})();