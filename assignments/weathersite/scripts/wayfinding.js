
var path = window.location.pathname.split('/').pop();
console.log("path="+path);
var target = $('li:contains(path)');

target.addClass('active');
console.log("target="+target);
