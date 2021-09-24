var btnTranslate = document.querySelector("#btn-space");
var txtInput = document.querySelector("#txt-space");
var outputDiv=document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/minion.json"

function getTranslatedURL(text){
    return serverURL + "?" + "text=" + text
}

function errorHandler(error){
    console.log("An error occured",error);
    alert("Somethings wrong! Please try again later")
}

function clickHandler(){
    var inputText= txtInput.value;

    fetch(getTranslatedURL(inputText))
    .then(response => response.json())
    .then(json => {
        var translatedText = json.contents.translated;
        outputDiv.innerText= translatedText;
        })
    .catch(errorHandler)

};

btnTranslate.addEventListener("click",clickHandler)
