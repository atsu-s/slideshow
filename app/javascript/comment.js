// const buildHTML = (XHR) => {
//   const item = XHR.response.comment;
//   const html = `
//     <div class="post">
//       <div class="post-content">
//         ${item.content}
//       </div>
//     </div>`;
//   return html;
// };

// function post (){
//   const submit = document.getElementById("comment_submit");
//   submit.addEventListener("click", (e) => {
//     e.preventDefault();
//     const form = document.getElementById("comment_form");
//     const formData = new FormData(form);
//     const XHR = new XMLHttpRequest();
//     XHR.open("POST", "/comments", true);
//     XHR.responseType = "json";
//     XHR.send(formData);
//     XHR.onload = () => {
//       console.log(XHR.response);
//       const list = document.getElementById("comment_list");
//       const formText = document.getElementById("comment_content");
//       list.insertAdjacentHTML("afterend", buildHTML(XHR));
//       formText.value = "";
//     };
//   });
// };

// window.addEventListener('load', post);