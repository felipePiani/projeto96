// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVFOuLWdQbraRexwAsDmAqQ2HpfK5FD7I",
  authDomain: "bwitter-db8f6.firebaseapp.com",
  projectId: "bwitter-db8f6",
  storageBucket: "bwitter-db8f6.appspot.com",
  messagingSenderId: "200488036556",
  appId: "1:200488036556:web:e3c7e12a1ff705a18e3a69"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    })
    document.getElementById("msg").value = "";
}
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}    