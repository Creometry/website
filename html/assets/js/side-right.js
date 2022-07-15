var isOpenSide = false;
$(function() {
  // Slide Menu
  $('#slidemenu').sidenav({
    edge: 'right',
    draggable: false,
    onOpenStart: function() {
      isOpenSide = true;
      $('.btn-float-opt').addClass('active');
    },
    onCloseStart: function() {
      isOpenSide = false;
      $('.btn-float-opt').removeClass('active');
    }
  });

  // Tabs
  $('.opt-wrap .tabs').tabs({ swipeable: false });

  // Menu and Tabs
  $('#open_palette').click(function() {
    isOpenSide = !isOpenSide;
    if(isOpenSide) {
      $('#slidemenu').sidenav('open')  
    } else {
      $('#slidemenu').sidenav('close')  
    }
    $('.tabs').tabs('select', 'palette_options');
  });
  $('#open_layouts').click(function() {
    isOpenSide = !isOpenSide;
    if(isOpenSide) {
      $('#slidemenu').sidenav('open')  
    } else {
      $('#slidemenu').sidenav('close')  
    }
    $('.tabs').tabs('select', 'layouts_options');
  });
  $('#open_explore').click(function() {
    isOpenSide = !isOpenSide;
    if(isOpenSide) {
      $('#slidemenu').sidenav('open')  
    } else {
      $('#slidemenu').sidenav('close')  
    }
    $('.tabs').tabs('select', 'explore_theme');
  });
  $('#close_sideright').click(function() {
    $('#slidemenu').sidenav('close')  
  });

  // Dark Light Mode
  $('#theme_switcher_side').change(function() {
    if($(this).is(':checked')) {
      // dark
      localStorage.setItem('nirwanaDarkMode', "true");
      $('#app').removeClass('theme--light');
      $('#app').addClass('theme--dark');
    } else {
      // light
      localStorage.setItem('nirwanaDarkMode', "false");
      $('#app').removeClass('theme--dark');
      $('#app').addClass('theme--light');
    }
  });

  // Direction swithcer
  $('#dir_switcher_side').change(function() {
    if($(this).is(':checked')) {
      // RTL
      $('html').attr('dir', 'rtl');
    } else {
      // LTR
      $('html').attr('dir', 'ltr');
    }
  });

  // Image Switcher
  var img23d = document.getElementsByClassName('img-2d3d');
  var ill3d = true;
  $('#image_switcher_side').change(function() {
    if($(this).is(':checked')) {
      for (var i = 0; i < img23d.length; i++) {
        img23d[i].setAttribute('src', img23d[i].getAttribute('data-3d'));
      }
    } else {
      for (var i = 0; i < img23d.length; i++) {
        img23d[i].setAttribute('src', img23d[i].getAttribute('data-2d'));
      }
    }
  });

  // Theme color switcher
  $('.theme-color .swatch').click(function() {
    var color = $(this).data('color'),
        themeWrap = $("*[class*='-var']");
    
    // Change selected active class
    $('.theme-color .swatch').removeClass('active');
    $(this).addClass('active');

    // Remove Prev color-var
    themeWrap.attr('class', function(_, old){
      return $.grep(old.split(/ +/), function(v){
        return !v.match(/-var/);
      }).join(' ');
    });
    // Apply new color
    $('#main-wrap').addClass(color+'-var')
  });

  // Layout Components Swither
  // Header
  
  $('#custom_header .ly-btn').click(function() {
    var headerType = $(this).data('header');
    $('.header-component').removeClass('active');
    $('.header-'+headerType).addClass('active');

    $('#custom_header .ly-btn').removeClass('active');
    $(this).addClass('active');
    
    // Specific element
    if(headerType === 'hamburger' || headerType === 'basic' || headerType === 'search') {
      $('#mobile_menu').hide();
    } else {
      $('#mobile_menu').show();
    }
    
    if(headerType === 'basic') {
      $('nav.user-menu .btn-flat').hide();
    } else {
      $('nav.user-menu .btn-flat').show();
    }
  });

  // Footer
  $('#custom_footer .ly-btn').click(function() {
    var footerType = $(this).data('footer');
    $('.footer-component').removeClass('active');
    $('#footer-'+footerType).addClass('active');

    $('#custom_footer .ly-btn').removeClass('active');
    $(this).addClass('active');
  });

  // Corner
  $('#custom_corner .ly-btn').click(function() {
    var cornerType = $(this).data('corner');
    $('.corner-component').removeClass('active');
    $('#corner-'+cornerType).addClass('active');
  
    $('#custom_corner .ly-btn').removeClass('active');
    $(this).addClass('active');
  });
});