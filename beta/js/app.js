window.onload = function () {

  $('#loading').fadeOut();

  var mobCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  if( mobCheck ) {
    $(".left_box").addClass('mob_left');
    $(".right_box").addClass('mob_right');

    $( ".mob_right" ).delay(800).animate({ right: "-80%" }, 1500 );
    $( ".mob_left" ).delay(800).animate({ left: "0%" }, 1500 );
  };

  $( ".mob_left" ).click(function() {
    $( ".mob_right" ).animate({ right: "-80%" }, 500 );
    $( ".mob_left" ).animate({ left: "0%" }, 500 );
  });

  $( ".mob_right" ).click(function() {
    $( ".mob_right" ).animate({ right: "0%" }, 500 );
    $( ".mob_left" ).animate({ left: "-80%" }, 500 );
  });

  $(".box").on("swiperight",function(){
    $( ".mob_right" ).animate({ right: "-80%" }, 500 );
    $( ".mob_left" ).animate({ left: "0%" }, 500 );
  });

  $(".box").on("swipeleft",function(){
    $( ".mob_right" ).animate({ right: "0%" }, 500 );
    $( ".mob_left" ).animate({ left: "-80%" }, 500 );
  });

};

$(document).ready(function(){

  // BACKGROUND COLOUR PAIRS
  var colour1 = ["#c0e7f6", "#d6809d"],
      colour2 = ["#97e1e0", "#be0000"],
      colour3 = ["#a186be", "#8da5f5"],
      colour4 = ["#bab9d8", "#62983a"],
      colour5 = ["#0e606b", "#ffd4cf"],
      colour6 = ["#f9c90d", "#7b42c5"];

  var colourList = [colour1, colour2, colour3, colour4, colour5, colour6];
  var chosen = colourList[Math.floor(Math.random() * colourList.length)];

  $(".left_box").css('background-color', chosen[0]);
  $(".right_box").css('background-color', chosen[1]);

  $("#info_extra_l_switch").click(function(){
    $('.l_intro_box').css('height', 'auto');
    $("#info_extra_l_switch").css('cursor', 'auto');
  });

  $("#info_extra_r_switch").click(function(){
    $('.r_intro_box').css('height', 'auto');
    $("#info_extra_r_switch").css('cursor', 'auto');
  });

  $('.clicker').click(function(){
    $(this).children('.info_extra').css('display', 'block');
    $(this).children('.info_clicker').css("display", "none");
    $(this).removeClass('clicker');
  });

  $(".centre-drag").draggable({
    axis: "x",
    containment: "parent",
    drag: function() { setDrag(); },
    stop: function() { setDrag(); }
  });

  $('.centre-drag').hover(function(){
    $(".indicate").css("display", "block");
  }, function(){
    $(".indicate").css("display", "none");
  });

});


function setDrag() {

  var fullSize = window.innerWidth,
      barPos   = $('.centre-drag').position(),
      // true position 42.221213
      truePos  = 100 / (fullSize / (barPos.left + 7.5)),
      // two digit position
      subPos   = String(truePos).substring(0,2),
      leBox    = $('.left_box').width(),
      riBox    = $('.right_box').width();

  $(".left_box").css('width', 'calc(' + (truePos) + '% - 7.5px + 13%)');
  $(".right_box").css('width', 'calc(' + (100 - truePos) + '% - 7.5px - 13%)');

  $(".arrow-left").css('left', 'calc(' + (truePos) + '% - 80px + 13%)');
  $(".arrow-right").css('left', 'calc(' + (truePos) + '% + 80px + 13%)');

  $(".hidden-title-l").css('left', ((leBox / 2) - 40) );
  $(".hidden-title-r").css('right', ((riBox / 2) - 40) );

  // $(".hidden-title-l").css('left', 'calc(' + (leBox / 2) + '%)' );
  // $(".hidden-title-r").css('right', 'calc(' + 5 + '%)' );

  if (subPos >= 47) {
    $(".left_box").css('font-size', '0.5em');
    $(".right_box").css('font-size', ((74 - subPos) / 55) + 'em');
    console.log( ((37 - subPos) / 55) );
  } else if (subPos <= 27) {
    $(".left_box").css('font-size', (subPos / 55) + 'em');
    $(".right_box").css('font-size', '0.5em');
  };

  if (subPos >= 10 && subPos <= 60) {
    $(".l_holder").fadeIn();
    $(".r_holder").fadeIn();
    $(".hidden-title-l").fadeOut();
    $(".hidden-title-r").fadeOut();
  } else if (subPos <= 10) {
    console.log('left');
    $(".l_holder").fadeOut();
    $(".hidden-title-l").fadeIn();
  } else if (subPos >= 60) {
    console.log('RIGHT');
    $(".r_holder").fadeOut();
    console.log('RIGHTFADE');
    $(".hidden-title-r").fadeIn();
  };

};
