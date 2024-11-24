import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
const form = document.querySelector("form");
form.addEventListener("submit", handSub);

function handSub(event) {
    event.preventDefault();
    const delay = event.target.elements.delay.value;
    const state = event.target.elements.state.value;
    
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === "fulfilled") {
                resolve(`✅ Fulfilled promise in ${delay}ms`)
            } else {
                reject(`❌ Rejected promise in ${delay}ms`)
            }
        }, delay)
    });
    myPromise
        .then((result) => {
            iziToast.show({
                title: '',
                message: `${result}`,
                backgroundColor: `#59a10d`,
                messageColor: `#fff`,
                position: "topRight"
});
            
        })
        .catch((noResult) => {
         iziToast.show({
                title: '',
                message: `${noResult}`,
                backgroundColor: `#ef4040`,
                messageColor: `#fff`,
                position: "topRight"
});
        
    })
    
    
    
}

