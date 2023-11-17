
var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];



var quill = new Quill('#editor', {
    modules: {
        toolbar: toolbarOptions
      },
      placeholder: "Write as You've Never Written Before",
    theme: 'snow',
  });


  // function submit(){
  //   var post = document.getElementById("post")
  //   var quilContent = quil.root.innerHTML;
  //   console.log(quilContent)
  //   post.innerHTML=quilContent;
    
  // }

  function publish(){
    var post = document.getElementById("post")
    // var postContainer = document.getElementById("postContainer");
    var quillContent = quill.root.innerHTML;
    console.log(quillContent)
    post.innerHTML = quillContent;
    post.style.border="2px solid black";
    post.style.textAlign="center"
    post.style.margin="auto 70vh"
    post.style.padding="20px"
    post.style.backgroundImage="url('https://images.pexels.com/photos/1242348/pexels-photo-1242348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"

    // post.style.width="30%";
    // post.style.height="50%"
    // post.style.fontSize="20px"


    post.style.backgroundSize = "cover";
    post.style.backgroundPosition = "center";
    post.style.backgroundRepeat = "no-repeat";
    post.style.color = "white";
    post.style.fontFamily = "sans-serif";
    post.style.fontSize = "20px";
    post.style.fontWeight = "bold";
    post.style.width = "30%";
    post.style.height = "50%";
    post.style.overflow = "auto";
    post.style.borderRadius = "10px";
    post.style.boxShadow = "0px 0px 10px black";
    post.style.lineHeight = "2";
    post.style.whiteSpace = "pre-wrap";
    post.style.wordBreak = "break-word";
    post.style.wordWrap = "break-word";
    post.style.textAlign = "justify";
    post.style.textJustify = "inter-word";
    post.style.textIndent = "50px";
    post.style.textAlignLast = "center";
    post.style.textJustify = "inter-word";
    
  }



  //apna code
  // function publish() {
  //   var qullvalue = quill.root.innerHTML;
  //   console.log(qullvalue)
  //   // var getText = localStorage.getItem("postTaxt");
  //   var postContainer = document.getElementById("postContainer");
  //     var getText = localStorage.getItem("postTaxt");
  // var getTitle = localStorage.getItem("title");
  //   postContainer.innerHTML +=`
  //   <div class="rightSection">
  //   <div class="rightbox">
  //       <div class="quote">
  //         <h2>${getTitle}</h2>
  //         <p>${getText}</p>
  //       </div>
   
  //   </div>
  //   </div>
  //   `
  // }

  // Post Rendering
// function publish() {
//   var postTitle = document.getElementById("form12").value;
//   var qullvalue = quill.root.innerHTML;
//   localStorage.setItem("title", postTitle);
//   localStorage.setItem("postTaxt", qullvalue);
//   var getText = localStorage.getItem("postTaxt");
//   var getTitle = localStorage.getItem("title");

//   var postContainer = document.getElementById("postContainer");
//   postContainer.innerHTML += `
//   <div class="rightSection">
//   <div class="rightbox">
//     <div class="imgBox">
//       <img src="img/codeImg.png" />
//     </div>
//     <div class="quote">
//       <h2>${getTitle}</h2>
//       <p>${getText}</p>
//     </div>
//   </div>
//   </div>

//   `;
// }
// publish();
