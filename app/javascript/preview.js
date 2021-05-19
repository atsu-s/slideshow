document.addEventListener('DOMContentLoaded', function(){
  if ( document.getElementById('message_image')){
    const ImageList = document.getElementById('image-list');

    const createImageHTML = (blob) => {
       // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div');

      // 表示する画像を生成
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);

      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage);
      ImageList.appendChild(imageElement);

      // 外枠非表示
      document.getElementById("form_image").style.border ="none";
    };

    document.getElementById('message_image').addEventListener('change', function(e){
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob);
    });
  }

  if ( document.getElementById('message_image_1')){
    const ImageList = document.getElementById('image-list_1');

    const createImageHTML = (blob) => {
       // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div');

      // 表示する画像を生成
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);

      //リサイズ
      const orgWidth  = blobImage.width;  // 元の横幅を保存
      const orgHeight = blobImage.height; // 元の高さを保存
      blobImage.width = 500;  // 横幅を400pxにリサイズ
      blobImage.height = orgHeight * (blobImage.width / orgWidth); // 高さを横幅の変化割合に合わせる

      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage);
      ImageList.appendChild(imageElement);

      // 外枠非表示
      document.getElementById("form_image_1").style.border ="none";
    };

    document.getElementById('message_image_1').addEventListener('change', function(e){
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob);
    });
  }

  if ( document.getElementById('message_image_2')){
    const ImageList = document.getElementById('image-list_2');

    const createImageHTML = (blob) => {
       // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div');

      // 表示する画像を生成
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);

      //リサイズ
      const orgWidth  = blobImage.width;  // 元の横幅を保存
      const orgHeight = blobImage.height; // 元の高さを保存
      blobImage.width = 500;  // 横幅を400pxにリサイズ
      blobImage.height = orgHeight * (blobImage.width / orgWidth); // 高さを横幅の変化割合に合わせる

      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage);
      ImageList.appendChild(imageElement);

      // 外枠非表示
      document.getElementById("form_image_2").style.border ="none";
    };

    document.getElementById('message_image_2').addEventListener('change', function(e){
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob);
    });
  }

  if ( document.getElementById('message_image_3')){
    const ImageList = document.getElementById('image-list_3');

    const createImageHTML = (blob) => {
       // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div');

      // 表示する画像を生成
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);

      //リサイズ
      const orgWidth  = blobImage.width;  // 元の横幅を保存
      const orgHeight = blobImage.height; // 元の高さを保存
      blobImage.width = 500;  // 横幅を400pxにリサイズ
      blobImage.height = orgHeight * (blobImage.width / orgWidth); // 高さを横幅の変化割合に合わせる

      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage);
      ImageList.appendChild(imageElement);

      // 外枠非表示
      document.getElementById("form_image_3").style.border ="none";
    };

    document.getElementById('message_image_3').addEventListener('change', function(e){
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob);
    });
  }

  if ( document.getElementById('message_image_4')){
    const ImageList = document.getElementById('image-list_4');

    const createImageHTML = (blob) => {
       // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div');

      // 表示する画像を生成
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);

      //リサイズ
      const orgWidth  = blobImage.width;  // 元の横幅を保存
      const orgHeight = blobImage.height; // 元の高さを保存
      blobImage.width = 500;  // 横幅を400pxにリサイズ
      blobImage.height = orgHeight * (blobImage.width / orgWidth); // 高さを横幅の変化割合に合わせる

      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage);
      ImageList.appendChild(imageElement);

      // 外枠非表示
      document.getElementById("form_image_4").style.border ="none";
    };

    document.getElementById('message_image_4').addEventListener('change', function(e){
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob);
    });
  }

  if ( document.getElementById('message_image_5')){
    const ImageList = document.getElementById('image-list_5');

    const createImageHTML = (blob) => {
       // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div');

      // 表示する画像を生成
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);

      //リサイズ
      const orgWidth  = blobImage.width;  // 元の横幅を保存
      const orgHeight = blobImage.height; // 元の高さを保存
      blobImage.width = 500;  // 横幅を400pxにリサイズ
      blobImage.height = orgHeight * (blobImage.width / orgWidth); // 高さを横幅の変化割合に合わせる

      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage);
      ImageList.appendChild(imageElement);

      // 外枠非表示
      document.getElementById("form_image_5").style.border ="none";
    };

    document.getElementById('message_image_5').addEventListener('change', function(e){
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob);
    });
  }

  if ( document.getElementById('message_image_6')){
    const ImageList = document.getElementById('image-list_6');

    const createImageHTML = (blob) => {
       // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div');

      // 表示する画像を生成
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);

      //リサイズ
      const orgWidth  = blobImage.width;  // 元の横幅を保存
      const orgHeight = blobImage.height; // 元の高さを保存
      blobImage.width = 500;  // 横幅を400pxにリサイズ
      blobImage.height = orgHeight * (blobImage.width / orgWidth); // 高さを横幅の変化割合に合わせる

      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage);
      ImageList.appendChild(imageElement);

      // 外枠非表示
      document.getElementById("form_image_6").style.border ="none";
    };

    document.getElementById('message_image_6').addEventListener('change', function(e){
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob);
    });
  }

  if ( document.getElementById('message_image_7')){
    const ImageList = document.getElementById('image-list_7');

    const createImageHTML = (blob) => {
       // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div');

      // 表示する画像を生成
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);

      //リサイズ
      const orgWidth  = blobImage.width;  // 元の横幅を保存
      const orgHeight = blobImage.height; // 元の高さを保存
      blobImage.width = 500;  // 横幅を400pxにリサイズ
      blobImage.height = orgHeight * (blobImage.width / orgWidth); // 高さを横幅の変化割合に合わせる

      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage);
      ImageList.appendChild(imageElement);

      // 外枠非表示
      document.getElementById("form_image_7").style.border ="none";
    };

    document.getElementById('message_image_7').addEventListener('change', function(e){
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob);
    });
  }

  if ( document.getElementById('message_image_8')){
    const ImageList = document.getElementById('image-list_8');

    const createImageHTML = (blob) => {
       // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div');

      // 表示する画像を生成
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);

      //リサイズ
      const orgWidth  = blobImage.width;  // 元の横幅を保存
      const orgHeight = blobImage.height; // 元の高さを保存
      blobImage.width = 500;  // 横幅を400pxにリサイズ
      blobImage.height = orgHeight * (blobImage.width / orgWidth); // 高さを横幅の変化割合に合わせる

      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage);
      ImageList.appendChild(imageElement);

      // 外枠非表示
      document.getElementById("form_image_8").style.border ="none";
    };

    document.getElementById('message_image_8').addEventListener('change', function(e){
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob);
    });
  }

  if ( document.getElementById('message_image_9')){
    const ImageList = document.getElementById('image-list_9');

    const createImageHTML = (blob) => {
       // 画像を表示するためのdiv要素を生成
      const imageElement = document.createElement('div');

      // 表示する画像を生成
      const blobImage = document.createElement('img');
      blobImage.setAttribute('src', blob);

      //リサイズ
      const orgWidth  = blobImage.width;  // 元の横幅を保存
      const orgHeight = blobImage.height; // 元の高さを保存
      blobImage.width = 500;  // 横幅を400pxにリサイズ
      blobImage.height = orgHeight * (blobImage.width / orgWidth); // 高さを横幅の変化割合に合わせる

      // 生成したHTMLの要素をブラウザに表示させる
      imageElement.appendChild(blobImage);
      ImageList.appendChild(imageElement);

      // 外枠非表示
      document.getElementById("form_image_9").style.border ="none";
    };

    document.getElementById('message_image_9').addEventListener('change', function(e){
      const file = e.target.files[0];
      const blob = window.URL.createObjectURL(file);

      createImageHTML(blob);
    });
  }
});