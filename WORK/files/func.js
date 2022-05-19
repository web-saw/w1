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
$(function() {
  var $popUpBtn = $(".popup-btn");
  var $popUp = $("#popup");
  var $popUp2 = $("#popup-2"); // for second window
  var $popOverlay = $(".pop-overlay");
  var $popWindowItem = $(".popup-window");
  var $popWindow = $("#popup-window");
  var $popWindow2 = $("#popup-window-2"); // for second window
  var $popClose = $(".popup-window .btn-close");

  $popUp.on("click", function() {
    $popOverlay.fadeIn();
    $popWindow.fadeIn();
  });
  
  // for second window
  $popUp2.on("click", function() {
    $popOverlay.fadeIn();
    $popWindow2.fadeIn();
  });

  $popClose.on("click", function() {
    $popOverlay.fadeOut();
    $popWindowItem.fadeOut();
  });

  $(function() {
    $(document).on("click", function(event) {
      if ($(event.target).closest($popUpBtn).length) return;
      if ($(event.target).closest($popWindowItem).length) return;
      $popOverlay.fadeOut();
      $popWindowItem.fadeOut();
      event.stopPropagation();
    });
  });
});