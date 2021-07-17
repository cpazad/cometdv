(function ($) {
    $(document).ready(function(){



    //Logout feature        
        $(document).on('click', '#logout_button',function(e) {
            e.preventDefault();
            $('#logout_form').submit();

        });
    });
})(jQuery)