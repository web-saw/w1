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
  var $popUpBtn = $(".popup__btn");
  var $popUp = $("#popup");
  var $popUp2 = $("#popup-2"); 
  var $popUp3 = $("#popup-3"); 
  var $popUp4 = $("#popup-4"); 
  var $popUp5 = $("#popup-5"); 
  var $popUp6 = $("#popup-6"); 
  var $popUp7 = $("#popup-7"); 
  var $popUp8 = $("#popup-8"); 
  var $popUp9 = $("#popup-9"); 
  var $popUp10 = $("#popup-10"); 
  var $popOverlay = $(".pop-overlay");
  var $popWindowItem = $(".popup__window");
  var $popWindow = $("#popup-window");
  var $popWindow2 = $("#popup-window-2"); 
  var $popWindow3 = $("#popup-window-3"); 
  var $popWindow4 = $("#popup-window-4"); 
  var $popWindow5 = $("#popup-window-5"); 
  var $popWindow6 = $("#popup-window-6"); 
  var $popWindow7 = $("#popup-window-7"); 
  var $popWindow8 = $("#popup-window-8"); 
  var $popWindow9 = $("#popup-window-9"); 
  var $popWindow10 = $("#popup-window-10"); 
  var $popClose = $(".popup__window .btn-close");

  $popUp.on("click", function() {
    $popOverlay.fadeIn();
    $popWindow.fadeIn();
  });
  
  $popUp2.on("click", function() {
    $popOverlay.fadeIn();
    $popWindow2.fadeIn();
  });

    $popUp3.on("click", function() {
    $popOverlay.fadeIn();
    $popWindow3.fadeIn();
  });

    $popUp4.on("click", function() {
    $popOverlay.fadeIn();
    $popWindow4.fadeIn();
  });

    $popUp5.on("click", function() {
    $popOverlay.fadeIn();
    $popWindow5.fadeIn();
  });

    $popUp6.on("click", function() {
    $popOverlay.fadeIn();
    $popWindow6.fadeIn();
  });

    $popUp7.on("click", function() {
    $popOverlay.fadeIn();
    $popWindow7.fadeIn();
  });

    $popUp8.on("click", function() {
    $popOverlay.fadeIn();
    $popWindow8.fadeIn();
  });

    $popUp9.on("click", function() {
    $popOverlay.fadeIn();
    $popWindow9.fadeIn();
  });

    $popUp10.on("click", function() {
    $popOverlay.fadeIn();
    $popWindow10.fadeIn();
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