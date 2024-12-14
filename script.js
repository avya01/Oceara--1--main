function getName(event){
  var name = document.getElementsByClassName("nameInput")[0].value;
  if(name === ""){
    alert("Name was not entered, kindly fill the field!")
    location.reload()
  }
  else{
    event.preventDefault();
    document.querySelector('.entry').remove();  
    document.getElementsByClassName("homeScreen")[0].style.display = "block";
    document.getElementsByClassName("nameDisplay")[0].innerHTML = "Hey, " + name + ".";
  }

  
}