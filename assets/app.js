/**
 * Create a web friendly URL slug from a string.
 * @param string s
 * @param object opt
 * @return string
 */
function url_slug(e,i){e=String(e),i=Object(i);var r={delimiter:"-",limit:void 0,lowercase:!0,replacements:{},transliterate:"undefined"==typeof XRegExp};for(var a in r)i.hasOwnProperty(a)||(i[a]=r[a]);var t={"Ã€":"A","Ã":"A","Ã‚":"A","Ãƒ":"A","Ã„":"A","Ã…":"A","Ã†":"AE","Ã‡":"C","Ãˆ":"E","Ã‰":"E","ÃŠ":"E","Ã‹":"E","ÃŒ":"I","Ã":"I","ÃŽ":"I","Ã":"I","Ã":"D","Ã‘":"N","Ã’":"O","Ã“":"O","Ã”":"O","Ã•":"O","Ã–":"O","Å":"O","Ã˜":"O","Ã™":"U","Ãš":"U","Ã›":"U","Ãœ":"U","Å°":"U","Ã":"Y","Ãž":"TH","ÃŸ":"ss","Ã ":"a","Ã¡":"a","Ã¢":"a","Ã£":"a","Ã¤":"a","Ã¥":"a","Ã¦":"ae","Ã§":"c","Ã¨":"e","Ã©":"e","Ãª":"e","Ã«":"e","Ã¬":"i","Ã­":"i","Ã®":"i","Ã¯":"i","Ã°":"d","Ã±":"n","Ã²":"o","Ã³":"o","Ã´":"o","Ãµ":"o","Ã¶":"o","Å‘":"o","Ã¸":"o","Ã¹":"u","Ãº":"u","Ã»":"u","Ã¼":"u","Å±":"u","Ã½":"y","Ã¾":"th","Ã¿":"y","Â©":"(c)","Î‘":"A","Î’":"B","Î“":"G","Î”":"D","Î•":"E","Î–":"Z","Î—":"H","Î˜":"8","Î™":"I","Îš":"K","Î›":"L","Îœ":"M","Î":"N","Îž":"3","ÎŸ":"O","Î ":"P","Î¡":"R","Î£":"S","Î¤":"T","Î¥":"Y","Î¦":"F","Î§":"X","Î¨":"PS","Î©":"W","Î†":"A","Îˆ":"E","ÎŠ":"I","ÎŒ":"O","ÎŽ":"Y","Î‰":"H","Î":"W","Îª":"I","Î«":"Y","Î±":"a","Î²":"b","Î³":"g","Î´":"d","Îµ":"e","Î¶":"z","Î·":"h","Î¸":"8","Î¹":"i","Îº":"k","Î»":"l","Î¼":"m","Î½":"n","Î¾":"3","Î¿":"o","Ï€":"p","Ï":"r","Ïƒ":"s","Ï„":"t","Ï…":"y","Ï†":"f","Ï‡":"x","Ïˆ":"ps","Ï‰":"w","Î¬":"a","Î­":"e","Î¯":"i","ÏŒ":"o","Ï":"y","Î®":"h","ÏŽ":"w","Ï‚":"s","ÏŠ":"i","Î°":"y","Ï‹":"y","Î":"i","Åž":"S","Ä°":"I","Ã‡":"C","Ãœ":"U","Ã–":"O","Äž":"G","ÅŸ":"s","Ä±":"i","Ã§":"c","Ã¼":"u","Ã¶":"o","ÄŸ":"g","Ð":"A","Ð‘":"B","Ð’":"V","Ð“":"G","Ð”":"D","Ð•":"E","Ð":"Yo","Ð–":"Zh","Ð—":"Z","Ð˜":"I","Ð™":"J","Ðš":"K","Ð›":"L","Ðœ":"M","Ð":"N","Ðž":"O","ÐŸ":"P","Ð ":"R","Ð¡":"S","Ð¢":"T","Ð£":"U","Ð¤":"F","Ð¥":"H","Ð¦":"C","Ð§":"Ch","Ð¨":"Sh","Ð©":"Sh","Ðª":"","Ð«":"Y","Ð¬":"","Ð­":"E","Ð®":"Yu","Ð¯":"Ya","Ð°":"a","Ð±":"b","Ð²":"v","Ð³":"g","Ð´":"d","Ðµ":"e","Ñ‘":"yo","Ð¶":"zh","Ð·":"z","Ð¸":"i","Ð¹":"j","Ðº":"k","Ð»":"l","Ð¼":"m","Ð½":"n","Ð¾":"o","Ð¿":"p","Ñ€":"r","Ñ":"s","Ñ‚":"t","Ñƒ":"u","Ñ„":"f","Ñ…":"h","Ñ†":"c","Ñ‡":"ch","Ñˆ":"sh","Ñ‰":"sh","ÑŠ":"","Ñ‹":"y","ÑŒ":"","Ñ":"e","ÑŽ":"yu","Ñ":"ya","Ð„":"Ye","Ð†":"I","Ð‡":"Yi","Ò":"G","Ñ”":"ye","Ñ–":"i","Ñ—":"yi","Ò‘":"g","ÄŒ":"C","ÄŽ":"D","Äš":"E","Å‡":"N","Å˜":"R","Å ":"S","Å¤":"T","Å®":"U","Å½":"Z","Ä":"c","Ä":"d","Ä›":"e","Åˆ":"n","Å™":"r","Å¡":"s","Å¥":"t","Å¯":"u","Å¾":"z","Ä„":"A","Ä†":"C","Ä˜":"e","Å":"L","Åƒ":"N","Ã“":"o","Åš":"S","Å¹":"Z","Å»":"Z","Ä…":"a","Ä‡":"c","Ä™":"e","Å‚":"l","Å„":"n","Ã³":"o","Å›":"s","Åº":"z","Å¼":"z","Ä€":"A","ÄŒ":"C","Ä’":"E","Ä¢":"G","Äª":"i","Ä¶":"k","Ä»":"L","Å…":"N","Å ":"S","Åª":"u","Å½":"Z","Ä":"a","Ä":"c","Ä“":"e","Ä£":"g","Ä«":"i","Ä·":"k","Ä¼":"l","Å†":"n","Å¡":"s","Å«":"u","Å¾":"z"};for(var a in i.replacements)e=e.replace(RegExp(a,"g"),i.replacements[a]);if(i.transliterate)for(var a in t)e=e.replace(RegExp(a,"g"),t[a]);var o="undefined"==typeof XRegExp?RegExp("[^a-z0-9]+","ig"):XRegExp("[^\\p{L}\\p{N}]+","ig");return e=(e=(e=(e=e.replace(o,i.delimiter)).replace(RegExp("["+i.delimiter+"]{2,}","g"),i.delimiter)).substring(0,i.limit)).replace(RegExp("(^"+i.delimiter+"|"+i.delimiter+"$)","g"),""),i.lowercase?e.toLowerCase():e}


/*============================================================================
  Image functions
==============================================================================*/

function AddFlyer(){
  var cartreturn={};
  
  return cartreturn;
}


/*============================================================================
Product media controls
==============================================================================*/

function isScreenSizeLarge() {
  if ($(window).width() > 1024 ) {
    return true
  }
}
var productMedia = {
  models: [],
  setupMedia: function() {

    var config = {
      // Default control list
      controls: [
        'zoom-in',
        'zoom-out',
        'fullscreen'
      ],
      focusOnPlay: false
    }

    $($('model-viewer', $('.js-product-gallery, .js-gallery-modal'))).each(function(index, model) {
      model = new Shopify.ModelViewerUI(model, config);
//       console.log(model)
      productMedia.models.push(model)
    })

    $('.product-gallery__model model-viewer').on('mousedown',function(){
      productMedia.hideModelIcon(this);
    })
  },
  showModelIcon: function(slide) {
    $(slide).find('.button--poster, .model-icon-button-control').show();
  },
  hideModelIcon: function(slide) {
    $(slide).find('.button--poster, .model-icon-button-control').hide();
  }
}

/*============================================================================
Plyr setup
==============================================================================*/

var videoEl = {
  playButtonIcon:'<button type="button" class="plyr__control plyr__control--overlaid" aria-label="Play, {title}" data-plyr="play"><svg class="play-icon-button-control" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23 20V40L39 29.4248L23 20Z" fill="#323232"/></svg><span class="plyr__sr-only">Play</span></button>',
  playButton: '<button type="button" class="plyr__controls__item plyr__control" aria-label="Play, {title}" data-plyr="play"><svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg><svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg><span class="label--pressed plyr__tooltip" role="tooltip">Pause</span><span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span></button>',
  muteButton: '<button type="button" class="plyr__controls__item plyr__control" aria-label="Mute" data-plyr="mute"><svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg><svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg><span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span><span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span></button>',
  progressInput: '<div class="plyr__controls__item plyr__progress__container"><div class="plyr__progress"><input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek"><progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress><span role="tooltip" class="plyr__tooltip">00:00</span></div></div>',
  volume: '<div class="plyr__controls__item plyr__volume"><input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume"></div>',
  fullscreen: '<button type="button" class="plyr__controls__item plyr__control" data-plyr="fullscreen"><svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use></svg><svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use></svg><span class="label--pressed plyr__tooltip" role="tooltip">Exit fullscreen</span><span class="label--not-pressed plyr__tooltip" role="tooltip">Enter fullscreen</span></button>'
}

var videoControls = videoEl.playButtonIcon + '<div class="plyr__controls">' + videoEl.playButton + videoEl.progressInput + videoEl.muteButton + videoEl.volume + videoEl.fullscreen + '</div>';
var globalVideoPlayers = [];
var videoPlayers = [];
var videosInRecommendedProductsPlayer;

videoFeature = {
  init: function() {

    this.setupVideoPlayer();
    this.setupRecommendedVideoPlayer();

  },
  setupVideoPlayer: function() {
    var productVideos = document.querySelectorAll('[data-html5-video] video, [data-youtube-video]');

    var setupVideoPlayers = Plyr.setup(productVideos, {
      controls: videoControls,
      ratio: this.aspect_ratio,
      fullscreen: {
        enabled: true,
        fallback: true,
        iosNative: true
      },
      storage: {
        enabled: false
      }
    });

    // Moves players into global array so that we can target them for play/pause on global level
    if (globalVideoPlayers) {
      $.each(setupVideoPlayers, function(index, player) {
        globalVideoPlayers.push(player);
      })
    }

    var videoLooping = $('[data-video-loop]').data('video-loop') || false;
    $.each(setupVideoPlayers, function(index, player) {
      player.loop = videoLooping;
      videoPlayers.push(player);
    });

    this.setupListeners();
  },
  setupPlayerForRecentlyViewedProducts: function(video) {

    if (video) {
      var recentlyViewedProductPlayer = new Plyr(video, {
        controls: videoControls,
        ratio: this.aspect_ratio,
        fullscreen: {
          enabled: true,
          fallback: true,
          iosNative: true
        },
        storage: {
          enabled: false
        }
      });

      if (videoPlayers !== null) {
        videoPlayers.push(recentlyViewedProductPlayer);
        this.setupListeners();
      }

    }
  },
  setupRecommendedVideoPlayer: function() {
    var videosInRecommendedProducts = document.querySelectorAll('[data-product-recommendations-container] [data-html5-video] video, [data-product-recommendations-container] [data-youtube-video]');

    // Only run Plyr.setup if videosInRecommendedProducts exists
    if (videosInRecommendedProducts.length > 0) {
      videosInRecommendedProductsPlayer = Plyr.setup(videosInRecommendedProducts, {
        controls: videoControls,
        fullscreen: {
          enabled: true,
          fallback: true,
          iosNative: true
        },
        storage: {
          enabled: false
        }
      });
      if (videoPlayers !== null) {
        var combinedArray = videoPlayers.concat(videosInRecommendedProductsPlayer);
        videoPlayers = combinedArray;
      } else {
        videoPlayers = videosInRecommendedProductsPlayer;
      }
    }

    this.setupListeners();
  },
  setupListeners: function() {
    // Adds plyr video id to video wrapper
    $.each(videoPlayers, function(index, player) {
      var id = player.id || player.media.dataset.plyrVideoId;
      var $video;

      if (player.isHTML5) {
        $video = $(player.elements.wrapper).find('video');
        $video.attr('data-plyr-video-id', id);
      }
    })

    // When a video is playing, pause any other instances
    $.each(globalVideoPlayers, function(index, player) {
      player.on('play', function(event) {
        var instance = event.detail.plyr;
        $.each(globalVideoPlayers, function(index, player) {
          if (instance.id != player.id ) {
            player.pause();
          }
        })
      })
    })
  },
  enableVideoOnHover: function($thumbnail) {
    var $html5Video = $thumbnail.find('[data-html5-video]');
    var $youtubeVideo = $thumbnail.find('[data-youtube-video]');
    var videoID;

    if ($html5Video.length > 0) {
      videoID = $html5Video.find('[data-plyr-video-id]').data('plyr-video-id');
    } else if ($youtubeVideo.length > 0) {
      videoID = $youtubeVideo.find('iframe').attr('id');
    }

    if (videoID) {
      $.each(videoPlayers, function(index, player) {

        if (player.id == videoID || player.media.id == videoID) {
          player.toggleControls(false);
          player.muted = true;
          player.play();
        }
      })
    }
  },
  disableVideoOnHover: function($thumbnail) {
    var $html5Video = $thumbnail.find('[data-html5-video]');
    var $youtubeVideo = $thumbnail.find('[data-youtube-video]');
    var videoID;

    if ($html5Video.length > 0) {
      videoID = $html5Video.find('[data-plyr-video-id]').data('plyr-video-id');
    } else if ($youtubeVideo.length > 0) {
      videoID = $youtubeVideo.find('iframe').attr('id');
    }

    if (videoID) {
      $.each(videoPlayers, function(index, player) {
        if (player.id == videoID || player.media.id == videoID) {
          if (player.playing) {
            player.pause();
          }
        }
      })
    }
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

var usePageDots = false;

var imageFunctions = {
  zoom: function(zoomParent, enableTouch, magnify){
    var activateZoom = $(zoomParent).data('zoom');
    if (activateZoom){
      $(zoomParent + ' img')
          .wrap('<span style="display:inline-block"></span>')
          .css('display', 'block')
          .parent()
          .zoom({
            touch: enableTouch,
            magnify: magnify ? magnify : 1
      });
    }
  },
  linkGalleryAndCarousel: function($gallery, $carousel){

    $carousel.find('.gallery-cell:nth-child(1)').addClass('is-nav-selected');

    //EVENT - click on carousel item to slide gallery
    $carousel.on( 'click', '.gallery-cell', function() {
        var index = $(this).index();
        $carousel.find('.is-nav-selected').removeClass('is-nav-selected');
        $(this).addClass('is-nav-selected');
        $gallery.flickity( 'select', index );
    });

    //EVENT - update carousel based on gallery index
    $gallery.on( 'cellSelect', function() {
      var galleryData = $(this).data('flickity');
      if (galleryData){
        $carousel.find('.is-nav-selected').removeClass('is-nav-selected');
        $carousel.find('.gallery-cell:nth-child(' + (galleryData.selectedIndex + 1) + ')').addClass('is-nav-selected');
      }
    });
  },
  fullWidth: function(images, imageContainer){
    $(images).each(function(){
      var $image = $(this),
          alt = $image.attr('alt'),
          src = $image.attr('src');

      if (alt.indexOf("[") >= 0){

        //remove from description
        $image.remove();

        //find shortcode values and remove from alt
        var shortcodes = alt.match(/\[(.*?)\]/ig);
        alt = alt.replace(/\[(.*?)\]/ig, '');

        //remove brackets from shortcode to be used as classes
        var captionClass = $.map( shortcodes, function( value, index ) {
            value = value.replace(/[\[\]']+/g,'');
            return value;
        });

        //markup for caption

        var caption = [
            '<div class="position-' + (captionClass.length ? captionClass : 'center') + ' caption js-caption">',
              '<div class="caption-content caption-background-false align-' + (captionClass.length ? captionClass : 'center') + '">',
                '<p class="headline">' + alt + '</p>',
              '</div>',
            '</div>'
        ].join('');

        //image attributes added
        $image.attr({
          alt: alt,
          class: 'lazyload none',
          src: src,
          dataSizes: 'auto'
        });

        var image = $image.prop('outerHTML')
        var banner =  '<div class="banner">' + image + caption + '</div>'

        $(imageContainer).append(banner);
      }
    })
  },
  showSecondaryImage: function(){
    $('body').on("mouseenter", ".swap-true", function() {
      $(this).toggleClass('toggle-images');
    });

    $('body').on("mouseleave", ".swap-true", function() {
      $(this).toggleClass('toggle-images');
    });
  }
}

/*============================================================================
  Recently Viewed
==============================================================================*/


/*============================================================================
  Featured collection section
==============================================================================*/

var featuredCollectionSection = {
  init: function(){
    $('.js-product-slider .products-slider').each(function (index, value) {
      var products_per_slide = $(this).data('products-per-slide');
      var products_limit = $(this).data('products-limit');
      var products_available = $(this).data('products-available');
      var cellAlign,
          draggable,
          prevNext,
          wrapAround,
          initialIndex;

      if (products_per_slide == "2" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "4" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "6" && products_available > products_per_slide && products_limit > products_per_slide){
        cellAlign = "left";
      } else {
        cellAlign = "center";
      }

      if (products_available > products_per_slide && products_limit > products_per_slide) {
        draggable = true;
        prevNext = true;
        wrapAround = true;
      } else {
        draggable = false;
        prevNext = false;
        wrapAround = false;
      }

      if (products_per_slide == "2" && products_available > products_per_slide || products_per_slide == "4" && products_available > products_per_slide || products_per_slide == "6" && products_available > products_per_slide){
        initialIndex = 0;
      } else if (products_per_slide == "3" && products_available) {
        initialIndex = 1;
      } else if (products_per_slide == "5" && products_available) {
        initialIndex = 2;
      } else if (products_per_slide == "7" && products_available) {
        initialIndex = 3;
      }

      if ($(window).width() <= 798) {
        cellAlign = "center";
        draggable = true;
        prevNext = true;
        wrapAround = true;
        initialIndex = 1;

        $(this).parents('.even-num-slides').removeClass('even-num-slides');
      }

      $(this).slick({
        dots: true,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows:true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
//       $(this).flickity({
//         "lazyLoad": 2,
//         "imagesLoaded": true,
//         "draggable": draggable,
//         "prevNextButtons": prevNext,
//         "wrapAround": wrapAround,
//         "cellAlign": cellAlign,
//         "pageDots": true,
//         "contain": true,
//         "freeScroll": true,
//         "arrowShape": arrowSize,
//         "initialIndex": initialIndex
//       });

      $(this).addClass('slider-initialized');
    });
  },
  unload: function($target){
    var $slider = $target.find('.js-product-slider');
    if ($slider.hasClass('flickity-enabled')){
      $slider.flickity('destroy');
    }
  }
}

var featuredPromotions = {
  init: function(){
    if ($(window).width() > 798 || $(window).width() == 0) {
      $('.feature-overlay').hover(function(){
        $(this).find('.feature-details').slideDown('100', function(){
          $(this).addClass('reveal-details');
        });
      }, function(){
        $(this).find('.feature-details').removeClass('reveal-details');
        $(this).find('.feature-details').slideUp('100');
      });

      $('.js-featured-promotions').each(function (index, value){
        var $promos = $(this);
        var animationStyle = $(this).data('promo-animation');

        $promos.waypoint(function() {
          $(this.element).find(".feature-section").addClass("animated " + animationStyle);
        }, { offset: '80%' });
      });
    }
  }
}

/*============================================================================
  Slideshow section
==============================================================================*/

var slideshow = {
  init: function(){

    $('.js-homepage-slideshow').each(function (index, value){
      var $homepageSlider = $(this);
      var settings = {
        slideshowSpeed: $homepageSlider.data('slideshow-speed')*1000,
        slideshowTextAnimation: $homepageSlider.data('slideshow-text-animation'),
        adaptiveHeight: $homepageSlider.data('adaptive-height')
      }

      //initiate the slideshow
      if (!$homepageSlider.hasClass('flickity-enabled')){
        var arrowShow = $homepageSlider.find('.gallery-cell').length === 1 ? false : true;
//         $homepageSlider.flickity({
//           adaptiveHeight: settings.adaptiveHeight,
//           wrapAround: true,
//           cellAlign: 'left',
//           imagesLoaded: true,
//           prevNextButtons: arrowShow,
//           draggable: arrowShow,
//           pageDots: true,
//           autoPlay: settings.slideshowSpeed,
        //           arrowShape: arrowSize
        //         });
        $homepageSlider.slick({
          adaptiveHeight: settings.adaptiveHeight,
          arrows: arrowShow,
          draggable: arrowShow,
          dots: false,
          autoplay: true,
          autoplaySpeed: settings.slideshowSpeed,
          cssEase: 'linear',
          lazyLoad: 'ondemand',
          fade: true,
          infinite:true
        });

        if (settings.slideshowTextAnimation != ''){
          var flkty = $homepageSlider.data('flickity');
          setTimeout(function() {
            $homepageSlider.find('.gallery-cell:nth-child(1) .caption-content').addClass('animated ' + settings.slideshowTextAnimation);
          }, 200);

          $homepageSlider.on( 'afterChange', function(event, slick, currentSlide) {
            if($homepageSlider.is(':visible')) {
              var currentSlide = currentSlide +1 ;
              setTimeout(function() {
                $homepageSlider.find('.caption-content').removeClass('animated ' + settings.slideshowTextAnimation);
                $homepageSlider.find('.gallery-cell:nth-child(' + currentSlide + ') .caption-content').addClass('animated ' + settings.slideshowTextAnimation);
              }, 200);
            }
          });
        }
      }

      if ($homepageSlider.find('.gallery-cell').length > 1) {
        $homepageSlider.addClass('multi-image');
      } else {
        $homepageSlider.addClass('single-image');
      }

      $homepageSlider.find('.gallery-cell').each(function(){
        var buttonWidth = 0;
        $(this).find('.action_button').each(function(){
          $button = $(this);
          if($(this).width() > buttonWidth){
              buttonWidth = $(this).width();
          }
        });
        $(this).find('.action_button').width(buttonWidth);
      });

    });
  },
  unload: function($target){

    var $slider = $target.find('.js-homepage-slideshow');
    $slider.flickity('destroy');

  }
}

/*============================================================================
    Testimonial
  ==============================================================================*/



  /*============================================================================
    Gallery section
  ==============================================================================*/

  var gallery = {
    init: function(){

      $('.gallery-horizontal').find('.gallery-image-wrapper').each(function(){
        var wrapper = $(this);
        var images = $(this).find("img");
        var imgWidth,
            imgHeight;

       $("<img />").attr("src", $(images).attr("src")).on('load', function() {
         imgWidth = this.width;
         imgHeight = this.height;

          $(wrapper).css("flex-basis", imgWidth * 200 / imgHeight);
          $(wrapper).css("flex-grow", imgWidth * 200 / imgHeight);
          $(wrapper).find("i").css("padding-bottom", imgHeight / imgWidth * 100 + '%');
      });
    });

      //initialize lightbox
      lightboxGallery.init();

    }
  }

/*============================================================================
  Video section
==============================================================================*/

//check to see if HTML5 video is supported
var supports_video = function(){
  return !!document.createElement('video').canPlayType;
}

var videoSection = {
  init: function(){

    var $videoElement,
        settings;

    //Check for videos that are set to autoplay
    $('.homepage-video').each(function (index, value) {
      if ($('.homepage-video').length && supports_video()) {

        $videoElement = $(this);

        settings = videoSection.getVideoSettings($videoElement);

        if (is_touch_device() && $(window).width() <= 798 && settings.posterImage === false || $(window).width() <= 798 && settings.posterImage === false) {
          //add video element on small screens if there is no poster image
          videoSection.appendFrame($videoElement, settings);
        } else if (settings.autoPlayVideo && $(window).width() > 798){
          //add video element when autoplay is true and it's on a larger screen
          videoSection.appendFrame($videoElement, settings);
        } else if (settings.autoPlayVideo === false && settings.posterImage === false){
          //add video element when autoplay is false but there is no poster image
          videoSection.appendFrame($videoElement, settings);
        } else {
          //Show poster image on smaller sceens and when it exists
          $videoElement.find('.homepage-video__placeholder').show();
          $videoElement.find('.placeholder-svg--video').show();
        }

      }
    });

    //Attach event listener for videos
    $('body').on('click', '.video__play-button', function(e) {
      $videoElement = $(this).parents('.video-section').find('.homepage-video');
      $(this).fadeOut();
      settings = videoSection.getVideoSettings($videoElement);
      if ($videoElement.find('.mediaWrapper').length < 1 && $videoElement.find('video').length < 1){
        videoSection.appendFrame($videoElement, settings);
      }
    });

    $('body').on('click', '[data-play-video]', function(e) {
      $videoElement = $(this).parents('.video-section').find('.homepage-video');
      $(this).fadeOut();
      settings = videoSection.getVideoSettings($videoElement);
      if ($videoElement.find('.mediaWrapper').length < 1 && $videoElement.find('video').length < 1){
        videoSection.appendFrame($videoElement, settings);
      }
    });
  },
  getVideoSettings: function($videoElement){
    var settings = {
      container: $videoElement.find('.homepage-video'),
      header: $videoElement.find('.homepage-video--media'),
      posterImage: $videoElement.data('poster-image'),
      videoText: $videoElement.find('.homepage-video--media .caption'),
      videoTrigger: $videoElement.find("[data-play-video]"),
      autoPlayVideo: $videoElement.data('autoplay'),
      displayTextOverVideo: $videoElement.data('display-text-over-video'),
      autoloop: $videoElement.data('autoloop'),
      id: $videoElement.attr('data-video-src'),
      aspectRatio: $videoElement.attr('data-aspect-ratio').split(":"),
      provider: $videoElement.attr('data-provider').toLowerCase(),
      videoMP4: $videoElement.attr('data-video-mp4'),
      videoOGV: $videoElement.attr('data-video-ogv')
    }
    return settings;
  },
  createFrame: function(settings){
    var autoloop,
        controls,
        html,
        autoplay,
        poster = '';

    if(settings.provider === 'youtube') {
      if (settings.autoloop){
        autoloop = '1&iv_load_policy=3&playlist='+settings.id;
      } else {
        autoloop = 0;
      }

      if (settings.posterImage === false && settings.autoPlayVideo === false){
        autoplay = 0;
      } else {
        autoplay = 1;
      }

      controls = 1;

      html = '<iframe src="//www.youtube.com/embed/'+settings.id+'?&autoplay='+autoplay+'&loop='+autoloop+'&rel=0&hd=1&showinfo=0&color=white&controls=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>';
    }
    else if(settings.provider === 'vimeo') {

      if (settings.posterImage === false && settings.autoPlayVideo === false){
        autoplay = 0;
      } else {
        autoplay = 1;
      }

      if (settings.autoloop){
        autoloop = 1;
      } else {
        autoloop = 0;
      }
      html = '<iframe src="//player.vimeo.com/video/'+settings.id+'?loop='+autoloop+'&amp;title=0&amp;byline=0&amp;portrait=0&amp;color=3d96d2&autoplay='+autoplay+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen ></iframe>';
    }
    else if(settings.provider === 'html5') {

      if (settings.posterImage !== false){
        poster = ' poster="https://' + settings.posterImage;
      }

      if (settings.posterImage === false && settings.autoPlayVideo === false && is_touch_device() === 0){
        autoplay = ' ';
      } else if (settings.autoPlayVideo && settings.posterImage !== false){
        poster = ' poster="https://' + settings.posterImage;
        autoplay = ' autoplay ';
      } else {
        autoplay = ' autoplay ';
      }

      if (settings.autoloop){
        autoloop = ' loop="loop" ';
      }

      controls = '';

      html = '<video '+ controls + autoplay + autoloop + poster +' id="video" onclick="this.paused?this.play():this.pause();" ><source src="'+settings.videoMP4+'" type="video/mp4"><source src="'+settings.videoOGV+'" type="video/ogg" ></video>';
    }
    return html;
  },
  appendFrame: function($videoElement, settings){

    var mediaWrapper;

    if (settings.displayTextOverVideo === false){
      settings.videoText.fadeOut();
    }

    $videoElement.find('.video__play-button').fadeOut();


    $videoElement.append(videoSection.createFrame(settings));

    if (settings.provider != 'html5'){
      var paddingBottomValue = settings.aspectRatio[1] / settings.aspectRatio[0] * 100 + '%';

      $videoElement.find('iframe').mediaWrapper({
        intrinsic: false,
        baseWidth : settings.aspectRatio[0],
        baseHeight: settings.aspectRatio[1]
      });

      $videoElement.css({
        height: 0,
        paddingBottom: paddingBottomValue
      });

    } else {
      $videoElement.find('.homepage-video__image').hide();
    }

  },
  unload: function($target){
    $target.find('[data-play-video]').off('click');
  }
}

var cart = {
  init: function(){
    if ($('#cart_form .tos_agree').length) {
      //Terms of service on cart page
      $('body').on('click', "#cart_form input[type='submit']", function() {
        if ($(this).parents('form').find('.tos_agree').is(':checked')) {
          $(this).submit();
        } else {
          var warning = '<p class="warning animated bounceIn">' + "You must agree with the terms and conditions to checkout." + '</p>';
          if ($('p.warning').length == 0) {
            $(this).before(warning);
          }
          return false;
        }
      });
    }
  }
}

/*============================================================================
  Product page
==============================================================================*/

selectCallback = function(variant, selector) {
  var $product = $('.product-' + selector.product.id);
  var $notify_form = $('.notify-form-' + selector.product.id);
  var $productForm = $('form.product_form', $product);
  var variantInventory = $productForm.data('variant-inventory');

  //Image Variant feature
   if (variant && variant.featured_image && $product.is(":visible")) {
    var $sliders = $('.product_gallery', $product);
    $sliders.each(function() {
      var $slider = $(this);
      var $sliderInstance = Flickity.data(this);
      if ($slider.is(":visible") && $sliderInstance != undefined ) {
        var index = $('[data-image-id="' + variant.featured_image.id + '"]').data('index');
        $sliderInstance.select( index, false, true );
      }
    });
  }

  if (variant) {
    if (variantInventory) {
      variantInventory.forEach(function(v){
        if (v.id === variant.id) {
          variant.inventory_quantity = v.inventory_quantity;
          variant.inventory_management = v.inventory_management;
          variant.inventory_policy = v.inventory_policy;
        }
      });
    }

    $('.sku span', $product).text(variant.sku);

    
      for (var i=0,length=variant.options.length; i<length; i++) {
        var radioButton = $productForm.find('.swatch[data-option-index="' + escape(i) + '"] :radio[value="' + variant.options[i].replace(/\"/g,'\\"') +'"]');
        if (radioButton.length) {
          radioButton.get(0).checked = true;
        }
      }
    
    
    if (BOLD && BOLD.recurring_orders && BOLD.recurring_orders.app && BOLD.recurring_orders.app.ee &&
          typeof BOLD.recurring_orders.app.ee.emit === 'function'){
        BOLD.recurring_orders.app.ee.emit('variant_changed');
      }
  }

  if (variant && variant.available == true) {
    if(variant.price < variant.compare_at_price){
      $('.p_price', $product).html('<span class="money">' + Shopify.formatMoney(variant.compare_at_price, $productForm.data('money-format')) + '</span>');
      $('.savings', $product).html("You Save" + ' ' + parseInt(((variant.compare_at_price - variant.price) * 100) / variant.compare_at_price) + '% (' + '<span class="money">' + Shopify.formatMoney(variant.compare_at_price - variant.price, $productForm.data('money-format')) + '</span>)');
    } else {
      $('.was_price', $product).html('');
      $('.savings', $product).html('');
    }

    if (variant.inventory_management && variant.inventory_quantity > 0) {
      
      
        if(variant.inventory_policy == "deny") {
          $('.quantity', $product).attr('max', variant.inventory_quantity);
        }
      
    } else {
      $('.items_left', $product).text('');
      $('.quantity', $product).removeAttr('max');
    }

    $('.sold_out', $product).text('');
    if (variant.price > 0) {
      $('.current_price', $product).html('<span class="money">' + Shopify.formatMoney(variant.price, $productForm.data('money-format')) + '</span>');
    } else {
      $('.current_price', $product).html("Free");
    }
    $('.add_to_cart', $product).removeClass('disabled').removeAttr('disabled').find('span').text($('.add_to_cart', $product).data('label'));
    $notify_form.hide();
  } else {
    var message = variant ? "Sold Out" : "Unavailable";
    $('.was_price', $product).text('');
    $('.savings', $product).text('');
    $('.current_price', $product).text('');
    $('.items_left', $product).text('');
    $('.quantity', $product).removeAttr('max');
    $('.sold_out', $product).text(message);
    $('.add_to_cart', $product).addClass('disabled').attr('disabled', 'disabled').find('span').text(message);
    if (variant) {
      $notify_form.fadeIn();
    }
  }

  
};
    
      function ajaxSubmitCart(cart) {
    $cart = cart;
    $.ajax({
      url: '/cart/update.js',
      dataType: 'json',
      cache: false,
      type: 'post',
      data: $cart.serialize(),
      success: function (data) {
        refreshCart(data);
      }
    });
  }
//   var isFlayerCookie=getCookie("isFlayer");
  
function refreshCart(cart) {
  var original_cart = cart;
  //    console.log(original_cart)
  if(window.BOLD && BOLD.common && BOLD.common.cartDoctor && typeof BOLD.common.cartDoctor.fix === 'function'){
    cart = BOLD.common.cartDoctor.fix(cart);
  }
  //    console.log(cart)

  $(".cart_count").empty();
  $cartBtn = $(".cart_count");
  var value = $cartBtn.text() || '0';
  var cart_items_html = "";
  var cart_action_html = "";
  var cart_savings_html = "";
  if(is_home == 'cart')
    var $cart = $("#cart_form");
  else
    var $cart = $(".cart_content form");
  var discounted_price_total = 0;
  var total_savings = 0;
  var original_price = 0;
  var fsb_limit = 2500 ;
  var cart_total = cart.total_price;
  var fsb_val = 0;
  var fsb_msg='';

  if ( cart_total > fsb_limit){
    fsb_msg = 'Congratulations! You get free shipping';
  }
  else{
    fsb_val = Shopify.formatMoney(fsb_limit - cart_total, $cart.data('money-format'));
    fsb_msg = 'Add '+fsb_val+' to be eligible for Free Shipping';
  }

  $cartBtn.text(value.replace(/[0-9]+/,cart.item_count));
  if (cart.item_count == 0) {
    $(".cart_count").next().addClass('empty-cart');
    $('.js-empty-cart__message').removeClass('hidden');
    $('h6.cart-title').html('Oops! Your cart looks a little empty!');
    //get_minicart_notify();
    $('.js-cart_content__form').addClass('hidden');
  } else {      
    $('h6.cart-title').html(fsb_msg);
    $(".cart_count").next().removeClass('empty-cart');
    //get_minicart_notify();
    $('.js-empty-cart__message').addClass('hidden');
    $('.js-cart_content__form').removeClass('hidden');
    var recurring_desc = "";
    var bundle_types = [];
    var all_original_price = 0;
    $.each(cart.items, function(index, item) {

      //        console.log(item)
      if(!$.isEmptyObject(item.properties)  && item.properties.bundle_type != undefined) {
        //         console.log(item.properties)
        $.each(item.properties, function(title, value) {
                    console.log(value)
          if(value.indexOf('bundle-group')>=0){
            bundle_types.push(value);
          }
        })
      }
      else{
        //          console.log('capturing normal prods: '+item.title)
        //capture normal products
        if(item.properties_all  && item.properties_all .frequency_num){
          recurring_desc = "<span> Delivered Every " + item.properties_all.frequency_num + " " +
            item.properties_all.frequency_type_text + " " +
            item.properties_all.discounted_price + " each" + "<span>";
        }
        var line_id = index + 1;
        cart_items_html += '<li class="cart_item clearfix">' +
          '<a href="' + item.url +'">';
        if (item.image) {
          cart_items_html += '<div class="cart_image">' +
            '<img src="' + item.image.replace(/(\.[^.]*)$/, "_compact$1").replace('http:', '') + '" alt="' + htmlEncode(item.title) + '" />' +
            '</div>';
        }
        cart_items_html += '<div class="item_title">' + item.title;
        cart_items_html += recurring_desc;
        cart_items_html += '</div></a>';
        cart_items_html += '<strong class="price">';
        var newPrice = parseInt((!$.isEmptyObject(item.properties))?item.properties._ro_unformatted_price:item.price);
        $.ajax({
          dataType: "json",
          async:false,
          cache: false,
          url: "/products/" + item.handle + ".js",
          success: function (data) {
            var variant_id = item.variant_id;
            var variant = $.grep(data.variants, function (v) {
              return v.id == variant_id;
            });

            if (variant[0] && variant[0].compare_at_price > item.price) {
              cart_items_html +=
                ' <span class="money was_price_clr"><strike>' +
                Shopify.formatMoney(
                variant[0].compare_at_price,
                $cart.data("money-format")
              ) +
                "</strike></span> ";
              discounted_price_total += item.price * item.quantity;
              total_savings += variant[0].compare_at_price;
            }
            if (variant[0].compare_at_price > item.price) {
              original_price += item.quantity * variant[0].compare_at_price;
            } else {
              original_price += item.quantity * item.price;
            }
            //              all_original_price +=original_price;
          },
        });

        cart_items_html +=
          '<span class="money original_price">' +
          Shopify.formatMoney(
          item.price * item.quantity,
          $cart.data("money-format")
        ) +
          '</span>';

        cart_items_html +='<br/><a class="item-delete js-change-quantity" href="#" data-func="remove" data-qty="0" data-line-id="' + line_id +'" style="display: block;margin-top: 5px;" >Delete</a>';
        cart_items_html += '</strong>';
        cart_items_html += '<div class="quantity-row right" style="left:-16px;"><a href="javascript:void(0);" class="btn-subtract js-change-quantity qty-minus "  data-func="minus">';
        cart_items_html +='<svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><title>- icon</title><g fill="none" fill-rule="evenodd"><circle stroke="#CCD2D7" cx="12.5" cy="12.5" r="12"></circle><path fill="#CCD2D7" d="M7 12h11v1H7z"></path></g></svg>';
        cart_items_html +='</a><label for="updates_' + item.id + '" class="hidden">Qty:</label><input type="number" min="0"  class="quantity" name="updates[]" id="updates_' + item.id + '" value="' + item.quantity +'" data-line-id="' + line_id +'" />';
        cart_items_html +='<a href="javascript:void(0);" class="btn-add js-change-quantity qty-plus " data-func="plus">';
        cart_items_html +='<svg width="25" height="25" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg"><title>+ icon</title><g fill="none" fill-rule="evenodd"><circle stroke="#CCD2D7" cx="12.5" cy="12.5" r="12"></circle><path fill="#CCD2D7" d="M7 12h11v1H7z"></path><path fill="#CCD2D7" d="M12 18V7h1v11z"></path></g></svg></a></div>';
        cart_items_html +='<div style="clear:both;"></div></li>';

      }
    })
    var unique_bundles = bundle_types.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
    //      console.log(unique_bundles)
    $.each(unique_bundles,function(i,ele){
      var bundle_title = ele;
      var temp_title = ele.replace('bundle-group-',"").split(':')[0];

      var page = $.grep(window.bundle_pages,function(find,s) {
        return find.handle == temp_title;
      })
      var original_line_price = 0,discounted_line_price=0;
      cart_items_html += '<li class="item cf minicart-bundle clearfix">';
      cart_items_html += '<div class="bundle_top">';
      cart_items_html += '<div class="image bundle_prod_image">';
      if(page.length>0){
        cart_items_html +='<img src="'+page[0].bundle_image+'" title="' +page[0].bundle_name+ '" width="70"/>';
      }
      cart_items_html +='</div>';
      cart_items_html +=`<div class="bundle_title">${page[0].bundle_name}</div>`;
      cart_items_html +='</div>';
      cart_items_html +='<div class="bundle_wrapper">';
      cart_items_html +='<div class="prise-detail">';
      cart_items_html +='<div class="subitems_wrapper">';
      var var_ids = "";

      $.each(original_cart.items, function(index, item) {
        if(item.properties) {
          $.each(item.properties, function(title, value) {
            if(bundle_title == value){
              //                console.log(item.original_line_price, item.final_line_price, item.handle,item)
              var_ids += item.id + ",";
              original_line_price += item.original_line_price;
              discounted_line_price += item.final_line_price;
              cart_items_html +='<div class="subitem">';
              cart_items_html +='<span class="item_title">'+item.title+'</span>';
              cart_items_html +='<span class="qty">'+item.quantity+'</span>';
              cart_items_html +='</div>';
            }
          })
        }
      });
      cart_items_html +='</div>';
      cart_items_html +='<div class="bundle_wrapper_bottom">';
      cart_items_html +=`<div class="bundle-remove"><a href="javascript:;" data-ids="${var_ids.slice(0, -1)}">Delete</a></div>`;
      cart_items_html +=`<div class="bundle_price"> <span class="money"><strike>${Shopify.formatMoney(original_line_price,$cart.data('money-format'))}</strike>&nbsp;${Shopify.formatMoney(discounted_line_price,$cart.data('money-format'))}</span></div>`;
      cart_items_html +='</div>';
      cart_items_html +='</div>';
      cart_items_html +='</div>';
      cart_items_html += '</li>';
    })

    console.log(total_savings,original_price,cart.items_subtotal_price)
    if(total_savings>0){
      cart_action_html += '<span class="right"><span class=""><span class="saso-cart-original-total"><strike>'+Shopify.formatMoney((cart.original_total_price + total_savings), $cart.data('money-format'))+'</strike> ' + Shopify.formatMoney(cart.items_subtotal_price, $cart.data('money-format')) + '</span><span class="saso-cart-total"></span></span></span>' +
        '<span>Subtotal:</span>';  
    }
    else{
      cart_action_html += '<span class="right"><span class=""><span class="saso-cart-original-total">' + Shopify.formatMoney(cart.total_price, $cart.data('money-format')) + '</span><span class="saso-cart-total"></span></span></span>' +
        '<span>Subtotal:</span>';
    }

    //      cart_action_html += '<span class="right"><span class=""><span class="saso-cart-original-total">' + Shopify.formatMoney(cart.total_price, $cart.data('money-format')) + '</span><span class="saso-cart-total"></span></span></span>' +
    //        '<span>Subtotal:</span>';

    //        if(total_savings > 0 ) {
    //          cart_savings_html = '<span class="right"><span class="money was_price_clr">' + Shopify.formatMoney(original_price, $cart.data('money-format')) + '</span></span>' +
    //            '<span>Original Price:</span>';
    //        } else {
    //          cart_savings_html = "";
    //        }
  }

  $('.js-cart_items').html(cart_items_html);
  $('.js-cart_subtotal').html(cart_action_html);
  $('.js-cart_savings').html(cart_savings_html);


  

  if(window.BOLD && BOLD.common && BOLD.common.eventEmitter && typeof BOLD.common.eventEmitter.emit === 'function'){
    BOLD.common.eventEmitter.emit('BOLD_COMMON_cart_loaded', cart);
  }

}


function ajaxUpdateCart(lineID, quantity, parent) {
  var updated_price=0;
  $.ajax({
    url: '/cart/change.js',
    dataType: 'json',
    cache: false,
    type: 'post',
    data: { quantity: quantity, line: lineID },
    success: function (data) {
//       console.log(data)
      refreshCart(data);
//       console.log(data)
      setTimeout(function() {
        if (typeof ga == "function") {
          ga(function(tracker) {
            window.gaclientId = tracker.get("clientId")
          })
        }
      }, 1e3);

      var lineIDIndex = lineID - 1;

      //check to see if there are correct amount of products in array
      if (typeof data.items[lineIDIndex] === "undefined"){
        var updated_quantity = 0;
      } else {
        var updated_quantity = data.items[lineIDIndex].quantity;
        updated_price=data.items[lineIDIndex].price * updated_quantity;
//         console.log(updated_price)
        var cart_page=is_home;
        if (cart_page == "cart"){
          parent.find("input[data-line-id='" + lineID + "']").parent().prev().find('span.original_price').html(Shopify.formatMoney(updated_price, $("#cart_form").data('money-format')));
        }
        else{
          parent.find("input[data-line-id='" + lineID + "']").parent().prev().find('span.original_price').html(Shopify.formatMoney(data.items[lineIDIndex].price, $(".cart_content form").data('money-format')));
        }


      }		
      if(quantity > 0 && quantity != updated_quantity) {
        if (updated_quantity == 1) {
          items_left_text = "item left";
        } else {
          items_left_text = "items left";
        }

        $('.warning--quantity').remove();
        var warning = '<p class="warning warning--quantity animated bounceIn">' + updated_quantity + ' ' + items_left_text + '</p>';
        parent.find("input[data-line-id='" + lineID + "']").parent().after(warning);
        parent.find("input[data-line-id='" + lineID + "']").val(updated_quantity);
      } else if (parent.is('#cart_form')) {
        $("#cart_form").submit();
      }
    }
  });

}

var productPage = {
  init: function(){

    
    // function to check if browser is IE
    var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);

    // Ensure product media libraries are present
    if (!isIE11) {
      window.Shopify.loadFeatures([
        {
          name: 'model-viewer',
          version: '0.8'
        },
        {
          name: 'shopify-xr',
          version: '1.0',
        },
        {
          name: 'model-viewer-ui',
          version: '1.0',
        }
      ], productMedia.setupMedia)
    }
    
    var draggable = true;
    var prevNextButtons = true;

    setTimeout(function(){
     imageFunctions.linkGalleryAndCarousel($('.js-product-page-gallery .product_gallery'), $('.js-product-page-gallery .product_gallery_nav'));
    }, 1000);
    imageFunctions.zoom('.product_gallery', false);

    if($('.js-full-width-product-images').length){
      imageFunctions.fullWidth('.product-template .product .description img', '.js-full-width-product-images');
    }

    if ($('.product_gallery').hasClass('single-image')){
      draggable = false;
      prevNextButtons = false;
    }

    //detect autoplay settings
    var autoplay = $('.product_gallery').data('autoplay');

   var $productGallery = $('.product_gallery').flickity({
      "wrapAround": "true",
      "cellAlign": "left",
      "draggable": draggable,
      fade: true,
      "contain": true,
      "imagesLoaded": true,
      "lazyLoad": 2,
      "pageDots": usePageDots,
      "prevNextButtons": prevNextButtons,
      "autoPlay": autoplay ? 6000 : false,
      "selectedAttraction": 0.01,
      "friction": 0.15,
      "adaptiveHeight": true,
      "arrowShape": arrowSize,
      
   });
    
    var $thumbnailProductGallery = $('.sliderLocation').flickity({
      cellAlign: 'center',
      contain: true,
      groupCells: '80%',
      imagesLoaded: true,
      pageDots: false,
      prevNextButtons: prevNextButtons,
      arrowShape: {
        x0: 10,
        x1: 60, y1: 50,
        x2: 62, y2: 40,
        x3: 22
      },
      fade: true
    });
    var $slides = $productGallery.find('.gallery-cell');
    var $thumbnails = $thumbnailProductGallery.find('.gallery-cell');
    
     $productGallery.on('ready.flickity', function() {

       $slides.each(function(index, slide) {

         //Determine media type
         var mediaType = $(slide).data('media-type') || $(slide).find('[data-media-type]').data('media-type');
         var videoID;

         switch(mediaType) {
           case 'external_video':

             videoID = $(slide).find('[data-plyr-video-id]').data('plyr-video-id');

             if(videoPlayers) {
               for (var i = 0; i < videoPlayers.length; i++) {
                 if (videoPlayers[i].id == videoID || videoPlayers[i].media.id == videoID) {

                   if(!$(slide).hasClass('is-selected')) {
                     videoPlayers[i].keyboard = {
                       focused: false,
                       global: false
                     }
                   }
                 }
               }
             }
             break;
           case 'video':

             videoID = $(slide).find('[data-plyr-video-id]').data('plyr-video-id');

             if(videoPlayers) {
               for (var i = 0; i < videoPlayers.length; i++) {
                 if (videoPlayers[i].id == videoID || videoPlayers[i].media.id == videoID) {

                   if(!$(slide).hasClass('is-selected')) {
                     videoPlayers[i].keyboard = {
                       focused: false,
                       global: false
                     }
                   }
                 }
               }
             }
             break;
           case 'model':
             if($(slide).hasClass('is-selected')) { //When active slide
               if(mediaType == 'model' && isScreenSizeLarge()) {
                 $(slide).on('mouseenter', function() {
                   $productGallery.flickity('unbindDrag');
                 })
                 $(slide).on('mouseleave', function() {
                   $productGallery.flickity('bindDrag');
                 })
               }
             }
             break;
           default:
             break;
         }
       });

       // Video looping
       var loopingEnabled = $productGallery.data('video-loop');

       $.each(videoPlayers, function(index, player) {
         player.loop = loopingEnabled;
       })
     });

    $productGallery.on('change.flickity', function() {

      $slides.each(function(index, slide) {

        // Determine media type of current slide
        var mediaType = $(slide).data('media-type') || $(slide).find('[data-media-type]').data('media-type');
        var pId = $productGallery.data('product-id');
        if($(slide).hasClass('is-selected')) { //When active slide
//           console.log(mediaType,'seelcted')
          switch(mediaType) {
            case 'video':
              var videoID = $(slide).find('[data-plyr-video-id]').data('plyr-video-id');
              if(videoPlayers) {
                for (var i = 0; i < videoPlayers.length; i++) {
                  if (videoPlayers[i].id == videoID || videoPlayers[i].media.id == videoID) {
                    videoPlayers[i].play();
                  }
                }
              }
              
            case 'model':

              /* On slide change, if active slide contains 3d model
              * If on desktop, on hover, unbind flickity, after hover bind flickity
              * On model play event, unbind flickity to ensure model can be interacted with
              * On model pause event, bind flickity so that slide can be swiped
              * Pause all model slides when hidden
              */

              if (isScreenSizeLarge()) {

                // On mouseenter event, unbind flickity
                $(slide).on('mouseenter', function() {
                  $productGallery.flickity('unbindDrag');
                });

                // On mouseleave event, bind flickity
                $(slide).on('mouseleave', function() {
                  $productGallery.flickity('bindDrag');
                });
                // If model container has class is-selected then play the model
                var sortedModels = [];
                $.each(productMedia.models, function(index, model) {
                  if($(model.container).closest('.gallery-cell').data('product-id') == pId) {
//                     console.log(model)
                    sortedModels.push(model)
                  }
                })

//                 console.log(sortedModels)

                $.each(sortedModels, function(index, model) {
                  var $slide = $(model.container).closest('.gallery-cell');
                  if($slide.hasClass('is-selected')) {
                    model.play();
                  }
                })
              }

              // Listen for model pause/play events
              $(slide).find('model-viewer').on('shopify_model_viewer_ui_toggle_play', function(){
                $productGallery.flickity('unbindDrag');
              })

              $(slide).find('model-viewer').on('shopify_model_viewer_ui_toggle_pause', function(){
                $productGallery.flickity('bindDrag');
              })
              break;
            default:
              $productGallery.flickity('bindDrag');
              break;
          }
        } else { //When inactive slide

          switch(mediaType) {
            case 'external_video':
              //Youtube video pausing
              $.each(videoPlayers, function(index, player) {
                player.pause();
              });
              break;
            case 'video':
              //HTML5 video pausing
              $.each(videoPlayers, function(index, player) {
                player.pause();
              });
              break;
            case 'model':
              $.each(productMedia.models, function(index, model) {
                model.pause();
              })
          }
        }
      });

      //Restore 3d model icons
      productMedia.showModelIcon($productGallery);

    });
    

    var $sliderArrows = $productGallery.find('.flickity-prev-next-button');

    if (($sliderArrows || $thumbnails) && isScreenSizeLarge()) {
      $sliderArrows.on('click', function() {

        var pId = $productGallery.data('product-id');

        $productGallery.on( 'settle.flickity', function( event, index ) {
          // Find out media type of featured media slide
          var $selectedSlide = $productGallery.find('.gallery-cell.is-selected');
          var mediaType = $selectedSlide.data('media-type') || $selectedSlide.find('[data-media-type]').data('media-type');

//           console.log(mediaType)
          // Run video autoplay logic if featured media is a video
          if (mediaType == 'video' || mediaType == 'external_video') {
            checkForVideos();
          }

          // Autoplay model if featured media is a model
          if (mediaType == 'model') {
            // If model container has class is-selected then play the model
            var sortedModels = [];
            $.each(productMedia.models, function(index, model) {
              if($(model.container).closest('.gallery-cell').data('product-id') == pId) {
//                 console.log(model)
                sortedModels.push(model)
              }
            })
            
//             console.log(sortedModels)

            $.each(sortedModels, function(index, model) {
              var $slide = $(model.container).closest('.gallery-cell');
              if($slide.hasClass('is-selected')) {
                model.play();
              }
            })
          }
          $productGallery.off('settle.flickity');
        });

        return false;
      })
    }

       function checkForVideos() {
      $slides.each(function(index, slide) {
        // Variables
        var $slide = $(slide);
        var mediaType = $slide.data('media-type') || $slide.find('[data-media-type]').data('media-type');
        var videoID = $slide.find('video').data('plyr-video-id');
        var $iframeVideo = $slide.find('iframe');
        var iframeID = $iframeVideo.attr('id');

        if ($slide.hasClass('is-selected')) {
          if (mediaType == 'video') {
            videoID = $slide.find('video').data('plyr-video-id');
            if (videoID) {
              autoplayVideo(videoID, $slide);
            }
          } else if (mediaType == 'external_video' && iframeID) {
            autoplayYoutubeVideo(iframeID, $slide);
          }
        }
      })
    }

      function autoplayVideo(videoID, $slide) {
        // Compare id to player object and only play that video
        $.each(videoPlayers, function(index, player){

          if (player.media.dataset.plyrVideoId == videoID) {
            player.play();

            // On fullscreen toggle, focus back on the slide itself
            player.on('exitfullscreen', function(){
              $slide.closest('.product-gallery').find('.product-gallery__thumbnails').focus();
            })
          }
        })
      }

      function autoplayYoutubeVideo(iframeID, $slide) {
        // compare id to player object and only play that video
        $.each(videoPlayers, function(index, player){

          if (player.playing) {
            player.pause();
          }

          if (player.media.id == iframeID) {
            player.play();

            // On fullscreen toggle, focus back on the slide itself
            player.on('exitfullscreen', function(){
              $slide.closest('.product-gallery').find('.product-gallery__thumbnails').focus();
            })
          }
        })
      }

    
//     $('.sliderLocation').bxSlider({
//       slideWidth: 100,
//       minSlides: 4,
//       maxSlides: 4,
//       infiniteLoop: false,
//       moveSlides: 1,
//       slideMargin: 20,
//       pager: false,  
//       prevText: "",
//       nextText: "",
//       setGallerySize: false,
//       hideControlOnEnd: true
//     });

    $(".js-product_section .product_form_options").each(function() {
     new Shopify.OptionSelectors($(this).data("select-id"), { product: $(this).data("product"), onVariantSelected: selectCallback, enableHistoryState: $(this).data("enable-state") });
    });

    var $notify_form = $('.notify_form .contact-form');
    $notify_form.each(function() {
      var $nf = $(this);
      $nf.on("submit", function (e) {
        if($('input[name="challenge"]', $nf).val() !== "true") {
          $.ajax({
            type: $nf.attr('method'),
            url: $nf.attr('action'),
            data: $nf.serialize(),
            success: function (data) {
              $nf.fadeOut("slow", function(){
                $nf.prev('.message').html("Thanks! We will notify you when this product becomes available!");
              });
            },
            error: function(data) {
              $('input[name="challenge"]', $nf).val('true');
              $nf.submit();
            }
          });
          e.preventDefault();
        }
      });
    });

    
      $('body').on('change', '.swatch :radio', function() {
        var optionIndex = $(this).closest('.swatch').attr('data-option-index');
        var optionValue = $(this).val();
        var parentForm = $(this).closest('.product_form');


        if (parentForm.siblings('.notify_form').length){
          var notifyForm = parentForm.siblings('.notify_form');
        } else {
          //quick shop
          var notifyForm = $('.js-notify-form');
        }

        var option1 = parentForm.find('.swatch_options input:checked').eq(0).val();
        var option2 = parentForm.find('.swatch_options input:checked').eq(1).val() || '';
        var option3 = parentForm.find('.swatch_options input:checked').eq(2).val() || '';

        if (option1 && option2 && option3){
          var notifyMessage = option1 + ' / ' + option2 + ' / ' + option3;
        } else if (option1 && option2){
          var notifyMessage = option1 + ' / ' + option2;
        } else {
          var notifyMessage = option1;
        }


        notifyForm.find(".notify_form_message").attr("value", notifyForm.find(".notify_form_message").data('body') + " - " + notifyMessage );

        $(this)
          .closest('form')
          .find('.single-option-selector')
          .eq(optionIndex)
          .val(optionValue)
          .trigger('change');
      });
    

    //initialize lightbox
    lightboxGallery.init();

  },
  relatedProducts: function(){

    $('.js-related-products-slider .products-slider').each(function (index, value) {
      var products_per_slide = $(this).data('products-per-slide');
      var products_limit = $(this).data('products-limit');
      var products_available = $(this).data('products-available');
      var cellAlign,
          draggable,
          prevNext,
          wrapAround,
          initialIndex;

      if (products_per_slide == "2" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "4" && products_available > products_per_slide && products_limit > products_per_slide || products_per_slide == "6" && products_available > products_per_slide && products_limit > products_per_slide){
        cellAlign = "left";
      } else {
        cellAlign = "center";
      }

      if (products_available > products_per_slide && products_limit > products_per_slide) {
        draggable = true;
        prevNext = true;
        wrapAround = true;
      } else {
        draggable = false;
        prevNext = false;
        wrapAround = false;
      }

      if (products_per_slide == "2" && products_available > products_per_slide || products_per_slide == "4" && products_available > products_per_slide || products_per_slide == "6" && products_available > products_per_slide){
        initialIndex = 0;
      } else if (products_per_slide == "3" && products_available) {
        initialIndex = 1;
      } else if (products_per_slide == "5" && products_available) {
        initialIndex = 2;
      } else if (products_per_slide == "7" && products_available) {
        initialIndex = 3;
      }

      if ($(window).width() <= 798) {
        cellAlign = "center";
        draggable = true;
        prevNext = true;
        wrapAround = true;
        initialIndex = 1;

        $(this).parents('.even-num-slides').removeClass('even-num-slides');
      }

      $(this).flickity({
        "lazyLoad": 2,
        "imagesLoaded": true,
        "draggable": draggable,
        "cellAlign": cellAlign,
        "prevNextButtons": prevNext,
        "wrapAround": wrapAround,
        "pageDots": usePageDots,
        "contain": true,
        "freeScroll": true,
        "arrowShape": arrowSize,
        "initialIndex": initialIndex
      });
    });
  },
  initializeQuantityBox: function(){

    $('body').on('click', '.js-change-quantity', function() {
        var $this = $(this),
            $input = $(this).siblings('input'),
            val = parseInt($input.val()),
            valMax = 100000000000000000000000000000,
            valMin = $input.attr('min') || 0;

        if ($input.attr('max') != null){
          valMax = $input.attr('max');
        }

        if(isNaN(val) || val < valMin) {
            $input.val(valMin);
            return false;
        } else if (val > valMax) {
            $input.val(valMax);
            return false;
        }
      
      if($this.data('func') == 'remove') {
        alert($this.data('func'))
        $this.closest('.cart_item').addClass('animated fadeOutUp')
      }
      if($this.data('func') == 'plus') {
        if(val < valMax) $input.val(val + 1);
      }
      else {        
        if(val > valMin) $input.val(val - 1);
        if($this.parents(".cart_item").length) {
          if (val - 1 == 0) {
            $this.closest('.cart_item').addClass('animated fadeOutUp')
          }
        }
      }
        $input.trigger('change');

    });
  },
  unload: function($target){

    var $slider = $target.find('.products-slider');
    $slider.flickity('destroy');

  }
}

/*============================================================================
  Newsletter Popup
==============================================================================*/

/*============================================================================
  Header section
==============================================================================*/

var header = {
  init: function(){

    var promo_banner = Cookies.get('cookieconsent_status');
    if ($('.promo_banner:not(.mobile-promo)').length){
      if (promo_banner != 'dismiss') {
        Cookies.set('promo_banner', 'dismiss', { expires: 30 });
        Cookies.set('cookieconsent_status', 'dismiss', { expires: 30 });
        $('body').addClass('promo_banner-show');
        $('.promo_banner:not(.mobile-promo)').on('click', '.promo_banner-close a', function(){
          $('body').removeClass('promo_banner-show');
//           Cookies.set('promo_banner', 'dismiss', { expires: 30 });
//           Cookies.set('cookieconsent_status', 'dismiss', { expires: 30 });
          $('.promo_banner:not(.mobile-promo)').hide()
        });
      }
      else{
        $('.promo_banner:not(.mobile-promo)').hide()
        $("#mobile_cookie_bar").hide();
      }
    }
    
    $('body').on('click','a.cc-btn.cc-dismiss',function(e){
      e.preventDefault();
      $("#mobile_cookie_bar").hide();
      Cookies.set('cookieconsent_status', 'dismiss', { expires: 30 });
    })

    //offscreen check for menu
    $('.vertical-menu_submenu, .vertical-menu_sub-submenu').each(function() {
      if($(this).is(':off-right')) {
        $(this).addClass('vertical-menu--align-right');
      }
    });

    //Only apply on larger screen sizes
    if ($(window).width() > 798) {
      if ($('.header').hasClass('header-fixed--true')){
        if (!$('.main_nav_wrapper').hasClass('sticky_nav')) {
          var sticky_nav = new Headhesive('.main_nav_wrapper', {
            offset: 700,
            throttle: 300,
            classes: {
              clone: 'sticky_nav',
              stick: 'sticky_nav--stick',
              unstick: 'sticky_nav--unstick'
            },
            onInit: function() {
              $(".sticky_nav .secondary_logo").hide();
              $(".sticky_nav .primary_logo").show();
              $(".sticky_nav .icon-search").show();
              $(".sticky_nav .search_container").hide();
              $(".sticky_nav .nav:last").prepend($(".header .cart_container").clone());
              
                var sticky_nav_height = $(".sticky_nav").height() + 5;
              
              $(".sticky_nav .mini_cart").css("height", $(".sticky_nav").height() + 5);
              $(".sticky_nav .cart_content").css("top", $(".sticky_nav").height());
            },
            onUnstick: function() {
              $('.cart_container').removeClass('active_link');
            }
          });
        }
      } else {
        $('.header-fixed--true').removeClass('header-fixed--true');
        if ($('.main_nav_wrapper').length > 1) {
          $('.main_nav_wrapper').first().remove();
        }
      }

      if ($('img.primary_logo:visible')){
        $('.logo img', $(".feature_image .header")).attr('src', $('.logo img').data('src-home'));
      } else {
        $('.logo img').attr('src', $('.logo img').data('src'));
      }
    } else {
      if ($('#header').hasClass('mobile_nav-fixed--true')){
        $('body').addClass('mobile_nav-fixed--true');
      } else {
        $('body').addClass('mobile_nav-fixed--false');
      }
    }

//     $('#header .cart_container').append($('.cart_content').clone());

    if ($(window).width() <= 798) {

      $('.dropdown_link').attr('data-no-instant', true);

      $('body').on('click', '.dropdown_link', function(e) {
        $('.nav a').removeClass('active_link');
        if ($('#header').is(':visible')) {
          var $dropdown = $(this).parents("#header").find('[data-dropdown="' + $(this).data("dropdown-rel") + '"]')
          if(!$(this).hasClass('mini_cart')) {
            $('.cart_container').removeClass('active_link');
          }
        } else {
          if($(this).hasClass("icon-search")) {
            window.location = $(this).attr("href");
            return false;
          }
          var $dropdown = $(this).parents(".main_nav").find('[data-dropdown="' + $(this).data("dropdown-rel") + '"]');
          console.log($dropdown)
        }
//         if ($dropdown.is(':visible') || $dropdown.attr('class') === undefined) {          
          
//           $('div.dropdown.dropdown-slide').removeClass('translate-zero');
//           $dropdown.hide();          
//           $('body').removeClass('is-active');
//         } else {
// //           
//           if(!$(this).hasClass('cart_container')) {
//             $('.is-absolute').parent().removeClass('feature_image');
//           }
//           $('div.dropdown.dropdown-slide').addClass('translate-zero');
//           $dropdown.show();
          
//           $('body').addClass('is-active');
//           $('.mobile_nav').find('div').removeClass('open');
//         }
          

        if ($dropdown.is(':visible')) {
          e.stopPropagation();
          return false;
        }
      });
    
      $("a.mobile_nav.dropdown_link").click(function(){
        $('div.mobile-menu').css('display','block');  
        $('body').toggleClass('blocked-scroll');
        $('div.dropdown.dropdown-slide').toggleClass('translate-zero');
      });
      $('body').on("click", '.mobile_nav', function() {
        $(this).find('div').toggleClass('open');
      });

      var closeDropdown = function() {
        $('body').removeClass('is-active');
        $('.dropdown_link').removeClass('active_link');
        $('.dropdown_container').hide();
        $('.mobile_nav').find('div').removeClass('open');
      };

      var closeMiniCart = function() {
        $('body').removeClass('is-active');
        $('.dropdown_link').toggleClass('active_link');
        $('.cart_container').removeClass('active_link');
      };

      var openMiniCart = function($cart_container) {
        $('.mobile_nav div').removeClass('open');
        $('.dropdown_link').removeClass('active_link');
        $cart_container.addClass('active_link');
      };

//       Click anywhere outside of dropdown to close
      $('html').on('click', function(event) {
//         if (!$(event.target).closest('.cart_container').length && $('.cart_content').is(':visible')) {     
//           closeMiniCart();
//         }

        console.log($(event.target).closest('.dropdown_container'))
        if (!$(event.target).closest('.dropdown_container').length && $('.dropdown').is(':visible')) {
          closeDropdown();
        }
      });

      //Toggle mini-cart with menu icon
//       $(".mini_cart").on("click", function(e) {
//         var $cart_container = $(this).parent();
//         if($cart_container.hasClass('active_link')) {
//           closeMiniCart();
//         } else {
//           openMiniCart($cart_container);
//         }

//         if (is_touch_device() || $(window).width() <= 798) {
//           e.preventDefault();
//         }
//       });

      $('.cart_content__continue-shopping').on('click', function(e){
        closeMiniCart();
      })

    } else {

      $(".nav a, .logo a").not(".cart_content a").on("mouseenter", function() {
//         console.log($(this))
        if(!$(this).hasClass("active_link")) {
          $('.dropdown_container').hide();
          $('.active_link').removeClass('active_link');
          $('.is-absolute').parent().addClass('feature_image');
        }
      });

      $('.main_nav, .top_bar, .cart_container').on("mouseleave", function() {
        $('.dropdown_container').hide();
        $('.active_link').removeClass('active_link');
        $('.is-absolute').parent().addClass('feature_image');
      });

      $('.dropdown_link, .dropdown_link--vertical').attr('data-click-count', 0);

      if (is_touch_device() && $(window).width() >768 && $(window).width() <= 1024) {
        $('body').on('click','.dropdown_link', function(e) {
          console.log('ipad pro')
          $('.active_link').removeClass('active_link');
          var $dropdown = $(this).parents('.main_nav').find('[data-dropdown="' + $(this).data('dropdown-rel') + '"]');
          console.log($dropdown)
          $('body').removeClass('is-active');
          $('.dropdown_link').removeClass('active_link');
          $('.dropdown_container').not($dropdown).hide();
          $('.mobile_nav').find('div').removeClass('open');
          $dropdown.toggle();
          var clickCount = $(this).attr('data-click-count');
          if(!$(this).hasClass('active_link')) {
            if($(this).hasClass('mini_cart')) {
              $(this).parent('.cart_container').addClass('active_link');
            } else {
              $(this).addClass('active_link');
              $('.is-absolute').parent().removeClass('feature_image');
            }
          }

          //Enable touch on parent link if on touch device and desktop menu is visible
          if(is_touch_device()){
            $('.dropdown_link').not(this).attr('data-click-count', 0);
            $('.dropdown_link').attr('data-no-instant', true);
          }
        });
      }
      else{
        $('body').on('mouseover touchstart','.dropdown_link', function(e) {
//           console.log('Desktop version')
          $('.active_link').removeClass('active_link');
          var $dropdown = $(this).parents('.main_nav').find('[data-dropdown="' + $(this).data('dropdown-rel') + '"]');
          //         console.log($dropdown)
          var clickCount = $(this).attr('data-click-count');
          if(!$(this).hasClass('active_link')) {
            $('body').removeClass('is-active');
            $('.dropdown_link').removeClass('active_link');
            $('.dropdown_container').hide();
            $('.mobile_nav').find('div').removeClass('open');
            $dropdown.show();
//             console.log($dropdown)

            if($(this).hasClass('mini_cart')) {
              $(this).parent('.cart_container').addClass('active_link');
            } else {
              $(this).addClass('active_link');
              $('.is-absolute').parent().removeClass('feature_image');
            }
          }

          //Enable touch on parent link if on touch device and desktop menu is visible
          if(is_touch_device()){
            $('.dropdown_link').not(this).attr('data-click-count', 0);
            $('.dropdown_link').attr('data-no-instant', true);

            //capture touch event
            if (e.type == 'touchstart'){
              clickCount++;
              $(this).attr('data-click-count', clickCount);

              if (clickCount < 2){
                e.preventDefault();
                e.stopPropagation();
                return false;
              }
            }
          }

        });
      }

      //Vertical menu enabled
      if ($('.dropdown_link--vertical').length){
        $('.dropdown_link--vertical').on('mouseover', function(e) {
          var $dropdown = $(this).parents('.main_nav').find('[data-dropdown="' + $(this).data('dropdown-rel') + '"]');
          var clickCount = $(this).attr('data-click-count');

          $('.active_link').removeClass('active_link');
          if(!$(this).hasClass('active_link')) {
            $(this).children('a').addClass('active_link');
            $('.is-absolute').parent().removeClass('feature_image');
          }
        });

        //Enable touch on parent link if on touch device and desktop menu is visible
        if(is_touch_device()){
          $('.dropdown_link--vertical').on('touchstart', function(e) {
            var $dropdownMegaMenu = $(this).parents('.main_nav').find('[data-dropdown="' + $(this).data('dropdown-rel') + '"]');
            var $dropdownVertical = $(this).next('.vertical-menu_submenu');
            var clickCount = $(this).attr('data-click-count');

            $('.dropdown_link--vertical').not(this).attr('data-click-count', 0);
            $('.dropdown_link--vertical').attr('data-no-instant', true);
            $('.dropdown_container').hide();

            $dropdownMegaMenu.show();
            $('.vertical-menu_submenu').removeClass('is-visible');
            $dropdownVertical.addClass('is-visible');

            //capture touch event
            if (e.type == 'touchstart'){
              clickCount++;
              $(this).attr('data-click-count', clickCount);

              if (clickCount < 2){
                e.preventDefault();
                e.stopPropagation();
                return false;
              }
            }
          });
        }
      }

    }

  },
  removeDataAttributes: function(target){
    if($(target).length){
      var i,
          $target = $(target),
          attrName,
          dataAttrsToDelete = [],
          dataAttrs = $target.get(0).attributes,
          dataAttrsLen = dataAttrs.length;

      for (i=0; i<dataAttrsLen; i++) {
        if ( 'data-' === dataAttrs[i].name.substring(0,5) ) {
          dataAttrsToDelete.push(dataAttrs[i].name);
        }
      }
      $.each( dataAttrsToDelete, function( index, attrName ) {
        $target.removeAttr( attrName );
      })
    }
  },
  loadMegaMenu: function(){

    //Remove old mega-menus so that theme-editor works properly
    $('.sticky_nav .mega-menu').remove();
    $('.header .mega-menu').remove();

    //Clone the mega menu from section into sticky_nav
    $('.mega-menu-container .mega-menu')
      .clone()
      .appendTo('.sticky_nav .main_nav');
    //Remove theme-editor data-attributes
    header.removeDataAttributes('.sticky_nav .mega-menu.dropdown_container .dropdown_column');

    //Loop through mega-menus to add arrow to parent
    $('.mega-menu-container .mega-menu').each(function(index){
      var megaMenuValue = $(this).data("dropdown");
      $('[data-dropdown-rel="' + megaMenuValue + '"]')
        .find('span')
        .remove();

      $('[data-dropdown-rel="' + megaMenuValue + '"]')
        .not('.icon-search')
        .append(' <span class="icon-down-arrow"></span>')
        .addClass('mega-menu-parent')
        .addClass('dropdown_link')
        .removeClass('top_link');

      $('[data-dropdown="' + megaMenuValue + '"]').each(function(index){
        if (!$(this).hasClass('mega-menu')) {
          $(this).remove();
        }
      });

      $(this).clone().appendTo('.header .main_nav');
    });

    //Remove default mega menus if vertical menus are selected
    if ($('.dropdown_link--vertical').length){
      $('.dropdown_link--vertical.mega-menu-parent + .vertical-menu_submenu').remove();
      $('.dropdown_link--vertical:not(.mega-menu-parent)').each(function(index){
        var megaMenuValue = $(this).data('dropdown-rel');
        $('[data-dropdown="' + megaMenuValue + '"]').remove();
      })
    }

    $('.mega-menu-parent').on('mouseenter', function() {

      if(!$(this).hasClass('active_link')) {
        $('.dropdown_container').hide();        
        $(this).parents('.main_nav').find('[data-dropdown="' + $(this).data('dropdown-rel') + '"]').toggle();

        $(this).addClass('active_link');
        $('.is-absolute').parent().removeClass('feature_image');

      }
    });

    //Remove theme-editor data-attributes
    header.removeDataAttributes('.header .mega-menu.dropdown_container .dropdown_column');

    if (is_touch_device() || $(window).width() <= 798) {
      $('.dropdown_link').attr('data-no-instant', true);
    }

    header.loadMobileMegaMenu();
  },
  loadMobileMegaMenu: function() {

    //Loop through mega menus and add to mobile menu
//     $('.mega-menu-container .mobile-mega-menu').each(function(index){
//       $('[data-mobile-dropdown-rel="' + $(this).data("mobile-dropdown") + '"]').find('span').remove();
//       $('[data-mobile-dropdown-rel="' + $(this).data("mobile-dropdown") + '"] > a').append(' <span class="right icon-right-arrow"></span>').attr('data-no-instant', 'true');
//       $('[data-mobile-dropdown-rel="' + $(this).data("mobile-dropdown") + '"]').addClass('mobile-mega-menu-parent sublink');
//       $('[data-mobile-dropdown-rel="' + $(this).data("mobile-dropdown") + '"]').append(this);
//       $('[data-mobile-dropdown-rel="' + $(this).data("mobile-dropdown") + '"] > ul').each(function(index){
//         if (!$(this).hasClass('mobile-mega-menu')) {
//           $(this).remove();
//         }
//       });
//     });
  },
  unloadMegaMenu: function(){
    $('.header .mega-menu').remove();
    $('.mega-menu-container .mega-menu').each(function(index){
      var menuParent = $(this).data('dropdown');
//       $('.mega-menu-parent[data-dropdown-rel="' + $(this).data("dropdown") + '"]').find('.icon-down-arrow').remove();
    });
  },
  unload: function() {
    $('body').off("click", '.mobile_nav');
    $('body').off('click', '.dropdown_link');
    $('html').off('click');
    $('.mini_cart').off('click');
    $('.cart_content__continue-shopping').off('click');
  }
}

/*============================================================================
  Load More Products
==============================================================================*/




/*============================================================================
  Filter Products with AJAX
==============================================================================*/

Shopify.queryParams = {};
if (location.search.length) {
 for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
    aKeyValue = aCouples[i].split('=');
    if (aKeyValue.length > 1) {
     Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
    }
  }
}

var quickFilter = {
  init: function(){
    var selectedOptions = [],
        query = '',
        currentTags = '',
        siteUrl = 'https://' + $.url('hostname'),
        url1 = $.url('1') ? '/' + $.url('1') + '/' : '',
        url2 = $.url('2') ? $.url('2') + '/' : '',
        url3 = $.url('3'),
        path = url1 + url2;

    //Handle dropdowns if they exist
    if ($('#sort-by').length){
      query = $('#sort-by').val();
    } else {
      query = url('?sort_by');
    }

    if ($('#tag_filter').length){

      if ($('#tag_filter').data('default-collection') != $('#tag_filter').val()){
        urlTag = $('#tag_filter').val().substr($('#tag_filter').val().lastIndexOf('/') + 1);

        if (urlTag != 'all'){
          if ($.inArray( urlTag, selectedOptions ) > -1){
            //Do nothing
          } else {
            selectedOptions.unshift(urlTag);
          }
        }
      }
    }

    //Add all checkbox values to array
    $('[data-option-filter] input:checked').each(function (){
      selectedOptions.push($(this).val());
    });
    selectedOptions = $.makeArray(selectedOptions);

    //Loop through tags to create string to update page url
    $.each(selectedOptions, function(i, value){

      if (i != selectedOptions.length - 1) {
        currentTags += selectedOptions[i] + '+';
      } else {
        currentTags += selectedOptions[i];
      }

    });

    Shopify.queryParams.sort_by = query;
    query = '?' + $.param(Shopify.queryParams);

    quickFilter.processUrl(path, currentTags, query);
  },
  updateView: function(filterURL) {

    $.ajax({
       type: 'GET',
       url: filterURL,
       beforeSend: function() {
          $(".collection-matrix").addClass('fadeOut animated loading-in-progress filter-loading');
          Waypoint.destroyAll()
       },
       success: function(data) {
          $(".collection-matrix").removeClass('loading-in-progress');
          $(".collection-matrix").removeClass('filter-loading');
          var filteredBreadcrumb = $(data).find('.breadcrumb_text').html();
          $('.breadcrumb_text').html(filteredBreadcrumb);

          var filteredPagination = $(data).find('.paginate').html();
          $('.paginate').html(filteredPagination);

          var filteredSidebar = $(data).find('.sidebar').html();
          $('.sidebar').html(filteredSidebar);

          var filteredPageLinks = $(data).find('.paginate').html();
          $('.paginate').empty();
          $('.paginate').html(filteredPageLinks);

          var filteredData = $(data).find('.collection-matrix');
          $('.collection-matrix').remove();
          filteredData.insertBefore( $('.load-more__icon') );
         

          window.history && window.history.pushState && window.history.pushState("", "", filterURL);
         InitWaypointAnimations({          
           offset: "95%",
           animateClass: "ez-animate",
           animateGroupClass: "ez-group-animate"
         });
          if ($('.sidebar__collection-filter').length){
            collectionSidebarFilter.init();
          }

          

          
          
          
       },
       error: function(x, t, m) {
        console.log(x);
        console.log(t);
        console.log(m);
        location.replace(location.protocol + '//' + location.host + filterURL);

       },
       dataType: "html"
    });
  },
  processUrl: function(path, tags, query){

    var query = query.replace(/\page=(\w+)&/, ''),
        urlString = '';

    urlString = path + tags + query;

    quickFilter.updateView(urlString);

  }
}

$('#sort-by').val($('#sort-by').data('default-sort'));

$('body')
  .on('change', '#tag_filter, #sort-by', function() {
    quickFilter.init();
});

$('body')
  .on('change', '#blog_filter', function() {
    var url = $(this).val();
    window.location = url;
});
    
    $("body").on('click','#pt-nav-toggle',function(e){
      e.preventDefault();
      $('.filter-design').toggle();
      $(this).toggleClass('active');
      $(this).parents('.pt-mobile-header').toggleClass('expand-filter');
    })
    $('body').on('click','.filter-main-title',function(e){
      e.preventDefault();
      $('.filter-main-title').not(this).removeClass('active-filter');
      $(this).toggleClass('active-filter');
      var dropdown = $(this).siblings('.fiter-dropdown-list');
      $('.fiter-dropdown-list').not(dropdown).removeAttr('style');
      dropdown.toggle()
//       console.log(dropdown.is(':visible'),dropdown)
//       if(!dropdown.is(':visible')){
//         dropdown.show();
//       }
//       else{
//         dropdown.hide();
//       }
//       console.log(dropdown)
    })

$('input, select, textarea').on('focus blur', function(event) {
  $('meta[name=viewport]').attr('content', 'width=device-width,initial-scale=1,maximum-scale=' + (event.type == 'blur' ? 10 : 1));
});

/*============================================================================
  Sidebar filter on collection pages
==============================================================================*/

var collectionSidebarFilter = {
  init: function(){

    $('.fiter-block').each(function(){
      if($(this).find('.sidebar__collection-filter').length<=0){
        $(this).hide();
      }
    })
    $('.filter-active-tag input:checked').parents('.filter-active-tag').siblings('.filter-all-tags').hide();
    $('.toggle-all--true .toggle_list .filter-active-tag input:checked').parents('ul.toggle_list').prev().click();

    //Hide filters if types or vendors is in URL (can't be combined)
    if ($.url(2) === 'types' || $.url(2) === 'vendors'){
      $('.sidebar__collection-filter').parents('.fiter-block').remove();
    }

    $('.sidebar-block:empty').prev().css('border-bottom', 'none');

  },
  clearAllFilters: function(){
    $('[data-option-filter] input').attr('checked', false);
    $('[data-option-filter] input').trigger('change');
  },
  clearSelectedFilter: function(optionFilter){
    optionFilter.find('[data-option-filter] input').attr('checked', false);
    optionFilter.find('[data-option-filter] input').trigger('change');
  }
}

//Check the checkbox values
$('body').on('change', '[data-option-filter] input', function(){
  quickFilter.init();
})

$('body').on('click', '[data-reset-filters]', function(){
  collectionSidebarFilter.clearAllFilters();
});

$('body').on('click', '[data-clear-filter]', function(){
  var selectedOption = $(this).parents('.filter-active-tag');
  collectionSidebarFilter.clearSelectedFilter(selectedOption);
});

/*============================================================================
  FAQ
==============================================================================*/
var faqAccordion = {
        init: function(){
          var flg = 0;
          var $faqHeading = $('.faqAccordion > dt > button');          
          $('.faqAccordion > dd').attr('aria-hidden',true);
          $faqHeading.attr('aria-expanded',false);
          $faqHeading.on('click activate',function(){
            if( flg ) return false;
            flg = 1;
            var state = $(this).attr('aria-expanded') === 'false' ? true : false;            
            $(this).attr('aria-expanded',state);
            $(this).toggleClass('faq-blue');
            $(this).parent().next().slideToggle(function(){
              flg = 0;              
            });
            $(this).parent().next().attr('aria-hidden',!state);
            return false;
          });
          $faqHeading.on('keydown',function(event){
            var keyCode = event.keyCode || e.which;
            if (keyCode === 13){
              $(this).trigger('activate');
            }
          });
        }
      }


/*============================================================================
  Utilities
==============================================================================*/


  //used for settings.slideshow_arrow_size === 'regular'
  var arrowSize = {
    x0: 10,
    x1: 60, y1: 50,
    x2: 70, y2: 40,
    x3: 30
  }


//compatibility with gallery using remodal
var lightboxGallery = {
  init: function(){
    //compatibility with gallery using remodal
    if ($('.lightbox img').length) {
      var currentSlide;
      var $lightboxImages = $('a.lightbox');
      var groups = [];

      //get all lightbox images and divide into groups based on rel attribute
      $lightboxImages.each(function(index){
        groups.push($(this).attr('rel'));
        groups = groups.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
      })

      //loop through gallery groups and create modals
      $.each(groups, function(index, value){

        //Loop through images and add link to remodal
        $('.lightbox[rel=' + value + ']').attr('data-remodal-target', 'lightbox-id-' + index );

        var lightboxModal = [
          '<div class="remodal remodal-lightbox js-remodal-lightbox js-lightbox-' + index + '" data-rel="' + value + '" data-remodal-id="lightbox-id-' + index + '" data-remodal-options="hashTracking: false">',
            '<a data-remodal-action="close" class="remodal-close"></a>',
            '<div class="lightbox-gallery"></div>',
          '</div>'
        ].join('');

        //Add modal lightbox to page to be populated by lightboxImageGallery
        $('body').append(lightboxModal);

        $('.lightbox[rel=' + value + ']').each(function(index){
          $(this).attr('data-image-id', index);
          $(this).attr('data-no-instant', '');
        });

      });

    }
  }
}

var utils = {
  createAccordion: function(container, tab, content){
    var $container = $(container);
    var $tab = $(container).find(tab);
    var $content = $(container).find(content);
    var specificTab = container + ' ' + tab;

    //Check to see if need to rearrange product tabs to create accordion (backwards compatible)
    if (container.indexOf(".accordion-tabs") >= 0){
      var rearrangedTabs = $.map($tab, function(v, i) { return [v, $content[i]]; });
      $container.empty();

      $.each(rearrangedTabs, function (index, value) {
        $container.append(this);
      });

      $content.removeClass('active');
      $container.find('.active').next().slideToggle();

      tab = container + '> a';
    }

    $(container).children('a').each(function(i, tab) {
      var tab = $(this);
      var tabValue = tab.attr('href'); //get tab id
      tab.attr('data-tab-value', tabValue); //set tab id in data attribute
      tab.removeAttr("href"); //remove href (to prevent url hash update)
    });

    $(container).find(tab + '.active').next().slideToggle();
    $('body').on('click', specificTab, function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).next().slideToggle();
    });
  },
  mobileAccordion: function(container, tab, content){
    $container = $(container);
    $tab = $(container).find(tab);
    $content = $(container).find(content);

    $(tab + '.active').next().slideToggle();

    $('body').on('click', tab, function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).next().slideToggle();
    });
  },
  mobileParentActiveAccordion: function(container, tab, content){
    $container = $(container);
    $tab = $(container).find(tab);
    $content = $(container).find(content);

    $(tab + '.active').parent().next().slideToggle();

    $('body').on('click', tab, function(e){
      e.preventDefault();
      $(this).toggleClass('active');
      $(this).parent().next().slideToggle();
    });
  },
  initializeTabs: function(){
    $('ul.tabs > li > a').attr('data-no-instant', true);
    $('body').on('click', 'ul.tabs > li > a', function(e) {
      e.preventDefault();
      var contentLocation = $(this).attr('href');
      if(contentLocation.charAt(0)=="#") {
        $('ul.tabs > li > a.active').removeClass('active');
        $(this).addClass('active');
        $(this).parents('ul.tabs').next().find(contentLocation).show().css({'display': 'block','transition':'0.1s'}).addClass('active').siblings().hide().removeClass('active');
      }
    });
  },
  pageBannerCheck: function(){
    //check for header banner
    if (!$('.page_banner').length > 0 || $('.header').hasClass('header-background--solid')) {
      $('.feature_image').removeClass('feature_image');
      $('.header.is-absolute').removeClass('is-absolute');
      //hide secondary logo
      $('.secondary_logo--true').find('.secondary_logo').hide();
      $('.secondary_logo--true').find('.primary_logo').show();
    } else {
      $('.header').parent().addClass('feature_image');
      $('.header').addClass('is-absolute');
      //check for secondary logo
      if ($('header.feature_image').hasClass('secondary_logo--true')){
        $('.secondary_logo--true').find('.secondary_logo').show();
        $('.secondary_logo--true').find('.primary_logo').hide();
      }
    }

    //check for section that uses header banner on home page
    if ($('.index-sections').children().first().hasClass('under-menu')) {
      if (!$('.header').hasClass('header-background--solid')) {
        $('.index .header').parent().addClass('feature_image');
        $('.index .header').addClass('is-absolute');
      }
      //check for secondary logo
      if ($('header.feature_image').hasClass('secondary_logo--true')){
        $('.secondary_logo--true').find('.secondary_logo').show();
        $('.secondary_logo--true').find('.primary_logo').hide();
      }
    } else {
      $('.index .feature_image').removeClass('feature_image');
      $('.index .header.is-absolute').removeClass('is-absolute');
      //hide secondary logo
      if (!$('header.feature_image').hasClass('secondary_logo--true')){
        $('.secondary_logo--true').find('.secondary_logo').hide();
        $('.secondary_logo--true').find('.primary_logo').show();
      }
    }

    //check for section that uses header banner on the page details template
    if ($('.detail-sections').children().first().hasClass('under-menu')) {
      if (!$('.header').hasClass('header-background--solid')) {
        $('[class^="page-details"] .header').parent().addClass('feature_image');
        $('[class^="page-details"] .header').addClass('is-absolute');
      }

      //check for secondary logo
      if ($('header.feature_image').hasClass('secondary_logo--true')){
        $('.secondary_logo--true').find('.secondary_logo').show();
        $('.secondary_logo--true').find('.primary_logo').hide();
      }
    } else {
      $('[class^="page-details"] .feature_image').removeClass('feature_image');
      $('[class^="page-details"] .header.is-absolute').removeClass('is-absolute');

      //hide secondary logo
      if (!$('header.feature_image').hasClass('secondary_logo--true')){
        $('.secondary_logo--true').find('.secondary_logo').hide();
        $('.secondary_logo--true').find('.primary_logo').show();
      }
    }
  },
  resizeActionButtons: function(){
    $('.js-caption:visible').each(function(){
      var buttonWidth = 0;
      $(this).find('.action_button').each(function(){
        $button = $(this);
        if($(this).width() > buttonWidth){
            buttonWidth = $(this).width();
        }
      });
      $(this).find('.action_button').width(buttonWidth);
    });
  }
}

var sliderBlock = {
  select: function(blockId, $parentSection){
    var $blocks = $parentSection.find('.gallery-cell');
    var blockIdsArray = $blocks.map(function() {
      return String($(this).data('block-id'));
    });
    var $slider = $parentSection.find('.js-homepage-slideshow');
    var settings = {
      slideshowTextAnimation: $slider.data('slideshow-text-animation')
    }
    var flkty = $slider.data('flickity');

    $slider.flickity('pausePlayer');

    for(var i = 0; i < blockIdsArray.length; i++){
      if(blockIdsArray[i] === blockId){
        var currentSlide = i;
        if (currentSlide !== flkty.selectedIndex){
          $slider.flickity( 'select', parseInt(currentSlide), false, true);
        }
      }
    }
  },
  deselect: function($parentSection){
    var $slider = $parentSection.find('.flexslider').data('flexslider');
    if($slider) {
      $slider.flickity('unpausePlayer');
    }
  }
}

//document ready
$(function() {

  var oldFlickityCreate = window.Flickity.prototype._create;

  window.Flickity.prototype._create = function(){
    var that = this;
    if(this.element.addEventListener){
      this.element.addEventListener('load', function(){
        that.onresize();
      }, true);
    }
    this._create = oldFlickityCreate;
    return oldFlickityCreate.apply(this, arguments);
  };

  FastClick.attach(document.body);

  header.init();
  slideshow.init();
  header.loadMegaMenu();
  utils.pageBannerCheck();
//   testimonial.init();
  gallery.init();
  videoSection.init();
  videoFeature.setupVideoPlayer();
  featuredPromotions.init();
  featuredCollectionSection.init();
  collectionSidebarFilter.init();
  cart.init();


  
  productPage.initializeQuantityBox();
  productPage.init();
  productPage.relatedProducts();

//   recentlyViewed.init();

  //Set current slide
  $('body').on('click', '.lightbox', function(){
    currentSlide = $(this).data('image-id');
  });

  //detect when a remodal lightbox is opened
  $('body').on('opened', '.js-remodal-lightbox', function () {

    var $currentLightbox = $(this);
    var $currentLightboxGallery = $currentLightbox.find('.lightbox-gallery');
    var $currentLightboxImages = $currentLightbox.find('.lightbox-image');
    var activate_zoom = $('body').find('.product_gallery').data('zoom');
    var arrowShow = $currentLightboxImages.length === 1 ? false : true;
    var group = $(this).data('rel');
    var draggable = true;

    $currentLightbox.attr('data-zoom', activate_zoom);

    if (activate_zoom && $(window).width() <= 798) {
      draggable = false;
    } else {
      draggable = $currentLightboxImages.length === 1 ? false : true;
    }

    //Add gallery when lightbox opens
    if (!$currentLightboxGallery.hasClass('flickity-enabled')){
      var $lightboxGallery = $currentLightboxGallery.flickity({
        "wrapAround": "true",
        "cellAlign": "left",
        "contain": true,
        "imagesLoaded": true,
        "lazyLoad": 2,
        "pageDots": usePageDots,
        "draggable": draggable,
        "prevNextButtons": arrowShow,
        "selectedAttraction": 0.01,
        "friction": 0.15,
        "arrowShape": arrowSize
      });
    }

    $groupImages = $('.lightbox[rel=' + group + ']');

    var $cellElems;

    $groupImages.each(function(index){
      var imagePath = $(this).attr('href');
      $cellElems = $('<div class="gallery-cell"><img src="'+ imagePath +'" class="lightbox-image"></div>');

      if ($groupImages.length > $currentLightboxGallery.find('.gallery-cell').length){
        $currentLightboxGallery.flickity( 'append', $cellElems );
      }

      $currentLightboxGallery.flickity( 'select', currentSlide, false, true ).focus();
      $currentLightbox.find('.lightbox-image').css('opacity', '1');
    });

    //add zoom to product images
    if (activate_zoom && $(window).width() <= 798) {
      imageFunctions.zoom('.js-remodal-lightbox', true, 1.8);
    }

  });

  $('body').on('closed', '.js-remodal-lightbox', function () {
    var $currentLightbox = $(this);
    $currentLightbox.find('.lightbox-image').css('opacity', '0');
  });

//   

  if(window.location.pathname.indexOf('/comments') != -1) {
    $('html,body').animate({scrollTop: $("#new-comment").offset().top-140},'slow');
  }

  $('body').on('mouseenter', '.icon-search', function() {
    $('.search-terms').focus();
  });

  $('body').on('click', '.search-submit', function() {
    $(this).parent().submit();
  });

  if ($(window).width() > 798) {
    $(".animate_right").waypoint(function() {
      $(this.element).addClass("animated fadeInRight");
    }, { offset: '70%' });
    $(".animate_left").waypoint(function() {
      $(this.element).addClass("animated fadeInLeft");
    }, { offset: '70%' });
    $(".animate_up").waypoint(function() {
      $(this.element).addClass("animated fadeInUp");
    }, { offset: '70%' });
    $(".animate_down").waypoint(function() {
      $(this.element).addClass("animated fadeInDown");
    }, { offset: '70%' });
  }

  //backwards compatibility with flexslider
  $('.slider, .flexslider').find('li').unwrap();
  $('.slider, .flexslider').flickity({
    pageDots: usePageDots,
    imagesLoaded: true,
    lazyLoad: 2
  });

  utils.createAccordion('.toggle-all--true', 'h4.toggle', 'ul.toggle_list');
//   utils.createAccordion('.footer_menu', 'h6', 'ul');
//   utils.createAccordion('.footer_content', 'h6', 'div.toggle_content');
  utils.createAccordion('.product_section .accordion-tabs', '.tabs li > a', '.tabs-content li');

  utils.mobileParentActiveAccordion('#mobile_menu', 'li.sublink > a.parent-link--true span', 'li.sublink ul');
  utils.mobileAccordion('#mobile_menu', 'li.sublink > a.parent-link--false', 'li.sublink ul');

  utils.initializeTabs();
  utils.resizeActionButtons();
  faqAccordion.init();

  $(window).on('resize', function() {
    utils.resizeActionButtons();
  });

  //Sidebar toggle check
  if ($(window).width() <= 798) {
    utils.createAccordion('.toggle-all--false', 'h4.toggle', 'ul.toggle_list');
  }

  $('body').on('click', '.menu-toggle', function(e) {
    var $content = $(this).next('ul');
    $content.slideToggle();
    $(this).toggleClass('active');
    $(this).attr('aria-expanded', $(this).attr('aria-expanded') == 'true' ? 'false' : 'true');
  });

  if ($('.shopify-section.page-details-section').length){
    // Don't apply mediaWrapper
  } else if ($('body').hasClass('index')) {
    $('.featured-products-section iframe[src*=youtube], .featured-products-section iframe[src*=vimeo]').mediaWrapper({
      intrinsic: true
    });
  } else {
    $('iframe[src*=youtube], iframe[src*=vimeo]').mediaWrapper({
      intrinsic: true
    });
  }

  if ($(window).width() >= 959) {
    var modal_width = '870px';
    if($(window).width() >= 1200 || $('html').hasClass('ie')) {
      modal_width = '1110px'
    }
  }

  

  //Terms of service settings for minicart
  

  
      $('body').on('click', ".cart_content .action_button", function(e) {
        // Redirect to cart page
        e.preventDefault();
        var minicart_note = $('.fixed-cart #note').val();
        jQuery.ajax({
          type: 'POST',
          url: '/cart/update.js',
          data:"note="+minicart_note,
          dataType: 'json',
          success: function(cart) {
            console.log(cart)
            document.location.href = "/cart";
          }
        });
        
      });
      $('body').on('click', ".cart_content .checkout-btn", function(e) {
        // Redirect to cart page
        e.preventDefault();
        document.location.href = "/checkout";
      });
    
  
  $('body').on('click','a.button.mb-0.continue_shopping',function(e){
    e.preventDefault();
    var minicart_note = $('.fixed-cart #note').val();
    if($('.fixed-cart #note').val().length>0){
      jQuery.ajax({
        type: 'POST',
        url: '/cart/update.js',
        data:"note="+minicart_note,
        dataType: 'json',
        success: function(cart) {
          $("#mySidebar").css('transform','translateX(100%)');
          $("#myOverlay").fadeOut();
        }
      });
    }
  })

  

  var $contact_form = $('.newsletter .contact-form');
  $contact_form.each(function() {
    var $cf = $(this);
    $cf.on('submit', function (e) {
      if($('input[name="challenge"]', $cf).val() !== "true") {
        $.ajax({
          type: $cf.attr('method'),
          url: $cf.attr('action'),
          data: $cf.serialize(),
          success: function (data) {
            $cf.fadeOut("slow", function(){
              $cf.prev('.message').html("Thank you for joining our mailing list!");
            });
          },
          error: function(data) {
            $('input[name="challenge"]', $cf).val('true');
            $cf.submit();
          }
        });
        e.preventDefault();
      }
    });
  });

  $('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
  });

  

  


  /*============================================================================
    Quick Shop
  ==============================================================================*/

 var globalQuickShopProduct;

  $('body').on('change', '.currencies', function(e) {
      $('[data-initial-modal-price]').attr('data-initial-modal-price', '');
  });

  $('body').on('change', '.js-quick-shop select', function(e) {
    var currentVariant = $('.js-quick-shop select[name="id"]').val();
    if (currentVariant && globalQuickShopProduct){
      quickShop.updateVariant(currentVariant);
    }
  });

  var quickShop = {
    init: function(){
      //Quick-shop variables
      var productData;
      var productForm;
      var notifyForm;

      //EVENT - click on quick-shop
      $('body').on('click', '.js-quick-shop-link', function(e){
        e.preventDefault();

        //split image info into two arrays
        var arr = $(this).data('images').trim('||').split('||');
        var imageIds = [];
        var imageAlts = [];
        for (var i = 0; i < arr.length; i += 2) {
            imageIds.push(arr[i]);
            arr[i+1] && imageAlts.push(arr[i + 1]);
        }

        //Set productData based on data attributes
        productData = {
          handle: $(this).data('handle'),
          product_id: $(this).data('id'),
          product_variant_id: $(this).data('variant-id'),
          single_variant: $(this).attr('data-single-variant'),
          product_in_collection_url: $(this).data('url'),
          escaped_title: $(this).data('title'),
          details_text: $(this).data('details-text'),
          full_description: $(this).data('full-description'),
          regular_description: $(this).data('regular-description'),
          image_ids: imageIds.filter(function(v){return v!==''}),
          image_alts: imageAlts,
          collection_handles: $(this).data('collection-handles').trim(',').split(','),
          money_format: $(this).data('money-format')
        }

        if (!$('.js-gallery-modal').hasClass('flickity-enabled')){
          $('.js-gallery-modal').flickity({
            "wrapAround": "true",
            "cellAlign": "left",
            "contain": true,
            "imagesLoaded": true,
            "lazyLoad": 2,
            "pageDots": usePageDots,
            "prevNextButtons": true,
            "autoPlay": autoplay,
            "selectedAttraction": 0.01,
            "friction": 0.15,
            "arrowShape": arrowSize
          });
        }

        //Find current product and notify forms
        notifyForm = $(this).next('.js-forms').find('.notify_form');
        productForm = $(this).next('.js-forms').find('.product_form');
        //Add Product Ids to parent container so form will work
        $('.quick-shop .container').attr('class', 'container section product-' + productData.product_variant_id);
        $('.quick-shop .container').attr('id', 'product-' + productData.product_variant_id);
        $('.quick-shop .container').attr('data-id', productData.product_variant_id);
        //Function to send attribute data to API
        quickShop.retrieveProductInfo(productData);

      });

      //EVENT - modal is open
      $('body').on('opened', '.js-quick-shop', function () {

        //Copy form data to modal
        $('.remodal.quick-shop .js-product-form').html(productForm);
        $('.remodal.quick-shop .js-notify-form').html(notifyForm);

        //Initiate selectCallback
        if($(productForm).hasClass("product_form_options") && !$(productForm).hasClass("viewed")) {
          new Shopify.OptionSelectors($(productForm).data("select-id"), { product: $(productForm).data("product"), onVariantSelected: selectCallback, enableHistoryState: $(productForm).data("enable-state") });
        } else {
          
        }

        
          var JSONData = $(productForm).data("product");
          var swatchOptions = $(productForm).find('.swatch_options .swatch');
          if (swatchOptions.length > 1){
            Shopify.linkOptionSelectors(JSONData, '.js-quick-shop');
          }
        

        utils.initializeTabs();
        $('.js-quick-shop select[name="id"]').trigger('change');

      });

      //EVENT - modal is closed
      $('body').on('closed', '.js-quick-shop', function (e) {

        var insertedProductForm = $('.js-quick-shop .product_form');
        var insertedNotifyForm = $('.js-quick-shop .notify_form');

        //Copy form data back to product loop and add .viewed
        $('.form-holder-'+ productData.product_variant_id).append(insertedProductForm);
        $('.form-holder-'+ productData.product_variant_id).append(insertedNotifyForm);
        $('.form-holder-'+ productData.product_variant_id +' .product_form').addClass('viewed');
        $('.form-holder-'+ productData.product_variant_id +' .notify_form').addClass('viewed');
        var variantPrice = $('.js-current-price .money').text();
        $('.js-quick-shop-link[data-id=' + productData.product_variant_id + ']').attr('data-initial-modal-price', variantPrice);
        $('.js-current-price, .js-was-price, .js-savings').empty();
      });

    },
    retrieveProductInfo: function(productData){

      $.ajax({
        dataType: "json",
        async: false,
        cache: false,
        url: "/products/" + productData.handle + ".js",
        success: function(product) {
          var product = $.extend({}, product, productData); //Create new object combining info
          quickShop.populateGallery(product);

          globalQuickShopProduct = product;

          quickShop.updateVariant(product.variants[0].id.toString());

        }
      });

    },
    updateVariant: function(variant){

      $('.js-sale-banner, .js-sold-out, .js-current-price, .js-was-price, .js-savings, .js-new-banner, .js-pre-order-banner').empty();

      if (globalQuickShopProduct != 'undefined'){
        var product = globalQuickShopProduct;

        $('.modal_price, .js-notify-form').show();

        //Title and Vendor
        $('.js-product-title').html('<a href="'+ product.product_in_collection_url +'" title="'+ product.escaped_title +'">'+ product.title +'</a>');
        $('.js-product-vendor')
        .html('<a href="/collections/vendors?q=' + product.vendor +'">' + product.vendor + '</a>');

        //Product Description
        $('.js-full-description').html(product.full_description);
        $('.js-regular-description').html(product.regular_description);
        var productDetails = '<a href="'+ product.product_in_collection_url +'" class="secondary_button" title="'+ product.escaped_title +' Details">'+ product.details_text +'</a>';
        $('.js-product-details').html(productDetails);

        //Collection banners
        $.each( product.collection_handles, function( value, index ) {
          if (this.toString() == 'new'){
            $('.js-new-banner').html("New");
          }
          if (this.toString() == 'pre-order'){
            $('.js-pre-order-banner').html("Pre-Order");
          }
          if (this.toString() == 'coming-soon'){
            product.price = "Coming Soon";
          }

        });

        if (product.single_variant == 'true'){

        //No variants
          //Sale Banner
          
            if (product.compare_at_price > product.price){
             $('.js-sale-banner').html("Sale");
            }
          

          //Sale
          if (product.compare_at_price > product.price) {
            $('.js-current-price').addClass('sale');
          } else {
            $('.js-current-price').removeClass('sale');
          }

          //Availability
          if (product.available == false){
            $('.js-sold-out').html("Sold Out");
          }

          //Price
          if (product.available == true) {

            if (product.compare_at_price > product.price) {
              $('.js-was-price').html('<span class="money">' + Shopify.formatMoney(product.compare_at_price, product.money_format)  + '</span>');
              $('.js-savings').html("You Save" + ' ' + parseInt(((product.compare_at_price - product.price) * 100) / product.compare_at_price) + '% (' + '<span class="money">' + Shopify.formatMoney(product.compare_at_price - product.price, product.money_format) + '</span>)');
            }

            if (product.price == "Coming Soon"){
              $('.js-current-price').html("Coming Soon");
            } else if (product.price) {
              $('.js-current-price').html('<span class="money">' + Shopify.formatMoney(product.price, product.money_format) + '</span>');
            } else {
              $('.js-current-price').html('Free');
            }
          }
        } else {
          //Variant loop
          for (var i = 0; i < product.variants.length; i++) {
            if (variant == product.variants[i].id.toString()){
              //Sale Banner
              
                if (product.variants[i].compare_at_price > product.variants[i].price){
                 $('.js-sale-banner').html("Sale");
                }
              

              //Sale
              if (product.variants[i].compare_at_price > product.variants[i].price) {
                $('.js-current-price').addClass('sale');
              } else {
                $('.js-current-price').removeClass('sale');
              }

              //Availability
              if (product.variants[i].available == false){
                $('.js-sold-out').html("Sold Out");
              }

              //Price
              if (product.variants[i].available == true) {

                if (product.variants[i].compare_at_price > product.variants[i].price) {
                  $('.js-was-price').html('<span class="money">' + Shopify.formatMoney(product.variants[i].compare_at_price, product.money_format) + '</span>');
                  $('.js-savings').html("You Save" + ' ' + parseInt(((product.variants[i].compare_at_price - product.variants[i].price) * 100) / product.variants[i].compare_at_price) + '% (' + '<span class="money">' + Shopify.formatMoney(product.variants[i].compare_at_price - product.variants[i].price, product.money_format) + '</span>)');
                }

                if (product.variants[i].price == "Coming Soon"){
                  $('.js-current-price').html("Coming Soon");
                } else if (product.variants[i].price) {
                  $('.js-current-price').html('<span class="money">' + Shopify.formatMoney(product.variants[i].price, product.money_format) + '</span>');
                } else {
                  $('.js-current-price').html('Free');
                }
              }
            }
          }
        }
      }

      

      $('.js-quick-shop iframe[src*=youtube], .js-quick-shop iframe[src*=vimeo]').mediaWrapper({
        intrinsic: true
      });

    },
    populateGallery: function(product){

      //Find gallery and carousel
      var $gallery = $('.js-gallery-modal');
      var $carousel = $('.js-gallery-carousel');

      //EVENT - modal closed
      $(document).on('closed', '.js-quick-shop', function (e) {
        $gallery.flickity( 'remove', $('.js-gallery-modal .gallery-cell') );
        $carousel.empty();
      });

      //Add gallery images based on product info from API
      function addMainGalleryImages(multiImage){

        $.each( product.images, function( i, imgPath ){

          var imgGrande = imgPath.replace(/(\.[^.]*)$/, "_grande$1").replace('http:', '');
          var img1024x1024 = imgPath.replace(/(\.[^.]*)$/, "_1024x1024$1").replace('http:', '');
          var img2048x2048 = imgPath.replace(/(\.[^.]*)$/, "_2048x2048$1").replace('http:', '');
          var alt = product.image_alts[i];
          var cellContent;

          if (alt.indexOf("youtube") >= 0){
            cellContent = '<div class="video-container youtube"><div>' + alt + '</div></div>';
          } else if (alt.indexOf("vimeo") >= 0) {
            cellContent = '<div class="video-container vimeo"><div>' + alt + '</div></div>';
          } else {
            cellContent = '<img src="'+ imgGrande + '" data-src="' + img1024x1024 + '" alt="' + alt + '" data-image-id="' + product.image_ids[i].trim() + '" data-index="' + i + '" srcset="' + imgGrande + ' 600w, ' + img1024x1024 + ' 1024w, ' + img2048x2048 + ' 2048w" sizes="(min-width: 800px) 50vw, 100vw"/>';
          }

          var $cellElems = $('<div class="gallery-cell">'+ cellContent +'</div>');
          $gallery.flickity( 'append', $cellElems );
        });

        $gallery.removeClass('single-image multi-image').addClass(multiImage ? 'multi-image' : 'single-image');

      }

      //Add carousel images based on product info from API
      function addCarouselGalleryImages(){
        $.each( product.images, function( i, imgPath ){
          var carouselSizedImg = imgPath.replace(/(\.[^.]*)$/, "_grande$1").replace('http:', '');

          var img = '<img src="'+ carouselSizedImg + '" alt="' + product.image_alts[i] + '" />';
          var $carouselCellElems = $('<div class="gallery-cell">'+ img +'</div>');
          $carousel.append($carouselCellElems);
        });

        imageFunctions.linkGalleryAndCarousel($gallery, $carousel);

      }

      //Check how many images are returned from API - addMainGalleryImages() takes true or false based on whether gallery slider is multi-image (shows prev/next arrows)
      var multiImage;

      if(product.images.length > 1){
        multiImage = true;
        addMainGalleryImages(multiImage);
        addCarouselGalleryImages();
      } else {
        multiImage = false;
        addMainGalleryImages(multiImage);
      }

      imageFunctions.zoom('.js-gallery-modal', false);

    }
  }

  
    quickShop.init();
  

  /*============================================================================
    Start of cart-related functionality
  ==============================================================================*/


                $('body').on("change", "#cart_form input.quantity", function() {
                  ajaxUpdateCart($(this).data('line-id'), $(this).val(), $(this).parents('#cart_form'));
                });

                $('body').on("change", ".cart_content input.quantity", function() {
                  ajaxUpdateCart($(this).data('line-id'), $(this).val(), $(this).parents('.cart_content'));
                });

                if(is_home == 'cart')
                { 
                  $('body').on("click", "a.remove", function() {
                    ajaxUpdateCart($(this).data('line-id'), $(this).data('qty'), $(this).parents('#cart_form'));
                  });
                }
                else
                {
                  $('body').on("click", "a.item-delete", function() {
                    ajaxUpdateCart($(this).data('line-id'), $(this).data('qty'), $(this).parents('.cart_content'));
                  });
                }

  
    $('body').on('submit', ".product_form", function(e) {
      e.preventDefault();
      var $addToCartForm = $(this);
      var $addToCartBtn = $addToCartForm.find('.add_to_cart');
    
      $.ajax({
        url: '/cart/add.js',
        dataType: 'json',
        cache: false,
        type: 'post',
        data: $addToCartForm.serialize(),
            
        beforeSend: function() {
          $addToCartBtn.attr('disabled', 'disabled').addClass('disabled');
          $addToCartBtn.find('span').removeClass("fadeInDown").addClass('animated zoomOut');
        },
        success: function(itemData) {
          $addToCartBtn.find('.checkmark').addClass('checkmark-active');
          window.setTimeout(function(){
            $addToCartBtn.removeAttr('disabled').removeClass('disabled');
            $addToCartBtn.find('.checkmark').removeClass('checkmark-active');
            $addToCartBtn.find('span').removeClass('zoomOut').addClass('fadeInDown');
          }, 1000);
          $.ajax({
            url: '/cart.js',
            dataType: "json",
            cache: false,
            success: function(cart) {
              refreshCart(cart);              
              if($('html').hasClass("remodal-is-locked")) {
                $('.remodal-close').click();
              }

              if($('#header').is(':visible')) {
//                 $('#header .cart_container').addClass('active_link');
                $(".cart_container .cart_content").show();
                $("#mySidebar").css('transform','translateX(0px)');
                $("#myOverlay").fadeIn(); 
              } else if ($('.sticky_nav--stick').length) {
//                 $('.sticky_nav .cart_container').addClass('active_link');
                $(".cart_container .cart_content").show();
                $("#mySidebar").css('transform','translateX(0px)');
                $("#myOverlay").fadeIn(); 
              } else {
//                 $('.top_bar .cart_container').addClass('active_link');
                $(".cart_container .cart_content").show();
                $("#mySidebar").css('transform','translateX(0px)');
                $("#myOverlay").fadeIn(); 
              }
            }
        
          });
          
//               GetFlyer_product();
        },
        error: function(XMLHttpRequest) {
          var response = eval('(' + XMLHttpRequest.responseText + ')');
          response = response.description;
          $('.warning').remove();

          var warning = '<p class="warning animated bounceIn">' + response.replace('All 1 ', 'All ') + '</p>';
          $addToCartForm.after(warning);
          $addToCartBtn.removeAttr('disabled').removeClass('disabled');
          $addToCartBtn.find('span').text("Add to Cart").removeClass('zoomOut').addClass('zoomIn');
        }
      });

      return false;
    });
  

  //Swatches linked with selected options
  
    if ($('.js-product_section').length){
      var $productForms = $('.js-product_section').find('.product_form');
      $productForms.addClass('is-visible');

      //Loop through each product and set the initial option value state
      $productForms.each(function(){
        var JSONData = $(this).data('product');
        var productID = $(this).data('product-id');
        var productSection = '.product-' + productID + ' .js-product_section';
        var swatchOptions = $(this).find('.swatch_options .swatch');
        if (swatchOptions.length > 1){
          Shopify.linkOptionSelectors(JSONData, productSection);
        }
      });
    }

    //Add click event when there is more than one product on the page (eg. Collection in Detail)
    if ($('.js-product_section').length > 1){
      $('body').on('click', '.swatch-element', function(){
        var swatchValue = $(this).data('value');

        $(this)
        .siblings('input[value="'+ swatchValue.replace(/\"/g,'\\"') +'"]')
        .prop("checked", true)
        .trigger("change");

        var JSONData = $(this).parents('.product_form').data('product');
        var productID = $(this).parents('.product_form').data('product-id');
        var productSection = '.product-' + productID + ' .js-product_section';
        var swatchOptions = $(this).parents('.product_form').find('.swatch_options .swatch');
        if (swatchOptions.length > 1){
          Shopify.linkOptionSelectors(JSONData, productSection);
        }
      })
    }
  

});

/*============================================================================
  Swatch options - second and third swatch 'sold-out' will update based on availability of previous options selected
==============================================================================*/

Shopify.updateOptionsInSelector = function(selectorIndex, parent) {

  switch (selectorIndex) {
    case 0:
      var key = 'root';
      var selector = $(parent + ' .single-option-selector:eq(0)');
      break;
    case 1:
      var key = $(parent + ' .single-option-selector:eq(0)').val();
      var selector = $(parent + ' .single-option-selector:eq(1)');
      break;
    case 2:
      var key = $(parent + ' .single-option-selector:eq(0)').val();
      key += ' / ' + $(parent + ' .single-option-selector:eq(1)').val();
      var selector = $(parent + ' .single-option-selector:eq(2)');
  }

  var availableOptions = Shopify.optionsMap[key];

  $(parent + ' .swatch[data-option-index="' + selectorIndex + '"] .swatch-element').each(function() {
    if ($.inArray($(this).attr('data-value'), availableOptions) !== -1) {
      $(this).removeClass('soldout').find(':radio').removeAttr('disabled','disabled').removeAttr('checked');
    }
    else {
      $(this).addClass('soldout').find(':radio').removeAttr('checked').attr('disabled','disabled');
    }
  });
  selector.trigger('change');

};

Shopify.linkOptionSelectors = function(product, parent) {
    // Building our mapping object.
    Shopify.optionsMap = {};
    for (var i=0; i<product.variants.length; i++) {
      var variant = product.variants[i];
      if (variant.available) {
        // Gathering values for the 1st drop-down.
        Shopify.optionsMap['root'] = Shopify.optionsMap['root'] || [];
        Shopify.optionsMap['root'].push(variant.option1);
        Shopify.optionsMap['root'] = Shopify.uniq(Shopify.optionsMap['root']);
        // Gathering values for the 2nd drop-down.
        if (product.options.length > 1) {
          var key = variant.option1;
          Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
          Shopify.optionsMap[key].push(variant.option2);
          Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
        }
        // Gathering values for the 3rd drop-down.
        if (product.options.length === 3) {
          var key = variant.option1 + ' / ' + variant.option2;
          Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
          Shopify.optionsMap[key].push(variant.option3);
          Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
        }
      }
    }
    // Update options right away.
    Shopify.updateOptionsInSelector(0, parent);
    if (product.options.length > 1) Shopify.updateOptionsInSelector(1, parent);
    if (product.options.length === 3) Shopify.updateOptionsInSelector(2, parent);
    // When there is an update in the first dropdown.
    $(parent + " .single-option-selector:eq(0)").change(function() {
      Shopify.updateOptionsInSelector(1, parent);
      if (product.options.length === 3) Shopify.updateOptionsInSelector(2, parent);
      return true;
    });
    // When there is an update in the second dropdown.
    $(parent + " .single-option-selector:eq(1)").change(function() {
      if (product.options.length === 3) Shopify.updateOptionsInSelector(2, parent);
      return true;
    });
};

//Used for cart functionality
function htmlEncode(value){
    if (value) {
        return $('<div/>').text(value).html();
    } else {
        return '';
    }
}

//Check if device is touch-enabled
function is_touch_device() {
  return 'ontouchstart' in window || navigator.maxTouchPoints;
};

/* option_selection.js */
function floatToString(t,e){var o=t.toFixed(e).toString();return o.match(/^\.\d+/)?"0"+o:o}if("undefined"==typeof Shopify)var Shopify={};Shopify.each=function(t,e){for(var o=0;o<t.length;o++)e(t[o],o)},Shopify.map=function(t,e){for(var o=[],i=0;i<t.length;i++)o.push(e(t[i],i));return o},Shopify.arrayIncludes=function(t,e){for(var o=0;o<t.length;o++)if(t[o]==e)return!0;return!1},Shopify.uniq=function(t){for(var e=[],o=0;o<t.length;o++)Shopify.arrayIncludes(e,t[o])||e.push(t[o]);return e},Shopify.isDefined=function(t){return"undefined"==typeof t?!1:!0},Shopify.getClass=function(t){return Object.prototype.toString.call(t).slice(8,-1)},Shopify.extend=function(t,e){function o(){}o.prototype=e.prototype,t.prototype=new o,t.prototype.constructor=t,t.baseConstructor=e,t.superClass=e.prototype},Shopify.locationSearch=function(){return window.location.search},Shopify.locationHash=function(){return window.location.hash},Shopify.replaceState=function(t){window.history.replaceState({},document.title,t)},Shopify.urlParam=function(t){var e=RegExp("[?&]"+t+"=([^&#]*)").exec(Shopify.locationSearch());return e&&decodeURIComponent(e[1].replace(/\+/g," "))},Shopify.newState=function(t,e){var o;return o=Shopify.urlParam(t)?Shopify.locationSearch().replace(RegExp("("+t+"=)[^&#]+"),"$1"+e):""===Shopify.locationSearch()?"?"+t+"="+e:Shopify.locationSearch()+"&"+t+"="+e,o+Shopify.locationHash()},Shopify.setParam=function(t,e){Shopify.replaceState(Shopify.newState(t,e))},Shopify.Product=function(t){Shopify.isDefined(t)&&this.update(t)},Shopify.Product.prototype.update=function(t){for(property in t)this[property]=t[property]},Shopify.Product.prototype.optionNames=function(){return"Array"==Shopify.getClass(this.options)?this.options:[]},Shopify.Product.prototype.optionValues=function(t){if(!Shopify.isDefined(this.variants))return null;var e=Shopify.map(this.variants,function(e){var o="option"+(t+1);return void 0==e[o]?null:e[o]});return null==e[0]?null:Shopify.uniq(e)},Shopify.Product.prototype.getVariant=function(t){var e=null;return t.length!=this.options.length?e:(Shopify.each(this.variants,function(o){for(var i=!0,r=0;r<t.length;r++){var n="option"+(r+1);o[n]!=t[r]&&(i=!1)}return 1==i?void(e=o):void 0}),e)},Shopify.Product.prototype.getVariantById=function(t){for(var e=0;e<this.variants.length;e++){var o=this.variants[e];if(t==o.id)return o}return null},Shopify.money_format="$",Shopify.formatMoney=function(t,e){function o(t,e){return"undefined"==typeof t?e:t}function i(t,e,i,r){if(e=o(e,2),i=o(i,","),r=o(r,"."),isNaN(t)||null==t)return 0;t=(t/100).toFixed(e);var n=t.split("."),a=n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+i),s=n[1]?r+n[1]:"";return a+s}"string"==typeof t&&(t=t.replace(".",""));var r="",n=/\{\{\s*(\w+)\s*\}\}/,a=e||this.money_format;switch(a.match(n)[1]){case"amount":r=i(t,2);break;case"amount_no_decimals":r=i(t,0);break;case"amount_with_comma_separator":r=i(t,2,".",",");break;case"amount_no_decimals_with_comma_separator":r=i(t,0,".",",")}return a.replace(n,r)},Shopify.OptionSelectors=function(t,e){return this.selectorDivClass="selector-wrapper",this.selectorClass="single-option-selector",this.variantIdFieldIdSuffix="-variant-id",this.variantIdField=null,this.historyState=null,this.selectors=[],this.domIdPrefix=t,this.product=new Shopify.Product(e.product),this.onVariantSelected=Shopify.isDefined(e.onVariantSelected)?e.onVariantSelected:function(){},this.replaceSelector(t),this.initDropdown(),e.enableHistoryState&&(this.historyState=new Shopify.OptionSelectors.HistoryState(this)),!0},Shopify.OptionSelectors.prototype.initDropdown=function(){var t={initialLoad:!0},e=this.selectVariantFromDropdown(t);if(!e){var o=this;setTimeout(function(){o.selectVariantFromParams(t)||o.fireOnChangeForFirstDropdown.call(o,t)})}},Shopify.OptionSelectors.prototype.fireOnChangeForFirstDropdown=function(t){this.selectors[0].element.onchange(t)},Shopify.OptionSelectors.prototype.selectVariantFromParamsOrDropdown=function(t){var e=this.selectVariantFromParams(t);e||this.selectVariantFromDropdown(t)},Shopify.OptionSelectors.prototype.replaceSelector=function(t){var e=document.getElementById(t),o=e.parentNode;Shopify.each(this.buildSelectors(),function(t){o.insertBefore(t,e)}),e.style.display="none",this.variantIdField=e},Shopify.OptionSelectors.prototype.selectVariantFromDropdown=function(t){var e=document.getElementById(this.domIdPrefix).querySelector("[selected]");if(e||(e=document.getElementById(this.domIdPrefix).querySelector('[selected="selected"]')),!e)return!1;var o=e.value;return this.selectVariant(o,t)},Shopify.OptionSelectors.prototype.selectVariantFromParams=function(t){var e=Shopify.urlParam("variant");return this.selectVariant(e,t)},Shopify.OptionSelectors.prototype.selectVariant=function(t,e){var o=this.product.getVariantById(t);if(null==o)return!1;for(var i=0;i<this.selectors.length;i++){var r=this.selectors[i].element,n=r.getAttribute("data-option"),a=o[n];null!=a&&this.optionExistInSelect(r,a)&&(r.value=a)}return"undefined"!=typeof jQuery?jQuery(this.selectors[0].element).trigger("change",e):this.selectors[0].element.onchange(e),!0},Shopify.OptionSelectors.prototype.optionExistInSelect=function(t,e){for(var o=0;o<t.options.length;o++)if(t.options[o].value==e)return!0},Shopify.OptionSelectors.prototype.insertSelectors=function(t,e){Shopify.isDefined(e)&&this.setMessageElement(e),this.domIdPrefix="product-"+this.product.id+"-variant-selector";var o=document.getElementById(t);Shopify.each(this.buildSelectors(),function(t){o.appendChild(t)})},Shopify.OptionSelectors.prototype.buildSelectors=function(){for(var t=0;t<this.product.optionNames().length;t++){var e=new Shopify.SingleOptionSelector(this,t,this.product.optionNames()[t],this.product.optionValues(t));e.element.disabled=!1,this.selectors.push(e)}var o=this.selectorDivClass,i=this.product.optionNames(),r=Shopify.map(this.selectors,function(t){var e=document.createElement("div");if(e.setAttribute("class",o),i.length>1){var r=document.createElement("label");r.htmlFor=t.element.id,r.innerHTML=t.name,e.appendChild(r)}return e.appendChild(t.element),e});return r},Shopify.OptionSelectors.prototype.selectedValues=function(){for(var t=[],e=0;e<this.selectors.length;e++){var o=this.selectors[e].element.value;t.push(o)}return t},Shopify.OptionSelectors.prototype.updateSelectors=function(t,e){var o=this.selectedValues(),i=this.product.getVariant(o);i?(this.variantIdField.disabled=!1,this.variantIdField.value=i.id):this.variantIdField.disabled=!0,this.onVariantSelected(i,this,e),null!=this.historyState&&this.historyState.onVariantChange(i,this,e)},Shopify.OptionSelectorsFromDOM=function(t,e){var o=e.optionNames||[],i=e.priceFieldExists||!0,r=e.delimiter||"/",n=this.createProductFromSelector(t,o,i,r);e.product=n,Shopify.OptionSelectorsFromDOM.baseConstructor.call(this,t,e)},Shopify.extend(Shopify.OptionSelectorsFromDOM,Shopify.OptionSelectors),Shopify.OptionSelectorsFromDOM.prototype.createProductFromSelector=function(t,e,o,i){if(!Shopify.isDefined(o))var o=!0;if(!Shopify.isDefined(i))var i="/";var r=document.getElementById(t),n=r.childNodes,a=(r.parentNode,e.length),s=[];Shopify.each(n,function(t,r){if(1==t.nodeType&&"option"==t.tagName.toLowerCase()){var n=t.innerHTML.split(new RegExp("\\s*\\"+i+"\\s*"));0==e.length&&(a=n.length-(o?1:0));var p=n.slice(0,a),l=o?n[a]:"",c=(t.getAttribute("value"),{available:t.disabled?!1:!0,id:parseFloat(t.value),price:l,option1:p[0],option2:p[1],option3:p[2]});s.push(c)}});var p={variants:s};if(0==e.length){p.options=[];for(var l=0;a>l;l++)p.options[l]="option "+(l+1)}else p.options=e;return p},Shopify.SingleOptionSelector=function(t,e,o,i){this.multiSelector=t,this.values=i,this.index=e,this.name=o,this.element=document.createElement("select");for(var r=0;r<i.length;r++){var n=document.createElement("option");n.value=i[r],n.innerHTML=i[r],this.element.appendChild(n)}return this.element.setAttribute("class",this.multiSelector.selectorClass),this.element.setAttribute("data-option","option"+(e+1)),this.element.id=t.domIdPrefix+"-option-"+e,this.element.onchange=function(o,i){i=i||{},t.updateSelectors(e,i)},!0},Shopify.Image={preload:function(t,e){for(var o=0;o<t.length;o++){var i=t[o];this.loadImage(this.getSizedImageUrl(i,e))}},loadImage:function(t){(new Image).src=t},switchImage:function(t,e,o){if(t&&e){var i=this.imageSize(e.src),r=this.getSizedImageUrl(t.src,i);o?o(r,t,e):e.src=r}},imageSize:function(t){var e=t.match(/_(1024x1024|2048x2048|pico|icon|thumb|small|compact|medium|large|grande)\./);return null!=e?e[1]:null},getSizedImageUrl:function(t,e){if(null==e)return t;if("master"==e)return this.removeProtocol(t);var o=t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);if(null!=o){var i=t.split(o[0]),r=o[0];return this.removeProtocol(i[0]+"_"+e+r)}return null},removeProtocol:function(t){return t.replace(/http(s)?:/,"")}},Shopify.OptionSelectors.HistoryState=function(t){this.browserSupports()&&this.register(t)},Shopify.OptionSelectors.HistoryState.prototype.register=function(t){window.addEventListener("popstate",function(e){t.selectVariantFromParamsOrDropdown({popStateCall:!0})})},Shopify.OptionSelectors.HistoryState.prototype.onVariantChange=function(t,e,o){this.browserSupports()&&(!t||o.initialLoad||o.popStateCall||Shopify.setParam("variant",t.id))},Shopify.OptionSelectors.HistoryState.prototype.browserSupports=function(){return window.history&&window.history.replaceState};

!function(){"use strict";function t(e,o){function i(t,e){return function(){return t.apply(e,arguments)}}var r;if(o=o||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=o.touchBoundary||10,this.layer=e,this.tapDelay=o.tapDelay||200,this.tapTimeout=o.tapTimeout||700,!t.notNeeded(e)){for(var a=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],c=this,s=0,u=a.length;u>s;s++)c[a[s]]=i(c[a[s]],c);n&&(e.addEventListener("mouseover",this.onMouse,!0),e.addEventListener("mousedown",this.onMouse,!0),e.addEventListener("mouseup",this.onMouse,!0)),e.addEventListener("click",this.onClick,!0),e.addEventListener("touchstart",this.onTouchStart,!1),e.addEventListener("touchmove",this.onTouchMove,!1),e.addEventListener("touchend",this.onTouchEnd,!1),e.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(e.removeEventListener=function(t,n,o){var i=Node.prototype.removeEventListener;"click"===t?i.call(e,t,n.hijacked||n,o):i.call(e,t,n,o)},e.addEventListener=function(t,n,o){var i=Node.prototype.addEventListener;"click"===t?i.call(e,t,n.hijacked||(n.hijacked=function(t){t.propagationStopped||n(t)}),o):i.call(e,t,n,o)}),"function"==typeof e.onclick&&(r=e.onclick,e.addEventListener("click",function(t){r(t)},!1),e.onclick=null)}}var e=navigator.userAgent.indexOf("Windows Phone")>=0,n=navigator.userAgent.indexOf("Android")>0&&!e,o=/iP(ad|hone|od)/.test(navigator.userAgent)&&!e,i=o&&/OS 4_\d(_\d)?/.test(navigator.userAgent),r=o&&/OS [6-7]_\d/.test(navigator.userAgent),a=navigator.userAgent.indexOf("BB10")>0;t.prototype.needsClick=function(t){switch(t.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(t.disabled)return!0;break;case"input":if(o&&"file"===t.type||t.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(t.className)},t.prototype.needsFocus=function(t){switch(t.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!n;case"input":switch(t.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!t.disabled&&!t.readOnly;default:return/\bneedsfocus\b/.test(t.className)}},t.prototype.sendClick=function(t,e){var n,o;document.activeElement&&document.activeElement!==t&&document.activeElement.blur(),o=e.changedTouches[0],n=document.createEvent("MouseEvents"),n.initMouseEvent(this.determineEventType(t),!0,!0,window,1,o.screenX,o.screenY,o.clientX,o.clientY,!1,!1,!1,!1,0,null),n.forwardedTouchEvent=!0,t.dispatchEvent(n)},t.prototype.determineEventType=function(t){return n&&"select"===t.tagName.toLowerCase()?"mousedown":"click"},t.prototype.focus=function(t){var e;o&&t.setSelectionRange&&0!==t.type.indexOf("date")&&"time"!==t.type&&"month"!==t.type?(e=t.value.length,t.setSelectionRange(e,e)):t.focus()},t.prototype.updateScrollParent=function(t){var e,n;if(e=t.fastClickScrollParent,!e||!e.contains(t)){n=t;do{if(n.scrollHeight>n.offsetHeight){e=n,t.fastClickScrollParent=n;break}n=n.parentElement}while(n)}e&&(e.fastClickLastScrollTop=e.scrollTop)},t.prototype.getTargetElementFromEventTarget=function(t){return t.nodeType===Node.TEXT_NODE?t.parentNode:t},t.prototype.onTouchStart=function(t){var e,n,r;if(t.targetTouches.length>1)return!0;if(e=this.getTargetElementFromEventTarget(t.target),n=t.targetTouches[0],o){if(r=window.getSelection(),r.rangeCount&&!r.isCollapsed)return!0;if(!i){if(n.identifier&&n.identifier===this.lastTouchIdentifier)return t.preventDefault(),!1;this.lastTouchIdentifier=n.identifier,this.updateScrollParent(e)}}return this.trackingClick=!0,this.trackingClickStart=t.timeStamp,this.targetElement=e,this.touchStartX=n.pageX,this.touchStartY=n.pageY,t.timeStamp-this.lastClickTime<this.tapDelay&&t.preventDefault(),!0},t.prototype.touchHasMoved=function(t){var e=t.changedTouches[0],n=this.touchBoundary;return Math.abs(e.pageX-this.touchStartX)>n||Math.abs(e.pageY-this.touchStartY)>n?!0:!1},t.prototype.onTouchMove=function(t){return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(t.target)||this.touchHasMoved(t))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},t.prototype.findControl=function(t){return void 0!==t.control?t.control:t.htmlFor?document.getElementById(t.htmlFor):t.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},t.prototype.onTouchEnd=function(t){var e,a,c,s,u,l=this.targetElement;if(!this.trackingClick)return!0;if(t.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(t.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=t.timeStamp,a=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,r&&(u=t.changedTouches[0],l=document.elementFromPoint(u.pageX-window.pageXOffset,u.pageY-window.pageYOffset)||l,l.fastClickScrollParent=this.targetElement.fastClickScrollParent),c=l.tagName.toLowerCase(),"label"===c){if(e=this.findControl(l)){if(this.focus(l),n)return!1;l=e}}else if(this.needsFocus(l))return t.timeStamp-a>100||o&&window.top!==window&&"input"===c?(this.targetElement=null,!1):(this.focus(l),this.sendClick(l,t),o&&"select"===c||(this.targetElement=null,t.preventDefault()),!1);return o&&!i&&(s=l.fastClickScrollParent,s&&s.fastClickLastScrollTop!==s.scrollTop)?!0:(this.needsClick(l)||(t.preventDefault(),this.sendClick(l,t)),!1)},t.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},t.prototype.onMouse=function(t){return this.targetElement?t.forwardedTouchEvent?!0:t.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(t.stopImmediatePropagation?t.stopImmediatePropagation():t.propagationStopped=!0,t.stopPropagation(),t.preventDefault(),!1):!0:!0},t.prototype.onClick=function(t){var e;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===t.target.type&&0===t.detail?!0:(e=this.onMouse(t),e||(this.targetElement=null),e)},t.prototype.destroy=function(){var t=this.layer;n&&(t.removeEventListener("mouseover",this.onMouse,!0),t.removeEventListener("mousedown",this.onMouse,!0),t.removeEventListener("mouseup",this.onMouse,!0)),t.removeEventListener("click",this.onClick,!0),t.removeEventListener("touchstart",this.onTouchStart,!1),t.removeEventListener("touchmove",this.onTouchMove,!1),t.removeEventListener("touchend",this.onTouchEnd,!1),t.removeEventListener("touchcancel",this.onTouchCancel,!1)},t.notNeeded=function(t){var e,o,i,r;if("undefined"==typeof window.ontouchstart)return!0;if(o=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!n)return!0;if(e=document.querySelector("meta[name=viewport]")){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(o>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(a&&(i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),i[1]>=10&&i[2]>=3&&(e=document.querySelector("meta[name=viewport]")))){if(-1!==e.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===t.style.msTouchAction||"manipulation"===t.style.touchAction?!0:(r=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],r>=27&&(e=document.querySelector("meta[name=viewport]"),e&&(-1!==e.content.indexOf("user-scalable=no")||document.documentElement.scrollWidth<=window.outerWidth))?!0:"none"===t.style.touchAction||"manipulation"===t.style.touchAction?!0:!1)},t.attach=function(e,n){return new t(e,n)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return t}):"undefined"!=typeof module&&module.exports?(module.exports=t.attach,module.exports.FastClick=t):window.FastClick=t}();

/*
 * jQuery offscreen plugin
 *
 * Copyright Cory LaViska for A Beautiful Site, LLC
 *
 * @license: http://opensource.org/licenses/MIT
 *
 */
(function($) {
  $.extend($.expr[':'], {
    'off-top': function(el) {
      return $(el).offset().top < $(window).scrollTop();
    },
    'off-right': function(el) {
      return $(el).offset().left + $(el).outerWidth() - $(window).scrollLeft() > $(window).width();
    },
    'off-bottom': function(el) {
      return $(el).offset().top + $(el).outerHeight() - $(window).scrollTop() > $(window).height();
    },
    'off-left': function(el) {
      return $(el).offset().left < $(window).scrollLeft();
    },
    'off-screen': function(el) {
      return $(el).is(':off-top, :off-right, :off-bottom, :off-left');
    }
  });
})(jQuery);

/*!
  Zoom 1.7.15
  license: MIT
  http://www.jacklmoore.com/zoom
*/
(function($){var defaults={url:false,callback:false,target:false,duration:120,on:"mouseover",touch:true,onZoomIn:false,onZoomOut:false,magnify:1};$.zoom=function(target,source,img,magnify){var targetHeight,targetWidth,sourceHeight,sourceWidth,xRatio,yRatio,offset,$target=$(target),position=$target.css("position"),$source=$(source);$target.css("position",/(absolute|fixed)/.test(position)?position:"relative");$target.css("overflow","hidden");img.style.width=img.style.height="";$(img).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:img.width*magnify,height:img.height*magnify,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(target);return{init:function(){targetWidth=$target.outerWidth();targetHeight=$target.outerHeight();if(source===$target[0]){sourceWidth=targetWidth;sourceHeight=targetHeight}else{sourceWidth=$source.outerWidth();sourceHeight=$source.outerHeight()}xRatio=(img.width-targetWidth)/sourceWidth;yRatio=(img.height-targetHeight)/sourceHeight;offset=$source.offset()},move:function(e){var left=e.pageX-offset.left,top=e.pageY-offset.top;top=Math.max(Math.min(top,sourceHeight),0);left=Math.max(Math.min(left,sourceWidth),0);img.style.left=left*-xRatio+"px";img.style.top=top*-yRatio+"px"}}};$.fn.zoom=function(options){return this.each(function(){var settings=$.extend({},defaults,options||{}),target=settings.target||this,source=this,$source=$(source),$target=$(target),img=document.createElement("img"),$img=$(img),mousemove="mousemove.zoom",clicked=false,touched=false,$urlElement;if(!settings.url){$urlElement=$source.find("img");if($urlElement[0]){settings.url=$urlElement.data("src")||$urlElement.attr("src")}if(!settings.url){return}}(function(){var position=$target.css("position");var overflow=$target.css("overflow");$source.one("zoom.destroy",function(){$source.off(".zoom");$target.css("position",position);$target.css("overflow",overflow);$img.remove()})})();img.onload=function(){var zoom=$.zoom(target,source,img,settings.magnify);function start(e){zoom.init();zoom.move(e);$img.stop().fadeTo($.support.opacity?settings.duration:0,1,$.isFunction(settings.onZoomIn)?settings.onZoomIn.call(img):false)}function stop(){$img.stop().fadeTo(settings.duration,0,$.isFunction(settings.onZoomOut)?settings.onZoomOut.call(img):false)}if(settings.on==="grab"){$source.on("mousedown.zoom",function(e){if(e.which===1){$(document).one("mouseup.zoom",function(){stop();$(document).off(mousemove,zoom.move)});start(e);$(document).on(mousemove,zoom.move);e.preventDefault()}})}else if(settings.on==="click"){$source.on("click.zoom",function(e){if(clicked){return}else{clicked=true;start(e);$(document).on(mousemove,zoom.move);$(document).one("click.zoom",function(){stop();clicked=false;$(document).off(mousemove,zoom.move)});return false}})}else if(settings.on==="toggle"){$source.on("click.zoom",function(e){if(clicked){stop()}else{start(e)}clicked=!clicked})}else if(settings.on==="mouseover"){zoom.init();$source.on("mouseenter.zoom",start).on("mouseleave.zoom",stop).on(mousemove,zoom.move)}if(settings.touch){$source.on("touchstart.zoom",function(e){e.preventDefault();if(touched){touched=false;stop()}else{touched=true;start(e.originalEvent.touches[0]||e.originalEvent.changedTouches[0])}}).on("touchmove.zoom",function(e){e.preventDefault();zoom.move(e.originalEvent.touches[0]||e.originalEvent.changedTouches[0])}).on("touchend.zoom",function(e){e.preventDefault();if(touched){touched=false;stop()}})}if($.isFunction(settings.callback)){settings.callback.call(img)}};img.src=settings.url})};$.fn.zoom.defaults=defaults})(window.jQuery);

/*
 *  Remodal - v1.1.0
 *  Responsive, lightweight, fast, synchronized with CSS animations, fully customizable modal window plugin with declarative configuration and hash tracking.
 *  http://vodkabears.github.io/remodal/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */

!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],function(c){return b(a,c)}):"object"==typeof exports?b(a,require("jquery")):b(a,a.jQuery||a.Zepto)}(this,function(a,b){"use strict";function c(a){if(w&&"none"===a.css("animation-name")&&"none"===a.css("-webkit-animation-name")&&"none"===a.css("-moz-animation-name")&&"none"===a.css("-o-animation-name")&&"none"===a.css("-ms-animation-name"))return 0;var b,c,d,e,f=a.css("animation-duration")||a.css("-webkit-animation-duration")||a.css("-moz-animation-duration")||a.css("-o-animation-duration")||a.css("-ms-animation-duration")||"0s",g=a.css("animation-delay")||a.css("-webkit-animation-delay")||a.css("-moz-animation-delay")||a.css("-o-animation-delay")||a.css("-ms-animation-delay")||"0s",h=a.css("animation-iteration-count")||a.css("-webkit-animation-iteration-count")||a.css("-moz-animation-iteration-count")||a.css("-o-animation-iteration-count")||a.css("-ms-animation-iteration-count")||"1";for(f=f.split(", "),g=g.split(", "),h=h.split(", "),e=0,c=f.length,b=Number.NEGATIVE_INFINITY;e<c;e++)d=parseFloat(f[e])*parseInt(h[e],10)+parseFloat(g[e]),d>b&&(b=d);return b}function d(){if(b(document.body).height()<=b(window).height())return 0;var a,c,d=document.createElement("div"),e=document.createElement("div");return d.style.visibility="hidden",d.style.width="100px",document.body.appendChild(d),a=d.offsetWidth,d.style.overflow="scroll",e.style.width="100%",d.appendChild(e),c=e.offsetWidth,d.parentNode.removeChild(d),a-c}function e(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)||(c=b(document.body),a=parseInt(c.css("padding-right"),10)+d(),c.css("padding-right",a+"px"),e.addClass(f))}}function f(){if(!x){var a,c,e=b("html"),f=k("is-locked");e.hasClass(f)&&(c=b(document.body),a=parseInt(c.css("padding-right"),10)-d(),c.css("padding-right",a+"px"),e.removeClass(f))}}function g(a,b,c,d){var e=k("is",b),f=[k("is",u.CLOSING),k("is",u.OPENING),k("is",u.CLOSED),k("is",u.OPENED)].join(" ");a.$bg.removeClass(f).addClass(e),a.$overlay.removeClass(f).addClass(e),a.$wrapper.removeClass(f).addClass(e),a.$modal.removeClass(f).addClass(e),a.state=b,!c&&a.$modal.trigger({type:b,reason:d},[{reason:d}])}function h(a,d,e){var f=0,g=function(a){a.target===this&&f++},h=function(a){a.target===this&&0===--f&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())};b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].on(r,g).on(s,h)}),a(),0===c(e.$bg)&&0===c(e.$overlay)&&0===c(e.$wrapper)&&0===c(e.$modal)&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(a,b){e[b].off(r+" "+s)}),d())}function i(a){a.state!==u.CLOSED&&(b.each(["$bg","$overlay","$wrapper","$modal"],function(b,c){a[c].off(r+" "+s)}),a.$bg.removeClass(a.settings.modifier),a.$overlay.removeClass(a.settings.modifier).hide(),a.$wrapper.hide(),f(),g(a,u.CLOSED,!0))}function j(a){var b,c,d,e,f={};for(a=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,","),b=a.split(","),e=0,c=b.length;e<c;e++)b[e]=b[e].split(":"),d=b[e][1],("string"==typeof d||d instanceof String)&&(d="true"===d||"false"!==d&&d),("string"==typeof d||d instanceof String)&&(d=isNaN(d)?d:+d),f[b[e][0]]=d;return f}function k(){for(var a=q,b=0;b<arguments.length;++b)a+="-"+arguments[b];return a}function l(){var a,c,d=location.hash.replace("#","");if(d){try{c=b('[data-remodal-id="'+d+'"]')}catch(e){}c&&c.length&&(a=b[p].lookup[c.data(p)],a&&a.settings.hashTracking&&a.open())}else n&&n.state===u.OPENED&&n.settings.hashTracking&&n.close()}function m(a,c){var d=b(document.body),e=d,f=this;f.settings=b.extend({},t,c),f.index=b[p].lookup.push(f)-1,f.state=u.CLOSED,f.$overlay=b("."+k("overlay")),null!==f.settings.appendTo&&f.settings.appendTo.length&&(e=b(f.settings.appendTo)),f.$overlay.length||(f.$overlay=b("<div>").addClass(k("overlay")+" "+k("is",u.CLOSED)).hide(),e.append(f.$overlay)),f.$bg=b("."+k("bg")).addClass(k("is",u.CLOSED)),f.$modal=a.addClass(q+" "+k("is-initialized")+" "+f.settings.modifier+" "+k("is",u.CLOSED)).attr("tabindex","-1"),f.$wrapper=b("<div>").addClass(k("wrapper")+" "+f.settings.modifier+" "+k("is",u.CLOSED)).hide().append(f.$modal),e.append(f.$wrapper),f.$wrapper.on("click."+q,'[data-remodal-action="close"]',function(a){a.preventDefault(),f.close()}),f.$wrapper.on("click."+q,'[data-remodal-action="cancel"]',function(a){a.preventDefault(),f.$modal.trigger(v.CANCELLATION),f.settings.closeOnCancel&&f.close(v.CANCELLATION)}),f.$wrapper.on("click."+q,'[data-remodal-action="confirm"]',function(a){a.preventDefault(),f.$modal.trigger(v.CONFIRMATION),f.settings.closeOnConfirm&&f.close(v.CONFIRMATION)}),f.$wrapper.on("click."+q,function(a){var c=b(a.target);c.hasClass(k("wrapper"))&&f.settings.closeOnOutsideClick&&f.close()})}var n,o,p="remodal",q=a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.NAMESPACE||p,r=b.map(["animationstart","webkitAnimationStart","MSAnimationStart","oAnimationStart"],function(a){return a+"."+q}).join(" "),s=b.map(["animationend","webkitAnimationEnd","MSAnimationEnd","oAnimationEnd"],function(a){return a+"."+q}).join(" "),t=b.extend({hashTracking:!0,closeOnConfirm:!0,closeOnCancel:!0,closeOnEscape:!0,closeOnOutsideClick:!0,modifier:"",appendTo:null},a.REMODAL_GLOBALS&&a.REMODAL_GLOBALS.DEFAULTS),u={CLOSING:"closing",CLOSED:"closed",OPENING:"opening",OPENED:"opened"},v={CONFIRMATION:"confirmation",CANCELLATION:"cancellation"},w=function(){var a=document.createElement("div").style;return void 0!==a.animationName||void 0!==a.WebkitAnimationName||void 0!==a.MozAnimationName||void 0!==a.msAnimationName||void 0!==a.OAnimationName}(),x=/iPad|iPhone|iPod/.test(navigator.platform);m.prototype.open=function(){var a,c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(a=c.$modal.attr("data-remodal-id"),a&&c.settings.hashTracking&&(o=b(window).scrollTop(),location.hash=a),n&&n!==c&&i(n),n=c,e(),c.$bg.addClass(c.settings.modifier),c.$overlay.addClass(c.settings.modifier).show(),c.$wrapper.show().scrollTop(0),c.$modal.focus(),h(function(){g(c,u.OPENING)},function(){g(c,u.OPENED)},c))},m.prototype.close=function(a){var c=this;c.state!==u.OPENING&&c.state!==u.CLOSING&&(c.settings.hashTracking&&c.$modal.attr("data-remodal-id")===location.hash.substr(1)&&(location.hash="",b(window).scrollTop(o)),h(function(){g(c,u.CLOSING,!1,a)},function(){c.$bg.removeClass(c.settings.modifier),c.$overlay.removeClass(c.settings.modifier).hide(),c.$wrapper.hide(),f(),g(c,u.CLOSED,!1,a)},c))},m.prototype.getState=function(){return this.state},m.prototype.destroy=function(){var a,c=b[p].lookup;i(this),this.$wrapper.remove(),delete c[this.index],a=b.grep(c,function(a){return!!a}).length,0===a&&(this.$overlay.remove(),this.$bg.removeClass(k("is",u.CLOSING)+" "+k("is",u.OPENING)+" "+k("is",u.CLOSED)+" "+k("is",u.OPENED)))},b[p]={lookup:[]},b.fn[p]=function(a){var c,d;return this.each(function(e,f){d=b(f),null==d.data(p)?(c=new m(d,a),d.data(p,c.index),c.settings.hashTracking&&d.attr("data-remodal-id")===location.hash.substr(1)&&c.open()):c=b[p].lookup[d.data(p)]}),c},b(document).ready(function(){b('body').on("click","[data-remodal-target]",function(a){a.preventDefault();var c=a.currentTarget,d=c.getAttribute("data-remodal-target"),e=b('[data-remodal-id="'+d+'"]');b[p].lookup[e.data(p)].open()}),b('body').find("."+q).each(function(a,c){var d=b(c),e=d.data("remodal-options");e?("string"==typeof e||e instanceof String)&&(e=j(e)):e={},d[p](e)}),b('body').on("keydown."+q,function(a){n&&n.settings.closeOnEscape&&n.state===u.OPENED&&27===a.keyCode&&n.close()}),b(window).on("hashchange."+q,l)})});

/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */

!function(e){var n=!1;if("function"==typeof define&&define.amd&&(define(e),n=!0),"object"==typeof exports&&(module.exports=e(),n=!0),!n){var o=window.Cookies,t=window.Cookies=e();t.noConflict=function(){return window.Cookies=o,t}}}(function(){function e(){for(var e=0,n={};e<arguments.length;e++){var o=arguments[e];for(var t in o)n[t]=o[t]}return n}function n(o){function t(n,r,i){var c;if("undefined"!=typeof document){if(arguments.length>1){if("number"==typeof(i=e({path:"/"},t.defaults,i)).expires){var a=new Date;a.setMilliseconds(a.getMilliseconds()+864e5*i.expires),i.expires=a}i.expires=i.expires?i.expires.toUTCString():"";try{c=JSON.stringify(r),/^[\{\[]/.test(c)&&(r=c)}catch(e){}r=o.write?o.write(r,n):encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),n=(n=(n=encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent)).replace(/[\(\)]/g,escape);var f="";for(var s in i)i[s]&&(f+="; "+s,!0!==i[s]&&(f+="="+i[s]));return document.cookie=n+"="+r+f}n||(c={});for(var p=document.cookie?document.cookie.split("; "):[],d=/(%[0-9A-Z]{2})+/g,u=0;u<p.length;u++){var l=p[u].split("="),C=l.slice(1).join("=");'"'===C.charAt(0)&&(C=C.slice(1,-1));try{var g=l[0].replace(d,decodeURIComponent);if(C=o.read?o.read(C,g):o(C,g)||C.replace(d,decodeURIComponent),this.json)try{C=JSON.parse(C)}catch(e){}if(n===g){c=C;break}n||(c[g]=C)}catch(e){}}return c}}return t.set=t,t.get=function(e){return t.call(t,e)},t.getJSON=function(){return t.apply({json:!0},[].slice.call(arguments))},t.defaults={},t.remove=function(n,o){t(n,"",e(o,{expires:-1}))},t.withConverter=n,t}return n(function(){})});



// mediaWrapper.js: Simple responsive iframes
// MIT license http://www.opensource.org/licenses/mit-license.php/
// @author Matthew A. K. Smith http://www.akselkreis.com

!function(t){t.fn.mediaWrapper=function(i){var e=t.extend({intrinsic:!0,baseWidth:16,baseHeight:9},i);return this.each(function(){var i="";i=1==e.intrinsic&&""!==t(this).attr("width")&&""!==t(this).attr("height")?t(this).attr("height")/t(this).attr("width")*100:e.baseHeight/e.baseWidth*100,t(this).wrap('<div class="mediaWrapper" style="position: relative; width: 100%; height: 0; padding: '+i+'% 0 0 0; " />').css({position:"absolute",width:"100%",height:"100%",top:"0",left:"0"})})}}(jQuery);

/*
 * Pointer Events Polyfill: Adds support for the style attribute "pointer-events: none" to browsers without this feature (namely, IE).
 * (c) 2013, Kent Mewhort, licensed under BSD. See LICENSE.txt for details.
 */

function PointerEventsPolyfill(t){if(this.options={selector:"*",mouseEvents:["click","dblclick","mousedown","mouseup"],usePolyfillIf:function(){if("Microsoft Internet Explorer"==navigator.appName){var t=navigator.userAgent;if(null!=t.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/)){var e=parseFloat(RegExp.$1);if(11>e)return!0}}return!1}},t){var e=this;$.each(t,function(t,n){e.options[t]=n})}this.options.usePolyfillIf()&&this.register_mouse_events()}PointerEventsPolyfill.initialize=function(t){return null==PointerEventsPolyfill.singleton&&(PointerEventsPolyfill.singleton=new PointerEventsPolyfill(t)),PointerEventsPolyfill.singleton},PointerEventsPolyfill.prototype.register_mouse_events=function(){$(document).on(this.options.mouseEvents.join(" "),this.options.selector,function(t){if("none"==$(this).css("pointer-events")){var e=$(this).css("display");$(this).css("display","none");var n=document.elementFromPoint(t.clientX,t.clientY);return e?$(this).css("display",e):$(this).css("display",""),t.target=n,$(n).trigger(t),!1}return!0})};

/*!
 * Flickity PACKAGED v1.2.1
 * Touch, responsive, flickable galleries
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * http://flickity.metafizzy.co
 * Copyright 2015 Metafizzy
 */

/*!function(t){function e(){}function i(t){function i(e){e.prototype.option||(e.prototype.option=function(e){t.isPlainObject(e)&&(this.options=t.extend(!0,this.options,e))})}function o(e,i){t.fn[e]=function(o){if("string"==typeof o){for(var s=n.call(arguments,1),a=0,l=this.length;l>a;a++){var h=this[a],c=t.data(h,e);if(c)if(t.isFunction(c[o])&&"_"!==o.charAt(0)){var p=c[o].apply(c,s);if(void 0!==p)return p}else r("no such method '"+o+"' for "+e+" instance");else r("cannot call methods on "+e+" prior to initialization; attempted to call '"+o+"'")}return this}return this.each(function(){var n=t.data(this,e);n?(n.option(o),n._init()):(n=new i(this,o),t.data(this,e,n))})}}if(t){var r="undefined"==typeof console?e:function(t){console.error(t)};return t.bridget=function(t,e){i(e),o(t,e)},t.bridget}}var n=Array.prototype.slice;"function"==typeof define&&define.amd?define("jquery-bridget/jquery.bridget",["jquery"],i):i("object"==typeof exports?require("jquery"):t.jQuery)}(window),function(t){function e(t){return new RegExp("(^|\\s+)"+t+"(\\s+|$)")}function i(t,e){var i=n(t,e)?r:o;i(t,e)}var n,o,r;"classList"in document.documentElement?(n=function(t,e){return t.classList.contains(e)},o=function(t,e){t.classList.add(e)},r=function(t,e){t.classList.remove(e)}):(n=function(t,i){return e(i).test(t.className)},o=function(t,e){n(t,e)||(t.className=t.className+" "+e)},r=function(t,i){t.className=t.className.replace(e(i)," ")});var s={hasClass:n,addClass:o,removeClass:r,toggleClass:i,has:n,add:o,remove:r,toggle:i};"function"==typeof define&&define.amd?define("classie/classie",s):"object"==typeof exports?module.exports=s:t.classie=s}(window),function(){"use strict";function t(){}function e(t,e){for(var i=t.length;i--;)if(t[i].listener===e)return i;return-1}function i(t){return function(){return this[t].apply(this,arguments)}}var n=t.prototype,o=this,r=o.EventEmitter;n.getListeners=function(t){var e,i,n=this._getEvents();if(t instanceof RegExp){e={};for(i in n)n.hasOwnProperty(i)&&t.test(i)&&(e[i]=n[i])}else e=n[t]||(n[t]=[]);return e},n.flattenListeners=function(t){var e,i=[];for(e=0;e<t.length;e+=1)i.push(t[e].listener);return i},n.getListenersAsObject=function(t){var e,i=this.getListeners(t);return i instanceof Array&&(e={},e[t]=i),e||i},n.addListener=function(t,i){var n,o=this.getListenersAsObject(t),r="object"==typeof i;for(n in o)o.hasOwnProperty(n)&&-1===e(o[n],i)&&o[n].push(r?i:{listener:i,once:!1});return this},n.on=i("addListener"),n.addOnceListener=function(t,e){return this.addListener(t,{listener:e,once:!0})},n.once=i("addOnceListener"),n.defineEvent=function(t){return this.getListeners(t),this},n.defineEvents=function(t){for(var e=0;e<t.length;e+=1)this.defineEvent(t[e]);return this},n.removeListener=function(t,i){var n,o,r=this.getListenersAsObject(t);for(o in r)r.hasOwnProperty(o)&&(n=e(r[o],i),-1!==n&&r[o].splice(n,1));return this},n.off=i("removeListener"),n.addListeners=function(t,e){return this.manipulateListeners(!1,t,e)},n.removeListeners=function(t,e){return this.manipulateListeners(!0,t,e)},n.manipulateListeners=function(t,e,i){var n,o,r=t?this.removeListener:this.addListener,s=t?this.removeListeners:this.addListeners;if("object"!=typeof e||e instanceof RegExp)for(n=i.length;n--;)r.call(this,e,i[n]);else for(n in e)e.hasOwnProperty(n)&&(o=e[n])&&("function"==typeof o?r.call(this,n,o):s.call(this,n,o));return this},n.removeEvent=function(t){var e,i=typeof t,n=this._getEvents();if("string"===i)delete n[t];else if(t instanceof RegExp)for(e in n)n.hasOwnProperty(e)&&t.test(e)&&delete n[e];else delete this._events;return this},n.removeAllListeners=i("removeEvent"),n.emitEvent=function(t,e){var i,n,o,r,s=this.getListenersAsObject(t);for(o in s)if(s.hasOwnProperty(o))for(n=s[o].length;n--;)i=s[o][n],i.once===!0&&this.removeListener(t,i.listener),r=i.listener.apply(this,e||[]),r===this._getOnceReturnValue()&&this.removeListener(t,i.listener);return this},n.trigger=i("emitEvent"),n.emit=function(t){var e=Array.prototype.slice.call(arguments,1);return this.emitEvent(t,e)},n.setOnceReturnValue=function(t){return this._onceReturnValue=t,this},n._getOnceReturnValue=function(){return this.hasOwnProperty("_onceReturnValue")?this._onceReturnValue:!0},n._getEvents=function(){return this._events||(this._events={})},t.noConflict=function(){return o.EventEmitter=r,t},"function"==typeof define&&define.amd?define("eventEmitter/EventEmitter",[],function(){return t}):"object"==typeof module&&module.exports?module.exports=t:o.EventEmitter=t}.call(this),function(t){function e(e){var i=t.event;return i.target=i.target||i.srcElement||e,i}var i=document.documentElement,n=function(){};i.addEventListener?n=function(t,e,i){t.addEventListener(e,i,!1)}:i.attachEvent&&(n=function(t,i,n){t[i+n]=n.handleEvent?function(){var i=e(t);n.handleEvent.call(n,i)}:function(){var i=e(t);n.call(t,i)},t.attachEvent("on"+i,t[i+n])});var o=function(){};i.removeEventListener?o=function(t,e,i){t.removeEventListener(e,i,!1)}:i.detachEvent&&(o=function(t,e,i){t.detachEvent("on"+e,t[e+i]);try{delete t[e+i]}catch(n){t[e+i]=void 0}});var r={bind:n,unbind:o};"function"==typeof define&&define.amd?define("eventie/eventie",r):"object"==typeof exports?module.exports=r:t.eventie=r}(window),function(t){function e(t){if(t){if("string"==typeof n[t])return t;t=t.charAt(0).toUpperCase()+t.slice(1);for(var e,o=0,r=i.length;r>o;o++)if(e=i[o]+t,"string"==typeof n[e])return e}}var i="Webkit Moz ms Ms O".split(" "),n=document.documentElement.style;"function"==typeof define&&define.amd?define("get-style-property/get-style-property",[],function(){return e}):"object"==typeof exports?module.exports=e:t.getStyleProperty=e}(window),function(t,e){function i(t){var e=parseFloat(t),i=-1===t.indexOf("%")&&!isNaN(e);return i&&e}function n(){}function o(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0,i=a.length;i>e;e++){var n=a[e];t[n]=0}return t}function r(e){function n(){if(!d){d=!0;var n=t.getComputedStyle;if(h=function(){var t=n?function(t){return n(t,null)}:function(t){return t.currentStyle};return function(e){var i=t(e);return i||s("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),i}}(),c=e("boxSizing")){var o=document.createElement("div");o.style.width="200px",o.style.padding="1px 2px 3px 4px",o.style.borderStyle="solid",o.style.borderWidth="1px 2px 3px 4px",o.style[c]="border-box";var r=document.body||document.documentElement;r.appendChild(o);var a=h(o);p=200===i(a.width),r.removeChild(o)}}}function r(t){if(n(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=h(t);if("none"===e.display)return o();var r={};r.width=t.offsetWidth,r.height=t.offsetHeight;for(var s=r.isBorderBox=!(!c||!e[c]||"border-box"!==e[c]),d=0,u=a.length;u>d;d++){var f=a[d],v=e[f];v=l(t,v);var y=parseFloat(v);r[f]=isNaN(y)?0:y}var g=r.paddingLeft+r.paddingRight,m=r.paddingTop+r.paddingBottom,b=r.marginLeft+r.marginRight,x=r.marginTop+r.marginBottom,S=r.borderLeftWidth+r.borderRightWidth,C=r.borderTopWidth+r.borderBottomWidth,w=s&&p,E=i(e.width);E!==!1&&(r.width=E+(w?0:g+S));var P=i(e.height);return P!==!1&&(r.height=P+(w?0:m+C)),r.innerWidth=r.width-(g+S),r.innerHeight=r.height-(m+C),r.outerWidth=r.width+b,r.outerHeight=r.height+x,r}}function l(e,i){if(t.getComputedStyle||-1===i.indexOf("%"))return i;var n=e.style,o=n.left,r=e.runtimeStyle,s=r&&r.left;return s&&(r.left=e.currentStyle.left),n.left=i,i=n.pixelLeft,n.left=o,s&&(r.left=s),i}var h,c,p,d=!1;return r}var s="undefined"==typeof console?n:function(t){console.error(t)},a=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"];"function"==typeof define&&define.amd?define("get-size/get-size",["get-style-property/get-style-property"],r):"object"==typeof exports?module.exports=r(require("desandro-get-style-property")):t.getSize=r(t.getStyleProperty)}(window),function(t){function e(t){"function"==typeof t&&(e.isReady?t():s.push(t))}function i(t){var i="readystatechange"===t.type&&"complete"!==r.readyState;e.isReady||i||n()}function n(){e.isReady=!0;for(var t=0,i=s.length;i>t;t++){var n=s[t];n()}}function o(o){return"complete"===r.readyState?n():(o.bind(r,"DOMContentLoaded",i),o.bind(r,"readystatechange",i),o.bind(t,"load",i)),e}var r=t.document,s=[];e.isReady=!1,"function"==typeof define&&define.amd?define("doc-ready/doc-ready",["eventie/eventie"],o):"object"==typeof exports?module.exports=o(require("eventie")):t.docReady=o(t.eventie)}(window),function(t){"use strict";function e(t,e){return t[s](e)}function i(t){if(!t.parentNode){var e=document.createDocumentFragment();e.appendChild(t)}}function n(t,e){i(t);for(var n=t.parentNode.querySelectorAll(e),o=0,r=n.length;r>o;o++)if(n[o]===t)return!0;return!1}function o(t,n){return i(t),e(t,n)}var r,s=function(){if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0,n=e.length;n>i;i++){var o=e[i],r=o+"MatchesSelector";if(t[r])return r}}();if(s){var a=document.createElement("div"),l=e(a,"div");r=l?e:o}else r=n;"function"==typeof define&&define.amd?define("matches-selector/matches-selector",[],function(){return r}):"object"==typeof exports?module.exports=r:window.matchesSelector=r}(Element.prototype),function(t,e){"use strict";"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["doc-ready/doc-ready","matches-selector/matches-selector"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("doc-ready"),require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.docReady,t.matchesSelector)}(window,function(t,e,i){var n={};n.extend=function(t,e){for(var i in e)t[i]=e[i];return t},n.modulo=function(t,e){return(t%e+e)%e};var o=Object.prototype.toString;n.isArray=function(t){return"[object Array]"==o.call(t)},n.makeArray=function(t){var e=[];if(n.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0,o=t.length;o>i;i++)e.push(t[i]);else e.push(t);return e},n.indexOf=Array.prototype.indexOf?function(t,e){return t.indexOf(e)}:function(t,e){for(var i=0,n=t.length;n>i;i++)if(t[i]===e)return i;return-1},n.removeFrom=function(t,e){var i=n.indexOf(t,e);-1!=i&&t.splice(i,1)},n.isElement="function"==typeof HTMLElement||"object"==typeof HTMLElement?function(t){return t instanceof HTMLElement}:function(t){return t&&"object"==typeof t&&1==t.nodeType&&"string"==typeof t.nodeName},n.setText=function(){function t(t,i){e=e||(void 0!==document.documentElement.textContent?"textContent":"innerText"),t[e]=i}var e;return t}(),n.getParent=function(t,e){for(;t!=document.body;)if(t=t.parentNode,i(t,e))return t},n.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},n.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},n.filterFindElements=function(t,e){t=n.makeArray(t);for(var o=[],r=0,s=t.length;s>r;r++){var a=t[r];if(n.isElement(a))if(e){i(a,e)&&o.push(a);for(var l=a.querySelectorAll(e),h=0,c=l.length;c>h;h++)o.push(l[h])}else o.push(a)}return o},n.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i||100)}},n.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var r=t.console;return n.htmlInit=function(i,o){e(function(){for(var e=n.toDashed(o),s=document.querySelectorAll(".js-"+e),a="data-"+e+"-options",l=0,h=s.length;h>l;l++){var c,p=s[l],d=p.getAttribute(a);try{c=d&&JSON.parse(d)}catch(u){r&&r.error("Error parsing "+a+" on "+p.nodeName.toLowerCase()+(p.id?"#"+p.id:"")+": "+u);continue}var f=new i(p,c),v=t.jQuery;v&&v.data(p,o,f)}})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(i){return e(t,i)}):"object"==typeof exports?module.exports=e(t,require("get-size")):(t.Flickity=t.Flickity||{},t.Flickity.Cell=e(t,t.getSize))}(window,function(t,e){function i(t,e){this.element=t,this.parent=e,this.create()}var n="attachEvent"in t;return i.prototype.create=function(){this.element.style.position="absolute",n&&this.element.setAttribute("unselectable","on"),this.x=0,this.shift=0},i.prototype.destroy=function(){this.element.style.position="";var t=this.parent.originSide;this.element.style[t]=""},i.prototype.getSize=function(){this.size=e(this.element)},i.prototype.setPosition=function(t){this.x=t,this.setDefaultTarget(),this.renderPosition(t)},i.prototype.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},i.prototype.renderPosition=function(t){var e=this.parent.originSide;this.element.style[e]=this.parent.getPositionValue(t)},i.prototype.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},i.prototype.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("flickity/js/animate",["get-style-property/get-style-property","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("desandro-get-style-property"),require("fizzy-ui-utils")):(t.Flickity=t.Flickity||{},t.Flickity.animatePrototype=e(t,t.getStyleProperty,t.fizzyUIUtils))}(window,function(t,e,i){for(var n,o=0,r="webkit moz ms o".split(" "),s=t.requestAnimationFrame,a=t.cancelAnimationFrame,l=0;l<r.length&&(!s||!a);l++)n=r[l],s=s||t[n+"RequestAnimationFrame"],a=a||t[n+"CancelAnimationFrame"]||t[n+"CancelRequestAnimationFrame"];s&&a||(s=function(e){var i=(new Date).getTime(),n=Math.max(0,16-(i-o)),r=t.setTimeout(function(){e(i+n)},n);return o=i+n,r},a=function(e){t.clearTimeout(e)});var h={};h.startAnimation=function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},h.animate=function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;s(function(){e.animate()})}};var c=e("transform"),p=!!e("perspective");return h.positionSlider=function(){var t=this.x;this.options.wrapAround&&this.cells.length>1&&(t=i.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),t+=this.cursorPosition,t=this.options.rightToLeft&&c?-t:t;var e=this.getPositionValue(t);c?this.slider.style[c]=p&&this.isAnimating?"translate3d("+e+",0,0)":"translateX("+e+")":this.slider.style[this.originSide]=e},h.positionSliderAtSelected=function(){if(this.cells.length){var t=this.cells[this.selectedIndex];this.x=-t.target,this.positionSlider()}},h.getPositionValue=function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},h.settle=function(t){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*t)||this.restingFrames++,this.restingFrames>2&&(this.isAnimating=!1,delete this.isFreeScrolling,p&&this.positionSlider(),this.dispatchEvent("settle"))},h.shiftWrapCells=function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},h._shiftCells=function(t,e,i){for(var n=0,o=t.length;o>n;n++){var r=t[n],s=e>0?i:0;r.wrapShift(s),e-=r.size.outerWidth}},h._unshiftCells=function(t){if(t&&t.length)for(var e=0,i=t.length;i>e;e++)t[e].wrapShift(0)},h.integratePhysics=function(){this.velocity+=this.accel,this.x+=this.velocity,this.velocity*=this.getFrictionFactor(),this.accel=0},h.applyForce=function(t){this.accel+=t},h.getFrictionFactor=function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},h.getRestingPosition=function(){return this.x+this.velocity/(1-this.getFrictionFactor())},h.applyDragForce=function(){if(this.isPointerDown){var t=this.dragX-this.x,e=t-this.velocity;this.applyForce(e)}},h.applySelectedAttraction=function(){var t=this.cells.length;if(!this.isPointerDown&&!this.isFreeScrolling&&t){var e=this.cells[this.selectedIndex],i=this.options.wrapAround&&t>1?this.slideableWidth*Math.floor(this.selectedIndex/t):0,n=-1*(e.target+i)-this.x,o=n*this.options.selectedAttraction;this.applyForce(o)}},h}),function(t,e){"use strict";if("function"==typeof define&&define.amd)define("flickity/js/flickity",["classie/classie","eventEmitter/EventEmitter","eventie/eventie","get-size/get-size","fizzy-ui-utils/utils","./cell","./animate"],function(i,n,o,r,s,a,l){return e(t,i,n,o,r,s,a,l)});else if("object"==typeof exports)module.exports=e(t,require("desandro-classie"),require("wolfy87-eventemitter"),require("eventie"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./animate"));else{var i=t.Flickity;t.Flickity=e(t,t.classie,t.EventEmitter,t.eventie,t.getSize,t.fizzyUIUtils,i.Cell,i.animatePrototype)}}(window,function(t,e,i,n,o,r,s,a){function l(t,e){for(t=r.makeArray(t);t.length;)e.appendChild(t.shift())}function h(t,e){var i=r.getQueryElement(t);return i?(this.element=i,c&&(this.$element=c(this.element)),this.options=r.extend({},this.constructor.defaults),this.option(e),void this._create()):void(d&&d.error("Bad element for Flickity: "+(i||t)))}var c=t.jQuery,p=t.getComputedStyle,d=t.console,u=0,f={};h.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},h.createMethods=[],r.extend(h.prototype,i.prototype),h.prototype._create=function(){var e=this.guid=++u;this.element.flickityGUID=e,f[e]=this,this.selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.accel=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",h.setUnselectable(this.viewport),this._createSlider(),(this.options.resize||this.options.watchCSS)&&(n.bind(t,"resize",this),this.isResizeBound=!0);for(var i=0,o=h.createMethods.length;o>i;i++){var r=h.createMethods[i];this[r]()}this.options.watchCSS?this.watchCSS():this.activate()},h.prototype.option=function(t){r.extend(this.options,t)},h.prototype.activate=function(){if(!this.isActive){this.isActive=!0,e.add(this.element,"flickity-enabled"),this.options.rightToLeft&&e.add(this.element,"flickity-rtl"),this.getSize();var t=this._filterFindCellElements(this.element.children);l(t,this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,n.bind(this.element,"keydown",this)),this.emit("activate");var i,o=this.options.initialIndex;i=this.isInitActivated?this.selectedIndex:void 0!==o&&this.cells[o]?o:0,this.select(i,!1,!0),this.isInitActivated=!0}},h.prototype._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider",t.style[this.originSide]=0,this.slider=t},h.prototype._filterFindCellElements=function(t){return r.filterFindElements(t,this.options.cellSelector)},h.prototype.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},h.prototype._makeCells=function(t){for(var e=this._filterFindCellElements(t),i=[],n=0,o=e.length;o>n;n++){var r=e[n],a=new s(r,this);i.push(a)}return i},h.prototype.getLastCell=function(){return this.cells[this.cells.length-1]},h.prototype.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},h.prototype._positionCells=function(t){t=t||0,this.maxCellHeight=t?this.maxCellHeight||0:0;var e=0;if(t>0){var i=this.cells[t-1];e=i.x+i.size.outerWidth}for(var n,o=this.cells.length,r=t;o>r;r++)n=this.cells[r],n.setPosition(e),e+=n.size.outerWidth,this.maxCellHeight=Math.max(n.size.outerHeight,this.maxCellHeight);this.slideableWidth=e,this._containCells()},h.prototype._sizeCells=function(t){for(var e=0,i=t.length;i>e;e++){var n=t[e];n.getSize()}},h.prototype._init=h.prototype.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},h.prototype.getSize=function(){this.size=o(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var v={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};h.prototype.setCellAlign=function(){var t=v[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},h.prototype.setGallerySize=function(){this.options.setGallerySize&&(this.viewport.style.height=this.maxCellHeight+"px")},h.prototype._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},h.prototype._getGapCells=function(t,e,i){for(var n=[];t>0;){var o=this.cells[e];if(!o)break;n.push(o),e+=i,t-=o.size.outerWidth}return n},h.prototype._containCells=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length)for(var t=this.options.rightToLeft?"marginRight":"marginLeft",e=this.options.rightToLeft?"marginLeft":"marginRight",i=this.cells[0].size[t],n=this.getLastCell(),o=this.slideableWidth-n.size[e],r=o-this.size.innerWidth*(1-this.cellAlign),s=o<this.size.innerWidth,a=0,l=this.cells.length;l>a;a++){var h=this.cells[a];h.setDefaultTarget(),s?h.target=o*this.cellAlign:(h.target=Math.max(h.target,this.cursorPosition+i),h.target=Math.min(h.target,r))}},h.prototype.dispatchEvent=function(t,e,i){var n=[e].concat(i);if(this.emitEvent(t,n),c&&this.$element)if(e){var o=c.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},h.prototype.select=function(t,e,i){if(this.isActive){t=parseInt(t,10);var n=this.cells.length;this.options.wrapAround&&n>1&&(0>t?this.x-=this.slideableWidth:t>=n&&(this.x+=this.slideableWidth)),(this.options.wrapAround||e)&&(t=r.modulo(t,n)),this.cells[t]&&(this.selectedIndex=t,this.setSelectedCell(),i?this.positionSliderAtSelected():this.startAnimation(),this.dispatchEvent("cellSelect"))}},h.prototype.previous=function(t){this.select(this.selectedIndex-1,t)},h.prototype.next=function(t){this.select(this.selectedIndex+1,t)},h.prototype.setSelectedCell=function(){this._removeSelectedCellClass(),this.selectedCell=this.cells[this.selectedIndex],this.selectedElement=this.selectedCell.element,e.add(this.selectedElement,"is-selected")},h.prototype._removeSelectedCellClass=function(){this.selectedCell&&e.remove(this.selectedCell.element,"is-selected")},h.prototype.getCell=function(t){for(var e=0,i=this.cells.length;i>e;e++){var n=this.cells[e];if(n.element==t)return n}},h.prototype.getCells=function(t){t=r.makeArray(t);for(var e=[],i=0,n=t.length;n>i;i++){var o=t[i],s=this.getCell(o);s&&e.push(s)}return e},h.prototype.getCellElements=function(){for(var t=[],e=0,i=this.cells.length;i>e;e++)t.push(this.cells[e].element);return t},h.prototype.getParentCell=function(t){var e=this.getCell(t);return e?e:(t=r.getParent(t,".flickity-slider > *"),this.getCell(t))},h.prototype.getAdjacentCellElements=function(t,e){if(!t)return[this.selectedElement];e=void 0===e?this.selectedIndex:e;var i=this.cells.length;if(1+2*t>=i)return this.getCellElements();for(var n=[],o=e-t;e+t>=o;o++){var s=this.options.wrapAround?r.modulo(o,i):o,a=this.cells[s];a&&n.push(a.element)}return n},h.prototype.uiChange=function(){this.emit("uiChange")},h.prototype.childUIPointerDown=function(t){this.emitEvent("childUIPointerDown",[t])},h.prototype.onresize=function(){this.watchCSS(),this.resize()},r.debounceMethod(h,"onresize",150),h.prototype.resize=function(){this.isActive&&(this.getSize(),this.options.wrapAround&&(this.x=r.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.positionSliderAtSelected())};var y=h.supportsConditionalCSS=function(){var t;return function(){if(void 0!==t)return t;if(!p)return void(t=!1);var e=document.createElement("style"),i=document.createTextNode('body:after { content: "foo"; display: none; }');e.appendChild(i),document.head.appendChild(e);var n=p(document.body,":after").content;return t=-1!=n.indexOf("foo"),document.head.removeChild(e),t}}();h.prototype.watchCSS=function(){var t=this.options.watchCSS;if(t){var e=y();if(!e){var i="fallbackOn"==t?"activate":"deactivate";return void this[i]()}var n=p(this.element,":after").content;-1!=n.indexOf("flickity")?this.activate():this.deactivate()}},h.prototype.onkeydown=function(t){if(this.options.accessibility&&(!document.activeElement||document.activeElement==this.element))if(37==t.keyCode){var e=this.options.rightToLeft?"next":"previous";this.uiChange(),this[e]()}else if(39==t.keyCode){var i=this.options.rightToLeft?"previous":"next";this.uiChange(),this[i]()}},h.prototype.deactivate=function(){if(this.isActive){e.remove(this.element,"flickity-enabled"),e.remove(this.element,"flickity-rtl");for(var t=0,i=this.cells.length;i>t;t++){var o=this.cells[t];o.destroy()}this._removeSelectedCellClass(),this.element.removeChild(this.viewport),l(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),n.unbind(this.element,"keydown",this)),this.isActive=!1,this.emit("deactivate")}},h.prototype.destroy=function(){this.deactivate(),this.isResizeBound&&n.unbind(t,"resize",this),this.emit("destroy"),c&&this.$element&&c.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete f[this.guid]},r.extend(h.prototype,a);var g="attachEvent"in t;return h.setUnselectable=function(t){g&&t.setAttribute("unselectable","on")},h.data=function(t){t=r.getQueryElement(t);var e=t&&t.flickityGUID;return e&&f[e]},r.htmlInit(h,"flickity"),c&&c.bridget&&c.bridget("flickity",h),h.Cell=s,h}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("unipointer/unipointer",["eventEmitter/EventEmitter","eventie/eventie"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("wolfy87-eventemitter"),require("eventie")):t.Unipointer=e(t,t.EventEmitter,t.eventie)}(window,function(t,e,i){function n(){}function o(){}o.prototype=new e,o.prototype.bindStartEvent=function(t){this._bindStartEvent(t,!0)},o.prototype.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},o.prototype._bindStartEvent=function(e,n){n=void 0===n?!0:!!n;var o=n?"bind":"unbind";t.navigator.pointerEnabled?i[o](e,"pointerdown",this):t.navigator.msPointerEnabled?i[o](e,"MSPointerDown",this):(i[o](e,"mousedown",this),i[o](e,"touchstart",this))},o.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},o.prototype.getTouch=function(t){for(var e=0,i=t.length;i>e;e++){var n=t[e];if(n.identifier==this.pointerIdentifier)return n}},o.prototype.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},o.prototype.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},o.prototype.onMSPointerDown=o.prototype.onpointerdown=function(t){this._pointerDown(t,t)},o.prototype._pointerDown=function(t,e){this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},o.prototype.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var r={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"],MSPointerDown:["MSPointerMove","MSPointerUp","MSPointerCancel"]};return o.prototype._bindPostStartEvents=function(e){if(e){for(var n=r[e.type],o=e.preventDefault?t:document,s=0,a=n.length;a>s;s++){var l=n[s];i.bind(o,l,this)}this._boundPointerEvents={events:n,node:o}}},o.prototype._unbindPostStartEvents=function(){var t=this._boundPointerEvents;if(t&&t.events){for(var e=0,n=t.events.length;n>e;e++){var o=t.events[e];i.unbind(t.node,o,this)}delete this._boundPointerEvents}},o.prototype.onmousemove=function(t){this._pointerMove(t,t)},o.prototype.onMSPointerMove=o.prototype.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},o.prototype.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},o.prototype._pointerMove=function(t,e){this.pointerMove(t,e)},o.prototype.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},o.prototype.onmouseup=function(t){this._pointerUp(t,t)},o.prototype.onMSPointerUp=o.prototype.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},o.prototype.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},o.prototype._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},o.prototype.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},o.prototype._pointerDone=function(){this.isPointerDown=!1,delete this.pointerIdentifier,this._unbindPostStartEvents(),this.pointerDone()},o.prototype.pointerDone=n,o.prototype.onMSPointerCancel=o.prototype.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},o.prototype.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},o.prototype._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},o.prototype.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},o.getPointerPoint=function(t){return{x:void 0!==t.pageX?t.pageX:t.clientX,y:void 0!==t.pageY?t.pageY:t.clientY}},o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("unidragger/unidragger",["eventie/eventie","unipointer/unipointer"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("eventie"),require("unipointer")):t.Unidragger=e(t,t.eventie,t.Unipointer)}(window,function(t,e,i){function n(){}function o(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function r(){}function s(){return!1}r.prototype=new i,r.prototype.bindHandles=function(){this._bindHandles(!0)},r.prototype.unbindHandles=function(){this._bindHandles(!1)};var a=t.navigator;r.prototype._bindHandles=function(t){t=void 0===t?!0:!!t;var i;i=a.pointerEnabled?function(e){e.style.touchAction=t?"none":""}:a.msPointerEnabled?function(e){e.style.msTouchAction=t?"none":""}:function(){t&&h(s)};for(var n=t?"bind":"unbind",o=0,r=this.handles.length;r>o;o++){var s=this.handles[o];this._bindStartEvent(s,t),i(s),e[n](s,"click",this)}};var l="attachEvent"in document.documentElement,h=l?function(t){"IMG"==t.nodeName&&(t.ondragstart=s);for(var e=t.querySelectorAll("img"),i=0,n=e.length;n>i;i++){var o=e[i];o.ondragstart=s}}:n;r.prototype.pointerDown=function(i,n){if("INPUT"==i.target.nodeName&&"range"==i.target.type)return this.isPointerDown=!1,void delete this.pointerIdentifier;this._dragPointerDown(i,n);var o=document.activeElement;o&&o.blur&&o.blur(),this._bindPostStartEvents(i),this.pointerDownScroll=r.getScrollPosition(),e.bind(t,"scroll",this),this.emitEvent("pointerDown",[i,n])},r.prototype._dragPointerDown=function(t,e){this.pointerDownPoint=i.getPointerPoint(e);var n="touchstart"==t.type,r=t.target.nodeName;n||"SELECT"==r||o(t)},r.prototype.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},r.prototype._dragPointerMove=function(t,e){var n=i.getPointerPoint(e),o={x:n.x-this.pointerDownPoint.x,y:n.y-this.pointerDownPoint.y};return!this.isDragging&&this.hasDragStarted(o)&&this._dragStart(t,e),o},r.prototype.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},r.prototype.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},r.prototype._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},r.prototype.pointerDone=function(){e.unbind(t,"scroll",this)},r.prototype._dragStart=function(t,e){
this.isDragging=!0,this.dragStartPoint=r.getPointerPoint(e),this.isPreventingClicks=!0,this.dragStart(t,e)},r.prototype.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},r.prototype._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},r.prototype.dragMove=function(t,e,i){o(t),this.emitEvent("dragMove",[t,e,i])},r.prototype._dragEnd=function(t,e){this.isDragging=!1;var i=this;setTimeout(function(){delete i.isPreventingClicks}),this.dragEnd(t,e)},r.prototype.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},r.prototype.pointerDone=function(){e.unbind(t,"scroll",this),delete this.pointerDownScroll},r.prototype.onclick=function(t){this.isPreventingClicks&&o(t)},r.prototype._staticClick=function(t,e){if(!this.isIgnoringMouseUp||"mouseup"!=t.type){var i=t.target.nodeName;if(("INPUT"==i||"TEXTAREA"==i)&&t.target.focus(),this.staticClick(t,e),"mouseup"!=t.type){this.isIgnoringMouseUp=!0;var n=this;setTimeout(function(){delete n.isIgnoringMouseUp},400)}}},r.prototype.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},r.prototype.onscroll=function(){var t=r.getScrollPosition(),e=this.pointerDownScroll.x-t.x,i=this.pointerDownScroll.y-t.y;(Math.abs(e)>3||Math.abs(i)>3)&&this._pointerDone()},r.getPointerPoint=function(t){return{x:void 0!==t.pageX?t.pageX:t.clientX,y:void 0!==t.pageY?t.pageY:t.clientY}};var c=void 0!==t.pageYOffset;return r.getScrollPosition=function(){return{x:c?t.pageXOffset:document.body.scrollLeft,y:c?t.pageYOffset:document.body.scrollTop}},r.getPointerPoint=i.getPointerPoint,r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("flickity/js/drag",["classie/classie","eventie/eventie","./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(i,n,o,r,s){return e(t,i,n,o,r,s)}):"object"==typeof exports?module.exports=e(t,require("desandro-classie"),require("eventie"),require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):t.Flickity=e(t,t.classie,t.eventie,t.Flickity,t.Unidragger,t.fizzyUIUtils)}(window,function(t,e,i,n,o,r){function s(t){t.preventDefault?t.preventDefault():t.returnValue=!1}r.extend(n.defaults,{draggable:!0}),n.createMethods.push("_createDrag"),r.extend(n.prototype,o.prototype),n.prototype._createDrag=function(){this.on("activate",this.bindDrag),this.on("uiChange",this._uiChangeDrag),this.on("childUIPointerDown",this._childUIPointerDownDrag),this.on("deactivate",this.unbindDrag)},n.prototype.bindDrag=function(){this.options.draggable&&!this.isDragBound&&(e.add(this.element,"is-draggable"),this.handles=[this.viewport],this.bindHandles(),this.isDragBound=!0)},n.prototype.unbindDrag=function(){this.isDragBound&&(e.remove(this.element,"is-draggable"),this.unbindHandles(),delete this.isDragBound)},n.prototype._uiChangeDrag=function(){delete this.isFreeScrolling},n.prototype._childUIPointerDownDrag=function(t){s(t),this.pointerDownFocus(t)},n.prototype.pointerDown=function(n,r){if("INPUT"==n.target.nodeName&&"range"==n.target.type)return this.isPointerDown=!1,void delete this.pointerIdentifier;this._dragPointerDown(n,r);var s=document.activeElement;s&&s.blur&&s!=this.element&&s!=document.body&&s.blur(),this.pointerDownFocus(n),this.dragX=this.x,e.add(this.viewport,"is-pointer-down"),this._bindPostStartEvents(n),this.pointerDownScroll=o.getScrollPosition(),i.bind(t,"scroll",this),this.dispatchEvent("pointerDown",n,[r])};var a={touchstart:!0,MSPointerDown:!0},l={INPUT:!0,SELECT:!0};return n.prototype.pointerDownFocus=function(e){if(this.options.accessibility&&!a[e.type]&&!l[e.target.nodeName]){var i=t.pageYOffset;this.element.focus(),t.pageYOffset!=i&&t.scrollTo(t.pageXOffset,i)}},n.prototype.hasDragStarted=function(t){return Math.abs(t.x)>3},n.prototype.pointerUp=function(t,i){e.remove(this.viewport,"is-pointer-down"),this.dispatchEvent("pointerUp",t,[i]),this._dragPointerUp(t,i)},n.prototype.pointerDone=function(){i.unbind(t,"scroll",this),delete this.pointerDownScroll},n.prototype.dragStart=function(t,e){this.dragStartPosition=this.x,this.startAnimation(),this.dispatchEvent("dragStart",t,[e])},n.prototype.dragMove=function(t,e,i){s(t),this.previousDragX=this.dragX;var n=this.options.rightToLeft?-1:1,o=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.cells.length){var r=Math.max(-this.cells[0].target,this.dragStartPosition);o=o>r?.5*(o+r):o;var a=Math.min(-this.getLastCell().target,this.dragStartPosition);o=a>o?.5*(o+a):o}this.dragX=o,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",t,[e,i])},n.prototype.dragEnd=function(t,e){this.options.freeScroll&&(this.isFreeScrolling=!0);var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition();this.isFreeScrolling=-n>this.cells[0].target&&-n<this.getLastCell().target}else this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect());delete this.previousDragX,this.select(i),this.dispatchEvent("dragEnd",t,[e])},n.prototype.dragEndRestingSelect=function(){var t=this.getRestingPosition(),e=Math.abs(this.getCellDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1),o=i.distance<n.distance?i.index:n.index;return o},n.prototype._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,o=1/0,r=this.options.contain&&!this.options.wrapAround?function(t,e){return e>=t}:function(t,e){return e>t};r(e,o)&&(n+=i,o=e,e=this.getCellDistance(-t,n),null!==e);)e=Math.abs(e);return{distance:o,index:n-i}},n.prototype.getCellDistance=function(t,e){var i=this.cells.length,n=this.options.wrapAround&&i>1,o=n?r.modulo(e,i):e,s=this.cells[o];if(!s)return null;var a=n?this.slideableWidth*Math.floor(e/i):0;return t-(s.target+a)},n.prototype.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||new Date-this.dragMoveTime>100)return 0;var t=this.getCellDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return t>0&&e>0?1:0>t&&0>e?-1:0},n.prototype.staticClick=function(t,e){var i=this.getParentCell(t.target),n=i&&i.element,o=i&&r.indexOf(this.cells,i);this.dispatchEvent("staticClick",t,[e,n,o])},n}),function(t,e){"function"==typeof define&&define.amd?define("tap-listener/tap-listener",["unipointer/unipointer"],function(i){return e(t,i)}):"object"==typeof exports?module.exports=e(t,require("unipointer")):t.TapListener=e(t,t.Unipointer)}(window,function(t,e){function i(t){this.bindTap(t)}i.prototype=new e,i.prototype.bindTap=function(t){t&&(this.unbindTap(),this.tapElement=t,this._bindStartEvent(t,!0))},i.prototype.unbindTap=function(){this.tapElement&&(this._bindStartEvent(this.tapElement,!0),delete this.tapElement)};var n=void 0!==t.pageYOffset;return i.prototype.pointerUp=function(i,o){if(!this.isIgnoringMouseUp||"mouseup"!=i.type){var r=e.getPointerPoint(o),s=this.tapElement.getBoundingClientRect(),a=n?t.pageXOffset:document.body.scrollLeft,l=n?t.pageYOffset:document.body.scrollTop,h=r.x>=s.left+a&&r.x<=s.right+a&&r.y>=s.top+l&&r.y<=s.bottom+l;h&&this.emitEvent("tap",[i,o]),"mouseup"!=i.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),320))}},i.prototype.destroy=function(){this.pointerDone(),this.unbindTap()},i}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("flickity/js/prev-next-button",["eventie/eventie","./flickity","tap-listener/tap-listener","fizzy-ui-utils/utils"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof exports?module.exports=e(t,require("eventie"),require("./flickity"),require("tap-listener"),require("fizzy-ui-utils")):e(t,t.eventie,t.Flickity,t.TapListener,t.fizzyUIUtils)}(window,function(t,e,i,n,o){function r(t,e){this.direction=t,this.parent=e,this._create()}function s(t){return"string"==typeof t?t:"M "+t.x0+",50 L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50  L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z"}var a="http://www.w3.org/2000/svg",l=function(){function t(){if(void 0!==e)return e;var t=document.createElement("div");return t.innerHTML="<svg/>",e=(t.firstChild&&t.firstChild.namespaceURI)==a}var e;return t}();return r.prototype=new n,r.prototype._create=function(){this.isEnabled=!0,this.isPrevious=-1==this.direction;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");if(e.className="flickity-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),this.disable(),e.setAttribute("aria-label",this.isPrevious?"previous":"next"),i.setUnselectable(e),l()){var n=this.createSVG();e.appendChild(n)}else this.setArrowText(),e.className+=" no-svg";var o=this;this.onCellSelect=function(){o.update()},this.parent.on("cellSelect",this.onCellSelect),this.on("tap",this.onTap),this.on("pointerDown",function(t,e){o.parent.childUIPointerDown(e)})},r.prototype.activate=function(){this.bindTap(this.element),e.bind(this.element,"click",this),this.parent.element.appendChild(this.element)},r.prototype.deactivate=function(){this.parent.element.removeChild(this.element),n.prototype.destroy.call(this),e.unbind(this.element,"click",this)},r.prototype.createSVG=function(){var t=document.createElementNS(a,"svg");t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(a,"path"),i=s(this.parent.options.arrowShape);return e.setAttribute("d",i),e.setAttribute("class","arrow"),this.isLeft||e.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(e),t},r.prototype.setArrowText=function(){var t=this.parent.options,e=this.isLeft?t.leftArrowText:t.rightArrowText;o.setText(this.element,e)},r.prototype.onTap=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},r.prototype.handleEvent=o.handleEvent,r.prototype.onclick=function(){var t=document.activeElement;t&&t==this.element&&this.onTap()},r.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},r.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},r.prototype.update=function(){var t=this.parent.cells;if(this.parent.options.wrapAround&&t.length>1)return void this.enable();var e=t.length?t.length-1:0,i=this.isPrevious?0:e,n=this.parent.selectedIndex==i?"disable":"enable";this[n]()},r.prototype.destroy=function(){this.deactivate()},o.extend(i.defaults,{prevNextButtons:!0,leftArrowText:"‹",rightArrowText:"›",arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),i.createMethods.push("_createPrevNextButtons"),i.prototype._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new r(-1,this),this.nextButton=new r(1,this),this.on("activate",this.activatePrevNextButtons))},i.prototype.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},i.prototype.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},i.PrevNextButton=r,i}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("flickity/js/page-dots",["eventie/eventie","./flickity","tap-listener/tap-listener","fizzy-ui-utils/utils"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof exports?module.exports=e(t,require("eventie"),require("./flickity"),require("tap-listener"),require("fizzy-ui-utils")):e(t,t.eventie,t.Flickity,t.TapListener,t.fizzyUIUtils)}(window,function(t,e,i,n,o){function r(t){this.parent=t,this._create()}return r.prototype=new n,r.prototype._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",i.setUnselectable(this.holder),this.dots=[];var t=this;this.onCellSelect=function(){t.updateSelected()},this.parent.on("cellSelect",this.onCellSelect),this.on("tap",this.onTap),this.on("pointerDown",function(e,i){t.parent.childUIPointerDown(i)})},r.prototype.activate=function(){this.setDots(),this.bindTap(this.holder),this.parent.element.appendChild(this.holder)},r.prototype.deactivate=function(){this.parent.element.removeChild(this.holder),n.prototype.destroy.call(this)},r.prototype.setDots=function(){var t=this.parent.cells.length-this.dots.length;t>0?this.addDots(t):0>t&&this.removeDots(-t)},r.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[];t;){var n=document.createElement("li");n.className="dot",e.appendChild(n),i.push(n),t--}this.holder.appendChild(e),this.dots=this.dots.concat(i)},r.prototype.removeDots=function(t){for(var e=this.dots.splice(this.dots.length-t,t),i=0,n=e.length;n>i;i++){var o=e[i];this.holder.removeChild(o)}},r.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot"),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected")},r.prototype.onTap=function(t){var e=t.target;if("LI"==e.nodeName){this.parent.uiChange();var i=o.indexOf(this.dots,e);this.parent.select(i)}},r.prototype.destroy=function(){this.deactivate()},i.PageDots=r,o.extend(i.defaults,{pageDots:!0}),i.createMethods.push("_createPageDots"),i.prototype._createPageDots=function(){this.options.pageDots&&(this.pageDots=new r(this),this.on("activate",this.activatePageDots),this.on("cellAddedRemoved",this.onCellAddedRemovedPageDots),this.on("deactivate",this.deactivatePageDots))},i.prototype.activatePageDots=function(){this.pageDots.activate()},i.prototype.onCellAddedRemovedPageDots=function(){this.pageDots.setDots()},i.prototype.deactivatePageDots=function(){this.pageDots.deactivate()},i.PageDots=r,i}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("flickity/js/player",["eventEmitter/EventEmitter","eventie/eventie","fizzy-ui-utils/utils","./flickity"],function(t,i,n,o){return e(t,i,n,o)}):"object"==typeof exports?module.exports=e(require("wolfy87-eventemitter"),require("eventie"),require("fizzy-ui-utils"),require("./flickity")):e(t.EventEmitter,t.eventie,t.fizzyUIUtils,t.Flickity)}(window,function(t,e,i,n){function o(t){if(this.parent=t,this.state="stopped",s){var e=this;this.onVisibilityChange=function(){e.visibilityChange()}}}var r,s;return"hidden"in document?(r="hidden",s="visibilitychange"):"webkitHidden"in document&&(r="webkitHidden",s="webkitvisibilitychange"),o.prototype=new t,o.prototype.play=function(){"playing"!=this.state&&(this.state="playing",s&&document.addEventListener(s,this.onVisibilityChange,!1),this.tick())},o.prototype.tick=function(){if("playing"==this.state){var t=this.parent.options.autoPlay;t="number"==typeof t?t:3e3;var e=this;this.clear(),this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},o.prototype.stop=function(){this.state="stopped",this.clear(),s&&document.removeEventListener(s,this.onVisibilityChange,!1)},o.prototype.clear=function(){clearTimeout(this.timeout)},o.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},o.prototype.unpause=function(){"paused"==this.state&&this.play()},o.prototype.visibilityChange=function(){var t=document[r];this[t?"pause":"unpause"]()},i.extend(n.defaults,{pauseAutoPlayOnHover:!0}),n.createMethods.push("_createPlayer"),n.prototype._createPlayer=function(){this.player=new o(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},n.prototype.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),e.bind(this.element,"mouseenter",this),this.isMouseenterBound=!0)},n.prototype.playPlayer=function(){this.player.play()},n.prototype.stopPlayer=function(){this.player.stop()},n.prototype.pausePlayer=function(){this.player.pause()},n.prototype.unpausePlayer=function(){this.player.unpause()},n.prototype.deactivatePlayer=function(){this.player.stop(),this.isMouseenterBound&&(e.unbind(this.element,"mouseenter",this),delete this.isMouseenterBound)},n.prototype.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),e.bind(this.element,"mouseleave",this))},n.prototype.onmouseleave=function(){this.player.unpause(),e.unbind(this.element,"mouseleave",this)},n.Player=o,n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("./flickity"),require("fizzy-ui-utils")):e(t,t.Flickity,t.fizzyUIUtils)}(window,function(t,e,i){function n(t){for(var e=document.createDocumentFragment(),i=0,n=t.length;n>i;i++){var o=t[i];e.appendChild(o.element)}return e}return e.prototype.insert=function(t,e){var i=this._makeCells(t);if(i&&i.length){var o=this.cells.length;e=void 0===e?o:e;var r=n(i),s=e==o;if(s)this.slider.appendChild(r);else{var a=this.cells[e].element;this.slider.insertBefore(r,a)}if(0===e)this.cells=i.concat(this.cells);else if(s)this.cells=this.cells.concat(i);else{var l=this.cells.splice(e,o-e);this.cells=this.cells.concat(i).concat(l)}this._sizeCells(i);var h=e>this.selectedIndex?0:i.length;this._cellAddedRemoved(e,h)}},e.prototype.append=function(t){this.insert(t,this.cells.length)},e.prototype.prepend=function(t){this.insert(t,0)},e.prototype.remove=function(t){var e,n,o,r=this.getCells(t),s=0;for(e=0,n=r.length;n>e;e++){o=r[e];var a=i.indexOf(this.cells,o)<this.selectedIndex;s-=a?1:0}for(e=0,n=r.length;n>e;e++)o=r[e],o.remove(),i.removeFrom(this.cells,o);r.length&&this._cellAddedRemoved(0,s)},e.prototype._cellAddedRemoved=function(t,e){e=e||0,this.selectedIndex+=e,this.selectedIndex=Math.max(0,Math.min(this.cells.length-1,this.selectedIndex)),this.emitEvent("cellAddedRemoved",[t,e]),this.cellChange(t,!0)},e.prototype.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var n=i.indexOf(this.cells,e);this.cellChange(n)}},e.prototype.cellChange=function(t,e){var i=this.slideableWidth;if(this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize(),this.options.freeScroll){var n=i-this.slideableWidth;this.x+=n*this.cellAlign,this.positionSlider()}else e&&this.positionSliderAtSelected(),this.select(this.selectedIndex)},e}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("flickity/js/lazyload",["classie/classie","eventie/eventie","./flickity","fizzy-ui-utils/utils"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof exports?module.exports=e(t,require("desandro-classie"),require("eventie"),require("./flickity"),require("fizzy-ui-utils")):e(t,t.classie,t.eventie,t.Flickity,t.fizzyUIUtils)}(window,function(t,e,i,n,o){"use strict";function r(t){if("IMG"==t.nodeName&&t.getAttribute("data-flickity-lazyload"))return[t];var e=t.querySelectorAll("img[data-flickity-lazyload]");return o.makeArray(e)}function s(t,e){this.img=t,this.flickity=e,this.load()}return n.createMethods.push("_createLazyload"),n.prototype._createLazyload=function(){this.on("cellSelect",this.lazyLoad)},n.prototype.lazyLoad=function(){var t=this.options.lazyLoad;if(t){for(var e="number"==typeof t?t:0,i=this.getAdjacentCellElements(e),n=[],o=0,a=i.length;a>o;o++){var l=i[o],h=r(l);n=n.concat(h)}for(o=0,a=n.length;a>o;o++){var c=n[o];new s(c,this)}}},s.prototype.handleEvent=o.handleEvent,s.prototype.load=function(){i.bind(this.img,"load",this),i.bind(this.img,"error",this),this.img.src=this.img.getAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload")},s.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")},s.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")},s.prototype.complete=function(t,n){i.unbind(this.img,"load",this),i.unbind(this.img,"error",this);var o=this.flickity.getParentCell(this.img),r=o&&o.element;this.flickity.cellSizeChange(r),e.add(this.img,n),this.flickity.dispatchEvent("lazyLoad",t,r)},n.LazyLoader=s,n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof exports&&(module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(t){return t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("flickity-as-nav-for/as-nav-for",["classie/classie","flickity/js/index","fizzy-ui-utils/utils"],function(i,n,o){return e(t,i,n,o)}):"object"==typeof exports?module.exports=e(t,require("desandro-classie"),require("flickity"),require("fizzy-ui-utils")):t.Flickity=e(t,t.classie,t.Flickity,t.fizzyUIUtils)}(window,function(t,e,i,n){return i.createMethods.push("_createAsNavFor"),i.prototype._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var t=this.options.asNavFor;if(t){var e=this;setTimeout(function(){e.setNavCompanion(t)})}},i.prototype.setNavCompanion=function(t){t=n.getQueryElement(t);var e=i.data(t);if(e&&e!=this){this.navCompanion=e;var o=this;this.onNavCompanionSelect=function(){o.navCompanionSelect()},e.on("cellSelect",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect()}},i.prototype.navCompanionSelect=function(){if(this.navCompanion){var t=this.navCompanion.selectedIndex;this.select(t),this.removeNavSelectedElement(),this.selectedIndex==t&&(this.navSelectedElement=this.cells[t].element,e.add(this.navSelectedElement,"is-nav-selected"))}},i.prototype.activateAsNavFor=function(){this.navCompanionSelect()},i.prototype.removeNavSelectedElement=function(){this.navSelectedElement&&(e.remove(this.navSelectedElement,"is-nav-selected"),delete this.navSelectedElement)},i.prototype.onNavStaticClick=function(t,e,i,n){"number"==typeof n&&this.navCompanion.select(n)},i.prototype.deactivateAsNavFor=function(){this.removeNavSelectedElement()},i.prototype.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("cellSelect",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},i}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["eventEmitter/EventEmitter","eventie/eventie"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("wolfy87-eventemitter"),require("eventie")):t.imagesLoaded=e(t,t.EventEmitter,t.eventie)}(window,function(t,e,i){function n(t,e){for(var i in e)t[i]=e[i];return t}function o(t){return"[object Array]"==p.call(t)}function r(t){var e=[];if(o(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function s(t,e,i){if(!(this instanceof s))return new s(t,e,i);"string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=r(t),this.options=n({},this.options),"function"==typeof e?i=e:n(this.options,e),i&&this.on("always",i),this.getImages(),h&&(this.jqDeferred=new h.Deferred);var o=this;setTimeout(function(){o.check()})}function a(t){this.img=t}function l(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,c=t.console,p=Object.prototype.toString;s.prototype=new e,s.prototype.options={},s.prototype.getImages=function(){this.images=[];for(var t=0;t<this.elements.length;t++){var e=this.elements[t];this.addElementImages(e)}},s.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};s.prototype.addElementBackgroundImages=function(t){for(var e=u(t),i=/url\(['"]*([^'"\)]+)['"]*\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[1];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}};var u=t.getComputedStyle||function(t){return t.currentStyle};return s.prototype.addImage=function(t){var e=new a(t);this.images.push(e)},s.prototype.addBackground=function(t,e){var i=new l(t,e);this.images.push(i)},s.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length)return void this.complete();for(var i=0;i<this.images.length;i++){var n=this.images[i];n.once("progress",t),n.check()}},s.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emit("progress",this,t,e),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&c&&c.log("progress: "+i,t,e)},s.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emit(t,this),this.emit("always",this),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},a.prototype=new e,a.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,i.bind(this.proxyImage,"load",this),i.bind(this.proxyImage,"error",this),i.bind(this.img,"load",this),i.bind(this.img,"error",this),void(this.proxyImage.src=this.img.src))},a.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},a.prototype.confirm=function(t,e){this.isLoaded=t,this.emit("progress",this,this.img,e)},a.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},a.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},a.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},a.prototype.unbindEvents=function(){i.unbind(this.proxyImage,"load",this),i.unbind(this.proxyImage,"error",this),i.unbind(this.img,"load",this),i.unbind(this.img,"error",this)},l.prototype=new a,l.prototype.check=function(){i.bind(this.img,"load",this),i.bind(this.img,"error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},l.prototype.unbindEvents=function(){i.unbind(this.img,"load",this),i.unbind(this.img,"error",this)},l.prototype.confirm=function(t,e){this.isLoaded=t,this.emit("progress",this,this.element,e)},s.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new s(this,t,e);return i.jqDeferred.promise(h(this))})},s.makeJQueryPlugin(),s}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(i,n){return e(t,i,n)}):"object"==typeof exports?module.exports=e(t,require("flickity"),require("imagesloaded")):t.Flickity=e(t,t.Flickity,t.imagesLoaded)}(window,function(t,e,i){"use strict";return e.createMethods.push("_createImagesLoaded"),e.prototype._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},e.prototype.imagesLoaded=function(){function t(t,i){var n=e.getParentCell(i.img);e.cellSizeChange(n&&n.element),e.options.freeScroll||e.positionSliderAtSelected()}if(this.options.imagesLoaded){var e=this;i(this.slider).on("progress",t)}},e});
*/
            
/*-----------  Updated flickity JS -----------------*/
!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";var i=Array.prototype.slice,n=t.console,s=void 0===n?function(){}:function(t){n.error(t)};function o(n,o,a){(a=a||e||t.jQuery)&&(o.prototype.option||(o.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[n]=function(t){if("string"==typeof t){var e=i.call(arguments,1);return h=e,d="$()."+n+'("'+(l=t)+'")',(r=this).each(function(t,e){var i=a.data(e,n);if(i){var o=i[l];if(o&&"_"!=l.charAt(0)){var r=o.apply(i,h);c=void 0===c?r:c}else s(d+" is not a valid method")}else s(n+" not initialized. Cannot call methods, i.e. "+d)}),void 0!==c?c:r}var r,l,h,c,d,u;return u=t,this.each(function(t,e){var i=a.data(e,n);i?(i.option(u),i._init()):(i=new o(e,u),a.data(e,n,i))}),this},r(a))}function r(t){!t||t&&t.bridget||(t.bridget=o)}return r(e||t.jQuery),o}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],s=0;s<i.length;s++){var o=i[s];n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var e="undefined"==typeof console?function(){}:function(t){console.error(t)},i=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],n=i.length;function s(t){var i=getComputedStyle(t);return i||e("Style returned "+i+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),i}var o,r=!1;function a(e){if(function(){if(!r){r=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var n=s(e);o=200==Math.round(t(n.width)),a.isBoxSizeOuter=o,i.removeChild(e)}}(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var l=s(e);if("none"==l.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<n;e++)t[i[e]]=0;return t}();var h={};h.width=e.offsetWidth,h.height=e.offsetHeight;for(var c=h.isBorderBox="border-box"==l.boxSizing,d=0;d<n;d++){var u=i[d],f=l[u],p=parseFloat(f);h[u]=isNaN(p)?0:p}var g=h.paddingLeft+h.paddingRight,v=h.paddingTop+h.paddingBottom,m=h.marginLeft+h.marginRight,y=h.marginTop+h.marginBottom,b=h.borderLeftWidth+h.borderRightWidth,E=h.borderTopWidth+h.borderBottomWidth,S=c&&o,C=t(l.width);!1!==C&&(h.width=C+(S?0:g+b));var x=t(l.height);return!1!==x&&(h.height=x+(S?0:v+E)),h.innerWidth=h.width-(g+b),h.innerHeight=h.height-(v+E),h.outerWidth=h.width+m,h.outerHeight=h.height+y,h}}return a}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},n=Array.prototype.slice;i.makeArray=function(t){return Array.isArray(t)?t:null===t||void 0===t?[]:"object"==typeof t&&"number"==typeof t.length?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){var s=[];return(t=i.makeArray(t)).forEach(function(t){if(t instanceof HTMLElement)if(n){e(t,n)&&s.push(t);for(var i=t.querySelectorAll(n),o=0;o<i.length;o++)s.push(i[o])}else s.push(t)}),s},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],s=e+"Timeout";t.prototype[e]=function(){var t=this[s];clearTimeout(t);var e=arguments,o=this;this[s]=setTimeout(function(){n.apply(o,e),delete o[s]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var s=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var o=i.toDashed(n),r="data-"+o,a=document.querySelectorAll("["+r+"]"),l=document.querySelectorAll(".js-"+o),h=i.makeArray(a).concat(i.makeArray(l)),c=r+"-options",d=t.jQuery;h.forEach(function(t){var i,o=t.getAttribute(r)||t.getAttribute(c);try{i=o&&JSON.parse(o)}catch(e){return void(s&&s.error("Error parsing "+r+" on "+t.className+": "+e))}var a=new e(t,i);d&&d.data(t,n,a)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("get-size")):(t.Flickity=t.Flickity||{},t.Flickity.Cell=e(t,t.getSize))}(window,function(t,e){function i(t,e){this.element=t,this.parent=e,this.create()}var n=i.prototype;return n.create=function(){this.element.style.position="absolute",this.element.setAttribute("aria-selected","false"),this.x=0,this.shift=0},n.destroy=function(){this.element.style.position="";var t=this.parent.originSide;this.element.removeAttribute("aria-selected"),this.element.style[t]=""},n.getSize=function(){this.size=e(this.element)},n.setPosition=function(t){this.x=t,this.updateTarget(),this.renderPosition(t)},n.updateTarget=n.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},n.renderPosition=function(t){var e=this.parent.originSide;this.element.style[e]=this.parent.getPositionValue(t)},n.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},n.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/slide",e):"object"==typeof module&&module.exports?module.exports=e():(t.Flickity=t.Flickity||{},t.Flickity.Slide=e())}(window,function(){"use strict";function t(t){this.parent=t,this.isOriginLeft="left"==t.originSide,this.cells=[],this.outerWidth=0,this.height=0}var e=t.prototype;return e.addCell=function(t){if(this.cells.push(t),this.outerWidth+=t.size.outerWidth,this.height=Math.max(t.size.outerHeight,this.height),1==this.cells.length){this.x=t.x;var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}},e.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft",e=this.getLastCell(),i=e?e.size[t]:0,n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign},e.getLastCell=function(){return this.cells[this.cells.length-1]},e.select=function(){this.changeSelected(!0)},e.unselect=function(){this.changeSelected(!1)},e.changeSelected=function(t){var e=t?"add":"remove";this.cells.forEach(function(i){i.element.classList[e]("is-selected"),i.element.setAttribute("aria-selected",t.toString())})},e.getCellElements=function(){return this.cells.map(function(t){return t.element})},t}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/animate",["fizzy-ui-utils/utils"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("fizzy-ui-utils")):(t.Flickity=t.Flickity||{},t.Flickity.animatePrototype=e(t,t.fizzyUIUtils))}(window,function(t,e){var i={startAnimation:function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},animate:function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;requestAnimationFrame(function(){e.animate()})}},positionSlider:function(){var t=this.x;this.options.wrapAround&&this.cells.length>1&&(t=e.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),t+=this.cursorPosition,t=this.options.rightToLeft?-t:t;var i=this.getPositionValue(t);this.slider.style.transform=this.isAnimating?"translate3d("+i+",0,0)":"translateX("+i+")";var n=this.slides[0];if(n){var s=-this.x-n.target,o=s/this.slidesWidth;this.dispatchEvent("scroll",null,[o,s])}},positionSliderAtSelected:function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},getPositionValue:function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},settle:function(t){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*t)||this.restingFrames++,this.restingFrames>2&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},shiftWrapCells:function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},_shiftCells:function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n],o=e>0?i:0;s.wrapShift(o),e-=s.size.outerWidth}},_unshiftCells:function(t){if(t&&t.length)for(var e=0;e<t.length;e++)t[e].wrapShift(0)},integratePhysics:function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},applyForce:function(t){this.velocity+=t},getFrictionFactor:function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},getRestingPosition:function(){return this.x+this.velocity/(1-this.getFrictionFactor())},applyDragForce:function(){if(this.isDraggable&&this.isPointerDown){var t=this.dragX-this.x-this.velocity;this.applyForce(t)}},applySelectedAttraction:function(){if(!(this.isDraggable&&this.isPointerDown)&&!this.isFreeScrolling&&this.slides.length){var t=(-1*this.selectedSlide.target-this.x)*this.options.selectedAttraction;this.applyForce(t)}}};return i}),function(t,e){if("function"==typeof define&&define.amd)define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(i,n,s,o,r,a){return e(t,i,n,s,o,r,a)});else if("object"==typeof module&&module.exports)module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"));else{var i=t.Flickity;t.Flickity=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,i.Cell,i.Slide,i.animatePrototype)}}(window,function(t,e,i,n,s,o,r){var a=t.jQuery,l=t.getComputedStyle,h=t.console;function c(t,e){for(t=n.makeArray(t);t.length;)e.appendChild(t.shift())}var d=0,u={};function f(t,e){var i=n.getQueryElement(t);if(i){if(this.element=i,this.element.flickityGUID){var s=u[this.element.flickityGUID];return s.option(e),s}a&&(this.$element=a(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e),this._create()}else h&&h.error("Bad element for Flickity: "+(i||t))}f.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},f.createMethods=[];var p=f.prototype;n.extend(p,e.prototype),p._create=function(){var e=this.guid=++d;this.element.flickityGUID=e,u[e]=this,this.selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&t.addEventListener("resize",this);for(var i in this.options.on){var n=this.options.on[i];this.on(i,n)}f.createMethods.forEach(function(t){this[t]()},this),this.options.watchCSS?this.watchCSS():this.activate()},p.option=function(t){n.extend(this.options,t)},p.activate=function(){if(!this.isActive){var t;this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize(),c(this._filterFindCellElements(this.element.children),this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate");var e=this.options.initialIndex;t=this.isInitActivated?this.selectedIndex:void 0!==e&&this.cells[e]?e:0,this.select(t,!1,!0),this.isInitActivated=!0,this.dispatchEvent("ready")}},p._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider",t.style[this.originSide]=0,this.slider=t},p._filterFindCellElements=function(t){return n.filterFindElements(t,this.options.cellSelector)},p.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},p._makeCells=function(t){return this._filterFindCellElements(t).map(function(t){return new s(t,this)},this)},p.getLastCell=function(){return this.cells[this.cells.length-1]},p.getLastSlide=function(){return this.slides[this.slides.length-1]},p.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},p._positionCells=function(t){t=t||0,this.maxCellHeight=t&&this.maxCellHeight||0;var e=0;if(t>0){var i=this.cells[t-1];e=i.x+i.size.outerWidth}for(var n=this.cells.length,s=t;s<n;s++){var o=this.cells[s];o.setPosition(e),e+=o.size.outerWidth,this.maxCellHeight=Math.max(o.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e,this.updateSlides(),this._containSlides(),this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0},p._sizeCells=function(t){t.forEach(function(t){t.getSize()})},p.updateSlides=function(){if(this.slides=[],this.cells.length){var t=new o(this);this.slides.push(t);var e="left"==this.originSide?"marginRight":"marginLeft",i=this._getCanCellFit();this.cells.forEach(function(n,s){if(t.cells.length){var r=t.outerWidth-t.firstMargin+(n.size.outerWidth-n.size[e]);i.call(this,s,r)?t.addCell(n):(t.updateTarget(),t=new o(this),this.slides.push(t),t.addCell(n))}else t.addCell(n)},this),t.updateTarget(),this.updateSelectedSlide()}},p._getCanCellFit=function(){var t=this.options.groupCells;if(!t)return function(){return!1};if("number"==typeof t){var e=parseInt(t,10);return function(t){return t%e!=0}}var i="string"==typeof t&&t.match(/^(\d+)%$/),n=i?parseInt(i[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*n}},p._init=p.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},p.getSize=function(){this.size=i(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var g={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};return p.setCellAlign=function(){var t=g[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},p.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=t+"px"}},p._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},p._getGapCells=function(t,e,i){for(var n=[];t>0;){var s=this.cells[e];if(!s)break;n.push(s),e+=i,t-=s.size.outerWidth}return n},p._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var t=this.options.rightToLeft,e=t?"marginRight":"marginLeft",i=t?"marginLeft":"marginRight",n=this.slideableWidth-this.getLastCell().size[i],s=n<this.size.innerWidth,o=this.cursorPosition+this.cells[0].size[e],r=n-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(t){s?t.target=n*this.cellAlign:(t.target=Math.max(t.target,o),t.target=Math.min(t.target,r))},this)}},p.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),a&&this.$element){var s=t+=this.options.namespaceJQueryEvents?".flickity":"";if(e){var o=a.Event(e);o.type=t,s=o}this.$element.trigger(s,i)}},p.select=function(t,e,i){if(this.isActive&&(t=parseInt(t,10),this._wrapSelect(t),(this.options.wrapAround||e)&&(t=n.modulo(t,this.slides.length)),this.slides[t])){var s=this.selectedIndex;this.selectedIndex=t,this.updateSelectedSlide(),i?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select",null,[t]),t!=s&&this.dispatchEvent("change",null,[t]),this.dispatchEvent("cellSelect")}},p._wrapSelect=function(t){var e=this.slides.length;if(!(this.options.wrapAround&&e>1))return t;var i=n.modulo(t,e),s=Math.abs(i-this.selectedIndex),o=Math.abs(i+e-this.selectedIndex),r=Math.abs(i-e-this.selectedIndex);!this.isDragSelect&&o<s?t+=e:!this.isDragSelect&&r<s&&(t-=e),t<0?this.x-=this.slideableWidth:t>=e&&(this.x+=this.slideableWidth)},p.previous=function(t,e){this.select(this.selectedIndex-1,t,e)},p.next=function(t,e){this.select(this.selectedIndex+1,t,e)},p.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];t&&(this.unselectSelectedSlide(),this.selectedSlide=t,t.select(),this.selectedCells=t.cells,this.selectedElements=t.getCellElements(),this.selectedCell=t.cells[0],this.selectedElement=this.selectedElements[0])},p.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},p.selectCell=function(t,e,i){var n=this.queryCell(t);if(n){var s=this.getCellSlideIndex(n);this.select(s,e,i)}},p.getCellSlideIndex=function(t){for(var e=0;e<this.slides.length;e++){if(-1!=this.slides[e].cells.indexOf(t))return e}},p.getCell=function(t){for(var e=0;e<this.cells.length;e++){var i=this.cells[e];if(i.element==t)return i}},p.getCells=function(t){var e=[];return(t=n.makeArray(t)).forEach(function(t){var i=this.getCell(t);i&&e.push(i)},this),e},p.getCellElements=function(){return this.cells.map(function(t){return t.element})},p.getParentCell=function(t){var e=this.getCell(t);return e||(t=n.getParent(t,".flickity-slider > *"),this.getCell(t))},p.getAdjacentCellElements=function(t,e){if(!t)return this.selectedSlide.getCellElements();e=void 0===e?this.selectedIndex:e;var i=this.slides.length;if(1+2*t>=i)return this.getCellElements();for(var s=[],o=e-t;o<=e+t;o++){var r=this.options.wrapAround?n.modulo(o,i):o,a=this.slides[r];a&&(s=s.concat(a.getCellElements()))}return s},p.queryCell=function(t){return"number"==typeof t?this.cells[t]:("string"==typeof t&&(t=this.element.querySelector(t)),this.getCell(t))},p.uiChange=function(){this.emitEvent("uiChange")},p.childUIPointerDown=function(t){this.emitEvent("childUIPointerDown",[t])},p.onresize=function(){this.watchCSS(),this.resize()},n.debounceMethod(f,"onresize",150),p.resize=function(){if(this.isActive){this.getSize(),this.options.wrapAround&&(this.x=n.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,!1,!0)}},p.watchCSS=function(){this.options.watchCSS&&(-1!=l(this.element,":after").content.indexOf("flickity")?this.activate():this.deactivate())},p.onkeydown=function(t){var e=document.activeElement&&document.activeElement!=this.element;if(this.options.accessibility&&!e){var i=f.keyboardHandlers[t.keyCode];i&&i.call(this)}},f.keyboardHandlers={37:function(){var t=this.options.rightToLeft?"next":"previous";this.uiChange(),this[t]()},39:function(){var t=this.options.rightToLeft?"previous":"next";this.uiChange(),this[t]()}},p.focus=function(){var e=t.pageYOffset;this.element.focus({preventScroll:!0}),t.pageYOffset!=e&&t.scrollTo(t.pageXOffset,e)},p.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),this.cells.forEach(function(t){t.destroy()}),this.element.removeChild(this.viewport),c(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},p.destroy=function(){this.deactivate(),t.removeEventListener("resize",this),this.emitEvent("destroy"),a&&this.$element&&a.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete u[this.guid]},n.extend(p,r),f.data=function(t){var e=(t=n.getQueryElement(t))&&t.flickityGUID;return e&&u[e]},n.htmlInit(f,"flickity"),a&&a.bridget&&a.bridget("flickity",f),f.setJQuery=function(t){a=t},f.Cell=s,f}),function(t,e){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.Unipointer=e(t,t.EvEmitter)}(window,function(t,e){function i(){}var n=i.prototype=Object.create(e.prototype);n.bindStartEvent=function(t){this._bindStartEvent(t,!0)},n.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},n._bindStartEvent=function(e,i){var n=(i=void 0===i||i)?"addEventListener":"removeEventListener",s="mousedown";t.PointerEvent?s="pointerdown":"ontouchstart"in t&&(s="touchstart"),e[n](s,this)},n.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},n.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier)return i}},n.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},n.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},n.onpointerdown=function(t){this._pointerDown(t,t)},n._pointerDown=function(t,e){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},n.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var s={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return n._bindPostStartEvents=function(e){if(e){var i=s[e.type];i.forEach(function(e){t.addEventListener(e,this)},this),this._boundPointerEvents=i}},n._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(e){t.removeEventListener(e,this)},this),delete this._boundPointerEvents)},n.onmousemove=function(t){this._pointerMove(t,t)},n.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},n.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},n._pointerMove=function(t,e){this.pointerMove(t,e)},n.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},n.onmouseup=function(t){this._pointerUp(t,t)},n.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},n.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},n._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},n.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},n._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},n._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},n.pointerDone=function(){},n.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},n.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},n._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},n.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},i.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},i}),function(t,e){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("unipointer")):t.Unidragger=e(t,t.Unipointer)}(window,function(t,e){function i(){}var n=i.prototype=Object.create(e.prototype);n.bindHandles=function(){this._bindHandles(!0)},n.unbindHandles=function(){this._bindHandles(!1)},n._bindHandles=function(e){for(var i=(e=void 0===e||e)?"addEventListener":"removeEventListener",n=e?this._touchActionValue:"",s=0;s<this.handles.length;s++){var o=this.handles[s];this._bindStartEvent(o,e),o[i]("click",this),t.PointerEvent&&(o.style.touchAction=n)}},n._touchActionValue="none",n.pointerDown=function(t,e){this.okayPointerDown(t)&&(this.pointerDownPointer=e,t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e]))};var s={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},o={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return n.okayPointerDown=function(t){var e=s[t.target.nodeName],i=o[t.target.type],n=!e||i;return n||this._pointerReset(),n},n.pointerDownBlur=function(){var t=document.activeElement;t&&t.blur&&t!=document.body&&t.blur()},n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},n._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(i)&&this._dragStart(t,e),i},n.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},n.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},n._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},n._dragStart=function(t,e){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,e)},n.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},n._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},n.dragMove=function(t,e,i){t.preventDefault(),this.emitEvent("dragMove",[t,e,i])},n._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},n.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},n.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},n._staticClick=function(t,e){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},n.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},i.getPointerPoint=e.getPointerPoint,i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(i,n,s){return e(t,i,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):t.Flickity=e(t,t.Flickity,t.Unidragger,t.fizzyUIUtils)}(window,function(t,e,i,n){n.extend(e.defaults,{draggable:">1",dragThreshold:3}),e.createMethods.push("_createDrag");var s=e.prototype;n.extend(s,i.prototype),s._touchActionValue="pan-y";var o="createTouch"in document,r=!1;s._createDrag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("childUIPointerDown",this._childUIPointerDownDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable),o&&!r&&(t.addEventListener("touchmove",function(){}),r=!0)},s.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},s.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},s.updateDraggable=function(){">1"==this.options.draggable?this.isDraggable=this.slides.length>1:this.isDraggable=this.options.draggable,this.isDraggable?this.element.classList.add("is-draggable"):this.element.classList.remove("is-draggable")},s.bindDrag=function(){this.options.draggable=!0,this.updateDraggable()},s.unbindDrag=function(){this.options.draggable=!1,this.updateDraggable()},s._uiChangeDrag=function(){delete this.isFreeScrolling},s._childUIPointerDownDrag=function(t){t.preventDefault(),this.pointerDownFocus(t)},s.pointerDown=function(e,i){this.isDraggable?this.okayPointerDown(e)&&(this._pointerDownPreventDefault(e),this.pointerDownFocus(e),document.activeElement!=this.element&&this.pointerDownBlur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=l(),t.addEventListener("scroll",this),this._pointerDownDefault(e,i)):this._pointerDownDefault(e,i)},s._pointerDownDefault=function(t,e){this.pointerDownPointer=e,this._bindPostStartEvents(t),this.dispatchEvent("pointerDown",t,[e])};var a={INPUT:!0,TEXTAREA:!0,SELECT:!0};function l(){return{x:t.pageXOffset,y:t.pageYOffset}}return s.pointerDownFocus=function(t){a[t.target.nodeName]||this.focus()},s._pointerDownPreventDefault=function(t){var e="touchstart"==t.type,i="touch"==t.pointerType,n=a[t.target.nodeName];e||i||n||t.preventDefault()},s.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold},s.pointerUp=function(t,e){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[e]),this._dragPointerUp(t,e)},s.pointerDone=function(){t.removeEventListener("scroll",this),delete this.pointerDownScroll},s.dragStart=function(e,i){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),t.removeEventListener("scroll",this),this.dispatchEvent("dragStart",e,[i]))},s.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,i]),this._dragMove(t,e,i)},s.dragMove=function(t,e,i){if(this.isDraggable){t.preventDefault(),this.previousDragX=this.dragX;var n=this.options.rightToLeft?-1:1;this.options.wrapAround&&(i.x=i.x%this.slideableWidth);var s=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.slides.length){var o=Math.max(-this.slides[0].target,this.dragStartPosition);s=s>o?.5*(s+o):s;var r=Math.min(-this.getLastSlide().target,this.dragStartPosition);s=s<r?.5*(s+r):s}this.dragX=s,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",t,[e,i])}},s.dragEnd=function(t,e){if(this.isDraggable){this.options.freeScroll&&(this.isFreeScrolling=!0);var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition();this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(i),delete this.isDragSelect,this.dispatchEvent("dragEnd",t,[e])}},s.dragEndRestingSelect=function(){var t=this.getRestingPosition(),e=Math.abs(this.getSlideDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1);return i.distance<n.distance?i.index:n.index},s._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,s=1/0,o=this.options.contain&&!this.options.wrapAround?function(t,e){return t<=e}:function(t,e){return t<e};o(e,s)&&(n+=i,s=e,null!==(e=this.getSlideDistance(-t,n)));)e=Math.abs(e);return{distance:s,index:n-i}},s.getSlideDistance=function(t,e){var i=this.slides.length,s=this.options.wrapAround&&i>1,o=s?n.modulo(e,i):e,r=this.slides[o];if(!r)return null;var a=s?this.slideableWidth*Math.floor(e/i):0;return t-(r.target+a)},s.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||new Date-this.dragMoveTime>100)return 0;var t=this.getSlideDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return t>0&&e>0?1:t<0&&e<0?-1:0},s.staticClick=function(t,e){var i=this.getParentCell(t.target),n=i&&i.element,s=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",t,[e,n,s])},s.onscroll=function(){var t=l(),e=this.pointerDownScroll.x-t.x,i=this.pointerDownScroll.y-t.y;(Math.abs(e)>3||Math.abs(i)>3)&&this._pointerDone()},e}),function(t,e){"function"==typeof define&&define.amd?define("tap-listener/tap-listener",["unipointer/unipointer"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("unipointer")):t.TapListener=e(t,t.Unipointer)}(window,function(t,e){function i(t){this.bindTap(t)}var n=i.prototype=Object.create(e.prototype);return n.bindTap=function(t){t&&(this.unbindTap(),this.tapElement=t,this._bindStartEvent(t,!0))},n.unbindTap=function(){this.tapElement&&(this._bindStartEvent(this.tapElement,!0),delete this.tapElement)},n.pointerUp=function(i,n){if(!this.isIgnoringMouseUp||"mouseup"!=i.type){var s=e.getPointerPoint(n),o=this.tapElement.getBoundingClientRect(),r=t.pageXOffset,a=t.pageYOffset;if(s.x>=o.left+r&&s.x<=o.right+r&&s.y>=o.top+a&&s.y<=o.bottom+a&&this.emitEvent("tap",[i,n]),"mouseup"!=i.type){this.isIgnoringMouseUp=!0;var l=this;setTimeout(function(){delete l.isIgnoringMouseUp},400)}}},n.destroy=function(){this.pointerDone(),this.unbindTap()},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/prev-next-button",["./flickity","tap-listener/tap-listener","fizzy-ui-utils/utils"],function(i,n,s){return e(t,i,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("tap-listener"),require("fizzy-ui-utils")):e(t,t.Flickity,t.TapListener,t.fizzyUIUtils)}(window,function(t,e,i,n){"use strict";var s="http://www.w3.org/2000/svg";function o(t,e){this.direction=t,this.parent=e,this._create()}o.prototype=Object.create(i.prototype),o.prototype._create=function(){this.isEnabled=!0,this.isPrevious=-1==this.direction;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickity-button flickity-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),this.disable(),e.setAttribute("aria-label",this.isPrevious?"Previous":"Next");var i=this.createSVG();e.appendChild(i),this.on("tap",this.onTap),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},o.prototype.activate=function(){this.bindTap(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},o.prototype.deactivate=function(){this.parent.element.removeChild(this.element),i.prototype.destroy.call(this),this.element.removeEventListener("click",this)},o.prototype.createSVG=function(){var t=document.createElementNS(s,"svg");t.setAttribute("class","flickity-button-icon"),t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(s,"path"),i=function(t){if("string"==typeof t)return t;return"M "+t.x0+",50 L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50  L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z"}(this.parent.options.arrowShape);return e.setAttribute("d",i),e.setAttribute("class","arrow"),this.isLeft||e.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(e),t},o.prototype.onTap=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},o.prototype.handleEvent=n.handleEvent,o.prototype.onclick=function(t){var e=document.activeElement;e&&e==this.element&&this.onTap(t,t)},o.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},o.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},o.prototype.update=function(){var t=this.parent.slides;if(this.parent.options.wrapAround&&t.length>1)this.enable();else{var e=t.length?t.length-1:0,i=this.isPrevious?0:e;this[this.parent.selectedIndex==i?"disable":"enable"]()}},o.prototype.destroy=function(){this.deactivate()},n.extend(e.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),e.createMethods.push("_createPrevNextButtons");var r=e.prototype;return r._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new o(-1,this),this.nextButton=new o(1,this),this.on("activate",this.activatePrevNextButtons))},r.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},r.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},e.PrevNextButton=o,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/page-dots",["./flickity","tap-listener/tap-listener","fizzy-ui-utils/utils"],function(i,n,s){return e(t,i,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("tap-listener"),require("fizzy-ui-utils")):e(t,t.Flickity,t.TapListener,t.fizzyUIUtils)}(window,function(t,e,i,n){function s(t){this.parent=t,this._create()}s.prototype=new i,s.prototype._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",this.dots=[],this.on("tap",this.onTap),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.setDots(),this.bindTap(this.holder),this.parent.element.appendChild(this.holder)},s.prototype.deactivate=function(){this.parent.element.removeChild(this.holder),i.prototype.destroy.call(this)},s.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length;t>0?this.addDots(t):t<0&&this.removeDots(-t)},s.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[],n=this.dots.length,s=n+t,o=n;o<s;o++){var r=document.createElement("li");r.className="dot",r.setAttribute("aria-label","Page dot "+(o+1)),e.appendChild(r),i.push(r)}this.holder.appendChild(e),this.dots=this.dots.concat(i)},s.prototype.removeDots=function(t){this.dots.splice(this.dots.length-t,t).forEach(function(t){this.holder.removeChild(t)},this)},s.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot",this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected",this.selectedDot.setAttribute("aria-current","step"))},s.prototype.onTap=function(t){var e=t.target;if("LI"==e.nodeName){this.parent.uiChange();var i=this.dots.indexOf(e);this.parent.select(i)}},s.prototype.destroy=function(){this.deactivate()},e.PageDots=s,n.extend(e.defaults,{pageDots:!0}),e.createMethods.push("_createPageDots");var o=e.prototype;return o._createPageDots=function(){this.options.pageDots&&(this.pageDots=new s(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},o.activatePageDots=function(){this.pageDots.activate()},o.updateSelectedPageDots=function(){this.pageDots.updateSelected()},o.updatePageDots=function(){this.pageDots.setDots()},o.deactivatePageDots=function(){this.pageDots.deactivate()},e.PageDots=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],function(t,i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity")):e(t.EvEmitter,t.fizzyUIUtils,t.Flickity)}(window,function(t,e,i){function n(t){this.parent=t,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}n.prototype=Object.create(t.prototype),n.prototype.play=function(){"playing"!=this.state&&(document.hidden?document.addEventListener("visibilitychange",this.onVisibilityPlay):(this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()))},n.prototype.tick=function(){if("playing"==this.state){var t=this.parent.options.autoPlay;t="number"==typeof t?t:3e3;var e=this;this.clear(),this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},n.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},n.prototype.unpause=function(){"paused"==this.state&&this.play()},n.prototype.visibilityChange=function(){this[document.hidden?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},e.extend(i.defaults,{pauseAutoPlayOnHover:!0}),i.createMethods.push("_createPlayer");var s=i.prototype;return s._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},s.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},s.playPlayer=function(){this.player.play()},s.stopPlayer=function(){this.player.stop()},s.pausePlayer=function(){this.player.pause()},s.unpausePlayer=function(){this.player.unpause()},s.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},s.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},s.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},i.Player=n,i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("fizzy-ui-utils")):e(t,t.Flickity,t.fizzyUIUtils)}(window,function(t,e,i){var n=e.prototype;return n.insert=function(t,e){var i=this._makeCells(t);if(i&&i.length){var n=this.cells.length;e=void 0===e?n:e;var s,o,r=(s=i,o=document.createDocumentFragment(),s.forEach(function(t){o.appendChild(t.element)}),o),a=e==n;if(a)this.slider.appendChild(r);else{var l=this.cells[e].element;this.slider.insertBefore(r,l)}if(0===e)this.cells=i.concat(this.cells);else if(a)this.cells=this.cells.concat(i);else{var h=this.cells.splice(e,n-e);this.cells=this.cells.concat(i).concat(h)}this._sizeCells(i),this.cellChange(e,!0)}},n.append=function(t){this.insert(t,this.cells.length)},n.prepend=function(t){this.insert(t,0)},n.remove=function(t){var e=this.getCells(t);if(e&&e.length){var n=this.cells.length-1;e.forEach(function(t){t.remove();var e=this.cells.indexOf(t);n=Math.min(e,n),i.removeFrom(this.cells,t)},this),this.cellChange(n,!0)}},n.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var i=this.cells.indexOf(e);this.cellChange(i)}},n.cellChange=function(t,e){var i=this.selectedElement;this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize();var n=this.getCell(i);n&&(this.selectedIndex=this.getCellSlideIndex(n)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[t]),this.select(this.selectedIndex),e&&this.positionSliderAtSelected()},e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("fizzy-ui-utils")):e(t,t.Flickity,t.fizzyUIUtils)}(window,function(t,e,i){"use strict";e.createMethods.push("_createLazyload");var n=e.prototype;function s(t,e){this.img=t,this.flickity=e,this.load()}return n._createLazyload=function(){this.on("select",this.lazyLoad)},n.lazyLoad=function(){var t=this.options.lazyLoad;if(t){var e="number"==typeof t?t:0,n=[];this.getAdjacentCellElements(e).forEach(function(t){var e=function(t){if("IMG"==t.nodeName){var e=t.getAttribute("data-flickity-lazyload"),n=t.getAttribute("data-flickity-lazyload-src"),s=t.getAttribute("data-flickity-lazyload-srcset");if(e||n||s)return[t]}var o=t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");return i.makeArray(o)}(t);n=n.concat(e)}),n.forEach(function(t){new s(t,this)},this)}},s.prototype.handleEvent=i.handleEvent,s.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);var t=this.img.getAttribute("data-flickity-lazyload")||this.img.getAttribute("data-flickity-lazyload-src"),e=this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src=t,e&&this.img.setAttribute("srcset",e),this.img.removeAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload-src"),this.img.removeAttribute("data-flickity-lazyload-srcset")},s.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")},s.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")},s.prototype.complete=function(t,e){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);var i=this.flickity.getParentCell(this.img),n=i&&i.element;this.flickity.cellSizeChange(n),this.img.classList.add(e),this.flickity.dispatchEvent("lazyLoad",t,n)},e.LazyLoader=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(t){return t}),function(t,e){"function"==typeof define&&define.amd?define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickity"),require("fizzy-ui-utils")):t.Flickity=e(t.Flickity,t.fizzyUIUtils)}(window,function(t,e){t.createMethods.push("_createAsNavFor");var i=t.prototype;return i._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var t=this.options.asNavFor;if(t){var e=this;setTimeout(function(){e.setNavCompanion(t)})}},i.setNavCompanion=function(i){i=e.getQueryElement(i);var n=t.data(i);if(n&&n!=this){this.navCompanion=n;var s=this;this.onNavCompanionSelect=function(){s.navCompanionSelect()},n.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0)}},i.navCompanionSelect=function(t){if(this.navCompanion){var e,i,n,s=this.navCompanion.selectedCells[0],o=this.navCompanion.cells.indexOf(s),r=o+this.navCompanion.selectedCells.length-1,a=Math.floor((e=o,i=r,n=this.navCompanion.cellAlign,(i-e)*n+e));if(this.selectCell(a,!1,t),this.removeNavSelectedElements(),!(a>=this.cells.length)){var l=this.cells.slice(o,r+1);this.navSelectedElements=l.map(function(t){return t.element}),this.changeNavSelectedClass("add")}}},i.changeNavSelectedClass=function(t){this.navSelectedElements.forEach(function(e){e.classList[t]("is-nav-selected")})},i.activateAsNavFor=function(){this.navCompanionSelect(!0)},i.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},i.onNavStaticClick=function(t,e,i,n){"number"==typeof n&&this.navCompanion.selectCell(n)},i.deactivateAsNavFor=function(){this.removeNavSelectedElements()},i.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}("undefined"!=typeof window?window:this,function(t,e){var i=t.jQuery,n=t.console;function s(t,e){for(var i in e)t[i]=e[i];return t}var o=Array.prototype.slice;function r(t,e,a){if(!(this instanceof r))return new r(t,e,a);var l,h=t;("string"==typeof t&&(h=document.querySelectorAll(t)),h)?(this.elements=(l=h,Array.isArray(l)?l:"object"==typeof l&&"number"==typeof l.length?o.call(l):[l]),this.options=s({},this.options),"function"==typeof e?a=e:s(this.options,e),a&&this.on("always",a),this.getImages(),i&&(this.jqDeferred=new i.Deferred),setTimeout(this.check.bind(this))):n.error("Bad element for imagesLoaded "+(h||t))}r.prototype=Object.create(e.prototype),r.prototype.options={},r.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},r.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&a[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var s=i[n];this.addImage(s)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(n=0;n<o.length;n++){var r=o[n];this.addElementBackgroundImages(r)}}}};var a={1:!0,9:!0,11:!0};function l(t){this.img=t}function h(t,e){this.url=t,this.element=e,this.img=new Image}return r.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var s=n&&n[2];s&&this.addBackground(s,t),n=i.exec(e.backgroundImage)}},r.prototype.addImage=function(t){var e=new l(t);this.images.push(e)},r.prototype.addBackground=function(t,e){var i=new h(t,e);this.images.push(i)},r.prototype.check=function(){var t=this;function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(t){t.once("progress",e),t.check()}):this.complete()},r.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&n&&n.log("progress: "+i,t,e)},r.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},l.prototype=Object.create(e.prototype),l.prototype.check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},l.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},l.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},l.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},l.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},l.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},l.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},h.prototype=Object.create(l.prototype),h.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},h.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},h.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},r.makeJQueryPlugin=function(e){(e=e||t.jQuery)&&((i=e).fn.imagesLoaded=function(t,e){return new r(this,t,e).jqDeferred.promise(i(this))})},r.makeJQueryPlugin(),r}),function(t,e){"function"==typeof define&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("flickity"),require("imagesloaded")):t.Flickity=e(t,t.Flickity,t.imagesLoaded)}(window,function(t,e,i){"use strict";e.createMethods.push("_createImagesLoaded");var n=e.prototype;return n._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},n.imagesLoaded=function(){if(this.options.imagesLoaded){var t=this;i(this.slider).on("progress",function(e,i){var n=t.getParentCell(i.img);t.cellSizeChange(n&&n.element),t.options.freeScroll||t.positionSliderAtSelected()})}},e});

// plyr
// A simple HTML5, YouTube and Vimeo player
"object"==typeof navigator&&function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Plyr",t):(e=e||self).Plyr=t()}(this,(function(){"use strict";!function(){if("undefined"!=typeof window)try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var t=function(e,t){var n,i;return(t=t||{}).bubbles=!!t.bubbles,t.cancelable=!!t.cancelable,(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i=n.preventDefault,n.preventDefault=function(){i.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};t.prototype=window.Event.prototype,window.CustomEvent=t}}();var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t){return e(t={exports:{}},t.exports),t.exports}var n=function(e){return e&&e.Math==Math&&e},i=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")(),r=function(e){try{return!!e()}catch(e){return!0}},a=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),o={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,l={f:s&&!o.call({1:2},1)?function(e){var t=s(this,e);return!!t&&t.enumerable}:o},c=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},u={}.toString,h=function(e){return u.call(e).slice(8,-1)},f="".split,d=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==h(e)?f.call(e,""):Object(e)}:Object,p=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},m=function(e){return d(p(e))},g=function(e){return"object"==typeof e?null!==e:"function"==typeof e},v=function(e,t){if(!g(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!g(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!g(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!g(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")},y={}.hasOwnProperty,b=function(e,t){return y.call(e,t)},w=i.document,k=g(w)&&g(w.createElement),T=function(e){return k?w.createElement(e):{}},S=!a&&!r((function(){return 7!=Object.defineProperty(T("div"),"a",{get:function(){return 7}}).a})),E=Object.getOwnPropertyDescriptor,A={f:a?E:function(e,t){if(e=m(e),t=v(t,!0),S)try{return E(e,t)}catch(e){}if(b(e,t))return c(!l.f.call(e,t),e[t])}},x=function(e){if(!g(e))throw TypeError(String(e)+" is not an object");return e},C=Object.defineProperty,P={f:a?C:function(e,t,n){if(x(e),t=v(t,!0),x(n),S)try{return C(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},I=a?function(e,t,n){return P.f(e,t,c(1,n))}:function(e,t,n){return e[t]=n,e},O=function(e,t){try{I(i,e,t)}catch(n){i[e]=t}return t},L=i["__core-js_shared__"]||O("__core-js_shared__",{}),j=Function.toString;"function"!=typeof L.inspectSource&&(L.inspectSource=function(e){return j.call(e)});var M,N,R,_=L.inspectSource,U=i.WeakMap,F="function"==typeof U&&/native code/.test(_(U)),D=t((function(e){(e.exports=function(e,t){return L[e]||(L[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.4",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),q=0,H=Math.random(),B=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++q+H).toString(36)},V=D("keys"),z=function(e){return V[e]||(V[e]=B(e))},W={},K=i.WeakMap;if(F){var $=new K,Y=$.get,G=$.has,X=$.set;M=function(e,t){return X.call($,e,t),t},N=function(e){return Y.call($,e)||{}},R=function(e){return G.call($,e)}}else{var Q=z("state");W[Q]=!0,M=function(e,t){return I(e,Q,t),t},N=function(e){return b(e,Q)?e[Q]:{}},R=function(e){return b(e,Q)}}var J,Z={set:M,get:N,has:R,enforce:function(e){return R(e)?N(e):M(e,{})},getterFor:function(e){return function(t){var n;if(!g(t)||(n=N(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},ee=t((function(e){var t=Z.get,n=Z.enforce,r=String(String).split("String");(e.exports=function(e,t,a,o){var s=!!o&&!!o.unsafe,l=!!o&&!!o.enumerable,c=!!o&&!!o.noTargetGet;"function"==typeof a&&("string"!=typeof t||b(a,"name")||I(a,"name",t),n(a).source=r.join("string"==typeof t?t:"")),e!==i?(s?!c&&e[t]&&(l=!0):delete e[t],l?e[t]=a:I(e,t,a)):l?e[t]=a:O(t,a)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||_(this)}))})),te=i,ne=function(e){return"function"==typeof e?e:void 0},ie=function(e,t){return arguments.length<2?ne(te[e])||ne(i[e]):te[e]&&te[e][t]||i[e]&&i[e][t]},re=Math.ceil,ae=Math.floor,oe=function(e){return isNaN(e=+e)?0:(e>0?ae:re)(e)},se=Math.min,le=function(e){return e>0?se(oe(e),9007199254740991):0},ce=Math.max,ue=Math.min,he=function(e,t){var n=oe(e);return n<0?ce(n+t,0):ue(n,t)},fe=function(e){return function(t,n,i){var r,a=m(t),o=le(a.length),s=he(i,o);if(e&&n!=n){for(;o>s;)if((r=a[s++])!=r)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===n)return e||s||0;return!e&&-1}},de={includes:fe(!0),indexOf:fe(!1)},pe=de.indexOf,me=function(e,t){var n,i=m(e),r=0,a=[];for(n in i)!b(W,n)&&b(i,n)&&a.push(n);for(;t.length>r;)b(i,n=t[r++])&&(~pe(a,n)||a.push(n));return a},ge=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ve=ge.concat("length","prototype"),ye={f:Object.getOwnPropertyNames||function(e){return me(e,ve)}},be={f:Object.getOwnPropertySymbols},we=ie("Reflect","ownKeys")||function(e){var t=ye.f(x(e)),n=be.f;return n?t.concat(n(e)):t},ke=function(e,t){for(var n=we(t),i=P.f,r=A.f,a=0;a<n.length;a++){var o=n[a];b(e,o)||i(e,o,r(t,o))}},Te=/#|\.prototype\./,Se=function(e,t){var n=Ae[Ee(e)];return n==Ce||n!=xe&&("function"==typeof t?r(t):!!t)},Ee=Se.normalize=function(e){return String(e).replace(Te,".").toLowerCase()},Ae=Se.data={},xe=Se.NATIVE="N",Ce=Se.POLYFILL="P",Pe=Se,Ie=A.f,Oe=function(e,t){var n,r,a,o,s,l=e.target,c=e.global,u=e.stat;if(n=c?i:u?i[l]||O(l,{}):(i[l]||{}).prototype)for(r in t){if(o=t[r],a=e.noTargetGet?(s=Ie(n,r))&&s.value:n[r],!Pe(c?r:l+(u?".":"#")+r,e.forced)&&void 0!==a){if(typeof o==typeof a)continue;ke(o,a)}(e.sham||a&&a.sham)&&I(o,"sham",!0),ee(n,r,o,e)}},Le=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())})),je=Le&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Me=Array.isArray||function(e){return"Array"==h(e)},Ne=function(e){return Object(p(e))},Re=Object.keys||function(e){return me(e,ge)},_e=a?Object.defineProperties:function(e,t){x(e);for(var n,i=Re(t),r=i.length,a=0;r>a;)P.f(e,n=i[a++],t[n]);return e},Ue=ie("document","documentElement"),Fe=z("IE_PROTO"),De=function(){},qe=function(e){return"<script>"+e+"<\/script>"},He=function(){try{J=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;He=J?function(e){e.write(qe("")),e.close();var t=e.parentWindow.Object;return e=null,t}(J):((t=T("iframe")).style.display="none",Ue.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(qe("document.F=Object")),e.close(),e.F);for(var n=ge.length;n--;)delete He.prototype[ge[n]];return He()};W[Fe]=!0;var Be=Object.create||function(e,t){var n;return null!==e?(De.prototype=x(e),n=new De,De.prototype=null,n[Fe]=e):n=He(),void 0===t?n:_e(n,t)},Ve=ye.f,ze={}.toString,We="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Ke={f:function(e){return We&&"[object Window]"==ze.call(e)?function(e){try{return Ve(e)}catch(e){return We.slice()}}(e):Ve(m(e))}},$e=D("wks"),Ye=i.Symbol,Ge=je?Ye:Ye&&Ye.withoutSetter||B,Xe=function(e){return b($e,e)||(Le&&b(Ye,e)?$e[e]=Ye[e]:$e[e]=Ge("Symbol."+e)),$e[e]},Qe={f:Xe},Je=P.f,Ze=function(e){var t=te.Symbol||(te.Symbol={});b(t,e)||Je(t,e,{value:Qe.f(e)})},et=P.f,tt=Xe("toStringTag"),nt=function(e,t,n){e&&!b(e=n?e:e.prototype,tt)&&et(e,tt,{configurable:!0,value:t})},it=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},rt=function(e,t,n){if(it(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,r){return e.call(t,n,i,r)}}return function(){return e.apply(t,arguments)}},at=Xe("species"),ot=function(e,t){var n;return Me(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!Me(n.prototype)?g(n)&&null===(n=n[at])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)},st=[].push,lt=function(e){var t=1==e,n=2==e,i=3==e,r=4==e,a=6==e,o=5==e||a;return function(s,l,c,u){for(var h,f,p=Ne(s),m=d(p),g=rt(l,c,3),v=le(m.length),y=0,b=u||ot,w=t?b(s,v):n?b(s,0):void 0;v>y;y++)if((o||y in m)&&(f=g(h=m[y],y,p),e))if(t)w[y]=f;else if(f)switch(e){case 3:return!0;case 5:return h;case 6:return y;case 2:st.call(w,h)}else if(r)return!1;return a?-1:i||r?r:w}},ct={forEach:lt(0),map:lt(1),filter:lt(2),some:lt(3),every:lt(4),find:lt(5),findIndex:lt(6)},ut=ct.forEach,ht=z("hidden"),ft=Xe("toPrimitive"),dt=Z.set,pt=Z.getterFor("Symbol"),mt=Object.prototype,gt=i.Symbol,vt=ie("JSON","stringify"),yt=A.f,bt=P.f,wt=Ke.f,kt=l.f,Tt=D("symbols"),St=D("op-symbols"),Et=D("string-to-symbol-registry"),At=D("symbol-to-string-registry"),xt=D("wks"),Ct=i.QObject,Pt=!Ct||!Ct.prototype||!Ct.prototype.findChild,It=a&&r((function(){return 7!=Be(bt({},"a",{get:function(){return bt(this,"a",{value:7}).a}})).a}))?function(e,t,n){var i=yt(mt,t);i&&delete mt[t],bt(e,t,n),i&&e!==mt&&bt(mt,t,i)}:bt,Ot=function(e,t){var n=Tt[e]=Be(gt.prototype);return dt(n,{type:"Symbol",tag:e,description:t}),a||(n.description=t),n},Lt=je?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof gt},jt=function(e,t,n){e===mt&&jt(St,t,n),x(e);var i=v(t,!0);return x(n),b(Tt,i)?(n.enumerable?(b(e,ht)&&e[ht][i]&&(e[ht][i]=!1),n=Be(n,{enumerable:c(0,!1)})):(b(e,ht)||bt(e,ht,c(1,{})),e[ht][i]=!0),It(e,i,n)):bt(e,i,n)},Mt=function(e,t){x(e);var n=m(t),i=Re(n).concat(Ut(n));return ut(i,(function(t){a&&!Nt.call(n,t)||jt(e,t,n[t])})),e},Nt=function(e){var t=v(e,!0),n=kt.call(this,t);return!(this===mt&&b(Tt,t)&&!b(St,t))&&(!(n||!b(this,t)||!b(Tt,t)||b(this,ht)&&this[ht][t])||n)},Rt=function(e,t){var n=m(e),i=v(t,!0);if(n!==mt||!b(Tt,i)||b(St,i)){var r=yt(n,i);return!r||!b(Tt,i)||b(n,ht)&&n[ht][i]||(r.enumerable=!0),r}},_t=function(e){var t=wt(m(e)),n=[];return ut(t,(function(e){b(Tt,e)||b(W,e)||n.push(e)})),n},Ut=function(e){var t=e===mt,n=wt(t?St:m(e)),i=[];return ut(n,(function(e){!b(Tt,e)||t&&!b(mt,e)||i.push(Tt[e])})),i};if(Le||(ee((gt=function(){if(this instanceof gt)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=B(e),n=function(e){this===mt&&n.call(St,e),b(this,ht)&&b(this[ht],t)&&(this[ht][t]=!1),It(this,t,c(1,e))};return a&&Pt&&It(mt,t,{configurable:!0,set:n}),Ot(t,e)}).prototype,"toString",(function(){return pt(this).tag})),ee(gt,"withoutSetter",(function(e){return Ot(B(e),e)})),l.f=Nt,P.f=jt,A.f=Rt,ye.f=Ke.f=_t,be.f=Ut,Qe.f=function(e){return Ot(Xe(e),e)},a&&(bt(gt.prototype,"description",{configurable:!0,get:function(){return pt(this).description}}),ee(mt,"propertyIsEnumerable",Nt,{unsafe:!0}))),Oe({global:!0,wrap:!0,forced:!Le,sham:!Le},{Symbol:gt}),ut(Re(xt),(function(e){Ze(e)})),Oe({target:"Symbol",stat:!0,forced:!Le},{for:function(e){var t=String(e);if(b(Et,t))return Et[t];var n=gt(t);return Et[t]=n,At[n]=t,n},keyFor:function(e){if(!Lt(e))throw TypeError(e+" is not a symbol");if(b(At,e))return At[e]},useSetter:function(){Pt=!0},useSimple:function(){Pt=!1}}),Oe({target:"Object",stat:!0,forced:!Le,sham:!a},{create:function(e,t){return void 0===t?Be(e):Mt(Be(e),t)},defineProperty:jt,defineProperties:Mt,getOwnPropertyDescriptor:Rt}),Oe({target:"Object",stat:!0,forced:!Le},{getOwnPropertyNames:_t,getOwnPropertySymbols:Ut}),Oe({target:"Object",stat:!0,forced:r((function(){be.f(1)}))},{getOwnPropertySymbols:function(e){return be.f(Ne(e))}}),vt){var Ft=!Le||r((function(){var e=gt();return"[null]"!=vt([e])||"{}"!=vt({a:e})||"{}"!=vt(Object(e))}));Oe({target:"JSON",stat:!0,forced:Ft},{stringify:function(e,t,n){for(var i,r=[e],a=1;arguments.length>a;)r.push(arguments[a++]);if(i=t,(g(t)||void 0!==e)&&!Lt(e))return Me(t)||(t=function(e,t){if("function"==typeof i&&(t=i.call(this,e,t)),!Lt(t))return t}),r[1]=t,vt.apply(null,r)}})}gt.prototype[ft]||I(gt.prototype,ft,gt.prototype.valueOf),nt(gt,"Symbol"),W[ht]=!0;var Dt=P.f,qt=i.Symbol;if(a&&"function"==typeof qt&&(!("description"in qt.prototype)||void 0!==qt().description)){var Ht={},Bt=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof Bt?new qt(e):void 0===e?qt():qt(e);return""===e&&(Ht[t]=!0),t};ke(Bt,qt);var Vt=Bt.prototype=qt.prototype;Vt.constructor=Bt;var zt=Vt.toString,Wt="Symbol(test)"==String(qt("test")),Kt=/^Symbol\((.*)\)[^)]+$/;Dt(Vt,"description",{configurable:!0,get:function(){var e=g(this)?this.valueOf():this,t=zt.call(e);if(b(Ht,e))return"";var n=Wt?t.slice(7,-1):t.replace(Kt,"$1");return""===n?void 0:n}}),Oe({global:!0,forced:!0},{Symbol:Bt})}Ze("iterator");var $t=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))},Yt=Object.defineProperty,Gt={},Xt=function(e){throw e},Qt=function(e,t){if(b(Gt,e))return Gt[e];t||(t={});var n=[][e],i=!!b(t,"ACCESSORS")&&t.ACCESSORS,o=b(t,0)?t[0]:Xt,s=b(t,1)?t[1]:void 0;return Gt[e]=!!n&&!r((function(){if(i&&!a)return!0;var e={length:-1};i?Yt(e,1,{enumerable:!0,get:Xt}):e[1]=1,n.call(e,o,s)}))},Jt=ct.forEach,Zt=$t("forEach"),en=Qt("forEach"),tn=Zt&&en?[].forEach:function(e){return Jt(this,e,arguments.length>1?arguments[1]:void 0)};Oe({target:"Array",proto:!0,forced:[].forEach!=tn},{forEach:tn});var nn=de.indexOf,rn=[].indexOf,an=!!rn&&1/[1].indexOf(1,-0)<0,on=$t("indexOf"),sn=Qt("indexOf",{ACCESSORS:!0,1:0});Oe({target:"Array",proto:!0,forced:an||!on||!sn},{indexOf:function(e){return an?rn.apply(this,arguments)||0:nn(this,e,arguments.length>1?arguments[1]:void 0)}});var ln=Xe("unscopables"),cn=Array.prototype;null==cn[ln]&&P.f(cn,ln,{configurable:!0,value:Be(null)});var un,hn,fn,dn=function(e){cn[ln][e]=!0},pn={},mn=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})),gn=z("IE_PROTO"),vn=Object.prototype,yn=mn?Object.getPrototypeOf:function(e){return e=Ne(e),b(e,gn)?e[gn]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?vn:null},bn=Xe("iterator"),wn=!1;[].keys&&("next"in(fn=[].keys())?(hn=yn(yn(fn)))!==Object.prototype&&(un=hn):wn=!0),null==un&&(un={}),b(un,bn)||I(un,bn,(function(){return this}));var kn={IteratorPrototype:un,BUGGY_SAFARI_ITERATORS:wn},Tn=kn.IteratorPrototype,Sn=function(){return this},En=function(e,t,n){var i=t+" Iterator";return e.prototype=Be(Tn,{next:c(1,n)}),nt(e,i,!1),pn[i]=Sn,e},An=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,i){return x(n),function(e){if(!g(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")}(i),t?e.call(n,i):n.__proto__=i,n}}():void 0),xn=kn.IteratorPrototype,Cn=kn.BUGGY_SAFARI_ITERATORS,Pn=Xe("iterator"),In=function(){return this},On=function(e,t,n,i,r,a,o){En(n,t,i);var s,l,c,u=function(e){if(e===r&&m)return m;if(!Cn&&e in d)return d[e];switch(e){case"keys":case"values":case"entries":return function(){return new n(this,e)}}return function(){return new n(this)}},h=t+" Iterator",f=!1,d=e.prototype,p=d[Pn]||d["@@iterator"]||r&&d[r],m=!Cn&&p||u(r),g="Array"==t&&d.entries||p;if(g&&(s=yn(g.call(new e)),xn!==Object.prototype&&s.next&&(yn(s)!==xn&&(An?An(s,xn):"function"!=typeof s[Pn]&&I(s,Pn,In)),nt(s,h,!0))),"values"==r&&p&&"values"!==p.name&&(f=!0,m=function(){return p.call(this)}),d[Pn]!==m&&I(d,Pn,m),pn[t]=m,r)if(l={values:u("values"),keys:a?m:u("keys"),entries:u("entries")},o)for(c in l)!Cn&&!f&&c in d||ee(d,c,l[c]);else Oe({target:t,proto:!0,forced:Cn||f},l);return l},Ln=Z.set,jn=Z.getterFor("Array Iterator"),Mn=On(Array,"Array",(function(e,t){Ln(this,{type:"Array Iterator",target:m(e),index:0,kind:t})}),(function(){var e=jn(this),t=e.target,n=e.kind,i=e.index++;return!t||i>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:i,done:!1}:"values"==n?{value:t[i],done:!1}:{value:[i,t[i]],done:!1}}),"values");pn.Arguments=pn.Array,dn("keys"),dn("values"),dn("entries");var Nn=[].join,Rn=d!=Object,_n=$t("join",",");Oe({target:"Array",proto:!0,forced:Rn||!_n},{join:function(e){return Nn.call(m(this),void 0===e?",":e)}});var Un,Fn,Dn=function(e,t,n){var i=v(t);i in e?P.f(e,i,c(0,n)):e[i]=n},qn=ie("navigator","userAgent")||"",Hn=i.process,Bn=Hn&&Hn.versions,Vn=Bn&&Bn.v8;Vn?Fn=(Un=Vn.split("."))[0]+Un[1]:qn&&(!(Un=qn.match(/Edge\/(\d+)/))||Un[1]>=74)&&(Un=qn.match(/Chrome\/(\d+)/))&&(Fn=Un[1]);var zn=Fn&&+Fn,Wn=Xe("species"),Kn=function(e){return zn>=51||!r((function(){var t=[];return(t.constructor={})[Wn]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},$n=Kn("slice"),Yn=Qt("slice",{ACCESSORS:!0,0:0,1:2}),Gn=Xe("species"),Xn=[].slice,Qn=Math.max;Oe({target:"Array",proto:!0,forced:!$n||!Yn},{slice:function(e,t){var n,i,r,a=m(this),o=le(a.length),s=he(e,o),l=he(void 0===t?o:t,o);if(Me(a)&&("function"!=typeof(n=a.constructor)||n!==Array&&!Me(n.prototype)?g(n)&&null===(n=n[Gn])&&(n=void 0):n=void 0,n===Array||void 0===n))return Xn.call(a,s,l);for(i=new(void 0===n?Array:n)(Qn(l-s,0)),r=0;s<l;s++,r++)s in a&&Dn(i,r,a[s]);return i.length=r,i}});var Jn={};Jn[Xe("toStringTag")]="z";var Zn="[object z]"===String(Jn),ei=Xe("toStringTag"),ti="Arguments"==h(function(){return arguments}()),ni=Zn?h:function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),ei))?n:ti?h(t):"Object"==(i=h(t))&&"function"==typeof t.callee?"Arguments":i},ii=Zn?{}.toString:function(){return"[object "+ni(this)+"]"};Zn||ee(Object.prototype,"toString",ii,{unsafe:!0});var ri=function(){var e=x(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t};function ai(e,t){return RegExp(e,t)}var oi={UNSUPPORTED_Y:r((function(){var e=ai("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),BROKEN_CARET:r((function(){var e=ai("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},si=RegExp.prototype.exec,li=String.prototype.replace,ci=si,ui=function(){var e=/a/,t=/b*/g;return si.call(e,"a"),si.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),hi=oi.UNSUPPORTED_Y||oi.BROKEN_CARET,fi=void 0!==/()??/.exec("")[1];(ui||fi||hi)&&(ci=function(e){var t,n,i,r,a=this,o=hi&&a.sticky,s=ri.call(a),l=a.source,c=0,u=e;return o&&(-1===(s=s.replace("y","")).indexOf("g")&&(s+="g"),u=String(e).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==e[a.lastIndex-1])&&(l="(?: "+l+")",u=" "+u,c++),n=new RegExp("^(?:"+l+")",s)),fi&&(n=new RegExp("^"+l+"$(?!\\s)",s)),ui&&(t=a.lastIndex),i=si.call(o?n:a,u),o?i?(i.input=i.input.slice(c),i[0]=i[0].slice(c),i.index=a.lastIndex,a.lastIndex+=i[0].length):a.lastIndex=0:ui&&i&&(a.lastIndex=a.global?i.index+i[0].length:t),fi&&i&&i.length>1&&li.call(i[0],n,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(i[r]=void 0)})),i});var di=ci;Oe({target:"RegExp",proto:!0,forced:/./.exec!==di},{exec:di});var pi=RegExp.prototype,mi=pi.toString,gi=r((function(){return"/a/b"!=mi.call({source:"a",flags:"b"})})),vi="toString"!=mi.name;(gi||vi)&&ee(RegExp.prototype,"toString",(function(){var e=x(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in pi)?ri.call(e):n)}),{unsafe:!0});var yi=function(e){return function(t,n){var i,r,a=String(p(t)),o=oe(n),s=a.length;return o<0||o>=s?e?"":void 0:(i=a.charCodeAt(o))<55296||i>56319||o+1===s||(r=a.charCodeAt(o+1))<56320||r>57343?e?a.charAt(o):i:e?a.slice(o,o+2):r-56320+(i-55296<<10)+65536}},bi={codeAt:yi(!1),charAt:yi(!0)},wi=bi.charAt,ki=Z.set,Ti=Z.getterFor("String Iterator");On(String,"String",(function(e){ki(this,{type:"String Iterator",string:String(e),index:0})}),(function(){var e,t=Ti(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=wi(n,i),t.index+=e.length,{value:e,done:!1})}));var Si=Xe("species"),Ei=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),Ai="$0"==="a".replace(/./,"$0"),xi=Xe("replace"),Ci=!!/./[xi]&&""===/./[xi]("a","$0"),Pi=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),Ii=function(e,t,n,i){var a=Xe(e),o=!r((function(){var t={};return t[a]=function(){return 7},7!=""[e](t)})),s=o&&!r((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[Si]=function(){return n},n.flags="",n[a]=/./[a]),n.exec=function(){return t=!0,null},n[a](""),!t}));if(!o||!s||"replace"===e&&(!Ei||!Ai||Ci)||"split"===e&&!Pi){var l=/./[a],c=n(a,""[e],(function(e,t,n,i,r){return t.exec===di?o&&!r?{done:!0,value:l.call(t,n,i)}:{done:!0,value:e.call(n,t,i)}:{done:!1}}),{REPLACE_KEEPS_$0:Ai,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Ci}),u=c[0],h=c[1];ee(String.prototype,e,u),ee(RegExp.prototype,a,2==t?function(e,t){return h.call(e,this,t)}:function(e){return h.call(e,this)})}i&&I(RegExp.prototype[a],"sham",!0)},Oi=bi.charAt,Li=function(e,t,n){return t+(n?Oi(e,t).length:1)},ji=function(e,t){var n=e.exec;if("function"==typeof n){var i=n.call(e,t);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==h(e))throw TypeError("RegExp#exec called on incompatible receiver");return di.call(e,t)},Mi=Math.max,Ni=Math.min,Ri=Math.floor,_i=/\$([$&'`]|\d\d?|<[^>]*>)/g,Ui=/\$([$&'`]|\d\d?)/g;Ii("replace",2,(function(e,t,n,i){var r=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,a=i.REPLACE_KEEPS_$0,o=r?"$":"$0";return[function(n,i){var r=p(this),a=null==n?void 0:n[e];return void 0!==a?a.call(n,r,i):t.call(String(r),n,i)},function(e,i){if(!r&&a||"string"==typeof i&&-1===i.indexOf(o)){var l=n(t,e,this,i);if(l.done)return l.value}var c=x(e),u=String(this),h="function"==typeof i;h||(i=String(i));var f=c.global;if(f){var d=c.unicode;c.lastIndex=0}for(var p=[];;){var m=ji(c,u);if(null===m)break;if(p.push(m),!f)break;""===String(m[0])&&(c.lastIndex=Li(u,le(c.lastIndex),d))}for(var g,v="",y=0,b=0;b<p.length;b++){m=p[b];for(var w=String(m[0]),k=Mi(Ni(oe(m.index),u.length),0),T=[],S=1;S<m.length;S++)T.push(void 0===(g=m[S])?g:String(g));var E=m.groups;if(h){var A=[w].concat(T,k,u);void 0!==E&&A.push(E);var C=String(i.apply(void 0,A))}else C=s(w,u,k,T,E,i);k>=y&&(v+=u.slice(y,k)+C,y=k+w.length)}return v+u.slice(y)}];function s(e,n,i,r,a,o){var s=i+e.length,l=r.length,c=Ui;return void 0!==a&&(a=Ne(a),c=_i),t.call(o,c,(function(t,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,i);case"'":return n.slice(s);case"<":c=a[o.slice(1,-1)];break;default:var u=+o;if(0===u)return t;if(u>l){var h=Ri(u/10);return 0===h?t:h<=l?void 0===r[h-1]?o.charAt(1):r[h-1]+o.charAt(1):t}c=r[u-1]}return void 0===c?"":c}))}}));var Fi=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t};Ii("search",1,(function(e,t,n){return[function(t){var n=p(this),i=null==t?void 0:t[e];return void 0!==i?i.call(t,n):new RegExp(t)[e](String(n))},function(e){var i=n(t,e,this);if(i.done)return i.value;var r=x(e),a=String(this),o=r.lastIndex;Fi(o,0)||(r.lastIndex=0);var s=ji(r,a);return Fi(r.lastIndex,o)||(r.lastIndex=o),null===s?-1:s.index}]}));var Di=Xe("match"),qi=function(e){var t;return g(e)&&(void 0!==(t=e[Di])?!!t:"RegExp"==h(e))},Hi=Xe("species"),Bi=function(e,t){var n,i=x(e).constructor;return void 0===i||null==(n=x(i)[Hi])?t:it(n)},Vi=[].push,zi=Math.min,Wi=!r((function(){return!RegExp(4294967295,"y")}));Ii("split",2,(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=String(p(this)),r=void 0===n?4294967295:n>>>0;if(0===r)return[];if(void 0===e)return[i];if(!qi(e))return t.call(i,e,r);for(var a,o,s,l=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,h=new RegExp(e.source,c+"g");(a=di.call(h,i))&&!((o=h.lastIndex)>u&&(l.push(i.slice(u,a.index)),a.length>1&&a.index<i.length&&Vi.apply(l,a.slice(1)),s=a[0].length,u=o,l.length>=r));)h.lastIndex===a.index&&h.lastIndex++;return u===i.length?!s&&h.test("")||l.push(""):l.push(i.slice(u)),l.length>r?l.slice(0,r):l}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=p(this),a=null==t?void 0:t[e];return void 0!==a?a.call(t,r,n):i.call(String(r),t,n)},function(e,r){var a=n(i,e,this,r,i!==t);if(a.done)return a.value;var o=x(e),s=String(this),l=Bi(o,RegExp),c=o.unicode,u=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(Wi?"y":"g"),h=new l(Wi?o:"^(?:"+o.source+")",u),f=void 0===r?4294967295:r>>>0;if(0===f)return[];if(0===s.length)return null===ji(h,s)?[s]:[];for(var d=0,p=0,m=[];p<s.length;){h.lastIndex=Wi?p:0;var g,v=ji(h,Wi?s:s.slice(p));if(null===v||(g=zi(le(h.lastIndex+(Wi?0:p)),s.length))===d)p=Li(s,p,c);else{if(m.push(s.slice(d,p)),m.length===f)return m;for(var y=1;y<=v.length-1;y++)if(m.push(v[y]),m.length===f)return m;p=d=g}}return m.push(s.slice(d)),m}]}),!Wi);var Ki={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};for(var $i in Ki){var Yi=i[$i],Gi=Yi&&Yi.prototype;if(Gi&&Gi.forEach!==tn)try{I(Gi,"forEach",tn)}catch(e){Gi.forEach=tn}}var Xi=Xe("iterator"),Qi=Xe("toStringTag"),Ji=Mn.values;for(var Zi in Ki){var er=i[Zi],tr=er&&er.prototype;if(tr){if(tr[Xi]!==Ji)try{I(tr,Xi,Ji)}catch(e){tr[Xi]=Ji}if(tr[Qi]||I(tr,Qi,Zi),Ki[Zi])for(var nr in Mn)if(tr[nr]!==Mn[nr])try{I(tr,nr,Mn[nr])}catch(e){tr[nr]=Mn[nr]}}}var ir=Xe("iterator"),rr=!r((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,n="";return e.pathname="c%20d",t.forEach((function(e,i){t.delete("b"),n+=i+e})),!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[ir]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host})),ar=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e},or=Object.assign,sr=Object.defineProperty,lr=!or||r((function(){if(a&&1!==or({b:1},or(sr({},"a",{enumerable:!0,get:function(){sr(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol();return e[n]=7,"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),7!=or({},e)[n]||"abcdefghijklmnopqrst"!=Re(or({},t)).join("")}))?function(e,t){for(var n=Ne(e),i=arguments.length,r=1,o=be.f,s=l.f;i>r;)for(var c,u=d(arguments[r++]),h=o?Re(u).concat(o(u)):Re(u),f=h.length,p=0;f>p;)c=h[p++],a&&!s.call(u,c)||(n[c]=u[c]);return n}:or,cr=function(e,t,n,i){try{return i?t(x(n)[0],n[1]):t(n)}catch(t){var r=e.return;throw void 0!==r&&x(r.call(e)),t}},ur=Xe("iterator"),hr=Array.prototype,fr=function(e){return void 0!==e&&(pn.Array===e||hr[ur]===e)},dr=Xe("iterator"),pr=function(e){if(null!=e)return e[dr]||e["@@iterator"]||pn[ni(e)]},mr=function(e){var t,n,i,r,a,o,s=Ne(e),l="function"==typeof this?this:Array,c=arguments.length,u=c>1?arguments[1]:void 0,h=void 0!==u,f=pr(s),d=0;if(h&&(u=rt(u,c>2?arguments[2]:void 0,2)),null==f||l==Array&&fr(f))for(n=new l(t=le(s.length));t>d;d++)o=h?u(s[d],d):s[d],Dn(n,d,o);else for(a=(r=f.call(s)).next,n=new l;!(i=a.call(r)).done;d++)o=h?cr(r,u,[i.value,d],!0):i.value,Dn(n,d,o);return n.length=d,n},gr=/[^\0-\u007E]/,vr=/[.\u3002\uFF0E\uFF61]/g,yr="Overflow: input needs wider integers to process",br=Math.floor,wr=String.fromCharCode,kr=function(e){return e+22+75*(e<26)},Tr=function(e,t,n){var i=0;for(e=n?br(e/700):e>>1,e+=br(e/t);e>455;i+=36)e=br(e/35);return br(i+36*e/(e+38))},Sr=function(e){var t,n,i=[],r=(e=function(e){for(var t=[],n=0,i=e.length;n<i;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var a=e.charCodeAt(n++);56320==(64512&a)?t.push(((1023&r)<<10)+(1023&a)+65536):(t.push(r),n--)}else t.push(r)}return t}(e)).length,a=128,o=0,s=72;for(t=0;t<e.length;t++)(n=e[t])<128&&i.push(wr(n));var l=i.length,c=l;for(l&&i.push("-");c<r;){var u=2147483647;for(t=0;t<e.length;t++)(n=e[t])>=a&&n<u&&(u=n);var h=c+1;if(u-a>br((2147483647-o)/h))throw RangeError(yr);for(o+=(u-a)*h,a=u,t=0;t<e.length;t++){if((n=e[t])<a&&++o>2147483647)throw RangeError(yr);if(n==a){for(var f=o,d=36;;d+=36){var p=d<=s?1:d>=s+26?26:d-s;if(f<p)break;var m=f-p,g=36-p;i.push(wr(kr(p+m%g))),f=br(m/g)}i.push(wr(kr(f))),s=Tr(o,h,c==l),o=0,++c}}++o,++a}return i.join("")},Er=function(e,t,n){for(var i in t)ee(e,i,t[i],n);return e},Ar=function(e){var t=pr(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return x(t.call(e))},xr=ie("fetch"),Cr=ie("Headers"),Pr=Xe("iterator"),Ir=Z.set,Or=Z.getterFor("URLSearchParams"),Lr=Z.getterFor("URLSearchParamsIterator"),jr=/\+/g,Mr=Array(4),Nr=function(e){return Mr[e-1]||(Mr[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},Rr=function(e){try{return decodeURIComponent(e)}catch(t){return e}},_r=function(e){var t=e.replace(jr," "),n=4;try{return decodeURIComponent(t)}catch(e){for(;n;)t=t.replace(Nr(n--),Rr);return t}},Ur=/[!'()~]|%20/g,Fr={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},Dr=function(e){return Fr[e]},qr=function(e){return encodeURIComponent(e).replace(Ur,Dr)},Hr=function(e,t){if(t)for(var n,i,r=t.split("&"),a=0;a<r.length;)(n=r[a++]).length&&(i=n.split("="),e.push({key:_r(i.shift()),value:_r(i.join("="))}))},Br=function(e){this.entries.length=0,Hr(this.entries,e)},Vr=function(e,t){if(e<t)throw TypeError("Not enough arguments")},zr=En((function(e,t){Ir(this,{type:"URLSearchParamsIterator",iterator:Ar(Or(e).entries),kind:t})}),"Iterator",(function(){var e=Lr(this),t=e.kind,n=e.iterator.next(),i=n.value;return n.done||(n.value="keys"===t?i.key:"values"===t?i.value:[i.key,i.value]),n})),Wr=function(){ar(this,Wr,"URLSearchParams");var e,t,n,i,r,a,o,s,l,c=arguments.length>0?arguments[0]:void 0,u=this,h=[];if(Ir(u,{type:"URLSearchParams",entries:h,updateURL:function(){},updateSearchParams:Br}),void 0!==c)if(g(c))if("function"==typeof(e=pr(c)))for(n=(t=e.call(c)).next;!(i=n.call(t)).done;){if((o=(a=(r=Ar(x(i.value))).next).call(r)).done||(s=a.call(r)).done||!a.call(r).done)throw TypeError("Expected sequence with length 2");h.push({key:o.value+"",value:s.value+""})}else for(l in c)b(c,l)&&h.push({key:l,value:c[l]+""});else Hr(h,"string"==typeof c?"?"===c.charAt(0)?c.slice(1):c:c+"")},Kr=Wr.prototype;Er(Kr,{append:function(e,t){Vr(arguments.length,2);var n=Or(this);n.entries.push({key:e+"",value:t+""}),n.updateURL()},delete:function(e){Vr(arguments.length,1);for(var t=Or(this),n=t.entries,i=e+"",r=0;r<n.length;)n[r].key===i?n.splice(r,1):r++;t.updateURL()},get:function(e){Vr(arguments.length,1);for(var t=Or(this).entries,n=e+"",i=0;i<t.length;i++)if(t[i].key===n)return t[i].value;return null},getAll:function(e){Vr(arguments.length,1);for(var t=Or(this).entries,n=e+"",i=[],r=0;r<t.length;r++)t[r].key===n&&i.push(t[r].value);return i},has:function(e){Vr(arguments.length,1);for(var t=Or(this).entries,n=e+"",i=0;i<t.length;)if(t[i++].key===n)return!0;return!1},set:function(e,t){Vr(arguments.length,1);for(var n,i=Or(this),r=i.entries,a=!1,o=e+"",s=t+"",l=0;l<r.length;l++)(n=r[l]).key===o&&(a?r.splice(l--,1):(a=!0,n.value=s));a||r.push({key:o,value:s}),i.updateURL()},sort:function(){var e,t,n,i=Or(this),r=i.entries,a=r.slice();for(r.length=0,n=0;n<a.length;n++){for(e=a[n],t=0;t<n;t++)if(r[t].key>e.key){r.splice(t,0,e);break}t===n&&r.push(e)}i.updateURL()},forEach:function(e){for(var t,n=Or(this).entries,i=rt(e,arguments.length>1?arguments[1]:void 0,3),r=0;r<n.length;)i((t=n[r++]).value,t.key,this)},keys:function(){return new zr(this,"keys")},values:function(){return new zr(this,"values")},entries:function(){return new zr(this,"entries")}},{enumerable:!0}),ee(Kr,Pr,Kr.entries),ee(Kr,"toString",(function(){for(var e,t=Or(this).entries,n=[],i=0;i<t.length;)e=t[i++],n.push(qr(e.key)+"="+qr(e.value));return n.join("&")}),{enumerable:!0}),nt(Wr,"URLSearchParams"),Oe({global:!0,forced:!rr},{URLSearchParams:Wr}),rr||"function"!=typeof xr||"function"!=typeof Cr||Oe({global:!0,enumerable:!0,forced:!0},{fetch:function(e){var t,n,i,r=[e];return arguments.length>1&&(t=arguments[1],g(t)&&(n=t.body,"URLSearchParams"===ni(n)&&((i=t.headers?new Cr(t.headers):new Cr).has("content-type")||i.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),t=Be(t,{body:c(0,String(n)),headers:c(0,i)}))),r.push(t)),xr.apply(this,r)}});var $r,Yr={URLSearchParams:Wr,getState:Or},Gr=bi.codeAt,Xr=i.URL,Qr=Yr.URLSearchParams,Jr=Yr.getState,Zr=Z.set,ea=Z.getterFor("URL"),ta=Math.floor,na=Math.pow,ia=/[A-Za-z]/,ra=/[\d+\-.A-Za-z]/,aa=/\d/,oa=/^(0x|0X)/,sa=/^[0-7]+$/,la=/^\d+$/,ca=/^[\dA-Fa-f]+$/,ua=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,ha=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,fa=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,da=/[\u0009\u000A\u000D]/g,pa=function(e,t){var n,i,r;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return"Invalid host";if(!(n=ga(t.slice(1,-1))))return"Invalid host";e.host=n}else if(Ea(e)){if(t=function(e){var t,n,i=[],r=e.toLowerCase().replace(vr,".").split(".");for(t=0;t<r.length;t++)n=r[t],i.push(gr.test(n)?"xn--"+Sr(n):n);return i.join(".")}(t),ua.test(t))return"Invalid host";if(null===(n=ma(t)))return"Invalid host";e.host=n}else{if(ha.test(t))return"Invalid host";for(n="",i=mr(t),r=0;r<i.length;r++)n+=Ta(i[r],ya);e.host=n}},ma=function(e){var t,n,i,r,a,o,s,l=e.split(".");if(l.length&&""==l[l.length-1]&&l.pop(),(t=l.length)>4)return e;for(n=[],i=0;i<t;i++){if(""==(r=l[i]))return e;if(a=10,r.length>1&&"0"==r.charAt(0)&&(a=oa.test(r)?16:8,r=r.slice(8==a?1:2)),""===r)o=0;else{if(!(10==a?la:8==a?sa:ca).test(r))return e;o=parseInt(r,a)}n.push(o)}for(i=0;i<t;i++)if(o=n[i],i==t-1){if(o>=na(256,5-t))return null}else if(o>255)return null;for(s=n.pop(),i=0;i<n.length;i++)s+=n[i]*na(256,3-i);return s},ga=function(e){var t,n,i,r,a,o,s,l=[0,0,0,0,0,0,0,0],c=0,u=null,h=0,f=function(){return e.charAt(h)};if(":"==f()){if(":"!=e.charAt(1))return;h+=2,u=++c}for(;f();){if(8==c)return;if(":"!=f()){for(t=n=0;n<4&&ca.test(f());)t=16*t+parseInt(f(),16),h++,n++;if("."==f()){if(0==n)return;if(h-=n,c>6)return;for(i=0;f();){if(r=null,i>0){if(!("."==f()&&i<4))return;h++}if(!aa.test(f()))return;for(;aa.test(f());){if(a=parseInt(f(),10),null===r)r=a;else{if(0==r)return;r=10*r+a}if(r>255)return;h++}l[c]=256*l[c]+r,2!=++i&&4!=i||c++}if(4!=i)return;break}if(":"==f()){if(h++,!f())return}else if(f())return;l[c++]=t}else{if(null!==u)return;h++,u=++c}}if(null!==u)for(o=c-u,c=7;0!=c&&o>0;)s=l[c],l[c--]=l[u+o-1],l[u+--o]=s;else if(8!=c)return;return l},va=function(e){var t,n,i,r;if("number"==typeof e){for(t=[],n=0;n<4;n++)t.unshift(e%256),e=ta(e/256);return t.join(".")}if("object"==typeof e){for(t="",i=function(e){for(var t=null,n=1,i=null,r=0,a=0;a<8;a++)0!==e[a]?(r>n&&(t=i,n=r),i=null,r=0):(null===i&&(i=a),++r);return r>n&&(t=i,n=r),t}(e),n=0;n<8;n++)r&&0===e[n]||(r&&(r=!1),i===n?(t+=n?":":"::",r=!0):(t+=e[n].toString(16),n<7&&(t+=":")));return"["+t+"]"}return e},ya={},ba=lr({},ya,{" ":1,'"':1,"<":1,">":1,"`":1}),wa=lr({},ba,{"#":1,"?":1,"{":1,"}":1}),ka=lr({},wa,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),Ta=function(e,t){var n=Gr(e,0);return n>32&&n<127&&!b(t,e)?e:encodeURIComponent(e)},Sa={ftp:21,file:null,http:80,https:443,ws:80,wss:443},Ea=function(e){return b(Sa,e.scheme)},Aa=function(e){return""!=e.username||""!=e.password},xa=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},Ca=function(e,t){var n;return 2==e.length&&ia.test(e.charAt(0))&&(":"==(n=e.charAt(1))||!t&&"|"==n)},Pa=function(e){var t;return e.length>1&&Ca(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},Ia=function(e){var t=e.path,n=t.length;!n||"file"==e.scheme&&1==n&&Ca(t[0],!0)||t.pop()},Oa=function(e){return"."===e||"%2e"===e.toLowerCase()},La={},ja={},Ma={},Na={},Ra={},_a={},Ua={},Fa={},Da={},qa={},Ha={},Ba={},Va={},za={},Wa={},Ka={},$a={},Ya={},Ga={},Xa={},Qa={},Ja=function(e,t,n,i){var r,a,o,s,l,c=n||La,u=0,h="",f=!1,d=!1,p=!1;for(n||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(fa,"")),t=t.replace(da,""),r=mr(t);u<=r.length;){switch(a=r[u],c){case La:if(!a||!ia.test(a)){if(n)return"Invalid scheme";c=Ma;continue}h+=a.toLowerCase(),c=ja;break;case ja:if(a&&(ra.test(a)||"+"==a||"-"==a||"."==a))h+=a.toLowerCase();else{if(":"!=a){if(n)return"Invalid scheme";h="",c=Ma,u=0;continue}if(n&&(Ea(e)!=b(Sa,h)||"file"==h&&(Aa(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=h,n)return void(Ea(e)&&Sa[e.scheme]==e.port&&(e.port=null));h="","file"==e.scheme?c=za:Ea(e)&&i&&i.scheme==e.scheme?c=Na:Ea(e)?c=Fa:"/"==r[u+1]?(c=Ra,u++):(e.cannotBeABaseURL=!0,e.path.push(""),c=Ga)}break;case Ma:if(!i||i.cannotBeABaseURL&&"#"!=a)return"Invalid scheme";if(i.cannotBeABaseURL&&"#"==a){e.scheme=i.scheme,e.path=i.path.slice(),e.query=i.query,e.fragment="",e.cannotBeABaseURL=!0,c=Qa;break}c="file"==i.scheme?za:_a;continue;case Na:if("/"!=a||"/"!=r[u+1]){c=_a;continue}c=Da,u++;break;case Ra:if("/"==a){c=qa;break}c=Ya;continue;case _a:if(e.scheme=i.scheme,a==$r)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query;else if("/"==a||"\\"==a&&Ea(e))c=Ua;else if("?"==a)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query="",c=Xa;else{if("#"!=a){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.path.pop(),c=Ya;continue}e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query,e.fragment="",c=Qa}break;case Ua:if(!Ea(e)||"/"!=a&&"\\"!=a){if("/"!=a){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,c=Ya;continue}c=qa}else c=Da;break;case Fa:if(c=Da,"/"!=a||"/"!=h.charAt(u+1))continue;u++;break;case Da:if("/"!=a&&"\\"!=a){c=qa;continue}break;case qa:if("@"==a){f&&(h="%40"+h),f=!0,o=mr(h);for(var m=0;m<o.length;m++){var g=o[m];if(":"!=g||p){var v=Ta(g,ka);p?e.password+=v:e.username+=v}else p=!0}h=""}else if(a==$r||"/"==a||"?"==a||"#"==a||"\\"==a&&Ea(e)){if(f&&""==h)return"Invalid authority";u-=mr(h).length+1,h="",c=Ha}else h+=a;break;case Ha:case Ba:if(n&&"file"==e.scheme){c=Ka;continue}if(":"!=a||d){if(a==$r||"/"==a||"?"==a||"#"==a||"\\"==a&&Ea(e)){if(Ea(e)&&""==h)return"Invalid host";if(n&&""==h&&(Aa(e)||null!==e.port))return;if(s=pa(e,h))return s;if(h="",c=$a,n)return;continue}"["==a?d=!0:"]"==a&&(d=!1),h+=a}else{if(""==h)return"Invalid host";if(s=pa(e,h))return s;if(h="",c=Va,n==Ba)return}break;case Va:if(!aa.test(a)){if(a==$r||"/"==a||"?"==a||"#"==a||"\\"==a&&Ea(e)||n){if(""!=h){var y=parseInt(h,10);if(y>65535)return"Invalid port";e.port=Ea(e)&&y===Sa[e.scheme]?null:y,h=""}if(n)return;c=$a;continue}return"Invalid port"}h+=a;break;case za:if(e.scheme="file","/"==a||"\\"==a)c=Wa;else{if(!i||"file"!=i.scheme){c=Ya;continue}if(a==$r)e.host=i.host,e.path=i.path.slice(),e.query=i.query;else if("?"==a)e.host=i.host,e.path=i.path.slice(),e.query="",c=Xa;else{if("#"!=a){Pa(r.slice(u).join(""))||(e.host=i.host,e.path=i.path.slice(),Ia(e)),c=Ya;continue}e.host=i.host,e.path=i.path.slice(),e.query=i.query,e.fragment="",c=Qa}}break;case Wa:if("/"==a||"\\"==a){c=Ka;break}i&&"file"==i.scheme&&!Pa(r.slice(u).join(""))&&(Ca(i.path[0],!0)?e.path.push(i.path[0]):e.host=i.host),c=Ya;continue;case Ka:if(a==$r||"/"==a||"\\"==a||"?"==a||"#"==a){if(!n&&Ca(h))c=Ya;else if(""==h){if(e.host="",n)return;c=$a}else{if(s=pa(e,h))return s;if("localhost"==e.host&&(e.host=""),n)return;h="",c=$a}continue}h+=a;break;case $a:if(Ea(e)){if(c=Ya,"/"!=a&&"\\"!=a)continue}else if(n||"?"!=a)if(n||"#"!=a){if(a!=$r&&(c=Ya,"/"!=a))continue}else e.fragment="",c=Qa;else e.query="",c=Xa;break;case Ya:if(a==$r||"/"==a||"\\"==a&&Ea(e)||!n&&("?"==a||"#"==a)){if(".."===(l=(l=h).toLowerCase())||"%2e."===l||".%2e"===l||"%2e%2e"===l?(Ia(e),"/"==a||"\\"==a&&Ea(e)||e.path.push("")):Oa(h)?"/"==a||"\\"==a&&Ea(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&Ca(h)&&(e.host&&(e.host=""),h=h.charAt(0)+":"),e.path.push(h)),h="","file"==e.scheme&&(a==$r||"?"==a||"#"==a))for(;e.path.length>1&&""===e.path[0];)e.path.shift();"?"==a?(e.query="",c=Xa):"#"==a&&(e.fragment="",c=Qa)}else h+=Ta(a,wa);break;case Ga:"?"==a?(e.query="",c=Xa):"#"==a?(e.fragment="",c=Qa):a!=$r&&(e.path[0]+=Ta(a,ya));break;case Xa:n||"#"!=a?a!=$r&&("'"==a&&Ea(e)?e.query+="%27":e.query+="#"==a?"%23":Ta(a,ya)):(e.fragment="",c=Qa);break;case Qa:a!=$r&&(e.fragment+=Ta(a,ba))}u++}},Za=function(e){var t,n,i=ar(this,Za,"URL"),r=arguments.length>1?arguments[1]:void 0,o=String(e),s=Zr(i,{type:"URL"});if(void 0!==r)if(r instanceof Za)t=ea(r);else if(n=Ja(t={},String(r)))throw TypeError(n);if(n=Ja(s,o,null,t))throw TypeError(n);var l=s.searchParams=new Qr,c=Jr(l);c.updateSearchParams(s.query),c.updateURL=function(){s.query=String(l)||null},a||(i.href=to.call(i),i.origin=no.call(i),i.protocol=io.call(i),i.username=ro.call(i),i.password=ao.call(i),i.host=oo.call(i),i.hostname=so.call(i),i.port=lo.call(i),i.pathname=co.call(i),i.search=uo.call(i),i.searchParams=ho.call(i),i.hash=fo.call(i))},eo=Za.prototype,to=function(){var e=ea(this),t=e.scheme,n=e.username,i=e.password,r=e.host,a=e.port,o=e.path,s=e.query,l=e.fragment,c=t+":";return null!==r?(c+="//",Aa(e)&&(c+=n+(i?":"+i:"")+"@"),c+=va(r),null!==a&&(c+=":"+a)):"file"==t&&(c+="//"),c+=e.cannotBeABaseURL?o[0]:o.length?"/"+o.join("/"):"",null!==s&&(c+="?"+s),null!==l&&(c+="#"+l),c},no=function(){var e=ea(this),t=e.scheme,n=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(e){return"null"}return"file"!=t&&Ea(e)?t+"://"+va(e.host)+(null!==n?":"+n:""):"null"},io=function(){return ea(this).scheme+":"},ro=function(){return ea(this).username},ao=function(){return ea(this).password},oo=function(){var e=ea(this),t=e.host,n=e.port;return null===t?"":null===n?va(t):va(t)+":"+n},so=function(){var e=ea(this).host;return null===e?"":va(e)},lo=function(){var e=ea(this).port;return null===e?"":String(e)},co=function(){var e=ea(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},uo=function(){var e=ea(this).query;return e?"?"+e:""},ho=function(){return ea(this).searchParams},fo=function(){var e=ea(this).fragment;return e?"#"+e:""},po=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(a&&_e(eo,{href:po(to,(function(e){var t=ea(this),n=String(e),i=Ja(t,n);if(i)throw TypeError(i);Jr(t.searchParams).updateSearchParams(t.query)})),origin:po(no),protocol:po(io,(function(e){var t=ea(this);Ja(t,String(e)+":",La)})),username:po(ro,(function(e){var t=ea(this),n=mr(String(e));if(!xa(t)){t.username="";for(var i=0;i<n.length;i++)t.username+=Ta(n[i],ka)}})),password:po(ao,(function(e){var t=ea(this),n=mr(String(e));if(!xa(t)){t.password="";for(var i=0;i<n.length;i++)t.password+=Ta(n[i],ka)}})),host:po(oo,(function(e){var t=ea(this);t.cannotBeABaseURL||Ja(t,String(e),Ha)})),hostname:po(so,(function(e){var t=ea(this);t.cannotBeABaseURL||Ja(t,String(e),Ba)})),port:po(lo,(function(e){var t=ea(this);xa(t)||(""==(e=String(e))?t.port=null:Ja(t,e,Va))})),pathname:po(co,(function(e){var t=ea(this);t.cannotBeABaseURL||(t.path=[],Ja(t,e+"",$a))})),search:po(uo,(function(e){var t=ea(this);""==(e=String(e))?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",Ja(t,e,Xa)),Jr(t.searchParams).updateSearchParams(t.query)})),searchParams:po(ho),hash:po(fo,(function(e){var t=ea(this);""!=(e=String(e))?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",Ja(t,e,Qa)):t.fragment=null}))}),ee(eo,"toJSON",(function(){return to.call(this)}),{enumerable:!0}),ee(eo,"toString",(function(){return to.call(this)}),{enumerable:!0}),Xr){var mo=Xr.createObjectURL,go=Xr.revokeObjectURL;mo&&ee(Za,"createObjectURL",(function(e){return mo.apply(Xr,arguments)})),go&&ee(Za,"revokeObjectURL",(function(e){return go.apply(Xr,arguments)}))}function vo(e){return(vo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function yo(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bo(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function wo(e,t,n){return t&&bo(e.prototype,t),n&&bo(e,n),e}function ko(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function To(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function So(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?To(Object(n),!0).forEach((function(t){ko(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):To(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Eo(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Ao(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}nt(Za,"URL"),Oe({global:!0,forced:!rr,sham:!a},{URL:Za}),function(e){var t=function(){try{return!!Symbol.iterator}catch(e){return!1}}(),n=function(e){var n={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t&&(n[Symbol.iterator]=function(){return n}),n},i=function(e){return encodeURIComponent(e).replace(/%20/g,"+")},r=function(e){return decodeURIComponent(String(e).replace(/\+/g," "))};(function(){try{var t=e.URLSearchParams;return"a=1"===new t("?a=1").toString()&&"function"==typeof t.prototype.set}catch(e){return!1}})()||function(){var r=function e(t){Object.defineProperty(this,"_entries",{writable:!0,value:{}});var n=vo(t);if("undefined"===n);else if("string"===n)""!==t&&this._fromString(t);else if(t instanceof e){var i=this;t.forEach((function(e,t){i.append(t,e)}))}else{if(null===t||"object"!==n)throw new TypeError("Unsupported input's type for URLSearchParams");if("[object Array]"===Object.prototype.toString.call(t))for(var r=0;r<t.length;r++){var a=t[r];if("[object Array]"!==Object.prototype.toString.call(a)&&2===a.length)throw new TypeError("Expected [string, any] as entry at index "+r+" of URLSearchParams's input");this.append(a[0],a[1])}else for(var o in t)t.hasOwnProperty(o)&&this.append(o,t[o])}},a=r.prototype;a.append=function(e,t){e in this._entries?this._entries[e].push(String(t)):this._entries[e]=[String(t)]},a.delete=function(e){delete this._entries[e]},a.get=function(e){return e in this._entries?this._entries[e][0]:null},a.getAll=function(e){return e in this._entries?this._entries[e].slice(0):[]},a.has=function(e){return e in this._entries},a.set=function(e,t){this._entries[e]=[String(t)]},a.forEach=function(e,t){var n;for(var i in this._entries)if(this._entries.hasOwnProperty(i)){n=this._entries[i];for(var r=0;r<n.length;r++)e.call(t,n[r],i,this)}},a.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),n(e)},a.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),n(e)},a.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),n(e)},t&&(a[Symbol.iterator]=a.entries),a.toString=function(){var e=[];return this.forEach((function(t,n){e.push(i(n)+"="+i(t))})),e.join("&")},e.URLSearchParams=r}();var a=e.URLSearchParams.prototype;"function"!=typeof a.sort&&(a.sort=function(){var e=this,t=[];this.forEach((function(n,i){t.push([i,n]),e._entries||e.delete(i)})),t.sort((function(e,t){return e[0]<t[0]?-1:e[0]>t[0]?1:0})),e._entries&&(e._entries={});for(var n=0;n<t.length;n++)this.append(t[n][0],t[n][1])}),"function"!=typeof a._fromString&&Object.defineProperty(a,"_fromString",{enumerable:!1,configurable:!1,writable:!1,value:function(e){if(this._entries)this._entries={};else{var t=[];this.forEach((function(e,n){t.push(n)}));for(var n=0;n<t.length;n++)this.delete(t[n])}var i,a=(e=e.replace(/^\?/,"")).split("&");for(n=0;n<a.length;n++)i=a[n].split("="),this.append(r(i[0]),i.length>1?r(i[1]):"")}})}(void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof self?self:e),function(e){if(function(){try{var t=new e.URL("b","http://a");return t.pathname="c d","http://a/c%20d"===t.href&&t.searchParams}catch(e){return!1}}()||function(){var t=e.URL,n=function(t,n){"string"!=typeof t&&(t=String(t));var i,r=document;if(n&&(void 0===e.location||n!==e.location.href)){(i=(r=document.implementation.createHTMLDocument("")).createElement("base")).href=n,r.head.appendChild(i);try{if(0!==i.href.indexOf(n))throw new Error(i.href)}catch(e){throw new Error("URL unable to set base "+n+" due to "+e)}}var a=r.createElement("a");if(a.href=t,i&&(r.body.appendChild(a),a.href=a.href),":"===a.protocol||!/:/.test(a.href))throw new TypeError("Invalid URL");Object.defineProperty(this,"_anchorElement",{value:a});var o=new e.URLSearchParams(this.search),s=!0,l=!0,c=this;["append","delete","set"].forEach((function(e){var t=o[e];o[e]=function(){t.apply(o,arguments),s&&(l=!1,c.search=o.toString(),l=!0)}})),Object.defineProperty(this,"searchParams",{value:o,enumerable:!0});var u=void 0;Object.defineProperty(this,"_updateSearchParams",{enumerable:!1,configurable:!1,writable:!1,value:function(){this.search!==u&&(u=this.search,l&&(s=!1,this.searchParams._fromString(this.search),s=!0))}})},i=n.prototype;["hash","host","hostname","port","protocol"].forEach((function(e){!function(e){Object.defineProperty(i,e,{get:function(){return this._anchorElement[e]},set:function(t){this._anchorElement[e]=t},enumerable:!0})}(e)})),Object.defineProperty(i,"search",{get:function(){return this._anchorElement.search},set:function(e){this._anchorElement.search=e,this._updateSearchParams()},enumerable:!0}),Object.defineProperties(i,{toString:{get:function(){var e=this;return function(){return e.href}}},href:{get:function(){return this._anchorElement.href.replace(/\?$/,"")},set:function(e){this._anchorElement.href=e,this._updateSearchParams()},enumerable:!0},pathname:{get:function(){return this._anchorElement.pathname.replace(/(^\/?)/,"/")},set:function(e){this._anchorElement.pathname=e},enumerable:!0},origin:{get:function(){var e={"http:":80,"https:":443,"ftp:":21}[this._anchorElement.protocol],t=this._anchorElement.port!=e&&""!==this._anchorElement.port;return this._anchorElement.protocol+"//"+this._anchorElement.hostname+(t?":"+this._anchorElement.port:"")},enumerable:!0},password:{get:function(){return""},set:function(e){},enumerable:!0},username:{get:function(){return""},set:function(e){},enumerable:!0}}),n.createObjectURL=function(e){return t.createObjectURL.apply(t,arguments)},n.revokeObjectURL=function(e){return t.revokeObjectURL.apply(t,arguments)},e.URL=n}(),void 0!==e.location&&!("origin"in e.location)){var t=function(){return e.location.protocol+"//"+e.location.hostname+(e.location.port?":"+e.location.port:"")};try{Object.defineProperty(e.location,"origin",{get:t,enumerable:!0})}catch(n){setInterval((function(){e.location.origin=t()}),100)}}}(void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof self?self:e);var xo=Xe("isConcatSpreadable"),Co=zn>=51||!r((function(){var e=[];return e[xo]=!1,e.concat()[0]!==e})),Po=Kn("concat"),Io=function(e){if(!g(e))return!1;var t=e[xo];return void 0!==t?!!t:Me(e)};Oe({target:"Array",proto:!0,forced:!Co||!Po},{concat:function(e){var t,n,i,r,a,o=Ne(this),s=ot(o,0),l=0;for(t=-1,i=arguments.length;t<i;t++)if(a=-1===t?o:arguments[t],Io(a)){if(l+(r=le(a.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<r;n++,l++)n in a&&Dn(s,l,a[n])}else{if(l>=9007199254740991)throw TypeError("Maximum allowed index exceeded");Dn(s,l++,a)}return s.length=l,s}});var Oo=ct.filter,Lo=Kn("filter"),jo=Qt("filter");Oe({target:"Array",proto:!0,forced:!Lo||!jo},{filter:function(e){return Oo(this,e,arguments.length>1?arguments[1]:void 0)}});var Mo=ct.find,No=!0,Ro=Qt("find");"find"in[]&&Array(1).find((function(){No=!1})),Oe({target:"Array",proto:!0,forced:No||!Ro},{find:function(e){return Mo(this,e,arguments.length>1?arguments[1]:void 0)}}),dn("find");var _o=Xe("iterator"),Uo=!1;try{var Fo=0,Do={next:function(){return{done:!!Fo++}},return:function(){Uo=!0}};Do[_o]=function(){return this},Array.from(Do,(function(){throw 2}))}catch(e){}var qo=function(e,t){if(!t&&!Uo)return!1;var n=!1;try{var i={};i[_o]=function(){return{next:function(){return{done:n=!0}}}},e(i)}catch(e){}return n},Ho=!qo((function(e){Array.from(e)}));Oe({target:"Array",stat:!0,forced:Ho},{from:mr});var Bo=de.includes,Vo=Qt("indexOf",{ACCESSORS:!0,1:0});Oe({target:"Array",proto:!0,forced:!Vo},{includes:function(e){return Bo(this,e,arguments.length>1?arguments[1]:void 0)}}),dn("includes");var zo=ct.map,Wo=Kn("map"),Ko=Qt("map");Oe({target:"Array",proto:!0,forced:!Wo||!Ko},{map:function(e){return zo(this,e,arguments.length>1?arguments[1]:void 0)}});var $o=function(e,t,n){var i,r;return An&&"function"==typeof(i=t.constructor)&&i!==n&&g(r=i.prototype)&&r!==n.prototype&&An(e,r),e},Yo="\t\n\v\f\r                　\u2028\u2029\ufeff",Go="["+Yo+"]",Xo=RegExp("^"+Go+Go+"*"),Qo=RegExp(Go+Go+"*$"),Jo=function(e){return function(t){var n=String(p(t));return 1&e&&(n=n.replace(Xo,"")),2&e&&(n=n.replace(Qo,"")),n}},Zo={start:Jo(1),end:Jo(2),trim:Jo(3)},es=ye.f,ts=A.f,ns=P.f,is=Zo.trim,rs=i.Number,as=rs.prototype,os="Number"==h(Be(as)),ss=function(e){var t,n,i,r,a,o,s,l,c=v(e,!1);if("string"==typeof c&&c.length>2)if(43===(t=(c=is(c)).charCodeAt(0))||45===t){if(88===(n=c.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+c}for(o=(a=c.slice(2)).length,s=0;s<o;s++)if((l=a.charCodeAt(s))<48||l>r)return NaN;return parseInt(a,i)}return+c};if(Pe("Number",!rs(" 0o1")||!rs("0b1")||rs("+0x1"))){for(var ls,cs=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof cs&&(os?r((function(){as.valueOf.call(n)})):"Number"!=h(n))?$o(new rs(ss(t)),n,cs):ss(t)},us=a?es(rs):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),hs=0;us.length>hs;hs++)b(rs,ls=us[hs])&&!b(cs,ls)&&ns(cs,ls,ts(rs,ls));cs.prototype=as,as.constructor=cs,ee(i,"Number",cs)}var fs=r((function(){Re(1)}));Oe({target:"Object",stat:!0,forced:fs},{keys:function(e){return Re(Ne(e))}});var ds=function(e){if(qi(e))throw TypeError("The method doesn't accept regular expressions");return e},ps=Xe("match"),ms=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[ps]=!1,"/./"[e](t)}catch(e){}}return!1};Oe({target:"String",proto:!0,forced:!ms("includes")},{includes:function(e){return!!~String(p(this)).indexOf(ds(e),arguments.length>1?arguments[1]:void 0)}});var gs=!r((function(){return Object.isExtensible(Object.preventExtensions({}))})),vs=t((function(e){var t=P.f,n=B("meta"),i=0,r=Object.isExtensible||function(){return!0},a=function(e){t(e,n,{value:{objectID:"O"+ ++i,weakData:{}}})},o=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!g(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!b(e,n)){if(!r(e))return"F";if(!t)return"E";a(e)}return e[n].objectID},getWeakData:function(e,t){if(!b(e,n)){if(!r(e))return!0;if(!t)return!1;a(e)}return e[n].weakData},onFreeze:function(e){return gs&&o.REQUIRED&&r(e)&&!b(e,n)&&a(e),e}};W[n]=!0})),ys=(vs.REQUIRED,vs.fastKey,vs.getWeakData,vs.onFreeze,t((function(e){var t=function(e,t){this.stopped=e,this.result=t};(e.exports=function(e,n,i,r,a){var o,s,l,c,u,h,f,d=rt(n,i,r?2:1);if(a)o=e;else{if("function"!=typeof(s=pr(e)))throw TypeError("Target is not iterable");if(fr(s)){for(l=0,c=le(e.length);c>l;l++)if((u=r?d(x(f=e[l])[0],f[1]):d(e[l]))&&u instanceof t)return u;return new t(!1)}o=s.call(e)}for(h=o.next;!(f=h.call(o)).done;)if("object"==typeof(u=cr(o,d,f.value,r))&&u&&u instanceof t)return u;return new t(!1)}).stop=function(e){return new t(!0,e)}}))),bs=vs.getWeakData,ws=Z.set,ks=Z.getterFor,Ts=ct.find,Ss=ct.findIndex,Es=0,As=function(e){return e.frozen||(e.frozen=new xs)},xs=function(){this.entries=[]},Cs=function(e,t){return Ts(e.entries,(function(e){return e[0]===t}))};xs.prototype={get:function(e){var t=Cs(this,e);if(t)return t[1]},has:function(e){return!!Cs(this,e)},set:function(e,t){var n=Cs(this,e);n?n[1]=t:this.entries.push([e,t])},delete:function(e){var t=Ss(this.entries,(function(t){return t[0]===e}));return~t&&this.entries.splice(t,1),!!~t}};var Ps={getConstructor:function(e,t,n,i){var r=e((function(e,a){ar(e,r,t),ws(e,{type:t,id:Es++,frozen:void 0}),null!=a&&ys(a,e[i],e,n)})),a=ks(t),o=function(e,t,n){var i=a(e),r=bs(x(t),!0);return!0===r?As(i).set(t,n):r[i.id]=n,e};return Er(r.prototype,{delete:function(e){var t=a(this);if(!g(e))return!1;var n=bs(e);return!0===n?As(t).delete(e):n&&b(n,t.id)&&delete n[t.id]},has:function(e){var t=a(this);if(!g(e))return!1;var n=bs(e);return!0===n?As(t).has(e):n&&b(n,t.id)}}),Er(r.prototype,n?{get:function(e){var t=a(this);if(g(e)){var n=bs(e);return!0===n?As(t).get(e):n?n[t.id]:void 0}},set:function(e,t){return o(this,e,t)}}:{add:function(e){return o(this,e,!0)}}),r}},Is=(t((function(e){var t,n=Z.enforce,a=!i.ActiveXObject&&"ActiveXObject"in i,o=Object.isExtensible,s=function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},l=e.exports=function(e,t,n){var a=-1!==e.indexOf("Map"),o=-1!==e.indexOf("Weak"),s=a?"set":"add",l=i[e],c=l&&l.prototype,u=l,h={},f=function(e){var t=c[e];ee(c,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(o&&!g(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return o&&!g(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(o&&!g(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})};if(Pe(e,"function"!=typeof l||!(o||c.forEach&&!r((function(){(new l).entries().next()})))))u=n.getConstructor(t,e,a,s),vs.REQUIRED=!0;else if(Pe(e,!0)){var d=new u,p=d[s](o?{}:-0,1)!=d,m=r((function(){d.has(1)})),v=qo((function(e){new l(e)})),y=!o&&r((function(){for(var e=new l,t=5;t--;)e[s](t,t);return!e.has(-0)}));v||((u=t((function(t,n){ar(t,u,e);var i=$o(new l,t,u);return null!=n&&ys(n,i[s],i,a),i}))).prototype=c,c.constructor=u),(m||y)&&(f("delete"),f("has"),a&&f("get")),(y||p)&&f(s),o&&c.clear&&delete c.clear}return h[e]=u,Oe({global:!0,forced:u!=l},h),nt(u,e),o||n.setStrong(u,e,a),u}("WeakMap",s,Ps);if(F&&a){t=Ps.getConstructor(s,"WeakMap",!0),vs.REQUIRED=!0;var c=l.prototype,u=c.delete,h=c.has,f=c.get,d=c.set;Er(c,{delete:function(e){if(g(e)&&!o(e)){var i=n(this);return i.frozen||(i.frozen=new t),u.call(this,e)||i.frozen.delete(e)}return u.call(this,e)},has:function(e){if(g(e)&&!o(e)){var i=n(this);return i.frozen||(i.frozen=new t),h.call(this,e)||i.frozen.has(e)}return h.call(this,e)},get:function(e){if(g(e)&&!o(e)){var i=n(this);return i.frozen||(i.frozen=new t),h.call(this,e)?f.call(this,e):i.frozen.get(e)}return f.call(this,e)},set:function(e,i){if(g(e)&&!o(e)){var r=n(this);r.frozen||(r.frozen=new t),h.call(this,e)?d.call(this,e,i):r.frozen.set(e,i)}else d.call(this,e,i);return this}})}})),ct.every),Os=$t("every"),Ls=Qt("every");Oe({target:"Array",proto:!0,forced:!Os||!Ls},{every:function(e){return Is(this,e,arguments.length>1?arguments[1]:void 0)}}),Oe({target:"Object",stat:!0,forced:Object.assign!==lr},{assign:lr});var js=Zo.trim;Oe({target:"String",proto:!0,forced:function(e){return r((function(){return!!Yo[e]()||"​᠎"!="​᠎"[e]()||Yo[e].name!==e}))}("trim")},{trim:function(){return js(this)}});var Ms=ct.some,Ns=$t("some"),Rs=Qt("some");Oe({target:"Array",proto:!0,forced:!Ns||!Rs},{some:function(e){return Ms(this,e,arguments.length>1?arguments[1]:void 0)}});var _s="".repeat||function(e){var t=String(p(this)),n="",i=oe(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(n+=t);return n},Us=1..toFixed,Fs=Math.floor,Ds=function(e,t,n){return 0===t?n:t%2==1?Ds(e,t-1,n*e):Ds(e*e,t/2,n)},qs=Us&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){Us.call({})}));Oe({target:"Number",proto:!0,forced:qs},{toFixed:function(e){var t,n,i,r,a=function(e){if("number"!=typeof e&&"Number"!=h(e))throw TypeError("Incorrect invocation");return+e}(this),o=oe(e),s=[0,0,0,0,0,0],l="",c="0",u=function(e,t){for(var n=-1,i=t;++n<6;)i+=e*s[n],s[n]=i%1e7,i=Fs(i/1e7)},f=function(e){for(var t=6,n=0;--t>=0;)n+=s[t],s[t]=Fs(n/e),n=n%e*1e7},d=function(){for(var e=6,t="";--e>=0;)if(""!==t||0===e||0!==s[e]){var n=String(s[e]);t=""===t?n:t+_s.call("0",7-n.length)+n}return t};if(o<0||o>20)throw RangeError("Incorrect fraction digits");if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return String(a);if(a<0&&(l="-",a=-a),a>1e-21)if(n=(t=function(e){for(var t=0,n=e;n>=4096;)t+=12,n/=4096;for(;n>=2;)t+=1,n/=2;return t}(a*Ds(2,69,1))-69)<0?a*Ds(2,-t,1):a/Ds(2,t,1),n*=4503599627370496,(t=52-t)>0){for(u(0,n),i=o;i>=7;)u(1e7,0),i-=7;for(u(Ds(10,i,1),0),i=t-1;i>=23;)f(1<<23),i-=23;f(1<<i),u(1,1),f(2),c=d()}else u(0,n),u(1<<-t,0),c=d()+_s.call("0",o);return c=o>0?l+((r=c.length)<=o?"0."+_s.call("0",o-r)+c:c.slice(0,r-o)+"."+c.slice(r-o)):l+c}});var Hs=l.f,Bs=function(e){return function(t){for(var n,i=m(t),r=Re(i),o=r.length,s=0,l=[];o>s;)n=r[s++],a&&!Hs.call(i,n)||l.push(e?[n,i[n]]:i[n]);return l}},Vs={entries:Bs(!0),values:Bs(!1)},zs=Vs.entries;Oe({target:"Object",stat:!0},{entries:function(e){return zs(e)}});var Ws=Vs.values;Oe({target:"Object",stat:!0},{values:function(e){return Ws(e)}});var Ks={addCSS:!0,thumbWidth:15,watch:!0};function $s(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}Oe({target:"Number",stat:!0},{isNaN:function(e){return e!=e}});var Ys=function(e){return null!=e?e.constructor:null},Gs=function(e,t){return Boolean(e&&t&&e instanceof t)},Xs=function(e){return null==e},Qs=function(e){return Ys(e)===Object},Js=function(e){return Ys(e)===String},Zs=function(e){return Array.isArray(e)},el=function(e){return Gs(e,NodeList)},tl=Js,nl=Zs,il=el,rl=function(e){return Gs(e,Element)},al=function(e){return Gs(e,Event)},ol=function(e){return Xs(e)||(Js(e)||Zs(e)||el(e))&&!e.length||Qs(e)&&!Object.keys(e).length};function sl(e,t){if(t<1){var n=function(e){var t="".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}(t);return parseFloat(e.toFixed(n))}return Math.round(e/t)*t}Ii("match",1,(function(e,t,n){return[function(t){var n=p(this),i=null==t?void 0:t[e];return void 0!==i?i.call(t,n):new RegExp(t)[e](String(n))},function(e){var i=n(t,e,this);if(i.done)return i.value;var r=x(e),a=String(this);if(!r.global)return ji(r,a);var o=r.unicode;r.lastIndex=0;for(var s,l=[],c=0;null!==(s=ji(r,a));){var u=String(s[0]);l[c]=u,""===u&&(r.lastIndex=Li(a,le(r.lastIndex),o)),c++}return 0===c?null:l}]}));var ll,cl,ul,hl=function(){function e(t,n){yo(this,e),rl(t)?this.element=t:tl(t)&&(this.element=document.querySelector(t)),rl(this.element)&&ol(this.element.rangeTouch)&&(this.config=Object.assign({},Ks,n),this.init())}return wo(e,[{key:"init",value:function(){e.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this)}},{key:"destroy",value:function(){e.enabled&&(this.listeners(!1),this.element.rangeTouch=null)}},{key:"listeners",value:function(e){var t=this,n=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach((function(e){t.element[n](e,(function(e){return t.set(e)}),!1)}))}},{key:"get",value:function(t){if(!e.enabled||!al(t))return null;var n,i=t.target,r=t.changedTouches[0],a=parseFloat(i.getAttribute("min"))||0,o=parseFloat(i.getAttribute("max"))||100,s=parseFloat(i.getAttribute("step"))||1,l=o-a,c=i.getBoundingClientRect(),u=100/c.width*(this.config.thumbWidth/2)/100;return(n=100/c.width*(r.clientX-c.left))<0?n=0:n>100&&(n=100),n<50?n-=(100-2*n)*u:n>50&&(n+=2*(n-50)*u),a+sl(l*(n/100),s)}},{key:"set",value:function(t){e.enabled&&al(t)&&!t.target.disabled&&(t.preventDefault(),t.target.value=this.get(t),function(e,t){if(e&&t){var n=new Event(t);e.dispatchEvent(n)}}(t.target,"touchend"===t.type?"change":"input"))}}],[{key:"setup",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null;if(ol(t)||tl(t)?i=Array.from(document.querySelectorAll(tl(t)?t:'input[type="range"]')):rl(t)?i=[t]:il(t)?i=Array.from(t):nl(t)&&(i=t.filter(rl)),ol(i))return null;var r=Object.assign({},Ks,n);if(tl(t)&&r.watch){var a=new MutationObserver((function(n){Array.from(n).forEach((function(n){Array.from(n.addedNodes).forEach((function(n){if(rl(n)&&$s(n,t))new e(n,r)}))}))}));a.observe(document.body,{childList:!0,subtree:!0})}return i.map((function(t){return new e(t,n)}))}},{key:"enabled",get:function(){return"ontouchstart"in document.documentElement}}]),e}(),fl=i.Promise,dl=Xe("species"),pl=function(e){var t=ie(e),n=P.f;a&&t&&!t[dl]&&n(t,dl,{configurable:!0,get:function(){return this}})},ml=/(iphone|ipod|ipad).*applewebkit/i.test(qn),gl=i.location,vl=i.setImmediate,yl=i.clearImmediate,bl=i.process,wl=i.MessageChannel,kl=i.Dispatch,Tl=0,Sl={},El=function(e){if(Sl.hasOwnProperty(e)){var t=Sl[e];delete Sl[e],t()}},Al=function(e){return function(){El(e)}},xl=function(e){El(e.data)},Cl=function(e){i.postMessage(e+"",gl.protocol+"//"+gl.host)};vl&&yl||(vl=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return Sl[++Tl]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},ll(Tl),Tl},yl=function(e){delete Sl[e]},"process"==h(bl)?ll=function(e){bl.nextTick(Al(e))}:kl&&kl.now?ll=function(e){kl.now(Al(e))}:wl&&!ml?(ul=(cl=new wl).port2,cl.port1.onmessage=xl,ll=rt(ul.postMessage,ul,1)):!i.addEventListener||"function"!=typeof postMessage||i.importScripts||r(Cl)?ll="onreadystatechange"in T("script")?function(e){Ue.appendChild(T("script")).onreadystatechange=function(){Ue.removeChild(this),El(e)}}:function(e){setTimeout(Al(e),0)}:(ll=Cl,i.addEventListener("message",xl,!1)));var Pl,Il,Ol,Ll,jl,Ml,Nl,Rl,_l={set:vl,clear:yl},Ul=A.f,Fl=_l.set,Dl=i.MutationObserver||i.WebKitMutationObserver,ql=i.process,Hl=i.Promise,Bl="process"==h(ql),Vl=Ul(i,"queueMicrotask"),zl=Vl&&Vl.value;zl||(Pl=function(){var e,t;for(Bl&&(e=ql.domain)&&e.exit();Il;){t=Il.fn,Il=Il.next;try{t()}catch(e){throw Il?Ll():Ol=void 0,e}}Ol=void 0,e&&e.enter()},Bl?Ll=function(){ql.nextTick(Pl)}:Dl&&!ml?(jl=!0,Ml=document.createTextNode(""),new Dl(Pl).observe(Ml,{characterData:!0}),Ll=function(){Ml.data=jl=!jl}):Hl&&Hl.resolve?(Nl=Hl.resolve(void 0),Rl=Nl.then,Ll=function(){Rl.call(Nl,Pl)}):Ll=function(){Fl.call(i,Pl)});var Wl,Kl,$l,Yl,Gl=zl||function(e){var t={fn:e,next:void 0};Ol&&(Ol.next=t),Il||(Il=t,Ll()),Ol=t},Xl=function(e){var t,n;this.promise=new e((function(e,i){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=i})),this.resolve=it(t),this.reject=it(n)},Ql={f:function(e){return new Xl(e)}},Jl=function(e,t){if(x(e),g(t)&&t.constructor===e)return t;var n=Ql.f(e);return(0,n.resolve)(t),n.promise},Zl=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}},ec=_l.set,tc=Xe("species"),nc="Promise",ic=Z.get,rc=Z.set,ac=Z.getterFor(nc),oc=fl,sc=i.TypeError,lc=i.document,cc=i.process,uc=ie("fetch"),hc=Ql.f,fc=hc,dc="process"==h(cc),pc=!!(lc&&lc.createEvent&&i.dispatchEvent),mc=Pe(nc,(function(){if(!(_(oc)!==String(oc))){if(66===zn)return!0;if(!dc&&"function"!=typeof PromiseRejectionEvent)return!0}if(zn>=51&&/native code/.test(oc))return!1;var e=oc.resolve(1),t=function(e){e((function(){}),(function(){}))};return(e.constructor={})[tc]=t,!(e.then((function(){}))instanceof t)})),gc=mc||!qo((function(e){oc.all(e).catch((function(){}))})),vc=function(e){var t;return!(!g(e)||"function"!=typeof(t=e.then))&&t},yc=function(e,t,n){if(!t.notified){t.notified=!0;var i=t.reactions;Gl((function(){for(var r=t.value,a=1==t.state,o=0;i.length>o;){var s,l,c,u=i[o++],h=a?u.ok:u.fail,f=u.resolve,d=u.reject,p=u.domain;try{h?(a||(2===t.rejection&&Tc(e,t),t.rejection=1),!0===h?s=r:(p&&p.enter(),s=h(r),p&&(p.exit(),c=!0)),s===u.promise?d(sc("Promise-chain cycle")):(l=vc(s))?l.call(s,f,d):f(s)):d(r)}catch(e){p&&!c&&p.exit(),d(e)}}t.reactions=[],t.notified=!1,n&&!t.rejection&&wc(e,t)}))}},bc=function(e,t,n){var r,a;pc?((r=lc.createEvent("Event")).promise=t,r.reason=n,r.initEvent(e,!1,!0),i.dispatchEvent(r)):r={promise:t,reason:n},(a=i["on"+e])?a(r):"unhandledrejection"===e&&function(e,t){var n=i.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))}("Unhandled promise rejection",n)},wc=function(e,t){ec.call(i,(function(){var n,i=t.value;if(kc(t)&&(n=Zl((function(){dc?cc.emit("unhandledRejection",i,e):bc("unhandledrejection",e,i)})),t.rejection=dc||kc(t)?2:1,n.error))throw n.value}))},kc=function(e){return 1!==e.rejection&&!e.parent},Tc=function(e,t){ec.call(i,(function(){dc?cc.emit("rejectionHandled",e):bc("rejectionhandled",e,t.value)}))},Sc=function(e,t,n,i){return function(r){e(t,n,r,i)}},Ec=function(e,t,n,i){t.done||(t.done=!0,i&&(t=i),t.value=n,t.state=2,yc(e,t,!0))},Ac=function(e,t,n,i){if(!t.done){t.done=!0,i&&(t=i);try{if(e===n)throw sc("Promise can't be resolved itself");var r=vc(n);r?Gl((function(){var i={done:!1};try{r.call(n,Sc(Ac,e,i,t),Sc(Ec,e,i,t))}catch(n){Ec(e,i,n,t)}})):(t.value=n,t.state=1,yc(e,t,!1))}catch(n){Ec(e,{done:!1},n,t)}}};mc&&(oc=function(e){ar(this,oc,nc),it(e),Wl.call(this);var t=ic(this);try{e(Sc(Ac,this,t),Sc(Ec,this,t))}catch(e){Ec(this,t,e)}},(Wl=function(e){rc(this,{type:nc,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=Er(oc.prototype,{then:function(e,t){var n=ac(this),i=hc(Bi(this,oc));return i.ok="function"!=typeof e||e,i.fail="function"==typeof t&&t,i.domain=dc?cc.domain:void 0,n.parent=!0,n.reactions.push(i),0!=n.state&&yc(this,n,!1),i.promise},catch:function(e){return this.then(void 0,e)}}),Kl=function(){var e=new Wl,t=ic(e);this.promise=e,this.resolve=Sc(Ac,e,t),this.reject=Sc(Ec,e,t)},Ql.f=hc=function(e){return e===oc||e===$l?new Kl(e):fc(e)},"function"==typeof fl&&(Yl=fl.prototype.then,ee(fl.prototype,"then",(function(e,t){var n=this;return new oc((function(e,t){Yl.call(n,e,t)})).then(e,t)}),{unsafe:!0}),"function"==typeof uc&&Oe({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return Jl(oc,uc.apply(i,arguments))}}))),Oe({global:!0,wrap:!0,forced:mc},{Promise:oc}),nt(oc,nc,!1),pl(nc),$l=ie(nc),Oe({target:nc,stat:!0,forced:mc},{reject:function(e){var t=hc(this);return t.reject.call(void 0,e),t.promise}}),Oe({target:nc,stat:!0,forced:mc},{resolve:function(e){return Jl(this,e)}}),Oe({target:nc,stat:!0,forced:gc},{all:function(e){var t=this,n=hc(t),i=n.resolve,r=n.reject,a=Zl((function(){var n=it(t.resolve),a=[],o=0,s=1;ys(e,(function(e){var l=o++,c=!1;a.push(void 0),s++,n.call(t,e).then((function(e){c||(c=!0,a[l]=e,--s||i(a))}),r)})),--s||i(a)}));return a.error&&r(a.value),n.promise},race:function(e){var t=this,n=hc(t),i=n.reject,r=Zl((function(){var r=it(t.resolve);ys(e,(function(e){r.call(t,e).then(n.resolve,i)}))}));return r.error&&i(r.value),n.promise}});var xc,Cc=A.f,Pc="".startsWith,Ic=Math.min,Oc=ms("startsWith"),Lc=!(Oc||(xc=Cc(String.prototype,"startsWith"),!xc||xc.writable));Oe({target:"String",proto:!0,forced:!Lc&&!Oc},{startsWith:function(e){var t=String(p(this));ds(e);var n=le(Ic(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return Pc?Pc.call(t,i,n):t.slice(n,n+i.length)===i}});var jc,Mc,Nc,Rc=function(e){return null!=e?e.constructor:null},_c=function(e,t){return Boolean(e&&t&&e instanceof t)},Uc=function(e){return null==e},Fc=function(e){return Rc(e)===Object},Dc=function(e){return Rc(e)===String},qc=function(e){return Array.isArray(e)},Hc=function(e){return _c(e,NodeList)},Bc=function(e){return Uc(e)||(Dc(e)||qc(e)||Hc(e))&&!e.length||Fc(e)&&!Object.keys(e).length},Vc=Uc,zc=Fc,Wc=function(e){return Rc(e)===Number&&!Number.isNaN(e)},Kc=Dc,$c=function(e){return Rc(e)===Boolean},Yc=function(e){return Rc(e)===Function},Gc=qc,Xc=Hc,Qc=function(e){return _c(e,Element)},Jc=function(e){return _c(e,Event)},Zc=function(e){return _c(e,KeyboardEvent)},eu=function(e){return _c(e,TextTrack)||!Uc(e)&&Dc(e.kind)},tu=function(e){if(_c(e,window.URL))return!0;if(!Dc(e))return!1;var t=e;e.startsWith("http://")&&e.startsWith("https://")||(t="http://".concat(e));try{return!Bc(new URL(t).hostname)}catch(e){return!1}},nu=Bc,iu=(jc=document.createElement("span"),Mc={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},Nc=Object.keys(Mc).find((function(e){return void 0!==jc.style[e]})),!!Kc(Nc)&&Mc[Nc]);function ru(e,t){setTimeout((function(){try{e.hidden=!0,e.offsetHeight,e.hidden=!1}catch(e){}}),t)}var au={isIE:
/* @cc_on!@ */
!!document.documentMode,isEdge:window.navigator.userAgent.includes("Edge"),isWebkit:"WebkitAppearance"in document.documentElement.style&&!/Edge/.test(navigator.userAgent),isIPhone:/(iPhone|iPod)/gi.test(navigator.platform),isIos:/(iPad|iPhone|iPod)/gi.test(navigator.platform)},ou=function(e){return function(t,n,i,r){it(n);var a=Ne(t),o=d(a),s=le(a.length),l=e?s-1:0,c=e?-1:1;if(i<2)for(;;){if(l in o){r=o[l],l+=c;break}if(l+=c,e?l<0:s<=l)throw TypeError("Reduce of empty array with no initial value")}for(;e?l>=0:s>l;l+=c)l in o&&(r=n(r,o[l],l,a));return r}},su={left:ou(!1),right:ou(!0)}.left,lu=$t("reduce"),cu=Qt("reduce",{1:0});function uu(e,t){return t.split(".").reduce((function(e,t){return e&&e[t]}),e)}function hu(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(!n.length)return e;var r=n.shift();return zc(r)?(Object.keys(r).forEach((function(t){zc(r[t])?(Object.keys(e).includes(t)||Object.assign(e,ko({},t,{})),hu(e[t],r[t])):Object.assign(e,ko({},t,r[t]))})),hu.apply(void 0,[e].concat(n))):e}function fu(e,t){var n=e.length?e:[e];Array.from(n).reverse().forEach((function(e,n){var i=n>0?t.cloneNode(!0):t,r=e.parentNode,a=e.nextSibling;i.appendChild(e),a?r.insertBefore(i,a):r.appendChild(i)}))}function du(e,t){Qc(e)&&!nu(t)&&Object.entries(t).filter((function(e){var t=Eo(e,2)[1];return!Vc(t)})).forEach((function(t){var n=Eo(t,2),i=n[0],r=n[1];return e.setAttribute(i,r)}))}function pu(e,t,n){var i=document.createElement(e);return zc(t)&&du(i,t),Kc(n)&&(i.innerText=n),i}function mu(e,t,n,i){Qc(t)&&t.appendChild(pu(e,n,i))}function gu(e){Xc(e)||Gc(e)?Array.from(e).forEach(gu):Qc(e)&&Qc(e.parentNode)&&e.parentNode.removeChild(e)}function vu(e){if(Qc(e))for(var t=e.childNodes.length;t>0;)e.removeChild(e.lastChild),t-=1}function yu(e,t){return Qc(t)&&Qc(t.parentNode)&&Qc(e)?(t.parentNode.replaceChild(e,t),e):null}function bu(e,t){if(!Kc(e)||nu(e))return{};var n={},i=hu({},t);return e.split(",").forEach((function(e){var t=e.trim(),r=t.replace(".",""),a=t.replace(/[[\]]/g,"").split("="),o=Eo(a,1)[0],s=a.length>1?a[1].replace(/["']/g,""):"";switch(t.charAt(0)){case".":Kc(i.class)?n.class="".concat(i.class," ").concat(r):n.class=r;break;case"#":n.id=t.replace("#","");break;case"[":n[o]=s}})),hu(i,n)}function wu(e,t){if(Qc(e)){var n=t;$c(n)||(n=!e.hidden),e.hidden=n}}function ku(e,t,n){if(Xc(e))return Array.from(e).map((function(e){return ku(e,t,n)}));if(Qc(e)){var i="toggle";return void 0!==n&&(i=n?"add":"remove"),e.classList[i](t),e.classList.contains(t)}return!1}function Tu(e,t){return Qc(e)&&e.classList.contains(t)}function Su(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}function Eu(e){return this.elements.container.querySelectorAll(e)}function Au(e){return this.elements.container.querySelector(e)}function xu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Qc(e)&&(e.focus({preventScroll:!0}),t&&ku(e,this.config.classNames.tabFocus))}Oe({target:"Array",proto:!0,forced:!lu||!cu},{reduce:function(e){return su(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}});var Cu,Pu={"audio/ogg":"vorbis","audio/wav":"1","video/webm":"vp8, vorbis","video/mp4":"avc1.42E01E, mp4a.40.2","video/ogg":"theora"},Iu={audio:"canPlayType"in document.createElement("audio"),video:"canPlayType"in document.createElement("video"),check:function(e,t,n){var i=au.isIPhone&&n&&Iu.playsinline,r=Iu[e]||"html5"!==t;return{api:r,ui:r&&Iu.rangeInput&&("video"!==e||!au.isIPhone||i)}},pip:!(au.isIPhone||!Yc(pu("video").webkitSetPresentationMode)&&(!document.pictureInPictureEnabled||pu("video").disablePictureInPicture)),airplay:Yc(window.WebKitPlaybackTargetAvailabilityEvent),playsinline:"playsInline"in document.createElement("video"),mime:function(e){if(nu(e))return!1;var t=Eo(e.split("/"),1)[0],n=e;if(!this.isHTML5||t!==this.type)return!1;Object.keys(Pu).includes(n)&&(n+='; codecs="'.concat(Pu[e],'"'));try{return Boolean(n&&this.media.canPlayType(n).replace(/no/,""))}catch(e){return!1}},textTracks:"textTracks"in document.createElement("video"),rangeInput:(Cu=document.createElement("input"),Cu.type="range","range"===Cu.type),touch:"ontouchstart"in document.documentElement,transitions:!1!==iu,reducedMotion:"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches},Ou=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){return e=!0,null}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(e){}return e}();function Lu(e,t,n){var i=this,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(e&&"addEventListener"in e&&!nu(t)&&Yc(n)){var s=t.split(" "),l=o;Ou&&(l={passive:a,capture:o}),s.forEach((function(t){i&&i.eventListeners&&r&&i.eventListeners.push({element:e,type:t,callback:n,options:l}),e[r?"addEventListener":"removeEventListener"](t,n,l)}))}}function ju(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];Lu.call(this,e,t,n,!0,i,r)}function Mu(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];Lu.call(this,e,t,n,!1,i,r)}function Nu(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=function o(){Mu(e,n,o,r,a);for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];i.apply(t,l)};Lu.call(this,e,n,o,!0,r,a)}function Ru(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(Qc(e)&&!nu(t)){var r=new CustomEvent(t,{bubbles:n,detail:So({},i,{plyr:this})});e.dispatchEvent(r)}}function _u(){this&&this.eventListeners&&(this.eventListeners.forEach((function(e){var t=e.element,n=e.type,i=e.callback,r=e.options;t.removeEventListener(n,i,r)})),this.eventListeners=[])}function Uu(){var e=this;return new Promise((function(t){return e.ready?setTimeout(t,0):ju.call(e,e.elements.container,"ready",t)})).then((function(){}))}function Fu(e){return!!(Gc(e)||Kc(e)&&e.includes(":"))&&(Gc(e)?e:e.split(":")).map(Number).every(Wc)}function Du(e){if(!Gc(e)||!e.every(Wc))return null;var t=Eo(e,2),n=t[0],i=t[1],r=function e(t,n){return 0===n?t:e(n,t%n)}(n,i);return[n/r,i/r]}function qu(e){var t=function(e){return Fu(e)?e.split(":").map(Number):null},n=t(e);if(null===n&&(n=t(this.config.ratio)),null===n&&!nu(this.embed)&&Gc(this.embed.ratio)&&(n=this.embed.ratio),null===n&&this.isHTML5){var i=this.media;n=Du([i.videoWidth,i.videoHeight])}return n}function Hu(e){if(!this.isVideo)return{};var t=this.elements.wrapper,n=qu.call(this,e),i=Eo(Gc(n)?n:[0,0],2),r=100/i[0]*i[1];if(t.style.paddingBottom="".concat(r,"%"),this.isVimeo&&this.supported.ui){var a=(240-r)/4.8;this.media.style.transform="translateY(-".concat(a,"%)")}else this.isHTML5&&t.classList.toggle(this.config.classNames.videoFixedRatio,null!==n);return{padding:r,ratio:n}}var Bu={getSources:function(){var e=this;return this.isHTML5?Array.from(this.media.querySelectorAll("source")).filter((function(t){var n=t.getAttribute("type");return!!nu(n)||Iu.mime.call(e,n)})):[]},getQualityOptions:function(){return this.config.quality.forced?this.config.quality.options:Bu.getSources.call(this).map((function(e){return Number(e.getAttribute("size"))})).filter(Boolean)},setup:function(){if(this.isHTML5){var e=this;e.options.speed=e.config.speed.options,nu(this.config.ratio)||Hu.call(e),Object.defineProperty(e.media,"quality",{get:function(){var t=Bu.getSources.call(e).find((function(t){return t.getAttribute("src")===e.source}));return t&&Number(t.getAttribute("size"))},set:function(t){if(e.quality!==t){if(e.config.quality.forced&&Yc(e.config.quality.onChange))e.config.quality.onChange(t);else{var n=Bu.getSources.call(e).find((function(e){return Number(e.getAttribute("size"))===t}));if(!n)return;var i=e.media,r=i.currentTime,a=i.paused,o=i.preload,s=i.readyState,l=i.playbackRate;e.media.src=n.getAttribute("src"),("none"!==o||s)&&(e.once("loadedmetadata",(function(){e.speed=l,e.currentTime=r,a||e.play()})),e.media.load())}Ru.call(e,e.media,"qualitychange",!1,{quality:t})}}})}},cancelRequests:function(){this.isHTML5&&(gu(Bu.getSources.call(this)),this.media.setAttribute("src",this.config.blankVideo),this.media.load(),this.debug.log("Cancelled network requests"))}};function Vu(e){return Gc(e)?e.filter((function(t,n){return e.indexOf(t)===n})):e}var zu=P.f,Wu=ye.f,Ku=Z.set,$u=Xe("match"),Yu=i.RegExp,Gu=Yu.prototype,Xu=/a/g,Qu=/a/g,Ju=new Yu(Xu)!==Xu,Zu=oi.UNSUPPORTED_Y;if(a&&Pe("RegExp",!Ju||Zu||r((function(){return Qu[$u]=!1,Yu(Xu)!=Xu||Yu(Qu)==Qu||"/a/i"!=Yu(Xu,"i")})))){for(var eh=function(e,t){var n,i=this instanceof eh,r=qi(e),a=void 0===t;if(!i&&r&&e.constructor===eh&&a)return e;Ju?r&&!a&&(e=e.source):e instanceof eh&&(a&&(t=ri.call(e)),e=e.source),Zu&&(n=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,""));var o=$o(Ju?new Yu(e,t):Yu(e,t),i?this:Gu,eh);return Zu&&n&&Ku(o,{sticky:n}),o},th=function(e){e in eh||zu(eh,e,{configurable:!0,get:function(){return Yu[e]},set:function(t){Yu[e]=t}})},nh=Wu(Yu),ih=0;nh.length>ih;)th(nh[ih++]);Gu.constructor=eh,eh.prototype=Gu,ee(i,"RegExp",eh)}function rh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return nu(e)?e:e.toString().replace(/{(\d+)}/g,(function(e,t){return n[t].toString()}))}function ah(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1"),"g"),n.toString())}function oh(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.toString().replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}function sh(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.toString();return t=ah(t,"-"," "),t=ah(t,"_"," "),ah(t=oh(t)," ","")}function lh(e){var t=document.createElement("div");return t.appendChild(e),t.innerHTML}pl("RegExp");var ch={pip:"PIP",airplay:"AirPlay",html5:"HTML5",vimeo:"Vimeo",youtube:"YouTube"},uh=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(nu(e)||nu(t))return"";var n=uu(t.i18n,e);if(nu(n))return Object.keys(ch).includes(e)?ch[e]:"";var i={"{seektime}":t.seekTime,"{title}":t.title};return Object.entries(i).forEach((function(e){var t=Eo(e,2),i=t[0],r=t[1];n=ah(n,i,r)})),n},hh=function(){function e(t){yo(this,e),this.enabled=t.config.storage.enabled,this.key=t.config.storage.key}return wo(e,[{key:"get",value:function(t){if(!e.supported||!this.enabled)return null;var n=window.localStorage.getItem(this.key);if(nu(n))return null;var i=JSON.parse(n);return Kc(t)&&t.length?i[t]:i}},{key:"set",value:function(t){if(e.supported&&this.enabled&&zc(t)){var n=this.get();nu(n)&&(n={}),hu(n,t),window.localStorage.setItem(this.key,JSON.stringify(n))}}}],[{key:"supported",get:function(){try{if(!("localStorage"in window))return!1;return window.localStorage.setItem("___test","___test"),window.localStorage.removeItem("___test"),!0}catch(e){return!1}}}]),e}();function fh(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text";return new Promise((function(n,i){try{var r=new XMLHttpRequest;if(!("withCredentials"in r))return;r.addEventListener("load",(function(){if("text"===t)try{n(JSON.parse(r.responseText))}catch(e){n(r.responseText)}else n(r.response)})),r.addEventListener("error",(function(){throw new Error(r.status)})),r.open("GET",e,!0),r.responseType=t,r.send()}catch(e){i(e)}}))}function dh(e,t){if(Kc(e)){var n=Kc(t),i=function(){return null!==document.getElementById(t)},r=function(e,t){e.innerHTML=t,n&&i()||document.body.insertAdjacentElement("afterbegin",e)};if(!n||!i()){var a=hh.supported,o=document.createElement("div");if(o.setAttribute("hidden",""),n&&o.setAttribute("id",t),a){var s=window.localStorage.getItem("".concat("cache","-").concat(t));if(null!==s){var l=JSON.parse(s);r(o,l.content)}}fh(e).then((function(e){nu(e)||(a&&window.localStorage.setItem("".concat("cache","-").concat(t),JSON.stringify({content:e})),r(o,e))})).catch((function(){}))}}}var ph=Math.ceil,mh=Math.floor;Oe({target:"Math",stat:!0},{trunc:function(e){return(e>0?mh:ph)(e)}});var gh=function(e){return Math.trunc(e/60/60%60,10)},vh=function(e){return Math.trunc(e/60%60,10)},yh=function(e){return Math.trunc(e%60,10)};function bh(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!Wc(e))return bh(void 0,t,n);var i=function(e){return"0".concat(e).slice(-2)},r=gh(e),a=vh(e),o=yh(e);return r=t||r>0?"".concat(r,":"):"","".concat(n&&e>0?"-":"").concat(r).concat(i(a),":").concat(i(o))}var wh={getIconUrl:function(){var e=new URL(this.config.iconUrl,window.location).host!==window.location.host||au.isIE&&!window.svg4everybody;return{url:this.config.iconUrl,cors:e}},findElements:function(){try{return this.elements.controls=Au.call(this,this.config.selectors.controls.wrapper),this.elements.buttons={play:Eu.call(this,this.config.selectors.buttons.play),pause:Au.call(this,this.config.selectors.buttons.pause),restart:Au.call(this,this.config.selectors.buttons.restart),rewind:Au.call(this,this.config.selectors.buttons.rewind),fastForward:Au.call(this,this.config.selectors.buttons.fastForward),mute:Au.call(this,this.config.selectors.buttons.mute),pip:Au.call(this,this.config.selectors.buttons.pip),airplay:Au.call(this,this.config.selectors.buttons.airplay),settings:Au.call(this,this.config.selectors.buttons.settings),captions:Au.call(this,this.config.selectors.buttons.captions),fullscreen:Au.call(this,this.config.selectors.buttons.fullscreen)},this.elements.progress=Au.call(this,this.config.selectors.progress),this.elements.inputs={seek:Au.call(this,this.config.selectors.inputs.seek),volume:Au.call(this,this.config.selectors.inputs.volume)},this.elements.display={buffer:Au.call(this,this.config.selectors.display.buffer),currentTime:Au.call(this,this.config.selectors.display.currentTime),duration:Au.call(this,this.config.selectors.display.duration)},Qc(this.elements.progress)&&(this.elements.display.seekTooltip=this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))),!0}catch(e){return this.debug.warn("It looks like there is a problem with your custom controls HTML",e),this.toggleNativeControls(!0),!1}},createIcon:function(e,t){var n=wh.getIconUrl.call(this),i="".concat(n.cors?"":n.url,"#").concat(this.config.iconPrefix),r=document.createElementNS("http://www.w3.org/2000/svg","svg");du(r,hu(t,{role:"presentation",focusable:"false"}));var a=document.createElementNS("http://www.w3.org/2000/svg","use"),o="".concat(i,"-").concat(e);return"href"in a&&a.setAttributeNS("http://www.w3.org/1999/xlink","href",o),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o),r.appendChild(a),r},createLabel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=uh(e,this.config),i=So({},t,{class:[t.class,this.config.classNames.hidden].filter(Boolean).join(" ")});return pu("span",i,n)},createBadge:function(e){if(nu(e))return null;var t=pu("span",{class:this.config.classNames.menu.value});return t.appendChild(pu("span",{class:this.config.classNames.menu.badge},e)),t},createButton:function(e,t){var n=this,i=hu({},t),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.toString();return(t=sh(t)).charAt(0).toLowerCase()+t.slice(1)}(e),a={element:"button",toggle:!1,label:null,icon:null,labelPressed:null,iconPressed:null};switch(["element","icon","label"].forEach((function(e){Object.keys(i).includes(e)&&(a[e]=i[e],delete i[e])})),"button"!==a.element||Object.keys(i).includes("type")||(i.type="button"),Object.keys(i).includes("class")?i.class.split(" ").some((function(e){return e===n.config.classNames.control}))||hu(i,{class:"".concat(i.class," ").concat(this.config.classNames.control)}):i.class=this.config.classNames.control,e){case"play":a.toggle=!0,a.label="play",a.labelPressed="pause",a.icon="play",a.iconPressed="pause";break;case"mute":a.toggle=!0,a.label="mute",a.labelPressed="unmute",a.icon="volume",a.iconPressed="muted";break;case"captions":a.toggle=!0,a.label="enableCaptions",a.labelPressed="disableCaptions",a.icon="captions-off",a.iconPressed="captions-on";break;case"fullscreen":a.toggle=!0,a.label="enterFullscreen",a.labelPressed="exitFullscreen",a.icon="enter-fullscreen",a.iconPressed="exit-fullscreen";break;case"play-large":i.class+=" ".concat(this.config.classNames.control,"--overlaid"),r="play",a.label="play",a.icon="play";break;default:nu(a.label)&&(a.label=r),nu(a.icon)&&(a.icon=e)}var o=pu(a.element);return a.toggle?(o.appendChild(wh.createIcon.call(this,a.iconPressed,{class:"icon--pressed"})),o.appendChild(wh.createIcon.call(this,a.icon,{class:"icon--not-pressed"})),o.appendChild(wh.createLabel.call(this,a.labelPressed,{class:"label--pressed"})),o.appendChild(wh.createLabel.call(this,a.label,{class:"label--not-pressed"}))):(o.appendChild(wh.createIcon.call(this,a.icon)),o.appendChild(wh.createLabel.call(this,a.label))),hu(i,bu(this.config.selectors.buttons[r],i)),du(o,i),"play"===r?(Gc(this.elements.buttons[r])||(this.elements.buttons[r]=[]),this.elements.buttons[r].push(o)):this.elements.buttons[r]=o,o},createRange:function(e,t){var n=pu("input",hu(bu(this.config.selectors.inputs[e]),{type:"range",min:0,max:100,step:.01,value:0,autocomplete:"off",role:"slider","aria-label":uh(e,this.config),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":0},t));return this.elements.inputs[e]=n,wh.updateRangeFill.call(this,n),hl.setup(n),n},createProgress:function(e,t){var n=pu("progress",hu(bu(this.config.selectors.display[e]),{min:0,max:100,value:0,role:"progressbar","aria-hidden":!0},t));if("volume"!==e){n.appendChild(pu("span",null,"0"));var i={played:"played",buffer:"buffered"}[e],r=i?uh(i,this.config):"";n.innerText="% ".concat(r.toLowerCase())}return this.elements.display[e]=n,n},createTime:function(e,t){var n=bu(this.config.selectors.display[e],t),i=pu("div",hu(n,{class:"".concat(n.class?n.class:""," ").concat(this.config.classNames.display.time," ").trim(),"aria-label":uh(e,this.config)}),"00:00");return this.elements.display[e]=i,i},bindMenuItemShortcuts:function(e,t){var n=this;ju.call(this,e,"keydown keyup",(function(i){if([32,38,39,40].includes(i.which)&&(i.preventDefault(),i.stopPropagation(),"keydown"!==i.type)){var r,a=Su(e,'[role="menuitemradio"]');if(!a&&[32,39].includes(i.which))wh.showMenuPanel.call(n,t,!0);else 32!==i.which&&(40===i.which||a&&39===i.which?(r=e.nextElementSibling,Qc(r)||(r=e.parentNode.firstElementChild)):(r=e.previousElementSibling,Qc(r)||(r=e.parentNode.lastElementChild)),xu.call(n,r,!0))}}),!1),ju.call(this,e,"keyup",(function(e){13===e.which&&wh.focusFirstMenuItem.call(n,null,!0)}))},createMenuItem:function(e){var t=this,n=e.value,i=e.list,r=e.type,a=e.title,o=e.badge,s=void 0===o?null:o,l=e.checked,c=void 0!==l&&l,u=bu(this.config.selectors.inputs[r]),h=pu("button",hu(u,{type:"button",role:"menuitemradio",class:"".concat(this.config.classNames.control," ").concat(u.class?u.class:"").trim(),"aria-checked":c,value:n})),f=pu("span");f.innerHTML=a,Qc(s)&&f.appendChild(s),h.appendChild(f),Object.defineProperty(h,"checked",{enumerable:!0,get:function(){return"true"===h.getAttribute("aria-checked")},set:function(e){e&&Array.from(h.parentNode.children).filter((function(e){return Su(e,'[role="menuitemradio"]')})).forEach((function(e){return e.setAttribute("aria-checked","false")})),h.setAttribute("aria-checked",e?"true":"false")}}),this.listeners.bind(h,"click keyup",(function(e){if(!Zc(e)||32===e.which){switch(e.preventDefault(),e.stopPropagation(),h.checked=!0,r){case"language":t.currentTrack=Number(n);break;case"quality":t.quality=n;break;case"speed":t.speed=parseFloat(n)}wh.showMenuPanel.call(t,"home",Zc(e))}}),r,!1),wh.bindMenuItemShortcuts.call(this,h,r),i.appendChild(h)},formatTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!Wc(e))return e;var n=gh(this.duration)>0;return bh(e,n,t)},updateTimeDisplay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Qc(e)&&Wc(t)&&(e.innerText=wh.formatTime(t,n))},updateVolume:function(){this.supported.ui&&(Qc(this.elements.inputs.volume)&&wh.setRange.call(this,this.elements.inputs.volume,this.muted?0:this.volume),Qc(this.elements.buttons.mute)&&(this.elements.buttons.mute.pressed=this.muted||0===this.volume))},setRange:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Qc(e)&&(e.value=t,wh.updateRangeFill.call(this,e))},updateProgress:function(e){var t=this;if(this.supported.ui&&Jc(e)){var n=0;if(e)switch(e.type){case"timeupdate":case"seeking":case"seeked":n=function(e,t){return 0===e||0===t||Number.isNaN(e)||Number.isNaN(t)?0:(e/t*100).toFixed(2)}(this.currentTime,this.duration),"timeupdate"===e.type&&wh.setRange.call(this,this.elements.inputs.seek,n);break;case"playing":case"progress":!function(e,n){var i=Wc(n)?n:0,r=Qc(e)?e:t.elements.display.buffer;if(Qc(r)){r.value=i;var a=r.getElementsByTagName("span")[0];Qc(a)&&(a.childNodes[0].nodeValue=i)}}(this.elements.display.buffer,100*this.buffered)}}},updateRangeFill:function(e){var t=Jc(e)?e.target:e;if(Qc(t)&&"range"===t.getAttribute("type")){if(Su(t,this.config.selectors.inputs.seek)){t.setAttribute("aria-valuenow",this.currentTime);var n=wh.formatTime(this.currentTime),i=wh.formatTime(this.duration),r=uh("seekLabel",this.config);t.setAttribute("aria-valuetext",r.replace("{currentTime}",n).replace("{duration}",i))}else if(Su(t,this.config.selectors.inputs.volume)){var a=100*t.value;t.setAttribute("aria-valuenow",a),t.setAttribute("aria-valuetext","".concat(a.toFixed(1),"%"))}else t.setAttribute("aria-valuenow",t.value);au.isWebkit&&t.style.setProperty("--value","".concat(t.value/t.max*100,"%"))}},updateSeekTooltip:function(e){var t=this;if(this.config.tooltips.seek&&Qc(this.elements.inputs.seek)&&Qc(this.elements.display.seekTooltip)&&0!==this.duration){var n="".concat(this.config.classNames.tooltip,"--visible"),i=function(e){return ku(t.elements.display.seekTooltip,n,e)};if(this.touch)i(!1);else{var r=0,a=this.elements.progress.getBoundingClientRect();if(Jc(e))r=100/a.width*(e.pageX-a.left);else{if(!Tu(this.elements.display.seekTooltip,n))return;r=parseFloat(this.elements.display.seekTooltip.style.left,10)}r<0?r=0:r>100&&(r=100),wh.updateTimeDisplay.call(this,this.elements.display.seekTooltip,this.duration/100*r),this.elements.display.seekTooltip.style.left="".concat(r,"%"),Jc(e)&&["mouseenter","mouseleave"].includes(e.type)&&i("mouseenter"===e.type)}}},timeUpdate:function(e){var t=!Qc(this.elements.display.duration)&&this.config.invertTime;wh.updateTimeDisplay.call(this,this.elements.display.currentTime,t?this.duration-this.currentTime:this.currentTime,t),e&&"timeupdate"===e.type&&this.media.seeking||wh.updateProgress.call(this,e)},durationUpdate:function(){if(this.supported.ui&&(this.config.invertTime||!this.currentTime)){if(this.duration>=Math.pow(2,32))return wu(this.elements.display.currentTime,!0),void wu(this.elements.progress,!0);Qc(this.elements.inputs.seek)&&this.elements.inputs.seek.setAttribute("aria-valuemax",this.duration);var e=Qc(this.elements.display.duration);!e&&this.config.displayDuration&&this.paused&&wh.updateTimeDisplay.call(this,this.elements.display.currentTime,this.duration),e&&wh.updateTimeDisplay.call(this,this.elements.display.duration,this.duration),wh.updateSeekTooltip.call(this)}},toggleMenuButton:function(e,t){wu(this.elements.settings.buttons[e],!t)},updateSetting:function(e,t,n){var i=this.elements.settings.panels[e],r=null,a=t;if("captions"===e)r=this.currentTrack;else{if(r=nu(n)?this[e]:n,nu(r)&&(r=this.config[e].default),!nu(this.options[e])&&!this.options[e].includes(r))return void this.debug.warn("Unsupported value of '".concat(r,"' for ").concat(e));if(!this.config[e].options.includes(r))return void this.debug.warn("Disabled value of '".concat(r,"' for ").concat(e))}if(Qc(a)||(a=i&&i.querySelector('[role="menu"]')),Qc(a)){this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML=wh.getLabel.call(this,e,r);var o=a&&a.querySelector('[value="'.concat(r,'"]'));Qc(o)&&(o.checked=!0)}},getLabel:function(e,t){switch(e){case"speed":return 1===t?uh("normal",this.config):"".concat(t,"&times;");case"quality":if(Wc(t)){var n=uh("qualityLabel.".concat(t),this.config);return n.length?n:"".concat(t,"p")}return oh(t);case"captions":return Sh.getLabel.call(this);default:return null}},setQualityMenu:function(e){var t=this;if(Qc(this.elements.settings.panels.quality)){var n=this.elements.settings.panels.quality.querySelector('[role="menu"]');Gc(e)&&(this.options.quality=Vu(e).filter((function(e){return t.config.quality.options.includes(e)})));var i=!nu(this.options.quality)&&this.options.quality.length>1;if(wh.toggleMenuButton.call(this,"quality",i),vu(n),wh.checkMenu.call(this),i){var r=function(e){var n=uh("qualityBadge.".concat(e),t.config);return n.length?wh.createBadge.call(t,n):null};this.options.quality.sort((function(e,n){var i=t.config.quality.options;return i.indexOf(e)>i.indexOf(n)?1:-1})).forEach((function(e){wh.createMenuItem.call(t,{value:e,list:n,type:"quality",title:wh.getLabel.call(t,"quality",e),badge:r(e)})})),wh.updateSetting.call(this,"quality",n)}}},setCaptionsMenu:function(){var e=this;if(Qc(this.elements.settings.panels.captions)){var t=this.elements.settings.panels.captions.querySelector('[role="menu"]'),n=Sh.getTracks.call(this),i=Boolean(n.length);if(wh.toggleMenuButton.call(this,"captions",i),vu(t),wh.checkMenu.call(this),i){var r=n.map((function(n,i){return{value:i,checked:e.captions.toggled&&e.currentTrack===i,title:Sh.getLabel.call(e,n),badge:n.language&&wh.createBadge.call(e,n.language.toUpperCase()),list:t,type:"language"}}));r.unshift({value:-1,checked:!this.captions.toggled,title:uh("disabled",this.config),list:t,type:"language"}),r.forEach(wh.createMenuItem.bind(this)),wh.updateSetting.call(this,"captions",t)}}},setSpeedMenu:function(){var e=this;if(Qc(this.elements.settings.panels.speed)){var t=this.elements.settings.panels.speed.querySelector('[role="menu"]');this.options.speed=this.options.speed.filter((function(t){return t>=e.minimumSpeed&&t<=e.maximumSpeed}));var n=!nu(this.options.speed)&&this.options.speed.length>1;wh.toggleMenuButton.call(this,"speed",n),vu(t),wh.checkMenu.call(this),n&&(this.options.speed.forEach((function(n){wh.createMenuItem.call(e,{value:n,list:t,type:"speed",title:wh.getLabel.call(e,"speed",n)})})),wh.updateSetting.call(this,"speed",t))}},checkMenu:function(){var e=this.elements.settings.buttons,t=!nu(e)&&Object.values(e).some((function(e){return!e.hidden}));wu(this.elements.settings.menu,!t)},focusFirstMenuItem:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.elements.settings.popup.hidden){var n=e;Qc(n)||(n=Object.values(this.elements.settings.panels).find((function(e){return!e.hidden})));var i=n.querySelector('[role^="menuitem"]');xu.call(this,i,t)}},toggleMenu:function(e){var t=this.elements.settings.popup,n=this.elements.buttons.settings;if(Qc(t)&&Qc(n)){var i=t.hidden,r=i;if($c(e))r=e;else if(Zc(e)&&27===e.which)r=!1;else if(Jc(e)){var a=Yc(e.composedPath)?e.composedPath()[0]:e.target,o=t.contains(a);if(o||!o&&e.target!==n&&r)return}n.setAttribute("aria-expanded",r),wu(t,!r),ku(this.elements.container,this.config.classNames.menu.open,r),r&&Zc(e)?wh.focusFirstMenuItem.call(this,null,!0):r||i||xu.call(this,n,Zc(e))}},getMenuSize:function(e){var t=e.cloneNode(!0);t.style.position="absolute",t.style.opacity=0,t.removeAttribute("hidden"),e.parentNode.appendChild(t);var n=t.scrollWidth,i=t.scrollHeight;return gu(t),{width:n,height:i}},showMenuPanel:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.elements.container.querySelector("#plyr-settings-".concat(this.id,"-").concat(t));if(Qc(i)){var r=i.parentNode,a=Array.from(r.children).find((function(e){return!e.hidden}));if(Iu.transitions&&!Iu.reducedMotion){r.style.width="".concat(a.scrollWidth,"px"),r.style.height="".concat(a.scrollHeight,"px");var o=wh.getMenuSize.call(this,i),s=function t(n){n.target===r&&["width","height"].includes(n.propertyName)&&(r.style.width="",r.style.height="",Mu.call(e,r,iu,t))};ju.call(this,r,iu,s),r.style.width="".concat(o.width,"px"),r.style.height="".concat(o.height,"px")}wu(a,!0),wu(i,!1),wh.focusFirstMenuItem.call(this,i,n)}},setDownloadUrl:function(){var e=this.elements.buttons.download;Qc(e)&&e.setAttribute("href",this.download)},create:function(e){var t=this,n=wh.bindMenuItemShortcuts,i=wh.createButton,r=wh.createProgress,a=wh.createRange,o=wh.createTime,s=wh.setQualityMenu,l=wh.setSpeedMenu,c=wh.showMenuPanel;this.elements.controls=null,this.config.controls.includes("play-large")&&this.elements.container.appendChild(i.call(this,"play-large"));var u=pu("div",bu(this.config.selectors.controls.wrapper));this.elements.controls=u;var h={class:"plyr__controls__item"};return Vu(this.config.controls).forEach((function(s){if("restart"===s&&u.appendChild(i.call(t,"restart",h)),"rewind"===s&&u.appendChild(i.call(t,"rewind",h)),"play"===s&&u.appendChild(i.call(t,"play",h)),"fast-forward"===s&&u.appendChild(i.call(t,"fast-forward",h)),"progress"===s){var l=pu("div",{class:"".concat(h.class," plyr__progress__container")}),f=pu("div",bu(t.config.selectors.progress));if(f.appendChild(a.call(t,"seek",{id:"plyr-seek-".concat(e.id)})),f.appendChild(r.call(t,"buffer")),t.config.tooltips.seek){var d=pu("span",{class:t.config.classNames.tooltip},"00:00");f.appendChild(d),t.elements.display.seekTooltip=d}t.elements.progress=f,l.appendChild(t.elements.progress),u.appendChild(l)}if("current-time"===s&&u.appendChild(o.call(t,"currentTime",h)),"duration"===s&&u.appendChild(o.call(t,"duration",h)),"mute"===s||"volume"===s){var p=t.elements.volume;if(Qc(p)&&u.contains(p)||(p=pu("div",hu({},h,{class:"".concat(h.class," plyr__volume").trim()})),t.elements.volume=p,u.appendChild(p)),"mute"===s&&p.appendChild(i.call(t,"mute")),"volume"===s&&!au.isIos){var m={max:1,step:.05,value:t.config.volume};p.appendChild(a.call(t,"volume",hu(m,{id:"plyr-volume-".concat(e.id)})))}}if("captions"===s&&u.appendChild(i.call(t,"captions",h)),"settings"===s&&!nu(t.config.settings)){var g=pu("div",hu({},h,{class:"".concat(h.class," plyr__menu").trim(),hidden:""}));g.appendChild(i.call(t,"settings",{"aria-haspopup":!0,"aria-controls":"plyr-settings-".concat(e.id),"aria-expanded":!1}));var v=pu("div",{class:"plyr__menu__container",id:"plyr-settings-".concat(e.id),hidden:""}),y=pu("div"),b=pu("div",{id:"plyr-settings-".concat(e.id,"-home")}),w=pu("div",{role:"menu"});b.appendChild(w),y.appendChild(b),t.elements.settings.panels.home=b,t.config.settings.forEach((function(i){var r=pu("button",hu(bu(t.config.selectors.buttons.settings),{type:"button",class:"".concat(t.config.classNames.control," ").concat(t.config.classNames.control,"--forward"),role:"menuitem","aria-haspopup":!0,hidden:""}));n.call(t,r,i),ju.call(t,r,"click",(function(){c.call(t,i,!1)}));var a=pu("span",null,uh(i,t.config)),o=pu("span",{class:t.config.classNames.menu.value});o.innerHTML=e[i],a.appendChild(o),r.appendChild(a),w.appendChild(r);var s=pu("div",{id:"plyr-settings-".concat(e.id,"-").concat(i),hidden:""}),l=pu("button",{type:"button",class:"".concat(t.config.classNames.control," ").concat(t.config.classNames.control,"--back")});l.appendChild(pu("span",{"aria-hidden":!0},uh(i,t.config))),l.appendChild(pu("span",{class:t.config.classNames.hidden},uh("menuBack",t.config))),ju.call(t,s,"keydown",(function(e){37===e.which&&(e.preventDefault(),e.stopPropagation(),c.call(t,"home",!0))}),!1),ju.call(t,l,"click",(function(){c.call(t,"home",!1)})),s.appendChild(l),s.appendChild(pu("div",{role:"menu"})),y.appendChild(s),t.elements.settings.buttons[i]=r,t.elements.settings.panels[i]=s})),v.appendChild(y),g.appendChild(v),u.appendChild(g),t.elements.settings.popup=v,t.elements.settings.menu=g}if("pip"===s&&Iu.pip&&u.appendChild(i.call(t,"pip",h)),"airplay"===s&&Iu.airplay&&u.appendChild(i.call(t,"airplay",h)),"download"===s){var k=hu({},h,{element:"a",href:t.download,target:"_blank"});t.isHTML5&&(k.download="");var T=t.config.urls.download;!tu(T)&&t.isEmbed&&hu(k,{icon:"logo-".concat(t.provider),label:t.provider}),u.appendChild(i.call(t,"download",k))}"fullscreen"===s&&u.appendChild(i.call(t,"fullscreen",h))})),this.isHTML5&&s.call(this,Bu.getQualityOptions.call(this)),l.call(this),u},inject:function(){var e=this;if(this.config.loadSprite){var t=wh.getIconUrl.call(this);t.cors&&dh(t.url,"sprite-plyr")}this.id=Math.floor(1e4*Math.random());var n=null;this.elements.controls=null;var i={id:this.id,seektime:this.config.seekTime,title:this.config.title},r=!0;Yc(this.config.controls)&&(this.config.controls=this.config.controls.call(this,i)),this.config.controls||(this.config.controls=[]),Qc(this.config.controls)||Kc(this.config.controls)?n=this.config.controls:(n=wh.create.call(this,{id:this.id,seektime:this.config.seekTime,speed:this.speed,quality:this.quality,captions:Sh.getLabel.call(this)}),r=!1);var a,o=function(e){var t=e;return Object.entries(i).forEach((function(e){var n=Eo(e,2),i=n[0],r=n[1];t=ah(t,"{".concat(i,"}"),r)})),t};if(r&&(Kc(this.config.controls)?n=o(n):Qc(n)&&(n.innerHTML=o(n.innerHTML))),Kc(this.config.selectors.controls.container)&&(a=document.querySelector(this.config.selectors.controls.container)),Qc(a)||(a=this.elements.container),a[Qc(n)?"insertAdjacentElement":"insertAdjacentHTML"]("afterbegin",n),Qc(this.elements.controls)||wh.findElements.call(this),!nu(this.elements.buttons)){var s=function(t){var n=e.config.classNames.controlPressed;Object.defineProperty(t,"pressed",{enumerable:!0,get:function(){return Tu(t,n)},set:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];ku(t,n,e)}})};Object.values(this.elements.buttons).filter(Boolean).forEach((function(e){Gc(e)||Xc(e)?Array.from(e).filter(Boolean).forEach(s):s(e)}))}if(au.isEdge&&ru(a),this.config.tooltips.controls){var l=this.config,c=l.classNames,u=l.selectors,h="".concat(u.controls.wrapper," ").concat(u.labels," .").concat(c.hidden),f=Eu.call(this,h);Array.from(f).forEach((function(t){ku(t,e.config.classNames.hidden,!1),ku(t,e.config.classNames.tooltip,!0)}))}}};function kh(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e;if(t){var i=document.createElement("a");i.href=n,n=i.href}try{return new URL(n)}catch(e){return null}}function Th(e){var t=new URLSearchParams;return zc(e)&&Object.entries(e).forEach((function(e){var n=Eo(e,2),i=n[0],r=n[1];t.set(i,r)})),t}var Sh={setup:function(){if(this.supported.ui)if(!this.isVideo||this.isYouTube||this.isHTML5&&!Iu.textTracks)Gc(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&wh.setCaptionsMenu.call(this);else{if(Qc(this.elements.captions)||(this.elements.captions=pu("div",bu(this.config.selectors.captions)),function(e,t){Qc(e)&&Qc(t)&&t.parentNode.insertBefore(e,t.nextSibling)}(this.elements.captions,this.elements.wrapper)),au.isIE&&window.URL){var e=this.media.querySelectorAll("track");Array.from(e).forEach((function(e){var t=e.getAttribute("src"),n=kh(t);null!==n&&n.hostname!==window.location.href.hostname&&["http:","https:"].includes(n.protocol)&&fh(t,"blob").then((function(t){e.setAttribute("src",window.URL.createObjectURL(t))})).catch((function(){gu(e)}))}))}var t=Vu((navigator.languages||[navigator.language||navigator.userLanguage||"en"]).map((function(e){return e.split("-")[0]}))),n=(this.storage.get("language")||this.config.captions.language||"auto").toLowerCase();if("auto"===n)n=Eo(t,1)[0];var i=this.storage.get("captions");if($c(i)||(i=this.config.captions.active),Object.assign(this.captions,{toggled:!1,active:i,language:n,languages:t}),this.isHTML5){var r=this.config.captions.update?"addtrack removetrack":"removetrack";ju.call(this,this.media.textTracks,r,Sh.update.bind(this))}setTimeout(Sh.update.bind(this),0)}},update:function(){var e=this,t=Sh.getTracks.call(this,!0),n=this.captions,i=n.active,r=n.language,a=n.meta,o=n.currentTrackNode,s=Boolean(t.find((function(e){return e.language===r})));this.isHTML5&&this.isVideo&&t.filter((function(e){return!a.get(e)})).forEach((function(t){e.debug.log("Track added",t),a.set(t,{default:"showing"===t.mode}),t.mode="hidden",ju.call(e,t,"cuechange",(function(){return Sh.updateCues.call(e)}))})),(s&&this.language!==r||!t.includes(o))&&(Sh.setLanguage.call(this,r),Sh.toggle.call(this,i&&s)),ku(this.elements.container,this.config.classNames.captions.enabled,!nu(t)),(this.config.controls||[]).includes("settings")&&this.config.settings.includes("captions")&&wh.setCaptionsMenu.call(this)},toggle:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.supported.ui){var n=this.captions.toggled,i=this.config.classNames.captions.active,r=Vc(e)?!n:e;if(r!==n){if(t||(this.captions.active=r,this.storage.set({captions:r})),!this.language&&r&&!t){var a=Sh.getTracks.call(this),o=Sh.findTrack.call(this,[this.captions.language].concat(Ao(this.captions.languages)),!0);return this.captions.language=o.language,void Sh.set.call(this,a.indexOf(o))}this.elements.buttons.captions&&(this.elements.buttons.captions.pressed=r),ku(this.elements.container,i,r),this.captions.toggled=r,wh.updateSetting.call(this,"captions"),Ru.call(this,this.media,r?"captionsenabled":"captionsdisabled")}}},set:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Sh.getTracks.call(this);if(-1!==e)if(Wc(e))if(e in n){if(this.captions.currentTrack!==e){this.captions.currentTrack=e;var i=n[e],r=i||{},a=r.language;this.captions.currentTrackNode=i,wh.updateSetting.call(this,"captions"),t||(this.captions.language=a,this.storage.set({language:a})),this.isVimeo&&this.embed.enableTextTrack(a),Ru.call(this,this.media,"languagechange")}Sh.toggle.call(this,!0,t),this.isHTML5&&this.isVideo&&Sh.updateCues.call(this)}else this.debug.warn("Track not found",e);else this.debug.warn("Invalid caption argument",e);else Sh.toggle.call(this,!1,t)},setLanguage:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(Kc(e)){var n=e.toLowerCase();this.captions.language=n;var i=Sh.getTracks.call(this),r=Sh.findTrack.call(this,[n]);Sh.set.call(this,i.indexOf(r),t)}else this.debug.warn("Invalid language argument",e)},getTracks:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Array.from((this.media||{}).textTracks||[]);return n.filter((function(n){return!e.isHTML5||t||e.captions.meta.has(n)})).filter((function(e){return["captions","subtitles"].includes(e.kind)}))},findTrack:function(e){var t,n=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Sh.getTracks.call(this),a=function(e){return Number((n.captions.meta.get(e)||{}).default)},o=Array.from(r).sort((function(e,t){return a(t)-a(e)}));return e.every((function(e){return!(t=o.find((function(t){return t.language===e})))})),t||(i?o[0]:void 0)},getCurrentTrack:function(){return Sh.getTracks.call(this)[this.currentTrack]},getLabel:function(e){var t=e;return!eu(t)&&Iu.textTracks&&this.captions.toggled&&(t=Sh.getCurrentTrack.call(this)),eu(t)?nu(t.label)?nu(t.language)?uh("enabled",this.config):e.language.toUpperCase():t.label:uh("disabled",this.config)},updateCues:function(e){if(this.supported.ui)if(Qc(this.elements.captions))if(Vc(e)||Array.isArray(e)){var t=e;if(!t){var n=Sh.getCurrentTrack.call(this);t=Array.from((n||{}).activeCues||[]).map((function(e){return e.getCueAsHTML()})).map(lh)}var i=t.map((function(e){return e.trim()})).join("\n");if(i!==this.elements.captions.innerHTML){vu(this.elements.captions);var r=pu("span",bu(this.config.selectors.caption));r.innerHTML=i,this.elements.captions.appendChild(r),Ru.call(this,this.media,"cuechange")}}else this.debug.warn("updateCues: Invalid input",e);else this.debug.warn("No captions element to render to")}},Eh={enabled:!0,title:"",debug:!1,autoplay:!1,autopause:!0,playsinline:!0,seekTime:10,volume:1,muted:!1,duration:null,displayDuration:!0,invertTime:!0,toggleInvert:!0,ratio:null,clickToPlay:!0,hideControls:!0,resetOnEnd:!1,disableContextMenu:!0,loadSprite:!0,iconPrefix:"plyr",iconUrl:"https://cdn.plyr.io/3.5.10/plyr.svg",blankVideo:"https://cdn.plyr.io/static/blank.mp4",quality:{default:576,options:[4320,2880,2160,1440,1080,720,576,480,360,240],forced:!1,onChange:null},loop:{active:!1},speed:{selected:1,options:[.5,.75,1,1.25,1.5,1.75,2,4]},keyboard:{focused:!0,global:!1},tooltips:{controls:!1,seek:!0},captions:{active:!1,language:"auto",update:!1},fullscreen:{enabled:!0,fallback:!0,iosNative:!1},storage:{enabled:!0,key:"plyr"},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["captions","quality","speed"],i18n:{restart:"Restart",rewind:"Rewind {seektime}s",play:"Play",pause:"Pause",fastForward:"Forward {seektime}s",seek:"Seek",seekLabel:"{currentTime} of {duration}",played:"Played",buffered:"Buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",mute:"Mute",unmute:"Unmute",enableCaptions:"Enable captions",disableCaptions:"Disable captions",download:"Download",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",frameTitle:"Player for {title}",captions:"Captions",settings:"Settings",pip:"PIP",menuBack:"Go back to previous menu",speed:"Speed",normal:"Normal",quality:"Quality",loop:"Loop",start:"Start",end:"End",all:"All",reset:"Reset",disabled:"Disabled",enabled:"Enabled",advertisement:"Ad",qualityBadge:{2160:"4K",1440:"HD",1080:"HD",720:"HD",576:"SD",480:"SD"}},urls:{download:null,vimeo:{sdk:"https://player.vimeo.com/api/player.js",iframe:"https://player.vimeo.com/video/{0}?{1}",api:"https://vimeo.com/api/v2/video/{0}.json"},youtube:{sdk:"https://www.youtube.com/iframe_api",api:"https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"},googleIMA:{sdk:"https://imasdk.googleapis.com/js/sdkloader/ima3.js"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,fastForward:null,mute:null,volume:null,captions:null,download:null,fullscreen:null,pip:null,airplay:null,speed:null,quality:null,loop:null,language:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","seeked","emptied","ratechange","cuechange","download","enterfullscreen","exitfullscreen","captionsenabled","captionsdisabled","languagechange","controlshidden","controlsshown","ready","statechange","qualitychange","adsloaded","adscontentpause","adscontentresume","adstarted","adsmidpoint","adscomplete","adsallcomplete","adsimpression","adsclick"],selectors:{editable:"input, textarea, select, [contenteditable]",container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr]",buttons:{play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',fastForward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',captions:'[data-plyr="captions"]',download:'[data-plyr="download"]',fullscreen:'[data-plyr="fullscreen"]',pip:'[data-plyr="pip"]',airplay:'[data-plyr="airplay"]',settings:'[data-plyr="settings"]',loop:'[data-plyr="loop"]'},inputs:{seek:'[data-plyr="seek"]',volume:'[data-plyr="volume"]',speed:'[data-plyr="speed"]',language:'[data-plyr="language"]',quality:'[data-plyr="quality"]'},display:{currentTime:".plyr__time--current",duration:".plyr__time--duration",buffer:".plyr__progress__buffer",loop:".plyr__progress__loop",volume:".plyr__volume--display"},progress:".plyr__progress",captions:".plyr__captions",caption:".plyr__caption"},classNames:{type:"plyr--{0}",provider:"plyr--{0}",video:"plyr__video-wrapper",embed:"plyr__video-embed",videoFixedRatio:"plyr__video-wrapper--fixed-ratio",embedContainer:"plyr__video-embed__container",poster:"plyr__poster",posterEnabled:"plyr__poster-enabled",ads:"plyr__ads",control:"plyr__control",controlPressed:"plyr__control--pressed",playing:"plyr--playing",paused:"plyr--paused",stopped:"plyr--stopped",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",cues:"plyr__cues",hidden:"plyr__sr-only",hideControls:"plyr--hide-controls",isIos:"plyr--is-ios",isTouch:"plyr--is-touch",uiSupported:"plyr--full-ui",noTransition:"plyr--no-transition",display:{time:"plyr__time"},menu:{value:"plyr__menu__value",badge:"plyr__badge",open:"plyr--menu-open"},captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",fallback:"plyr--fullscreen-fallback"},pip:{supported:"plyr--pip-supported",active:"plyr--pip-active"},airplay:{supported:"plyr--airplay-supported",active:"plyr--airplay-active"},tabFocus:"plyr__tab-focus",previewThumbnails:{thumbContainer:"plyr__preview-thumb",thumbContainerShown:"plyr__preview-thumb--is-shown",imageContainer:"plyr__preview-thumb__image-container",timeContainer:"plyr__preview-thumb__time-container",scrubbingContainer:"plyr__preview-scrubbing",scrubbingContainerShown:"plyr__preview-scrubbing--is-shown"}},attributes:{embed:{provider:"data-plyr-provider",id:"data-plyr-embed-id"}},ads:{enabled:!1,publisherId:"",tagUrl:""},previewThumbnails:{enabled:!1,src:""},vimeo:{byline:!1,portrait:!1,title:!1,speed:!0,transparent:!1,sidedock:!1,controls:!1,referrerPolicy:null},youtube:{noCookie:!1,rel:0,showinfo:0,iv_load_policy:3,modestbranding:1}},Ah="picture-in-picture",xh="inline",Ch={html5:"html5",youtube:"youtube",vimeo:"vimeo"},Ph="audio",Ih="video";var Oh=function(){},Lh=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];yo(this,e),this.enabled=window.console&&t,this.enabled&&this.log("Debugging enabled")}return wo(e,[{key:"log",get:function(){return this.enabled?Function.prototype.bind.call(console.log,console):Oh}},{key:"warn",get:function(){return this.enabled?Function.prototype.bind.call(console.warn,console):Oh}},{key:"error",get:function(){return this.enabled?Function.prototype.bind.call(console.error,console):Oh}}]),e}(),jh=function(){function e(t){var n=this;yo(this,e),this.player=t,this.prefix=e.prefix,this.property=e.property,this.scrollPosition={x:0,y:0},this.forceFallback="force"===t.config.fullscreen.fallback,ju.call(this.player,document,"ms"===this.prefix?"MSFullscreenChange":"".concat(this.prefix,"fullscreenchange"),(function(){n.onChange()})),ju.call(this.player,this.player.elements.container,"dblclick",(function(e){Qc(n.player.elements.controls)&&n.player.elements.controls.contains(e.target)||n.toggle()})),ju.call(this,this.player.elements.container,"keydown",(function(e){return n.trapFocus(e)})),this.update()}return wo(e,[{key:"onChange",value:function(){if(this.enabled){var e=this.player.elements.buttons.fullscreen;Qc(e)&&(e.pressed=this.active),Ru.call(this.player,this.target,this.active?"enterfullscreen":"exitfullscreen",!0)}}},{key:"toggleFallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e?this.scrollPosition={x:window.scrollX||0,y:window.scrollY||0}:window.scrollTo(this.scrollPosition.x,this.scrollPosition.y),document.body.style.overflow=e?"hidden":"",ku(this.target,this.player.config.classNames.fullscreen.fallback,e),au.isIos){var t=document.head.querySelector('meta[name="viewport"]'),n="viewport-fit=cover";t||(t=document.createElement("meta")).setAttribute("name","viewport");var i=Kc(t.content)&&t.content.includes(n);e?(this.cleanupViewport=!i,i||(t.content+=",".concat(n))):this.cleanupViewport&&(t.content=t.content.split(",").filter((function(e){return e.trim()!==n})).join(","))}this.onChange()}},{key:"trapFocus",value:function(e){if(!au.isIos&&this.active&&"Tab"===e.key&&9===e.keyCode){var t=document.activeElement,n=Eu.call(this.player,"a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),i=Eo(n,1)[0],r=n[n.length-1];t!==r||e.shiftKey?t===i&&e.shiftKey&&(r.focus(),e.preventDefault()):(i.focus(),e.preventDefault())}}},{key:"update",value:function(){var t;this.enabled?(t=this.forceFallback?"Fallback (forced)":e.native?"Native":"Fallback",this.player.debug.log("".concat(t," fullscreen enabled"))):this.player.debug.log("Fullscreen not supported and fallback disabled");ku(this.player.elements.container,this.player.config.classNames.fullscreen.enabled,this.enabled)}},{key:"enter",value:function(){this.enabled&&(au.isIos&&this.player.config.fullscreen.iosNative?this.target.webkitEnterFullscreen():!e.native||this.forceFallback?this.toggleFallback(!0):this.prefix?nu(this.prefix)||this.target["".concat(this.prefix,"Request").concat(this.property)]():this.target.requestFullscreen({navigationUI:"hide"}))}},{key:"exit",value:function(){if(this.enabled)if(au.isIos&&this.player.config.fullscreen.iosNative)this.target.webkitExitFullscreen(),this.player.play();else if(!e.native||this.forceFallback)this.toggleFallback(!1);else if(this.prefix){if(!nu(this.prefix)){var t="moz"===this.prefix?"Cancel":"Exit";document["".concat(this.prefix).concat(t).concat(this.property)]()}}else(document.cancelFullScreen||document.exitFullscreen).call(document)}},{key:"toggle",value:function(){this.active?this.exit():this.enter()}},{key:"usingNative",get:function(){return e.native&&!this.forceFallback}},{key:"enabled",get:function(){return(e.native||this.player.config.fullscreen.fallback)&&this.player.config.fullscreen.enabled&&this.player.supported.ui&&this.player.isVideo}},{key:"active",get:function(){return!!this.enabled&&(!e.native||this.forceFallback?Tu(this.target,this.player.config.classNames.fullscreen.fallback):(this.prefix?document["".concat(this.prefix).concat(this.property,"Element")]:document.fullscreenElement)===this.target)}},{key:"target",get:function(){return au.isIos&&this.player.config.fullscreen.iosNative?this.player.media:this.player.elements.container}}],[{key:"native",get:function(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)}},{key:"prefix",get:function(){if(Yc(document.exitFullscreen))return"";var e="";return["webkit","moz","ms"].some((function(t){return!(!Yc(document["".concat(t,"ExitFullscreen")])&&!Yc(document["".concat(t,"CancelFullScreen")]))&&(e=t,!0)})),e}},{key:"property",get:function(){return"moz"===this.prefix?"FullScreen":"Fullscreen"}}]),e}(),Mh=Math.sign||function(e){return 0==(e=+e)||e!=e?e:e<0?-1:1};function Nh(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return new Promise((function(n,i){var r=new Image,a=function(){delete r.onload,delete r.onerror,(r.naturalWidth>=t?n:i)(r)};Object.assign(r,{onload:a,onerror:a,src:e})}))}Oe({target:"Math",stat:!0},{sign:Mh});var Rh={addStyleHook:function(){ku(this.elements.container,this.config.selectors.container.replace(".",""),!0),ku(this.elements.container,this.config.classNames.uiSupported,this.supported.ui)},toggleNativeControls:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&this.isHTML5?this.media.setAttribute("controls",""):this.media.removeAttribute("controls")},build:function(){var e=this;if(this.listeners.media(),!this.supported.ui)return this.debug.warn("Basic support only for ".concat(this.provider," ").concat(this.type)),void Rh.toggleNativeControls.call(this,!0);Qc(this.elements.controls)||(wh.inject.call(this),this.listeners.controls()),Rh.toggleNativeControls.call(this),this.isHTML5&&Sh.setup.call(this),this.volume=null,this.muted=null,this.loop=null,this.quality=null,this.speed=null,wh.updateVolume.call(this),wh.timeUpdate.call(this),Rh.checkPlaying.call(this),ku(this.elements.container,this.config.classNames.pip.supported,Iu.pip&&this.isHTML5&&this.isVideo),ku(this.elements.container,this.config.classNames.airplay.supported,Iu.airplay&&this.isHTML5),ku(this.elements.container,this.config.classNames.isIos,au.isIos),ku(this.elements.container,this.config.classNames.isTouch,this.touch),this.ready=!0,setTimeout((function(){Ru.call(e,e.media,"ready")}),0),Rh.setTitle.call(this),this.poster&&Rh.setPoster.call(this,this.poster,!1).catch((function(){})),this.config.duration&&wh.durationUpdate.call(this)},setTitle:function(){var e=uh("play",this.config);if(Kc(this.config.title)&&!nu(this.config.title)&&(e+=", ".concat(this.config.title)),Array.from(this.elements.buttons.play||[]).forEach((function(t){t.setAttribute("aria-label",e)})),this.isEmbed){var t=Au.call(this,"iframe");if(!Qc(t))return;var n=nu(this.config.title)?"video":this.config.title,i=uh("frameTitle",this.config);t.setAttribute("title",i.replace("{title}",n))}},togglePoster:function(e){ku(this.elements.container,this.config.classNames.posterEnabled,e)},setPoster:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n&&this.poster?Promise.reject(new Error("Poster already set")):(this.media.setAttribute("poster",e),this.isHTML5?Promise.resolve(e):Uu.call(this).then((function(){return Nh(e)})).catch((function(n){throw e===t.poster&&Rh.togglePoster.call(t,!1),n})).then((function(){if(e!==t.poster)throw new Error("setPoster cancelled by later call to setPoster")})).then((function(){return Object.assign(t.elements.poster.style,{backgroundImage:"url('".concat(e,"')"),backgroundSize:""}),Rh.togglePoster.call(t,!0),e})))},checkPlaying:function(e){var t=this;ku(this.elements.container,this.config.classNames.playing,this.playing),ku(this.elements.container,this.config.classNames.paused,this.paused),ku(this.elements.container,this.config.classNames.stopped,this.stopped),Array.from(this.elements.buttons.play||[]).forEach((function(e){Object.assign(e,{pressed:t.playing}),e.setAttribute("aria-label",uh(t.playing?"pause":"play",t.config))})),Jc(e)&&"timeupdate"===e.type||Rh.toggleControls.call(this)},checkLoading:function(e){var t=this;this.loading=["stalled","waiting"].includes(e.type),clearTimeout(this.timers.loading),this.timers.loading=setTimeout((function(){ku(t.elements.container,t.config.classNames.loading,t.loading),Rh.toggleControls.call(t)}),this.loading?250:0)},toggleControls:function(e){var t=this.elements.controls;if(t&&this.config.hideControls){var n=this.touch&&this.lastSeekTime+2e3>Date.now();this.toggleControls(Boolean(e||this.loading||this.paused||t.pressed||t.hover||n))}}},_h=function(){function e(t){yo(this,e),this.player=t,this.lastKey=null,this.focusTimer=null,this.lastKeyDown=null,this.handleKey=this.handleKey.bind(this),this.toggleMenu=this.toggleMenu.bind(this),this.setTabFocus=this.setTabFocus.bind(this),this.firstTouch=this.firstTouch.bind(this)}return wo(e,[{key:"handleKey",value:function(e){var t=this.player,n=t.elements,i=e.keyCode?e.keyCode:e.which,r="keydown"===e.type,a=r&&i===this.lastKey;if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)&&Wc(i)){if(r){var o=document.activeElement;if(Qc(o)){var s=t.config.selectors.editable;if(o!==n.inputs.seek&&Su(o,s))return;if(32===e.which&&Su(o,'button, [role^="menuitem"]'))return}switch([32,37,38,39,40,48,49,50,51,52,53,54,56,57,67,70,73,75,76,77,79].includes(i)&&(e.preventDefault(),e.stopPropagation()),i){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:a||(t.currentTime=t.duration/10*(i-48));break;case 32:case 75:a||t.togglePlay();break;case 38:t.increaseVolume(.1);break;case 40:t.decreaseVolume(.1);break;case 77:a||(t.muted=!t.muted);break;case 39:t.forward();break;case 37:t.rewind();break;case 70:t.fullscreen.toggle();break;case 67:a||t.toggleCaptions();break;case 76:t.loop=!t.loop}27===i&&!t.fullscreen.usingNative&&t.fullscreen.active&&t.fullscreen.toggle(),this.lastKey=i}else this.lastKey=null}}},{key:"toggleMenu",value:function(e){wh.toggleMenu.call(this.player,e)}},{key:"firstTouch",value:function(){var e=this.player,t=e.elements;e.touch=!0,ku(t.container,e.config.classNames.isTouch,!0)}},{key:"setTabFocus",value:function(e){var t=this.player,n=t.elements;if(clearTimeout(this.focusTimer),"keydown"!==e.type||9===e.which){"keydown"===e.type&&(this.lastKeyDown=e.timeStamp);var i,r=e.timeStamp-this.lastKeyDown<=20;if("focus"!==e.type||r)i=t.config.classNames.tabFocus,ku(Eu.call(t,".".concat(i)),i,!1),this.focusTimer=setTimeout((function(){var e=document.activeElement;n.container.contains(e)&&ku(document.activeElement,t.config.classNames.tabFocus,!0)}),10)}}},{key:"global",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.player;t.config.keyboard.global&&Lu.call(t,window,"keydown keyup",this.handleKey,e,!1),Lu.call(t,document.body,"click",this.toggleMenu,e),Nu.call(t,document.body,"touchstart",this.firstTouch),Lu.call(t,document.body,"keydown focus blur",this.setTabFocus,e,!1,!0)}},{key:"container",value:function(){var e=this.player,t=e.config,n=e.elements,i=e.timers;!t.keyboard.global&&t.keyboard.focused&&ju.call(e,n.container,"keydown keyup",this.handleKey,!1),ju.call(e,n.container,"mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",(function(t){var r=n.controls;r&&"enterfullscreen"===t.type&&(r.pressed=!1,r.hover=!1);var a=0;["touchstart","touchmove","mousemove"].includes(t.type)&&(Rh.toggleControls.call(e,!0),a=e.touch?3e3:2e3),clearTimeout(i.controls),i.controls=setTimeout((function(){return Rh.toggleControls.call(e,!1)}),a)}));var r=function(t){if(!t)return Hu.call(e);var i=n.container.getBoundingClientRect(),r=i.width,a=i.height;return Hu.call(e,"".concat(r,":").concat(a))},a=function(){clearTimeout(i.resized),i.resized=setTimeout(r,50)};ju.call(e,n.container,"enterfullscreen exitfullscreen",(function(t){var i=e.fullscreen,o=i.target,s=i.usingNative;if(o===n.container&&(e.isEmbed||!nu(e.config.ratio))){var l="enterfullscreen"===t.type,c=r(l);c.padding;!function(t,n,i){if(e.isVimeo){var r=e.elements.wrapper.firstChild,a=Eo(t,2)[1],o=Eo(qu.call(e),2),s=o[0],l=o[1];r.style.maxWidth=i?"".concat(a/l*s,"px"):null,r.style.margin=i?"0 auto":null}}(c.ratio,0,l),s||(l?ju.call(e,window,"resize",a):Mu.call(e,window,"resize",a))}}))}},{key:"media",value:function(){var e=this,t=this.player,n=t.elements;if(ju.call(t,t.media,"timeupdate seeking seeked",(function(e){return wh.timeUpdate.call(t,e)})),ju.call(t,t.media,"durationchange loadeddata loadedmetadata",(function(e){return wh.durationUpdate.call(t,e)})),ju.call(t,t.media,"ended",(function(){t.isHTML5&&t.isVideo&&t.config.resetOnEnd&&(t.restart(),t.pause())})),ju.call(t,t.media,"progress playing seeking seeked",(function(e){return wh.updateProgress.call(t,e)})),ju.call(t,t.media,"volumechange",(function(e){return wh.updateVolume.call(t,e)})),ju.call(t,t.media,"playing play pause ended emptied timeupdate",(function(e){return Rh.checkPlaying.call(t,e)})),ju.call(t,t.media,"waiting canplay seeked playing",(function(e){return Rh.checkLoading.call(t,e)})),t.supported.ui&&t.config.clickToPlay&&!t.isAudio){var i=Au.call(t,".".concat(t.config.classNames.video));if(!Qc(i))return;ju.call(t,n.container,"click",(function(r){([n.container,i].includes(r.target)||i.contains(r.target))&&(t.touch&&t.config.hideControls||(t.ended?(e.proxy(r,t.restart,"restart"),e.proxy(r,t.play,"play")):e.proxy(r,t.togglePlay,"play")))}))}t.supported.ui&&t.config.disableContextMenu&&ju.call(t,n.wrapper,"contextmenu",(function(e){e.preventDefault()}),!1),ju.call(t,t.media,"volumechange",(function(){t.storage.set({volume:t.volume,muted:t.muted})})),ju.call(t,t.media,"ratechange",(function(){wh.updateSetting.call(t,"speed"),t.storage.set({speed:t.speed})})),ju.call(t,t.media,"qualitychange",(function(e){wh.updateSetting.call(t,"quality",null,e.detail.quality)})),ju.call(t,t.media,"ready qualitychange",(function(){wh.setDownloadUrl.call(t)}));var r=t.config.events.concat(["keyup","keydown"]).join(" ");ju.call(t,t.media,r,(function(e){var i=e.detail,r=void 0===i?{}:i;"error"===e.type&&(r=t.media.error),Ru.call(t,n.container,e.type,!0,r)}))}},{key:"proxy",value:function(e,t,n){var i=this.player,r=i.config.listeners[n],a=!0;Yc(r)&&(a=r.call(i,e)),!1!==a&&Yc(t)&&t.call(i,e)}},{key:"bind",value:function(e,t,n,i){var r=this,a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=this.player,s=o.config.listeners[i],l=Yc(s);ju.call(o,e,t,(function(e){return r.proxy(e,n,i)}),a&&!l)}},{key:"controls",value:function(){var e=this,t=this.player,n=t.elements,i=au.isIE?"change":"input";if(n.buttons.play&&Array.from(n.buttons.play).forEach((function(n){e.bind(n,"click",t.togglePlay,"play")})),this.bind(n.buttons.restart,"click",t.restart,"restart"),this.bind(n.buttons.rewind,"click",t.rewind,"rewind"),this.bind(n.buttons.fastForward,"click",t.forward,"fastForward"),this.bind(n.buttons.mute,"click",(function(){t.muted=!t.muted}),"mute"),this.bind(n.buttons.captions,"click",(function(){return t.toggleCaptions()})),this.bind(n.buttons.download,"click",(function(){Ru.call(t,t.media,"download")}),"download"),this.bind(n.buttons.fullscreen,"click",(function(){t.fullscreen.toggle()}),"fullscreen"),this.bind(n.buttons.pip,"click",(function(){t.pip="toggle"}),"pip"),this.bind(n.buttons.airplay,"click",t.airplay,"airplay"),this.bind(n.buttons.settings,"click",(function(e){e.stopPropagation(),e.preventDefault(),wh.toggleMenu.call(t,e)}),null,!1),this.bind(n.buttons.settings,"keyup",(function(e){var n=e.which;[13,32].includes(n)&&(13!==n?(e.preventDefault(),e.stopPropagation(),wh.toggleMenu.call(t,e)):wh.focusFirstMenuItem.call(t,null,!0))}),null,!1),this.bind(n.settings.menu,"keydown",(function(e){27===e.which&&wh.toggleMenu.call(t,e)})),this.bind(n.inputs.seek,"mousedown mousemove",(function(e){var t=n.progress.getBoundingClientRect(),i=100/t.width*(e.pageX-t.left);e.currentTarget.setAttribute("seek-value",i)})),this.bind(n.inputs.seek,"mousedown mouseup keydown keyup touchstart touchend",(function(e){var n=e.currentTarget,i=e.keyCode?e.keyCode:e.which;if(!Zc(e)||39===i||37===i){t.lastSeekTime=Date.now();var r=n.hasAttribute("play-on-seeked"),a=["mouseup","touchend","keyup"].includes(e.type);r&&a?(n.removeAttribute("play-on-seeked"),t.play()):!a&&t.playing&&(n.setAttribute("play-on-seeked",""),t.pause())}})),au.isIos){var r=Eu.call(t,'input[type="range"]');Array.from(r).forEach((function(t){return e.bind(t,i,(function(e){return ru(e.target)}))}))}this.bind(n.inputs.seek,i,(function(e){var n=e.currentTarget,i=n.getAttribute("seek-value");nu(i)&&(i=n.value),n.removeAttribute("seek-value"),t.currentTime=i/n.max*t.duration}),"seek"),this.bind(n.progress,"mouseenter mouseleave mousemove",(function(e){return wh.updateSeekTooltip.call(t,e)})),this.bind(n.progress,"mousemove touchmove",(function(e){var n=t.previewThumbnails;n&&n.loaded&&n.startMove(e)})),this.bind(n.progress,"mouseleave touchend click",(function(){var e=t.previewThumbnails;e&&e.loaded&&e.endMove(!1,!0)})),this.bind(n.progress,"mousedown touchstart",(function(e){var n=t.previewThumbnails;n&&n.loaded&&n.startScrubbing(e)})),this.bind(n.progress,"mouseup touchend",(function(e){var n=t.previewThumbnails;n&&n.loaded&&n.endScrubbing(e)})),au.isWebkit&&Array.from(Eu.call(t,'input[type="range"]')).forEach((function(n){e.bind(n,"input",(function(e){return wh.updateRangeFill.call(t,e.target)}))})),t.config.toggleInvert&&!Qc(n.display.duration)&&this.bind(n.display.currentTime,"click",(function(){0!==t.currentTime&&(t.config.invertTime=!t.config.invertTime,wh.timeUpdate.call(t))})),this.bind(n.inputs.volume,i,(function(e){t.volume=e.target.value}),"volume"),this.bind(n.controls,"mouseenter mouseleave",(function(e){n.controls.hover=!t.touch&&"mouseenter"===e.type})),this.bind(n.controls,"mousedown mouseup touchstart touchend touchcancel",(function(e){n.controls.pressed=["mousedown","touchstart"].includes(e.type)})),this.bind(n.controls,"focusin",(function(){var i=t.config,r=t.timers;ku(n.controls,i.classNames.noTransition,!0),Rh.toggleControls.call(t,!0),setTimeout((function(){ku(n.controls,i.classNames.noTransition,!1)}),0);var a=e.touch?3e3:4e3;clearTimeout(r.controls),r.controls=setTimeout((function(){return Rh.toggleControls.call(t,!1)}),a)})),this.bind(n.inputs.volume,"wheel",(function(e){var n=e.webkitDirectionInvertedFromDevice,i=Eo([e.deltaX,-e.deltaY].map((function(e){return n?-e:e})),2),r=i[0],a=i[1],o=Math.sign(Math.abs(r)>Math.abs(a)?r:a);t.increaseVolume(o/50);var s=t.media.volume;(1===o&&s<1||-1===o&&s>0)&&e.preventDefault()}),"volume",!1)}}]),e}(),Uh=Kn("splice"),Fh=Qt("splice",{ACCESSORS:!0,0:0,1:2}),Dh=Math.max,qh=Math.min;Oe({target:"Array",proto:!0,forced:!Uh||!Fh},{splice:function(e,t){var n,i,r,a,o,s,l=Ne(this),c=le(l.length),u=he(e,c),h=arguments.length;if(0===h?n=i=0:1===h?(n=0,i=c-u):(n=h-2,i=qh(Dh(oe(t),0),c-u)),c+n-i>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(r=ot(l,i),a=0;a<i;a++)(o=u+a)in l&&Dn(r,a,l[o]);if(r.length=i,n<i){for(a=u;a<c-i;a++)s=a+n,(o=a+i)in l?l[s]=l[o]:delete l[s];for(a=c;a>c-i+n;a--)delete l[a-1]}else if(n>i)for(a=c-i;a>u;a--)s=a+n-1,(o=a+i-1)in l?l[s]=l[o]:delete l[s];for(a=0;a<n;a++)l[a+u]=arguments[a+2];return l.length=c-i+n,r}});var Hh=t((function(e,t){e.exports=function(){var e=function(){},t={},n={},i={};function r(e,t){if(e){var r=i[e];if(n[e]=t,r)for(;r.length;)r[0](e,t),r.splice(0,1)}}function a(t,n){t.call&&(t={success:t}),n.length?(t.error||e)(n):(t.success||e)(t)}function o(t,n,i,r){var a,s,l=document,c=i.async,u=(i.numRetries||0)+1,h=i.before||e,f=t.replace(/[\?|#].*$/,""),d=t.replace(/^(css|img)!/,"");r=r||0,/(^css!|\.css$)/.test(f)?((s=l.createElement("link")).rel="stylesheet",s.href=d,(a="hideFocus"in s)&&s.relList&&(a=0,s.rel="preload",s.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(f)?(s=l.createElement("img")).src=d:((s=l.createElement("script")).src=t,s.async=void 0===c||c),s.onload=s.onerror=s.onbeforeload=function(e){var l=e.type[0];if(a)try{s.sheet.cssText.length||(l="e")}catch(e){18!=e.code&&(l="e")}if("e"==l){if((r+=1)<u)return o(t,n,i,r)}else if("preload"==s.rel&&"style"==s.as)return s.rel="stylesheet";n(t,l,e.defaultPrevented)},!1!==h(t,s)&&l.head.appendChild(s)}function s(e,n,i){var s,l;if(n&&n.trim&&(s=n),l=(s?i:n)||{},s){if(s in t)throw"LoadJS";t[s]=!0}function c(t,n){!function(e,t,n){var i,r,a=(e=e.push?e:[e]).length,s=a,l=[];for(i=function(e,n,i){if("e"==n&&l.push(e),"b"==n){if(!i)return;l.push(e)}--a||t(l)},r=0;r<s;r++)o(e[r],i,n)}(e,(function(e){a(l,e),t&&a({success:t,error:n},e),r(s,e)}),l)}if(l.returnPromise)return new Promise(c);c()}return s.ready=function(e,t){return function(e,t){e=e.push?e:[e];var r,a,o,s=[],l=e.length,c=l;for(r=function(e,n){n.length&&s.push(e),--c||t(s)};l--;)a=e[l],(o=n[a])?r(a,o):(i[a]=i[a]||[]).push(r)}(e,(function(e){a(t,e)})),s},s.done=function(e){r(e,[])},s.reset=function(){t={},n={},i={}},s.isDefined=function(e){return e in t},s}()}));function Bh(e){return new Promise((function(t,n){Hh(e,{success:t,error:n})}))}function Vh(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,Ru.call(this,this.media,e?"play":"pause"))}var zh={setup:function(){var e=this;ku(e.elements.wrapper,e.config.classNames.embed,!0),e.options.speed=e.config.speed.options,Hu.call(e),zc(window.Vimeo)?zh.ready.call(e):Bh(e.config.urls.vimeo.sdk).then((function(){zh.ready.call(e)})).catch((function(t){e.debug.warn("Vimeo SDK (player.js) failed to load",t)}))},ready:function(){var e=this,t=this,n=t.config.vimeo,i=Th(hu({},{loop:t.config.loop.active,autoplay:t.autoplay,muted:t.muted,gesture:"media",playsinline:!this.config.fullscreen.iosNative},n)),r=t.media.getAttribute("src");nu(r)&&(r=t.media.getAttribute(t.config.attributes.embed.id));var a,o=nu(a=r)?null:Wc(Number(a))?a:a.match(/^.*(vimeo.com\/|video\/)(\d+).*/)?RegExp.$2:a,s=pu("iframe"),l=rh(t.config.urls.vimeo.iframe,o,i);s.setAttribute("src",l),s.setAttribute("allowfullscreen",""),s.setAttribute("allowtransparency",""),s.setAttribute("allow","autoplay"),nu(n.referrerPolicy)||s.setAttribute("referrerPolicy",n.referrerPolicy);var c=pu("div",{poster:t.poster,class:t.config.classNames.embedContainer});c.appendChild(s),t.media=yu(c,t.media),fh(rh(t.config.urls.vimeo.api,o),"json").then((function(e){if(!nu(e)){var n=new URL(e[0].thumbnail_large);n.pathname="".concat(n.pathname.split("_")[0],".jpg"),Rh.setPoster.call(t,n.href).catch((function(){}))}})),t.embed=new window.Vimeo.Player(s,{autopause:t.config.autopause,muted:t.muted}),t.media.paused=!0,t.media.currentTime=0,t.supported.ui&&t.embed.disableTextTrack(),t.media.play=function(){return Vh.call(t,!0),t.embed.play()},t.media.pause=function(){return Vh.call(t,!1),t.embed.pause()},t.media.stop=function(){t.pause(),t.currentTime=0};var u=t.media.currentTime;Object.defineProperty(t.media,"currentTime",{get:function(){return u},set:function(e){var n=t.embed,i=t.media,r=t.paused,a=t.volume,o=r&&!n.hasPlayed;i.seeking=!0,Ru.call(t,i,"seeking"),Promise.resolve(o&&n.setVolume(0)).then((function(){return n.setCurrentTime(e)})).then((function(){return o&&n.pause()})).then((function(){return o&&n.setVolume(a)})).catch((function(){}))}});var h=t.config.speed.selected;Object.defineProperty(t.media,"playbackRate",{get:function(){return h},set:function(e){t.embed.setPlaybackRate(e).then((function(){h=e,Ru.call(t,t.media,"ratechange")}))}});var f=t.config.volume;Object.defineProperty(t.media,"volume",{get:function(){return f},set:function(e){t.embed.setVolume(e).then((function(){f=e,Ru.call(t,t.media,"volumechange")}))}});var d=t.config.muted;Object.defineProperty(t.media,"muted",{get:function(){return d},set:function(e){var n=!!$c(e)&&e;t.embed.setVolume(n?0:t.config.volume).then((function(){d=n,Ru.call(t,t.media,"volumechange")}))}});var p,m=t.config.loop;Object.defineProperty(t.media,"loop",{get:function(){return m},set:function(e){var n=$c(e)?e:t.config.loop.active;t.embed.setLoop(n).then((function(){m=n}))}}),t.embed.getVideoUrl().then((function(e){p=e,wh.setDownloadUrl.call(t)})).catch((function(t){e.debug.warn(t)})),Object.defineProperty(t.media,"currentSrc",{get:function(){return p}}),Object.defineProperty(t.media,"ended",{get:function(){return t.currentTime===t.duration}}),Promise.all([t.embed.getVideoWidth(),t.embed.getVideoHeight()]).then((function(n){var i=Eo(n,2),r=i[0],a=i[1];t.embed.ratio=[r,a],Hu.call(e)})),t.embed.setAutopause(t.config.autopause).then((function(e){t.config.autopause=e})),t.embed.getVideoTitle().then((function(n){t.config.title=n,Rh.setTitle.call(e)})),t.embed.getCurrentTime().then((function(e){u=e,Ru.call(t,t.media,"timeupdate")})),t.embed.getDuration().then((function(e){t.media.duration=e,Ru.call(t,t.media,"durationchange")})),t.embed.getTextTracks().then((function(e){t.media.textTracks=e,Sh.setup.call(t)})),t.embed.on("cuechange",(function(e){var n=e.cues,i=(void 0===n?[]:n).map((function(e){return function(e){var t=document.createDocumentFragment(),n=document.createElement("div");return t.appendChild(n),n.innerHTML=e,t.firstChild.innerText}(e.text)}));Sh.updateCues.call(t,i)})),t.embed.on("loaded",(function(){(t.embed.getPaused().then((function(e){Vh.call(t,!e),e||Ru.call(t,t.media,"playing")})),Qc(t.embed.element)&&t.supported.ui)&&t.embed.element.setAttribute("tabindex",-1)})),t.embed.on("bufferstart",(function(){Ru.call(t,t.media,"waiting")})),t.embed.on("bufferend",(function(){Ru.call(t,t.media,"playing")})),t.embed.on("play",(function(){Vh.call(t,!0),Ru.call(t,t.media,"playing")})),t.embed.on("pause",(function(){Vh.call(t,!1)})),t.embed.on("timeupdate",(function(e){t.media.seeking=!1,u=e.seconds,Ru.call(t,t.media,"timeupdate")})),t.embed.on("progress",(function(e){t.media.buffered=e.percent,Ru.call(t,t.media,"progress"),1===parseInt(e.percent,10)&&Ru.call(t,t.media,"canplaythrough"),t.embed.getDuration().then((function(e){e!==t.media.duration&&(t.media.duration=e,Ru.call(t,t.media,"durationchange"))}))})),t.embed.on("seeked",(function(){t.media.seeking=!1,Ru.call(t,t.media,"seeked")})),t.embed.on("ended",(function(){t.media.paused=!0,Ru.call(t,t.media,"ended")})),t.embed.on("error",(function(e){t.media.error=e,Ru.call(t,t.media,"error")})),setTimeout((function(){return Rh.build.call(t)}),0)}};function Wh(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,Ru.call(this,this.media,e?"play":"pause"))}function Kh(e){return e.noCookie?"https://www.youtube-nocookie.com":"http:"===window.location.protocol?"http://www.youtube.com":void 0}var $h={setup:function(){var e=this;if(ku(this.elements.wrapper,this.config.classNames.embed,!0),zc(window.YT)&&Yc(window.YT.Player))$h.ready.call(this);else{var t=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){Yc(t)&&t(),$h.ready.call(e)},Bh(this.config.urls.youtube.sdk).catch((function(t){e.debug.warn("YouTube API failed to load",t)}))}},getTitle:function(e){var t=this;fh(rh(this.config.urls.youtube.api,e)).then((function(e){if(zc(e)){var n=e.title,i=e.height,r=e.width;t.config.title=n,Rh.setTitle.call(t),t.embed.ratio=[r,i]}Hu.call(t)})).catch((function(){Hu.call(t)}))},ready:function(){var e=this,t=e.media&&e.media.getAttribute("id");if(nu(t)||!t.startsWith("youtube-")){var n=e.media.getAttribute("src");nu(n)&&(n=e.media.getAttribute(this.config.attributes.embed.id));var i,r,a=nu(i=n)?null:i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)?RegExp.$2:i,o=(r=e.provider,"".concat(r,"-").concat(Math.floor(1e4*Math.random()))),s=pu("div",{id:o,poster:e.poster});e.media=yu(s,e.media);var l=function(e){return"https://i.ytimg.com/vi/".concat(a,"/").concat(e,"default.jpg")};Nh(l("maxres"),121).catch((function(){return Nh(l("sd"),121)})).catch((function(){return Nh(l("hq"))})).then((function(t){return Rh.setPoster.call(e,t.src)})).then((function(t){t.includes("maxres")||(e.elements.poster.style.backgroundSize="cover")})).catch((function(){}));var c=e.config.youtube;e.embed=new window.YT.Player(o,{videoId:a,host:Kh(c),playerVars:hu({},{autoplay:e.config.autoplay?1:0,hl:e.config.hl,controls:e.supported.ui?0:1,disablekb:1,playsinline:e.config.fullscreen.iosNative?0:1,cc_load_policy:e.captions.active?1:0,cc_lang_pref:e.config.captions.language,widget_referrer:window?window.location.href:null},c),events:{onError:function(t){if(!e.media.error){var n=t.data,i={2:"The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",5:"The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",100:"The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",101:"The owner of the requested video does not allow it to be played in embedded players.",150:"The owner of the requested video does not allow it to be played in embedded players."}[n]||"An unknown error occured";e.media.error={code:n,message:i},Ru.call(e,e.media,"error")}},onPlaybackRateChange:function(t){var n=t.target;e.media.playbackRate=n.getPlaybackRate(),Ru.call(e,e.media,"ratechange")},onReady:function(t){if(!Yc(e.media.play)){var n=t.target;$h.getTitle.call(e,a),e.media.play=function(){Wh.call(e,!0),n.playVideo()},e.media.pause=function(){Wh.call(e,!1),n.pauseVideo()},e.media.stop=function(){n.stopVideo()},e.media.duration=n.getDuration(),e.media.paused=!0,e.media.currentTime=0,Object.defineProperty(e.media,"currentTime",{get:function(){return Number(n.getCurrentTime())},set:function(t){e.paused&&!e.embed.hasPlayed&&e.embed.mute(),e.media.seeking=!0,Ru.call(e,e.media,"seeking"),n.seekTo(t)}}),Object.defineProperty(e.media,"playbackRate",{get:function(){return n.getPlaybackRate()},set:function(e){n.setPlaybackRate(e)}});var i=e.config.volume;Object.defineProperty(e.media,"volume",{get:function(){return i},set:function(t){i=t,n.setVolume(100*i),Ru.call(e,e.media,"volumechange")}});var r=e.config.muted;Object.defineProperty(e.media,"muted",{get:function(){return r},set:function(t){var i=$c(t)?t:r;r=i,n[i?"mute":"unMute"](),Ru.call(e,e.media,"volumechange")}}),Object.defineProperty(e.media,"currentSrc",{get:function(){return n.getVideoUrl()}}),Object.defineProperty(e.media,"ended",{get:function(){return e.currentTime===e.duration}});var o=n.getAvailablePlaybackRates();e.options.speed=o.filter((function(t){return e.config.speed.options.includes(t)})),e.supported.ui&&e.media.setAttribute("tabindex",-1),Ru.call(e,e.media,"timeupdate"),Ru.call(e,e.media,"durationchange"),clearInterval(e.timers.buffering),e.timers.buffering=setInterval((function(){e.media.buffered=n.getVideoLoadedFraction(),(null===e.media.lastBuffered||e.media.lastBuffered<e.media.buffered)&&Ru.call(e,e.media,"progress"),e.media.lastBuffered=e.media.buffered,1===e.media.buffered&&(clearInterval(e.timers.buffering),Ru.call(e,e.media,"canplaythrough"))}),200),setTimeout((function(){return Rh.build.call(e)}),50)}},onStateChange:function(t){var n=t.target;switch(clearInterval(e.timers.playing),e.media.seeking&&[1,2].includes(t.data)&&(e.media.seeking=!1,Ru.call(e,e.media,"seeked")),t.data){case-1:Ru.call(e,e.media,"timeupdate"),e.media.buffered=n.getVideoLoadedFraction(),Ru.call(e,e.media,"progress");break;case 0:Wh.call(e,!1),e.media.loop?(n.stopVideo(),n.playVideo()):Ru.call(e,e.media,"ended");break;case 1:e.config.autoplay||!e.media.paused||e.embed.hasPlayed?(Wh.call(e,!0),Ru.call(e,e.media,"playing"),e.timers.playing=setInterval((function(){Ru.call(e,e.media,"timeupdate")}),50),e.media.duration!==n.getDuration()&&(e.media.duration=n.getDuration(),Ru.call(e,e.media,"durationchange"))):e.media.pause();break;case 2:e.muted||e.embed.unMute(),Wh.call(e,!1);break;case 3:Ru.call(e,e.media,"waiting")}Ru.call(e,e.elements.container,"statechange",!1,{code:t.data})}}})}}},Yh={setup:function(){this.media?(ku(this.elements.container,this.config.classNames.type.replace("{0}",this.type),!0),ku(this.elements.container,this.config.classNames.provider.replace("{0}",this.provider),!0),this.isEmbed&&ku(this.elements.container,this.config.classNames.type.replace("{0}","video"),!0),this.isVideo&&(this.elements.wrapper=pu("div",{class:this.config.classNames.video}),fu(this.media,this.elements.wrapper),this.isEmbed&&(this.elements.poster=pu("div",{class:this.config.classNames.poster}),this.elements.wrapper.appendChild(this.elements.poster))),this.isHTML5?Bu.setup.call(this):this.isYouTube?$h.setup.call(this):this.isVimeo&&zh.setup.call(this)):this.debug.warn("No media element found!")}},Gh=function(){function e(t){var n=this;yo(this,e),this.player=t,this.config=t.config.ads,this.playing=!1,this.initialized=!1,this.elements={container:null,displayContainer:null},this.manager=null,this.loader=null,this.cuePoints=null,this.events={},this.safetyTimer=null,this.countdownTimer=null,this.managerPromise=new Promise((function(e,t){n.on("loaded",e),n.on("error",t)})),this.load()}return wo(e,[{key:"load",value:function(){var e=this;this.enabled&&(zc(window.google)&&zc(window.google.ima)?this.ready():Bh(this.player.config.urls.googleIMA.sdk).then((function(){e.ready()})).catch((function(){e.trigger("error",new Error("Google IMA SDK failed to load"))})))}},{key:"ready",value:function(){var e,t=this;this.enabled||((e=this).manager&&e.manager.destroy(),e.elements.displayContainer&&e.elements.displayContainer.destroy(),e.elements.container.remove()),this.startSafetyTimer(12e3,"ready()"),this.managerPromise.then((function(){t.clearSafetyTimer("onAdsManagerLoaded()")})),this.listeners(),this.setupIMA()}},{key:"setupIMA",value:function(){this.elements.container=pu("div",{class:this.player.config.classNames.ads}),this.player.elements.container.appendChild(this.elements.container),google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),google.ima.settings.setLocale(this.player.config.ads.language),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline),this.elements.displayContainer=new google.ima.AdDisplayContainer(this.elements.container,this.player.media),this.requestAds()}},{key:"requestAds",value:function(){var e=this,t=this.player.elements.container;try{this.loader=new google.ima.AdsLoader(this.elements.displayContainer),this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,(function(t){return e.onAdsManagerLoaded(t)}),!1),this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,(function(t){return e.onAdError(t)}),!1);var n=new google.ima.AdsRequest;n.adTagUrl=this.tagUrl,n.linearAdSlotWidth=t.offsetWidth,n.linearAdSlotHeight=t.offsetHeight,n.nonLinearAdSlotWidth=t.offsetWidth,n.nonLinearAdSlotHeight=t.offsetHeight,n.forceNonLinearFullSlot=!1,n.setAdWillPlayMuted(!this.player.muted),this.loader.requestAds(n)}catch(e){this.onAdError(e)}}},{key:"pollCountdown",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!t)return clearInterval(this.countdownTimer),void this.elements.container.removeAttribute("data-badge-text");var n=function(){var t=bh(Math.max(e.manager.getRemainingTime(),0)),n="".concat(uh("advertisement",e.player.config)," - ").concat(t);e.elements.container.setAttribute("data-badge-text",n)};this.countdownTimer=setInterval(n,100)}},{key:"onAdsManagerLoaded",value:function(e){var t=this;if(this.enabled){var n=new google.ima.AdsRenderingSettings;n.restoreCustomPlaybackStateOnAdBreakComplete=!0,n.enablePreloading=!0,this.manager=e.getAdsManager(this.player,n),this.cuePoints=this.manager.getCuePoints(),this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,(function(e){return t.onAdError(e)})),Object.keys(google.ima.AdEvent.Type).forEach((function(e){t.manager.addEventListener(google.ima.AdEvent.Type[e],(function(e){return t.onAdEvent(e)}))})),this.trigger("loaded")}}},{key:"addCuePoints",value:function(){var e=this;nu(this.cuePoints)||this.cuePoints.forEach((function(t){if(0!==t&&-1!==t&&t<e.player.duration){var n=e.player.elements.progress;if(Qc(n)){var i=100/e.player.duration*t,r=pu("span",{class:e.player.config.classNames.cues});r.style.left="".concat(i.toString(),"%"),n.appendChild(r)}}}))}},{key:"onAdEvent",value:function(e){var t=this,n=this.player.elements.container,i=e.getAd(),r=e.getAdData();switch(function(e){Ru.call(t.player,t.player.media,"ads".concat(e.replace(/_/g,"").toLowerCase()))}(e.type),e.type){case google.ima.AdEvent.Type.LOADED:this.trigger("loaded"),this.pollCountdown(!0),i.isLinear()||(i.width=n.offsetWidth,i.height=n.offsetHeight);break;case google.ima.AdEvent.Type.STARTED:this.manager.setVolume(this.player.volume);break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:this.loadAds();break;case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:this.pauseContent();break;case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:this.pollCountdown(),this.resumeContent();break;case google.ima.AdEvent.Type.LOG:r.adError&&this.player.debug.warn("Non-fatal ad error: ".concat(r.adError.getMessage()))}}},{key:"onAdError",value:function(e){this.cancel(),this.player.debug.warn("Ads error",e)}},{key:"listeners",value:function(){var e,t=this,n=this.player.elements.container;this.player.on("canplay",(function(){t.addCuePoints()})),this.player.on("ended",(function(){t.loader.contentComplete()})),this.player.on("timeupdate",(function(){e=t.player.currentTime})),this.player.on("seeked",(function(){var n=t.player.currentTime;nu(t.cuePoints)||t.cuePoints.forEach((function(i,r){e<i&&i<n&&(t.manager.discardAdBreak(),t.cuePoints.splice(r,1))}))})),window.addEventListener("resize",(function(){t.manager&&t.manager.resize(n.offsetWidth,n.offsetHeight,google.ima.ViewMode.NORMAL)}))}},{key:"play",value:function(){var e=this,t=this.player.elements.container;this.managerPromise||this.resumeContent(),this.managerPromise.then((function(){e.manager.setVolume(e.player.volume),e.elements.displayContainer.initialize();try{e.initialized||(e.manager.init(t.offsetWidth,t.offsetHeight,google.ima.ViewMode.NORMAL),e.manager.start()),e.initialized=!0}catch(t){e.onAdError(t)}})).catch((function(){}))}},{key:"resumeContent",value:function(){this.elements.container.style.zIndex="",this.playing=!1,this.player.media.play()}},{key:"pauseContent",value:function(){this.elements.container.style.zIndex=3,this.playing=!0,this.player.media.pause()}},{key:"cancel",value:function(){this.initialized&&this.resumeContent(),this.trigger("error"),this.loadAds()}},{key:"loadAds",value:function(){var e=this;this.managerPromise.then((function(){e.manager&&e.manager.destroy(),e.managerPromise=new Promise((function(t){e.on("loaded",t),e.player.debug.log(e.manager)})),e.requestAds()})).catch((function(){}))}},{key:"trigger",value:function(e){for(var t=this,n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];var a=this.events[e];Gc(a)&&a.forEach((function(e){Yc(e)&&e.apply(t,i)}))}},{key:"on",value:function(e,t){return Gc(this.events[e])||(this.events[e]=[]),this.events[e].push(t),this}},{key:"startSafetyTimer",value:function(e,t){var n=this;this.player.debug.log("Safety timer invoked from: ".concat(t)),this.safetyTimer=setTimeout((function(){n.cancel(),n.clearSafetyTimer("startSafetyTimer()")}),e)}},{key:"clearSafetyTimer",value:function(e){Vc(this.safetyTimer)||(this.player.debug.log("Safety timer cleared from: ".concat(e)),clearTimeout(this.safetyTimer),this.safetyTimer=null)}},{key:"enabled",get:function(){var e=this.config;return this.player.isHTML5&&this.player.isVideo&&e.enabled&&(!nu(e.publisherId)||tu(e.tagUrl))}},{key:"tagUrl",get:function(){var e=this.config;if(tu(e.tagUrl))return e.tagUrl;var t={AV_PUBLISHERID:"58c25bb0073ef448b1087ad6",AV_CHANNELID:"5a0458dc28a06145e4519d21",AV_URL:window.location.hostname,cb:Date.now(),AV_WIDTH:640,AV_HEIGHT:480,AV_CDIM2:e.publisherId};return"".concat("https://go.aniview.com/api/adserver6/vast/","?").concat(Th(t))}}]),e}(),Xh=ct.findIndex,Qh=!0,Jh=Qt("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){Qh=!1})),Oe({target:"Array",proto:!0,forced:Qh||!Jh},{findIndex:function(e){return Xh(this,e,arguments.length>1?arguments[1]:void 0)}}),dn("findIndex");var Zh=Math.min,ef=[].lastIndexOf,tf=!!ef&&1/[1].lastIndexOf(1,-0)<0,nf=$t("lastIndexOf"),rf=Qt("indexOf",{ACCESSORS:!0,1:0}),af=tf||!nf||!rf?function(e){if(tf)return ef.apply(this,arguments)||0;var t=m(this),n=le(t.length),i=n-1;for(arguments.length>1&&(i=Zh(i,oe(arguments[1]))),i<0&&(i=n+i);i>=0;i--)if(i in t&&t[i]===e)return i||0;return-1}:ef;Oe({target:"Array",proto:!0,forced:af!==[].lastIndexOf},{lastIndexOf:af});var of=function(e,t){var n={};return e>t.width/t.height?(n.width=t.width,n.height=1/e*t.width):(n.height=t.height,n.width=e*t.height),n},sf=function(){function e(t){yo(this,e),this.player=t,this.thumbnails=[],this.loaded=!1,this.lastMouseMoveTime=Date.now(),this.mouseDown=!1,this.loadedImages=[],this.elements={thumb:{},scrubbing:{}},this.load()}return wo(e,[{key:"load",value:function(){var e=this;this.player.elements.display.seekTooltip&&(this.player.elements.display.seekTooltip.hidden=this.enabled),this.enabled&&this.getThumbnails().then((function(){e.enabled&&(e.render(),e.determineContainerAutoSizing(),e.loaded=!0)}))}},{key:"getThumbnails",value:function(){var e=this;return new Promise((function(t){var n=e.player.config.previewThumbnails.src;if(nu(n))throw new Error("Missing previewThumbnails.src config attribute");var i=(Kc(n)?[n]:n).map((function(t){return e.getThumbnail(t)}));Promise.all(i).then((function(){e.thumbnails.sort((function(e,t){return e.height-t.height})),e.player.debug.log("Preview thumbnails",e.thumbnails),t()}))}))}},{key:"getThumbnail",value:function(e){var t=this;return new Promise((function(n){fh(e).then((function(i){var r,a,o={frames:(r=i,a=[],r.split(/\r\n\r\n|\n\n|\r\r/).forEach((function(e){var t={};e.split(/\r\n|\n|\r/).forEach((function(e){if(Wc(t.startTime)){if(!nu(e.trim())&&nu(t.text)){var n=e.trim().split("#xywh="),i=Eo(n,1);if(t.text=i[0],n[1]){var r=Eo(n[1].split(","),4);t.x=r[0],t.y=r[1],t.w=r[2],t.h=r[3]}}}else{var a=e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);a&&(t.startTime=60*Number(a[1]||0)*60+60*Number(a[2])+Number(a[3])+Number("0.".concat(a[4])),t.endTime=60*Number(a[6]||0)*60+60*Number(a[7])+Number(a[8])+Number("0.".concat(a[9])))}})),t.text&&a.push(t)})),a),height:null,urlPrefix:""};o.frames[0].text.startsWith("/")||o.frames[0].text.startsWith("http://")||o.frames[0].text.startsWith("https://")||(o.urlPrefix=e.substring(0,e.lastIndexOf("/")+1));var s=new Image;s.onload=function(){o.height=s.naturalHeight,o.width=s.naturalWidth,t.thumbnails.push(o),n()},s.src=o.urlPrefix+o.frames[0].text}))}))}},{key:"startMove",value:function(e){if(this.loaded&&Jc(e)&&["touchmove","mousemove"].includes(e.type)&&this.player.media.duration){if("touchmove"===e.type)this.seekTime=this.player.media.duration*(this.player.elements.inputs.seek.value/100);else{var t=this.player.elements.progress.getBoundingClientRect(),n=100/t.width*(e.pageX-t.left);this.seekTime=this.player.media.duration*(n/100),this.seekTime<0&&(this.seekTime=0),this.seekTime>this.player.media.duration-1&&(this.seekTime=this.player.media.duration-1),this.mousePosX=e.pageX,this.elements.thumb.time.innerText=bh(this.seekTime)}this.showImageAtCurrentTime()}}},{key:"endMove",value:function(){this.toggleThumbContainer(!1,!0)}},{key:"startScrubbing",value:function(e){(Vc(e.button)||!1===e.button||0===e.button)&&(this.mouseDown=!0,this.player.media.duration&&(this.toggleScrubbingContainer(!0),this.toggleThumbContainer(!1,!0),this.showImageAtCurrentTime()))}},{key:"endScrubbing",value:function(){var e=this;this.mouseDown=!1,Math.ceil(this.lastTime)===Math.ceil(this.player.media.currentTime)?this.toggleScrubbingContainer(!1):Nu.call(this.player,this.player.media,"timeupdate",(function(){e.mouseDown||e.toggleScrubbingContainer(!1)}))}},{key:"listeners",value:function(){var e=this;this.player.on("play",(function(){e.toggleThumbContainer(!1,!0)})),this.player.on("seeked",(function(){e.toggleThumbContainer(!1)})),this.player.on("timeupdate",(function(){e.lastTime=e.player.media.currentTime}))}},{key:"render",value:function(){this.elements.thumb.container=pu("div",{class:this.player.config.classNames.previewThumbnails.thumbContainer}),this.elements.thumb.imageContainer=pu("div",{class:this.player.config.classNames.previewThumbnails.imageContainer}),this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);var e=pu("div",{class:this.player.config.classNames.previewThumbnails.timeContainer});this.elements.thumb.time=pu("span",{},"00:00"),e.appendChild(this.elements.thumb.time),this.elements.thumb.container.appendChild(e),Qc(this.player.elements.progress)&&this.player.elements.progress.appendChild(this.elements.thumb.container),this.elements.scrubbing.container=pu("div",{class:this.player.config.classNames.previewThumbnails.scrubbingContainer}),this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)}},{key:"destroy",value:function(){this.elements.thumb.container&&this.elements.thumb.container.remove(),this.elements.scrubbing.container&&this.elements.scrubbing.container.remove()}},{key:"showImageAtCurrentTime",value:function(){var e=this;this.mouseDown?this.setScrubbingContainerSize():this.setThumbContainerSizeAndPos();var t=this.thumbnails[0].frames.findIndex((function(t){return e.seekTime>=t.startTime&&e.seekTime<=t.endTime})),n=t>=0,i=0;this.mouseDown||this.toggleThumbContainer(n),n&&(this.thumbnails.forEach((function(n,r){e.loadedImages.includes(n.frames[t].text)&&(i=r)})),t!==this.showingThumb&&(this.showingThumb=t,this.loadImage(i)))}},{key:"loadImage",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=this.showingThumb,i=this.thumbnails[t],r=i.urlPrefix,a=i.frames[n],o=i.frames[n].text,s=r+o;if(this.currentImageElement&&this.currentImageElement.dataset.filename===o)this.showImage(this.currentImageElement,a,t,n,o,!1),this.currentImageElement.dataset.index=n,this.removeOldImages(this.currentImageElement);else{this.loadingImage&&this.usingSprites&&(this.loadingImage.onload=null);var l=new Image;l.src=s,l.dataset.index=n,l.dataset.filename=o,this.showingThumbFilename=o,this.player.debug.log("Loading image: ".concat(s)),l.onload=function(){return e.showImage(l,a,t,n,o,!0)},this.loadingImage=l,this.removeOldImages(l)}}},{key:"showImage",value:function(e,t,n,i,r){var a=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];this.player.debug.log("Showing thumb: ".concat(r,". num: ").concat(i,". qual: ").concat(n,". newimg: ").concat(a)),this.setImageSizeAndOffset(e,t),a&&(this.currentImageContainer.appendChild(e),this.currentImageElement=e,this.loadedImages.includes(r)||this.loadedImages.push(r)),this.preloadNearby(i,!0).then(this.preloadNearby(i,!1)).then(this.getHigherQuality(n,e,t,r))}},{key:"removeOldImages",value:function(e){var t=this;Array.from(this.currentImageContainer.children).forEach((function(n){if("img"===n.tagName.toLowerCase()){var i=t.usingSprites?500:1e3;if(n.dataset.index!==e.dataset.index&&!n.dataset.deleting){n.dataset.deleting=!0;var r=t.currentImageContainer;setTimeout((function(){r.removeChild(n),t.player.debug.log("Removing thumb: ".concat(n.dataset.filename))}),i)}}}))}},{key:"preloadNearby",value:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return new Promise((function(i){setTimeout((function(){var r=t.thumbnails[0].frames[e].text;if(t.showingThumbFilename===r){var a;a=n?t.thumbnails[0].frames.slice(e):t.thumbnails[0].frames.slice(0,e).reverse();var o=!1;a.forEach((function(e){var n=e.text;if(n!==r&&!t.loadedImages.includes(n)){o=!0,t.player.debug.log("Preloading thumb filename: ".concat(n));var a=t.thumbnails[0].urlPrefix+n,s=new Image;s.src=a,s.onload=function(){t.player.debug.log("Preloaded thumb filename: ".concat(n)),t.loadedImages.includes(n)||t.loadedImages.push(n),i()}}})),o||i()}}),300)}))}},{key:"getHigherQuality",value:function(e,t,n,i){var r=this;if(e<this.thumbnails.length-1){var a=t.naturalHeight;this.usingSprites&&(a=n.h),a<this.thumbContainerHeight&&setTimeout((function(){r.showingThumbFilename===i&&(r.player.debug.log("Showing higher quality thumb for: ".concat(i)),r.loadImage(e+1))}),300)}}},{key:"toggleThumbContainer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.player.config.classNames.previewThumbnails.thumbContainerShown;this.elements.thumb.container.classList.toggle(n,e),!e&&t&&(this.showingThumb=null,this.showingThumbFilename=null)}},{key:"toggleScrubbingContainer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.player.config.classNames.previewThumbnails.scrubbingContainerShown;this.elements.scrubbing.container.classList.toggle(t,e),e||(this.showingThumb=null,this.showingThumbFilename=null)}},{key:"determineContainerAutoSizing",value:function(){(this.elements.thumb.imageContainer.clientHeight>20||this.elements.thumb.imageContainer.clientWidth>20)&&(this.sizeSpecifiedInCSS=!0)}},{key:"setThumbContainerSizeAndPos",value:function(){if(this.sizeSpecifiedInCSS){if(this.elements.thumb.imageContainer.clientHeight>20&&this.elements.thumb.imageContainer.clientWidth<20){var e=Math.floor(this.elements.thumb.imageContainer.clientHeight*this.thumbAspectRatio);this.elements.thumb.imageContainer.style.width="".concat(e,"px")}else if(this.elements.thumb.imageContainer.clientHeight<20&&this.elements.thumb.imageContainer.clientWidth>20){var t=Math.floor(this.elements.thumb.imageContainer.clientWidth/this.thumbAspectRatio);this.elements.thumb.imageContainer.style.height="".concat(t,"px")}}else{var n=Math.floor(this.thumbContainerHeight*this.thumbAspectRatio);this.elements.thumb.imageContainer.style.height="".concat(this.thumbContainerHeight,"px"),this.elements.thumb.imageContainer.style.width="".concat(n,"px")}this.setThumbContainerPos()}},{key:"setThumbContainerPos",value:function(){var e=this.player.elements.progress.getBoundingClientRect(),t=this.player.elements.container.getBoundingClientRect(),n=this.elements.thumb.container,i=t.left-e.left+10,r=t.right-e.left-n.clientWidth-10,a=this.mousePosX-e.left-n.clientWidth/2;a<i&&(a=i),a>r&&(a=r),n.style.left="".concat(a,"px")}},{key:"setScrubbingContainerSize",value:function(){var e=of(this.thumbAspectRatio,{width:this.player.media.clientWidth,height:this.player.media.clientHeight}),t=e.width,n=e.height;this.elements.scrubbing.container.style.width="".concat(t,"px"),this.elements.scrubbing.container.style.height="".concat(n,"px")}},{key:"setImageSizeAndOffset",value:function(e,t){if(this.usingSprites){var n=this.thumbContainerHeight/t.h;e.style.height="".concat(e.naturalHeight*n,"px"),e.style.width="".concat(e.naturalWidth*n,"px"),e.style.left="-".concat(t.x*n,"px"),e.style.top="-".concat(t.y*n,"px")}}},{key:"enabled",get:function(){return this.player.isHTML5&&this.player.isVideo&&this.player.config.previewThumbnails.enabled}},{key:"currentImageContainer",get:function(){return this.mouseDown?this.elements.scrubbing.container:this.elements.thumb.imageContainer}},{key:"usingSprites",get:function(){return Object.keys(this.thumbnails[0].frames[0]).includes("w")}},{key:"thumbAspectRatio",get:function(){return this.usingSprites?this.thumbnails[0].frames[0].w/this.thumbnails[0].frames[0].h:this.thumbnails[0].width/this.thumbnails[0].height}},{key:"thumbContainerHeight",get:function(){return this.mouseDown?of(this.thumbAspectRatio,{width:this.player.media.clientWidth,height:this.player.media.clientHeight}).height:this.sizeSpecifiedInCSS?this.elements.thumb.imageContainer.clientHeight:Math.floor(this.player.media.clientWidth/this.thumbAspectRatio/4)}},{key:"currentImageElement",get:function(){return this.mouseDown?this.currentScrubbingImageElement:this.currentThumbnailImageElement},set:function(e){this.mouseDown?this.currentScrubbingImageElement=e:this.currentThumbnailImageElement=e}}]),e}(),lf={insertElements:function(e,t){var n=this;Kc(t)?mu(e,this.media,{src:t}):Gc(t)&&t.forEach((function(t){mu(e,n.media,t)}))},change:function(e){var t=this;uu(e,"sources.length")?(Bu.cancelRequests.call(this),this.destroy.call(this,(function(){t.options.quality=[],gu(t.media),t.media=null,Qc(t.elements.container)&&t.elements.container.removeAttribute("class");var n=e.sources,i=e.type,r=Eo(n,1)[0],a=r.provider,o=void 0===a?Ch.html5:a,s=r.src,l="html5"===o?i:"div",c="html5"===o?{}:{src:s};Object.assign(t,{provider:o,type:i,supported:Iu.check(i,o,t.config.playsinline),media:pu(l,c)}),t.elements.container.appendChild(t.media),$c(e.autoplay)&&(t.config.autoplay=e.autoplay),t.isHTML5&&(t.config.crossorigin&&t.media.setAttribute("crossorigin",""),t.config.autoplay&&t.media.setAttribute("autoplay",""),nu(e.poster)||(t.poster=e.poster),t.config.loop.active&&t.media.setAttribute("loop",""),t.config.muted&&t.media.setAttribute("muted",""),t.config.playsinline&&t.media.setAttribute("playsinline","")),Rh.addStyleHook.call(t),t.isHTML5&&lf.insertElements.call(t,"source",n),t.config.title=e.title,Yh.setup.call(t),t.isHTML5&&Object.keys(e).includes("tracks")&&lf.insertElements.call(t,"track",e.tracks),(t.isHTML5||t.isEmbed&&!t.supported.ui)&&Rh.build.call(t),t.isHTML5&&t.media.load(),nu(e.previewThumbnails)||(Object.assign(t.config.previewThumbnails,e.previewThumbnails),t.previewThumbnails&&t.previewThumbnails.loaded&&(t.previewThumbnails.destroy(),t.previewThumbnails=null),t.config.previewThumbnails.enabled&&(t.previewThumbnails=new sf(t))),t.fullscreen.update()}),!0)):this.debug.warn("Invalid source format")}};var cf,uf=function(){function e(t,n){var i=this;if(yo(this,e),this.timers={},this.ready=!1,this.loading=!1,this.failed=!1,this.touch=Iu.touch,this.media=t,Kc(this.media)&&(this.media=document.querySelectorAll(this.media)),(window.jQuery&&this.media instanceof jQuery||Xc(this.media)||Gc(this.media))&&(this.media=this.media[0]),this.config=hu({},Eh,e.defaults,n||{},function(){try{return JSON.parse(i.media.getAttribute("data-plyr-config"))}catch(e){return{}}}()),this.elements={container:null,captions:null,buttons:{},display:{},progress:{},inputs:{},settings:{popup:null,menu:null,panels:{},buttons:{}}},this.captions={active:null,currentTrack:-1,meta:new WeakMap},this.fullscreen={active:!1},this.options={speed:[],quality:[]},this.debug=new Lh(this.config.debug),this.debug.log("Config",this.config),this.debug.log("Support",Iu),!Vc(this.media)&&Qc(this.media))if(this.media.plyr)this.debug.warn("Target already setup");else if(this.config.enabled)if(Iu.check().api){var r=this.media.cloneNode(!0);r.autoplay=!1,this.elements.original=r;var a=this.media.tagName.toLowerCase(),o=null,s=null;switch(a){case"div":if(o=this.media.querySelector("iframe"),Qc(o)){if(s=kh(o.getAttribute("src")),this.provider=function(e){return/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e)?Ch.youtube:/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e)?Ch.vimeo:null}(s.toString()),this.elements.container=this.media,this.media=o,this.elements.container.className="",s.search.length){var l=["1","true"];l.includes(s.searchParams.get("autoplay"))&&(this.config.autoplay=!0),l.includes(s.searchParams.get("loop"))&&(this.config.loop.active=!0),this.isYouTube?(this.config.playsinline=l.includes(s.searchParams.get("playsinline")),this.config.youtube.hl=s.searchParams.get("hl")):this.config.playsinline=!0}}else this.provider=this.media.getAttribute(this.config.attributes.embed.provider),this.media.removeAttribute(this.config.attributes.embed.provider);if(nu(this.provider)||!Object.keys(Ch).includes(this.provider))return void this.debug.error("Setup failed: Invalid provider");this.type=Ih;break;case"video":case"audio":this.type=a,this.provider=Ch.html5,this.media.hasAttribute("crossorigin")&&(this.config.crossorigin=!0),this.media.hasAttribute("autoplay")&&(this.config.autoplay=!0),(this.media.hasAttribute("playsinline")||this.media.hasAttribute("webkit-playsinline"))&&(this.config.playsinline=!0),this.media.hasAttribute("muted")&&(this.config.muted=!0),this.media.hasAttribute("loop")&&(this.config.loop.active=!0);break;default:return void this.debug.error("Setup failed: unsupported type")}this.supported=Iu.check(this.type,this.provider,this.config.playsinline),this.supported.api?(this.eventListeners=[],this.listeners=new _h(this),this.storage=new hh(this),this.media.plyr=this,Qc(this.elements.container)||(this.elements.container=pu("div",{tabindex:0}),fu(this.media,this.elements.container)),Rh.addStyleHook.call(this),Yh.setup.call(this),this.config.debug&&ju.call(this,this.elements.container,this.config.events.join(" "),(function(e){i.debug.log("event: ".concat(e.type))})),(this.isHTML5||this.isEmbed&&!this.supported.ui)&&Rh.build.call(this),this.listeners.container(),this.listeners.global(),this.fullscreen=new jh(this),this.config.ads.enabled&&(this.ads=new Gh(this)),this.isHTML5&&this.config.autoplay&&setTimeout((function(){return i.play()}),10),this.lastSeekTime=0,this.config.previewThumbnails.enabled&&(this.previewThumbnails=new sf(this))):this.debug.error("Setup failed: no support")}else this.debug.error("Setup failed: no support");else this.debug.error("Setup failed: disabled by config");else this.debug.error("Setup failed: no suitable element passed")}return wo(e,[{key:"play",value:function(){var e=this;return Yc(this.media.play)?(this.ads&&this.ads.enabled&&this.ads.managerPromise.then((function(){return e.ads.play()})).catch((function(){return e.media.play()})),this.media.play()):null}},{key:"pause",value:function(){return this.playing&&Yc(this.media.pause)?this.media.pause():null}},{key:"togglePlay",value:function(e){return($c(e)?e:!this.playing)?this.play():this.pause()}},{key:"stop",value:function(){this.isHTML5?(this.pause(),this.restart()):Yc(this.media.stop)&&this.media.stop()}},{key:"restart",value:function(){this.currentTime=0}},{key:"rewind",value:function(e){this.currentTime-=Wc(e)?e:this.config.seekTime}},{key:"forward",value:function(e){this.currentTime+=Wc(e)?e:this.config.seekTime}},{key:"increaseVolume",value:function(e){var t=this.media.muted?0:this.volume;this.volume=t+(Wc(e)?e:0)}},{key:"decreaseVolume",value:function(e){this.increaseVolume(-e)}},{key:"toggleCaptions",value:function(e){Sh.toggle.call(this,e,!1)}},{key:"airplay",value:function(){Iu.airplay&&this.media.webkitShowPlaybackTargetPicker()}},{key:"toggleControls",value:function(e){if(this.supported.ui&&!this.isAudio){var t=Tu(this.elements.container,this.config.classNames.hideControls),n=void 0===e?void 0:!e,i=ku(this.elements.container,this.config.classNames.hideControls,n);if(i&&this.config.controls.includes("settings")&&!nu(this.config.settings)&&wh.toggleMenu.call(this,!1),i!==t){var r=i?"controlshidden":"controlsshown";Ru.call(this,this.media,r)}return!i}return!1}},{key:"on",value:function(e,t){ju.call(this,this.elements.container,e,t)}},{key:"once",value:function(e,t){Nu.call(this,this.elements.container,e,t)}},{key:"off",value:function(e,t){Mu(this.elements.container,e,t)}},{key:"destroy",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.ready){var i=function(){document.body.style.overflow="",t.embed=null,n?(Object.keys(t.elements).length&&(gu(t.elements.buttons.play),gu(t.elements.captions),gu(t.elements.controls),gu(t.elements.wrapper),t.elements.buttons.play=null,t.elements.captions=null,t.elements.controls=null,t.elements.wrapper=null),Yc(e)&&e()):(_u.call(t),yu(t.elements.original,t.elements.container),Ru.call(t,t.elements.original,"destroyed",!0),Yc(e)&&e.call(t.elements.original),t.ready=!1,setTimeout((function(){t.elements=null,t.media=null}),200))};this.stop(),clearTimeout(this.timers.loading),clearTimeout(this.timers.controls),clearTimeout(this.timers.resized),this.isHTML5?(Rh.toggleNativeControls.call(this,!0),i()):this.isYouTube?(clearInterval(this.timers.buffering),clearInterval(this.timers.playing),null!==this.embed&&Yc(this.embed.destroy)&&this.embed.destroy(),i()):this.isVimeo&&(null!==this.embed&&this.embed.unload().then(i),setTimeout(i,200))}}},{key:"supports",value:function(e){return Iu.mime.call(this,e)}},{key:"isHTML5",get:function(){return this.provider===Ch.html5}},{key:"isEmbed",get:function(){return this.isYouTube||this.isVimeo}},{key:"isYouTube",get:function(){return this.provider===Ch.youtube}},{key:"isVimeo",get:function(){return this.provider===Ch.vimeo}},{key:"isVideo",get:function(){return this.type===Ih}},{key:"isAudio",get:function(){return this.type===Ph}},{key:"playing",get:function(){return Boolean(this.ready&&!this.paused&&!this.ended)}},{key:"paused",get:function(){return Boolean(this.media.paused)}},{key:"stopped",get:function(){return Boolean(this.paused&&0===this.currentTime)}},{key:"ended",get:function(){return Boolean(this.media.ended)}},{key:"currentTime",set:function(e){if(this.duration){var t=Wc(e)&&e>0;this.media.currentTime=t?Math.min(e,this.duration):0,this.debug.log("Seeking to ".concat(this.currentTime," seconds"))}},get:function(){return Number(this.media.currentTime)}},{key:"buffered",get:function(){var e=this.media.buffered;return Wc(e)?e:e&&e.length&&this.duration>0?e.end(0)/this.duration:0}},{key:"seeking",get:function(){return Boolean(this.media.seeking)}},{key:"duration",get:function(){var e=parseFloat(this.config.duration),t=(this.media||{}).duration,n=Wc(t)&&t!==1/0?t:0;return e||n}},{key:"volume",set:function(e){var t=e;Kc(t)&&(t=Number(t)),Wc(t)||(t=this.storage.get("volume")),Wc(t)||(t=this.config.volume),t>1&&(t=1),t<0&&(t=0),this.config.volume=t,this.media.volume=t,!nu(e)&&this.muted&&t>0&&(this.muted=!1)},get:function(){return Number(this.media.volume)}},{key:"muted",set:function(e){var t=e;$c(t)||(t=this.storage.get("muted")),$c(t)||(t=this.config.muted),this.config.muted=t,this.media.muted=t},get:function(){return Boolean(this.media.muted)}},{key:"hasAudio",get:function(){return!this.isHTML5||(!!this.isAudio||(Boolean(this.media.mozHasAudio)||Boolean(this.media.webkitAudioDecodedByteCount)||Boolean(this.media.audioTracks&&this.media.audioTracks.length)))}},{key:"speed",set:function(e){var t=this,n=null;Wc(e)&&(n=e),Wc(n)||(n=this.storage.get("speed")),Wc(n)||(n=this.config.speed.selected);var i=this.minimumSpeed,r=this.maximumSpeed;n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:255;return Math.min(Math.max(e,t),n)}(n,i,r),this.config.speed.selected=n,setTimeout((function(){t.media.playbackRate=n}),0)},get:function(){return Number(this.media.playbackRate)}},{key:"minimumSpeed",get:function(){return this.isYouTube?Math.min.apply(Math,Ao(this.options.speed)):this.isVimeo?.5:.0625}},{key:"maximumSpeed",get:function(){return this.isYouTube?Math.max.apply(Math,Ao(this.options.speed)):this.isVimeo?2:16}},{key:"quality",set:function(e){var t=this.config.quality,n=this.options.quality;if(n.length){var i=[!nu(e)&&Number(e),this.storage.get("quality"),t.selected,t.default].find(Wc),r=!0;if(!n.includes(i)){var a=function(e,t){return Gc(e)&&e.length?e.reduce((function(e,n){return Math.abs(n-t)<Math.abs(e-t)?n:e})):null}(n,i);this.debug.warn("Unsupported quality option: ".concat(i,", using ").concat(a," instead")),i=a,r=!1}t.selected=i,this.media.quality=i,r&&this.storage.set({quality:i})}},get:function(){return this.media.quality}},{key:"loop",set:function(e){var t=$c(e)?e:this.config.loop.active;this.config.loop.active=t,this.media.loop=t},get:function(){return Boolean(this.media.loop)}},{key:"source",set:function(e){lf.change.call(this,e)},get:function(){return this.media.currentSrc}},{key:"download",get:function(){var e=this.config.urls.download;return tu(e)?e:this.source},set:function(e){tu(e)&&(this.config.urls.download=e,wh.setDownloadUrl.call(this))}},{key:"poster",set:function(e){this.isVideo?Rh.setPoster.call(this,e,!1).catch((function(){})):this.debug.warn("Poster can only be set for video")},get:function(){return this.isVideo?this.media.getAttribute("poster"):null}},{key:"ratio",get:function(){if(!this.isVideo)return null;var e=Du(qu.call(this));return Gc(e)?e.join(":"):e},set:function(e){this.isVideo?Kc(e)&&Fu(e)?(this.config.ratio=e,Hu.call(this)):this.debug.error("Invalid aspect ratio specified (".concat(e,")")):this.debug.warn("Aspect ratio can only be set for video")}},{key:"autoplay",set:function(e){var t=$c(e)?e:this.config.autoplay;this.config.autoplay=t},get:function(){return Boolean(this.config.autoplay)}},{key:"currentTrack",set:function(e){Sh.set.call(this,e,!1)},get:function(){var e=this.captions,t=e.toggled,n=e.currentTrack;return t?n:-1}},{key:"language",set:function(e){Sh.setLanguage.call(this,e,!1)},get:function(){return(Sh.getCurrentTrack.call(this)||{}).language}},{key:"pip",set:function(e){if(Iu.pip){var t=$c(e)?e:!this.pip;Yc(this.media.webkitSetPresentationMode)&&this.media.webkitSetPresentationMode(t?Ah:xh),Yc(this.media.requestPictureInPicture)&&(!this.pip&&t?this.media.requestPictureInPicture():this.pip&&!t&&document.exitPictureInPicture())}},get:function(){return Iu.pip?nu(this.media.webkitPresentationMode)?this.media===document.pictureInPictureElement:this.media.webkitPresentationMode===Ah:null}}],[{key:"supported",value:function(e,t,n){return Iu.check(e,t,n)}},{key:"loadSprite",value:function(e,t){return dh(e,t)}},{key:"setup",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null;return Kc(t)?i=Array.from(document.querySelectorAll(t)):Xc(t)?i=Array.from(t):Gc(t)&&(i=t.filter(Qc)),nu(i)?null:i.map((function(t){return new e(t,n)}))}}]),e}();return uf.defaults=(cf=Eh,JSON.parse(JSON.stringify(cf))),uf}));
//# sourceMappingURL=plyr.polyfilled.js.map


/*! modernizr 3.3.1 (Custom Build) | MIT *
 * https://modernizr.com/download/?-touchevents-setclasses !*/
!function(e,n,t){function o(e,n){return typeof e===n}function s(){var e,n,t,s,a,i,r;for(var l in c)if(c.hasOwnProperty(l)){if(e=[],n=c[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(s=o(n.fn,"function")?n.fn():n.fn,a=0;a<e.length;a++)i=e[a],r=i.split("."),1===r.length?Modernizr[r[0]]=s:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=s),f.push((s?"":"no-")+r.join("-"))}}function a(e){var n=u.className,t=Modernizr._config.classPrefix||"";if(p&&(n=n.baseVal),Modernizr._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),p?u.className.baseVal=n:u.className=n)}function i(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):p?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function r(){var e=n.body;return e||(e=i(p?"svg":"body"),e.fake=!0),e}function l(e,t,o,s){var a,l,f,c,d="modernizr",p=i("div"),h=r();if(parseInt(o,10))for(;o--;)f=i("div"),f.id=s?s[o]:d+(o+1),p.appendChild(f);return a=i("style"),a.type="text/css",a.id="s"+d,(h.fake?h:p).appendChild(a),h.appendChild(p),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),p.id=d,h.fake&&(h.style.background="",h.style.overflow="hidden",c=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),l=t(p,e),h.fake?(h.parentNode.removeChild(h),u.style.overflow=c,u.offsetHeight):p.parentNode.removeChild(p),!!l}var f=[],c=[],d={_version:"3.3.1",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){c.push({name:e,fn:n,options:t})},addAsyncTest:function(e){c.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=d,Modernizr=new Modernizr;var u=n.documentElement,p="svg"===u.nodeName.toLowerCase(),h=d._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];d._prefixes=h;var m=d.testStyles=l;Modernizr.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",h.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");m(o,function(e){t=9===e.offsetTop})}return t}),s(),a(f),delete d.addTest,delete d.addAsyncTest;for(var v=0;v<Modernizr._q.length;v++)Modernizr._q[v]();e.Modernizr=Modernizr}(window,document);

/*!
 * Headhesive.js v1.2.3 - An on-demand sticky header
 * Author: Copyright (c) Mark Goodyear <@markgdyr> <http://markgoodyear.com>
 * Url: http://markgoodyear.com/labs/headhesive
 * License: MIT
 */
!function(t,e){"function"==typeof define&&define.amd?define([],function(){return e()}):"object"==typeof exports?module.exports=e():t.Headhesive=e()}(this,function(){"use strict";var t=function(e,s){for(var o in s)s.hasOwnProperty(o)&&(e[o]="object"==typeof s[o]?t(e[o],s[o]):s[o]);return e},e=function(t,e){var s,o,i,n=Date.now||function(){return(new Date).getTime()},l=null,c=0,r=function(){c=n(),l=null,i=t.apply(s,o),s=o=null};return function(){var f=n(),h=e-(f-c);return s=this,o=arguments,0>=h?(clearTimeout(l),l=null,c=f,i=t.apply(s,o),s=o=null):l||(l=setTimeout(r,h)),i}},s=function(){return void 0!==window.pageYOffset?window.pageYOffset:(document.documentElement||document.body.parentNode||document.body).scrollTop},o=function(t,e){for(var s=0,o=t.offsetHeight;t;)s+=t.offsetTop,t=t.offsetParent;return"bottom"===e&&(s+=o),s},i=function(e,s){"querySelector"in document&&"addEventListener"in window&&(this.visible=!1,this.options={offset:300,offsetSide:"top",classes:{clone:"headhesive",stick:"headhesive--stick",unstick:"headhesive--unstick"},throttle:250,onInit:function(){},onStick:function(){},onUnstick:function(){},onDestroy:function(){}},this.elem="string"==typeof e?document.querySelector(e):e,this.options=t(this.options,s),this.init())};return i.prototype={constructor:i,init:function(){if(this.clonedElem=this.elem.cloneNode(!0),this.clonedElem.className+=" "+this.options.classes.clone,document.body.insertBefore(this.clonedElem,document.body.firstChild),"number"==typeof this.options.offset)this.scrollOffset=this.options.offset;else{if("string"!=typeof this.options.offset)throw new Error("Invalid offset: "+this.options.offset);this._setScrollOffset()}this._throttleUpdate=e(this.update.bind(this),this.options.throttle),this._throttleScrollOffset=e(this._setScrollOffset.bind(this),this.options.throttle),window.addEventListener("scroll",this._throttleUpdate,!1),window.addEventListener("resize",this._throttleScrollOffset,!1),this.options.onInit.call(this)},_setScrollOffset:function(){"string"==typeof this.options.offset&&(this.scrollOffset=o(document.querySelector(this.options.offset),this.options.offsetSide))},destroy:function(){document.body.removeChild(this.clonedElem),window.removeEventListener("scroll",this._throttleUpdate),window.removeEventListener("resize",this._throttleScrollOffset),this.options.onDestroy.call(this)},stick:function(){this.visible||(this.clonedElem.className=this.clonedElem.className.replace(new RegExp("(^|\\s)*"+this.options.classes.unstick+"(\\s|$)*","g"),""),this.clonedElem.className+=" "+this.options.classes.stick,this.visible=!0,this.options.onStick.call(this))},unstick:function(){this.visible&&(this.clonedElem.className=this.clonedElem.className.replace(new RegExp("(^|\\s)*"+this.options.classes.stick+"(\\s|$)*","g"),""),this.clonedElem.className+=" "+this.options.classes.unstick,this.visible=!1,this.options.onUnstick.call(this))},update:function(){s()>this.scrollOffset?this.stick():this.unstick()}},i});

/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):"undefined"!=typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,e=this;e.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:a(c),appendDots:a(c),arrows:!0,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(b,c){return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},e.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.focussed=!1,e.interrupted=!1,e.hidden="hidden",e.paused=!0,e.positionProp=null,e.respondTo=null,e.rowCount=1,e.shouldClick=!0,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.visibilityChange="visibilitychange",e.windowWidth=0,e.windowTimer=null,f=a(c).data("slick")||{},e.options=a.extend({},e.defaults,d,f),e.currentSlide=e.options.initialSlide,e.originalSettings=e.options,"undefined"!=typeof document.mozHidden?(e.hidden="mozHidden",e.visibilityChange="mozvisibilitychange"):"undefined"!=typeof document.webkitHidden&&(e.hidden="webkitHidden",e.visibilityChange="webkitvisibilitychange"),e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.changeSlide=a.proxy(e.changeSlide,e),e.clickHandler=a.proxy(e.clickHandler,e),e.selectHandler=a.proxy(e.selectHandler,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.instanceUid=b++,e.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,e.registerBreakpoints(),e.init(!0)}var b=0;return c}(),b.prototype.activateADA=function(){var a=this;a.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},b.prototype.addSlide=b.prototype.slickAdd=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).detach(),e.$slideTrack.append(e.$slides),e.$slides.each(function(b,c){a(c).attr("data-slick-index",b)}),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({height:b},a.options.speed)}},b.prototype.animateSlide=function(b,c){var d={},e=this;e.animateHeight(),e.options.rtl===!0&&e.options.vertical===!1&&(b=-b),e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?(e.options.rtl===!0&&(e.currentLeft=-e.currentLeft),a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){a=Math.ceil(a),e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}})):(e.applyTransition(),b=Math.ceil(b),e.options.vertical===!1?d[e.animType]="translate3d("+b+"px, 0px, 0px)":d[e.animType]="translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.getNavTarget=function(){var b=this,c=b.options.asNavFor;return c&&null!==c&&(c=a(c).not(b.$slider)),c},b.prototype.asNavFor=function(b){var c=this,d=c.getNavTarget();null!==d&&"object"==typeof d&&d.each(function(){var c=a(this).slick("getSlick");c.unslicked||c.slideHandler(b,!0)})},b.prototype.applyTransition=function(a){var b=this,c={};b.options.fade===!1?c[b.transitionType]=b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:c[b.transitionType]="opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayClear(),a.slideCount>a.options.slidesToShow&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this,b=a.currentSlide+a.options.slidesToScroll;a.paused||a.interrupted||a.focussed||(a.options.infinite===!1&&(1===a.direction&&a.currentSlide+1===a.slideCount-1?a.direction=0:0===a.direction&&(b=a.currentSlide-a.options.slidesToScroll,a.currentSlide-1===0&&(a.direction=1))),a.slideHandler(b))},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&(b.$prevArrow=a(b.options.prevArrow).addClass("slick-arrow"),b.$nextArrow=a(b.options.nextArrow).addClass("slick-arrow"),b.slideCount>b.options.slidesToShow?(b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.prependTo(b.options.appendArrows),b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.appendTo(b.options.appendArrows),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(b.$slider.addClass("slick-dotted"),d=a("<ul />").addClass(b.options.dotsClass),c=0;c<=b.getDotCount();c+=1)d.append(a("<li />").append(b.options.customPaging.call(this,b,c)));b.$dots=d.appendTo(b.options.appendDots),b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slides.each(function(b,c){a(c).attr("data-slick-index",b).data("originalStyling",a(c).attr("style")||"")}),b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),(b.options.centerMode===!0||b.options.swipeToSlide===!0)&&(b.options.slidesToScroll=1),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.updateDots(),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.buildRows=function(){var b,c,d,e,f,g,h,a=this;if(e=document.createDocumentFragment(),g=a.$slider.children(),a.options.rows>1){for(h=a.options.slidesPerRow*a.options.rows,f=Math.ceil(g.length/h),b=0;f>b;b++){var i=document.createElement("div");for(c=0;c<a.options.rows;c++){var j=document.createElement("div");for(d=0;d<a.options.slidesPerRow;d++){var k=b*h+(c*a.options.slidesPerRow+d);g.get(k)&&j.appendChild(g.get(k))}i.appendChild(j)}e.appendChild(i)}a.$slider.empty().append(e),a.$slider.children().children().children().css({width:100/a.options.slidesPerRow+"%",display:"inline-block"})}},b.prototype.checkResponsive=function(b,c){var e,f,g,d=this,h=!1,i=d.$slider.width(),j=window.innerWidth||a(window).width();if("window"===d.respondTo?g=j:"slider"===d.respondTo?g=i:"min"===d.respondTo&&(g=Math.min(j,i)),d.options.responsive&&d.options.responsive.length&&null!==d.options.responsive){f=null;for(e in d.breakpoints)d.breakpoints.hasOwnProperty(e)&&(d.originalSettings.mobileFirst===!1?g<d.breakpoints[e]&&(f=d.breakpoints[e]):g>d.breakpoints[e]&&(f=d.breakpoints[e]));null!==f?null!==d.activeBreakpoint?(f!==d.activeBreakpoint||c)&&(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):(d.activeBreakpoint=f,"unslick"===d.breakpointSettings[f]?d.unslick(f):(d.options=a.extend({},d.originalSettings,d.breakpointSettings[f]),b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b)),h=f):null!==d.activeBreakpoint&&(d.activeBreakpoint=null,d.options=d.originalSettings,b===!0&&(d.currentSlide=d.options.initialSlide),d.refresh(b),h=f),b||h===!1||d.$slider.trigger("breakpoint",[d,h])}},b.prototype.changeSlide=function(b,c){var f,g,h,d=this,e=a(b.currentTarget);switch(e.is("a")&&b.preventDefault(),e.is("li")||(e=e.closest("li")),h=d.slideCount%d.options.slidesToScroll!==0,f=h?0:(d.slideCount-d.currentSlide)%d.options.slidesToScroll,b.data.message){case"previous":g=0===f?d.options.slidesToScroll:d.options.slidesToShow-f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide-g,!1,c);break;case"next":g=0===f?d.options.slidesToScroll:f,d.slideCount>d.options.slidesToShow&&d.slideHandler(d.currentSlide+g,!1,c);break;case"index":var i=0===b.data.index?0:b.data.index||e.index()*d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i),!1,c),e.children().trigger("focus");break;default:return}},b.prototype.checkNavigable=function(a){var c,d,b=this;if(c=b.getNavigableIndexes(),d=0,a>c[c.length-1])a=c[c.length-1];else for(var e in c){if(a<c[e]){a=d;break}d=c[e]}return a},b.prototype.cleanUpEvents=function(){var b=this;b.options.dots&&null!==b.$dots&&a("li",b.$dots).off("click.slick",b.changeSlide).off("mouseenter.slick",a.proxy(b.interrupt,b,!0)).off("mouseleave.slick",a.proxy(b.interrupt,b,!1)),b.$slider.off("focus.slick blur.slick"),b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow&&b.$prevArrow.off("click.slick",b.changeSlide),b.$nextArrow&&b.$nextArrow.off("click.slick",b.changeSlide)),b.$list.off("touchstart.slick mousedown.slick",b.swipeHandler),b.$list.off("touchmove.slick mousemove.slick",b.swipeHandler),b.$list.off("touchend.slick mouseup.slick",b.swipeHandler),b.$list.off("touchcancel.slick mouseleave.slick",b.swipeHandler),b.$list.off("click.slick",b.clickHandler),a(document).off(b.visibilityChange,b.visibility),b.cleanUpSlideEvents(),b.options.accessibility===!0&&b.$list.off("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().off("click.slick",b.selectHandler),a(window).off("orientationchange.slick.slick-"+b.instanceUid,b.orientationChange),a(window).off("resize.slick.slick-"+b.instanceUid,b.resize),a("[draggable!=true]",b.$slideTrack).off("dragstart",b.preventDefault),a(window).off("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).off("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.cleanUpSlideEvents=function(){var b=this;b.$list.off("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.off("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.cleanUpRows=function(){var b,a=this;a.options.rows>1&&(b=a.$slides.children().children(),b.removeAttr("style"),a.$slider.empty().append(b))},b.prototype.clickHandler=function(a){var b=this;b.shouldClick===!1&&(a.stopImmediatePropagation(),a.stopPropagation(),a.preventDefault())},b.prototype.destroy=function(b){var c=this;c.autoPlayClear(),c.touchObject={},c.cleanUpEvents(),a(".slick-cloned",c.$slider).detach(),c.$dots&&c.$dots.remove(),c.$prevArrow&&c.$prevArrow.length&&(c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.prevArrow)&&c.$prevArrow.remove()),c.$nextArrow&&c.$nextArrow.length&&(c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),c.htmlExpr.test(c.options.nextArrow)&&c.$nextArrow.remove()),c.$slides&&(c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){a(this).attr("style",a(this).data("originalStyling"))}),c.$slideTrack.children(this.options.slide).detach(),c.$slideTrack.detach(),c.$list.detach(),c.$slider.append(c.$slides)),c.cleanUpRows(),c.$slider.removeClass("slick-slider"),c.$slider.removeClass("slick-initialized"),c.$slider.removeClass("slick-dotted"),c.unslicked=!0,b||c.$slider.trigger("destroy",[c])},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:c.options.zIndex}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:c.options.zIndex}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.fadeSlideOut=function(a){var b=this;b.cssTransitions===!1?b.$slides.eq(a).animate({opacity:0,zIndex:b.options.zIndex-2},b.options.speed,b.options.easing):(b.applyTransition(a),b.$slides.eq(a).css({opacity:0,zIndex:b.options.zIndex-2}))},b.prototype.filterSlides=b.prototype.slickFilter=function(a){var b=this;null!==a&&(b.$slidesCache=b.$slides,b.unload(),b.$slideTrack.children(this.options.slide).detach(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.focusHandler=function(){var b=this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*:not(.slick-arrow)",function(c){c.stopImmediatePropagation();var d=a(this);setTimeout(function(){b.options.pauseOnFocus&&(b.focussed=d.is(":focus"),b.autoPlay())},0)})},b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var a=this,b=0,c=0,d=0;if(a.options.infinite===!0)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else if(a.options.centerMode===!0)d=a.slideCount;else if(a.options.asNavFor)for(;b<a.slideCount;)++d,b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;else d=1+Math.ceil((a.slideCount-a.options.slidesToShow)/a.options.slidesToScroll);return d-1},b.prototype.getLeft=function(a){var c,d,f,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(!0),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideWidth*b.options.slidesToShow*-1,e=d*b.options.slidesToShow*-1),b.slideCount%b.options.slidesToScroll!==0&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(a>b.slideCount?(b.slideOffset=(b.options.slidesToShow-(a-b.slideCount))*b.slideWidth*-1,e=(b.options.slidesToShow-(a-b.slideCount))*d*-1):(b.slideOffset=b.slideCount%b.options.slidesToScroll*b.slideWidth*-1,e=b.slideCount%b.options.slidesToScroll*d*-1))):a+b.options.slidesToShow>b.slideCount&&(b.slideOffset=(a+b.options.slidesToShow-b.slideCount)*b.slideWidth,e=(a+b.options.slidesToShow-b.slideCount)*d),b.slideCount<=b.options.slidesToShow&&(b.slideOffset=0,e=0),b.options.centerMode===!0&&b.options.infinite===!0?b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth:b.options.centerMode===!0&&(b.slideOffset=0,b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)),c=b.options.vertical===!1?a*b.slideWidth*-1+b.slideOffset:a*d*-1+e,b.options.variableWidth===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,b.options.centerMode===!0&&(f=b.slideCount<=b.options.slidesToShow||b.options.infinite===!1?b.$slideTrack.children(".slick-slide").eq(a):b.$slideTrack.children(".slick-slide").eq(a+b.options.slidesToShow+1),c=b.options.rtl===!0?f[0]?-1*(b.$slideTrack.width()-f[0].offsetLeft-f.width()):0:f[0]?-1*f[0].offsetLeft:0,c+=(b.$list.width()-f.outerWidth())/2)),c},b.prototype.getOption=b.prototype.slickGetOption=function(a){var b=this;return b.options[a]},b.prototype.getNavigableIndexes=function(){var e,a=this,b=0,c=0,d=[];for(a.options.infinite===!1?e=a.slideCount:(b=-1*a.options.slidesToScroll,c=-1*a.options.slidesToScroll,e=2*a.slideCount);e>b;)d.push(b),b=c+a.options.slidesToScroll,c+=a.options.slidesToScroll<=a.options.slidesToShow?a.options.slidesToScroll:a.options.slidesToShow;return d},b.prototype.getSlick=function(){return this},b.prototype.getSlideCount=function(){var c,d,e,b=this;return e=b.options.centerMode===!0?b.slideWidth*Math.floor(b.options.slidesToShow/2):0,b.options.swipeToSlide===!0?(b.$slideTrack.find(".slick-slide").each(function(c,f){return f.offsetLeft-e+a(f).outerWidth()/2>-1*b.swipeLeft?(d=f,!1):void 0}),c=Math.abs(a(d).attr("data-slick-index")-b.currentSlide)||1):b.options.slidesToScroll},b.prototype.goTo=b.prototype.slickGoTo=function(a,b){var c=this;c.changeSlide({data:{message:"index",index:parseInt(a)}},b)},b.prototype.init=function(b){var c=this;a(c.$slider).hasClass("slick-initialized")||(a(c.$slider).addClass("slick-initialized"),c.buildRows(),c.buildOut(),c.setProps(),c.startLoad(),c.loadSlider(),c.initializeEvents(),c.updateArrows(),c.updateDots(),c.checkResponsive(!0),c.focusHandler()),b&&c.$slider.trigger("init",[c]),c.options.accessibility===!0&&c.initADA(),c.options.autoplay&&(c.paused=!1,c.autoPlay())},b.prototype.initADA=function(){var b=this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),b.$slideTrack.attr("role","listbox"),b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function(c){a(this).attr({role:"option","aria-describedby":"slick-slide"+b.instanceUid+c})}),null!==b.$dots&&b.$dots.attr("role","tablist").find("li").each(function(c){a(this).attr({role:"presentation","aria-selected":"false","aria-controls":"navigation"+b.instanceUid+c,id:"slick-slide"+b.instanceUid+c})}).first().attr("aria-selected","true").end().find("button").attr("role","button").end().closest("div").attr("role","toolbar"),b.activateADA()},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.off("click.slick").on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide),b.options.dots===!0&&b.options.pauseOnDotsHover===!0&&a("li",b.$dots).on("mouseenter.slick",a.proxy(b.interrupt,b,!0)).on("mouseleave.slick",a.proxy(b.interrupt,b,!1))},b.prototype.initSlideEvents=function(){var b=this;b.options.pauseOnHover&&(b.$list.on("mouseenter.slick",a.proxy(b.interrupt,b,!0)),b.$list.on("mouseleave.slick",a.proxy(b.interrupt,b,!1)))},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.initSlideEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.$list.on("click.slick",b.clickHandler),a(document).on(b.visibilityChange,a.proxy(b.visibility,b)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,a.proxy(b.orientationChange,b)),a(window).on("resize.slick.slick-"+b.instanceUid,a.proxy(b.resize,b)),a("[draggable!=true]",b.$slideTrack).on("dragstart",b.preventDefault),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition),a(document).on("ready.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show()},b.prototype.keyHandler=function(a){var b=this;a.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===a.keyCode&&b.options.accessibility===!0?b.changeSlide({data:{message:b.options.rtl===!0?"next":"previous"}}):39===a.keyCode&&b.options.accessibility===!0&&b.changeSlide({data:{message:b.options.rtl===!0?"previous":"next"}}))},b.prototype.lazyLoad=function(){function g(c){a("img[data-lazy]",c).each(function(){var c=a(this),d=a(this).attr("data-lazy"),e=document.createElement("img");e.onload=function(){c.animate({opacity:0},100,function(){c.attr("src",d).animate({opacity:1},200,function(){c.removeAttr("data-lazy").removeClass("slick-loading")}),b.$slider.trigger("lazyLoaded",[b,c,d])})},e.onerror=function(){c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),b.$slider.trigger("lazyLoadError",[b,c,d])},e.src=d})}var c,d,e,f,b=this;b.options.centerMode===!0?b.options.infinite===!0?(e=b.currentSlide+(b.options.slidesToShow/2+1),f=e+b.options.slidesToShow+2):(e=Math.max(0,b.currentSlide-(b.options.slidesToShow/2+1)),f=2+(b.options.slidesToShow/2+1)+b.currentSlide):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=Math.ceil(e+b.options.slidesToShow),b.options.fade===!0&&(e>0&&e--,f<=b.slideCount&&f++)),c=b.$slider.find(".slick-slide").slice(e,f),g(c),b.slideCount<=b.options.slidesToShow?(d=b.$slider.find(".slick-slide"),g(d)):b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),g(d)):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),g(d))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.next=b.prototype.slickNext=function(){var a=this;a.changeSlide({data:{message:"next"}})},b.prototype.orientationChange=function(){var a=this;a.checkResponsive(),a.setPosition()},b.prototype.pause=b.prototype.slickPause=function(){var a=this;a.autoPlayClear(),a.paused=!0},b.prototype.play=b.prototype.slickPlay=function(){var a=this;a.autoPlay(),a.options.autoplay=!0,a.paused=!1,a.focussed=!1,a.interrupted=!1},b.prototype.postSlide=function(a){var b=this;b.unslicked||(b.$slider.trigger("afterChange",[b,a]),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay&&b.autoPlay(),b.options.accessibility===!0&&b.initADA())},b.prototype.prev=b.prototype.slickPrev=function(){var a=this;a.changeSlide({data:{message:"previous"}})},b.prototype.preventDefault=function(a){a.preventDefault()},b.prototype.progressiveLazyLoad=function(b){b=b||1;var e,f,g,c=this,d=a("img[data-lazy]",c.$slider);d.length?(e=d.first(),f=e.attr("data-lazy"),g=document.createElement("img"),g.onload=function(){e.attr("src",f).removeAttr("data-lazy").removeClass("slick-loading"),c.options.adaptiveHeight===!0&&c.setPosition(),c.$slider.trigger("lazyLoaded",[c,e,f]),c.progressiveLazyLoad()},g.onerror=function(){3>b?setTimeout(function(){c.progressiveLazyLoad(b+1)},500):(e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),c.$slider.trigger("lazyLoadError",[c,e,f]),c.progressiveLazyLoad())},g.src=f):c.$slider.trigger("allImagesLoaded",[c])},b.prototype.refresh=function(b){var d,e,c=this;e=c.slideCount-c.options.slidesToShow,!c.options.infinite&&c.currentSlide>e&&(c.currentSlide=e),c.slideCount<=c.options.slidesToShow&&(c.currentSlide=0),d=c.currentSlide,c.destroy(!0),a.extend(c,c.initials,{currentSlide:d}),c.init(),b||c.changeSlide({data:{message:"index",index:d}},!1)},b.prototype.registerBreakpoints=function(){var c,d,e,b=this,f=b.options.responsive||null;if("array"===a.type(f)&&f.length){b.respondTo=b.options.respondTo||"window";for(c in f)if(e=b.breakpoints.length-1,d=f[c].breakpoint,f.hasOwnProperty(c)){for(;e>=0;)b.breakpoints[e]&&b.breakpoints[e]===d&&b.breakpoints.splice(e,1),e--;b.breakpoints.push(d),b.breakpointSettings[d]=f[c].settings}b.breakpoints.sort(function(a,c){return b.options.mobileFirst?a-c:c-a})}},b.prototype.reinit=function(){var b=this;b.$slides=b.$slideTrack.children(b.options.slide).addClass("slick-slide"),b.slideCount=b.$slides.length,b.currentSlide>=b.slideCount&&0!==b.currentSlide&&(b.currentSlide=b.currentSlide-b.options.slidesToScroll),b.slideCount<=b.options.slidesToShow&&(b.currentSlide=0),b.registerBreakpoints(),b.setProps(),b.setupInfinite(),b.buildArrows(),b.updateArrows(),b.initArrowEvents(),b.buildDots(),b.updateDots(),b.initDotEvents(),b.cleanUpSlideEvents(),b.initSlideEvents(),b.checkResponsive(!1,!0),b.options.focusOnSelect===!0&&a(b.$slideTrack).children().on("click.slick",b.selectHandler),b.setSlideClasses("number"==typeof b.currentSlide?b.currentSlide:0),b.setPosition(),b.focusHandler(),b.paused=!b.options.autoplay,b.autoPlay(),b.$slider.trigger("reInit",[b])},b.prototype.resize=function(){var b=this;a(window).width()!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.unslicked||b.setPosition()},50))},b.prototype.removeSlide=b.prototype.slickRemove=function(a,b,c){var d=this;return"boolean"==typeof a?(b=a,a=b===!0?0:d.slideCount-1):a=b===!0?--a:a,d.slideCount<1||0>a||a>d.slideCount-1?!1:(d.unload(),c===!0?d.$slideTrack.children().remove():d.$slideTrack.children(this.options.slide).eq(a).remove(),d.$slides=d.$slideTrack.children(this.options.slide),d.$slideTrack.children(this.options.slide).detach(),d.$slideTrack.append(d.$slides),d.$slidesCache=d.$slides,void d.reinit())},b.prototype.setCSS=function(a){var d,e,b=this,c={};b.options.rtl===!0&&(a=-a),d="left"==b.positionProp?Math.ceil(a)+"px":"0px",e="top"==b.positionProp?Math.ceil(a)+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.vertical===!1?a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding}):(a.$list.height(a.$slides.first().outerHeight(!0)*a.options.slidesToShow),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"})),a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.options.vertical===!1&&a.options.variableWidth===!1?(a.slideWidth=Math.ceil(a.listWidth/a.options.slidesToShow),a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length))):a.options.variableWidth===!0?a.$slideTrack.width(5e3*a.slideCount):(a.slideWidth=Math.ceil(a.listWidth),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0)*a.$slideTrack.children(".slick-slide").length)));var b=a.$slides.first().outerWidth(!0)-a.$slides.first().width();a.options.variableWidth===!1&&a.$slideTrack.children(".slick-slide").width(a.slideWidth-b)},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=b.slideWidth*d*-1,b.options.rtl===!0?a(e).css({position:"relative",right:c,top:0,zIndex:b.options.zIndex-2,opacity:0}):a(e).css({position:"relative",left:c,top:0,zIndex:b.options.zIndex-2,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:b.options.zIndex-1,opacity:1})},b.prototype.setHeight=function(){var a=this;if(1===a.options.slidesToShow&&a.options.adaptiveHeight===!0&&a.options.vertical===!1){var b=a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height",b)}},b.prototype.setOption=b.prototype.slickSetOption=function(){var c,d,e,f,h,b=this,g=!1;if("object"===a.type(arguments[0])?(e=arguments[0],g=arguments[1],h="multiple"):"string"===a.type(arguments[0])&&(e=arguments[0],f=arguments[1],g=arguments[2],"responsive"===arguments[0]&&"array"===a.type(arguments[1])?h="responsive":"undefined"!=typeof arguments[1]&&(h="single")),"single"===h)b.options[e]=f;else if("multiple"===h)a.each(e,function(a,c){b.options[a]=c});else if("responsive"===h)for(d in f)if("array"!==a.type(b.options.responsive))b.options.responsive=[f[d]];else{for(c=b.options.responsive.length-1;c>=0;)b.options.responsive[c].breakpoint===f[d].breakpoint&&b.options.responsive.splice(c,1),c--;b.options.responsive.push(f[d])}g&&(b.unload(),b.reinit())},b.prototype.setPosition=function(){var a=this;a.setDimensions(),a.setHeight(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade(),a.$slider.trigger("setPosition",[a])},b.prototype.setProps=function(){var a=this,b=document.body.style;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==b.WebkitTransition||void 0!==b.MozTransition||void 0!==b.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),a.options.fade&&("number"==typeof a.options.zIndex?a.options.zIndex<3&&(a.options.zIndex=3):a.options.zIndex=a.defaults.zIndex),void 0!==b.OTransform&&(a.animType="OTransform",a.transformType="-o-transform",a.transitionType="OTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition",void 0===b.perspectiveProperty&&void 0===b.MozPerspective&&(a.animType=!1)),void 0!==b.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition",void 0===b.perspectiveProperty&&void 0===b.webkitPerspective&&(a.animType=!1)),void 0!==b.msTransform&&(a.animType="msTransform",a.transformType="-ms-transform",a.transitionType="msTransition",void 0===b.msTransform&&(a.animType=!1)),void 0!==b.transform&&a.animType!==!1&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=a.options.useTransform&&null!==a.animType&&a.animType!==!1},b.prototype.setSlideClasses=function(a){var c,d,e,f,b=this;d=b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),b.$slides.eq(a).addClass("slick-current"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),b.options.infinite===!0&&(a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active").attr("aria-hidden","false"):(e=b.options.slidesToShow+a,
  d.slice(e-c+1,e+c+2).addClass("slick-active").attr("aria-hidden","false")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center")),b.$slides.eq(a).addClass("slick-center")):a>=0&&a<=b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):d.length<=b.options.slidesToShow?d.addClass("slick-active").attr("aria-hidden","false"):(f=b.slideCount%b.options.slidesToShow,e=b.options.infinite===!0?b.options.slidesToShow+a:a,b.options.slidesToShow==b.options.slidesToScroll&&b.slideCount-a<b.options.slidesToShow?d.slice(e-(b.options.slidesToShow-f),e+f).addClass("slick-active").attr("aria-hidden","false"):d.slice(e,e+b.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if(b.options.fade===!0&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d-b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone(!0).attr("id","").attr("data-slick-index",d+b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.interrupt=function(a){var b=this;a||b.autoPlay(),b.interrupted=a},b.prototype.selectHandler=function(b){var c=this,d=a(b.target).is(".slick-slide")?a(b.target):a(b.target).parents(".slick-slide"),e=parseInt(d.attr("data-slick-index"));return e||(e=0),c.slideCount<=c.options.slidesToShow?(c.setSlideClasses(e),void c.asNavFor(e)):void c.slideHandler(e)},b.prototype.slideHandler=function(a,b,c){var d,e,f,g,j,h=null,i=this;return b=b||!1,i.animating===!0&&i.options.waitForAnimate===!0||i.options.fade===!0&&i.currentSlide===a||i.slideCount<=i.options.slidesToShow?void 0:(b===!1&&i.asNavFor(a),d=a,h=i.getLeft(d),g=i.getLeft(i.currentSlide),i.currentLeft=null===i.swipeLeft?g:i.swipeLeft,i.options.infinite===!1&&i.options.centerMode===!1&&(0>a||a>i.getDotCount()*i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):i.options.infinite===!1&&i.options.centerMode===!0&&(0>a||a>i.slideCount-i.options.slidesToScroll)?void(i.options.fade===!1&&(d=i.currentSlide,c!==!0?i.animateSlide(g,function(){i.postSlide(d)}):i.postSlide(d))):(i.options.autoplay&&clearInterval(i.autoPlayTimer),e=0>d?i.slideCount%i.options.slidesToScroll!==0?i.slideCount-i.slideCount%i.options.slidesToScroll:i.slideCount+d:d>=i.slideCount?i.slideCount%i.options.slidesToScroll!==0?0:d-i.slideCount:d,i.animating=!0,i.$slider.trigger("beforeChange",[i,i.currentSlide,e]),f=i.currentSlide,i.currentSlide=e,i.setSlideClasses(i.currentSlide),i.options.asNavFor&&(j=i.getNavTarget(),j=j.slick("getSlick"),j.slideCount<=j.options.slidesToShow&&j.setSlideClasses(i.currentSlide)),i.updateDots(),i.updateArrows(),i.options.fade===!0?(c!==!0?(i.fadeSlideOut(f),i.fadeSlide(e,function(){i.postSlide(e)})):i.postSlide(e),void i.animateHeight()):void(c!==!0?i.animateSlide(h,function(){i.postSlide(e)}):i.postSlide(e))))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?e.options.rtl===!1?"left":"right":360>=d&&d>=315?e.options.rtl===!1?"left":"right":d>=135&&225>=d?e.options.rtl===!1?"right":"left":e.options.verticalSwiping===!0?d>=35&&135>=d?"down":"up":"vertical"},b.prototype.swipeEnd=function(a){var c,d,b=this;if(b.dragging=!1,b.interrupted=!1,b.shouldClick=b.touchObject.swipeLength>10?!1:!0,void 0===b.touchObject.curX)return!1;if(b.touchObject.edgeHit===!0&&b.$slider.trigger("edge",[b,b.swipeDirection()]),b.touchObject.swipeLength>=b.touchObject.minSwipe){switch(d=b.swipeDirection()){case"left":case"down":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide+b.getSlideCount()):b.currentSlide+b.getSlideCount(),b.currentDirection=0;break;case"right":case"up":c=b.options.swipeToSlide?b.checkNavigable(b.currentSlide-b.getSlideCount()):b.currentSlide-b.getSlideCount(),b.currentDirection=1}"vertical"!=d&&(b.slideHandler(c),b.touchObject={},b.$slider.trigger("swipe",[b,d]))}else b.touchObject.startX!==b.touchObject.curX&&(b.slideHandler(b.currentSlide),b.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if(!(b.options.swipe===!1||"ontouchend"in document&&b.options.swipe===!1||b.options.draggable===!1&&-1!==a.type.indexOf("mouse")))switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,b.options.verticalSwiping===!0&&(b.touchObject.minSwipe=b.listHeight/b.options.touchThreshold),a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var d,e,f,g,h,b=this;return h=void 0!==a.originalEvent?a.originalEvent.touches:null,!b.dragging||h&&1!==h.length?!1:(d=b.getLeft(b.currentSlide),b.touchObject.curX=void 0!==h?h[0].pageX:a.clientX,b.touchObject.curY=void 0!==h?h[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),b.options.verticalSwiping===!0&&(b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curY-b.touchObject.startY,2)))),e=b.swipeDirection(),"vertical"!==e?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),g=(b.options.rtl===!1?1:-1)*(b.touchObject.curX>b.touchObject.startX?1:-1),b.options.verticalSwiping===!0&&(g=b.touchObject.curY>b.touchObject.startY?1:-1),f=b.touchObject.swipeLength,b.touchObject.edgeHit=!1,b.options.infinite===!1&&(0===b.currentSlide&&"right"===e||b.currentSlide>=b.getDotCount()&&"left"===e)&&(f=b.touchObject.swipeLength*b.options.edgeFriction,b.touchObject.edgeHit=!0),b.options.vertical===!1?b.swipeLeft=d+f*g:b.swipeLeft=d+f*(b.$list.height()/b.listWidth)*g,b.options.verticalSwiping===!0&&(b.swipeLeft=d+f*g),b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):void b.setCSS(b.swipeLeft)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return b.interrupted=!0,1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,void(b.dragging=!0))},b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).detach(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&b.htmlExpr.test(b.options.prevArrow)&&b.$prevArrow.remove(),b.$nextArrow&&b.htmlExpr.test(b.options.nextArrow)&&b.$nextArrow.remove(),b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},b.prototype.unslick=function(a){var b=this;b.$slider.trigger("unslick",[b,a]),b.destroy()},b.prototype.updateArrows=function(){var b,a=this;b=Math.floor(a.options.slidesToShow/2),a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&!a.options.infinite&&(a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&a.options.centerMode===!1?(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):a.currentSlide>=a.slideCount-1&&a.options.centerMode===!0&&(a.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true"),a.$dots.find("li").eq(Math.floor(a.currentSlide/a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false"))},b.prototype.visibility=function(){var a=this;a.options.autoplay&&(document[a.hidden]?a.interrupted=!0:a.interrupted=!1)},a.fn.slick=function(){var f,g,a=this,c=arguments[0],d=Array.prototype.slice.call(arguments,1),e=a.length;for(f=0;e>f;f++)if("object"==typeof c||"undefined"==typeof c?a[f].slick=new b(a[f],c):g=a[f].slick[c].apply(a[f].slick,d),"undefined"!=typeof g)return g;return a}});

/* end of slick slider JS */


  /*! js-url - v2.5.0 - 2017-04-22 */
  !function(){var a=function(){function a(){}function b(a){return decodeURIComponent(a.replace(/\+/g," "))}function c(a,b){var c=a.charAt(0),d=b.split(c);return c===a?d:(a=parseInt(a.substring(1),10),d[a<0?d.length+a:a-1])}function d(a,c){for(var d=a.charAt(0),e=c.split("&"),f=[],g={},h=[],i=a.substring(1),j=0,k=e.length;j<k;j++)if(f=e[j].match(/(.*?)=(.*)/),f||(f=[e[j],e[j],""]),""!==f[1].replace(/\s/g,"")){if(f[2]=b(f[2]||""),i===f[1])return f[2];h=f[1].match(/(.*)\[([0-9]+)\]/),h?(g[h[1]]=g[h[1]]||[],g[h[1]][h[2]]=f[2]):g[f[1]]=f[2]}return d===a?g:g[i]}return function(b,e){var f,g={};if("tld?"===b)return a();if(e=e||window.location.toString(),!b)return e;if(b=b.toString(),f=e.match(/^mailto:([^\/].+)/))g.protocol="mailto",g.email=f[1];else{if((f=e.match(/(.*?)\/#\!(.*)/))&&(e=f[1]+f[2]),(f=e.match(/(.*?)#(.*)/))&&(g.hash=f[2],e=f[1]),g.hash&&b.match(/^#/))return d(b,g.hash);if((f=e.match(/(.*?)\?(.*)/))&&(g.query=f[2],e=f[1]),g.query&&b.match(/^\?/))return d(b,g.query);if((f=e.match(/(.*?)\:?\/\/(.*)/))&&(g.protocol=f[1].toLowerCase(),e=f[2]),(f=e.match(/(.*?)(\/.*)/))&&(g.path=f[2],e=f[1]),g.path=(g.path||"").replace(/^([^\/])/,"/$1"),b.match(/^[\-0-9]+$/)&&(b=b.replace(/^([^\/])/,"/$1")),b.match(/^\//))return c(b,g.path.substring(1));if(f=c("/-1",g.path.substring(1)),f&&(f=f.match(/(.*?)\.(.*)/))&&(g.file=f[0],g.filename=f[1],g.fileext=f[2]),(f=e.match(/(.*)\:([0-9]+)$/))&&(g.port=f[2],e=f[1]),(f=e.match(/(.*?)@(.*)/))&&(g.auth=f[1],e=f[2]),g.auth&&(f=g.auth.match(/(.*)\:(.*)/),g.user=f?f[1]:g.auth,g.pass=f?f[2]:void 0),g.hostname=e.toLowerCase(),"."===b.charAt(0))return c(b,g.hostname);a()&&(f=g.hostname.match(a()),f&&(g.tld=f[3],g.domain=f[2]?f[2]+"."+f[3]:void 0,g.sub=f[1]||void 0)),g.port=g.port||("https"===g.protocol?"443":"80"),g.protocol=g.protocol||("443"===g.port?"https":"http")}return b in g?g[b]:"{}"===b?g:void 0}}();"function"==typeof window.define&&window.define.amd?window.define("js-url",[],function(){return a}):("undefined"!=typeof window.jQuery&&window.jQuery.extend({url:function(a,b){return window.url(a,b)}}),window.url=a)}();

/*SLick slider JS*/
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

/*end Slick slider js*/

/*!
 * Datepicker v1.0.4
 * https://fengyuanchen.github.io/datepicker
 *
 * Copyright 2014-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2019-01-06T02:42:36.188Z
 */

/*end Datepicker js*/  

/* ------------------------- rater JS ----------------*/

(function($,window){$.fn.textWidth=function(){var html_calc=$("<span>"+$(this).html()+"</span>");html_calc.css("font-size",$(this).css("font-size")).hide();html_calc.prependTo("body");var width=html_calc.width();html_calc.remove();if(width==0){var total=0;$(this).eq(0).children().each(function(){total+=$(this).textWidth()});return total}return width};$.fn.textHeight=function(){var html_calc=$("<span>"+$(this).html()+"</span>");html_calc.css("font-size",$(this).css("font-size")).hide();html_calc.prependTo("body");var height=html_calc.height();html_calc.remove();return height};Array.isArray=function(obj){return Object.prototype.toString.call(obj)==="[object Array]"};String.prototype.getCodePointLength=function(){return this.length-this.split(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g).length+1};String.fromCodePoint=function(){var chars=Array.prototype.slice.call(arguments);for(var i=chars.length;i-->0;){var n=chars[i]-65536;if(n>=0)chars.splice(i,1,55296+(n>>10),56320+(n&1023))}return String.fromCharCode.apply(null,chars)};$.fn.rate=function(options){if(options===undefined||typeof options==="object"){return this.each(function(){if(!$.data(this,"rate")){$.data(this,"rate",new Rate(this,options))}})}else if(typeof options==="string"){var args=arguments;var returns;this.each(function(){var instance=$.data(this,"rate");if(instance instanceof Rate&&typeof instance[options]==="function"){returns=instance[options].apply(instance,Array.prototype.slice.call(args,1))}if(options==="destroy"){$(instance.element).off();$.data(this,"rate",null)}});return returns!==undefined?returns:this}};function Rate(element,options){this.element=element;this.settings=$.extend({},$.fn.rate.settings,options);this.set_faces={};this.build()}Rate.prototype.build=function(){this.layers={};this.value=0;this.raise_select_layer=false;if(this.settings.initial_value){this.value=this.settings.initial_value}if($(this.element).attr("data-rate-value")){this.value=$(this.element).attr("data-rate-value")}var selected_width=this.value/this.settings.max_value*100;if(typeof this.settings.symbols[this.settings.selected_symbol_type]==="string"){var symbol=this.settings.symbols[this.settings.selected_symbol_type];this.settings.symbols[this.settings.selected_symbol_type]={};this.settings.symbols[this.settings.selected_symbol_type]["base"]=symbol;this.settings.symbols[this.settings.selected_symbol_type]["selected"]=symbol;this.settings.symbols[this.settings.selected_symbol_type]["hover"]=symbol}var base_layer=this.addLayer("base-layer",100,this.settings.symbols[this.settings.selected_symbol_type]["base"],true);var select_layer=this.addLayer("select-layer",selected_width,this.settings.symbols[this.settings.selected_symbol_type]["selected"],true);var hover_layer=this.addLayer("hover-layer",0,this.settings.symbols[this.settings.selected_symbol_type]["hover"],false);this.layers["base_layer"]=base_layer;this.layers["select_layer"]=select_layer;this.layers["hover_layer"]=hover_layer;$(this.element).on("mousemove",$.proxy(this.hover,this));$(this.element).on("click",$.proxy(this.select,this));$(this.element).on("mouseleave",$.proxy(this.mouseout,this));$(this.element).css({"-webkit-touch-callout":"none","-webkit-user-select":"none","-khtml-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","user-select":"none"});if(this.settings.hasOwnProperty("update_input_field_name")){this.settings.update_input_field_name.val(this.value)}};Rate.prototype.addLayer=function(layer_name,visible_width,symbol,visible){var layer_body="<div>";for(var i=0;i<this.settings.max_value;i++){if(Array.isArray(symbol)){if(this.settings.convert_to_utf8){symbol[i]=String.fromCodePoint(symbol[i])}layer_body+="<span>"+symbol[i]+"</span>"}else{if(this.settings.convert_to_utf8){symbol=String.fromCodePoint(symbol)}layer_body+="<span>"+symbol+"</span>"}}layer_body+="</div>";var layer=$(layer_body).addClass("rate-"+layer_name).appendTo(this.element);$(layer).css({width:visible_width+"%",height:$(layer).children().eq(0).textHeight(),overflow:"hidden",position:"absolute",top:0,display:visible?"block":"none","white-space":"nowrap"});$(this.element).css({width:$(layer).textWidth()+"px",height:$(layer).height(),position:"relative",cursor:this.settings.cursor});return layer};Rate.prototype.updateServer=function(){if(this.settings.url!=undefined){$.ajax({url:this.settings.url,type:this.settings.ajax_method,data:$.extend({},{value:this.getValue()},this.settings.additional_data),success:$.proxy(function(data){$(this.element).trigger("updateSuccess",[data])},this),error:$.proxy(function(jxhr,msg,err){$(this.element).trigger("updateError",[jxhr,msg,err])},this)})}};Rate.prototype.getValue=function(){return this.value};Rate.prototype.hover=function(ev){var pad=parseInt($(this.element).css("padding-left").replace("px",""));var x=ev.pageX-$(this.element).offset().left-pad;var val=this.toValue(x,true);if(val!=this.value){this.raise_select_layer=false}if(!this.raise_select_layer&&!this.settings.readonly){var visible_width=this.toWidth(val);this.layers.select_layer.css({display:"none"});if(!this.settings.only_select_one_symbol){this.layers.hover_layer.css({width:visible_width+"%",display:"block"})}else{var index_value=Math.floor(val);this.layers.hover_layer.css({width:"100%",display:"block"});this.layers.hover_layer.children("span").css({visibility:"hidden"});this.layers.hover_layer.children("span").eq(index_value!=0?index_value-1:0).css({visibility:"visible"})}}};Rate.prototype.select=function(ev){if(!this.settings.readonly){var old_value=this.getValue();var pad=parseInt($(this.element).css("padding-left").replace("px",""));var x=ev.pageX-$(this.element).offset().left-pad;var selected_width=this.toWidth(this.toValue(x,true));this.setValue(this.toValue(selected_width));this.raise_select_layer=true}};Rate.prototype.mouseout=function(){this.layers.hover_layer.css({display:"none"});this.layers.select_layer.css({display:"block"})};Rate.prototype.toWidth=function(val){return val/this.settings.max_value*100};Rate.prototype.toValue=function(width,in_pixels){var val;if(in_pixels){val=width/this.layers.base_layer.textWidth()*this.settings.max_value}else{val=width/100*this.settings.max_value}var temp=val/this.settings.step_size;if(temp-Math.floor(temp)<5e-5){val=Math.round(val/this.settings.step_size)*this.settings.step_size}val=Math.ceil(val/this.settings.step_size)*this.settings.step_size;val=val>this.settings.max_value?this.settings.max_value:val;return val};Rate.prototype.getElement=function(layer_name,index){return $(this.element).find(".rate-"+layer_name+" span").eq(index-1)};Rate.prototype.getLayers=function(){return this.layers};Rate.prototype.setFace=function(value,face){this.set_faces[value]=face};Rate.prototype.setAdditionalData=function(data){this.settings.additional_data=data};Rate.prototype.getAdditionalData=function(){return this.settings.additional_data};Rate.prototype.removeFace=function(value){delete this.set_faces[value]};Rate.prototype.setValue=function(value){if(!this.settings.readonly){if(value<0){value=0}else if(value>this.settings.max_value){value=this.settings.max_value}var old_value=this.getValue();this.value=value;var change_event=$(this.element).trigger("change",{from:old_value,to:this.value});$(this.element).find(".rate-face").remove();$(this.element).find("span").css({visibility:"visible"});var index_value=Math.ceil(this.value);if(this.set_faces.hasOwnProperty(index_value)){var face="<div>"+this.set_faces[index_value]+"</div>";var base_layer_element=this.getElement("base-layer",index_value);var select_layer_element=this.getElement("select-layer",index_value);var hover_layer_element=this.getElement("hover-layer",index_value);var left_pos=base_layer_element.textWidth()*(index_value-1)+(base_layer_element.textWidth()-$(face).textWidth())/2;$(face).appendTo(this.element).css({display:"inline-block",position:"absolute",left:left_pos}).addClass("rate-face");base_layer_element.css({visibility:"hidden"});select_layer_element.css({visibility:"hidden"});hover_layer_element.css({visibility:"hidden"})}if(!this.settings.only_select_one_symbol){var width=this.toWidth(this.value);this.layers.select_layer.css({display:"block",width:width+"%",height:this.layers.base_layer.css("height")});this.layers.hover_layer.css({display:"none",height:this.layers.base_layer.css("height")})}else{var width=this.toWidth(this.settings.max_value);this.layers.select_layer.css({display:"block",width:width+"%",height:this.layers.base_layer.css("height")});this.layers.hover_layer.css({display:"none",height:this.layers.base_layer.css("height")});this.layers.select_layer.children("span").css({visibility:"hidden"});this.layers.select_layer.children("span").eq(index_value!=0?index_value-1:0).css({visibility:"visible"})}$(this.element).attr("data-rate-value",this.value);if(this.settings.change_once){this.settings.readonly=true}this.updateServer();var change_event=$(this.element).trigger("afterChange",{from:old_value,to:this.value});if(this.settings.hasOwnProperty("update_input_field_name")){this.settings.update_input_field_name.val(this.value)}}};Rate.prototype.increment=function(){this.setValue(this.getValue()+this.settings.step_size)};Rate.prototype.decrement=function(){this.setValue(this.getValue()-this.settings.step_size)};$.fn.rate.settings={max_value:5,step_size:.5,initial_value:0,symbols:{utf8_star:{base:"☆",hover:"★",selected:"★"},utf8_hexagon:{base:"⬡",hover:"⬢",selected:"⬢"},hearts:"&hearts;",fontawesome_beer:'<i class="fa fa-beer"></i>',fontawesome_star:{base:'<i class="fa fa-star-o"></i>',hover:'<i class="fa fa-star"></i>',selected:'<i class="fa fa-star"></i>'},utf8_emoticons:{base:[128549,128531,128530,128516],hover:[128549,128531,128530,128516],selected:[128549,128531,128530,128516]}},selected_symbol_type:"utf8_star",convert_to_utf8:false,cursor:"default",readonly:false,change_once:false,only_select_one_symbol:false,ajax_method:"POST",additional_data:{}}})(jQuery,window);
/* End of  Rater JS */

/*
https://momentjs.com/downloads/moment.js
*/


!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict";var e,t;function n(){return e.apply(null,arguments)}function s(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function i(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function r(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function a(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(r(e,t))return!1;return!0}function o(e){return void 0===e}function u(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function l(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function h(e,t){var n,s=[];for(n=0;n<e.length;++n)s.push(t(e[n],n));return s}function d(e,t){for(var n in t)r(t,n)&&(e[n]=t[n]);return r(t,"toString")&&(e.toString=t.toString),r(t,"valueOf")&&(e.valueOf=t.valueOf),e}function c(e,t,n,s){return Tt(e,t,n,s,!0).utc()}function f(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function m(e){if(null==e._isValid){var n=f(e),s=t.call(n.parsedDateParts,function(e){return null!=e}),i=!isNaN(e._d.getTime())&&n.overflow<0&&!n.empty&&!n.invalidEra&&!n.invalidMonth&&!n.invalidWeekday&&!n.weekdayMismatch&&!n.nullInput&&!n.invalidFormat&&!n.userInvalidated&&(!n.meridiem||n.meridiem&&s);if(e._strict&&(i=i&&0===n.charsLeftOver&&0===n.unusedTokens.length&&void 0===n.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return i;e._isValid=i}return e._isValid}function _(e){var t=c(NaN);return null!=e?d(f(t),e):f(t).userInvalidated=!0,t}t=Array.prototype.some?Array.prototype.some:function(e){var t,n=Object(this),s=n.length>>>0;for(t=0;t<s;t++)if(t in n&&e.call(this,n[t],t,n))return!0;return!1};var y=n.momentProperties=[],g=!1;function w(e,t){var n,s,i;if(o(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),o(t._i)||(e._i=t._i),o(t._f)||(e._f=t._f),o(t._l)||(e._l=t._l),o(t._strict)||(e._strict=t._strict),o(t._tzm)||(e._tzm=t._tzm),o(t._isUTC)||(e._isUTC=t._isUTC),o(t._offset)||(e._offset=t._offset),o(t._pf)||(e._pf=f(t)),o(t._locale)||(e._locale=t._locale),y.length>0)for(n=0;n<y.length;n++)o(i=t[s=y[n]])||(e[s]=i);return e}function p(e){w(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===g&&(g=!0,n.updateOffset(this),g=!1)}function v(e){return e instanceof p||null!=e&&null!=e._isAMomentObject}function k(e){!1===n.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function M(e,t){var s=!0;return d(function(){if(null!=n.deprecationHandler&&n.deprecationHandler(null,e),s){var i,a,o,u=[];for(a=0;a<arguments.length;a++){if(i="","object"==typeof arguments[a]){for(o in i+="\n["+a+"] ",arguments[0])r(arguments[0],o)&&(i+=o+": "+arguments[0][o]+", ");i=i.slice(0,-2)}else i=arguments[a];u.push(i)}k(e+"\nArguments: "+Array.prototype.slice.call(u).join("")+"\n"+(new Error).stack),s=!1}return t.apply(this,arguments)},t)}var D,S={};function Y(e,t){null!=n.deprecationHandler&&n.deprecationHandler(e,t),S[e]||(k(t),S[e]=!0)}function O(e){return"undefined"!=typeof Function&&e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function b(e,t){var n,s=d({},e);for(n in t)r(t,n)&&(i(e[n])&&i(t[n])?(s[n]={},d(s[n],e[n]),d(s[n],t[n])):null!=t[n]?s[n]=t[n]:delete s[n]);for(n in e)r(e,n)&&!r(t,n)&&i(e[n])&&(s[n]=d({},s[n]));return s}function x(e){null!=e&&this.set(e)}n.suppressDeprecationWarnings=!1,n.deprecationHandler=null,D=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)r(e,t)&&n.push(t);return n};function T(e,t,n){var s=""+Math.abs(e),i=t-s.length;return(e>=0?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}var N=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,P=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,R={},W={};function C(e,t,n,s){var i=s;"string"==typeof s&&(i=function(){return this[s]()}),e&&(W[e]=i),t&&(W[t[0]]=function(){return T(i.apply(this,arguments),t[1],t[2])}),n&&(W[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function U(e,t){return e.isValid()?(t=H(t,e.localeData()),R[t]=R[t]||function(e){var t,n,s,i=e.match(N);for(t=0,n=i.length;t<n;t++)W[i[t]]?i[t]=W[i[t]]:i[t]=(s=i[t]).match(/\[[\s\S]/)?s.replace(/^\[|\]$/g,""):s.replace(/\\/g,"");return function(t){var s,r="";for(s=0;s<n;s++)r+=O(i[s])?i[s].call(t,e):i[s];return r}}(t),R[t](e)):e.localeData().invalidDate()}function H(e,t){var n=5;function s(e){return t.longDateFormat(e)||e}for(P.lastIndex=0;n>=0&&P.test(e);)e=e.replace(P,s),P.lastIndex=0,n-=1;return e}var F={};function L(e,t){var n=e.toLowerCase();F[n]=F[n+"s"]=F[t]=e}function V(e){return"string"==typeof e?F[e]||F[e.toLowerCase()]:void 0}function G(e){var t,n,s={};for(n in e)r(e,n)&&(t=V(n))&&(s[t]=e[n]);return s}var E={};function A(e,t){E[e]=t}function j(e){return e%4==0&&e%100!=0||e%400==0}function I(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function Z(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=I(t)),n}function z(e,t){return function(s){return null!=s?(q(this,e,s),n.updateOffset(this,t),this):$(this,e)}}function $(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function q(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&j(e.year())&&1===e.month()&&29===e.date()?(n=Z(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),Te(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}var B,J=/\d/,Q=/\d\d/,X=/\d{3}/,K=/\d{4}/,ee=/[+-]?\d{6}/,te=/\d\d?/,ne=/\d\d\d\d?/,se=/\d\d\d\d\d\d?/,ie=/\d{1,3}/,re=/\d{1,4}/,ae=/[+-]?\d{1,6}/,oe=/\d+/,ue=/[+-]?\d+/,le=/Z|[+-]\d\d:?\d\d/gi,he=/Z|[+-]\d\d(?::?\d\d)?/gi,de=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;function ce(e,t,n){B[e]=O(t)?t:function(e,s){return e&&n?n:t}}function fe(e,t){return r(B,e)?B[e](t._strict,t._locale):new RegExp(me(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i})))}function me(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}B={};var _e={};function ye(e,t){var n,s=t;for("string"==typeof e&&(e=[e]),u(t)&&(s=function(e,n){n[t]=Z(e)}),n=0;n<e.length;n++)_e[e[n]]=s}function ge(e,t){ye(e,function(e,n,s,i){s._w=s._w||{},t(e,s._w,s,i)})}function we(e,t,n){null!=t&&r(_e,e)&&_e[e](t,n._a,n,e)}var pe,ve=0,ke=1,Me=2,De=3,Se=4,Ye=5,Oe=6,be=7,xe=8;function Te(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,s=(t%(n=12)+n)%n;return e+=(t-s)/12,1===s?j(e)?29:28:31-s%7%2}pe=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},C("M",["MM",2],"Mo",function(){return this.month()+1}),C("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),C("MMMM",0,0,function(e){return this.localeData().months(this,e)}),L("month","M"),A("month",8),ce("M",te),ce("MM",te,Q),ce("MMM",function(e,t){return t.monthsShortRegex(e)}),ce("MMMM",function(e,t){return t.monthsRegex(e)}),ye(["M","MM"],function(e,t){t[ke]=Z(e)-1}),ye(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict);null!=i?t[ke]=i:f(n).invalidMonth=e});var Ne="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Pe="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),Re=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,We=de,Ce=de;function Ue(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=Z(t);else if(!u(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),Te(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function He(e){return null!=e?(Ue(this,e),n.updateOffset(this,!0),this):$(this,"Month")}function Fe(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[];for(t=0;t<12;t++)n=c([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""));for(s.sort(e),i.sort(e),r.sort(e),t=0;t<12;t++)s[t]=me(s[t]),i[t]=me(i[t]);for(t=0;t<24;t++)r[t]=me(r[t]);this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function Le(e){return j(e)?366:365}C("Y",0,0,function(){var e=this.year();return e<=9999?T(e,4):"+"+e}),C(0,["YY",2],0,function(){return this.year()%100}),C(0,["YYYY",4],0,"year"),C(0,["YYYYY",5],0,"year"),C(0,["YYYYYY",6,!0],0,"year"),L("year","y"),A("year",1),ce("Y",ue),ce("YY",te,Q),ce("YYYY",re,K),ce("YYYYY",ae,ee),ce("YYYYYY",ae,ee),ye(["YYYYY","YYYYYY"],ve),ye("YYYY",function(e,t){t[ve]=2===e.length?n.parseTwoDigitYear(e):Z(e)}),ye("YY",function(e,t){t[ve]=n.parseTwoDigitYear(e)}),ye("Y",function(e,t){t[ve]=parseInt(e,10)}),n.parseTwoDigitYear=function(e){return Z(e)+(Z(e)>68?1900:2e3)};var Ve=z("FullYear",!0);function Ge(e){var t,n;return e<100&&e>=0?((n=Array.prototype.slice.call(arguments))[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function Ee(e,t,n){var s=7+t-n;return-((7+Ge(e,0,s).getUTCDay()-t)%7)+s-1}function Ae(e,t,n,s,i){var r,a,o=1+7*(t-1)+(7+n-s)%7+Ee(e,s,i);return o<=0?a=Le(r=e-1)+o:o>Le(e)?(r=e+1,a=o-Le(e)):(r=e,a=o),{year:r,dayOfYear:a}}function je(e,t,n){var s,i,r=Ee(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1;return a<1?s=a+Ie(i=e.year()-1,t,n):a>Ie(e.year(),t,n)?(s=a-Ie(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function Ie(e,t,n){var s=Ee(e,t,n),i=Ee(e+1,t,n);return(Le(e)-s+i)/7}C("w",["ww",2],"wo","week"),C("W",["WW",2],"Wo","isoWeek"),L("week","w"),L("isoWeek","W"),A("week",5),A("isoWeek",5),ce("w",te),ce("ww",te,Q),ce("W",te),ce("WW",te,Q),ge(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=Z(e)});function Ze(e,t){return e.slice(t,7).concat(e.slice(0,t))}C("d",0,"do","day"),C("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),C("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),C("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),C("e",0,0,"weekday"),C("E",0,0,"isoWeekday"),L("day","d"),L("weekday","e"),L("isoWeekday","E"),A("day",11),A("weekday",11),A("isoWeekday",11),ce("d",te),ce("e",te),ce("E",te),ce("dd",function(e,t){return t.weekdaysMinRegex(e)}),ce("ddd",function(e,t){return t.weekdaysShortRegex(e)}),ce("dddd",function(e,t){return t.weekdaysRegex(e)}),ge(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict);null!=i?t.d=i:f(n).invalidWeekday=e}),ge(["d","e","E"],function(e,t,n,s){t[s]=Z(e)});var ze="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),$e="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),qe="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Be=de,Je=de,Qe=de;function Xe(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=c([2e3,1]).day(t),s=me(this.weekdaysMin(n,"")),i=me(this.weekdaysShort(n,"")),r=me(this.weekdays(n,"")),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r);a.sort(e),o.sort(e),u.sort(e),l.sort(e),this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Ke(){return this.hours()%12||12}function et(e,t){C(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function tt(e,t){return t._meridiemParse}C("H",["HH",2],0,"hour"),C("h",["hh",2],0,Ke),C("k",["kk",2],0,function(){return this.hours()||24}),C("hmm",0,0,function(){return""+Ke.apply(this)+T(this.minutes(),2)}),C("hmmss",0,0,function(){return""+Ke.apply(this)+T(this.minutes(),2)+T(this.seconds(),2)}),C("Hmm",0,0,function(){return""+this.hours()+T(this.minutes(),2)}),C("Hmmss",0,0,function(){return""+this.hours()+T(this.minutes(),2)+T(this.seconds(),2)}),et("a",!0),et("A",!1),L("hour","h"),A("hour",13),ce("a",tt),ce("A",tt),ce("H",te),ce("h",te),ce("k",te),ce("HH",te,Q),ce("hh",te,Q),ce("kk",te,Q),ce("hmm",ne),ce("hmmss",se),ce("Hmm",ne),ce("Hmmss",se),ye(["H","HH"],De),ye(["k","kk"],function(e,t,n){var s=Z(e);t[De]=24===s?0:s}),ye(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),ye(["h","hh"],function(e,t,n){t[De]=Z(e),f(n).bigHour=!0}),ye("hmm",function(e,t,n){var s=e.length-2;t[De]=Z(e.substr(0,s)),t[Se]=Z(e.substr(s)),f(n).bigHour=!0}),ye("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[De]=Z(e.substr(0,s)),t[Se]=Z(e.substr(s,2)),t[Ye]=Z(e.substr(i)),f(n).bigHour=!0}),ye("Hmm",function(e,t,n){var s=e.length-2;t[De]=Z(e.substr(0,s)),t[Se]=Z(e.substr(s))}),ye("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2;t[De]=Z(e.substr(0,s)),t[Se]=Z(e.substr(s,2)),t[Ye]=Z(e.substr(i))});var nt=z("Hours",!0);var st,it={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Ne,monthsShort:Pe,week:{dow:0,doy:6},weekdays:ze,weekdaysMin:qe,weekdaysShort:$e,meridiemParse:/[ap]\.?m?\.?/i},rt={},at={};function ot(e,t){var n,s=Math.min(e.length,t.length);for(n=0;n<s;n+=1)if(e[n]!==t[n])return n;return s}function ut(e){return e?e.toLowerCase().replace("_","-"):e}function lt(e){var t=null;if(void 0===rt[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=st._abbr,require("./locale/"+e),ht(t)}catch(t){rt[e]=null}return rt[e]}function ht(e,t){var n;return e&&((n=o(t)?ct(e):dt(e,t))?st=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),st._abbr}function dt(e,t){if(null!==t){var n,s=it;if(t.abbr=e,null!=rt[e])Y("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),s=rt[e]._config;else if(null!=t.parentLocale)if(null!=rt[t.parentLocale])s=rt[t.parentLocale]._config;else{if(null==(n=lt(t.parentLocale)))return at[t.parentLocale]||(at[t.parentLocale]=[]),at[t.parentLocale].push({name:e,config:t}),null;s=n._config}return rt[e]=new x(b(s,t)),at[e]&&at[e].forEach(function(e){dt(e.name,e.config)}),ht(e),rt[e]}return delete rt[e],null}function ct(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return st;if(!s(e)){if(t=lt(e))return t;e=[e]}return function(e){for(var t,n,s,i,r=0;r<e.length;){for(t=(i=ut(e[r]).split("-")).length,n=(n=ut(e[r+1]))?n.split("-"):null;t>0;){if(s=lt(i.slice(0,t).join("-")))return s;if(n&&n.length>=t&&ot(i,n)>=t-1)break;t--}r++}return st}(e)}function ft(e){var t,n=e._a;return n&&-2===f(e).overflow&&(t=n[ke]<0||n[ke]>11?ke:n[Me]<1||n[Me]>Te(n[ve],n[ke])?Me:n[De]<0||n[De]>24||24===n[De]&&(0!==n[Se]||0!==n[Ye]||0!==n[Oe])?De:n[Se]<0||n[Se]>59?Se:n[Ye]<0||n[Ye]>59?Ye:n[Oe]<0||n[Oe]>999?Oe:-1,f(e)._overflowDayOfYear&&(t<ve||t>Me)&&(t=Me),f(e)._overflowWeeks&&-1===t&&(t=be),f(e)._overflowWeekday&&-1===t&&(t=xe),f(e).overflow=t),e}var mt=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,_t=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,yt=/Z|[+-]\d\d(?::?\d\d)?/,gt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],wt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],pt=/^\/?Date\((-?\d+)/i,vt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,kt={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Mt(e){var t,n,s,i,r,a,o=e._i,u=mt.exec(o)||_t.exec(o);if(u){for(f(e).iso=!0,t=0,n=gt.length;t<n;t++)if(gt[t][1].exec(u[1])){i=gt[t][0],s=!1!==gt[t][2];break}if(null==i)return void(e._isValid=!1);if(u[3]){for(t=0,n=wt.length;t<n;t++)if(wt[t][1].exec(u[3])){r=(u[2]||" ")+wt[t][0];break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1);if(u[4]){if(!yt.exec(u[4]))return void(e._isValid=!1);a="Z"}e._f=i+(r||"")+(a||""),bt(e)}else e._isValid=!1}function Dt(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function St(e){var t,n,s,i,r,a,o,u,l=vt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(l){if(n=l[4],s=l[3],i=l[2],r=l[5],a=l[6],o=l[7],u=[Dt(n),Pe.indexOf(s),parseInt(i,10),parseInt(r,10),parseInt(a,10)],o&&u.push(parseInt(o,10)),t=u,!function(e,t,n){return!e||$e.indexOf(e)===new Date(t[0],t[1],t[2]).getDay()||(f(n).weekdayMismatch=!0,n._isValid=!1,!1)}(l[1],t,e))return;e._a=t,e._tzm=function(e,t,n){if(e)return kt[e];if(t)return 0;var s=parseInt(n,10),i=s%100;return(s-i)/100*60+i}(l[8],l[9],l[10]),e._d=Ge.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),f(e).rfc2822=!0}else e._isValid=!1}function Yt(e,t,n){return null!=e?e:null!=t?t:n}function Ot(e){var t,s,i,r,a,o=[];if(!e._d){for(i=function(e){var t=new Date(n.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}(e),e._w&&null==e._a[Me]&&null==e._a[ke]&&function(e){var t,n,s,i,r,a,o,u,l;null!=(t=e._w).GG||null!=t.W||null!=t.E?(r=1,a=4,n=Yt(t.GG,e._a[ve],je(Nt(),1,4).year),s=Yt(t.W,1),((i=Yt(t.E,1))<1||i>7)&&(u=!0)):(r=e._locale._week.dow,a=e._locale._week.doy,l=je(Nt(),r,a),n=Yt(t.gg,e._a[ve],l.year),s=Yt(t.w,l.week),null!=t.d?((i=t.d)<0||i>6)&&(u=!0):null!=t.e?(i=t.e+r,(t.e<0||t.e>6)&&(u=!0)):i=r);s<1||s>Ie(n,r,a)?f(e)._overflowWeeks=!0:null!=u?f(e)._overflowWeekday=!0:(o=Ae(n,s,i,r,a),e._a[ve]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(a=Yt(e._a[ve],i[ve]),(e._dayOfYear>Le(a)||0===e._dayOfYear)&&(f(e)._overflowDayOfYear=!0),s=Ge(a,0,e._dayOfYear),e._a[ke]=s.getUTCMonth(),e._a[Me]=s.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=o[t]=i[t];for(;t<7;t++)e._a[t]=o[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[De]&&0===e._a[Se]&&0===e._a[Ye]&&0===e._a[Oe]&&(e._nextDay=!0,e._a[De]=0),e._d=(e._useUTC?Ge:function(e,t,n,s,i,r,a){var o;return e<100&&e>=0?(o=new Date(e+400,t,n,s,i,r,a),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,s,i,r,a),o}).apply(null,o),r=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[De]=24),e._w&&void 0!==e._w.d&&e._w.d!==r&&(f(e).weekdayMismatch=!0)}}function bt(e){if(e._f!==n.ISO_8601)if(e._f!==n.RFC_2822){e._a=[],f(e).empty=!0;var t,s,i,r,a,o,u=""+e._i,l=u.length,h=0;for(i=H(e._f,e._locale).match(N)||[],t=0;t<i.length;t++)r=i[t],(s=(u.match(fe(r,e))||[])[0])&&((a=u.substr(0,u.indexOf(s))).length>0&&f(e).unusedInput.push(a),u=u.slice(u.indexOf(s)+s.length),h+=s.length),W[r]?(s?f(e).empty=!1:f(e).unusedTokens.push(r),we(r,s,e)):e._strict&&!s&&f(e).unusedTokens.push(r);f(e).charsLeftOver=l-h,u.length>0&&f(e).unusedInput.push(u),e._a[De]<=12&&!0===f(e).bigHour&&e._a[De]>0&&(f(e).bigHour=void 0),f(e).parsedDateParts=e._a.slice(0),f(e).meridiem=e._meridiem,e._a[De]=function(e,t,n){var s;if(null==n)return t;return null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?((s=e.isPM(n))&&t<12&&(t+=12),s||12!==t||(t=0),t):t}(e._locale,e._a[De],e._meridiem),null!==(o=f(e).era)&&(e._a[ve]=e._locale.erasConvertYear(o,e._a[ve])),Ot(e),ft(e)}else St(e);else Mt(e)}function xt(e){var t=e._i,r=e._f;return e._locale=e._locale||ct(e._l),null===t||void 0===r&&""===t?_({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),v(t)?new p(ft(t)):(l(t)?e._d=t:s(r)?function(e){var t,n,s,i,r,a,o=!1;if(0===e._f.length)return f(e).invalidFormat=!0,void(e._d=new Date(NaN));for(i=0;i<e._f.length;i++)r=0,a=!1,t=w({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],bt(t),m(t)&&(a=!0),r+=f(t).charsLeftOver,r+=10*f(t).unusedTokens.length,f(t).score=r,o?r<s&&(s=r,n=t):(null==s||r<s||a)&&(s=r,n=t,a&&(o=!0));d(e,n||t)}(e):r?bt(e):function(e){var t=e._i;o(t)?e._d=new Date(n.now()):l(t)?e._d=new Date(t.valueOf()):"string"==typeof t?function(e){var t=pt.exec(e._i);null===t?(Mt(e),!1===e._isValid&&(delete e._isValid,St(e),!1===e._isValid&&(delete e._isValid,e._strict?e._isValid=!1:n.createFromInputFallback(e)))):e._d=new Date(+t[1])}(e):s(t)?(e._a=h(t.slice(0),function(e){return parseInt(e,10)}),Ot(e)):i(t)?function(e){if(!e._d){var t=G(e._i),n=void 0===t.day?t.date:t.day;e._a=h([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),Ot(e)}}(e):u(t)?e._d=new Date(t):n.createFromInputFallback(e)}(e),m(e)||(e._d=null),e))}function Tt(e,t,n,r,o){var u,l={};return!0!==t&&!1!==t||(r=t,t=void 0),!0!==n&&!1!==n||(r=n,n=void 0),(i(e)&&a(e)||s(e)&&0===e.length)&&(e=void 0),l._isAMomentObject=!0,l._useUTC=l._isUTC=o,l._l=n,l._i=e,l._f=t,l._strict=r,(u=new p(ft(xt(l))))._nextDay&&(u.add(1,"d"),u._nextDay=void 0),u}function Nt(e,t,n,s){return Tt(e,t,n,s,!1)}n.createFromInputFallback=M("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),n.ISO_8601=function(){},n.RFC_2822=function(){};var Pt=M("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Nt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:_()}),Rt=M("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=Nt.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:_()});function Wt(e,t){var n,i;if(1===t.length&&s(t[0])&&(t=t[0]),!t.length)return Nt();for(n=t[0],i=1;i<t.length;++i)t[i].isValid()&&!t[i][e](n)||(n=t[i]);return n}var Ct=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ut(e){var t=G(e),n=t.year||0,s=t.quarter||0,i=t.month||0,a=t.week||t.isoWeek||0,o=t.day||0,u=t.hour||0,l=t.minute||0,h=t.second||0,d=t.millisecond||0;this._isValid=function(e){var t,n,s=!1;for(t in e)if(r(e,t)&&(-1===pe.call(Ct,t)||null!=e[t]&&isNaN(e[t])))return!1;for(n=0;n<Ct.length;++n)if(e[Ct[n]]){if(s)return!1;parseFloat(e[Ct[n]])!==Z(e[Ct[n]])&&(s=!0)}return!0}(t),this._milliseconds=+d+1e3*h+6e4*l+1e3*u*60*60,this._days=+o+7*a,this._months=+i+3*s+12*n,this._data={},this._locale=ct(),this._bubble()}function Ht(e){return e instanceof Ut}function Ft(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Lt(e,t){C(e,0,0,function(){var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+T(~~(e/60),2)+t+T(~~e%60,2)})}Lt("Z",":"),Lt("ZZ",""),ce("Z",he),ce("ZZ",he),ye(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Gt(he,e)});var Vt=/([\+\-]|\d\d)/gi;function Gt(e,t){var n,s,i=(t||"").match(e);return null===i?null:0===(s=60*(n=((i[i.length-1]||[])+"").match(Vt)||["-",0,0])[1]+Z(n[2]))?0:"+"===n[0]?s:-s}function Et(e,t){var s,i;return t._isUTC?(s=t.clone(),i=(v(e)||l(e)?e.valueOf():Nt(e).valueOf())-s.valueOf(),s._d.setTime(s._d.valueOf()+i),n.updateOffset(s,!1),s):Nt(e).local()}function At(e){return-Math.round(e._d.getTimezoneOffset())}function jt(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}n.updateOffset=function(){};var It=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Zt=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function zt(e,t){var n,s,i,a=e,o=null;return Ht(e)?a={ms:e._milliseconds,d:e._days,M:e._months}:u(e)||!isNaN(+e)?(a={},t?a[t]=+e:a.milliseconds=+e):(o=It.exec(e))?(n="-"===o[1]?-1:1,a={y:0,d:Z(o[Me])*n,h:Z(o[De])*n,m:Z(o[Se])*n,s:Z(o[Ye])*n,ms:Z(Ft(1e3*o[Oe]))*n}):(o=Zt.exec(e))?(n="-"===o[1]?-1:1,a={y:$t(o[2],n),M:$t(o[3],n),w:$t(o[4],n),d:$t(o[5],n),h:$t(o[6],n),m:$t(o[7],n),s:$t(o[8],n)}):null==a?a={}:"object"==typeof a&&("from"in a||"to"in a)&&(i=function(e,t){var n;if(!e.isValid()||!t.isValid())return{milliseconds:0,months:0};t=Et(t,e),e.isBefore(t)?n=qt(e,t):((n=qt(t,e)).milliseconds=-n.milliseconds,n.months=-n.months);return n}(Nt(a.from),Nt(a.to)),(a={}).ms=i.milliseconds,a.M=i.months),s=new Ut(a),Ht(e)&&r(e,"_locale")&&(s._locale=e._locale),Ht(e)&&r(e,"_isValid")&&(s._isValid=e._isValid),s}function $t(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function qt(e,t){var n={};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function Bt(e,t){return function(n,s){var i;return null===s||isNaN(+s)||(Y(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=n,n=s,s=i),Jt(this,zt(n,s),e),this}}function Jt(e,t,s,i){var r=t._milliseconds,a=Ft(t._days),o=Ft(t._months);e.isValid()&&(i=null==i||i,o&&Ue(e,$(e,"Month")+o*s),a&&q(e,"Date",$(e,"Date")+a*s),r&&e._d.setTime(e._d.valueOf()+r*s),i&&n.updateOffset(e,a||o))}zt.fn=Ut.prototype,zt.invalid=function(){return zt(NaN)};var Qt=Bt(1,"add"),Xt=Bt(-1,"subtract");function Kt(e){return"string"==typeof e||e instanceof String}function en(e){return v(e)||l(e)||Kt(e)||u(e)||function(e){var t=s(e),n=!1;t&&(n=0===e.filter(function(t){return!u(t)&&Kt(e)}).length);return t&&n}(e)||function(e){var t,n,s=i(e)&&!a(e),o=!1,u=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"];for(t=0;t<u.length;t+=1)n=u[t],o=o||r(e,n);return s&&o}(e)||null==e}function tn(e,t){if(e.date()<t.date())return-tn(t,e);var n=12*(t.year()-e.year())+(t.month()-e.month()),s=e.clone().add(n,"months");return-(n+(t-s<0?(t-s)/(s-e.clone().add(n-1,"months")):(t-s)/(e.clone().add(n+1,"months")-s)))||0}function nn(e){var t;return void 0===e?this._locale._abbr:(null!=(t=ct(e))&&(this._locale=t),this)}n.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",n.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var sn=M("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function rn(){return this._locale}var an=1e3,on=60*an,un=60*on,ln=3506328*un;function hn(e,t){return(e%t+t)%t}function dn(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-ln:new Date(e,t,n).valueOf()}function cn(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-ln:Date.UTC(e,t,n)}function fn(e,t){return t.erasAbbrRegex(e)}function mn(){var e,t,n=[],s=[],i=[],r=[],a=this.eras();for(e=0,t=a.length;e<t;++e)s.push(me(a[e].name)),n.push(me(a[e].abbr)),i.push(me(a[e].narrow)),r.push(me(a[e].name)),r.push(me(a[e].abbr)),r.push(me(a[e].narrow));this._erasRegex=new RegExp("^("+r.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+s.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+n.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+i.join("|")+")","i")}function _n(e,t){C(0,[e,e.length],0,t)}function yn(e,t,n,s,i){var r;return null==e?je(this,s,i).year:(t>(r=Ie(e,s,i))&&(t=r),function(e,t,n,s,i){var r=Ae(e,t,n,s,i),a=Ge(r.year,0,r.dayOfYear);return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}.call(this,e,t,n,s,i))}C("N",0,0,"eraAbbr"),C("NN",0,0,"eraAbbr"),C("NNN",0,0,"eraAbbr"),C("NNNN",0,0,"eraName"),C("NNNNN",0,0,"eraNarrow"),C("y",["y",1],"yo","eraYear"),C("y",["yy",2],0,"eraYear"),C("y",["yyy",3],0,"eraYear"),C("y",["yyyy",4],0,"eraYear"),ce("N",fn),ce("NN",fn),ce("NNN",fn),ce("NNNN",function(e,t){return t.erasNameRegex(e)}),ce("NNNNN",function(e,t){return t.erasNarrowRegex(e)}),ye(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,s){var i=n._locale.erasParse(e,s,n._strict);i?f(n).era=i:f(n).invalidEra=e}),ce("y",oe),ce("yy",oe),ce("yyy",oe),ce("yyyy",oe),ce("yo",function(e,t){return t._eraYearOrdinalRegex||oe}),ye(["y","yy","yyy","yyyy"],ve),ye(["yo"],function(e,t,n,s){var i;n._locale._eraYearOrdinalRegex&&(i=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[ve]=n._locale.eraYearOrdinalParse(e,i):t[ve]=parseInt(e,10)}),C(0,["gg",2],0,function(){return this.weekYear()%100}),C(0,["GG",2],0,function(){return this.isoWeekYear()%100}),_n("gggg","weekYear"),_n("ggggg","weekYear"),_n("GGGG","isoWeekYear"),_n("GGGGG","isoWeekYear"),L("weekYear","gg"),L("isoWeekYear","GG"),A("weekYear",1),A("isoWeekYear",1),ce("G",ue),ce("g",ue),ce("GG",te,Q),ce("gg",te,Q),ce("GGGG",re,K),ce("gggg",re,K),ce("GGGGG",ae,ee),ce("ggggg",ae,ee),ge(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=Z(e)}),ge(["gg","GG"],function(e,t,s,i){t[i]=n.parseTwoDigitYear(e)}),C("Q",0,"Qo","quarter"),L("quarter","Q"),A("quarter",7),ce("Q",J),ye("Q",function(e,t){t[ke]=3*(Z(e)-1)}),C("D",["DD",2],"Do","date"),L("date","D"),A("date",9),ce("D",te),ce("DD",te,Q),ce("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),ye(["D","DD"],Me),ye("Do",function(e,t){t[Me]=Z(e.match(te)[0])});var gn=z("Date",!0);C("DDD",["DDDD",3],"DDDo","dayOfYear"),L("dayOfYear","DDD"),A("dayOfYear",4),ce("DDD",ie),ce("DDDD",X),ye(["DDD","DDDD"],function(e,t,n){n._dayOfYear=Z(e)}),C("m",["mm",2],0,"minute"),L("minute","m"),A("minute",14),ce("m",te),ce("mm",te,Q),ye(["m","mm"],Se);var wn=z("Minutes",!1);C("s",["ss",2],0,"second"),L("second","s"),A("second",15),ce("s",te),ce("ss",te,Q),ye(["s","ss"],Ye);var pn,vn,kn=z("Seconds",!1);for(C("S",0,0,function(){return~~(this.millisecond()/100)}),C(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),C(0,["SSS",3],0,"millisecond"),C(0,["SSSS",4],0,function(){return 10*this.millisecond()}),C(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),C(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),C(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),C(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),C(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),L("millisecond","ms"),A("millisecond",16),ce("S",ie,J),ce("SS",ie,Q),ce("SSS",ie,X),pn="SSSS";pn.length<=9;pn+="S")ce(pn,oe);function Mn(e,t){t[Oe]=Z(1e3*("0."+e))}for(pn="S";pn.length<=9;pn+="S")ye(pn,Mn);vn=z("Milliseconds",!1),C("z",0,0,"zoneAbbr"),C("zz",0,0,"zoneName");var Dn=p.prototype;function Sn(e){return e}Dn.add=Qt,Dn.calendar=function(e,t){1===arguments.length&&(en(arguments[0])?(e=arguments[0],t=void 0):function(e){var t,n=i(e)&&!a(e),s=!1,o=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"];for(t=0;t<o.length;t+=1)s=s||r(e,o[t]);return n&&s}(arguments[0])&&(t=arguments[0],e=void 0));var s=e||Nt(),o=Et(s,this).startOf("day"),u=n.calendarFormat(this,o)||"sameElse",l=t&&(O(t[u])?t[u].call(this,s):t[u]);return this.format(l||this.localeData().calendar(u,this,Nt(s)))},Dn.clone=function(){return new p(this)},Dn.diff=function(e,t,n){var s,i,r;if(!this.isValid())return NaN;if(!(s=Et(e,this)).isValid())return NaN;switch(i=6e4*(s.utcOffset()-this.utcOffset()),t=V(t)){case"year":r=tn(this,s)/12;break;case"month":r=tn(this,s);break;case"quarter":r=tn(this,s)/3;break;case"second":r=(this-s)/1e3;break;case"minute":r=(this-s)/6e4;break;case"hour":r=(this-s)/36e5;break;case"day":r=(this-s-i)/864e5;break;case"week":r=(this-s-i)/6048e5;break;default:r=this-s}return n?r:I(r)},Dn.endOf=function(e){var t,s;if(void 0===(e=V(e))||"millisecond"===e||!this.isValid())return this;switch(s=this._isUTC?cn:dn,e){case"year":t=s(this.year()+1,0,1)-1;break;case"quarter":t=s(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=s(this.year(),this.month()+1,1)-1;break;case"week":t=s(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=s(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=s(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=un-hn(t+(this._isUTC?0:this.utcOffset()*on),un)-1;break;case"minute":t=this._d.valueOf(),t+=on-hn(t,on)-1;break;case"second":t=this._d.valueOf(),t+=an-hn(t,an)-1}return this._d.setTime(t),n.updateOffset(this,!0),this},Dn.format=function(e){e||(e=this.isUtc()?n.defaultFormatUtc:n.defaultFormat);var t=U(this,e);return this.localeData().postformat(t)},Dn.from=function(e,t){return this.isValid()&&(v(e)&&e.isValid()||Nt(e).isValid())?zt({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},Dn.fromNow=function(e){return this.from(Nt(),e)},Dn.to=function(e,t){return this.isValid()&&(v(e)&&e.isValid()||Nt(e).isValid())?zt({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},Dn.toNow=function(e){return this.to(Nt(),e)},Dn.get=function(e){return O(this[e=V(e)])?this[e]():this},Dn.invalidAt=function(){return f(this).overflow},Dn.isAfter=function(e,t){var n=v(e)?e:Nt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=V(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},Dn.isBefore=function(e,t){var n=v(e)?e:Nt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=V(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},Dn.isBetween=function(e,t,n,s){var i=v(e)?e:Nt(e),r=v(t)?t:Nt(t);return!!(this.isValid()&&i.isValid()&&r.isValid())&&("("===(s=s||"()")[0]?this.isAfter(i,n):!this.isBefore(i,n))&&(")"===s[1]?this.isBefore(r,n):!this.isAfter(r,n))},Dn.isSame=function(e,t){var n,s=v(e)?e:Nt(e);return!(!this.isValid()||!s.isValid())&&("millisecond"===(t=V(t)||"millisecond")?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},Dn.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},Dn.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},Dn.isValid=function(){return m(this)},Dn.lang=sn,Dn.locale=nn,Dn.localeData=rn,Dn.max=Rt,Dn.min=Pt,Dn.parsingFlags=function(){return d({},f(this))},Dn.set=function(e,t){if("object"==typeof e){var n,s=function(e){var t,n=[];for(t in e)r(e,t)&&n.push({unit:t,priority:E[t]});return n.sort(function(e,t){return e.priority-t.priority}),n}(e=G(e));for(n=0;n<s.length;n++)this[s[n].unit](e[s[n].unit])}else if(O(this[e=V(e)]))return this[e](t);return this},Dn.startOf=function(e){var t,s;if(void 0===(e=V(e))||"millisecond"===e||!this.isValid())return this;switch(s=this._isUTC?cn:dn,e){case"year":t=s(this.year(),0,1);break;case"quarter":t=s(this.year(),this.month()-this.month()%3,1);break;case"month":t=s(this.year(),this.month(),1);break;case"week":t=s(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=s(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=s(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=hn(t+(this._isUTC?0:this.utcOffset()*on),un);break;case"minute":t=this._d.valueOf(),t-=hn(t,on);break;case"second":t=this._d.valueOf(),t-=hn(t,an)}return this._d.setTime(t),n.updateOffset(this,!0),this},Dn.subtract=Xt,Dn.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},Dn.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},Dn.toDate=function(){return new Date(this.valueOf())},Dn.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?U(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):O(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",U(n,"Z")):U(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},Dn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e,t,n,s="moment",i="";return this.isLocal()||(s=0===this.utcOffset()?"moment.utc":"moment.parseZone",i="Z"),e="["+s+'("]',t=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",n=i+'[")]',this.format(e+t+"-MM-DD[T]HH:mm:ss.SSS"+n)},"undefined"!=typeof Symbol&&null!=Symbol.for&&(Dn[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"}),Dn.toJSON=function(){return this.isValid()?this.toISOString():null},Dn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},Dn.unix=function(){return Math.floor(this.valueOf()/1e3)},Dn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},Dn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},Dn.eraName=function(){var e,t,n,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e){if(n=this.startOf("day").valueOf(),s[e].since<=n&&n<=s[e].until)return s[e].name;if(s[e].until<=n&&n<=s[e].since)return s[e].name}return""},Dn.eraNarrow=function(){var e,t,n,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e){if(n=this.startOf("day").valueOf(),s[e].since<=n&&n<=s[e].until)return s[e].narrow;if(s[e].until<=n&&n<=s[e].since)return s[e].narrow}return""},Dn.eraAbbr=function(){var e,t,n,s=this.localeData().eras();for(e=0,t=s.length;e<t;++e){if(n=this.startOf("day").valueOf(),s[e].since<=n&&n<=s[e].until)return s[e].abbr;if(s[e].until<=n&&n<=s[e].since)return s[e].abbr}return""},Dn.eraYear=function(){var e,t,s,i,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(s=r[e].since<=r[e].until?1:-1,i=this.startOf("day").valueOf(),r[e].since<=i&&i<=r[e].until||r[e].until<=i&&i<=r[e].since)return(this.year()-n(r[e].since).year())*s+r[e].offset;return this.year()},Dn.year=Ve,Dn.isLeapYear=function(){return j(this.year())},Dn.weekYear=function(e){return yn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},Dn.isoWeekYear=function(e){return yn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},Dn.quarter=Dn.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},Dn.month=He,Dn.daysInMonth=function(){return Te(this.year(),this.month())},Dn.week=Dn.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},Dn.isoWeek=Dn.isoWeeks=function(e){var t=je(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},Dn.weeksInYear=function(){var e=this.localeData()._week;return Ie(this.year(),e.dow,e.doy)},Dn.weeksInWeekYear=function(){var e=this.localeData()._week;return Ie(this.weekYear(),e.dow,e.doy)},Dn.isoWeeksInYear=function(){return Ie(this.year(),1,4)},Dn.isoWeeksInISOWeekYear=function(){return Ie(this.isoWeekYear(),1,4)},Dn.date=gn,Dn.day=Dn.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=function(e,t){return"string"!=typeof e?e:isNaN(e)?"number"==typeof(e=t.weekdaysParse(e))?e:null:parseInt(e,10)}(e,this.localeData()),this.add(e-t,"d")):t},Dn.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},Dn.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=function(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7},Dn.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},Dn.hour=Dn.hours=nt,Dn.minute=Dn.minutes=wn,Dn.second=Dn.seconds=kn,Dn.millisecond=Dn.milliseconds=vn,Dn.utcOffset=function(e,t,s){var i,r=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=Gt(he,e)))return this}else Math.abs(e)<16&&!s&&(e*=60);return!this._isUTC&&t&&(i=At(this)),this._offset=e,this._isUTC=!0,null!=i&&this.add(i,"m"),r!==e&&(!t||this._changeInProgress?Jt(this,zt(e-r,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,n.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?r:At(this)},Dn.utc=function(e){return this.utcOffset(0,e)},Dn.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(At(this),"m")),this},Dn.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=Gt(le,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},Dn.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?Nt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},Dn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},Dn.isLocal=function(){return!!this.isValid()&&!this._isUTC},Dn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},Dn.isUtc=jt,Dn.isUTC=jt,Dn.zoneAbbr=function(){return this._isUTC?"UTC":""},Dn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},Dn.dates=M("dates accessor is deprecated. Use date instead.",gn),Dn.months=M("months accessor is deprecated. Use month instead",He),Dn.years=M("years accessor is deprecated. Use year instead",Ve),Dn.zone=M("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),Dn.isDSTShifted=M("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!o(this._isDSTShifted))return this._isDSTShifted;var e,t={};return w(t,this),(t=xt(t))._a?(e=t._isUTC?c(t._a):Nt(t._a),this._isDSTShifted=this.isValid()&&function(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0;for(s=0;s<i;s++)(n&&e[s]!==t[s]||!n&&Z(e[s])!==Z(t[s]))&&a++;return a+r}(t._a,e.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted});var Yn=x.prototype;function On(e,t,n,s){var i=ct(),r=c().set(s,t);return i[n](r,e)}function bn(e,t,n){if(u(e)&&(t=e,e=void 0),e=e||"",null!=t)return On(e,t,n,"month");var s,i=[];for(s=0;s<12;s++)i[s]=On(e,s,n,"month");return i}function xn(e,t,n,s){"boolean"==typeof e?(u(t)&&(n=t,t=void 0),t=t||""):(n=t=e,e=!1,u(t)&&(n=t,t=void 0),t=t||"");var i,r=ct(),a=e?r._week.dow:0,o=[];if(null!=n)return On(t,(n+a)%7,s,"day");for(i=0;i<7;i++)o[i]=On(t,(i+a)%7,s,"day");return o}Yn.calendar=function(e,t,n){var s=this._calendar[e]||this._calendar.sameElse;return O(s)?s.call(t,n):s},Yn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(N).map(function(e){return"MMMM"===e||"MM"===e||"DD"===e||"dddd"===e?e.slice(1):e}).join(""),this._longDateFormat[e])},Yn.invalidDate=function(){return this._invalidDate},Yn.ordinal=function(e){return this._ordinal.replace("%d",e)},Yn.preparse=Sn,Yn.postformat=Sn,Yn.relativeTime=function(e,t,n,s){var i=this._relativeTime[n];return O(i)?i(e,t,n,s):i.replace(/%d/i,e)},Yn.pastFuture=function(e,t){var n=this._relativeTime[e>0?"future":"past"];return O(n)?n(t):n.replace(/%s/i,t)},Yn.set=function(e){var t,n;for(n in e)r(e,n)&&(O(t=e[n])?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},Yn.eras=function(e,t){var s,i,r,a=this._eras||ct("en")._eras;for(s=0,i=a.length;s<i;++s){switch(typeof a[s].since){case"string":r=n(a[s].since).startOf("day"),a[s].since=r.valueOf()}switch(typeof a[s].until){case"undefined":a[s].until=1/0;break;case"string":r=n(a[s].until).startOf("day").valueOf(),a[s].until=r.valueOf()}}return a},Yn.erasParse=function(e,t,n){var s,i,r,a,o,u=this.eras();for(e=e.toUpperCase(),s=0,i=u.length;s<i;++s)if(r=u[s].name.toUpperCase(),a=u[s].abbr.toUpperCase(),o=u[s].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(a===e)return u[s];break;case"NNNN":if(r===e)return u[s];break;case"NNNNN":if(o===e)return u[s]}else if([r,a,o].indexOf(e)>=0)return u[s]},Yn.erasConvertYear=function(e,t){var s=e.since<=e.until?1:-1;return void 0===t?n(e.since).year():n(e.since).year()+(t-e.offset)*s},Yn.erasAbbrRegex=function(e){return r(this,"_erasAbbrRegex")||mn.call(this),e?this._erasAbbrRegex:this._erasRegex},Yn.erasNameRegex=function(e){return r(this,"_erasNameRegex")||mn.call(this),e?this._erasNameRegex:this._erasRegex},Yn.erasNarrowRegex=function(e){return r(this,"_erasNarrowRegex")||mn.call(this),e?this._erasNarrowRegex:this._erasRegex},Yn.months=function(e,t){return e?s(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Re).test(t)?"format":"standalone"][e.month()]:s(this._months)?this._months:this._months.standalone},Yn.monthsShort=function(e,t){return e?s(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Re.test(t)?"format":"standalone"][e.month()]:s(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},Yn.monthsParse=function(e,t,n){var s,i,r;if(this._monthsParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0;s<12;++s)r=c([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(i=pe.call(this._shortMonthsParse,a))?i:null:-1!==(i=pe.call(this._longMonthsParse,a))?i:null:"MMM"===t?-1!==(i=pe.call(this._shortMonthsParse,a))?i:-1!==(i=pe.call(this._longMonthsParse,a))?i:null:-1!==(i=pe.call(this._longMonthsParse,a))?i:-1!==(i=pe.call(this._shortMonthsParse,a))?i:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0;s<12;s++){if(i=c([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s;if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s;if(!n&&this._monthsParse[s].test(e))return s}},Yn.monthsRegex=function(e){return this._monthsParseExact?(r(this,"_monthsRegex")||Fe.call(this),e?this._monthsStrictRegex:this._monthsRegex):(r(this,"_monthsRegex")||(this._monthsRegex=Ce),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},Yn.monthsShortRegex=function(e){return this._monthsParseExact?(r(this,"_monthsRegex")||Fe.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(r(this,"_monthsShortRegex")||(this._monthsShortRegex=We),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},Yn.week=function(e){return je(e,this._week.dow,this._week.doy).week},Yn.firstDayOfYear=function(){return this._week.doy},Yn.firstDayOfWeek=function(){return this._week.dow},Yn.weekdays=function(e,t){var n=s(this._weekdays)?this._weekdays:this._weekdays[e&&!0!==e&&this._weekdays.isFormat.test(t)?"format":"standalone"];return!0===e?Ze(n,this._week.dow):e?n[e.day()]:n},Yn.weekdaysMin=function(e){return!0===e?Ze(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin},Yn.weekdaysShort=function(e){return!0===e?Ze(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort},Yn.weekdaysParse=function(e,t,n){var s,i,r;if(this._weekdaysParseExact)return function(e,t,n){var s,i,r,a=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0;s<7;++s)r=c([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(i=pe.call(this._weekdaysParse,a))?i:null:"ddd"===t?-1!==(i=pe.call(this._shortWeekdaysParse,a))?i:null:-1!==(i=pe.call(this._minWeekdaysParse,a))?i:null:"dddd"===t?-1!==(i=pe.call(this._weekdaysParse,a))?i:-1!==(i=pe.call(this._shortWeekdaysParse,a))?i:-1!==(i=pe.call(this._minWeekdaysParse,a))?i:null:"ddd"===t?-1!==(i=pe.call(this._shortWeekdaysParse,a))?i:-1!==(i=pe.call(this._weekdaysParse,a))?i:-1!==(i=pe.call(this._minWeekdaysParse,a))?i:null:-1!==(i=pe.call(this._minWeekdaysParse,a))?i:-1!==(i=pe.call(this._weekdaysParse,a))?i:-1!==(i=pe.call(this._shortWeekdaysParse,a))?i:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0;s<7;s++){if(i=c([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s;if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s;if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s;if(!n&&this._weekdaysParse[s].test(e))return s}},Yn.weekdaysRegex=function(e){return this._weekdaysParseExact?(r(this,"_weekdaysRegex")||Xe.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(r(this,"_weekdaysRegex")||(this._weekdaysRegex=Be),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},Yn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(r(this,"_weekdaysRegex")||Xe.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(r(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Je),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},Yn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(r(this,"_weekdaysRegex")||Xe.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(r(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Qe),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},Yn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},Yn.meridiem=function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},ht("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10;return e+(1===Z(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th")}}),n.lang=M("moment.lang is deprecated. Use moment.locale instead.",ht),n.langData=M("moment.langData is deprecated. Use moment.localeData instead.",ct);var Tn=Math.abs;function Nn(e,t,n,s){var i=zt(t,n);return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function Pn(e){return e<0?Math.floor(e):Math.ceil(e)}function Rn(e){return 4800*e/146097}function Wn(e){return 146097*e/4800}function Cn(e){return function(){return this.as(e)}}var Un=Cn("ms"),Hn=Cn("s"),Fn=Cn("m"),Ln=Cn("h"),Vn=Cn("d"),Gn=Cn("w"),En=Cn("M"),An=Cn("Q"),jn=Cn("y");function In(e){return function(){return this.isValid()?this._data[e]:NaN}}var Zn=In("milliseconds"),zn=In("seconds"),$n=In("minutes"),qn=In("hours"),Bn=In("days"),Jn=In("months"),Qn=In("years");var Xn=Math.round,Kn={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};var es=Math.abs;function ts(e){return(e>0)-(e<0)||+e}function ns(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n,s,i,r,a,o,u=es(this._milliseconds)/1e3,l=es(this._days),h=es(this._months),d=this.asSeconds();return d?(e=I(u/60),t=I(e/60),u%=60,e%=60,n=I(h/12),h%=12,s=u?u.toFixed(3).replace(/\.?0+$/,""):"",i=d<0?"-":"",r=ts(this._months)!==ts(d)?"-":"",a=ts(this._days)!==ts(d)?"-":"",o=ts(this._milliseconds)!==ts(d)?"-":"",i+"P"+(n?r+n+"Y":"")+(h?r+h+"M":"")+(l?a+l+"D":"")+(t||e||u?"T":"")+(t?o+t+"H":"")+(e?o+e+"M":"")+(u?o+s+"S":"")):"P0D"}var ss=Ut.prototype;return ss.isValid=function(){return this._isValid},ss.abs=function(){var e=this._data;return this._milliseconds=Tn(this._milliseconds),this._days=Tn(this._days),this._months=Tn(this._months),e.milliseconds=Tn(e.milliseconds),e.seconds=Tn(e.seconds),e.minutes=Tn(e.minutes),e.hours=Tn(e.hours),e.months=Tn(e.months),e.years=Tn(e.years),this},ss.add=function(e,t){return Nn(this,e,t,1)},ss.subtract=function(e,t){return Nn(this,e,t,-1)},ss.as=function(e){if(!this.isValid())return NaN;var t,n,s=this._milliseconds;if("month"===(e=V(e))||"quarter"===e||"year"===e)switch(t=this._days+s/864e5,n=this._months+Rn(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Wn(this._months)),e){case"week":return t/7+s/6048e5;case"day":return t+s/864e5;case"hour":return 24*t+s/36e5;case"minute":return 1440*t+s/6e4;case"second":return 86400*t+s/1e3;case"millisecond":return Math.floor(864e5*t)+s;default:throw new Error("Unknown unit "+e)}},ss.asMilliseconds=Un,ss.asSeconds=Hn,ss.asMinutes=Fn,ss.asHours=Ln,ss.asDays=Vn,ss.asWeeks=Gn,ss.asMonths=En,ss.asQuarters=An,ss.asYears=jn,ss.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*Z(this._months/12):NaN},ss._bubble=function(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data;return r>=0&&a>=0&&o>=0||r<=0&&a<=0&&o<=0||(r+=864e5*Pn(Wn(o)+a),a=0,o=0),u.milliseconds=r%1e3,e=I(r/1e3),u.seconds=e%60,t=I(e/60),u.minutes=t%60,n=I(t/60),u.hours=n%24,a+=I(n/24),o+=i=I(Rn(a)),a-=Pn(Wn(i)),s=I(o/12),o%=12,u.days=a,u.months=o,u.years=s,this},ss.clone=function(){return zt(this)},ss.get=function(e){return e=V(e),this.isValid()?this[e+"s"]():NaN},ss.milliseconds=Zn,ss.seconds=zn,ss.minutes=$n,ss.hours=qn,ss.days=Bn,ss.weeks=function(){return I(this.days()/7)},ss.months=Jn,ss.years=Qn,ss.humanize=function(e,t){if(!this.isValid())return this.localeData().invalidDate();var n,s,i=!1,r=Kn;return"object"==typeof e&&(t=e,e=!1),"boolean"==typeof e&&(i=e),"object"==typeof t&&(r=Object.assign({},Kn,t),null!=t.s&&null==t.ss&&(r.ss=t.s-1)),s=function(e,t,n,s){var i=zt(e).abs(),r=Xn(i.as("s")),a=Xn(i.as("m")),o=Xn(i.as("h")),u=Xn(i.as("d")),l=Xn(i.as("M")),h=Xn(i.as("w")),d=Xn(i.as("y")),c=r<=n.ss&&["s",r]||r<n.s&&["ss",r]||a<=1&&["m"]||a<n.m&&["mm",a]||o<=1&&["h"]||o<n.h&&["hh",o]||u<=1&&["d"]||u<n.d&&["dd",u];return null!=n.w&&(c=c||h<=1&&["w"]||h<n.w&&["ww",h]),(c=c||l<=1&&["M"]||l<n.M&&["MM",l]||d<=1&&["y"]||["yy",d])[2]=t,c[3]=+e>0,c[4]=s,function(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}.apply(null,c)}(this,!i,r,n=this.localeData()),i&&(s=n.pastFuture(+this,s)),n.postformat(s)},ss.toISOString=ns,ss.toString=ns,ss.toJSON=ns,ss.locale=nn,ss.localeData=rn,ss.toIsoString=M("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ns),ss.lang=sn,C("X",0,0,"unix"),C("x",0,0,"valueOf"),ce("x",ue),ce("X",/[+-]?\d+(\.\d{1,3})?/),ye("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e))}),ye("x",function(e,t,n){n._d=new Date(Z(e))}),n.version="2.26.0",e=Nt,n.fn=Dn,n.min=function(){return Wt("isBefore",[].slice.call(arguments,0))},n.max=function(){return Wt("isAfter",[].slice.call(arguments,0))},n.now=function(){return Date.now?Date.now():+new Date},n.utc=c,n.unix=function(e){return Nt(1e3*e)},n.months=function(e,t){return bn(e,t,"months")},n.isDate=l,n.locale=ht,n.invalid=_,n.duration=zt,n.isMoment=v,n.weekdays=function(e,t,n){return xn(e,t,n,"weekdays")},n.parseZone=function(){return Nt.apply(null,arguments).parseZone()},n.localeData=ct,n.isDuration=Ht,n.monthsShort=function(e,t){return bn(e,t,"monthsShort")},n.weekdaysMin=function(e,t,n){return xn(e,t,n,"weekdaysMin")},n.defineLocale=dt,n.updateLocale=function(e,t){if(null!=t){var n,s,i=it;null!=rt[e]&&null!=rt[e].parentLocale?rt[e].set(b(rt[e]._config,t)):(null!=(s=lt(e))&&(i=s._config),t=b(i,t),null==s&&(t.abbr=e),(n=new x(t)).parentLocale=rt[e],rt[e]=n),ht(e)}else null!=rt[e]&&(null!=rt[e].parentLocale?(rt[e]=rt[e].parentLocale,e===ht()&&ht(e)):null!=rt[e]&&delete rt[e]);return rt[e]},n.locales=function(){return D(rt)},n.weekdaysShort=function(e,t,n){return xn(e,t,n,"weekdaysShort")},n.normalizeUnits=V,n.relativeTimeRounding=function(e){return void 0===e?Xn:"function"==typeof e&&(Xn=e,!0)},n.relativeTimeThreshold=function(e,t){return void 0!==Kn[e]&&(void 0===t?Kn[e]:(Kn[e]=t,"s"===e&&(Kn.ss=t-1),!0))},n.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},n.prototype=Dn,n.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},n});

/*
https://momentjs.com/downloads/moment-timezone-with-data.js
*/

!function(c,M){"use strict";"object"==typeof module&&module.exports?module.exports=M(require("moment")):"function"==typeof define&&define.amd?define(["moment"],M):M(c.moment)}(this,function(c){"use strict";void 0===c.version&&c.default&&(c=c.default);var M,A={},o={},z={},b={},a={};c&&"string"==typeof c.version||R("Moment Timezone requires Moment.js. See https://momentjs.com/timezone/docs/#/use-it/browser/");var p=c.version.split("."),n=+p[0],i=+p[1];function e(c){return c>96?c-87:c>64?c-29:c-48}function L(c){var M=0,A=c.split("."),o=A[0],z=A[1]||"",b=1,a=0,p=1;for(45===c.charCodeAt(0)&&(M=1,p=-1);M<o.length;M++)a=60*a+e(o.charCodeAt(M));for(M=0;M<z.length;M++)b/=60,a+=e(z.charCodeAt(M))*b;return a*p}function O(c){for(var M=0;M<c.length;M++)c[M]=L(c[M])}function q(c,M){var A,o=[];for(A=0;A<M.length;A++)o[A]=c[M[A]];return o}function r(c){var M=c.split("|"),A=M[2].split(" "),o=M[3].split(""),z=M[4].split(" ");return O(A),O(o),O(z),function(c,M){for(var A=0;A<M;A++)c[A]=Math.round((c[A-1]||0)+6e4*c[A]);c[M-1]=1/0}(z,o.length),{name:M[0],abbrs:q(M[1].split(" "),o),offsets:q(A,o),untils:z,population:0|M[5]}}function N(c){c&&this._set(r(c))}function d(c,M){this.name=c,this.zones=M}function W(c){var M=c.toTimeString(),A=M.match(/\([a-z ]+\)/i);"GMT"===(A=A&&A[0]?(A=A[0].match(/[A-Z]/g))?A.join(""):void 0:(A=M.match(/[A-Z]{3,5}/g))?A[0]:void 0)&&(A=void 0),this.at=+c,this.abbr=A,this.offset=c.getTimezoneOffset()}function f(c){this.zone=c,this.offsetScore=0,this.abbrScore=0}function X(c,M){for(var A,o;o=6e4*((M.at-c.at)/12e4|0);)(A=new W(new Date(c.at+o))).offset===c.offset?c=A:M=A;return c}function B(c,M){return c.offsetScore!==M.offsetScore?c.offsetScore-M.offsetScore:c.abbrScore!==M.abbrScore?c.abbrScore-M.abbrScore:c.zone.population!==M.zone.population?M.zone.population-c.zone.population:M.zone.name.localeCompare(c.zone.name)}function u(c,M){var A,o;for(O(M),A=0;A<M.length;A++)o=M[A],a[o]=a[o]||{},a[o][c]=!0}function l(c){var M,A,o,z=c.length,p={},n=[];for(M=0;M<z;M++)for(A in o=a[c[M].offset]||{})o.hasOwnProperty(A)&&(p[A]=!0);for(M in p)p.hasOwnProperty(M)&&n.push(b[M]);return n}function T(){try{var c=Intl.DateTimeFormat().resolvedOptions().timeZone;if(c&&c.length>3){var M=b[t(c)];if(M)return M;R("Moment Timezone found "+c+" from the Intl api, but did not have that data loaded.")}}catch(c){}var A,o,z,a=function(){var c,M,A,o=(new Date).getFullYear()-2,z=new W(new Date(o,0,1)),b=[z];for(A=1;A<48;A++)(M=new W(new Date(o,A,1))).offset!==z.offset&&(c=X(z,M),b.push(c),b.push(new W(new Date(c.at+6e4)))),z=M;for(A=0;A<4;A++)b.push(new W(new Date(o+A,0,1))),b.push(new W(new Date(o+A,6,1)));return b}(),p=a.length,n=l(a),i=[];for(o=0;o<n.length;o++){for(A=new f(E(n[o]),p),z=0;z<p;z++)A.scoreOffsetAt(a[z]);i.push(A)}return i.sort(B),i.length>0?i[0].zone.name:void 0}function t(c){return(c||"").toLowerCase().replace(/\//g,"_")}function s(c){var M,o,z,a;for("string"==typeof c&&(c=[c]),M=0;M<c.length;M++)a=t(o=(z=c[M].split("|"))[0]),A[a]=c[M],b[a]=o,u(a,z[2].split(" "))}function E(c,M){c=t(c);var z,a=A[c];return a instanceof N?a:"string"==typeof a?(a=new N(a),A[c]=a,a):o[c]&&M!==E&&(z=E(o[c],E))?((a=A[c]=new N)._set(z),a.name=b[c],a):null}function m(c){var M,A,z,a;for("string"==typeof c&&(c=[c]),M=0;M<c.length;M++)z=t((A=c[M].split("|"))[0]),a=t(A[1]),o[z]=a,b[z]=A[0],o[a]=z,b[a]=A[1]}function C(c){s(c.zones),m(c.links),function(c){var M,A,o,b;if(c&&c.length)for(M=0;M<c.length;M++)A=(b=c[M].split("|"))[0].toUpperCase(),o=b[1].split(" "),z[A]=new d(A,o)}(c.countries),g.dataVersion=c.version}function S(c){var M="X"===c._f||"x"===c._f;return!(!c._a||void 0!==c._tzm||M)}function R(c){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(c)}function g(M){var A=Array.prototype.slice.call(arguments,0,-1),o=arguments[arguments.length-1],z=E(o),b=c.utc.apply(null,A);return z&&!c.isMoment(M)&&S(b)&&b.add(z.parse(b),"minutes"),b.tz(o),b}(n<2||2===n&&i<6)&&R("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js "+c.version+". See momentjs.com"),N.prototype={_set:function(c){this.name=c.name,this.abbrs=c.abbrs,this.untils=c.untils,this.offsets=c.offsets,this.population=c.population},_index:function(c){var M,A=+c,o=this.untils;for(M=0;M<o.length;M++)if(A<o[M])return M},countries:function(){var c=this.name;return Object.keys(z).filter(function(M){return-1!==z[M].zones.indexOf(c)})},parse:function(c){var M,A,o,z,b=+c,a=this.offsets,p=this.untils,n=p.length-1;for(z=0;z<n;z++)if(M=a[z],A=a[z+1],o=a[z?z-1:z],M<A&&g.moveAmbiguousForward?M=A:M>o&&g.moveInvalidForward&&(M=o),b<p[z]-6e4*M)return a[z];return a[n]},abbr:function(c){return this.abbrs[this._index(c)]},offset:function(c){return R("zone.offset has been deprecated in favor of zone.utcOffset"),this.offsets[this._index(c)]},utcOffset:function(c){return this.offsets[this._index(c)]}},f.prototype.scoreOffsetAt=function(c){this.offsetScore+=Math.abs(this.zone.utcOffset(c.at)-c.offset),this.zone.abbr(c.at).replace(/[^A-Z]/g,"")!==c.abbr&&this.abbrScore++},g.version="0.5.31",g.dataVersion="",g._zones=A,g._links=o,g._names=b,g._countries=z,g.add=s,g.link=m,g.load=C,g.zone=E,g.zoneExists=function c(M){return c.didShowError||(c.didShowError=!0,R("moment.tz.zoneExists('"+M+"') has been deprecated in favor of !moment.tz.zone('"+M+"')")),!!E(M)},g.guess=function(c){return M&&!c||(M=T()),M},g.names=function(){var c,M=[];for(c in b)b.hasOwnProperty(c)&&(A[c]||A[o[c]])&&b[c]&&M.push(b[c]);return M.sort()},g.Zone=N,g.unpack=r,g.unpackBase60=L,g.needsOffset=S,g.moveInvalidForward=!0,g.moveAmbiguousForward=!1,g.countries=function(){return Object.keys(z)},g.zonesForCountry=function(c,M){var A;if(A=(A=c).toUpperCase(),!(c=z[A]||null))return null;var o=c.zones.sort();return M?o.map(function(c){return{name:c,offset:E(c).utcOffset(new Date)}}):o};var P,D=c.fn;function h(c){return function(){return this._z?this._z.abbr(this):c.call(this)}}function k(c){return function(){return this._z=null,c.apply(this,arguments)}}c.tz=g,c.defaultZone=null,c.updateOffset=function(M,A){var o,z=c.defaultZone;if(void 0===M._z&&(z&&S(M)&&!M._isUTC&&(M._d=c.utc(M._a)._d,M.utc().add(z.parse(M),"minutes")),M._z=z),M._z)if(o=M._z.utcOffset(M),Math.abs(o)<16&&(o/=60),void 0!==M.utcOffset){var b=M._z;M.utcOffset(-o,A),M._z=b}else M.zone(o,A)},D.tz=function(M,A){if(M){if("string"!=typeof M)throw new Error("Time zone name must be a string, got "+M+" ["+typeof M+"]");return this._z=E(M),this._z?c.updateOffset(this,A):R("Moment Timezone has no data for "+M+". See http://momentjs.com/timezone/docs/#/data-loading/."),this}if(this._z)return this._z.name},D.zoneName=h(D.zoneName),D.zoneAbbr=h(D.zoneAbbr),D.utc=k(D.utc),D.local=k(D.local),D.utcOffset=(P=D.utcOffset,function(){return arguments.length>0&&(this._z=null),P.apply(this,arguments)}),c.tz.setDefault=function(M){return(n<2||2===n&&i<9)&&R("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js "+c.version+"."),c.defaultZone=M?E(M):null,c};var w=c.momentProperties;return"[object Array]"===Object.prototype.toString.call(w)?(w.push("_z"),w.push("_a")):w&&(w._z=null),C({version:"2020a",zones:["Africa/Abidjan|LMT GMT|g.8 0|01|-2ldXH.Q|48e5","Africa/Accra|LMT GMT +0020|.Q 0 -k|012121212121212121212121212121212121212121212121|-26BbX.8 6tzX.8 MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE 1BAk MnE 1C0k MnE 1BAk MnE 1BAk MnE|41e5","Africa/Nairobi|LMT EAT +0230 +0245|-2r.g -30 -2u -2J|01231|-1F3Cr.g 3Dzr.g okMu MFXJ|47e5","Africa/Algiers|PMT WET WEST CET CEST|-9.l 0 -10 -10 -20|0121212121212121343431312123431213|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 DA0 Imo0 rd0 De0 9Xz0 1fb0 1ap0 16K0 2yo0 mEp0 hwL0 jxA0 11A0 dDd0 17b0 11B0 1cN0 2Dy0 1cN0 1fB0 1cL0|26e5","Africa/Lagos|LMT WAT|-d.A -10|01|-22y0d.A|17e6","Africa/Bissau|LMT -01 GMT|12.k 10 0|012|-2ldX0 2xoo0|39e4","Africa/Maputo|LMT CAT|-2a.k -20|01|-2GJea.k|26e5","Africa/Cairo|EET EEST|-20 -30|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1bIO0 vb0 1ip0 11z0 1iN0 1nz0 12p0 1pz0 10N0 1pz0 16p0 1jz0 s3d0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1WL0 rd0 1Rz0 wp0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1qL0 Xd0 1oL0 11d0 1oL0 11d0 1pb0 11d0 1oL0 11d0 1oL0 11d0 1ny0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 WL0 1qN0 Rb0 1wp0 On0 1zd0 Lz0 1EN0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6","Africa/Casablanca|LMT +00 +01|u.k 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-2gMnt.E 130Lt.E rb0 Dd0 dVb0 b6p0 TX0 EoB0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4mn0 SyN0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 gM0 2600 e00 2600 gM0|32e5","Africa/Ceuta|WET WEST CET CEST|0 -10 -10 -20|010101010101010101010232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-25KN0 11z0 drd0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1y7o0 LL0 gnd0 rz0 43d0 AL0 1Nd0 XX0 1Cp0 pz0 dEp0 4VB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|85e3","Africa/El_Aaiun|LMT -01 +00 +01|Q.M 10 0 -10|012323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1rDz7.c 1GVA7.c 6L0 AL0 1Nd0 XX0 1Cp0 pz0 1cBB0 AL0 1Nd0 wn0 1FB0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 e00 28M0 e00 2600 gM0 2600 e00 2600 gM0 2600 gM0 2600 e00 2600 gM0|20e4","Africa/Johannesburg|SAST SAST SAST|-1u -20 -30|012121|-2GJdu 1Ajdu 1cL0 1cN0 1cL0|84e5","Africa/Juba|LMT CAT CAST EAT|-26.s -20 -30 -30|01212121212121212121212121212121213|-1yW26.s 1zK06.s 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0|","Africa/Khartoum|LMT CAT CAST EAT|-2a.8 -20 -30 -30|012121212121212121212121212121212131|-1yW2a.8 1zK0a.8 16L0 1iN0 17b0 1jd0 17b0 1ip0 17z0 1i10 17X0 1hB0 18n0 1hd0 19b0 1gp0 19z0 1iN0 17b0 1ip0 17z0 1i10 18n0 1hd0 18L0 1gN0 19b0 1gp0 19z0 1iN0 17z0 1i10 17X0 yGd0 HjL0|51e5","Africa/Monrovia|MMT MMT GMT|H.8 I.u 0|012|-23Lzg.Q 28G01.m|11e5","Africa/Ndjamena|LMT WAT WAST|-10.c -10 -20|0121|-2le10.c 2J3c0.c Wn0|13e5","Africa/Sao_Tome|LMT GMT WAT|A.J 0 -10|0121|-2le00 4i6N0 2q00|","Africa/Tripoli|LMT CET CEST EET|-Q.I -10 -20 -20|012121213121212121212121213123123|-21JcQ.I 1hnBQ.I vx0 4iP0 xx0 4eN0 Bb0 7ip0 U0n0 A10 1db0 1cN0 1db0 1dd0 1db0 1eN0 1bb0 1e10 1cL0 1c10 1db0 1dd0 1db0 1cN0 1db0 1q10 fAn0 1ep0 1db0 AKq0 TA0 1o00|11e5","Africa/Tunis|PMT CET CEST|-9.l -10 -20|0121212121212121212121212121212121|-2nco9.l 18pa9.l 1qM0 DA0 3Tc0 11B0 1ze0 WM0 7z0 3d0 14L0 1cN0 1f90 1ar0 16J0 1gXB0 WM0 1rA0 11c0 nwo0 Ko0 1cM0 1cM0 1rA0 10M0 zuM0 10N0 1aN0 1qM0 WM0 1qM0 11A0 1o00|20e5","Africa/Windhoek|+0130 SAST SAST CAT WAT|-1u -20 -30 -20 -10|01213434343434343434343434343434343434343434343434343|-2GJdu 1Ajdu 1cL0 1SqL0 9Io0 16P0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4","America/Adak|NST NWT NPT BST BDT AHST HST HDT|b0 a0 a0 b0 a0 a0 a0 90|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326","America/Anchorage|AST AWT APT AHST AHDT YST AKST AKDT|a0 90 90 a0 90 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T00 8wX0 iA0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cm0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4","America/Port_of_Spain|LMT AST|46.4 40|01|-2kNvR.U|43e3","America/Araguaina|LMT -03 -02|3c.M 30 20|0121212121212121212121212121212121212121212121212121|-2glwL.c HdKL.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 ny10 Lz0|14e4","America/Argentina/Buenos_Aires|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 A4p0 uL0 1qN0 WL0|","America/Argentina/Catamarca|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 7B0 8zb0 uL0|","America/Argentina/Cordoba|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323132323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0 1qN0 WL0|","America/Argentina/Jujuy|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1ze0 TX0 1ld0 WK0 1wp0 TX0 A4p0 uL0|","America/Argentina/La_Rioja|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0|","America/Argentina/Mendoza|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232312121321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1u20 SL0 1vd0 Tb0 1wp0 TW0 ri10 Op0 7TX0 uL0|","America/Argentina/Rio_Gallegos|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rlB0 7B0 8zb0 uL0|","America/Argentina/Salta|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231323232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 A4p0 uL0|","America/Argentina/San_Juan|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323231232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Qn0 qO0 16n0 Rb0 1wp0 TX0 rld0 m10 8lb0 uL0|","America/Argentina/San_Luis|CMT -04 -03 -02|4g.M 40 30 20|012121212121212121212121212121212121212121232323121212321212|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 XX0 1q20 SL0 AN0 vDb0 m10 8lb0 8L0 jd0 1qN0 WL0 1qN0|","America/Argentina/Tucuman|CMT -04 -03 -02|4g.M 40 30 20|0121212121212121212121212121212121212121212323232313232123232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wq0 Ra0 1wp0 TX0 rlB0 4N0 8BX0 uL0 1qN0 WL0|","America/Argentina/Ushuaia|CMT -04 -03 -02|4g.M 40 30 20|01212121212121212121212121212121212121212123232323232321232|-20UHH.c pKnH.c Mn0 1iN0 Tb0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 1C10 LX0 1C10 LX0 1C10 LX0 1C10 Mn0 MN0 2jz0 MN0 4lX0 u10 5Lb0 1pB0 Fnz0 u10 uL0 1vd0 SL0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 zvd0 Bz0 1tB0 TX0 1wp0 Rb0 1wp0 Rb0 1wp0 TX0 rkN0 8p0 8zb0 uL0|","America/Curacao|LMT -0430 AST|4z.L 4u 40|012|-2kV7o.d 28KLS.d|15e4","America/Asuncion|AMT -04 -03|3O.E 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-1x589.k 1DKM9.k 3CL0 3Dd0 10L0 1pB0 10n0 1pB0 10n0 1pB0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1dd0 1cL0 1dd0 1cL0 1dd0 1db0 1dd0 1cL0 1lB0 14n0 1dd0 1cL0 1fd0 WL0 1rd0 1aL0 1dB0 Xz0 1qp0 Xb0 1qN0 10L0 1rB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 WN0 1qL0 11B0 1nX0 1ip0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 TX0 1tB0 19X0 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0|28e5","America/Atikokan|CST CDT CWT CPT EST|60 50 50 50 50|0101234|-25TQ0 1in0 Rnb0 3je0 8x30 iw0|28e2","America/Bahia_Banderas|LMT MST CST PST MDT CDT|71 70 60 80 60 50|0121212131414141414141414141414141414152525252525252525252525252525252525252525252525252525252|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|84e3","America/Bahia|LMT -03 -02|2y.4 30 20|01212121212121212121212121212121212121212121212121212121212121|-2glxp.U HdLp.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 l5B0 Rb0|27e5","America/Barbados|LMT BMT AST ADT|3W.t 3W.t 40 30|01232323232|-1Q0I1.v jsM0 1ODC1.v IL0 1ip0 17b0 1ip0 17b0 1ld0 13b0|28e4","America/Belem|LMT -03 -02|3d.U 30 20|012121212121212121212121212121|-2glwK.4 HdKK.4 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|20e5","America/Belize|LMT CST -0530 CDT|5Q.M 60 5u 50|01212121212121212121212121212121212121212121212121213131|-2kBu7.c fPA7.c Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1wou Rbu 1zcu Onu 1zcu Onu 1zcu Rbu 1wou Rbu 1f0Mu qn0 lxB0 mn0|57e3","America/Blanc-Sablon|AST ADT AWT APT|40 30 30 30|010230|-25TS0 1in0 UGp0 8x50 iu0|11e2","America/Boa_Vista|LMT -04 -03|42.E 40 30|0121212121212121212121212121212121|-2glvV.k HdKV.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 smp0 WL0 1tB0 2L0|62e2","America/Bogota|BMT -05 -04|4U.g 50 40|0121|-2eb73.I 38yo3.I 2en0|90e5","America/Boise|PST PDT MST MWT MPT MDT|80 70 70 60 60 60|0101023425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-261q0 1nX0 11B0 1nX0 8C10 JCL0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 Dd0 1Kn0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e4","America/Cambridge_Bay|-00 MST MWT MPT MDDT MDT CST CDT EST|0 70 60 60 50 60 60 50 50|0123141515151515151515151515151515151515151515678651515151515151515151515151515151515151515151515151515151515151515151515151|-21Jc0 RO90 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11A0 1nX0 2K0 WQ0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e2","America/Campo_Grande|LMT -04 -03|3C.s 40 30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glwl.w HdLl.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|77e4","America/Cancun|LMT CST EST EDT CDT|5L.4 60 50 40 50|0123232341414141414141414141414141414141412|-1UQG0 2q2o0 yLB0 1lb0 14p0 1lb0 14p0 Lz0 xB0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4","America/Caracas|CMT -0430 -04|4r.E 4u 40|01212|-2kV7w.k 28KM2.k 1IwOu kqo0|29e5","America/Cayenne|LMT -04 -03|3t.k 40 30|012|-2mrwu.E 2gWou.E|58e3","America/Panama|CMT EST|5j.A 50|01|-2uduE.o|15e5","America/Chicago|CST CDT EST CWT CPT|60 50 50 50 50|01010101010101010101010101010101010102010101010103401010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 1wp0 TX0 WN0 1qL0 1cN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 11B0 1Hz0 14p0 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5","America/Chihuahua|LMT MST CST CDT MDT|74.k 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|81e4","America/Costa_Rica|SJMT CST CDT|5A.d 60 50|0121212121|-1Xd6n.L 2lu0n.L Db0 1Kp0 Db0 pRB0 15b0 1kp0 mL0|12e5","America/Creston|MST PST|70 80|010|-29DR0 43B0|53e2","America/Cuiaba|LMT -04 -03|3I.k 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glwf.E HdLf.E 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 4a10 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|54e4","America/Danmarkshavn|LMT -03 -02 GMT|1e.E 30 20 0|01212121212121212121212121212121213|-2a5WJ.k 2z5fJ.k 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 DC0|8","America/Dawson_Creek|PST PDT PWT PPT MST|80 70 70 70 70|0102301010101010101010101010101010101010101010101010101014|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 ML0|12e3","America/Dawson|YST YDT YWT YPT YDDT PST PDT MST|90 80 80 80 70 80 70 70|01010230405656565656565656565656565656565656565656565656565656565656565656565656565656565657|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 jrA0 fNd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|13e2","America/Denver|MST MDT MWT MPT|70 60 60 60|01010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 11B0 1qL0 WN0 mn0 Ord0 8x20 ix0 LCN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5","America/Detroit|LMT CST EST EWT EPT EDT|5w.b 60 50 40 40 40|0123425252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2Cgir.N peqr.N 156L0 8x40 iv0 6fd0 11z0 JxX1 SMX 1cN0 1cL0 aW10 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e5","America/Edmonton|LMT MST MDT MWT MPT|7x.Q 70 60 60 60|0121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2yd4q.8 shdq.8 1in0 17d0 hz0 2dB0 1fz0 1a10 11z0 1qN0 WL0 1qN0 11z0 IGN0 8x20 ix0 3NB0 11z0 XQp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|10e5","America/Eirunepe|LMT -05 -04|4D.s 50 40|0121212121212121212121212121212121|-2glvk.w HdLk.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0 yTd0 d5X0|31e3","America/El_Salvador|LMT CST CDT|5U.M 60 50|012121|-1XiG3.c 2Fvc3.c WL0 1qN0 WL0|11e5","America/Tijuana|LMT MST PST PDT PWT PPT|7M.4 70 80 70 70 70|012123245232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQE0 4PX0 8mM0 8lc0 SN0 1cL0 pHB0 83r0 zI0 5O10 1Rz0 cOO0 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 BUp0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|20e5","America/Fort_Nelson|PST PDT PWT PPT MST|80 70 70 70 70|01023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010104|-25TO0 1in0 UGp0 8x10 iy0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2","America/Fort_Wayne|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010101023010101010101010101040454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 QI10 Db0 RB0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 5Tz0 1o10 qLb0 1cL0 1cN0 1cL0 1qhd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/Fortaleza|LMT -03 -02|2y 30 20|0121212121212121212121212121212121212121|-2glxq HdLq 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 5z0 2mN0 On0|34e5","America/Glace_Bay|LMT AST ADT AWT APT|3X.M 40 30 30 30|012134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsI0.c CwO0.c 1in0 UGp0 8x50 iu0 iq10 11z0 Jg10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3","America/Godthab|LMT -03 -02|3q.U 30 20|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5Ux.4 2z5dx.4 19U0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e3","America/Goose_Bay|NST NDT NST NDT NWT NPT AST ADT ADDT|3u.Q 2u.Q 3u 2u 2u 2u 40 30 20|010232323232323245232323232323232323232323232323232323232326767676767676767676767676767676767676767676768676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-25TSt.8 1in0 DXb0 2HbX.8 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 S10 g0u 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2","America/Grand_Turk|KMT EST EDT AST|57.a 50 40 40|01212121212121212121212121212121212121212121212121212121212121212121212121232121212121212121212121212121212121212121|-2l1uQ.O 2HHBQ.O 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2","America/Guatemala|LMT CST CDT|62.4 60 50|0121212121|-24KhV.U 2efXV.U An0 mtd0 Nz0 ifB0 17b0 zDB0 11z0|13e5","America/Guayaquil|QMT -05 -04|5e 50 40|0121|-1yVSK 2uILK rz0|27e5","America/Guyana|LMT -0345 -03 -04|3Q.E 3J 30 40|0123|-2dvU7.k 2r6LQ.k Bxbf|80e4","America/Halifax|LMT AST ADT AWT APT|4e.o 40 30 30 30|0121212121212121212121212121212121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsHJ.A xzzJ.A 1db0 3I30 1in0 3HX0 IL0 1E10 ML0 1yN0 Pb0 1Bd0 Mn0 1Bd0 Rz0 1w10 Xb0 1w10 LX0 1w10 Xb0 1w10 Lz0 1C10 Jz0 1E10 OL0 1yN0 Un0 1qp0 Xb0 1qp0 11X0 1w10 Lz0 1HB0 LX0 1C10 FX0 1w10 Xb0 1qp0 Xb0 1BB0 LX0 1td0 Xb0 1qp0 Xb0 Rf0 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 3Qp0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 6i10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4","America/Havana|HMT CST CDT|5t.A 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Meuu.o 72zu.o ML0 sld0 An0 1Nd0 Db0 1Nd0 An0 6Ep0 An0 1Nd0 An0 JDd0 Mn0 1Ap0 On0 1fd0 11X0 1qN0 WL0 1wp0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 14n0 1ld0 14L0 1kN0 15b0 1kp0 1cL0 1cN0 1fz0 1a10 1fz0 1fB0 11z0 14p0 1nX0 11B0 1nX0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 1a10 1in0 1a10 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 17c0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 11A0 6i00 Rc0 1wo0 U00 1tA0 Rc0 1wo0 U00 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5","America/Hermosillo|LMT MST CST PST MDT|7n.Q 70 60 80 60|0121212131414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0|64e4","America/Indiana/Knox|CST CDT CWT CPT EST|60 50 50 50 50|0101023010101010101010101010101010101040101010101010101010101010101010101010101010101010141010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 3NB0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 3Cn0 8wp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 z8o0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/Indiana/Marengo|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010104545454545414545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 dyN0 11z0 6fd0 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1e6p0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/Indiana/Petersburg|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010104010101010101010101010141014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 3Fb0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 19co0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/Indiana/Tell_City|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010401054541010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 njX0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 8wn0 1cN0 1cL0 1cN0 1cK0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/Indiana/Vevay|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|010102304545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 kPB0 Awn0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1lnd0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/Indiana/Vincennes|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010454541014545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 g0p0 11z0 1o10 11z0 1qL0 WN0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 caL0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/Indiana/Winamac|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|01010230101010101010101010101010101010454541054545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 jrz0 1cL0 1cN0 1cL0 1qhd0 1o00 Rd0 1za0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/Inuvik|-00 PST PDDT MST MDT|0 80 60 70 60|0121343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-FnA0 tWU0 1fA0 wPe0 2pz0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|35e2","America/Iqaluit|-00 EWT EPT EST EDDT EDT CST CDT|0 40 40 50 30 40 60 50|01234353535353535353535353535353535353535353567353535353535353535353535353535353535353535353535353535353535353535353535353|-16K00 7nX0 iv0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|67e2","America/Jamaica|KMT EST EDT|57.a 50 40|0121212121212121212121|-2l1uQ.O 2uM1Q.O 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0|94e4","America/Juneau|PST PWT PPT PDT YDT YST AKST AKDT|80 70 70 70 80 90 90 80|01203030303030303030303030403030356767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cM0 1cM0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|33e3","America/Kentucky/Louisville|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101010102301010101010101010101010101454545454545414545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 3Fd0 Nb0 LPd0 11z0 RB0 8x30 iw0 1nX1 e0X 9vd0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 xz0 gso0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1VA0 LA0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/Kentucky/Monticello|CST CDT CWT CPT EST EDT|60 50 50 50 50 40|0101023010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454545454|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 SWp0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/La_Paz|CMT BST -04|4w.A 3w.A 40|012|-1x37r.o 13b0|19e5","America/Lima|LMT -05 -04|58.A 50 40|0121212121212121|-2tyGP.o 1bDzP.o zX0 1aN0 1cL0 1cN0 1cL0 1PrB0 zX0 1O10 zX0 6Gp0 zX0 98p0 zX0|11e6","America/Los_Angeles|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 5Wp1 1VaX 3dA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6","America/Maceio|LMT -03 -02|2m.Q 30 20|012121212121212121212121212121212121212121|-2glxB.8 HdLB.8 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 dMN0 Lz0 8Q10 WL0 1tB0 5z0 2mN0 On0|93e4","America/Managua|MMT CST EST CDT|5J.c 60 50 50|0121313121213131|-1quie.M 1yAMe.M 4mn0 9Up0 Dz0 1K10 Dz0 s3F0 1KH0 DB0 9In0 k8p0 19X0 1o30 11y0|22e5","America/Manaus|LMT -04 -03|40.4 40 30|01212121212121212121212121212121|-2glvX.U HdKX.U 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 dPB0 On0|19e5","America/Martinique|FFMT AST ADT|44.k 40 30|0121|-2mPTT.E 2LPbT.E 19X0|39e4","America/Matamoros|LMT CST CDT|6E 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|45e4","America/Mazatlan|LMT MST CST PST MDT|75.E 70 60 80 60|0121212131414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 otX0 gmN0 P2N0 13Vd0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|44e4","America/Menominee|CST CDT CWT CPT EST|60 50 50 50 50|01010230101041010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 1o10 11z0 LCN0 1fz0 6410 9Jb0 1cM0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|85e2","America/Merida|LMT CST EST CDT|5W.s 60 50 50|0121313131313131313131313131313131313131313131313131313131313131313131313131313131313131|-1UQG0 2q2o0 2hz0 wu30 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|11e5","America/Metlakatla|PST PWT PPT PDT AKST AKDT|80 70 70 70 90 80|01203030303030303030303030303030304545450454545454545454545454545454545454545454|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1hU10 Rd0 1zb0 Op0 1zb0 Op0 1zb0 uM0 jB0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2","America/Mexico_City|LMT MST CST CDT CWT|6A.A 70 60 50 50|012121232324232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 gEn0 TX0 3xd0 Jb0 6zB0 SL0 e5d0 17b0 1Pff0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|20e6","America/Miquelon|LMT AST -03 -02|3I.E 40 30 20|012323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2mKkf.k 2LTAf.k gQ10 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2","America/Moncton|EST AST ADT AWT APT|50 40 30 30 30|012121212121212121212134121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2IsH0 CwN0 1in0 zAo0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1Nd0 An0 1K10 Lz0 1zB0 NX0 1u10 Wn0 S20 8x50 iu0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14n1 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 ReX 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|64e3","America/Monterrey|LMT CST CDT|6F.g 60 50|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1UQG0 2FjC0 1nX0 i6p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|41e5","America/Montevideo|LMT MMT -04 -03 -0330 -0230 -02 -0130|3I.P 3I.P 40 30 3u 2u 20 1u|012343434343434343434343435353636353636375363636363636363636363636363636363636363636363|-2tRUf.9 sVc0 8jcf.9 1db0 1dcu 1cLu 1dcu 1cLu ircu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu WLu 1fAu 1cLu 1o0u 11zu NAu 3jXu zXu Dq0u 19Xu pcu jz0 cm10 19X0 6tB0 1fbu 3o0u jX0 4vB0 xz0 3Cp0 mmu 1a10 IMu Db0 4c10 uL0 1Nd0 An0 1SN0 uL0 mp0 28L0 iPB0 un0 1SN0 xz0 1zd0 Lz0 1zd0 Rb0 1zd0 On0 1wp0 Rb0 s8p0 1fB0 1ip0 11z0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 14n0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5","America/Toronto|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101012301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 11Wu 1nzu 1fD0 WJ0 1wr0 Nb0 1Ap0 On0 1zd0 On0 1wp0 TX0 1tB0 TX0 1tB0 TX0 1tB0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 4kM0 8x40 iv0 1o10 11z0 1nX0 11z0 1o10 11z0 1o10 1qL0 11D0 1nX0 11B0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e5","America/Nassau|LMT EST EDT|59.u 50 40|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2kNuO.u 26XdO.u 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|24e4","America/New_York|EST EDT EWT EPT|50 40 40 40|01010101010101010101010101010101010101010101010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 11B0 1qL0 1a10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 RB0 8x40 iv0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6","America/Nipigon|EST EDT EWT EPT|50 40 40 40|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TR0 1in0 Rnb0 3je0 8x40 iv0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|16e2","America/Nome|NST NWT NPT BST BDT YST AKST AKDT|b0 a0 a0 b0 a0 90 90 80|012034343434343434343434343434343456767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676767676|-17SX0 8wW0 iB0 Qlb0 52O0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cl0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|38e2","America/Noronha|LMT -02 -01|29.E 20 10|0121212121212121212121212121212121212121|-2glxO.k HdKO.k 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|30e2","America/North_Dakota/Beulah|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/North_Dakota/Center|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101014545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/North_Dakota/New_Salem|MST MDT MWT MPT CST CDT|70 60 60 60 60 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101454545454545454545454545454545454545454545454545454545454545454545454|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14o0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","America/Ojinaga|LMT MST CST CDT MDT|6V.E 70 60 50 60|0121212323241414141414141414141414141414141414141414141414141414141414141414141414141414141|-1UQF0 deL0 8lc0 17c0 10M0 1dd0 2zQN0 1lb0 14p0 1lb0 14q0 1lb0 14p0 1nX0 11B0 1nX0 1fB0 WL0 1fB0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 U10 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e3","America/Pangnirtung|-00 AST AWT APT ADDT ADT EDT EST CST CDT|0 40 30 30 20 30 40 50 60 50|012314151515151515151515151515151515167676767689767676767676767676767676767676767676767676767676767676767676767676767676767|-1XiM0 PnG0 8x50 iu0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1o00 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11C0 1nX0 11A0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2","America/Paramaribo|LMT PMT PMT -0330 -03|3E.E 3E.Q 3E.A 3u 30|01234|-2nDUj.k Wqo0.c qanX.I 1yVXN.o|24e4","America/Phoenix|MST MDT MWT|70 60 60|01010202010|-261r0 1nX0 11B0 1nX0 SgN0 4Al1 Ap0 1db0 SWqX 1cL0|42e5","America/Port-au-Prince|PPMT EST EDT|4N 50 40|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-28RHb 2FnMb 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14q0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 i6n0 1nX0 11B0 1nX0 d430 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5","America/Rio_Branco|LMT -05 -04|4v.c 50 40|01212121212121212121212121212121|-2glvs.M HdLs.M 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0 d5X0|31e4","America/Porto_Velho|LMT -04 -03|4f.A 40 30|012121212121212121212121212121|-2glvI.o HdKI.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0|37e4","America/Puerto_Rico|AST AWT APT|40 30 30|0120|-17lU0 7XT0 iu0|24e5","America/Punta_Arenas|SMT -05 -04 -03|4G.K 50 40 30|0102021212121212121232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 blz0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|","America/Rainy_River|CST CDT CWT CPT|60 50 50 50|010123010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TQ0 1in0 Rnb0 3je0 8x30 iw0 19yN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|842","America/Rankin_Inlet|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313131313131313131313131313131313131313131313131313131313131313131|-vDc0 keu0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e2","America/Recife|LMT -03 -02|2j.A 30 20|0121212121212121212121212121212121212121|-2glxE.o HdLE.o 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 nsp0 WL0 1tB0 2L0 2pB0 On0|33e5","America/Regina|LMT MST MDT MWT MPT CST|6W.A 70 60 60 60 60|012121212121212121212121341212121212121212121212121215|-2AD51.o uHe1.o 1in0 s2L0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 66N0 1cL0 1cN0 19X0 1fB0 1cL0 1fB0 1cL0 1cN0 1cL0 M30 8x20 ix0 1ip0 1cL0 1ip0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 3NB0 1cL0 1cN0|19e4","America/Resolute|-00 CST CDDT CDT EST|0 60 40 50 50|012131313131313131313131313131313131313131313431313131313431313131313131313131313131313131313131313131313131313131313131|-SnA0 GWS0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|229","America/Santarem|LMT -04 -03|3C.M 40 30|0121212121212121212121212121212|-2glwl.c HdLl.c 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 qe10 xb0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 NBd0|21e4","America/Santiago|SMT -05 -04 -03|4G.K 50 40 30|010202121212121212321232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-2q2jh.e fJAh.e 5knG.K 1Vzh.e jRAG.K 1pbh.e 11d0 1oL0 11d0 1oL0 11d0 1oL0 11d0 1pb0 11d0 nHX0 op0 9Bz0 jb0 1oN0 ko0 Qeo0 WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0|62e5","America/Santo_Domingo|SDMT EST EDT -0430 AST|4E 50 40 4u 40|01213131313131414|-1ttjk 1lJMk Mn0 6sp0 Lbu 1Cou yLu 1RAu wLu 1QMu xzu 1Q0u xXu 1PAu 13jB0 e00|29e5","America/Sao_Paulo|LMT -03 -02|36.s 30 20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glwR.w HdKR.w 1cc0 1e10 1bX0 Ezd0 So0 1vA0 Mn0 1BB0 ML0 1BB0 zX0 pTd0 PX0 2ep0 nz0 1C10 zX0 1C10 LX0 1C10 Mn0 H210 Rb0 1tB0 IL0 1Fd0 FX0 1EN0 FX0 1HB0 Lz0 1EN0 Lz0 1C10 IL0 1HB0 Db0 1HB0 On0 1zd0 On0 1zd0 Lz0 1zd0 Rb0 1wN0 Wn0 1tB0 Rb0 1tB0 WL0 1tB0 Rb0 1zd0 On0 1HB0 FX0 1C10 Lz0 1Ip0 HX0 1zd0 On0 1HB0 IL0 1wp0 On0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0|20e6","America/Scoresbysund|LMT -02 -01 +00|1r.Q 20 10 0|0121323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2a5Ww.8 2z5ew.8 1a00 1cK0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|452","America/Sitka|PST PWT PPT PDT YST AKST AKDT|80 70 70 70 90 90 80|01203030303030303030303030303030345656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565656565|-17T20 8x10 iy0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 co0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|90e2","America/St_Johns|NST NDT NST NDT NWT NPT NDDT|3u.Q 2u.Q 3u 2u 2u 2u 1u|01010101010101010101010101010101010102323232323232324523232323232323232323232323232323232323232323232323232323232323232323232323232323232326232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-28oit.8 14L0 1nB0 1in0 1gm0 Dz0 1JB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 19X0 1fB0 1cL0 1fB0 19X0 1fB0 19X0 10O0 eKX.8 19X0 1iq0 WL0 1qN0 WL0 1qN0 WL0 1tB0 TX0 1tB0 WL0 1qN0 WL0 1qN0 7UHu itu 1tB0 WL0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1tB0 WL0 1ld0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14n1 1lb0 14p0 1nW0 11C0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4","America/Swift_Current|LMT MST MDT MWT MPT CST|7b.k 70 60 60 60 60|012134121212121212121215|-2AD4M.E uHdM.E 1in0 UGp0 8x20 ix0 1o10 17b0 1ip0 11z0 1o10 11z0 1o10 11z0 isN0 1cL0 3Cp0 1cL0 1cN0 11z0 1qN0 WL0 pMp0|16e3","America/Tegucigalpa|LMT CST CDT|5M.Q 60 50|01212121|-1WGGb.8 2ETcb.8 WL0 1qN0 WL0 GRd0 AL0|11e5","America/Thule|LMT AST ADT|4z.8 40 30|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a5To.Q 31NBo.Q 1cL0 1cN0 1cL0 1fB0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|656","America/Thunder_Bay|CST EST EWT EPT EDT|60 50 40 40 40|0123141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141414141|-2q5S0 1iaN0 8x40 iv0 XNB0 1cL0 1cN0 1fz0 1cN0 1cL0 3Cp0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4","America/Vancouver|PST PDT PWT PPT|80 70 70 70|0102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-25TO0 1in0 UGp0 8x10 iy0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5","America/Whitehorse|YST YDT YWT YPT YDDT PST PDT MST|90 80 80 80 70 80 70 70|01010230405656565656565656565656565656565656565656565656565656565656565656565656565656565657|-25TN0 1in0 1o10 13V0 Ser0 8x00 iz0 LCL0 1fA0 3NA0 vrd0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|23e3","America/Winnipeg|CST CDT CWT CPT|60 50 50 50|010101023010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aIi0 WL0 3ND0 1in0 Jap0 Rb0 aCN0 8x30 iw0 1tB0 11z0 1ip0 11z0 1o10 11z0 1o10 11z0 1rd0 10L0 1op0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 1cL0 1cN0 11z0 6i10 WL0 6i10 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1o00 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1o00 11A0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|66e4","America/Yakutat|YST YWT YPT YDT AKST AKDT|90 80 80 80 90 80|01203030303030303030303030303030304545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-17T10 8x00 iz0 Vo10 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 cn0 10q0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|642","America/Yellowknife|-00 MST MWT MPT MDDT MDT|0 70 60 60 50 60|012314151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151515151|-1pdA0 hix0 8x20 ix0 LCL0 1fA0 zgO0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|19e3","Antarctica/Casey|-00 +08 +11|0 -80 -b0|01212121|-2q00 1DjS0 T90 40P0 KL0 blz0 3m10|10","Antarctica/Davis|-00 +07 +05|0 -70 -50|01012121|-vyo0 iXt0 alj0 1D7v0 VB0 3Wn0 KN0|70","Antarctica/DumontDUrville|-00 +10|0 -a0|0101|-U0o0 cfq0 bFm0|80","Antarctica/Macquarie|AEST AEDT -00 +11|-a0 -b0 0 -b0|0102010101010101010101010101010101010101010101010101010101010101010101010101010101010101013|-29E80 19X0 4SL0 1ayy0 Lvs0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0|1","Antarctica/Mawson|-00 +06 +05|0 -60 -50|012|-CEo0 2fyk0|60","Pacific/Auckland|NZMT NZST NZST NZDT|-bu -cu -c0 -d0|01020202020202020202020202023232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1GCVu Lz0 1tB0 11zu 1o0u 11zu 1o0u 11zu 1o0u 14nu 1lcu 14nu 1lcu 1lbu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1nXu 11Au 1qLu WMu 1qLu 11Au 1n1bu IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|14e5","Antarctica/Palmer|-00 -03 -04 -02|0 30 40 20|0121212121213121212121212121212121212121212121212121212121212121212121212121212121|-cao0 nD0 1vd0 SL0 1vd0 17z0 1cN0 1fz0 1cN0 1cL0 1cN0 asn0 Db0 jsN0 14N0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40","Antarctica/Rothera|-00 -03|0 30|01|gOo0|130","Antarctica/Syowa|-00 +03|0 -30|01|-vs00|20","Antarctica/Troll|-00 +00 +02|0 0 -20|01212121212121212121212121212121212121212121212121212121212121212121|1puo0 hd0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|40","Antarctica/Vostok|-00 +06|0 -60|01|-tjA0|25","Europe/Oslo|CET CEST|-10 -20|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2awM0 Qm0 W6o0 5pf0 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 wJc0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1qM0 WM0 zpc0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e4","Asia/Riyadh|LMT +03|-36.Q -30|01|-TvD6.Q|57e5","Asia/Almaty|LMT +05 +06 +07|-57.M -50 -60 -70|012323232323232323232321232323232323232323232323232|-1Pc57.M eUo7.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|15e5","Asia/Amman|LMT EET EEST|-2n.I -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1yW2n.I 1HiMn.I KL0 1oN0 11b0 1oN0 11b0 1pd0 1dz0 1cp0 11b0 1op0 11b0 fO10 1db0 1e10 1cL0 1cN0 1cL0 1cN0 1fz0 1pd0 10n0 1ld0 14n0 1hB0 15b0 1ip0 19X0 1cN0 1cL0 1cN0 17b0 1ld0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1So0 y00 1fc0 1dc0 1co0 1dc0 1cM0 1cM0 1cM0 1o00 11A0 1lc0 17c0 1cM0 1cM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e5","Asia/Anadyr|LMT +12 +13 +14 +11|-bN.U -c0 -d0 -e0 -b0|01232121212121212121214121212121212121212121212121212121212141|-1PcbN.U eUnN.U 23CL0 1db0 2q10 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|13e3","Asia/Aqtau|LMT +04 +05 +06|-3l.4 -40 -50 -60|012323232323232323232123232312121212121212121212|-1Pc3l.4 eUnl.4 24PX0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|15e4","Asia/Aqtobe|LMT +04 +05 +06|-3M.E -40 -50 -60|0123232323232323232321232323232323232323232323232|-1Pc3M.E eUnM.E 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0|27e4","Asia/Ashgabat|LMT +04 +05 +06|-3R.w -40 -50 -60|0123232323232323232323212|-1Pc3R.w eUnR.w 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0|41e4","Asia/Atyrau|LMT +03 +05 +06 +04|-3r.I -30 -50 -60 -40|01232323232323232323242323232323232324242424242|-1Pc3r.I eUor.I 24PW0 2pX0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 2sp0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|","Asia/Baghdad|BMT +03 +04|-2V.A -30 -40|012121212121212121212121212121212121212121212121212121|-26BeV.A 2ACnV.A 11b0 1cp0 1dz0 1dd0 1db0 1cN0 1cp0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1de0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0 1dc0 1dc0 1cM0 1dc0 1cM0 1dc0 1cM0 1dc0|66e5","Asia/Qatar|LMT +04 +03|-3q.8 -40 -30|012|-21Jfq.8 27BXq.8|96e4","Asia/Baku|LMT +03 +04 +05|-3j.o -30 -40 -50|01232323232323232323232123232323232323232323232323232323232323232|-1Pc3j.o 1jUoj.o WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 9Je0 1o00 11z0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5","Asia/Bangkok|BMT +07|-6G.4 -70|01|-218SG.4|15e6","Asia/Barnaul|LMT +06 +07 +08|-5z -60 -70 -80|0123232323232323232323212323232321212121212121212121212121212121212|-21S5z pCnz 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 p90 LE0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|","Asia/Beirut|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-21aq0 1on0 1410 1db0 19B0 1in0 1ip0 WL0 1lQp0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 q6N0 En0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1op0 11b0 dA10 17b0 1iN0 17b0 1iN0 17b0 1iN0 17b0 1vB0 SL0 1mp0 13z0 1iN0 17b0 1iN0 17b0 1jd0 12n0 1a10 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|22e5","Asia/Bishkek|LMT +05 +06 +07|-4W.o -50 -60 -70|012323232323232323232321212121212121212121212121212|-1Pc4W.o eUnW.o 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2e00 1tX0 17b0 1ip0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1cPu 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0|87e4","Asia/Brunei|LMT +0730 +08|-7D.E -7u -80|012|-1KITD.E gDc9.E|42e4","Asia/Kolkata|MMT IST +0630|-5l.a -5u -6u|012121|-2zOtl.a 1r2LP.a 1un0 HB0 7zX0|15e6","Asia/Chita|LMT +08 +09 +10|-7x.Q -80 -90 -a0|012323232323232323232321232323232323232323232323232323232323232312|-21Q7x.Q pAnx.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3re0|33e4","Asia/Choibalsan|LMT +07 +08 +10 +09|-7C -70 -80 -a0 -90|0123434343434343434343434343434343434343434343424242|-2APHC 2UkoC cKn0 1da0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 3Db0 h1f0 1cJ0 1cP0 1cJ0|38e3","Asia/Shanghai|CST CDT|-80 -90|01010101010101010101010101010|-23uw0 18n0 OjB0 Rz0 11d0 1wL0 A10 8HX0 1G10 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 aL0 1tU30 Rb0 1o10 11z0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0|23e6","Asia/Colombo|MMT +0530 +06 +0630|-5j.w -5u -60 -6u|01231321|-2zOtj.w 1rFbN.w 1zzu 7Apu 23dz0 11zu n3cu|22e5","Asia/Dhaka|HMT +0630 +0530 +06 +07|-5R.k -6u -5u -60 -70|0121343|-18LFR.k 1unn.k HB0 m6n0 2kxbu 1i00|16e6","Asia/Damascus|LMT EET EEST|-2p.c -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-21Jep.c Hep.c 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1xRB0 11X0 1oN0 10L0 1pB0 11b0 1oN0 10L0 1mp0 13X0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 1pd0 11b0 1oN0 Nb0 1AN0 Nb0 bcp0 19X0 1gp0 19X0 3ld0 1xX0 Vd0 1Bz0 Sp0 1vX0 10p0 1dz0 1cN0 1cL0 1db0 1db0 1g10 1an0 1ap0 1db0 1fd0 1db0 1cN0 1db0 1dd0 1db0 1cp0 1dz0 1c10 1dX0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1db0 1cN0 1db0 1cN0 19z0 1fB0 1qL0 11B0 1on0 Wp0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|26e5","Asia/Dili|LMT +08 +09|-8m.k -80 -90|01212|-2le8m.k 1dnXm.k 1nfA0 Xld0|19e4","Asia/Dubai|LMT +04|-3F.c -40|01|-21JfF.c|39e5","Asia/Dushanbe|LMT +05 +06 +07|-4z.c -50 -60 -70|012323232323232323232321|-1Pc4z.c eUnz.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2hB0|76e4","Asia/Famagusta|LMT EET EEST +03|-2f.M -20 -30 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212312121212121212121212121212121212121212121|-1Vc2f.M 2a3cf.M 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|","Asia/Gaza|EET EEST IST IDT|-20 -30 -20 -30|0101010101010101010101010101010123232323232323232323232323232320101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 bXd0 gM0 8Q00 IM0 1wM0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 11z0 1o10 14o0 1lA1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0|18e5","Asia/Hebron|EET EEST IST IDT|-20 -30 -20 -30|010101010101010101010101010101012323232323232323232323232323232010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-1c2q0 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 pBd0 Vz0 1oN0 11b0 1oO0 10N0 1pz0 10N0 1pb0 10N0 1pb0 10N0 1pb0 10N0 1pz0 10N0 1pb0 10N0 1pb0 11d0 1oL0 dW0 hfB0 Db0 1fB0 Rb0 bXd0 gM0 8Q00 IM0 1wM0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 M10 C00 17c0 1io0 17c0 1io0 17c0 1o00 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 17c0 1io0 18N0 1bz0 19z0 1gp0 1610 1iL0 12L0 1mN0 14o0 1lc0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0 Wo0 1rc0 11c0 1oo0 11c0 1oo0 11c0 1oo0 11c0 1rc0|25e4","Asia/Ho_Chi_Minh|LMT PLMT +07 +08 +09|-76.E -76.u -70 -80 -90|0123423232|-2yC76.E bK00.a 1h7b6.u 5lz0 18o0 3Oq0 k5b0 aW00 BAM0|90e5","Asia/Hong_Kong|LMT HKT HKST HKWT JST|-7A.G -80 -90 -8u -90|0123412121212121212121212121212121212121212121212121212121212121212121|-2CFH0 1taO0 Hc0 xUu 9tBu 11z0 1tDu Rc0 1wo0 11A0 1cM0 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1nX0 U10 1tz0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|73e5","Asia/Hovd|LMT +06 +07 +08|-66.A -60 -70 -80|012323232323232323232323232323232323232323232323232|-2APG6.A 2Uko6.A cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|81e3","Asia/Irkutsk|IMT +07 +08 +09|-6V.5 -70 -80 -90|01232323232323232323232123232323232323232323232323232323232323232|-21zGV.5 pjXV.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4","Europe/Istanbul|IMT EET EEST +03 +04|-1U.U -20 -30 -30 -40|0121212121212121212121212121212121212121212121234312121212121212121212121212121212121212121212121212121212121212123|-2ogNU.U dzzU.U 11b0 8tB0 1on0 1410 1db0 19B0 1in0 3Rd0 Un0 1oN0 11b0 zSN0 CL0 mp0 1Vz0 1gN0 8yn0 1yp0 ML0 1kp0 17b0 1ip0 17b0 1fB0 19X0 1ip0 19X0 1ip0 17b0 qdB0 38L0 1jd0 Tz0 l6O0 11A0 WN0 1qL0 TB0 1tX0 U10 1tz0 11B0 1in0 17d0 z90 cne0 pb0 2Cp0 1800 14o0 1dc0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1a00 1fA0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WO0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6","Asia/Jakarta|BMT +0720 +0730 +09 +08 WIB|-77.c -7k -7u -90 -80 -70|01232425|-1Q0Tk luM0 mPzO 8vWu 6kpu 4PXu xhcu|31e6","Asia/Jayapura|LMT +09 +0930 WIT|-9m.M -90 -9u -90|0123|-1uu9m.M sMMm.M L4nu|26e4","Asia/Jerusalem|JMT IST IDT IDDT|-2k.E -20 -30 -40|012121212121321212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-26Bek.E SyMk.E 5Rb0 10r0 1px0 10N0 1pz0 16p0 1jB0 16p0 1jx0 3LB0 Em0 or0 1cn0 1dB0 16n0 10O0 1ja0 1tC0 14o0 1cM0 1a00 11A0 1Na0 An0 1MP0 AJ0 1Kp0 LC0 1oo0 Wl0 EQN0 Db0 1fB0 Rb0 bXd0 gM0 8Q00 IM0 1wM0 11z0 1C10 IL0 1s10 10n0 1o10 WL0 1zd0 On0 1ld0 11z0 1o10 14n0 1o10 14n0 1nd0 12n0 1nd0 Xz0 1q10 12n0 1hB0 1dX0 1ep0 1aL0 1eN0 17X0 1nf0 11z0 1tB0 19W0 1e10 17b0 1ep0 1gL0 18N0 1fz0 1eN0 17b0 1gq0 1gn0 19d0 1dz0 1c10 17X0 1hB0 1gn0 19d0 1dz0 1c10 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0|81e4","Asia/Kabul|+04 +0430|-40 -4u|01|-10Qs0|46e5","Asia/Kamchatka|LMT +11 +12 +13|-ay.A -b0 -c0 -d0|012323232323232323232321232323232323232323232323232323232323212|-1SLKy.A ivXy.A 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|18e4","Asia/Karachi|LMT +0530 +0630 +05 PKT PKST|-4s.c -5u -6u -50 -50 -60|012134545454|-2xoss.c 1qOKW.c 7zX0 eup0 LqMu 1fy00 1cL0 dK10 11b0 1610 1jX0|24e6","Asia/Urumqi|LMT +06|-5O.k -60|01|-1GgtO.k|32e5","Asia/Kathmandu|LMT +0530 +0545|-5F.g -5u -5J|012|-21JhF.g 2EGMb.g|12e5","Asia/Khandyga|LMT +08 +09 +10 +11|-92.d -80 -90 -a0 -b0|0123232323232323232323212323232323232323232323232343434343434343432|-21Q92.d pAp2.d 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 qK0 yN0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|66e2","Asia/Krasnoyarsk|LMT +06 +07 +08|-6b.q -60 -70 -80|01232323232323232323232123232323232323232323232323232323232323232|-21Hib.q prAb.q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|10e5","Asia/Kuala_Lumpur|SMT +07 +0720 +0730 +09 +08|-6T.p -70 -7k -7u -90 -80|0123435|-2Bg6T.p 17anT.p l5XE 17bO 8Fyu 1so1u|71e5","Asia/Kuching|LMT +0730 +08 +0820 +09|-7l.k -7u -80 -8k -90|0123232323232323242|-1KITl.k gDbP.k 6ynu AnE 1O0k AnE 1NAk AnE 1NAk AnE 1NAk AnE 1O0k AnE 1NAk AnE pAk 8Fz0|13e4","Asia/Macau|LMT CST +09 +10 CDT|-7y.a -80 -90 -a0 -90|012323214141414141414141414141414141414141414141414141414141414141414141|-2CFHy.a 1uqKy.a PX0 1kn0 15B0 11b0 4Qq0 1oM0 11c0 1ko0 1u00 11A0 1cM0 11c0 1o00 11A0 1o00 11A0 1oo0 1400 1o00 11A0 1o00 U00 1tA0 U00 1wo0 Rc0 1wru U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 Rd0 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 17d0 1cK0 1cO0 1cK0 1cO0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 s10 1Vz0 1cN0 1cL0 1cN0 1cL0 6fd0 14n0|57e4","Asia/Magadan|LMT +10 +11 +12|-a3.c -a0 -b0 -c0|012323232323232323232321232323232323232323232323232323232323232312|-1Pca3.c eUo3.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Cq0|95e3","Asia/Makassar|LMT MMT +08 +09 WITA|-7V.A -7V.A -80 -90 -80|01234|-21JjV.A vfc0 myLV.A 8ML0|15e5","Asia/Manila|PST PDT JST|-80 -90 -90|010201010|-1kJI0 AL0 cK10 65X0 mXB0 vX0 VK10 1db0|24e6","Asia/Nicosia|LMT EET EEST|-2d.s -20 -30|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1Vc2d.s 2a3cd.s 1cL0 1qp0 Xz0 19B0 19X0 1fB0 1db0 1cp0 1cL0 1fB0 19X0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1o30 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|32e4","Asia/Novokuznetsk|LMT +06 +07 +08|-5M.M -60 -70 -80|012323232323232323232321232323232323232323232323232323232323212|-1PctM.M eULM.M 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|55e4","Asia/Novosibirsk|LMT +06 +07 +08|-5v.E -60 -70 -80|0123232323232323232323212323212121212121212121212121212121212121212|-21Qnv.E pAFv.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 ml0 Os0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 4eN0|15e5","Asia/Omsk|LMT +05 +06 +07|-4R.u -50 -60 -70|01232323232323232323232123232323232323232323232323232323232323232|-224sR.u pMLR.u 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|12e5","Asia/Oral|LMT +03 +05 +06 +04|-3p.o -30 -50 -60 -40|01232323232323232424242424242424242424242424242|-1Pc3p.o eUop.o 23CK0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 1cM0 IM0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|27e4","Asia/Pontianak|LMT PMT +0730 +09 +08 WITA WIB|-7h.k -7h.k -7u -90 -80 -80 -70|012324256|-2ua7h.k XE00 munL.k 8Rau 6kpu 4PXu xhcu Wqnu|23e4","Asia/Pyongyang|LMT KST JST KST|-8n -8u -90 -90|012313|-2um8n 97XR 1lTzu 2Onc0 6BA0|29e5","Asia/Qostanay|LMT +04 +05 +06|-4e.s -40 -50 -60|012323232323232323232123232323232323232323232323|-1Pc4e.s eUoe.s 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0|","Asia/Qyzylorda|LMT +04 +05 +06|-4l.Q -40 -50 -60|01232323232323232323232323232323232323232323232|-1Pc4l.Q eUol.Q 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 3ao0 1EM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 zQl0|73e4","Asia/Rangoon|RMT +0630 +09|-6o.L -6u -90|0121|-21Jio.L SmnS.L 7j9u|48e5","Asia/Sakhalin|LMT +09 +11 +12 +10|-9u.M -90 -b0 -c0 -a0|01232323232323232323232423232323232424242424242424242424242424242|-2AGVu.M 1BoMu.M 1qFa0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 2pB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|58e4","Asia/Samarkand|LMT +04 +05 +06|-4r.R -40 -50 -60|01232323232323232323232|-1Pc4r.R eUor.R 23CL0 3Db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0|36e4","Asia/Seoul|LMT KST JST KST KDT KDT|-8r.Q -8u -90 -90 -a0 -9u|012343434343151515151515134343|-2um8r.Q 97XV.Q 1m1zu 6CM0 Fz0 1kN0 14n0 1kN0 14L0 1zd0 On0 69B0 2I0u OL0 1FB0 Rb0 1qN0 TX0 1tB0 TX0 1tB0 TX0 1tB0 TX0 2ap0 12FBu 11A0 1o00 11A0|23e6","Asia/Srednekolymsk|LMT +10 +11 +12|-ae.Q -a0 -b0 -c0|01232323232323232323232123232323232323232323232323232323232323232|-1Pcae.Q eUoe.Q 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|35e2","Asia/Taipei|CST JST CDT|-80 -90 -90|01020202020202020202020202020202020202020|-1iw80 joM0 1yo0 Tz0 1ip0 1jX0 1cN0 11b0 1oN0 11b0 1oN0 11b0 1oN0 11b0 10N0 1BX0 10p0 1pz0 10p0 1pz0 10p0 1db0 1dd0 1db0 1cN0 1db0 1cN0 1db0 1cN0 1db0 1BB0 ML0 1Bd0 ML0 uq10 1db0 1cN0 1db0 97B0 AL0|74e5","Asia/Tashkent|LMT +05 +06 +07|-4B.b -50 -60 -70|012323232323232323232321|-1Pc4B.b eUnB.b 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0|23e5","Asia/Tbilisi|TBMT +03 +04 +05|-2X.b -30 -40 -50|0123232323232323232323212121232323232323232323212|-1Pc2X.b 1jUnX.b WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cK0 1cL0 1cN0 1cL0 1cN0 2pz0 1cL0 1fB0 3Nz0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 An0 Os0 WM0|11e5","Asia/Tehran|LMT TMT +0330 +04 +05 +0430|-3p.I -3p.I -3u -40 -50 -4u|01234325252525252525252525252525252525252525252525252525252525252525252525252525252525252525252525252|-2btDp.I 1d3c0 1huLT.I TXu 1pz0 sN0 vAu 1cL0 1dB0 1en0 pNB0 UL0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 64p0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6","Asia/Thimphu|LMT +0530 +06|-5W.A -5u -60|012|-Su5W.A 1BGMs.A|79e3","Asia/Tokyo|JST JDT|-90 -a0|010101010|-QJJ0 Rc0 1lc0 14o0 1zc0 Oo0 1zc0 Oo0|38e6","Asia/Tomsk|LMT +06 +07 +08|-5D.P -60 -70 -80|0123232323232323232323212323232323232323232323212121212121212121212|-21NhD.P pxzD.P 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 co0 1bB0 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3Qp0|10e5","Asia/Ulaanbaatar|LMT +07 +08 +09|-77.w -70 -80 -90|012323232323232323232323232323232323232323232323232|-2APH7.w 2Uko7.w cKn0 1db0 1dd0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 6hD0 11z0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 kEp0 1cJ0 1cP0 1cJ0|12e5","Asia/Ust-Nera|LMT +08 +09 +12 +11 +10|-9w.S -80 -90 -c0 -b0 -a0|012343434343434343434345434343434343434343434343434343434343434345|-21Q9w.S pApw.S 23CL0 1d90 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 17V0 7zD0|65e2","Asia/Vladivostok|LMT +09 +10 +11|-8L.v -90 -a0 -b0|01232323232323232323232123232323232323232323232323232323232323232|-1SJIL.v itXL.v 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|60e4","Asia/Yakutsk|LMT +08 +09 +10|-8C.W -80 -90 -a0|01232323232323232323232123232323232323232323232323232323232323232|-21Q8C.W pAoC.W 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|28e4","Asia/Yekaterinburg|LMT PMT +04 +05 +06|-42.x -3J.5 -40 -50 -60|012343434343434343434343234343434343434343434343434343434343434343|-2ag42.x 7mQh.s qBvJ.5 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|14e5","Asia/Yerevan|LMT +03 +04 +05|-2W -30 -40 -50|0123232323232323232323212121212323232323232323232323232323232|-1Pc2W 1jUnW WCL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 2pB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 4RX0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|13e5","Atlantic/Azores|HMT -02 -01 +00 WET|1S.w 20 10 0 0|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121232323232323232323232323232323234323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-2ldW0 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cL0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4","Atlantic/Bermuda|LMT AST ADT|4j.i 40 30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1BnRE.G 1LTbE.G 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|65e3","Atlantic/Canary|LMT -01 WET WEST|11.A 10 0 -10|01232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-1UtaW.o XPAW.o 1lAK0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4","Atlantic/Cape_Verde|LMT -02 -01|1y.4 20 10|01212|-2ldW0 1eEo0 7zX0 1djf0|50e4","Atlantic/Faroe|LMT WET WEST|r.4 0 -10|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2uSnw.U 2Wgow.U 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|49e3","Atlantic/Madeira|FMT -01 +00 +01 WET WEST|17.A 10 0 -10 0 -10|01212121212121212121212121212121212121212121232123212321232121212121212121212121212121212121212121454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2ldX0 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 qIl0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e4","Atlantic/Reykjavik|LMT -01 +00 GMT|1s 10 0 0|012121212121212121212121212121212121212121212121212121212121212121213|-2uWmw mfaw 1Bd0 ML0 1LB0 Cn0 1LB0 3fX0 C10 HrX0 1cO0 LB0 1EL0 LA0 1C00 Oo0 1wo0 Rc0 1wo0 Rc0 1wo0 Rc0 1zc0 Oo0 1zc0 14o0 1lc0 14o0 1lc0 14o0 1o00 11A0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1lc0 14o0 1o00 14o0|12e4","Atlantic/South_Georgia|-02|20|0||30","Atlantic/Stanley|SMT -04 -03 -02|3P.o 40 30 20|012121212121212323212121212121212121212121212121212121212121212121212|-2kJw8.A 12bA8.A 19X0 1fB0 19X0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1fB0 Cn0 1Cc10 WL0 1qL0 U10 1tz0 2mN0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 U10 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1tz0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qN0 U10 1wn0 Rd0 1wn0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1tz0 U10 1wn0 U10 1tz0 U10 1tz0 U10|21e2","Australia/Sydney|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|40e5","Australia/Adelaide|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 WM0 1qM0 Rc0 1zc0 U00 1tA0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|11e5","Australia/Brisbane|AEST AEDT|-a0 -b0|01010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0|20e5","Australia/Broken_Hill|ACST ACDT|-9u -au|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 14o0 1o00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1tA0 WM0 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|18e3","Australia/Currie|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|746","Australia/Darwin|ACST ACDT|-9u -au|010101010|-293lt xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0|12e4","Australia/Eucla|+0845 +0945|-8J -9J|0101010101010101010|-293kI xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|368","Australia/Hobart|AEST AEDT|-a0 -b0|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-29E80 19X0 10jd0 yL0 1cN0 1cL0 1fB0 19X0 VfB0 1cM0 1o00 Rc0 1wo0 Rc0 1wo0 U00 1wo0 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 11A0 1qM0 WM0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1wo0 WM0 1tA0 WM0 1tA0 U00 1tA0 U00 1tA0 11A0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 11A0 1o00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|21e4","Australia/Lord_Howe|AEST +1030 +1130 +11|-a0 -au -bu -b0|0121212121313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313131313|raC0 1zdu Rb0 1zd0 On0 1zd0 On0 1zd0 On0 1zd0 TXu 1qMu WLu 1tAu WLu 1tAu TXu 1tAu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu 11zu 1o0u 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 11Au 1nXu 1qMu 11zu 1o0u 11zu 1o0u 11zu 1qMu WLu 1qMu 11zu 1o0u WLu 1qMu 14nu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1fzu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu|347","Australia/Lindeman|AEST AEDT|-a0 -b0|010101010101010101010|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 H1A0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0|10","Australia/Melbourne|AEST AEDT|-a0 -b0|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101|-293lX xcX 10jd0 yL0 1cN0 1cL0 1fB0 19X0 17c10 LA0 1C00 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 U00 1qM0 WM0 1qM0 11A0 1tA0 U00 1tA0 U00 1tA0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 11A0 1o00 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 14o0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|39e5","Australia/Perth|AWST AWDT|-80 -90|0101010101010101010|-293jX xcX 10jd0 yL0 1cN0 1cL0 1gSp0 Oo0 l5A0 Oo0 iJA0 G00 zU00 IM0 1qM0 11A0 1o00 11A0|18e5","CET|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|","Pacific/Easter|EMT -07 -06 -05|7h.s 70 60 50|012121212121212121212121212123232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323|-1uSgG.w 1s4IG.w WL0 1zd0 On0 1ip0 11z0 1o10 11z0 1qN0 WL0 1ld0 14n0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 2pA0 11z0 1o10 11z0 1qN0 WL0 1qN0 WL0 1qN0 1cL0 1cN0 11z0 1o10 11z0 1qN0 WL0 1fB0 19X0 1qN0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1ip0 1fz0 1fB0 11z0 1qN0 WL0 1qN0 WL0 1qN0 WL0 1qN0 11z0 1o10 11z0 1o10 11z0 1qN0 WL0 1qN0 17b0 1ip0 11z0 1o10 19X0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1zb0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0|30e2","CST6CDT|CST CDT CWT CPT|60 50 50 50|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261s0 1nX0 11B0 1nX0 SgN0 8x30 iw0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","EET|EET EEST|-20 -30|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|","Europe/Dublin|DMT IST GMT BST IST|p.l -y.D 0 -10 -10|01232323232324242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242424242|-2ax9y.D Rc0 1fzy.D 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 g600 14o0 1wo0 17c0 1io0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","EST|EST|50|0||","EST5EDT|EST EDT EWT EPT|50 40 40 40|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261t0 1nX0 11B0 1nX0 SgN0 8x40 iv0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","Etc/GMT-0|GMT|0|0||","Etc/GMT-1|+01|-10|0||","Pacific/Port_Moresby|+10|-a0|0||25e4","Etc/GMT-11|+11|-b0|0||","Pacific/Tarawa|+12|-c0|0||29e3","Etc/GMT-13|+13|-d0|0||","Etc/GMT-14|+14|-e0|0||","Etc/GMT-2|+02|-20|0||","Etc/GMT-3|+03|-30|0||","Etc/GMT-4|+04|-40|0||","Etc/GMT-5|+05|-50|0||","Etc/GMT-6|+06|-60|0||","Indian/Christmas|+07|-70|0||21e2","Etc/GMT-8|+08|-80|0||","Pacific/Palau|+09|-90|0||21e3","Etc/GMT+1|-01|10|0||","Etc/GMT+10|-10|a0|0||","Etc/GMT+11|-11|b0|0||","Etc/GMT+12|-12|c0|0||","Etc/GMT+3|-03|30|0||","Etc/GMT+4|-04|40|0||","Etc/GMT+5|-05|50|0||","Etc/GMT+6|-06|60|0||","Etc/GMT+7|-07|70|0||","Etc/GMT+8|-08|80|0||","Etc/GMT+9|-09|90|0||","Etc/UTC|UTC|0|0||","Europe/Amsterdam|AMT NST +0120 +0020 CEST CET|-j.w -1j.w -1k -k -20 -10|010101010101010101010101010101010101010101012323234545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545|-2aFcj.w 11b0 1iP0 11A0 1io0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1co0 1io0 1yo0 Pc0 1a00 1fA0 1Bc0 Mo0 1tc0 Uo0 1tA0 U00 1uo0 W00 1s00 VA0 1so0 Vc0 1sM0 UM0 1wo0 Rc0 1u00 Wo0 1rA0 W00 1s00 VA0 1sM0 UM0 1w00 fV0 BCX.w 1tA0 U00 1u00 Wo0 1sm0 601k WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|16e5","Europe/Andorra|WET CET CEST|0 -10 -20|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-UBA0 1xIN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|79e3","Europe/Astrakhan|LMT +03 +04 +05|-3c.c -30 -40 -50|012323232323232323212121212121212121212121212121212121212121212|-1Pcrc.c eUMc.c 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|10e5","Europe/Athens|AMT EET EEST CEST CET|-1y.Q -20 -30 -20 -10|012123434121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2a61x.Q CNbx.Q mn0 kU10 9b0 3Es0 Xa0 1fb0 1dd0 k3X0 Nz0 SCp0 1vc0 SO0 1cM0 1a00 1ao0 1fc0 1a10 1fG0 1cg0 1dX0 1bX0 1cQ0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5","Europe/London|GMT BST BDST|0 -10 -20|0101010101010101010101010101010101010101010101010121212121210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1a00 1qM0 WM0 1qM0 11A0 1o00 WM0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1tA0 IM0 90o0 U00 1tA0 U00 1tA0 U00 1tA0 U00 1tA0 WM0 1qM0 WM0 1qM0 WM0 1tA0 U00 1tA0 U00 1tA0 11z0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 14o0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6","Europe/Belgrade|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19RC0 3IP0 WM0 1fA0 1cM0 1cM0 1rc0 Qo0 1vmo0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Berlin|CET CEST CEMT|-10 -20 -30|01010101010101210101210101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 kL0 Nc0 m10 WM0 1ao0 1cp0 dX0 jz0 Dd0 1io0 17c0 1fA0 1a00 1ehA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e5","Europe/Prague|CET CEST GMT|-10 -20 0|01010101010101010201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 1cM0 1qM0 11c0 mp0 xA0 mn0 17c0 1io0 17c0 1fc0 1ao0 1bNc0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|13e5","Europe/Brussels|WET CET CEST WEST|0 -10 -20 -10|0121212103030303030303030303030303030303030303030303212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ehc0 3zX0 11c0 1iO0 11A0 1o00 11A0 my0 Ic0 1qM0 Rc0 1EM0 UM0 1u00 10o0 1io0 1io0 17c0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a30 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 y00 5Wn0 WM0 1fA0 1cM0 16M0 1iM0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|21e5","Europe/Bucharest|BMT EET EEST|-1I.o -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1xApI.o 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Axc0 On0 1fA0 1a10 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|19e5","Europe/Budapest|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1ip0 17b0 1op0 1tb0 Q2m0 3Ne0 WM0 1fA0 1cM0 1cM0 1oJ0 1dc0 1030 1fA0 1cM0 1cM0 1cM0 1cM0 1fA0 1a00 1iM0 1fA0 8Ha0 Rb0 1wN0 Rb0 1BB0 Lz0 1C20 LB0 SNX0 1a10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5","Europe/Zurich|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-19Lc0 11A0 1o00 11A0 1xG10 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e4","Europe/Chisinau|CMT BMT EET EEST CEST CET MSK MSD|-1T -1I.o -20 -30 -20 -10 -30 -40|012323232323232323234545467676767676767676767323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232323232|-26jdT wGMa.A 20LI.o RA0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 27A0 2en0 39g0 WM0 1fA0 1cM0 V90 1t7z0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 gL0 WO0 1cM0 1cM0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11D0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|67e4","Europe/Copenhagen|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 Tz0 VuO0 60q0 WM0 1fA0 1cM0 1cM0 1cM0 S00 1HA0 Nc0 1C00 Dc0 1Nc0 Ao0 1h5A0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Gibraltar|GMT BST BDST CET CEST|0 -10 -20 -10 -20|010101010101010101010101010101010101010101010101012121212121010121010101010101010101034343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-2axa0 Rc0 1fA0 14M0 1fc0 1g00 1co0 1dc0 1co0 1oo0 1400 1dc0 19A0 1io0 1io0 WM0 1o00 14o0 1o00 17c0 1io0 17c0 1fA0 1a00 1lc0 17c0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1cM0 1io0 17c0 1fA0 1a00 1io0 17c0 1io0 17c0 1fA0 1a00 1io0 1qM0 Dc0 2Rz0 Dc0 1zc0 Oo0 1zc0 Rc0 1wo0 17c0 1iM0 FA0 xB0 1fA0 1a00 14o0 bb0 LA0 xB0 Rc0 1wo0 11A0 1o00 17c0 1fA0 1a00 1fA0 1cM0 1fA0 1a00 17c0 1fA0 1a00 1io0 17c0 1lc0 17c0 1fA0 10Jz0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|30e3","Europe/Helsinki|HMT EET EEST|-1D.N -20 -30|0121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-1WuND.N OULD.N 1dA0 1xGq0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Kaliningrad|CET CEST EET EEST MSK MSD +03|-10 -20 -20 -30 -30 -40 -30|01010101010101232454545454545454543232323232323232323232323232323232323232323262|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 390 7A0 1en0 12N0 1pbb0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|44e4","Europe/Kiev|KMT EET MSK CEST CET MSD EEST|-22.4 -20 -30 -20 -10 -40 -30|0123434252525252525252525256161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc22.4 eUo2.4 rnz0 2Hg0 WM0 1fA0 da0 1v4m0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 Db0 3220 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|34e5","Europe/Kirov|LMT +03 +04 +05|-3i.M -30 -40 -50|01232323232323232321212121212121212121212121212121212121212121|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|48e4","Europe/Lisbon|LMT WET WEST WEMT CET CEST|A.J 0 -10 -20 -10 -20|012121212121212121212121212121212121212121212321232123212321212121212121212121212121212121212121214121212121212121212121212121212124545454212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2le00 aPX0 Sp0 LX0 1vc0 Tc0 1uM0 SM0 1vc0 Tc0 1vc0 SM0 1vc0 6600 1co0 3E00 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 3I00 17c0 1cM0 1cM0 3Fc0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 1tA0 1cM0 1dc0 1400 gL0 IM0 s10 U00 dX0 Rc0 pd0 Rc0 gL0 Oo0 pd0 Rc0 gL0 Oo0 pd0 14o0 1cM0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 3Co0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 pvy0 1cM0 1cM0 1fA0 1cM0 1cM0 1cN0 1cL0 1cN0 1cM0 1cM0 1cM0 1cM0 1cN0 1cL0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e5","Europe/Luxembourg|LMT CET CEST WET WEST WEST WET|-o.A -10 -20 0 -10 -20 -10|0121212134343434343434343434343434343434343434343434565651212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2DG0o.A t6mo.A TB0 1nX0 Up0 1o20 11A0 rW0 CM0 1qP0 R90 1EO0 UK0 1u20 10m0 1ip0 1in0 17e0 19W0 1fB0 1db0 1cp0 1in0 17d0 1fz0 1a10 1in0 1a10 1in0 17f0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Dc0 vA0 60L0 WM0 1fA0 1cM0 17c0 1io0 16M0 1C00 Uo0 1eeo0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4","Europe/Madrid|WET WEST WEMT CET CEST|0 -10 -20 -10 -20|010101010101010101210343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343|-25Td0 19B0 1cL0 1dd0 b1z0 18p0 3HX0 17d0 1fz0 1a10 1io0 1a00 1in0 17d0 iIn0 Hd0 1cL0 bb0 1200 2s20 14n0 5aL0 Mp0 1vz0 17d0 1in0 17d0 1in0 17d0 1in0 17d0 6hX0 11B0 XHX0 1a10 1fz0 1a10 19X0 1cN0 1fz0 1a10 1fC0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|62e5","Europe/Malta|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1co0 17c0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1co0 1cM0 1lA0 Xc0 1qq0 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1o10 11z0 1iN0 19z0 1fB0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4","Europe/Minsk|MMT EET MSK CEST CET MSD EEST +03|-1O -20 -30 -20 -10 -40 -30 -30|01234343252525252525252525261616161616161616161616161616161616161617|-1Pc1O eUnO qNX0 3gQ0 WM0 1fA0 1cM0 Al0 1tsn0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 3Fc0 1cN0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0|19e5","Europe/Monaco|PMT WET WEST WEMT CET CEST|-9.l 0 -10 -20 -10 -20|01212121212121212121212121212121212121212121212121232323232345454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-2nco9.l cNb9.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 2RV0 11z0 11B0 1ze0 WM0 1fA0 1cM0 1fa0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|38e3","Europe/Moscow|MMT MMT MST MDST MSD MSK +05 EET EEST MSK|-2u.h -2v.j -3v.j -4v.j -40 -30 -50 -20 -30 -40|012132345464575454545454545454545458754545454545454545454545454545454545454595|-2ag2u.h 2pyW.W 1bA0 11X0 GN0 1Hb0 c4v.j ik0 3DA0 dz0 15A0 c10 2q10 iM10 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0|16e6","Europe/Paris|PMT WET WEST CEST CET WEMT|-9.l 0 -10 -20 -10 -20|0121212121212121212121212121212121212121212121212123434352543434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434343434|-2nco8.l cNb8.l HA0 19A0 1iM0 11c0 1oo0 Wo0 1rc0 QM0 1EM0 UM0 1u00 10o0 1io0 1wo0 Rc0 1a00 1fA0 1cM0 1cM0 1io0 17c0 1fA0 1a00 1io0 1a00 1io0 17c0 1fA0 1a00 1io0 17c0 1cM0 1cM0 1a00 1io0 1cM0 1cM0 1a00 1fA0 1io0 17c0 1cM0 1cM0 1a00 1fA0 1io0 1qM0 Df0 Ik0 5M30 WM0 1fA0 1cM0 Vx0 hB0 1aq0 16M0 1ekn0 1cL0 1fC0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6","Europe/Riga|RMT LST EET MSK CEST CET MSD EEST|-1A.y -2A.y -20 -30 -20 -10 -40 -30|010102345454536363636363636363727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272727272|-25TzA.y 11A0 1iM0 ko0 gWm0 yDXA.y 2bX0 3fE0 WM0 1fA0 1cM0 1cM0 4m0 1sLy0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cN0 1o00 11A0 1o00 11A0 1qM0 3oo0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|64e4","Europe/Rome|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2arB0 Lz0 1cN0 1db0 1410 1on0 Wp0 1qL0 17d0 1cL0 M3B0 5M20 WM0 1fA0 1cM0 16M0 1iM0 16m0 1de0 1lc0 14m0 1lc0 WO0 1qM0 GTW0 On0 1C10 LA0 1C00 LA0 1EM0 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1C00 LA0 1zc0 Oo0 1C00 LA0 1C00 LA0 1zc0 Oo0 1C00 Oo0 1zc0 Oo0 1fC0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|39e5","Europe/Samara|LMT +03 +04 +05|-3k.k -30 -40 -50|0123232323232323232121232323232323232323232323232323232323212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2y10 14m0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 2sp0 WM0|12e5","Europe/Saratov|LMT +03 +04 +05|-34.i -30 -40 -50|012323232323232321212121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 5810|","Europe/Simferopol|SMT EET MSK CEST CET MSD EEST MSK|-2g -20 -30 -20 -10 -40 -30 -40|012343432525252525252525252161616525252616161616161616161616161616161616172|-1Pc2g eUog rEn0 2qs0 WM0 1fA0 1cM0 3V0 1u0L0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 4eL0 1cL0 1cN0 1cL0 1cN0 dX0 WL0 1cN0 1cL0 1fB0 1o30 11B0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4","Europe/Sofia|EET CET CEST EEST|-20 -10 -20 -30|01212103030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030|-168L0 WM0 1fA0 1cM0 1cM0 1cN0 1mKH0 1dd0 1fb0 1ap0 1fb0 1a20 1fy0 1a30 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cK0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 1nX0 11E0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5","Europe/Stockholm|CET CEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2azC0 TB0 2yDe0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|15e5","Europe/Tallinn|TMT CET CEST EET MSK MSD EEST|-1D -10 -20 -20 -30 -40 -30|012103421212454545454545454546363636363636363636363636363636363636363636363636363636363636363636363636363636363636363636363|-26oND teD 11A0 1Ta0 4rXl KSLD 2FX0 2Jg0 WM0 1fA0 1cM0 18J0 1sTX0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o10 11A0 1qM0 5QM0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|41e4","Europe/Tirane|LMT CET CEST|-1j.k -10 -20|01212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2glBj.k 14pcj.k 5LC0 WM0 4M0 1fCK0 10n0 1op0 11z0 1pd0 11z0 1qN0 WL0 1qp0 Xb0 1qp0 Xb0 1qp0 11z0 1lB0 11z0 1qN0 11z0 1iN0 16n0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|42e4","Europe/Ulyanovsk|LMT +03 +04 +05 +02|-3d.A -30 -40 -50 -20|01232323232323232321214121212121212121212121212121212121212121212|-22WM0 qH90 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1fA0 2pB0 IM0 rX0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 3rd0|13e5","Europe/Uzhgorod|CET CEST MSK MSD EET EEST|-10 -20 -30 -40 -20 -30|010101023232323232323232320454545454545454545454545454545454545454545454545454545454545454545454545454545454545454545454|-1cqL0 6i00 WM0 1fA0 1cM0 1ml0 1Cp0 1r3W0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1Q00 1Nf0 2pw0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e4","Europe/Vienna|CET CEST|-10 -20|0101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 3KM0 14o0 LA00 6i00 WM0 1fA0 1cM0 1cM0 1cM0 400 2qM0 1ao0 1co0 1cM0 1io0 17c0 1gHa0 19X0 1cP0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|18e5","Europe/Vilnius|WMT KMT CET EET MSK CEST MSD EEST|-1o -1z.A -10 -20 -30 -20 -40 -30|012324525254646464646464646473737373737373737352537373737373737373737373737373737373737373737373737373737373737373737373|-293do 6ILM.o 1Ooz.A zz0 Mfd0 29W0 3is0 WM0 1fA0 1cM0 LV0 1tgL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11B0 1o00 11A0 1qM0 8io0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|54e4","Europe/Volgograd|LMT +03 +04 +05|-2V.E -30 -40 -50|012323232323232321212121212121212121212121212121212121212121212|-21IqV.E psLV.E 23CL0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 2pB0 1cM0 1cM0 1cM0 1fA0 1cM0 3Co0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 8Hz0 9Jd0|10e5","Europe/Warsaw|WMT CET CEST EET EEST|-1o -10 -20 -20 -30|012121234312121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121|-2ctdo 1LXo 11d0 1iO0 11A0 1o00 11A0 1on0 11A0 6zy0 HWP0 5IM0 WM0 1fA0 1cM0 1dz0 1mL0 1en0 15B0 1aq0 1nA0 11A0 1io0 17c0 1fA0 1a00 iDX0 LA0 1cM0 1cM0 1C00 Oo0 1cM0 1cM0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1C00 LA0 uso0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cN0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e5","Europe/Zaporozhye|+0220 EET MSK CEST CET MSD EEST|-2k -20 -30 -20 -10 -40 -30|01234342525252525252525252526161616161616161616161616161616161616161616161616161616161616161616161616161616161616161616161|-1Pc2k eUok rdb0 2RE0 WM0 1fA0 8m0 1v9a0 1db0 1cN0 1db0 1cN0 1db0 1dd0 1cO0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cK0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cQ0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|77e4","HST|HST|a0|0||","Indian/Chagos|LMT +05 +06|-4N.E -50 -60|012|-2xosN.E 3AGLN.E|30e2","Indian/Cocos|+0630|-6u|0||596","Indian/Kerguelen|-00 +05|0 -50|01|-MG00|130","Indian/Mahe|LMT +04|-3F.M -40|01|-2yO3F.M|79e3","Indian/Maldives|MMT +05|-4S -50|01|-olgS|35e4","Indian/Mauritius|LMT +04 +05|-3O -40 -50|012121|-2xorO 34unO 14L0 12kr0 11z0|15e4","Indian/Reunion|LMT +04|-3F.Q -40|01|-2mDDF.Q|84e4","Pacific/Kwajalein|+11 +10 +09 -12 +12|-b0 -a0 -90 c0 -c0|012034|-1kln0 akp0 6Up0 12ry0 Wan0|14e3","MET|MET MEST|-10 -20|01010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-2aFe0 11d0 1iO0 11A0 1o00 11A0 Qrc0 6i00 WM0 1fA0 1cM0 1cM0 1cM0 16M0 1gMM0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|","MST|MST|70|0||","MST7MDT|MST MDT MWT MPT|70 60 60 60|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261r0 1nX0 11B0 1nX0 SgN0 8x20 ix0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","Pacific/Chatham|+1215 +1245 +1345|-cf -cJ -dJ|012121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212121212|-WqAf 1adef IM0 1C00 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1qM0 14o0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1lc0 14o0 1lc0 14o0 1lc0 17c0 1io0 17c0 1io0 17c0 1io0 17c0 1io0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|600","Pacific/Apia|LMT -1130 -11 -10 +14 +13|bq.U bu b0 a0 -e0 -d0|01232345454545454545454545454545454545454545454545454545454|-2nDMx.4 1yW03.4 2rRbu 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1io0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|37e3","Pacific/Bougainville|+10 +09 +11|-a0 -90 -b0|0102|-16Wy0 7CN0 2MQp0|18e4","Pacific/Chuuk|+10 +09|-a0 -90|01010|-2ewy0 axB0 RVX0 axd0|49e3","Pacific/Efate|LMT +11 +12|-bd.g -b0 -c0|0121212121212121212121|-2l9nd.g 2Szcd.g 1cL0 1oN0 10L0 1fB0 19X0 1fB0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1fB0 Lz0 1Nd0 An0|66e3","Pacific/Enderbury|-12 -11 +13|c0 b0 -d0|012|nIc0 B7X0|1","Pacific/Fakaofo|-11 +13|b0 -d0|01|1Gfn0|483","Pacific/Fiji|LMT +12 +13|-bT.I -c0 -d0|0121212121212121212121212121212121212121212121212121212121212121|-2bUzT.I 3m8NT.I LA0 1EM0 IM0 nJc0 LA0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 s00 20o0 pc0 20o0 s00 20o0 pc0 20o0 pc0 20o0 pc0 20o0 pc0 20o0 s00 1VA0 s00 20o0 pc0 20o0 pc0 20o0 pc0 20o0 pc0 20o0 s00 20o0 pc0 20o0 pc0 20o0 pc0 20o0 pc0 20o0 s00 1VA0 s00|88e4","Pacific/Galapagos|LMT -05 -06|5W.o 50 60|01212|-1yVS1.A 2dTz1.A gNd0 rz0|25e3","Pacific/Gambier|LMT -09|8X.M 90|01|-2jof0.c|125","Pacific/Guadalcanal|LMT +11|-aD.M -b0|01|-2joyD.M|11e4","Pacific/Guam|GST +09 GDT ChST|-a0 -90 -b0 -a0|01020202020202020203|-18jK0 6pB0 AhB0 3QL0 g2p0 3p91 WOX rX0 1zd0 Rb0 1wp0 Rb0 5xd0 rX0 5sN0 zb1 1C0X On0 ULb0|17e4","Pacific/Honolulu|HST HDT HWT HPT HST|au 9u 9u 9u a0|0102304|-1thLu 8x0 lef0 8wWu iAu 46p0|37e4","Pacific/Kiritimati|-1040 -10 +14|aE a0 -e0|012|nIaE B7Xk|51e2","Pacific/Kosrae|+11 +09 +10 +12|-b0 -90 -a0 -c0|01021030|-2ewz0 axC0 HBy0 akp0 axd0 WOK0 1bdz0|66e2","Pacific/Majuro|+11 +09 +10 +12|-b0 -90 -a0 -c0|0102103|-2ewz0 axC0 HBy0 akp0 6RB0 12um0|28e3","Pacific/Marquesas|LMT -0930|9i 9u|01|-2joeG|86e2","Pacific/Pago_Pago|LMT SST|bm.M b0|01|-2nDMB.c|37e2","Pacific/Nauru|LMT +1130 +09 +12|-b7.E -bu -90 -c0|01213|-1Xdn7.E QCnB.E 7mqu 1lnbu|10e3","Pacific/Niue|-1120 -1130 -11|bk bu b0|012|-KfME 17y0a|12e2","Pacific/Norfolk|+1112 +1130 +1230 +11 +12|-bc -bu -cu -b0 -c0|012134343434343434343434343434343434343434|-Kgbc W01G Oo0 1COo0 9Jcu 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|25e4","Pacific/Noumea|LMT +11 +12|-b5.M -b0 -c0|01212121|-2l9n5.M 2EqM5.M xX0 1PB0 yn0 HeP0 Ao0|98e3","Pacific/Pitcairn|-0830 -08|8u 80|01|18Vku|56","Pacific/Pohnpei|+11 +09 +10|-b0 -90 -a0|010210|-2ewz0 axC0 HBy0 akp0 axd0|34e3","Pacific/Rarotonga|-1030 -0930 -10|au 9u a0|012121212121212121212121212|lyWu IL0 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Onu 1zcu Rbu 1zcu Onu 1zcu Onu 1zcu Onu|13e3","Pacific/Tahiti|LMT -10|9W.g a0|01|-2joe1.I|18e4","Pacific/Tongatapu|+1220 +13 +14|-ck -d0 -e0|0121212121|-1aB0k 2n5dk 15A0 1wo0 xz0 1Q10 xz0 zWN0 s00|75e3","PST8PDT|PST PDT PWT PPT|80 70 70 70|010102301010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|-261q0 1nX0 11B0 1nX0 SgN0 8x10 iy0 QwN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1cN0 1cL0 1cN0 1cL0 s10 1Vz0 LB0 1BX0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 1cN0 1fz0 1a10 1fz0 1cN0 1cL0 1cN0 1cL0 1cN0 1cL0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|","WET|WET WEST|0 -10|010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010|hDB0 1a00 1fA0 1cM0 1cM0 1cM0 1fA0 1a00 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|"],links:["Africa/Abidjan|Africa/Bamako","Africa/Abidjan|Africa/Banjul","Africa/Abidjan|Africa/Conakry","Africa/Abidjan|Africa/Dakar","Africa/Abidjan|Africa/Freetown","Africa/Abidjan|Africa/Lome","Africa/Abidjan|Africa/Nouakchott","Africa/Abidjan|Africa/Ouagadougou","Africa/Abidjan|Africa/Timbuktu","Africa/Abidjan|Atlantic/St_Helena","Africa/Cairo|Egypt","Africa/Johannesburg|Africa/Maseru","Africa/Johannesburg|Africa/Mbabane","Africa/Lagos|Africa/Bangui","Africa/Lagos|Africa/Brazzaville","Africa/Lagos|Africa/Douala","Africa/Lagos|Africa/Kinshasa","Africa/Lagos|Africa/Libreville","Africa/Lagos|Africa/Luanda","Africa/Lagos|Africa/Malabo","Africa/Lagos|Africa/Niamey","Africa/Lagos|Africa/Porto-Novo","Africa/Maputo|Africa/Blantyre","Africa/Maputo|Africa/Bujumbura","Africa/Maputo|Africa/Gaborone","Africa/Maputo|Africa/Harare","Africa/Maputo|Africa/Kigali","Africa/Maputo|Africa/Lubumbashi","Africa/Maputo|Africa/Lusaka","Africa/Nairobi|Africa/Addis_Ababa","Africa/Nairobi|Africa/Asmara","Africa/Nairobi|Africa/Asmera","Africa/Nairobi|Africa/Dar_es_Salaam","Africa/Nairobi|Africa/Djibouti","Africa/Nairobi|Africa/Kampala","Africa/Nairobi|Africa/Mogadishu","Africa/Nairobi|Indian/Antananarivo","Africa/Nairobi|Indian/Comoro","Africa/Nairobi|Indian/Mayotte","Africa/Tripoli|Libya","America/Adak|America/Atka","America/Adak|US/Aleutian","America/Anchorage|US/Alaska","America/Argentina/Buenos_Aires|America/Buenos_Aires","America/Argentina/Catamarca|America/Argentina/ComodRivadavia","America/Argentina/Catamarca|America/Catamarca","America/Argentina/Cordoba|America/Cordoba","America/Argentina/Cordoba|America/Rosario","America/Argentina/Jujuy|America/Jujuy","America/Argentina/Mendoza|America/Mendoza","America/Atikokan|America/Coral_Harbour","America/Chicago|US/Central","America/Curacao|America/Aruba","America/Curacao|America/Kralendijk","America/Curacao|America/Lower_Princes","America/Denver|America/Shiprock","America/Denver|Navajo","America/Denver|US/Mountain","America/Detroit|US/Michigan","America/Edmonton|Canada/Mountain","America/Fort_Wayne|America/Indiana/Indianapolis","America/Fort_Wayne|America/Indianapolis","America/Fort_Wayne|US/East-Indiana","America/Godthab|America/Nuuk","America/Halifax|Canada/Atlantic","America/Havana|Cuba","America/Indiana/Knox|America/Knox_IN","America/Indiana/Knox|US/Indiana-Starke","America/Jamaica|Jamaica","America/Kentucky/Louisville|America/Louisville","America/Los_Angeles|US/Pacific","America/Los_Angeles|US/Pacific-New","America/Manaus|Brazil/West","America/Mazatlan|Mexico/BajaSur","America/Mexico_City|Mexico/General","America/New_York|US/Eastern","America/Noronha|Brazil/DeNoronha","America/Panama|America/Cayman","America/Phoenix|US/Arizona","America/Port_of_Spain|America/Anguilla","America/Port_of_Spain|America/Antigua","America/Port_of_Spain|America/Dominica","America/Port_of_Spain|America/Grenada","America/Port_of_Spain|America/Guadeloupe","America/Port_of_Spain|America/Marigot","America/Port_of_Spain|America/Montserrat","America/Port_of_Spain|America/St_Barthelemy","America/Port_of_Spain|America/St_Kitts","America/Port_of_Spain|America/St_Lucia","America/Port_of_Spain|America/St_Thomas","America/Port_of_Spain|America/St_Vincent","America/Port_of_Spain|America/Tortola","America/Port_of_Spain|America/Virgin","America/Regina|Canada/Saskatchewan","America/Rio_Branco|America/Porto_Acre","America/Rio_Branco|Brazil/Acre","America/Santiago|Chile/Continental","America/Sao_Paulo|Brazil/East","America/St_Johns|Canada/Newfoundland","America/Tijuana|America/Ensenada","America/Tijuana|America/Santa_Isabel","America/Tijuana|Mexico/BajaNorte","America/Toronto|America/Montreal","America/Toronto|Canada/Eastern","America/Vancouver|Canada/Pacific","America/Whitehorse|Canada/Yukon","America/Winnipeg|Canada/Central","Asia/Ashgabat|Asia/Ashkhabad","Asia/Bangkok|Asia/Phnom_Penh","Asia/Bangkok|Asia/Vientiane","Asia/Dhaka|Asia/Dacca","Asia/Dubai|Asia/Muscat","Asia/Ho_Chi_Minh|Asia/Saigon","Asia/Hong_Kong|Hongkong","Asia/Jerusalem|Asia/Tel_Aviv","Asia/Jerusalem|Israel","Asia/Kathmandu|Asia/Katmandu","Asia/Kolkata|Asia/Calcutta","Asia/Kuala_Lumpur|Asia/Singapore","Asia/Kuala_Lumpur|Singapore","Asia/Macau|Asia/Macao","Asia/Makassar|Asia/Ujung_Pandang","Asia/Nicosia|Europe/Nicosia","Asia/Qatar|Asia/Bahrain","Asia/Rangoon|Asia/Yangon","Asia/Riyadh|Asia/Aden","Asia/Riyadh|Asia/Kuwait","Asia/Seoul|ROK","Asia/Shanghai|Asia/Chongqing","Asia/Shanghai|Asia/Chungking","Asia/Shanghai|Asia/Harbin","Asia/Shanghai|PRC","Asia/Taipei|ROC","Asia/Tehran|Iran","Asia/Thimphu|Asia/Thimbu","Asia/Tokyo|Japan","Asia/Ulaanbaatar|Asia/Ulan_Bator","Asia/Urumqi|Asia/Kashgar","Atlantic/Faroe|Atlantic/Faeroe","Atlantic/Reykjavik|Iceland","Atlantic/South_Georgia|Etc/GMT+2","Australia/Adelaide|Australia/South","Australia/Brisbane|Australia/Queensland","Australia/Broken_Hill|Australia/Yancowinna","Australia/Darwin|Australia/North","Australia/Hobart|Australia/Tasmania","Australia/Lord_Howe|Australia/LHI","Australia/Melbourne|Australia/Victoria","Australia/Perth|Australia/West","Australia/Sydney|Australia/ACT","Australia/Sydney|Australia/Canberra","Australia/Sydney|Australia/NSW","Etc/GMT-0|Etc/GMT","Etc/GMT-0|Etc/GMT+0","Etc/GMT-0|Etc/GMT0","Etc/GMT-0|Etc/Greenwich","Etc/GMT-0|GMT","Etc/GMT-0|GMT+0","Etc/GMT-0|GMT-0","Etc/GMT-0|GMT0","Etc/GMT-0|Greenwich","Etc/UTC|Etc/UCT","Etc/UTC|Etc/Universal","Etc/UTC|Etc/Zulu","Etc/UTC|UCT","Etc/UTC|UTC","Etc/UTC|Universal","Etc/UTC|Zulu","Europe/Belgrade|Europe/Ljubljana","Europe/Belgrade|Europe/Podgorica","Europe/Belgrade|Europe/Sarajevo","Europe/Belgrade|Europe/Skopje","Europe/Belgrade|Europe/Zagreb","Europe/Chisinau|Europe/Tiraspol","Europe/Dublin|Eire","Europe/Helsinki|Europe/Mariehamn","Europe/Istanbul|Asia/Istanbul","Europe/Istanbul|Turkey","Europe/Lisbon|Portugal","Europe/London|Europe/Belfast","Europe/London|Europe/Guernsey","Europe/London|Europe/Isle_of_Man","Europe/London|Europe/Jersey","Europe/London|GB","Europe/London|GB-Eire","Europe/Moscow|W-SU","Europe/Oslo|Arctic/Longyearbyen","Europe/Oslo|Atlantic/Jan_Mayen","Europe/Prague|Europe/Bratislava","Europe/Rome|Europe/San_Marino","Europe/Rome|Europe/Vatican","Europe/Warsaw|Poland","Europe/Zurich|Europe/Busingen","Europe/Zurich|Europe/Vaduz","Indian/Christmas|Etc/GMT-7","Pacific/Auckland|Antarctica/McMurdo","Pacific/Auckland|Antarctica/South_Pole","Pacific/Auckland|NZ","Pacific/Chatham|NZ-CHAT","Pacific/Chuuk|Pacific/Truk","Pacific/Chuuk|Pacific/Yap","Pacific/Easter|Chile/EasterIsland","Pacific/Guam|Pacific/Saipan","Pacific/Honolulu|Pacific/Johnston","Pacific/Honolulu|US/Hawaii","Pacific/Kwajalein|Kwajalein","Pacific/Pago_Pago|Pacific/Midway","Pacific/Pago_Pago|Pacific/Samoa","Pacific/Pago_Pago|US/Samoa","Pacific/Palau|Etc/GMT-9","Pacific/Pohnpei|Pacific/Ponape","Pacific/Port_Moresby|Etc/GMT-10","Pacific/Tarawa|Etc/GMT-12","Pacific/Tarawa|Pacific/Funafuti","Pacific/Tarawa|Pacific/Wake","Pacific/Tarawa|Pacific/Wallis"],countries:["AD|Europe/Andorra","AE|Asia/Dubai","AF|Asia/Kabul","AG|America/Port_of_Spain America/Antigua","AI|America/Port_of_Spain America/Anguilla","AL|Europe/Tirane","AM|Asia/Yerevan","AO|Africa/Lagos Africa/Luanda","AQ|Antarctica/Casey Antarctica/Davis Antarctica/DumontDUrville Antarctica/Mawson Antarctica/Palmer Antarctica/Rothera Antarctica/Syowa Antarctica/Troll Antarctica/Vostok Pacific/Auckland Antarctica/McMurdo","AR|America/Argentina/Buenos_Aires America/Argentina/Cordoba America/Argentina/Salta America/Argentina/Jujuy America/Argentina/Tucuman America/Argentina/Catamarca America/Argentina/La_Rioja America/Argentina/San_Juan America/Argentina/Mendoza America/Argentina/San_Luis America/Argentina/Rio_Gallegos America/Argentina/Ushuaia","AS|Pacific/Pago_Pago","AT|Europe/Vienna","AU|Australia/Lord_Howe Antarctica/Macquarie Australia/Hobart Australia/Currie Australia/Melbourne Australia/Sydney Australia/Broken_Hill Australia/Brisbane Australia/Lindeman Australia/Adelaide Australia/Darwin Australia/Perth Australia/Eucla","AW|America/Curacao America/Aruba","AX|Europe/Helsinki Europe/Mariehamn","AZ|Asia/Baku","BA|Europe/Belgrade Europe/Sarajevo","BB|America/Barbados","BD|Asia/Dhaka","BE|Europe/Brussels","BF|Africa/Abidjan Africa/Ouagadougou","BG|Europe/Sofia","BH|Asia/Qatar Asia/Bahrain","BI|Africa/Maputo Africa/Bujumbura","BJ|Africa/Lagos Africa/Porto-Novo","BL|America/Port_of_Spain America/St_Barthelemy","BM|Atlantic/Bermuda","BN|Asia/Brunei","BO|America/La_Paz","BQ|America/Curacao America/Kralendijk","BR|America/Noronha America/Belem America/Fortaleza America/Recife America/Araguaina America/Maceio America/Bahia America/Sao_Paulo America/Campo_Grande America/Cuiaba America/Santarem America/Porto_Velho America/Boa_Vista America/Manaus America/Eirunepe America/Rio_Branco","BS|America/Nassau","BT|Asia/Thimphu","BW|Africa/Maputo Africa/Gaborone","BY|Europe/Minsk","BZ|America/Belize","CA|America/St_Johns America/Halifax America/Glace_Bay America/Moncton America/Goose_Bay America/Blanc-Sablon America/Toronto America/Nipigon America/Thunder_Bay America/Iqaluit America/Pangnirtung America/Atikokan America/Winnipeg America/Rainy_River America/Resolute America/Rankin_Inlet America/Regina America/Swift_Current America/Edmonton America/Cambridge_Bay America/Yellowknife America/Inuvik America/Creston America/Dawson_Creek America/Fort_Nelson America/Vancouver America/Whitehorse America/Dawson","CC|Indian/Cocos","CD|Africa/Maputo Africa/Lagos Africa/Kinshasa Africa/Lubumbashi","CF|Africa/Lagos Africa/Bangui","CG|Africa/Lagos Africa/Brazzaville","CH|Europe/Zurich","CI|Africa/Abidjan","CK|Pacific/Rarotonga","CL|America/Santiago America/Punta_Arenas Pacific/Easter","CM|Africa/Lagos Africa/Douala","CN|Asia/Shanghai Asia/Urumqi","CO|America/Bogota","CR|America/Costa_Rica","CU|America/Havana","CV|Atlantic/Cape_Verde","CW|America/Curacao","CX|Indian/Christmas","CY|Asia/Nicosia Asia/Famagusta","CZ|Europe/Prague","DE|Europe/Zurich Europe/Berlin Europe/Busingen","DJ|Africa/Nairobi Africa/Djibouti","DK|Europe/Copenhagen","DM|America/Port_of_Spain America/Dominica","DO|America/Santo_Domingo","DZ|Africa/Algiers","EC|America/Guayaquil Pacific/Galapagos","EE|Europe/Tallinn","EG|Africa/Cairo","EH|Africa/El_Aaiun","ER|Africa/Nairobi Africa/Asmara","ES|Europe/Madrid Africa/Ceuta Atlantic/Canary","ET|Africa/Nairobi Africa/Addis_Ababa","FI|Europe/Helsinki","FJ|Pacific/Fiji","FK|Atlantic/Stanley","FM|Pacific/Chuuk Pacific/Pohnpei Pacific/Kosrae","FO|Atlantic/Faroe","FR|Europe/Paris","GA|Africa/Lagos Africa/Libreville","GB|Europe/London","GD|America/Port_of_Spain America/Grenada","GE|Asia/Tbilisi","GF|America/Cayenne","GG|Europe/London Europe/Guernsey","GH|Africa/Accra","GI|Europe/Gibraltar","GL|America/Godthab America/Danmarkshavn America/Scoresbysund America/Thule","GM|Africa/Abidjan Africa/Banjul","GN|Africa/Abidjan Africa/Conakry","GP|America/Port_of_Spain America/Guadeloupe","GQ|Africa/Lagos Africa/Malabo","GR|Europe/Athens","GS|Atlantic/South_Georgia","GT|America/Guatemala","GU|Pacific/Guam","GW|Africa/Bissau","GY|America/Guyana","HK|Asia/Hong_Kong","HN|America/Tegucigalpa","HR|Europe/Belgrade Europe/Zagreb","HT|America/Port-au-Prince","HU|Europe/Budapest","ID|Asia/Jakarta Asia/Pontianak Asia/Makassar Asia/Jayapura","IE|Europe/Dublin","IL|Asia/Jerusalem","IM|Europe/London Europe/Isle_of_Man","IN|Asia/Kolkata","IO|Indian/Chagos","IQ|Asia/Baghdad","IR|Asia/Tehran","IS|Atlantic/Reykjavik","IT|Europe/Rome","JE|Europe/London Europe/Jersey","JM|America/Jamaica","JO|Asia/Amman","JP|Asia/Tokyo","KE|Africa/Nairobi","KG|Asia/Bishkek","KH|Asia/Bangkok Asia/Phnom_Penh","KI|Pacific/Tarawa Pacific/Enderbury Pacific/Kiritimati","KM|Africa/Nairobi Indian/Comoro","KN|America/Port_of_Spain America/St_Kitts","KP|Asia/Pyongyang","KR|Asia/Seoul","KW|Asia/Riyadh Asia/Kuwait","KY|America/Panama America/Cayman","KZ|Asia/Almaty Asia/Qyzylorda Asia/Qostanay Asia/Aqtobe Asia/Aqtau Asia/Atyrau Asia/Oral","LA|Asia/Bangkok Asia/Vientiane","LB|Asia/Beirut","LC|America/Port_of_Spain America/St_Lucia","LI|Europe/Zurich Europe/Vaduz","LK|Asia/Colombo","LR|Africa/Monrovia","LS|Africa/Johannesburg Africa/Maseru","LT|Europe/Vilnius","LU|Europe/Luxembourg","LV|Europe/Riga","LY|Africa/Tripoli","MA|Africa/Casablanca","MC|Europe/Monaco","MD|Europe/Chisinau","ME|Europe/Belgrade Europe/Podgorica","MF|America/Port_of_Spain America/Marigot","MG|Africa/Nairobi Indian/Antananarivo","MH|Pacific/Majuro Pacific/Kwajalein","MK|Europe/Belgrade Europe/Skopje","ML|Africa/Abidjan Africa/Bamako","MM|Asia/Yangon","MN|Asia/Ulaanbaatar Asia/Hovd Asia/Choibalsan","MO|Asia/Macau","MP|Pacific/Guam Pacific/Saipan","MQ|America/Martinique","MR|Africa/Abidjan Africa/Nouakchott","MS|America/Port_of_Spain America/Montserrat","MT|Europe/Malta","MU|Indian/Mauritius","MV|Indian/Maldives","MW|Africa/Maputo Africa/Blantyre","MX|America/Mexico_City America/Cancun America/Merida America/Monterrey America/Matamoros America/Mazatlan America/Chihuahua America/Ojinaga America/Hermosillo America/Tijuana America/Bahia_Banderas","MY|Asia/Kuala_Lumpur Asia/Kuching","MZ|Africa/Maputo","NA|Africa/Windhoek","NC|Pacific/Noumea","NE|Africa/Lagos Africa/Niamey","NF|Pacific/Norfolk","NG|Africa/Lagos","NI|America/Managua","NL|Europe/Amsterdam","NO|Europe/Oslo","NP|Asia/Kathmandu","NR|Pacific/Nauru","NU|Pacific/Niue","NZ|Pacific/Auckland Pacific/Chatham","OM|Asia/Dubai Asia/Muscat","PA|America/Panama","PE|America/Lima","PF|Pacific/Tahiti Pacific/Marquesas Pacific/Gambier","PG|Pacific/Port_Moresby Pacific/Bougainville","PH|Asia/Manila","PK|Asia/Karachi","PL|Europe/Warsaw","PM|America/Miquelon","PN|Pacific/Pitcairn","PR|America/Puerto_Rico","PS|Asia/Gaza Asia/Hebron","PT|Europe/Lisbon Atlantic/Madeira Atlantic/Azores","PW|Pacific/Palau","PY|America/Asuncion","QA|Asia/Qatar","RE|Indian/Reunion","RO|Europe/Bucharest","RS|Europe/Belgrade","RU|Europe/Kaliningrad Europe/Moscow Europe/Simferopol Europe/Kirov Europe/Astrakhan Europe/Volgograd Europe/Saratov Europe/Ulyanovsk Europe/Samara Asia/Yekaterinburg Asia/Omsk Asia/Novosibirsk Asia/Barnaul Asia/Tomsk Asia/Novokuznetsk Asia/Krasnoyarsk Asia/Irkutsk Asia/Chita Asia/Yakutsk Asia/Khandyga Asia/Vladivostok Asia/Ust-Nera Asia/Magadan Asia/Sakhalin Asia/Srednekolymsk Asia/Kamchatka Asia/Anadyr","RW|Africa/Maputo Africa/Kigali","SA|Asia/Riyadh","SB|Pacific/Guadalcanal","SC|Indian/Mahe","SD|Africa/Khartoum","SE|Europe/Stockholm","SG|Asia/Singapore","SH|Africa/Abidjan Atlantic/St_Helena","SI|Europe/Belgrade Europe/Ljubljana","SJ|Europe/Oslo Arctic/Longyearbyen","SK|Europe/Prague Europe/Bratislava","SL|Africa/Abidjan Africa/Freetown","SM|Europe/Rome Europe/San_Marino","SN|Africa/Abidjan Africa/Dakar","SO|Africa/Nairobi Africa/Mogadishu","SR|America/Paramaribo","SS|Africa/Juba","ST|Africa/Sao_Tome","SV|America/El_Salvador","SX|America/Curacao America/Lower_Princes","SY|Asia/Damascus","SZ|Africa/Johannesburg Africa/Mbabane","TC|America/Grand_Turk","TD|Africa/Ndjamena","TF|Indian/Reunion Indian/Kerguelen","TG|Africa/Abidjan Africa/Lome","TH|Asia/Bangkok","TJ|Asia/Dushanbe","TK|Pacific/Fakaofo","TL|Asia/Dili","TM|Asia/Ashgabat","TN|Africa/Tunis","TO|Pacific/Tongatapu","TR|Europe/Istanbul","TT|America/Port_of_Spain","TV|Pacific/Funafuti","TW|Asia/Taipei","TZ|Africa/Nairobi Africa/Dar_es_Salaam","UA|Europe/Simferopol Europe/Kiev Europe/Uzhgorod Europe/Zaporozhye","UG|Africa/Nairobi Africa/Kampala","UM|Pacific/Pago_Pago Pacific/Wake Pacific/Honolulu Pacific/Midway","US|America/New_York America/Detroit America/Kentucky/Louisville America/Kentucky/Monticello America/Indiana/Indianapolis America/Indiana/Vincennes America/Indiana/Winamac America/Indiana/Marengo America/Indiana/Petersburg America/Indiana/Vevay America/Chicago America/Indiana/Tell_City America/Indiana/Knox America/Menominee America/North_Dakota/Center America/North_Dakota/New_Salem America/North_Dakota/Beulah America/Denver America/Boise America/Phoenix America/Los_Angeles America/Anchorage America/Juneau America/Sitka America/Metlakatla America/Yakutat America/Nome America/Adak Pacific/Honolulu","UY|America/Montevideo","UZ|Asia/Samarkand Asia/Tashkent","VA|Europe/Rome Europe/Vatican","VC|America/Port_of_Spain America/St_Vincent","VE|America/Caracas","VG|America/Port_of_Spain America/Tortola","VI|America/Port_of_Spain America/St_Thomas","VN|Asia/Bangkok Asia/Ho_Chi_Minh","VU|Pacific/Efate","WF|Pacific/Wallis","WS|Pacific/Apia","YE|Asia/Riyadh Asia/Aden","YT|Africa/Nairobi Indian/Mayotte","ZA|Africa/Johannesburg","ZM|Africa/Maputo Africa/Lusaka","ZW|Africa/Maputo Africa/Harare"]}),c});


/*! jquery-dateformat 01-08-2019 */

var DateFormat={};!function(e){var I=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],O=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],v=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],w=["January","February","March","April","May","June","July","August","September","October","November","December"],a={Jan:"01",Feb:"02",Mar:"03",Apr:"04",May:"05",Jun:"06",Jul:"07",Aug:"08",Sep:"09",Oct:"10",Nov:"11",Dec:"12"},u=/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.?\d{0,3}[Z\-+]?(\d{2}:?\d{2})?/;DateFormat.format=function(){function o(e){return a[e]||e}function i(e){var a,r,t,n,s,o=e,i="";return-1!==o.indexOf(".")&&(o=(n=o.split("."))[0],i=n[n.length-1]),3<=(s=o.split(":")).length?(a=s[0],r=s[1],t=s[2].replace(/\s.+/,"").replace(/[a-z]/gi,""),{time:o=o.replace(/\s.+/,"").replace(/[a-z]/gi,""),hour:a,minute:r,second:t,millis:i}):{time:"",hour:"",minute:"",second:"",millis:""}}function D(e,a){for(var r=a-String(e).length,t=0;t<r;t++)e="0"+e;return e}return{parseDate:function(e){var a,r,t={date:null,year:null,month:null,dayOfMonth:null,dayOfWeek:null,time:null};if("number"==typeof e)return this.parseDate(new Date(e));if("function"==typeof e.getFullYear)t.year=String(e.getFullYear()),t.month=String(e.getMonth()+1),t.dayOfMonth=String(e.getDate()),t.time=i(e.toTimeString()+"."+e.getMilliseconds());else if(-1!=e.search(u))a=e.split(/[T\+-]/),t.year=a[0],t.month=a[1],t.dayOfMonth=a[2],t.time=i(a[3].split(".")[0]);else switch(6===(a=e.split(" ")).length&&isNaN(a[5])&&(a[a.length]="()"),a.length){case 6:t.year=a[5],t.month=o(a[1]),t.dayOfMonth=a[2],t.time=i(a[3]);break;case 2:r=a[0].split("-"),t.year=r[0],t.month=r[1],t.dayOfMonth=r[2],t.time=i(a[1]);break;case 7:case 9:case 10:t.year=a[3];var n=parseInt(a[1]),s=parseInt(a[2]);n&&!s?(t.month=o(a[2]),t.dayOfMonth=a[1]):(t.month=o(a[1]),t.dayOfMonth=a[2]),t.time=i(a[4]);break;case 1:r=a[0].split(""),t.year=r[0]+r[1]+r[2]+r[3],t.month=r[5]+r[6],t.dayOfMonth=r[8]+r[9],t.time=i(r[13]+r[14]+r[15]+r[16]+r[17]+r[18]+r[19]+r[20]);break;default:return null}return t.time?t.date=new Date(t.year,t.month-1,t.dayOfMonth,t.time.hour,t.time.minute,t.time.second,t.time.millis):t.date=new Date(t.year,t.month-1,t.dayOfMonth),t.dayOfWeek=String(t.date.getDay()),t},date:function(a,e){try{var r=this.parseDate(a);if(null===r)return a;for(var t,n=r.year,s=r.month,o=r.dayOfMonth,i=r.dayOfWeek,u=r.time,c="",h="",l="",m=!1,y=0;y<e.length;y++){var d=e.charAt(y),f=e.charAt(y+1);if(m)"'"==d?(h+=""===c?"'":c,c="",m=!1):c+=d;else switch(l="",c+=d){case"ddd":h+=(S=i,I[parseInt(S,10)]||S),c="";break;case"dd":if("d"===f)break;h+=D(o,2),c="";break;case"d":if("d"===f)break;h+=parseInt(o,10),c="";break;case"D":h+=o=1==o||21==o||31==o?parseInt(o,10)+"st":2==o||22==o?parseInt(o,10)+"nd":3==o||23==o?parseInt(o,10)+"rd":parseInt(o,10)+"th",c="";break;case"MMMM":h+=(M=s,void 0,g=parseInt(M,10)-1,w[g]||M),c="";break;case"MMM":if("M"===f)break;h+=(k=s,void 0,p=parseInt(k,10)-1,v[p]||k),c="";break;case"MM":if("M"===f)break;h+=D(s,2),c="";break;case"M":if("M"===f)break;h+=parseInt(s,10),c="";break;case"y":case"yyy":if("y"===f)break;h+=c,c="";break;case"yy":if("y"===f)break;h+=String(n).slice(-2),c="";break;case"yyyy":h+=n,c="";break;case"HH":h+=D(u.hour,2),c="";break;case"H":if("H"===f)break;h+=parseInt(u.hour,10),c="";break;case"hh":h+=D(t=0===parseInt(u.hour,10)?12:u.hour<13?u.hour:u.hour-12,2),c="";break;case"h":if("h"===f)break;t=0===parseInt(u.hour,10)?12:u.hour<13?u.hour:u.hour-12,h+=parseInt(t,10),c="";break;case"mm":h+=D(u.minute,2),c="";break;case"m":if("m"===f)break;h+=parseInt(u.minute,10),c="";break;case"ss":h+=D(u.second.substring(0,2),2),c="";break;case"s":if("s"===f)break;h+=parseInt(u.second,10),c="";break;case"S":case"SS":if("S"===f)break;h+=c,c="";break;case"SSS":h+=D(u.millis.substring(0,3),3),c="";break;case"a":h+=12<=u.hour?"PM":"AM",c="";break;case"p":h+=12<=u.hour?"p.m.":"a.m.",c="";break;case"E":h+=(b=i,O[parseInt(b,10)]||b),c="";break;case"'":c="",m=!0;break;default:h+=d,c=""}}return h+=l}catch(e){return console&&console.log&&console.log(e),a}var b,k,p,M,g,S},prettyDate:function(e){var a,r,t,n,s;if("string"!=typeof e&&"number"!=typeof e||(a=new Date(e)),"object"==typeof e&&(a=new Date(e.toString())),r=((new Date).getTime()-a.getTime())/1e3,t=Math.abs(r),n=Math.floor(t/86400),!isNaN(n))return s=r<0?"from now":"ago",t<60?0<=r?"just now":"in a moment":t<120?"1 minute "+s:t<3600?Math.floor(t/60)+" minutes "+s:t<7200?"1 hour "+s:t<86400?Math.floor(t/3600)+" hours "+s:1===n?0<=r?"Yesterday":"Tomorrow":n<7?n+" days "+s:7===n?"1 week "+s:n<31?Math.ceil(n/7)+" weeks "+s:"more than 5 weeks "+s},toBrowserTimeZone:function(e,a){return this.date(new Date(e),a||"MM/dd/yyyy HH:mm:ss")}}}()}(),jQuery.format=DateFormat.format;




/*============================================================================
    Home page - social media
  ==============================================================================*/


$(document)
  .on('shopify:block:select', function(e){

    var blockId = e.detail.blockId;
    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    if ($parentSection.hasClass('slideshow-section') || $parentSection.hasClass('testimonial-section')){
      sliderBlock.select(blockId, $parentSection);
    }

    utils.resizeActionButtons();

});

$(document)
  .on('shopify:block:deselect', function(e){

    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    if ($parentSection.hasClass('slideshow-section') || $parentSection.hasClass('testimonial-section')){
      sliderBlock.deselect($parentSection)
    }

});

$(document)
  .on('shopify:section:reorder', function(e){

    utils.pageBannerCheck();

});

$(document)
  .on('shopify:section:load', function(e){

    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    utils.pageBannerCheck();

//     

    if ($parentSection.hasClass('social-feeds-section')){
//       $('.social-feeds-wrap').each(function (index, value) {


//         var $target = $(this).find(".js-instafeed");
//         instagram.loadContent({
//           el: $target,
//           clientID: $target.data('client-id'),
//           limit: $target.data('count')
//         });
//       });
    }

    if ($parentSection.hasClass('faq-section')){
      faqAccordion.init();
    }

    if ($parentSection.hasClass('cart-section')){
      cart.init();
    }

    if ($parentSection.hasClass('featured-promotions-section')){
      featuredPromotions.init();
    }

    if ($parentSection.hasClass('slideshow-section')){
      slideshow.init();
    }

    if ($parentSection.hasClass('testimonial-section')){
//       testimonial.init();
    }

    if ($parentSection.hasClass('image-gallery-section')){
      gallery.init();
    }

    if ($parentSection.hasClass('featured-products-section')){
      productPage.initializeQuantityBox();
      productPage.init();
    }

    if ($parentSection.hasClass('featured-collection-section')){
      featuredCollectionSection.init();
    }

    if ($parentSection.hasClass('video-section')){
      videoSection.init();
    }

    if ($parentSection.hasClass('recently-viewed')){
//       recentlyViewed.init('.js-recently-viewed');
    }

    if ($parentSection.hasClass('product-template')){
      productPage.init();
      productPage.relatedProducts();
//       recentlyViewed.init();

    }

    if ($parentSection.hasClass('article-template-section')){
      if(window.location.pathname.indexOf('/comments') != -1) {
        $('html,body').animate({scrollTop: $("#new-comment").offset().top-140},'slow');
      }
    }

    if ($parentSection.hasClass('collection-template-section')){
      collectionSidebarFilter.init();
    }

    if ($parentSection.hasClass('search-template-section')){
      collection.init();
    }

    if ($parentSection.hasClass('header-section')){
      header.init();
      header.loadMegaMenu();
    }

    if ($parentSection.hasClass('mega-menu-section')){
      header.loadMegaMenu();
    }

    if ($parentSection.hasClass('page-details-section')) {
      featuredCollectionSection.init();
      videoSection.init();
    }
});


$(document)
  .on('shopify:section:unload', function(e){

    var $target = $(e.target);
    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    if ($parentSection.hasClass('header-section')){
      header.unload($target);
      header.unloadMegaMenu();
    }

    if ($parentSection.hasClass('slideshow-section')){
      slideshow.unload($target);
    }

    if ($parentSection.hasClass('testimonial-section')){
//       testimonial.unload($target);
    }

    if ($parentSection.hasClass('video-section')){
      videoSection.unload($target);
    }

    if ($parentSection.hasClass('product-template')){
      productPage.unload($target);
    }

    if ($parentSection.hasClass('mega-menu-section')){
      header.unloadMegaMenu();
    }

    if ($parentSection.hasClass('page-details-section')) {
      videoSection.unload($target);
    }

});

$(document)
  .on('shopify:section:select', function(e){

    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    if ($parentSection.hasClass('mega-menu-section')){
      var megaMenuParent = $('.header .' + e.detail.sectionId).data('dropdown');
      setTimeout(function() {
        $('a.mega-menu-parent[data-dropdown-rel="' + megaMenuParent + '"]').trigger('mouseenter');
        $('a.mega-menu-parent[data-dropdown-rel="' + megaMenuParent + '"]').parents('header').addClass('editor-hover--true');
        header.removeDataAttributes('.header .mega-menu.dropdown_container .dropdown_column');
      }, 10);
    }

    if ($parentSection.hasClass('featured-collection-section')){
      featuredCollectionSection.unload($parentSection);
      featuredCollectionSection.init();
    }

    utils.pageBannerCheck();
    var evt = document.createEvent('UIEvents');
    evt.initUIEvent('resize', true, false, window, 0);
    window.dispatchEvent(evt);
});

$(document)
  .on('shopify:section:deselect', function(e){

    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    if ($parentSection.hasClass('mega-menu-section')){
      var megaMenuParent = $('.header .' + e.detail.sectionId).data('dropdown');
      $('a.mega-menu-parent[data-dropdown-rel="' + megaMenuParent + '"]').trigger('mouseout');
      $('a.mega-menu-parent[data-dropdown-rel="' + megaMenuParent + '"]').parents('header').removeClass('editor-hover--true');
    }

});


/* Friend buy Trigger
=============================================================================*/

/*For Review button placement 
==================================================================================*/

$(document).on('DOMNodeInserted','.social_front', function() {  
  $(".social h4").remove();  
  $('#customer_login').insertAfter('.social_front');
  $('#create_customer').insertAfter('.social_front');  
});

  
    
    
    (function($) {
    
  $('div.mobile-menu').css('display','block');
  if ($(window).width() <= 798) {
    $('div.w3-sidebar ul.cart_items').addClass('fixed-mini-cart');
  }
  
      
})(jQuery);
window.onresize = function(event) {
  viewportwidth = $(window).width();
  if (viewportwidth<700) {
    if(!$('div.w3-sidebar ul.cart_items').hasClass('fixed-mini-cart')){
      $('div.w3-sidebar ul.cart_items').addClass('fixed-mini-cart');
    }
    // some jquery stuff here;
  }
  else{
    $('div.w3-sidebar ul.cart_items').removeClass('fixed-mini-cart');
  }
}

//   $(window).scroll(function () {
//     if ($(window).scrollTop() >= 300)
//     {
//       $(".subtotal").addClass("subtotal-box");
//     }
//     else
//     {
//       $(".subtotal").removeClass("subtotal-box");
//     }
  
//   });

$(document).on('DOMNodeInserted', '.bold-ro__product', function() {
$('select.bold-ro__frequency-num option[value=3]').attr('selected','selected');
});
document.addEventListener("DOMContentLoaded", function(event){
//   console.log('review loaoded')
  var rating = parseInt(jQuery(".spr-badge").data('rating'),10);
  if(rating <= 0){
    $("h4.review-title").hide();
    $("#shopify-product-reviews").hide();
  }
  else{
    $("h4.review-title").show();
    $("#shopify-product-reviews").show();
  }
});


  $(document).ready(function(){
    $('.filter-group ul.toggle_list').hide();
    var HideShowFilter = function() {

      $(".cart_container .cart_content").show();
      $("#mySidebar").css('transform','translateX(0px)');
      $("#myOverlay").fadeIn();       
    };
    $('#open_filter').on('click', HideShowFilter);
    $('.open_mble_cart').on('click', HideShowFilter);

    $('#close_sidebar').on('click', function(){       
      $("#mySidebar").css('transform','translateX(100%)');
      $("#myOverlay").fadeOut();
    });

    $('#myOverlay,.continue_shopping').on('click', function(e){
      e.preventDefault();
      $("#mySidebar").css('transform','translateX(100%)');
      $("#myOverlay").fadeOut();
    });
//     $("#customer_login").hide();

    $("#forgot-pwd-btn").on('click',function(){      
      $("#login_form").hide();
      $(".recover-password").show();
    });
    $("#forgot-cancel-btn").on('click',function(){
      $("#login_form").show();
      $(".recover-password").hide()
    });

    //----- OPEN
    $("#forgot-pwd-btn-popup").on('click',function(){
      $("#popup_login_form").hide();
      $(".recover-password-popup").show();
    });
    $("#forgot-cancel-btn-popup").on('click',function(){
      $("#popup_login_form").show();
      $(".recover-password-popup").hide();
    });

    //put this js end of file
    var url_string = window.location.href;
    try{
      if(url_string.indexOf('#recover') > -1)
      {
        var $div = $("#"+url_string.split('#')[1]);
        if(url_string.split('#')[1].indexOf("recover")>=0){
          $("#login_form").hide();
          console.log($("#recover-password").find('.form-login-center').show())
          $('html,body').animate({
            scrollTop: $("#recover-password").find('.form-login-center').top - 100
          }, 1000);

        }else{
          $('body,html').animate({ scrollTop:$div.offset().top }, 1300);
        }
        //     console.log("true")
      }else{}
    }
    catch(ex){
      console.log(ex)
    }
    $("#popup-register-btn").on('click',function(){
      $("#popup_login_form").hide();
      $("#popup_register_form").show();
      $('.popup-inner').addClass('margin-top65');
      $('.popup-inner').addClass('margin-bottom10');
    });
    $("#popup-login-btn").on('click',function(){
      $("#popup_login_form").show();
      $("#popup_register_form").hide();
      $('.popup-inner').removeClass('margin-top65');
      $('.popup-inner').removeClass('margin-bottom10');
    });

    $('[data-popup-open]').on('click', function(e)  {
      $("#popup_login_form").show();
      $(".recover-password-popup").hide();
      $("#popup_register_form").hide();
      var targeted_popup_class = jQuery(this).attr('data-popup-open');
      $('[data-popup="' + targeted_popup_class + '"]').fadeIn(350);
      e.preventDefault();
    });
    //----- CLOSE
    $('[data-popup-close]').on('click', function(e)  {
      var targeted_popup_class = jQuery(this).attr('data-popup-close');
      $('[data-popup="' + targeted_popup_class + '"]').fadeOut(350);
      e.preventDefault();
    });
    
  /*Like2Have Image modal open*/
    
    
    $(".rate").rate({readonly: true});
   
  });
    
    //FREE SHIPPING BAR JS
    var fsb_adjusted = false;
  $( "#fsb_placeholder" ).on( "fsb_fully_loaded", function(event, p1) {    
    if ((p1=='inserted' || p1=='inserted_sticky') && !fsb_adjusted ){
      fsb_adjusted = true;
      var fsb_height = $("#fsb_bar").outerHeight();
//       $("<div />", {html: '<style>' + '.header.is-absolute,#header.mobile_nav-fixed--true,.sticky_nav{top:' + fsb_height + 'px!important;}' + '@media(max-width: 768px){div.breadcrumb-collection{padding-top:' + fsb_height + 'px;}' + '#pagecontent{display:block;margin-top:' + fsb_height + 'px!important;}}' + '</style>'}).appendTo("body");
    }
    $("#fsb_close").on( "click", function(){
     // $("<div />", {html: '<style>' + '.header.is-absolute,#header.mobile_nav-fixed--true,.sticky_nav{top:0!important;}@media(max-width: 768px){div.breadcrumb-collection{padding-top:0;}#pagecontent{margin-top:0!important;}}' + '</style>'}).appendTo("body")
    });
  });
  
  /* Special Offer Js*/

    /*******************************   Captch Code Implementatio JS ***************************/
    if ($('#re-captcha').length){
      var actCallback = function (response) {
        $('.contact-form input[type="submit"]').prop("disabled", false);
        $('#re-captcha').remove();
      };
      var expCallback = function() {
        $('.contact-form input[type="submit"]').prop("disabled", true);
      };

      var onloadCallback = function () {
        var widget = grecaptcha.render(document.getElementById("re-captcha"), {
          'sitekey' : "6LfOV9oaAAAAAFt6ELkBHrCXR1gGSnEhVyx7IidO", // Sitekey, Retrieving from reCaptcha
          'theme': "light",
          'callback' : actCallback,
          'expired-callback': expCallback,
        });
      }
      }

    /*******************************   End Captch Code Implementatio JS ***************************/
    
  /*search button*/
//   $(".icon-search").click(function(e) {
//         $(".search_input").toggleClass("open_input");
//        // $(this).addClass('search_submit');
//     });
    var as_seen_count = $('.as-seen-slider').attr('data-count');
    if(as_seen_count > 4){
      $('.as-seen-slider').flickity({"draggable": true,contain: true,cellAlign: 'left',pageDots:false,adaptiveHeight: true,autoPlay: true,wrapAround: false,imagesLoaded: true, groupCells: 4});
    }{
      $('.as-seen-slider').flickity({prevNextButtons:false,"draggable": false,contain: true,cellAlign: 'left',pageDots:false,adaptiveHeight: true,autoPlay: false,wrapAround: false,imagesLoaded: true, groupCells: 4});
    }
    $('.as-seen-slider-mobile').flickity({"draggable": true,contain: true,pageDots:false,adaptiveHeight: true,autoPlay: true,imagesLoaded: true, groupCells: 1});
  /*end search button*/
   /*read more*/
  
   var len=$('.collection_description p').text().length;
    if(len < 350)
    {
      $(".continuereading-div").hide();
    }
  $('.continuereading-div .ModuleMoreLink').click(function () {
    $(".shrink-read").show();
    $('.collection_description').addClass("description-active");
    $('.continuereading-div').hide();
  });

//    $(".ModuleMoreLink").click(function(){
//         $('.continuereading-div').toggleClass("description-active");
//     });
    $('.collection_description .shrink-read a').on('click', function(){
      $(".shrink-read").hide();
        $(this).parent().parent().removeClass('description-active');
      $('.continuereading-div').show();
    });

    $("a#spr-reviews-count").on('click',function(e){
      e.preventDefault();
      $('html, body').animate({
        scrollTop: $($.attr(this, 'data-href')).offset().top-150
      }, 1200);
    })

   /*------------------------ Sticky Sidebar JS Plugin--------------------------*/  

    /*----------------- End Plugin and Use function------------------ */
    
    
    $(document).ready(function() {
      
      $('a.mini-pop-button').on('click',function(e){
        e.preventDefault();
        if($(this).attr('data-target') != "" || $(this).attr('data-target') != null || $(this).attr('data-target') != undefined){
          
          var offsetDiv = parseInt($(this).attr('data-offset'));
          console.log($($(this).attr('data-target')))
          $('html, body').animate({
            scrollTop: $($(this).attr('data-target')).offset().top - offsetDiv
          }, 2000);
        }
      })

      
      $('.js-featured-slider').slick({
        lazyLoad: 'ondemand',
        speed: 300,
        slidesToScroll: 2,
        slidesToShow: 3,
        draggable: true,
        infinite: false,
        arrows: true,
        responsive: [{
          breakpoint: 798,
          settings: {
            lazyLoad: 'ondemand',
            dots: false,
            slidesToScroll: 1,
            slidesToShow: 1,
            draggable: false,
            infinite: true,
            arrows: true,
            adaptiveHeight: false
          }
        },
                     {
                       breakpoint: 768,
                       settings: {
                         lazyLoad: 'ondemand',
                         dots: false,
                         slidesToScroll: 1,
                         slidesToShow: 1,
                         draggable: true,
                         infinite: true,
                         arrows: true,
                         adaptiveHeight: true
                       }
                     },
                     {
                       breakpoint: 480,
                       settings: {
                         lazyLoad: 'ondemand',
                         dots: false,
                         slidesToScroll: 1,
                         slidesToShow: 1,
                         draggable: true,
                         infinite: false,
                         arrows: true,
                         adaptiveHeight: true
                       }
                     },
                     {
                       breakpoint: 375,
                       settings: {
                         lazyLoad: 'ondemand',
                         dots: false,
                         slidesToScroll: 1,
                         slidesToShow: 1,
                         draggable: true,
                         infinite: false,
                         arrows: true,
                         adaptiveHeight: true
                       }
                     },
                     {
                       breakpoint: 320,
                       settings: {
                         lazyLoad: 'ondemand',
                         dots: false,
                         slidesToScroll: 1,
                         slidesToShow: 1,
                         draggable: true,
                         infinite: false,
                         arrows: true,
                         adaptiveHeight: true
                       }
                     }
                    ]
      })
      
      /*------------------------ About Page Tour Factory Slick-Slider--------------------------*/  
      var slideshowObj = $(".about-slick-slider .blackSlideshow");

        var slideCount = slideshowObj.find(".slide").length;
        if(slideCount <= 5){
          var slideNo = slideCount-1;
        }else{
          var slideNo = 1;
        }

        if(slideCount>10) var dotsControll = false;
        else var dotsControll = true;

        if( dotsControll == false ){
          $(".about-slick-slider .blackSlideshowNav").removeClass("noText");
        }else {
          $(".about-slick-slider .blackSlideshowNav").addClass("noText");
        }

        if( slideshowObj.length>0 ) {
          var slideshowSettings = {
            dots: false,
                      centerPadding: '60px',
            lazyLoad: "ondemand",
            infinite: true,
            speed: 500,
            slidesToShow: slideNo,
            slidesToScroll: 1,
            centerMode: true,
            variableWidth: true,
            appendArrows: $(".about-slick-slider .blackSlideshowNav"),
            responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: dotsControll
              }
            },
            {
              breakpoint: 480,
              settings: {
                dots: false
              }
            }
            ]
          };
          slideshowObj.slick(slideshowSettings);          
        }
      /*------------------------ END About Page Slider--------------------------*/  
    
      
      
      var mailchimpForm = $('.mc-embedded-subscribe-form');

      // On submit of the form send an ajax request to mailchimp for data.

      mailchimpForm.submit(function(e){

        // Set variables for this specific form

        var that = $(this);
        var mailchimpSubmit = $(this).find('input[type=submit]');
        var errorResponse = $('.mce-error-response');
        var successResponse = $('.mce-success-response');

        // Make sure the form doesn't link anywhere on submit.

        e.preventDefault();

        // JQuery AJAX request http://api.jquery.com/jquery.ajax/

        $.ajax({
          method: 'GET',
          url: that.attr('action'),
          data: that.serialize(),
          dataType: 'jsonp',
          success: function(data) {
            console.log(data.result)
            errorResponse.html('');
            successResponse.html('');
            // If there was an error then show the error message.
            if (data.result === 'error') {
              // If the error has an error code at front then alter the message to not include the error code and hyphen.
              if(data.msg.indexOf('0') === 0) {
                data.msg = data.msg.slice(3);
              }
//               errorResponse.html(data.msg).fadeIn(300).delay(3000).fadeOut(300);
              errorResponse.html(data.msg)
            }
            // If success then show message
            else {
//               successResponse.html('Success! Please check your email for a confirmation message.').fadeIn(300).delay(3000).fadeOut(300);
              successResponse.html('Success! Please check your email for a confirmation message.');
            }
          }
        });
      });
      
    });
    $('.page-corporate-gifting-section .gift-slider-for').on('init', function (event, slick, currentSlide, nextSlide) {
      var slideno = $(this).find('.slick-current.slick-active').data('slick-index');
      $('.page-corporate-gifting-section .gift-slider-nav .gift_page.title').removeClass('slick-current');
      $('.page-corporate-gifting-section .gift-slider-nav .gift_page.title[data-slide="'+slideno+'"]').addClass('slick-current')
    }).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: false,
      focusOnSelect: true, 
//        asNavFor: '.slider-nav',
      arrows: true,
      dots: false
    });
    
    $('.gift-slider-for').find('.slick-next').on('click',function(){
      $('.page-corporate-gifting-section .gift-slider-for').slick('next');
      var slideno = $(this).parents('.gift-slider-for').find('.slick-current.slick-active').data('slick-index');
      $('.page-corporate-gifting-section .gift-slider-nav .gift_page.title').removeClass('slick-current');
      $('.page-corporate-gifting-section .gift-slider-nav .gift_page.title[data-slide="'+slideno+'"]').addClass('slick-current')
    })
    $('.gift-slider-for').find('.slick-prev').on('click',function(){
      $('.page-corporate-gifting-section .gift-slider-for').slick('prev');
      var slideno = $(this).parents('.gift-slider-for').find('.slick-current.slick-active').data('slick-index');
      $('.page-corporate-gifting-section .gift-slider-nav .gift_page.title').removeClass('slick-current');
      $('.page-corporate-gifting-section .gift-slider-nav .gift_page.title[data-slide="'+slideno+'"]').addClass('slick-current')
    })
    $('.page-corporate-gifting-section .gift-slider-nav .gift_page.title').on('click',function(){
      var slideno = $(this).data('slide');
      $('.page-corporate-gifting-section .gift-slider-nav .gift_page.title').removeClass('slick-current');
      $(this).addClass('slick-current');
      $('.page-corporate-gifting-section .gift-slider-for').slick('slickGoTo', slideno);
    })
    

    function register($form) {
//       console.log($form.serialize())
      $.ajax({
        type: $form.attr('method'),
        url: $form.attr('action'),
        data: $form.serialize(),
        cache: false,
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        error: function (err) {  console.log(err)},
        success: function (data) {
          console.log($form.serialize())
          if (data.result === 'success') {
            // Yeahhhh Success
            console.log(data.msg)
          } else {
            // Something went wrong, do something to notify the user.
            console.log(data.msg)
          }
        }
      })
    };
    $('body.page-corporate-gifting form.corporate-gifting-form input[type="submit"]').on('click',function(e){
      if($('#ContactFormchkbx2').prop('checked')){
        $("form#gifiting-register-subscribe-form input#mce-EMAIL").val($("body.page-corporate-gifting form#contact_form input#contactFormEmail").val());
        $("form#gifiting-register-subscribe-form input#mce-CORPGIFT").val('Yes');
        var $form = $('form#gifiting-register-subscribe-form');
        register($form);
      }
      else{}
    })
//     $('body.page-corporate-gifting input#mcbtn').on('click',function(e){
//       if($('#ContactFormchkbx2').prop('checked')){
//         $("form#gifiting-register-subscribe-form input#mce-EMAIL").val($("body.page-corporate-gifting form#contact_form input#contactFormEmail").val());
//         $("form#gifiting-register-subscribe-form input#mce-CORPO_GIFT").val('Yes');
//         var $form = $('form#gifiting-register-subscribe-form');
//         register($form);
//       }
//       else{}
//     })
    
/*============================================================================
  Featured collection Block in Corporate Gift Page
==============================================================================*/
    var slide_counter = $('.js-choose--products-slider .products-slider.slider_counter').data('slide-count');
//     console.log(slide_counter)
    if(slide_counter > 4){
      $('.js-choose--products-slider .products-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        focusOnSelect: true, 
        arrows: true,
        dots: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {slidesToShow: 1,slidesToScroll: 1,infinite: false, arrows: true,dots: false}
          },
          {
            breakpoint: 480,
            settings: {slidesToShow: 1,slidesToScroll: 1,infinite: false, arrows: true,dots: false}
          },
          {
            breakpoint: 375,
            settings: {slidesToShow: 1,slidesToScroll: 1,infinite: false, arrows: true,dots: false}
          }
        ]
      });
    }
    
    
    
      $('.js-trending-col-product-slider .products-slider').slick({
      slidesToShow: $('.js-trending-col-product-slider .products-slider').data('products-per-slide'),
      slidesToScroll: 1,
      infinite: false,
      focusOnSelect: true, 
      arrows: true,
      dots: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {slidesToShow: 1,slidesToScroll: 1,infinite: false, arrows: true,dots: false}
        },
        {
          breakpoint: 480,
          settings: {slidesToShow: 1,slidesToScroll: 1,infinite: false, arrows: true,dots: false}
        },
        {
          breakpoint: 375,
          settings: {slidesToShow: 1,slidesToScroll: 1,infinite: false, arrows: true,dots: false}
        }
      ]
    });
    
    //          if ('.gift-slick-slider'.length <= 2){
    $('.gift-slick-slider .gift_blackSlideshow').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: false,
      focusOnSelect: true, 
      arrows: true,
      dots: false,
    
      responsive: [
        {
          breakpoint: 768,
          settings: {slidesToShow: 1,slidesToScroll: 1,infinite: false, arrows: true,dots: false}
        },
        {
          breakpoint: 480,
          settings: {slidesToShow: 1,slidesToScroll: 1,infinite: false, arrows: true,dots: false}
        },
        {
          breakpoint: 375,
          settings: {slidesToShow: 1,slidesToScroll: 1,infinite: false, arrows: true,dots: false}
        }
      ]
    });
//     }


  $('.page-corporate-gifting-section').find('section.banner a.gift-page-banner').on('click',function(e){
    e.preventDefault();
    if($(this).attr('href').indexOf('#') >= 0 || $(this).attr('href') != null || $(this).attr('href') != undefined){
      $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 200
      }, 2000);
    }
  })

  
    if ($(window).width() == 1024) {  
      $('.about-minipop-btn').click(function(){
        $('.about-minipop-box').toggleClass("about-minipop-box2");
        if($(this).text()!="Shrink Less"){
          $(this).text('Shrink Less');
        }else{
          $(this).text('Read More');
        }
      });
    }

//   Minipop collection minipop product slider
  if($('body').hasClass('collection-minipop')){
    if($('.minipop-slider .product-list .thumbnail').length>4){
      $('.minipop-slider .product-list').slick({
        slidesToShow:4,
        slidesToScroll: 1,
        infinite: false,
        focusOnSelect: true, 
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {slidesToShow: 1,slidesToScroll: 1,infinite: false, arrows: true,dots: false}
          },
          {
            breakpoint: 480,
            settings: {slidesToShow: 1,slidesToScroll: 1,infinite: false, arrows: true,dots: false}
          },
          {
            breakpoint: 375,
            settings: {slidesToShow: 1,slidesToScroll: 1,infinite: false, arrows: true,dots: false}
          }
        ]
      })
    }
  }
        
// Subscription page #subscription_section js
      $(document).ready(function(){
        $(".subscription-section .date-section1 p").click(function () {
          $(".subscription-section .date-section1 p").removeClass("active");
          $(this).addClass("active");        
        });
        $(".subscription-section .date-section2 p").click(function () {
          $(".subscription-section .date-section2 p").removeClass("active");
          $(this).addClass("active");        
        });
        $(".subscription-section .date-section3 p").click(function () {
          $(".subscription-section .date-section3 p").removeClass("active");
          $(this).addClass("active");        
        });
      });
      
/*============================================================================
  Featured Products Block in Minipop
==============================================================================*/
    var slide_counter = $('.minipop-product-slider .products-mp-slider.slider_counter').data('slide-count');
//     console.log(slide_counter)
    if(slide_counter > 4){
      $('.minipop-product-slider .products-mp-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        focusOnSelect: true, 
        arrows: true,
        dots: false,
        responsive: [
          {
            breakpoint: 768,
            settings: {slidesToShow: 1,slidesToScroll: 1,infinite: false, arrows: true,dots: false}
          },
          {
            breakpoint: 480,
            settings: {slidesToShow: 1,slidesToScroll: 1,infinite: false, arrows: true,dots: false}
          },
          {
            breakpoint: 375,
            settings: {slidesToShow: 1,slidesToScroll: 1,infinite: false, arrows: true,dots: false}
          }
        ]
      });
    }
    


$('.review-inner').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  adaptiveHeight: false,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 798,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1
      }
    }
  ]
});



window.onload = function () {
    const dateTimePicker = document.querySelector('smart-date-time-picker'),
        radioButtons = document.getElementsByTagName('smart-radio-button');

  if(dateTimePicker != null && radioButtons != null){
    radioButtons[0].addEventListener('change', function (event) {
      dateTimePicker.dropDownPosition = 'bottom';
    });

    radioButtons[1].addEventListener('change', function (event) {
      dateTimePicker.dropDownPosition = 'top';
    });

    radioButtons[2].addEventListener('change', function (event) {
      dateTimePicker.dropDownPosition = 'overlay-bottom';
    });

    radioButtons[3].addEventListener('change', function (event) {
      dateTimePicker.dropDownPosition = 'overlay-center';
    });

    radioButtons[4].addEventListener('change', function (event) {
      dateTimePicker.dropDownPosition = 'overlay-top';
    });

    radioButtons[5].addEventListener('change', function (event) {
      dateTimePicker.dropDownPosition = 'center-bottom';
    });

    radioButtons[6].addEventListener('change', function (event) {
      dateTimePicker.dropDownPosition = 'center-top';
    });

    radioButtons[7].addEventListener('change', function (event) {
      dateTimePicker.calendarButton = true;
      dateTimePicker.calendarButtonPosition = 'left';
    });

    radioButtons[8].addEventListener('change', function (event) {
      dateTimePicker.calendarButton = true;
      dateTimePicker.calendarButtonPosition = 'right';
    });

    radioButtons[9].addEventListener('change', function (event) {
      dateTimePicker.calendarButton = false;
    });
  }
}



function addDays(date, days) {
  var startDate = date;
  startDate = new Date(startDate);
  var endDate = "", noOfDaysToAdd = days, count = 0;
  while(count < noOfDaysToAdd){
    endDate = new Date(startDate.setDate(startDate.getDate() + 1));
    if(endDate.getDay() != 0 && endDate.getDay() != 6){
      count++;
    }
  }
  return endDate;
}
function addWeekdaysToDate(date, numberToAdd) {
  var isValid = function(d) { return d.getDay() !== 0 }
  if(Math.abs(numberToAdd) > 1) {
    return addWeekdaysToDate(
      addWeekdaysToDate(date, Math.sign(numberToAdd)),
      numberToAdd - Math.sign(numberToAdd)
    )
  } else if(Math.abs(numberToAdd) === 1) {
    var result = new Date(date)
    result.setDate(result.getDate() + Math.sign(numberToAdd))
    if(isValid(result)) {
      return result
    } else {
      return addWeekdaysToDate(result, Math.sign(numberToAdd))
    }
  } else if(numberToAdd === 0) {
    return date
  }
  return false

}

if($('.contact-form').length>0 && $('[data-toggle="datepicker"]').length>0){
  $('[data-toggle="datepicker"]').datepicker({dateFormat:'dd/mm/yy'});
}

if($('body').hasClass('product')){
  
  var weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var monthNames = ["January", "February", "March", "April", "May", "June",
                      "July", "August", "September", "October", "November", "December"
                     ];
  
  var eta_delivery_days= "3";
  
   var ukTime0 = moment().tz('Europe/London');
//   var ukTime0 = 'Tue Mar 15 2021 12:40:00 GMT+0530';
  
  console.log(ukTime0)

  $('.next_eta_date').empty();

  var dt = ukTime0;
  var day = dt.day();
  var uk_hrs0 = dt.get('hour');
  console.log('Today: '+weekdays[day])
  //   var date = dt.getDate();
  var nextETADate = new Date();
  if(dt.get('hour')<12){
    if(dt.day()==4){
      var nextETADate2 = new Date(addWeekdaysToDate(dt,3));
      console.log('<12 Our Next Estimated Delivery Date Is: '+weekdays[nextETADate2.getDay()] +" "+nextETADate2.getDate() + " " +monthNames[nextETADate2.getMonth()])
      $('.next_eta_date').text($.format.date(nextETADate2, "ddd dd MMMM"));
      nextETADate2 = new Date(addWeekdaysToDate(dt,1));
      console.log('< 12 Expedited Shipping At Checkout For Delivery On: '+weekdays[nextETADate2.getDay()] +" "+nextETADate2.getDate() + " " +monthNames[nextETADate2.getMonth()])
      $('.next_eta_date2').text($.format.date(nextETADate2, "ddd dd MMMM"));
    }
    else if(dt.day()==5){
      var nextETADate2 = new Date(addWeekdaysToDate(dt,3));
      console.log('<12 Our Next Estimated Delivery Date Is: '+weekdays[nextETADate2.getDay()] +" "+nextETADate2.getDate() + " " +monthNames[nextETADate2.getMonth()])
      $('.next_eta_date').text($.format.date(nextETADate2, "ddd dd MMMM"));
      nextETADate2 = new Date(addWeekdaysToDate(dt,2));

      console.log('< 12 Expedited Shipping At Checkout For Delivery On: '+weekdays[nextETADate2.getDay()] +" "+nextETADate2.getDate() + " " +monthNames[nextETADate2.getMonth()])
      $('.next_eta_date2').text($.format.date(nextETADate2, "ddd dd MMMM"));
    }
    else if(dt.day()==6){
      var nextETADate2 = new Date(addWeekdaysToDate(dt,3));
      console.log('<12 Our Next Estimated Delivery Date Is: '+weekdays[nextETADate2.getDay()] +" "+nextETADate2.getDate() + " " +monthNames[nextETADate2.getMonth()])
      $('.next_eta_date').text($.format.date(nextETADate2, "ddd dd MMMM"));
      nextETADate2 = new Date(addWeekdaysToDate(dt,2));
      console.log('< 12 Expedited Shipping At Checkout For Delivery On: '+weekdays[nextETADate2.getDay()] +" "+nextETADate2.getDate() + " " +monthNames[nextETADate2.getMonth()])
      $('.next_eta_date2').text($.format.date(nextETADate2, "ddd dd MMMM"));
    }
    else if(dt.day()==0){
      var nextETADate2 = new Date(addWeekdaysToDate(dt,3));
      console.log(nextETADate2)
      console.log('<12 Our Next Estimated Delivery Date Is: '+weekdays[nextETADate2.getDay()] +" "+nextETADate2.getDate() + " " +monthNames[nextETADate2.getMonth()])
      $('.next_eta_date').text($.format.date(nextETADate2, "ddd dd MMMM"));
      nextETADate2 = new Date(addWeekdaysToDate(dt,2));
      $('.next_eta_date2').text($.format.date(nextETADate2, "ddd dd MMMM"));
      console.log('< 12 Expedited Shipping At Checkout For Delivery On: '+weekdays[nextETADate2.getDay()] +" "+nextETADate2.getDate() + " " +monthNames[nextETADate2.getMonth()])
    }
    else{
      var nextETADate2 = new Date(addWeekdaysToDate(dt,2));
      console.log('<12 Our Next Estimated Delivery Date Is: '+weekdays[nextETADate2.getDay()] +" "+nextETADate2.getDate() + " " +monthNames[nextETADate2.getMonth()])
      nextETADate2 = new Date(addWeekdaysToDate(dt,1));
      console.log('< 12 Expedited Shipping At Checkout For Delivery On: '+weekdays[nextETADate2.getDay()] +" "+nextETADate2.getDate() + " " +monthNames[nextETADate2.getMonth()])
    }
  }
  else{
    //After 12pm
    console.log('After 12pm-------')
    if(dt.day()==4){
      var nextETADate2 = new Date(addWeekdaysToDate(dt,4));
      $('.next_eta_date').text($.format.date(nextETADate2, "ddd dd MMMM"));
      console.log('>12 Our Next Estimated Delivery Date Is: '+weekdays[nextETADate2.getDay()] +" "+nextETADate2.getDate() + " " +monthNames[nextETADate2.getMonth()])
      nextETADate2 = new Date(addWeekdaysToDate(dt,3));
      $('.next_eta_date2').text($.format.date(nextETADate2, "ddd dd MMMM"));
      console.log('> 12 Expedited Shipping At Checkout For Delivery On: '+weekdays[nextETADate2.getDay()] +" "+nextETADate2.getDate() + " " +monthNames[nextETADate2.getMonth()])
    }
    else if(dt.day()==5){
      var nextETADate2 = new Date(addWeekdaysToDate(dt,4));
      $('.next_eta_date').text($.format.date(nextETADate2, "ddd dd MMMM"));
      console.log('>12 Our Next Estimated Delivery Date Is: '+weekdays[nextETADate2.getDay()] +" "+nextETADate2.getDate() + " " +monthNames[nextETADate2.getMonth()])
      nextETADate2 = new Date(addWeekdaysToDate(dt,3));
      $('.next_eta_date2').text($.format.date(nextETADate2, "ddd dd MMMM"));
      console.log('> 12 Expedited Shipping At Checkout For Delivery On: '+weekdays[nextETADate2.getDay()] +" "+nextETADate2.getDate() + " " +monthNames[nextETADate2.getMonth()])
    }
    else if(dt.day()==6){
      var nextETADate2 = new Date(addWeekdaysToDate(dt,3));
      console.log('>12 Our Next Estimated Delivery Date Is: '+weekdays[nextETADate2.getDay()] +" "+nextETADate2.getDate() + " " +monthNames[nextETADate2.getMonth()])
      nextETADate2 = new Date(addWeekdaysToDate(dt,2));
      console.log('> 12 Expedited Shipping At Checkout For Delivery On: '+weekdays[nextETADate2.getDay()] +" "+nextETADate2.getDate() + " " +monthNames[nextETADate2.getMonth()])
    }
    else if(dt.day()==0){
      var nextETADate2 = new Date(addWeekdaysToDate(dt,3));
      $('.next_eta_date').text($.format.date(nextETADate2, "ddd dd MMMM"));
      console.log('>12 Our Next Estimated Delivery Date Is: '+weekdays[nextETADate2.getDay()] +" "+nextETADate2.getDate() + " " +monthNames[nextETADate2.getMonth()])
      nextETADate2 = new Date(addWeekdaysToDate(dt,2));
      $('.next_eta_date2').text($.format.date(nextETADate2, "ddd dd MMMM"));
      console.log('> 12 Expedited Shipping At Checkout For Delivery On: '+weekdays[nextETADate2.getDay()] +" "+nextETADate2.getDate() + " " +monthNames[nextETADate2.getMonth()])
    }
    else{
      var nextETADate2 = new Date(addWeekdaysToDate(dt,3));
      console.log('> 12 Our Next Estimated Delivery Date Is: '+nextETADate2.getDay()+" "+weekdays[nextETADate2.getDay()] +" "+nextETADate2.getDate() + " " +monthNames[nextETADate2.getMonth()])
      $('.next_eta_date').text($.format.date(nextETADate2, "ddd dd MMMM"));
      nextETADate2 = new Date(addWeekdaysToDate(dt,2));
      $('.next_eta_date2').text($.format.date(nextETADate2, "ddd dd MMMM"));
      console.log('> 12 Expedited Shipping At Checkout For Delivery On: '+weekdays[nextETADate2.getDay()] +" "+nextETADate2.getDate() + " " +monthNames[nextETADate2.getMonth()])
    }
  }
  
  
//   var ukTime0 = moment().tz('Europe/London');
//   var uk_hrs0 = ukTime0.get('hour');
// //   console.log(uk_hrs0)
//   $('.next_eta_date').empty();
//   if(uk_hrs0<12){
//   eta_delivery_days= 2;
//     var dt = new Date();
//     var day = dt.getDay();
//     var date = dt.getDate();
//     var nextETADate = new Date();
//     nextETADate = new Date(addWeekdaysToDate(dt,eta_delivery_days));
//     //       console.log(nextETADate)
//     var newnextDate = new Date(nextETADate);
//     var newDate = newnextDate.getDate();
//     var newMonth = newnextDate.getMonth()+1; // month (in integer 0-11)
//     var newYear = newnextDate.getFullYear();
//     var d = new Date(newMonth+"/"+newDate+"/"+newYear);
//     var dayName = weekdays[d.getDay()];
//     $('.next_eta_date').text($.format.date(d, "ddd dd MMMM"));
    
//     var nextETADate2 = new Date(addWeekdaysToDate(dt,1));
//     var newnextDate2 = new Date(nextETADate2);
//     var newDate2 = newnextDate2.getDate();
//     var newMonth2 = newnextDate2.getMonth()+1; // month (in integer 0-11)
//     var newYear2 = newnextDate2.getFullYear();
//     var d2 = new Date(newMonth2+"/"+newDate2+"/"+newYear2);
//     console.log(d2)
//     $('.next_eta_date2').text($.format.date(d2, "ddd dd MMMM"));
    
//   }
//   else{
//     var dt = new Date();
//     var day = dt.getDay();
//     var date = dt.getDate();
//     var nextETADate = new Date();
//     nextETADate = new Date(addWeekdaysToDate(dt,eta_delivery_days));
//     //       console.log(nextETADate)
//     var newnextDate = new Date(nextETADate);
//     var newDate = newnextDate.getDate();
//     var newMonth = newnextDate.getMonth()+1; // month (in integer 0-11)
//     var newYear = newnextDate.getFullYear();
//     var d = new Date(newMonth+"/"+newDate+"/"+newYear);
//     var dayName = weekdays[d.getDay()];
//     $('.next_eta_date').text($.format.date(d, "ddd dd MMMM"));

//     var nextETADate2 = new Date(addWeekdaysToDate(dt,1));
//     var newnextDate2 = new Date(nextETADate2);
//     var newDate2 = newnextDate2.getDate();
//     var newMonth2 = newnextDate2.getMonth()+1; // month (in integer 0-11)
//     var newYear2 = newnextDate2.getFullYear();
//     var d2 = new Date(newMonth2+"/"+newDate2+"/"+newYear2);
//     console.log(d2)
//     $('.next_eta_date2').text($.format.date(d2, "ddd dd MMMM"));
  
//   }
  
  if($("#datepicker").length>0){

    
    
    function noSundays(date) {
      return [date.getDay() != 0, ''];
    }
    $( "#datepicker" ).datepicker({ 
      minDate: 0,
      dateFormat:'dd/mm/yy',
      firstDay: 1,
      beforeShowDay: noSundays,
      maxDate: "+2M" ,
      dayNames:[ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ],
      onSelect :function(dateText,inst){
        var obj = $(inst);
        
        $('.delivery_details').fadeIn();

        //       $('.next_eta_date').text(dayName+" "+ newDate + " "+monthNames[newMonth])

      }
    });
  }
}



function pretty_time_string(num) {
  return ( num < 10 ? "0" : "" ) + num;
}

var ukTime = moment().tz('Europe/London');
var uk_hrs = ukTime.get('hour');
var now_time1 = "2021-07-01";
var Curernt_Time = moment.tz(now_time1+" 12:00:00", "Europe/London");
var current_hrs = Curernt_Time.get('hour');
var remaingHrs = Curernt_Time.diff(ukTime);
// console.log(Curernt_Time,ukTime);

// 24 hour clock  
if (true) {
  var x= setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
    // Find the distance between now and the count down date
    var distance = Curernt_Time - now;
    
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
//     console.log(hours,minutes)
    // Compose the string for display
    var currentTimeString = pretty_time_string(hours) + ":" + pretty_time_string(minutes) + ":" + pretty_time_string(seconds);
    $("#remaining_time").html("order in "+currentTimeString);

    // If the count down is finished, write some text
//     console.log(distance)
    if (distance < 0) {
      clearInterval(x);
      $("#remaining_time").html("order before midday.");
    }

  }, 1000);
}
$('.show-more').on('click',function(e){
  e.preventDefault();
  $(this).parents('.smalldata').hide();
  $(this).parents('.smalldata').siblings('.bigdata').show();
})
$('.show-less').on('click',function(e){
  e.preventDefault();
  $(this).parents('.bigdata').hide();
  $(this).parents('.bigdata').siblings('.smalldata').show();
})

function addEventListenerStamped(el, eventName, handler) { 
  if (el.addEventListener) { el.addEventListener(eventName, handler); }
  else { el.attachEvent('on' + eventName, function () { handler.call(el); }); } 
}
// Listening for reviews widget loaded event
addEventListenerStamped(document, 'stamped:reviews:loaded', function(e) {
  
  
  console.log($('.stamped-badge-caption'))
  $('.stamped-badge-caption').each(function(){
    var review_count = $(this).find('.stamped-summary-text-1').attr('data-reviews');
    var review_ratings = $(this).find('.stamped-summary-text-1').attr('data-rating');
    console.log(review_count,$(this).parents('.mobile_product_title').find('[itemprop="reviewRating"] [itemprop="ratingValue"]'));
    $(this).parents('.mobile_product_title').find('[itemprop="reviewRating"] [itemprop="ratingValue"]').attr('content',review_count);
  })

  var review_count = $('.stamped-container').find('.stamped-summary-text-1').attr('data-count');
  var review_ratings = $('.stamped-container').find('.stamped-summary-text-1').attr('data-rating');
  console.log(review_count);
  if(review_count<=0){
    $('.review-container').hide();
  }
  else{
    $('.review-container').show();
  }
});

//   var currentUKTime = new Date(now_time1); 
//   var x = setInterval(function() {
//     var t = moment().tz('Europe/London');
//     var hours = t.get('hour')
//     var minutes = t.get('minute')
//     var seconds = t.get('second')
// //     console.log(t,hours,minutes,seconds)
//     $("#remaining_time").html(hours+":"+minutes+":"+seconds);
//     if (ukTime.valueOf() <= remaingHrs) {
//       clearInterval(x); 
//       document.getElementById("demo").innerHTML = "TIME UP"; 
//       //       document.getElementById("day").innerHTML ='0'; 
//       //       document.getElementById("hour").innerHTML ='0'; 
//       //       document.getElementById("minute").innerHTML ='0' ; 
//       //       document.getElementById("second").innerHTML = '0'; 
//     } 
//   }, 100); 

if ($(window).width() <= 798) {
  $(window).scroll(function(){
    var body= $('body'),
        scroll = $(window).scrollTop();

    if (scroll >= 100) body.addClass('promo-unsticky');
    else body.removeClass('promo-unsticky');
  });
}

function removeItems(items) {
  console.log(items)
  var itemsProcessed = items;
  console.log(itemsProcessed)
  var itemsArray = itemsProcessed.split(',');
  var qty = 0;
  var data = { updates: {} };

  for (i = 0; i < itemsArray.length; i++) {
    data.updates[itemsArray[i]] = qty;
  }

  jQuery.ajax({
    type: 'POST',
    url: '/cart/update.js',
    data: data,
    dataType: 'json',
    success: function() { 
      window.location.reload();
    }
  });

}

$(document).ready(function(e){
  $('body').on('click','.bundle-remove a',function(e){
    e.preventDefault();
    var ids = $(this).attr('data-ids');
    removeItems(ids);
  })
})

$( function() {
  if($( "#datepicker" ).length>0){
    $( "#datepicker" ).datepicker({
      format: 'dd/mm/yyyy',
      zIndex:99999,
      autoHide:true,
      changeYear: true
    });
    $( ".selector" ).datepicker({
      format: 'dd/mm/yyyy',
      zIndex:99999,
      autoHide:true,
      changeYear: true
    });
    var changeYear = $( ".selector" ).datepicker( "option", "changeYear" );
    $( ".selector" ).datepicker( "option", "changeYear", true );
  }
});


//remainder form validation

if($('body').hasClass('product')){
  $(document).ready(function() {
    
    //Swal.fire({title:"Loading...",showConfirmButton:false,allowOutsideClick:false});
    $('#submit_reminder').prop('disabled', true);
    $.ajax({
      type: 'GET',
      url: 'https://reminderapp.stalwartdigital.com/public/api/getToken',
      dataType: "json",
      success: function(data) {
        //        console.log(data);
        var token= data.Response.data.token;
        $("#token").val(data.Response.data.token);
        if(data.Code == 201){
          $('#submit_reminder').prop('disabled', false);
          Swal.close();                     	
        } 
        //        console.log(data.Response.data.token);
      },
      error: function(data, textStatus, jqXHR) {
        Swal.close();                     	      			      			
        //process error msg
        console.log(data);
        console.log(textStatus);
        console.log(jqXHR);
      }

    });
    //    datepicker settings
    if($("#reminder_date").length){
      $('#reminder_date').datepicker({
        format: 'dd/mm/yyyy',
        startDate: new Date(),
        zIndex:99999,
        autoHide:true
      });
//       $("#reminder_date").datepicker({
//         minDate: 0
//       });
//       $("#reminder_date").datepicker("option", "dateFormat", "yy/mm/dd");
      //    datepicker settings end
    }
    $("#remaindervalidation").validate({
      rules: {
        reminder_date: "required",
        name: "required",
        email: {
          required: true,
          email: true
        },
        messsage: "required",
      },
      messages: {
        reminder_date: "Please enter date",
        name: "Please enter your name",
        email: "Please enter a valid email address",
        messsage: "Please enter message to go in you email for remainder"
      },
      submitHandler: function(form) {
        Swal.fire({title:"Saving...",showConfirmButton:false,allowOutsideClick:false});
        $('#submit_reminder').prop('disabled', true);
        //       form.submit();
        var formData = {
          sending_date: $("#reminder_date").val(),
          name: $("#name").val(),
          email: $("#email").val(),
          message: $("#message").val(),
          token:$("#token").val(),       
          product_url:$("#product_url").val(),
          product_image_url:$("#product_image_url").val(),
          product_title:$("#product_title").val(),
          product_id:$("#product_id").val(),

        };
        console.log(formData);
        if($("#token").val().length>0){

          $.ajax({
            type: "POST",
            url: "https://reminderapp.stalwartdigital.com/public/api/addRemainder",
            data: formData,
            dataType: "json",                 
            success: function(data) {
              console.log('from submitdata');
              console.log(data);                      		             

              if(data.Code == 200){
                Swal.close();
                $('.reminder-form').hide();
                $('.thanx-msg').show();
                $('span#remider_date').text($("#reminder_date").val());
                $("#remaindervalidation")[0].reset();
                
                $('#submit_reminder').prop('disabled', false);
              }
            },
            error: function(data, textStatus, jqXHR) {
              //process error 
              Swal.close();
              $('.reminder-form').show();
              $('.thanx-msg').hide();
              console.log(data);
              console.log(textStatus);
              console.log(jqXHR);
            }
            // encode: true,
          }).done(function (data) {

          });
        }
        else{
          alert('Invalid Request, please try again later');
        }
      }
    });
  });
}

if(cart_attr_size<=0){
  window.localStorage.removeItem('DeliveryDate');
  window.localStorage.removeItem('DeliveryDay');
}

if($('body').hasClass('cart')){
  
  if($('[data-toggle="datepicker"]').length){
    $('[data-toggle="datepicker"]').datepicker({
      dateFormat:'mm/dd/yy',
      onSelect:function(date){
        var date = $(this).datepicker('getDate');
        var selected_date = $.datepicker.formatDate('mm/dd/yy', date),selected_day= $.datepicker.formatDate('DD', date);
        jQuery.ajax({
          type: 'POST',
          url: '/cart/update.js', 
          data:`attributes[Delivery Date]=${selected_date}&attributes[Delivery Day]=${selected_day}`,
          dataType: 'json',
          success: function(cart) {
            customerStorage.setItem('DeliveryDate', selected_date);
            customerStorage.setItem('DeliveryDay', selected_day);
            console.log('success: delivery date set up')
            console.log(cart)
          }
        });
      }
    });
    $('[data-toggle="datepicker"]').on('keyup change',function(){
    
      var val = $(this).val();
      if(val.length<=0){
        jQuery.ajax({
          type: 'POST',
          url: '/cart/update.js', 
          data:`attributes[Delivery Date]=&attributes[Delivery Day]=`,
          dataType: 'json',
          success: function(cart) {
            console.log('success: delivery date cleared')
            window.localStorage.removeItem('DeliveryDate');
            window.localStorage.removeItem('DeliveryDay');
            console.log(cart)
          }
        });
      }
    })
  }
}



  if (customerStorage.getItem('DeliveryDate') != null || customerStorage.getItem('DeliveryDay') != null) {
    jQuery.ajax({
      type: 'POST',
      url: '/cart/update.js', 
      data:`attributes[Delivery Date]=${customerStorage.getItem('DeliveryDate')}&attributes[Delivery Day]=${customerStorage.getItem('DeliveryDay')}`,
      dataType: 'json',
      success: function(cart) {
        console.log('success: delivery date set up from local storage')
        console.log(cart)
      }
    });
  }

$("#msMultiCheckout").on('click',function(e){
  if (customerStorage.getItem('DeliveryDate') != null || customerStorage.getItem('DeliveryDay') != null) {
    jQuery.ajax({
      type: 'POST',
      url: '/cart/update.js', 
      data:`attributes[Delivery Date]=${customerStorage.getItem('DeliveryDate')}&attributes[Delivery Day]=${customerStorage.getItem('DeliveryDay')}`,
      dataType: 'json',
      success: function(cart) {
        console.log('success: delivery date set up from local storage')
        console.log(cart)
      }
    });
  }
})