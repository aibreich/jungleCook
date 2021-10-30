function initFirebase() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // var displayName = user.displayName;
            console.log("connected")
            $(".pName").css("display", "block")
        } else {
            console.log("user is not there");
            $(".pName").css("display", "none")
        }
    })
    // firebase
    // .auth()
    // .signInAnonymously()
    // .then(() => {
    //     console.log("Signed In!");
    // })
    // .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     _db = [];
    // });
}
function createUser() {
    let password = $("#password").val();// $("#password").val();
    let email = $("#email").val();
    let fName = $("#fName").val();
    let lName = $("#lName").val();
    console.log("create user button clicked");

    firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(userCredential.user)
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
}
function login() {
    let lpassword = $("#lpassword").val();// $("#password").val();
    let lemail = $("#lemail").val();
    firebase
    .auth()
    .signInWithEmailAndPassword(lemail, lpassword)
  .then((userCredential) => {
    // Signed in
    console.log("signed In")
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });

}
function signout() {
    firebase
    .auth()
    .signOut()
    .then(() => {
        // Sign-out successful.
        console.log("signed out")
      }).catch((error) => {
        // An error happened.
        console.log("error")
      });
}

function initListener() {
    $(".btn").click(function(e){
        console.log("clicked")
        e.preventDefault();
        let btnID = e.currentTarget.id;
        if(btnID == "create"){
            createUser();
        }else if(btnID == "login"){
            login();
        }else if(btnID == "signout"){
            signout();
        }
    })
}
function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#/", "");

    if (pageID == "") {
        model.placholder("home")
    } else {
        model.placholder(pageID)
    }
}

function initListeners(){
    $(window).on("hashchange", route);
    route();
}

$(document).ready(function(){
    initListener();
    try {
        let app = firebase.app();
        initFirebase();
        initListeners();
        

    } catch {
        console.error(e);
    }
    
    model.placholder("home")
}) 

// this is my function to set up each of the var
const navMove = () => {
    const burger = document.querySelector(".fas")
    const nav = document.querySelector(".link-nav")
    // the listener on the burger menu
    burger.addEventListener('click', () => {
        // using the nav-active to move the nav over
        nav.classList.toggle('nav-active');
    });
};

navMove();