function wayfinding(){
    var path = window.location.pathname.split('/').pop();

    var target = $('a [href="' + path + '"]');
    
    target.addClass('active');
}