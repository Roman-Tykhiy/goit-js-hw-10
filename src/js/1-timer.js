import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const input = document.querySelector("#datetime-picker")
const btn = document.querySelector(".btn");
const day = document.querySelector(".value-days");
const hours = document.querySelector(".value-hours");
const min = document.querySelector(".value-min");
const sec = document.querySelector(".value-sec");
btn.disabled = true;
let userSelectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        
        if (selectedDates[0].getTime() < Date.now()) {
            iziToast.show({
                title: '',
                message: 'Please choose a date in the future',
                backgroundColor: `#ef4040`,
                messageColor: `#fff`,
                position: "topRight"
});
            btn.disabled = true;
        } else {btn.disabled = false;
            userSelectedDate = selectedDates[0].getTime();
             checkingDate();
        };  
        
    },
};
flatpickr("#datetime-picker", options);

function checkingDate() {
};

btn.addEventListener("click", () => {

    const intId = setInterval(() => {

        let deltaTime = userSelectedDate - Date.now();
        if (deltaTime > 0) {
            const endData = convertMs(deltaTime);
            timerFace(endData);
            btn.disabled = true;
            input.disabled = true;
        } else {
            clearInterval(intId);
            btn.disabled = false;
            input.disabled = false;
        }
}, 1000) 
});


function timerFace(obj) {
    day.textContent = obj.days;
    hours.textContent = obj.hours;
    min.textContent = obj.minutes;
    sec.textContent = obj.seconds;
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
    return String(value).padStart(2, "0")
}













