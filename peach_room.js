var firebaseConfig = {
    apiKey: "AIzaSyCs2RhwEFkQaZBKOWBOiK524nxyKeweobA",
    authDomain: "kwitter-6df62.firebaseapp.com",
    databaseURL: "https://kwitter-6df62-default-rtdb.firebaseio.com",
    projectId: "kwitter-6df62",
    storageBucket: "kwitter-6df62.appspot.com",
    messagingSenderId: "702097842582",
    appId: "1:702097842582:web:bb9bb31b6614484e99fdb7"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name ; 

function addRoom(){
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name", room_name);
    window.location = "kwitter_page.html";
} 

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
//End code
    });});}
getData();

function redirectToRoomName(name){
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html;"
}

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="kwitter.html";
}