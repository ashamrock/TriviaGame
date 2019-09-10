$(document).ready(function(){

    var right = 0;
    var time = 101;
    var btnclk = 0;

setInterval(function(){
  time--;
  $("#time").html(time);
    if (time === 0) {
    time = "done!";
    $('p').html("Times up! you answered " + right + " out of 15! Good job?");
    }
}, 1000);

$("button").click(function(){
  $(this).closest(".question").hide(1200);
    btnclk++;
    right = Number(right) + Number($(this).val());
    console.log (right)
    console.log (btnclk)
    if (btnclk === 15) {
    time = "done!";
    $('p').html("you finished!");
    setTimeout(a1, 1500);
    setTimeout(a2, 5000);
    }
    });

    function a1() {
      $('p').html("Lets see how you did");
    }

    function a2() {
      $('p').html("You answered " + right + " out of 15! Good job?");
    }

});

