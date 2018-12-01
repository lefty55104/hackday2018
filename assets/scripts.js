(function($){

    $(document).ready(function() {

        /* ***** Show Message On Click ***** */
        $( '.bet-list:not(.no-height) tr' ).click( function(e) {
            $( '#cart-message' ).fadeIn().delay(5000).fadeOut();
        });
        
        $( '.open-message' ).click( function(e) {
            var showItem = $(this).attr('href');
            $( showItem ).fadeIn();
        });

        $( '.close-modal' ).click( function(e) {
            $(this).parent().parent().fadeOut();
        });

    });

})(jQuery);