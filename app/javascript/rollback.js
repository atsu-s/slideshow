document.addEventListener("DOMContentLoaded", function(){

  const rollBackButton = document.getElementById("roll_back_btn")
  const backButton = document.getElementById("back_btn")


  rollBackButton.addEventListener('mouseover', function(){
    this.setAttribute("style", "opacity: 0.7;")

  });

  rollBackButton.addEventListener('mouseout', function(){
    this.removeAttribute("style", "opacity: 0.7;")
    
  });

  backButton.addEventListener('click', function(){
    backButton.setAttribute("style", "color: #FFF;");
  });
})