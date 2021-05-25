  // const ImageList = document.getElementById('image-list');
  // document.getElementById('message_image').addEventListener('change', function(e){
  //   const file = e.target.files[0];
  //   var width = file.naturalWidth;
  //   var height = file.naturalHeight;
  //   const blob = window.URL.createObjectURL(file);

  //     // 画像を表示するためのdiv要素を生成
  //     const imageElement = document.createElement('div');

  //     var image = blob;
  //     var width = image.naturalWidth;
  //     var height = image.naturalHeight;
  //     // 表示する画像を生成
  //     var canvas = document.createElement('canvas');
  //     canvas.width = width / 2;
  //     canvas.height = height / 2;
  //     canvas.getContext("2d").HTMLImageElement.drawImage(image, 0, 0, width / 2, height / 2);
  //     blobImage = canvas.toDataURL();
  //     // 生成したHTMLの要素をブラウザに表示させる
  //     imageElement.appendChild(blobImage);
  //     ImageList.appendChild(imageElement);
  //   });

window.addEventListener('load', function(){
  const resetButton = document.getElementById("reset_btn");
  const saveButton = document.getElementById("save_btn")

  resetButton.addEventListener('click', function(){
    this.setAttribute("style", "background-color: #FFFF99;")
    window.location.reload();
  })

  saveButton.addEventListener('click', function(){
    this.setAttribute("style", "background-color: #FFFF99;")
  })
});