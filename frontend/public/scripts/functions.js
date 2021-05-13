(function ($) {
  $(document).ready(function () {
    'use strict';
    /* =================================
        ===  Resize images slideshow                 ====
        =================================== */
    function resize_img_slideshow() {
      if (Modernizr.mq('(min-width: 1200px)')) {
        $.each($('.content-img'), function () {
          $(this).css({
            width: this.naturalWidth,
          });
        });
      } else if (Modernizr.mq('(min-width: 992px)')) {
        $.each($('.content-img'), function () {
          $(this).css({
            width: (this.naturalWidth * 70) / 100,
          });
        });
      } else if (Modernizr.mq('(min-width: 768px)')) {
        $.each($('.content-img'), function () {
          $(this).css({
            width: (this.naturalWidth * 50) / 100,
          });
        });
      } else {
        $.each($('.content-img'), function () {
          $(this).css({
            width: (this.naturalWidth * 30) / 100,
          });
        });
      }
    }
    $(window).on('load', function () {
      resize_img_slideshow();
      $('.responsive-accordion li.first-open .responsive-accordion-head').trigger('click');
    });

    $(window).resize(function () {
      resize_img_slideshow();
    });

    /* =================================
        ===  Change Logo                 ====
        =================================== */
    function change_logo() {
      var logo = $('.white-logo');
      var white_src = logo.attr('data-white-src');
      var src = logo.attr('data-src');
      if (Modernizr.mq('(min-width: 768px)')) {
        logo.attr('src', white_src);
      } else {
        logo.attr('src', src);
      }
    }
    if ($('.white-logo').length) {
      change_logo();
      $(window).resize(function () {
        change_logo();
      });
    }

    /* =================================
        ===  Minimal Menu                 ====
        =================================== */
    $('.minimal-menu').before(
      '<label class="minimal-menu-button" for="mobile-nav"><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></label><input class="minimal-menu-button" type="checkbox" id="mobile-nav" name="mobile-nav" />'
    );
    $('.minimal-menu').find('ul.sub-menu').parent().addClass('submenu');
    $('.minimal-menu').find('div.menu-wrapper').parent().addClass('megamenu submenu');
    $('.minimal-menu').find('ul.sub-menu').before('<input class="show-submenu" type="checkbox" />');
    $('.minimal-menu').find('div.menu-wrapper').before('<input class="show-submenu" type="checkbox" />');

    /* =================================
        ===  Tooltip                 ====
        =================================== */
    $('[data-toggle="tooltip"]').tooltip({
      container: 'body',
    });

    /* =================================
        ===  mixItUp                 ====
        =================================== */
    if ($('.list-works').length) {
      $('.list-works').mixItUp();
    }

    /* =================================
        ===  Progress Bar                 ====
        =================================== */
    if ($('.progress-bar').length) {
      $('.progress-bar').waypoint(
        function () {
          $('.progress-bar').each(function () {
            $(this).animate(
              {
                width: $(this).attr('aria-valuenow') + '%',
              },
              400
            );
          });
        },
        {
          triggerOnce: true,
          offset: 'bottom-in-view',
        }
      );
    }

    /* =================================
         ===  Price Slider                 ====
         =================================== */
    if ($('#price-slider').length) {
      $('#price-slider').slider({
        range: true,
        min: 1,
        max: 100,
        values: [12, 60],
        slide: function (event, ui) {
          $('#amount').val('$' + ui.values[0] + ' - $' + ui.values[1]);
        },
      });
      $('#amount').val('$' + $('#price-slider').slider('values', 0) + ' - $' + $('#price-slider').slider('values', 1));
    }

    /* =================================
         ===  Product Showcase                 ====
         =================================== */
    if ($('#product-showcase').length) {
      $('.previews img').click(function (e) {
        e.preventDefault();
        var largeImage = $(this).attr('data-full');
        $('.selected').removeClass();
        $(this).addClass('selected');
        $('.full img').hide();
        $('.full img').attr('src', largeImage);
        $('.full img').show();
      });
      $('.full').click(function (e) {
        e.preventDefault();
        var modalImage = $(this).find('img').attr('src');
        $.fancybox.open(modalImage);
      });
    }

    /* =================================
         ===  Star Rating                 ====
         =================================== */
    if ($('.review-star').length) {
      $('.review-star').raty({
        half: true,
        score: function () {
          return $(this).attr('data-score');
        },
      });
    }
    if ($('.review-star-read').length) {
      $('.review-star-read').raty({
        readOnly: true,
        score: function () {
          return $(this).attr('data-score');
        },
      });
    }

    /* =================================
         ===  Different address checkbox                 ====
         =================================== */
    if ($('.dif-add-chb').length) {
      $('.dif-add-chb').attr('checked', true);
      $('.dif-add-chb').click(function () {
        $('.wrap-different-address').slideToggle(this.checked);
      });
    }

    /* =================================
         ===  Payment methods                 ====
         =================================== */
    $('.payment-methods').on('click', '.responsive-accordion-head', function () {
      // $('.payment-methods input[type="radio"]').attr('checked', false);
      if ($(this).hasClass('active')) {
        console.log($(this).text());
        var radios = $(this).find('input[type="radio"]');
        if (radios.is(':checked') === false) {
          radios.prop('checked', true);
        }
      }
    });

    /* =================================
         ===  Pie Progress                 ====
         =================================== */
    if ($('.pie_progress').length) {
      $('.pie_progress').asPieProgress({
        namespace: 'pie_progress',
      });
      $('.pie_progress').waypoint(
        function () {
          $('.pie_progress').asPieProgress('start');
        },
        {
          triggerOnce: true,
          offset: 'bottom-in-view',
        }
      );
    }

    /* =================================
         ===  Counter Number                 ====
         =================================== */
    function counter_number(variable) {
      if ($(variable).length) {
        $(variable).waypoint(
          function () {
            $({ countNum: $(variable).text() }).animate(
              { countNum: $(variable).attr('data-counter') },
              {
                duration: 2000,
                easing: 'linear',
                step: function () {
                  $(variable).text(Math.floor(this.countNum));
                },
                complete: function () {
                  $(variable).text(this.countNum);
                },
              }
            );
          },
          {
            triggerOnce: true,
            offset: 'bottom-in-view',
          }
        );
      }
    }
    counter_number('.counter-1');
    counter_number('.counter-2');
    counter_number('.counter-3');
    counter_number('.counter-4');

    /* =================================
         ===  Send Email                 ====
         =================================== */
    $('.contact-form').submit(function () {
      $('.contact-content .form-note').html('<br /><div class="alert alert-info" role="alert">Processing...</div>');
      $('.contact-form input').prop('readonly', true);
      var formInput = $(this).serialize();
      $.post($(this).attr('action'), formInput, function (data) {
        if (data === 'Message has been sent') {
          $('.contact-content .form-note').html(
            '<br /><div class="alert alert-success" role="alert">Successfull!</div>'
          );
          $('.contact-form').slideUp();
        } else {
          $('.contact-content .form-note').html(data);
          $('.contact-form input').prop('readonly', false);
        }
      });
      return false;
    });
    $('.subscribe-form').submit(function () {
      $('.subscribe .form-note, .subscribe-box .form-note').html(
        '<br /><div class="alert alert-info" role="alert">Processing...</div>'
      );
      $('.subscribe-form input').prop('readonly', true);
      var formInput = $(this).serialize();
      $.post($(this).attr('action'), formInput, function (data) {
        if (data === 'Message has been sent') {
          $('.subscribe .form-note, .subscribe-box .form-note').html(
            '<br /><div class="alert alert-success" role="alert">Successfull!</div>'
          );
          $('.subscribe-form').slideUp();
        } else {
          $('.subscribe .form-note, .subscribe-box .form-note').html(data);
          $('.subscribe-form input').prop('readonly', false);
        }
      });
      return false;
    });
  });
})(window.jQuery);
