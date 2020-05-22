///////////////// Define The Var
let myButton = document.getElementById("bttn"),
  myInformation = document.getElementById("show");

//////////////// Function On The Button
function getInfo() {
  var myRequest = new XMLHttpRequest();

  myRequest.onreadystatechange = function() {
    console.log(this.status);

    if (this.readyState === 4 && this.status === 200) {
      ////////////////// Convert JSON Object To JS Object
      let myJsObject = JSON.parse(this.responseText),
        myElements = " ";

      ///////////////// Start For Loop By Using ES6
      for (let i = 0; i < myJsObject.length; i += 1)
        //////////////// The Output Using Concatinating By ES6
        myElements += `<p> Pesson Id Is : ${myJsObject[i].id} <br> 
        'The Name Is : ' ${myJsObject[i].name} <br>
        the E-mail is : ${myJsObject[i].email} <br> 
        the Body is : ${myJsObject[i].body} </p>`;

      ///////////////// End For Loop By Using ES6

      /////////////// The Div Contains The Output
      myInformation.innerHTML = myElements;
    }
  };

  myRequest.open("Get",
   "https://jsonplaceholder.typicode.com/posts/1/comments",
    true);
  myRequest.send();
}
