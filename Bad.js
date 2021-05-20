var firebaseConfig = {
    apiKey: "AIzaSyBU6oJi-JbmlHMh7GqKcSocidgLq3BcQZg",
    authDomain: "let-s-chat-webb-app.firebaseapp.com",
    databaseURL: "https://let-s-chat-webb-app-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-webb-app",
    storageBucket: "let-s-chat-webb-app.appspot.com",
    messagingSenderId: "620336586523",
    appId: "1:620336586523:web:2e0174eb6b25bef9903dbe",
    measurementId: "G-S60V0M1BSP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  username=localStorage.getItem("user name");
  roomaname=localStorage.getItem("room name")
  

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("roomnames").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    });});}
getData();
function send()
{
msg=document.getElementById("msg").value;
firebase.database().ref(roomaname).push({
  name:username,
  message:msg,
like:0
});
document.getElementById("msg").value="";
}
