// Function to display date
function myDate() {
    document.getElementById("CurrentDate").innerHTML = Date();
}
//makes text bold
function bold(para) {
    para.style.fontWeight = "bolder";
}
//makes text normal
function normal(para) {
    para.style.fontWeight = "normal";
    
}

// This will create the P element and added all the needed buttons
function createP() {
    //P element creation
    var para = document.createElement("p");
    var node = document.createTextNode("My area of intrest is Web design and my hobbies are swimming and horse riding ");
    para.appendChild(node);

    // Button to make text bold
     var BoldButton = document.createElement("button");
    BoldButton.onclick = function () {
        bold(para);
    };
    BoldButton.appendChild(document.createTextNode(" make it Bold"));
   
    // Button to make text normal
    var NormalButton = document.createElement("button");
    NormalButton.onclick = function () {
        normal(para);
    };
    NormalButton.appendChild(document.createTextNode("return it Normal"));

   
   
    // Appending all child to div element
    var element = document.getElementById("div1");
    element.appendChild(para);
    element.appendChild(BoldButton);
    element.appendChild(NormalButton);
    element.appendChild(document.createElement("br"));
    element.appendChild(ChangeTextButton);
    element.appendChild(ChangeTextColorButton);
    }