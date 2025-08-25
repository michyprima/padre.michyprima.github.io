function floatingFade(id) {
    $(id).fadeIn(function() {
      window.setTimeout(function() {
        $(id).fadeOut('slow');
      }, 1500);
    });
    issending = false;
}

var issending = false;

function sendForm() {
    
    if(!issending) {
        issending = true;
        $.ajax({   
           type: 'POST',   
           url: "https://cdn.dreamcode.it/sendmail.php",   
           data: $('#sendmail').serialize(),
           success: function(data)
           {
                floatingFade("#success");
                $(".input-lg").val("");
           },
           error: function(data)
           {
                floatingFade("#fail");
           } 
        });
    }
    
    return false;
    
}
