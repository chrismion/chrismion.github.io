window.onload = function start(){


    $('nav a').click(function(){
          var href = $(this).attr('href');
          var OffSetTop = $(href).offset().top;

          $('html, body').animate({'scrollTop':OffSetTop});
          return false;
        })
}
