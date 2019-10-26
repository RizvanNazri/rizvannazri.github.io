// callback form

var p = $('.window_wrap');
$('.telButton').click(function() {
    p.css({'display':'block'}).hide().fadeIn(500);
});

p.click(function(event) {
    if(event.target == this) {
        $(this).css({'display':'none'});
    }
});

$('.window_close').click(function() {
    p.css({'display':'none'});
});
    
$('#telButton').click(function(event) {
 
    event.preventDefault();
   
    var tel = $('#telForm').val();
   
    $('#backPhone').fadeOut(500,function() {
   
        $('<p>Отправка...</p>').appendTo($('.window')).hide().fadeIn(300,function() {
   
            $.ajax({
   
                type: 'POST',
                url: 'srv.php',
                data: 'tel=' + tel,
                dataType: 'json',
                success : function (json) {
                    if(json.error) {
                        $('.window p').last().remove();
                        $('#backPhone').fadeIn(300, function() {
                            alert(json.error);
                        });
                    }
                    else {
                        $('.window p').last().fadeOut(300, function() {
   
                            $(this).text('Заявка принята!').fadeIn(300, function () {
   
                                $('.window_wrap').delay(1500).fadeOut(300);
   
                            });
   
                        });
                    }
                }
   
            });
   
        });
   
    });
   
});