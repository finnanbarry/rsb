$(document).ready(function(){

  // BACKGROUND COLOUR PAIRS
  var colour1 = ["#FEC178", "#E14E42"],
      colour2 = ["#D6D4D6", "#DC6873"],
      colour3 = ["#BBBADD", "#FDA67E"],
      colour4 = ["#2FA54C", "#845BDB"],
      colour5 = ["#CBA4A5", "#1F63A2"],
      colour6 = ["#5D76DB", "#1D7779"];

  var colourList = [colour1, colour2, colour3, colour4, colour5, colour6];
  var chosen = colourList[Math.floor(Math.random() * colourList.length)];

  $(".left_box").css('background-color', chosen[0]);
  $(".right_box").css('background-color', chosen[1]);

  // $("#info_extra_l_switch").click(function(){
  //   $(".info_extra_l").css("display", "block");
  //   $("#info_extra_l_switch").css("display", "none");
  //   $('.l_intro_box').css('height', 'auto');
  // });
  //
  // $("#info_extra_r_switch").click(function(){
  //   $(".info_extra_r").css("display", "block");
  //   $("#info_extra_r_switch").css("display", "none");
  //   $('.r_intro_box').css('height', 'auto');
  // });

  $('.clicker').click(function(){
    $(this).children('.info_extra').css('display', 'block');
    $(this).children('.info_clicker').css("display", "none");
  });

  $(".centre-drag").draggable({
    axis: "x",
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
      subPos   = String(truePos).substring(0,2);
      console.log(subPos);


      $(".left_box").css('width', 'calc(' + (truePos) + '% - 7.5px)');
      $(".right_box").css('width', 'calc(' + (100 - truePos) + '% - 7.5px)');
      $(".arrow-left").css('left', 'calc(' + (truePos) + '% - 80px)');
      $(".arrow-right").css('left', 'calc(' + (truePos) + '% + 80px)');

  // box shape
  // if (subPos <= 10){
  //   // $(".centre-drag").css('left', '10%');
  //   $(".left_box").css('width', 'calc(' + (truePos) + '% - 7.5px)');
  //   $(".right_box").css('width', 'calc(' + (100 - truePos) + '% - 7.5px)');
  // } else {
  //   $(".left_box").css('width', 'calc(10% - 7.5px)');
  //   $(".right_box").css('width', 'calc(90% - 7.5px)');
  // };

  if (subPos >= 50) {
    $(".left_box").css('font-size', '0.5em');
    $(".right_box").css('font-size', '0.' + (100 - subPos) + 'em');
  } else if (subPos <= 50) {
    $(".left_box").css('font-size', '0.' + (subPos) + 'em');
    $(".right_box").css('font-size', '0.5em');
  };

};
