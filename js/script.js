
var windowWidth = $(window).width();
//alert(windowWidth);
if(windowWidth <=767){
	//alert("I'm a Mini Device");
	collapse();
}
else{
	
}
function collapse(){
$('.navbar-collapse').click('li', function() {
		$('.navbar-collapse').collapse('hide');
	});
}

	/*
$(document).on('click.nav','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).removeClass('in').addClass('collapse');
    }
});*/
/* 
$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
}); */