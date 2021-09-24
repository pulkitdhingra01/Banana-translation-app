var btntraslate = document.querySelector("#btn-space");
var inputtxt = document.querySelector("#txt-space");
var outputtxt=document.querySelector("#output");

var serverurl = "https://api.funtranslations.com/translate/minion.json"

function gettranslatedURL(text){
    return serverurl+"?"+"text="+text
}

function errorhandler(error){
    console.log("An error occured",error)
    alert("Somethings wrong! Please try again later")
}

function clickhandler(){
    var inputtext= inputtxt.value;

    fetch(gettranslatedURL(inputtext))
    .then(response=>response.json())
    .then(json=>{
        var translatedtext = json.contents.translated
        outputtxt.innertext= translatedtext
    })
    .catch(errorhandler)

}

btntraslate.addEventListener("click",clickhandler)
