$(function(){
    var $hi = "Hi, I'm Hyunchul Cho",
        i = 0;
    var typing = setInterval(function(){
        $('.home-intro').append($hi.charAt(i));
        (i == $hi.length-1)? clearInterval(typing): i++;
    }, 55);

    $('.contact-submit').click(function(event){
        if ($('#contact-name').val()==""||$('#contact-email').val()==""||$('#contact-message').val()==""){
            event.preventDefault();
            $('.contact-errorMsg').text("Please enter the contents")
            .css('opacity', 1);
        };
    });
})

