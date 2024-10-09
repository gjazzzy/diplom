$(document).ready(function () {
   $('.reg').css('display', 'none');
   $('.user').css('display', 'none');
   $('.pay').css('display', 'none');

   //    var $button = $('.header__btn-login');
   //    $button.click(function () {
   //       $('.reg').show();
   //    })
   //    $('.reg__btn-close').click(function () {
   //       $('.reg').hide();
   //    })
   // });
   var $button1 = $('.header__btn-login');
   $button1.click(function () {
      $('.user').show();
   })
   $('.user__btn-close').click(function () {
      $('.user').hide();
   })

   var $button1 = $('.right__btn-pay');
   $button1.click(function () {
      $('.pay').show();
   })
   $('.pay__btn-close').click(function () {
      $('.pay').hide();
   })

   $(".left__sidebar-menu").on("click", function () {
      $(".left__sidebar-item").toggle();
   });



   // var originalImageSrc = $(".left__sidebar-img").attr("src");
   // $(".left__sidebar-img").hover(function () {
   //    // Заменяем изображение на другое
   //    $(this).attr("src", "../images/icons/icon-arrow-up.svg");
   // }, function () {
   //    // При уходе устанавливаем обратно исходное изображение
   //    $(this).attr("src", originalImageSrc);
   // });


   //    let count = 0;
   //    $("#incrementButton").click(function () {
   //       count++;
   //       $("#counter1").text(count);
   //    });

   //    $("#decrementButton").click(function () {
   //       count--;
   //       $("#counter1").text(count);
   //    });
});