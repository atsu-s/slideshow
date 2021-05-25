document.addEventListener("DOMContentLoaded", function(){
  const rollBack = document.getElementById("roll_back")
  const rollBackButton = document.getElementById("roll_back_btn")

  rollBack.addEventListener('mouseover', function(){
    this.setAttribute("style", "opacity: 0.7;")

  });

  rollBack.addEventListener('mouseout', function(){
    this.removeAttribute("style", "opacity: 0.7;")
    
  });

  rollBackButton.addEventListener('click', function(){
    rollBackButton.setAttribute("style", "color: #FFF;");
  });
})