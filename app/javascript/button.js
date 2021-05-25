document.addEventListener("DOMContentLoaded", function(){

  const pageTop = document.getElementById("page_top")
  
  pageTop.addEventListener('mouseover', function(){
    this.setAttribute("style", "color:#FFBEDA;")
  })

  pageTop.addEventListener('mouseout', function(){
    this.removeAttribute("style", "color:#FFBEDA;")
  })

  pageTop.addEventListener('click', function(){
    this.setAttribute("style", "color:white;")
  })

  const slideTop = document.getElementById("slide_img")

  slideTop.addEventListener('click', function(){
    this.setAttribute("style", "filter:opacity(90%);")
  })
});