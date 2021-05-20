function logout()
{
      window.location="index.html";
}

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
    console.log(username);
    document.getElementById("Userwelcomne").innerHTML="Welcome "+username+"!";
    

    function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("roomnames").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; Room_names = childKey;
     
      //Start code
console.log("Room Name-"+Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("roomnames").innerHTML+=row;
      //End code
      });});}
getData();

function addromm()
{
      roomanme=document.getElementById("Rommame").value;

      firebase.database().ref("/").child(roomanme).update({
            purpose:"adding room name"
      });

      localStorage.setItem("room name",roomanme);
      window.location="Chat-time.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room name",name);
      window.location="kwiiter-page.html";
}