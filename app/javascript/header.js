window.addEventListener('load', function(){

  const shareSlideButton = document.getElementById("share_slide_btn")

  shareSlideButton.addEventListener('click', function(){
    this.setAttribute("style", "background-color: #FFFF99;")
  })
});