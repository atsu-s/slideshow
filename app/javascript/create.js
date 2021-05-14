window.addEventListener('load', function(){
  const list = document.getElementById('list');
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    // 要素取得
    const ImageFile = document.getElementById("image_file");
    const Set = document.getElementById("set");
    // 要素複製
    const clone_ImageFile = ImageFile.firstElementChild.cloneNode(true);

    Set.after(clone_ImageFile);

  })
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
});