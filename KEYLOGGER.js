for (let i = 1; i < 6; i++){
  document.getElementById("Key_" + i).addEventListener("click", function() {
  var now = new Date();
  console.log("Key " + i + ": " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds());
 }
