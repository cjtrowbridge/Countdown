function UpdateCountdowns(){
  var countCountdowns = 0;
  $("progress.countdown").each(function(index){
    var fromDate = new Date( $(this).data('from') );
    var toDate = new Date( $(this).data('to') );
    
    var now = new Date().getTime();
    
    var duration = toDate - fromDate;
    var elapsed = now - fromDate;
    
    var percentElapsed = elapsed / duration;
    
    //convert to percent
    percentElapsed *= 100;
    
    //round off
    percentElapsed = Math.floor(percentElapsed);
    
    $(this).attr('value',percentElapsed);
    $(this).attr('max',100);
    
  });
  $(":not(progress).countdown").each(function(index){
    countCountdowns++;
    
    //Get date from component
    var theDate = $(this).data('countdown');
    var countdownTo = new Date( theDate ).getTime();

    //Get current time
    var now = new Date().getTime();

    //Calculate remaining time
    var remaining = countdownTo - now;

    // Calculate remaining days, hours, minutes, seconds
    var years   = Math.floor(remaining  % (1000 * 60 * 60 * 24 * 365));
    var days    = Math.floor(remaining  % (1000 * 60 * 60 * 24 * 365) / (1000 * 60 * 60 * 24));
    var hours   = Math.floor((remaining % (1000 * 60 * 60 * 24))      / (1000 * 60 * 60));
    var minutes = Math.floor((remaining % (1000 * 60 * 60))           / (1000 * 60));
    var seconds = Math.floor((remaining % (1000 * 60))                / 1000);

    //Format the output
    var output = ""
    if(years > 0){
      output+= years + " years, ";
    }
    if(days > 0){
      output+= days + " days, ";
    }
    if(hours>0){
      output+= hours+" hours, ";
    }
    if(minutes>0){
      output+= minutes + " minutes, ";
    }
    if(seconds>0){
      output+= seconds + " seconds";
    }

    //If counting up, add "ago"
    if(remaining < 0){ 
      output = output + " ago";
    }
    
    output = output.trim();

    $(this).html(output);
    
  });
  $(".countdown-days").each(function(index){
    countCountdowns++;
    
    //Get date from component
    var theDate = $(this).data('countdown');
    var countdownTo = new Date( theDate ).getTime();

    //Get current time
    var now = new Date().getTime();

    //Calculate remaining time
    var remaining = countdownTo - now;

    // Calculate remaining days, hours, minutes, seconds
    var days    = Math.floor(remaining / (1000 * 60 * 60 * 24));
    
    //Format the output
    var output = ""
    if(days > 0){
      output+= days + " days ";
    }
    
    //If counting up, add "ago"
    if(remaining < 0){ 
      output = output + " ago";
    }
    
    output = output.trim();

    $(this).html(output);
    
  });
  
  return countCountdowns;
}

var x = setTimeout(function(){
  if(UpdateCountdowns()==0){
    clearInterval(x);
  }
}, 1000);
