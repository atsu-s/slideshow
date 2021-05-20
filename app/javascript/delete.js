window.addEventListener('load', function(){

  const showScreen = document.getElementById("show_screen")
  const deleteButton = document.getElementById("delete_btn")
  const deleteScreen = document.getElementById("delete_screen")
  const slideDestroy = document.getElementById("slide_destroy")
  const cancelButton = document.getElementById("cancel_btn")
  const deleteSubmit = document.getElementById("delete")

  deleteButton.addEventListener('click', function(){
    showScreen.setAttribute("style", "display:none;");
    deleteScreen.setAttribute("style", "display:flex;");
    slideDestroy.setAttribute("style", "display:flex;");
    cancelButton.setAttribute("style", "display:inline;");
    deleteSubmit.setAttribute("style", "display:inline;");
  
    cancelButton.addEventListener('click', function(){
      window.location.reload();
    });
  });
});