console.log('This would be the main JS file.');

$(document).ready(function(){
  $("#userCreated").mouseenter(function(){
    $(this).fadeToggle("slow");
  });
});
