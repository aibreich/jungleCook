const navMove = () => {
  const burger = document.querySelector(".fas");
  const nav = document.querySelector(".link-nav");
  const navLink = document.querySelector(".link-nav a");

  // the listener on the burger menu
  burger.addEventListener("click", () => {
    // using the nav-active to move the nav over
    nav.classList.toggle("nav-active");
  });
};
navMove();
function initFirebase() {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // var displayName = user.displayName;
      console.log("connected");
      $(".pName").css("display", "block");
      $(".pLink").css("display", "block");
      $(".pLinkn").css("display", "block");
      $(".pLog").css("display", "none");
      // loadUserRecipe();
    } else {
      console.log("user is not there");
      $(".pName").css("display", "none");
      $(".pLink").css("display", "none");
      $(".pLinkn").css("display", "none");
      $(".pLog").css("display", "block");
      // loadPublicRecipe();
    }
  });
  // firebase
  //   .auth()
  //   .signInAnonymously()
  //   .then(() => {
  //     console.log("Signed In!");
  //   })
  //   .catch((error) => {
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     _db = [];
  //   });
}

function loadUserRecipe() {
  $("#app").empty();
  $.getJSON("data/data.json", function (recipes) {
    console.log(recipes.USER_RECIPES);
    $.each(recipes.USER_RECIPES, function (index, recipe) {
      console.log("recipe: " + index + " " + recipe.recipeName);
      console.log(recipe.recipeName);
      $("#app").append(`<div class="foods">
    
      <div class="top-half">
          <div class="img-box">
           
          <h1 >${recipe.recipeName}</h1>
          <div class="food-img"></div>
          </div>
          
      <div class="text-cont">
          <h2>Description:</h2>
          <p >${recipe.recipeDesc}</p>
      <h3>Total Time:</h3>
      <p>1h 24min</p>
      <h3>Servings:</h3>
      <p>4 servings</p>
      </div>
      </div>
      
      <div class="ingredients">
          <h2>Ingredients:</h2>
          <p >${recipe.ingred1}</p>
          <p >${recipe.ingred2}</p>
          <p >${recipe.ingred3}</p>
          <p >${recipe.ingred4}</p>
          <p >${recipe.ingred5}</p>
          <p >${recipe.ingred6}</p>
          <p >${recipe.ingred7}</p>
          <p >${recipe.ingred8}</p>
      </div>
      <div class="instructions">
          <h2>Instructions:</h2>
          <p ${index}>${recipe.instr1}</p>
          <p ${index}>${recipe.instr2}</p>
          <p ${index}>${recipe.instr3}</p>
          <p ${index}>${recipe.instr4}</p>
          <p ${index}>${recipe.instr5}</p>
          
      </div>
      <footer>
          <div class="copyright">
              Copyright © 2019 The Jungle Cook
          </div>
      
          <div class="foot-nav">
              
              <a href="#/browse">Recipes by Categories</a>
              <a href="#/browse">Privacy and Copyright</a>
              <a href="#/create" class="pLinkn">Create Recipe</a>
              <a href="#/yourrecipe" class="pLinkn">Your Recipes</a>
          </div>
          <div class="fb-logo"></div>
          <div class="insta-logo"></div>
      </footer>
  </div>`);
    });
    // <p ${index}>${recipe.recipeName}</p>`
  }).fail(function (jqxhr, textStatus, error) {
    console.log(jqxhr + textStatus + error);
    // loadPublicRecipes();
  });
}
function loadPublicRecipe() {
  $("#app").empty();
  $.getJSON("data/data.json", function (recipes) {
    console.log(recipes.PUBLIC_RECIPES);
    $.each(recipes.PUBLIC_RECIPES, function (index, recipe) {
      console.log("recipe: " + index + " " + recipe.recipeName);
      // $("#app").append(`<p>${recipe.recipeName}</p>`);
    });
  }).fail(function (jqxhr, textStatus, error) {
    console.log(jqxhr + textStatus + error);
  });
}
function createUser() {
  let password = $("#password").val(); // $("#password").val();
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
      console.log(userCredential.user);
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
}
function login() {
  // e.preventDefault();

  let lpassword = $("#lpassword").val(); // $("#password").val();
  let lemail = $("#lemail").val();
  firebase
    .auth()
    .signInWithEmailAndPassword(lemail, lpassword)
    .then((userCredential) => {
      // Signed in
      console.log("signed In");
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}
function signout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      // Sign-out successful.
      console.log("signed out");
    })
    .catch((error) => {
      // An error happened.
      console.log("error");
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
function removeNav(page) {
  $("a").click(function () {
    console.log("clicked");
    $(".link-nav").removeClass("nav-active");
  });
}

var ingredCounter = 3;

function addIngredient(e) {
  console.log(e);
  ingredCounter++;
  $(".form").append(
    `<input id="ind${ingredCounter}" type="text" placeholder="Ingredient #${ingredCounter}">`
  );
}
function addInstruction(e) {
  console.log(e);
  ingredCounter++;
  $(".form2").append(
    `<input id="ins${ingredCounter}" type="text" placeholder="Instruction #${ingredCounter}">`
  );
}

// $(".recipe").addEventListener("click");
// console.log("clicked");
// function addBrowseListeners
// $(".recipe a").click(function (e) {
//   console.log("clicked");
//   route();
// });

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

function initListeners() {
  $(window).on("hashchange", route);
  $(".recipe a").click(function (e) {
    console.log("clicked");
    // route();
  });
  route();
}

$(document).ready(function () {
  try {
    let app = firebase.app();
    initFirebase();
    initListeners();
  } catch {
    console.error(e);
  }

  model.placholder("home");
});
