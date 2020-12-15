const trafficLightEl1 = document.querySelector('#trafficLight1');

function makeGreen() {
    trafficLightEl1.style.background = ('green');
    trafficLightEl2.style.background = ('black');
    trafficLightEl3.style.background = ('black');
    // trafficLightEl1.removeEventListener('click', makeGreen);
    // trafficLightEl3.addEventListener('click', makeYellow);
}

trafficLightEl1.addEventListener('click', makeGreen);

const trafficLightEl2 = document.querySelector('#trafficLight2');

function makeYellow() {
    trafficLightEl2.style.background = ('yellow');
    // trafficLightEl1.removeEventListener('click', makeGreen);
    // trafficLightEl3.removeEventListener('click', makeRed);
    trafficLightEl1.style.background = ('black');
    trafficLightEl3.style.background = ('black');
    // trafficLightEl2.removeEventListener('click', makeYellow);
    // trafficLightEl2.addEventListener('click', makeRed);
}

trafficLightEl2.addEventListener('click', makeYellow);

const trafficLightEl3 = document.querySelector('#trafficLight3');

function makeRed() {
    trafficLightEl3.style.background = ('red');
    trafficLightEl1.style.background = ('black');
    trafficLightEl2.style.background = ('black');
    // trafficLightEl2.removeEventListener('click', makeRed);
    // trafficLightEl3.addEventListener('click', makeGreen);
    // trafficLightEl2.removeEventListener('click', makeYellow);
    // trafficLightEl1.removeEventListener('click', makeGreen);
}

trafficLightEl3.addEventListener('click', makeRed);