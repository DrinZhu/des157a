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
            myText= `Suddenly one day there were many <strong>${plant}</strong> growing out of people's homes. The people panicked and tried their best to pull them out, but as soon as they pulled one out, another one grew. The people were so disturbed that they called the <strong>${god}</strong> for help. The confident <strong>${god}</strong> said let me destroy them. But these <strong>${plant}</strong> were no ordinary <strong>${plant}</strong>, they had <strong>${body1}</strong> and <strong>${body2}</strong> and mouths. The <strong>${god}</strong> was especially surprised and <strong>${verb}</strong> while reciting an incantation. But the more the <strong>${god}</strong> recited, the more the <strong>${plant}</strong> grew. There was a flood of <strong>${plant}</strong>. The <strong>${god}</strong> continued to pray, and now the <strong>${plant}</strong> all moved and followed him with the <strong>${adj}</strong> tone, "Bite you to death!" The <strong>${god}</strong> was so scared that he ran away <strong>${adv}</strong> screaming "Help!"`;
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