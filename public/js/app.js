const navMove = () => {
    const burger = document.querySelector(".fas")
    const nav = document.querySelector(".link-nav")
    const navLink = document.querySelector('.link-nav a')

    // the listener on the burger menu
    burger.addEventListener('click', () => {
        // using the nav-active to move the nav over
        nav.classList.toggle('nav-active');
    });
    
};
navMove();
function initFirebase() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // var displayName = user.displayName;
            console.log("connected")
            $(".pName").css("display", "block");
            $(".pLink").css("display", "block");
            $(".pLog").css("display", "none");
        } else {
            console.log("user is not there");
            $(".pName").css("display", "none");
            $(".pLink").css("display", "none");
            $(".pLog").css("display", "block");
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

// function initListener() {
//     $(".btn").click(function(e){
//         console.log("clicked")
//         e.preventDefault();
//         let btnID = e.currentTarget.id;
//         if(btnID == "create"){
//             createUser();
//         }else if(btnID == "login"){
//             login();
//         }else if(btnID == "signout"){
//             signout();
//         }
//     })
// }
function removeNav(page){
    $('a').click(function(){
        console.log("clicked")
        $('.link-nav').removeClass('nav-active');
    });
}

function route() {
    let hashTag = window.location.hash;
    let pageID = hashTag.replace("#/", "");

    if (pageID == "") {
        model.placholder("home");
        console.log("Grabbing:" + pageID);
    } else {
        model.placholder(pageID);
        console.log("Grabbing:" + pageID);
    }
    
    removeNav(pageID);
}

function initListeners(){
    $(window).on("hashchange", route);
    route();
    
}

$(document).ready(function(){
    
    try {
        let app = firebase.app();
        initFirebase();
        initListeners();
        

    } catch {
        console.error(e);
    }
    
    model.placholder("home")
}) 



