(function(){
    'use strict';
    console.log('reading js');

    const myArticle=document.querySelector('#madlib');

    const myForm = document.querySelector('form');
    myForm.addEventListener('submit', function(event){
        event.preventDefault();
        const plant = document.querySelector('#plant').value;
        const god = document.querySelector('#god').value;
        const body1 = document.querySelector('#body1').value;
        const body2 = document.querySelector('#body2').value;
        const verb = document.querySelector('#verb').value;
        const adj = document.querySelector('#adj').value;

        let myText

        if (plant == ''){
            myText="Please provide a plant"
            document.querySelector('#plant').focus();
        }

        else if (god == ''){
            myText="Please provide a god"
            document.querySelector('#god').focus();
        }

        else if (body1 == ''){
            myText="Please provide a body part except mouth"
            document.querySelector('#body1').focus();
        }

        else if (body2 == ''){
            myText="Please provide another body part except mouth"
            document.querySelector('#body2').focus();
        }

        else if (verb == ''){
            myText="Please provide a verb"
            document.querySelector('#verb').focus();
        }

        else if (adj == ''){
            myText="Please provide an adjective"
            document.querySelector('#adj').focus();
        }

        else {
            myText= `You have entered ${noun1}, ${noun2}, ${adj}, ${verb}.`;
            document.querySelector('#noun1').value='';
            document.querySelector('#noun2').value='';
            document.querySelector('#adj').value='';
            document.querySelector('#verb').value='';
        }
        /*if( noun1 && noun2 && adj && verb){
            myText= `You have entered ${noun1}, ${noun2}, ${adj}, ${verb}.`;
        } else {
            myText = "Yo, give me some words!"
        }*/
        
        // console.log(noun1);

        myArticle.innerHTML = myText;
    });
})();