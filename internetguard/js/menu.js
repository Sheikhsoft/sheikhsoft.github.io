$(document).ready(function() 
{
    var str = "<ul class='navbar-nav me-auto mb-2 mb-lg-0'>";
    str+="<li class='nav-item'><a class='nav-link active' aria-current='page' href='home.html'>Home</a></li>";
    str+="<li class='nav-item'><a class='nav-link active' aria-current='page' href='privacy.html'>Privacys</a></li>";
    str+="<li class='nav-item'><a class='nav-link active' aria-current='page' href='terms.html'>Terms & Conditions</a></li>";
    str+="<li class='nav-item'><a class='nav-link active' aria-current='page' href='faq.html'>FAQ</a></li>";
    str+="</ul>";

    $('#insert-menu').html(str);

});