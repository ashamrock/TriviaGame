$(document).ready(function(){

    var right = 0;
    
  //  var wrong = 0;
    
    var time = 30;

    var btnclk = 0;

    setTimeout(timeout, 1000 * 5);
    
    $("button").click(function(){
        $(this).closest(".question").hide(1000);
        btnclk++;
        console.log (btnclk)
        if (btnclk === 2) {
            alert("all done!");
            alert("Lets see how you did");
            alert("You answered " + right + " out of 5! Good job?");
          }
    });

    function timeout() {
        alert("all done! you answered " + right + " out of 5! Good job?");
        }
          
});