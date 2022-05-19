function myFunction() {
  var copyText = document.getElementById("link");
  copyText.select();
  copyText.setSelectionRange(0, 99999);  /*Для мобильных устройств */
  document.execCommand("copy");
}
function myFunction1() {
  var copyText = document.getElementById("login");
  copyText.select();
  copyText.setSelectionRange(0, 99999);  /*Для мобильных устройств */
  document.execCommand("copy");
}
function myFunction2() {
  var copyText = document.getElementById("pass");
  copyText.select();
  copyText.setSelectionRange(0, 99999);  /*Для мобильных устройств */
  document.execCommand("copy");
}
