import { signInWithEmailAndPassword,GoogleAuthProvider, signInWithPopup  } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { auth } from "./config.js";
const provider = new GoogleAuthProvider();

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const p = document.querySelector("#error");
const googlebtn= document.querySelector("#googlebtn");




form.addEventListener("submit", event => {
    event.preventDefault();
    // p.innerHTML = ""
    console.log(email.value);
    // window.location="./home.html"
    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location = "./home.html"
        })
        .catch((error) => {
            const errorMessage = error.message;
            alert(errorMessage)
        });


})
googlebtn.addEventListener("click", ()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
    window.location="./home.html"
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
  });
})