function handleKeyDownEvent(event) {
    console.log(event.keyCode);
    // wonkey code below
    var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); //remind myself to ask Bryce why that didn't work later
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    audio.currentTime = 0; //rewinds audio loop to the start
    audio.play(); 
    if (!audio) return; //poor mans break; if there is no audio then end the function is what this means. 
    console.log(audio);
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; //skip if not a transform
    this.classList.remove('playing');
}

window.addEventListener('keydown', handleKeyDownEvent);
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); 

//(property) KeyboardEvent.keyCode: number