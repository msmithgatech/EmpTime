<script src="https://www.gstatic.com/firebasejs/4.12.0/firebase.js"></script>

<script>
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCKFSHZ9WZ6hHtuZZhnKFRgsFwhmiZv2tQ",
    authDomain: "wk7-emptime.firebaseapp.com",
    databaseURL: "https://wk7-emptime.firebaseio.com",
    projectId: "wk7-emptime",
    storageBucket: "",
    messagingSenderId: "1006162136934"
};
firebase.initializeApp(config);


    var name = 'Thelma Jane Winters';
    var role = 'Probee';
    var startDate =  ;
    var monthlyRate = 0;


$('adduser').on("click" event() {

    dataRef.ref().on("child_added", function(childSnapshot)) {
        console.log(childSnapshot.val().name);
        console.log(childSnapshot.val().role);
        console.log(childSnapshot.val().startDate);
        console.log(childSnapshot.val().monthlyRate);
    }
}



</script>

