function sliderAfterChange(){
    $('#sliderblock .sliderimg').each(function(e){
        if ($(this).attr('src') == $('.nivo-main-image').attr('src')){
            var cdata = $(this).attr('data-roomid');
            $('#bookingbutton').bind("click", function(p){
                window.location.href = 'bronirovanie/?roomid=' + cdata;
            });
            $('#price').text($(this).attr('data-price') + 'р ');
            $('#discount').text(' - ' + $(this).attr('data-discount') + '% ');
            $('#pricewithdiscount').text($(this).attr('data-priceres') + ' р');
        }
    });
}