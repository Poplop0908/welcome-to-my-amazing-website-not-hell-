var firebaseConfig = {
      apiKey: "AIzaSyCQtraXQUKvKeKjj5bUKDfUYconQryIg1w",
      authDomain: "classtest-333f0.firebaseapp.com",
      databaseURL: "https://classtest-333f0-default-rtdb.firebaseio.com",
      projectId: "classtest-333f0",
      storageBucket: "classtest-333f0.appspot.com",
      messagingSenderId: "1030867850677",
      appId: "1:1030867850677:web:d22841184485b0952bb5fc",
      measurementId: "G-FS5KTBNBHV"
    };
firebase.initializeApp(firebaseConfig);


function getData() 
{firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();


function redirectToRoomName(name)
{
       console.log(name);
       localStorage.setItem("room_name", name);
       window.location = "kwitter_page.html";
}

function send()
{
       msg = document.getElementById("msg").value;
       firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
       });

       document.getElementById("msg").value = "";
}
function logout() {
       localStorage.removeItem("user_name");
       localStorage.removeItem("room_name");
            window.location = "kwitter.html";
}