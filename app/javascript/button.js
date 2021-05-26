document.addEventListener("DOMContentLoaded", function(){

  const signUp = document.getElementById("sign_up")

  signUp.addEventListener('click', function(){
    this.setAttribute("style", "background-color:#FF9933;")
  })

  const slideTop = document.getElementById("slide_img")

  slideTop.addEventListener('click', function(){
    this.setAttribute("style", "filter:opacity(90%);")
  })

});