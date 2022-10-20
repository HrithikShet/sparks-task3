const firebaseConfig = {
    apiKey: "AIzaSyArH4Wt630ImgLLrzeIlgTvwj-hiFxX2I4",
    authDomain: "sparks-hrithik.firebaseapp.com",
    databaseURL: "https://sparks-hrithik-default-rtdb.firebaseio.com",
    projectId: "sparks-hrithik",
    storageBucket: "sparks-hrithik.appspot.com",
    messagingSenderId: "214982751987",
    appId: "1:214982751987:web:cfbc080c47e91bbf446986"
  }; 
 
 // Initialize firebase
 firebase.initializeApp(firebaseConfig);
  
 // reference your database
 var fdb = firebase.database().ref("contactForm");
 
 document.getElementById("contactForm").addEventListener("submit", submitForm);
 
 function submitForm(e) {
   e.preventDefault();
 
   var name = val("name");
   var emailid = val("emailid");
   var msgContent = val("msgContent");
 
   saveMessages(name, emailid, msgContent);
 
   //   enable alert
   document.querySelector(".alert").style.display = "block";
 
   //   remove the alert
   setTimeout(() => {
     document.querySelector(".alert").style.display = "none";
   }, 3000);
 
   //   reset the form
   document.getElementById("contactForm").reset();
 }
 
 const saveMessages = (name, emailid, msgContent) => {
   var cf = fdb.push();
 
   cf.set({
     name: name,
     emailid: emailid,
     msgContent: msgContent,
   });
 };
 
 const val = (id) => {
   return document.getElementById(id).value;
 };