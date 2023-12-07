var freeze = false;
var freezeTranslateXpositive = true;
var freezeTranslateXnegative = true;
var freezeTranslateYpositive = true;
var freezeTranslateYnegative = true;
var freezeTranslateZ = false;

function onMouseClick(event){
    freeze = !freeze;
}

document.addEventListener('click', onMouseClick, false);

function onKeydown(event){
    if(event.keyCode == 32){
        freeze = true;
    }

    if(event.keyCode == 65) { // huruf a
        freezeTranslateXnegative = false;
        console.log('a ');
    }
    if(event.keyCode == 87) { // huruf w
        freezeTranslateYpositive = false;
    }
    if(event.keyCode == 83) { // huruf s
        freezeTranslateYnegative = false;
    }
    if(event.keyCode == 68) { // huruf d
        freezeTranslateXpositive = false;
    }
}

function onKeyup(event){
    if(event.keyCode == 32){
        freeze = false;
    }

    if(event.keyCode == 65) { // huruf a
        freezeTranslateXnegative = true;
    }
    if(event.keyCode == 87) { // huruf w
        freezeTranslateYpositive = true;
    }
    if(event.keyCode == 83) { // huruf s
        freezeTranslateYnegative = true;
    }
    if(event.keyCode == 68) { // huruf d
        freezeTranslateXpositive = true;
    }
}

document.addEventListener('keydown', onKeydown, false);
document.addEventListener('keyup', onKeyup, false);