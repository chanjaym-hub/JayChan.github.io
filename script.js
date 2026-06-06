```javascript
const words = [
    "IT Student",
    "Web Developer",
    "Programmer",
    "Database Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const typing = document.getElementById("typing");

    const currentWord = words[wordIndex];

    if(!deleting){
        typing.textContent =
        currentWord.substring(0, charIndex + 1);

        charIndex++;

        if(charIndex === currentWord.length){
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }
    }
    else{
        typing.textContent =
        currentWord.substring(0, charIndex - 1);

        charIndex--;

        if(charIndex === 0){
            deleting = false;
            wordIndex++;

            if(wordIndex === words.length){
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 60 : 120);
}

typeEffect();
```
