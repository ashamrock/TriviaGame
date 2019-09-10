$(document).ready(function(){

    var right = 0;
    var time = 3;
    var btnclk = 0;

setInterval(function(){
  time--;
  $("#time").html(time);
    if (time === 0) {
    time = "done!";
    $('p').html("all done! you answered " + right + " out of 15! Good job?");
    }
}, 1000);

$("button").click(function(){
  $(this).closest(".question").hide(1000);
    btnclk++;
    right = Number(right) + Number($(this).val());
    console.log (right)
    console.log (btnclk)
    if (btnclk === 1) {
    time = "done!";
    $('p').html("you finished!");
    setTimeout(a1, 3000);
    setTimeout(a2, 7000);
    }
    });

    function a1() {
      $('p').html("Lets see how you did");
    }

    function a2() {
      $('p').html("You answered " + right + " out of 15! Good job?");
    }

});

