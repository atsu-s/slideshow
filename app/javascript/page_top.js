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
})