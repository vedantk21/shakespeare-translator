var txtInput = document.querySelector("#textInput");
var btnTranslate = document.querySelector("#btn-translate");
var txtOutput = document.querySelector("#textOutput")
var getURL = "https://api.funtranslations.com/translate/shakespeare.json";

function translateURL(input) {
    return `${getURL}?text=${input}`;
} 

function errorHandler(error) {
    console.log("There is some error", error);
}

btnTranslate.addEventListener("click", function eventPlay() {
    var inputText = txtInput.value;
    fetch(translateURL(inputText))
    .then(response => response.json())
    .then(json => {
        var result = json.contents.translated;
        txtOutput.innerText = result;
    })
    .catch(errorHandler);
});