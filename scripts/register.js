import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { auth, db } from "./config.js";
const form = document.querySelector("#form");
const email = document.querySelector("#email");
const name = document.querySelector("#name");
const password = document.querySelector("#password");
const p = document.querySelector("#error");


let userProfilePicUrl = ""

let myWidget = cloudinary.createUploadWidget({
    cloudName: 'diqpvofng',
    uploadPreset: 'saylani'
}, (error, result) => {
    if (!error && result && result.event === "success") {
        console.log('Done! Here is the image info: ', result.info);
        userProfilePicUrl = result.info.secure_url
    }
}
)

document.getElementById("upload_widget").addEventListener("click", function(event) {
    event.stopPropagation(); // Optional, depending on your needs
    if (typeof myWidget !== 'undefined') {
        myWidget.open();
    } else {
        console.error('myWidget is not defined or initialized.');
    }
}, false);


form.addEventListener("submit", event => {
    event.preventDefault();
    // p.innerHTML = ""
    console.log(name.value);
    console.log(email.value)
    

    createUserWithEmailAndPassword(auth, email.value, password.value,name.value)
    .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user);
         window.location="./login.html"

        try {
            const docRef = await addDoc(collection(db, "users"), {
                fullName: name.value,
                email: email.value,
                // profileImage: userProfilePicUrl,
                uid: user.uid
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }


    })
})
        // .catch((error) => {
        //     const errorMessage = error.message;
        //     console.log(errorMessage);
        //     p.innerHTML = errorMessage
        // });

