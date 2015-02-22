// JQUERY CODE
//
// Heikki Heiskanen | Portfolio webpage
// 2014

//slidedown & slideup animaatio (piilottaa ja tuo esiin elementin)
var toggle = 0;
$('').click(function() {

	if (toggle == 0){
		$('').slideDown('slow');
		toggle=1;
	} else if (toggle == 1){
		$('').slideUp('slow');
		toggle=0;
	}
});


//navbar smooth scroll
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});





















