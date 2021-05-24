window.addEventListener('load', function(){

  const pullDownButton = document.getElementById("lists")
  const pullDownParents = document.getElementById("pull-down")

  const menuUp = document.getElementById("menu_up")
  const menuDown = document.getElementById("menu_down")

  const pullDownTop = this.document.getElementById("pull_down_list_1")
  const pullDownMiddle = this.document.getElementById("pull_down_list_2")
  const pullDownBottom = this.document.getElementById("pull_down_list_3")

  pullDownButton.addEventListener('mouseover', function(){
    this.setAttribute("style", "background-color:#FFBEDA;")
  })

  pullDownButton.addEventListener('mouseout', function(){
    this.removeAttribute("style", "background-color:#FFBEDA;")
  })

  pullDownButton.addEventListener('click', function() {
      // プルダウンメニューの表示と非表示の設定
    if (pullDownParents.getAttribute("style") == "display:block;") {
      // pullDownParentsにdisplay:block;が付与されている場合（つまり表示されている時）実行される
      menuUp.setAttribute("style", "display:inline;")
      menuDown.setAttribute("style", "display:none;")
      pullDownParents.removeAttribute("style", "display:block;")
    } else {
      // pullDownParentsにdisplay:block;が付与されていない場合（つまり非表示の時）実行される
      pullDownParents.setAttribute("style", "display:block;")
      menuUp.setAttribute("style", "display:none;")
      menuDown.setAttribute("style", "display:inline;")
      pullDownTop.animate([{opacity: '0'}, {opacity: '1'}], 1000)
      pullDownMiddle.animate([{opacity: '0'}, {opacity: '1'}], 2000)
      pullDownBottom.animate([{opacity: '0'}, {opacity: '1'}], 3000)
    }
  })
})