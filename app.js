var txtInput = document.querySelector("#textInput");
var btnTranslate = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#textOutput")
var getURL = "https://api.funtranslations.com/translate/shakespeare.json";

function translateURL(txtInput) {
    return `${getURL}?text=${txtInput}`;
} 
function errorHandler(error) {
    console.log("There is some error", error);
}
btnTranslate.addEventListener("click", function eventPlay() {
    var inputText = txtInput.value;
    // console.log(txtInput);
    // console.log(translateURL(txtInput))
    fetch(translateURL(inputText))
    .then(response => response.json())
    .then(json => {
        // console.log(json);
        var result = json;
        txtOutput.innerText = result;
        console.log(result);
    })
    .catch(errorHandler);
});