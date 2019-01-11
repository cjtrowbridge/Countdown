$(".countdown").each(function(index){
  
  //Get date from component
  var countdownTo = new Date( $(this).data('countdown') ).getTime();
  
  var x = setInterval(function() {
    
    //Get current time
    var now = new Date().getTime();

    //Calculate remaining time
    var remaining = countdownTo - now;

    // Calculate remaining days, hours, minutes, seconds
    var days    = Math.floor(remaining / (1000 * 60 * 60 * 24));
    var hours   = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((remaining % (1000 * 60)) / 1000);

    //Format the output
    var output = days + ":" + hours+":" + minutes + ":" + seconds;

    //If counting up, add "ago"
    if(remaining < 0){
      clearInterval(x);
      output = output + " ago";
    }
    
    $(this).html(output);
    
  }, 1000);
});
