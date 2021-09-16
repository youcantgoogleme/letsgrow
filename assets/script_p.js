function checkConnection(postData, $) {
    $.ajax({
        type: 'POST',
        url: 'https://www.sellerpanda.com/store_swatches/',
        data: postData,
        success: function (response) {

            try {
                response = JSON.parse(response);
            } catch (e) {

                return;
            }

            if (response.result == '1') {

                if(response.message == 'cancel' && ($('.swatch-panda-cont').length || $('.panda-swatches-coll-cont').length)) {
                    $('.panda-swatches-cont').css('display','none');
                  	$('.panda-swatches-coll-cont').css('display','none');
                    $(window).load(function() { $('.selector-wrapper').show(); $('.radio-wrapper').show(); });
                }

            }

        }
    });

    return false;
}