
navBar();
signUp();




function navBar()
{
  var sandwich = document.querySelector(".sandwich");
  var listItem = document.querySelectorAll("nav ul li");

  sandwich.addEventListener('click', function(){

    for(var i = 0, length = listItem.length; i < length; i++){

        listItem[i].classList.toggle("hide");
    }
  });

  window.onresize = setHide;

  function setHide() {
    if(listItem[0].classList.contains("hide")){
        for(var i = 0, length = listItem.length; i < length; i++)
          listItem[i].classList.toggle("hide");
      }
    }
  }

function shrinkForm(callback){
  var form = document.querySelector(".container");
  form.classList.add("shrink");
  callback();
}

function signUp()
{
  var submit = document.querySelector("#contact-submit");
  submit.addEventListener('click', function(){

    var animate = function(){
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var phone = document.querySelector("#phone").value;
    var form = document.querySelector("form").value;
    container = document.querySelector(".container");
    container.classList.toggle("submitted");
    container.classList.remove("shrink");
    container.innerHTML = "Thank you " + name + " We'll send an email to " + email +
      " or call you at " + phone;
}

    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var phone = document.querySelector("#phone").value;
    var form = document.querySelector("form").value;

    if(name && email && phone){
      shrinkForm(animate);
      }
    else{
      console.log("failed");
    }
  });

  };
