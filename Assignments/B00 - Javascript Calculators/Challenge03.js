let distance = document.getElementById('distanceInput');
let hours = document.getElementById('hoursInput');
let minutes = document.getElementById('minutesInput');
let seconds = document.getElementById('secondsInput');

const distanceSelect = document.querySelector('select');

const averageSpeedBtn = document.getElementById('averageSpeedBtn');

const para = document.querySelector('p');


averageSpeedBtn.addEventListener('click', function speed() {

            let mile = distance.value;
  
            let time = (+hours.value) + (+minutes.value) + (+seconds.value)

            let formula = Math.round(mile / time);

            para.textContent = 'average speed : ' + formula;

});