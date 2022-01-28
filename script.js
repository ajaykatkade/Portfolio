$(document).ready(function() {

    $(window).scroll(function() {
        if (this.scrollY > 20) {
            //console.log('scroll is greater than 20');
            $('.navbar').addClass("newnav");
            // $('.home').hide();
        } else {
            //console.log('scroll is less than 20');
            // $('.home').show();
            $('.navbar').removeClass("newnav");
        }
    });

});