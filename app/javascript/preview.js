document.addEventListener('DOMContentLoaded', function() {
  if ( document.getElementById('message_image')){
    const ImageList = document.getElementById('image-list')

    // 選択した画像を表示する関数
    const createImageHTML = (blob) => {
       // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div')

      // 表示する画像を生成
      const blobImage = document.createElement('img')
      blobImage.setAttribute('src', blob)

      //リサイズ
      const orgWidth  = blobImage.width;  // 元の横幅を保存
      const orgHeight = blobImage.height; // 元の高さを保存
      blobImage.width = 500;  // 横幅を400pxにリサイズ
      blobImage.height = orgHeight * (blobImage.width / orgWidth); // 高さを横幅の変化割合に合わせる

      // フォームリサイズ
      // const formSize = document.getElementById('form-image')
      // formSize.width = blobImage.width
      // formSize.height = blobImage.height


      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage)
      ImageList.appendChild(imageElement)

    }

    document.getElementById('message_image').addEventListener('change', (e) => {


      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob)
    });
  }
});