$(document).ready(function(){

    var right = 0;
    
    var time = 101;

    var btnclk = 0;
  
setInterval(function(){
  time--;
  $("#time-left").html(time);
    if (time === 0) {
    alert("all done! you answered " + right + " out of 15! Good job?");
    time = "done!";
    }
}, 1000);

$("button").click(function(){
  $(this).closest(".question").hide(1000);
    btnclk++;
    right = Number(right) + Number($(this).val());
    console.log (right)
    if (btnclk === 15) {
      time = "done!";
      alert("all done!");
      alert("Lets see how you did");
      alert("You answered " + right + " out of 15! Good job?");
      }
    });

});

