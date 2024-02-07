(function(){
    'use strict';
    console.log('reading js');

    const myContent=document.querySelector('#content');

    const myForm = document.querySelector('form');

    document.querySelector('.submit').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className='showing';
        const plant = document.querySelector('#plant').value;
        const god = document.querySelector('#god').value;
        const body1 = document.querySelector('#body1').value;
        const body2 = document.querySelector('#body2').value;
        const verb = document.querySelector('#verb').value;
        const adj = document.querySelector('#adj').value;

        // const myText= `You have entered ${plant}, ${god}, ${body1}, ${body2}.`;
        let myText

        if (plant == ''){
            myText="Please provide a noun"
            document.querySelector('#plant').focus();
        }

        else if (god == ''){
            myText="Please provide a noun"
            document.querySelector('#god').focus();
        }

        else if (body1 == ''){
            myText="Please provide a adjective"
            document.querySelector('#body1').focus();
        }

        else if (body2 == ''){
            myText="Please provide a verb"
            document.querySelector('#body2').focus();
        }

        else if (verb == ''){
            myText="Please provide a verb"
            document.querySelector('#verb').focus();
        }

        else if (adj == ''){
            myText="Please provide a verb"
            document.querySelector('#adj').focus();
        }

        else {
            myText= `You have entered ${plant}, ${god}, ${body1}, ${body2}.`;
        }

        myContent.innerHTML = myText;
        });

    document.querySelector('.close').addEventListener('click', function(event){
        event.preventDefault();
        document.querySelector('#overlay').className='hidden';
        });

        document.hasStorageAccess('keydown', function(event){
            if (event.key === 'Escape'){
                document.querySelector('#overlay').className='hidden';
            }
        });

    
})();