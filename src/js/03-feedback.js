import throttle from "lodash.throttle";

const form = document.querySelector(".feedback-form");
const inputEmail = document.querySelector("input[name = email]");
const inputMessage = document.querySelector("textarea[name = message]");
form.addEventListener('submit', onSubmit);
form.addEventListener('input', throttle(onInput, 500));

const localKey = "feedback-form-state";
const userLocal = {};

fulFill();

function onSubmit(evt){
    evt.preventDefault();
    evt.target.reset()
    localStorage.removeItem(localKey)
}


function onInput(e){
    userLocal[e.target.name] = e.target.value;
    const data = JSON.stringify(userLocal)
    localStorage.setItem(localKey, data)
    
}
// console.log(userLocal)

function fulFill(){
    const localDataString = localStorage.getItem(localKey)
    const localData = JSON.parse(localDataString)
    if (localDataString) {
        userLocal.email = localData.email
        userLocal.message = localData.message
        inputEmail.value = userLocal.email
        inputMessage.value = userLocal.message
    }
    // console.log(localDataString)
    // console.log(localData)
 }