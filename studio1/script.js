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
        const adv = document.querySelector('#adv').value;

        // const myText= `You have entered ${plant}, ${god}, ${body1}, ${body2}.`;
        let myText

        if (plant == ''){
            myText="Wait...please provide a plant (plural form)"
            document.querySelector('#plant').focus();
        }

        else if (god == ''){
            myText="Wait...please provide a god"
            document.querySelector('#god').focus();
        }

        else if (body1 == ''){
            myText="Wait...please provide a body part except mouth"
            document.querySelector('#body1').focus();
        }

        else if (body2 == ''){
            myText="Wait...please provide another body part except mouth"
            document.querySelector('#body2').focus();
        }

        else if (verb == ''){
            myText="Wait...please provide a verb"
            document.querySelector('#verb').focus();
        }

        else if (adj == ''){
            myText="Wait...please provide an adjective"
            document.querySelector('#adj').focus();
        }

        else if (adv == ''){
            myText="Wait...please provide an adverb"
            document.querySelector('#adv').focus();
        }

        else {
            myText= `Suddenly one day there were many ${plant} growing out of people's homes. The people panicked and tried their best to pull them out, but as soon as they pulled one out, another one grew. The people were so disturbed that they called the ${god} for help. The confident ${god} said let me destroy them. But these ${plant} were no ordinary ${plant}, they had ${body1} and ${body2} and mouths. The ${god} was especially surprised and ${verb} while reciting an incantation. But the more the ${god} recited, the more the ${plant} grew. There was a flood of ${plant}. The ${god} continued to pray, and now the ${plant} all moved and followed him with the ${adj} tone, "Bite you to death!" The ${god} was so scared that he ran away ${adv} screaming "Help!"`;
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