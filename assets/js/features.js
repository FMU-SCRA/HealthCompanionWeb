const gra = function(min, max) {
    return Math.random() * (max - min) + min;
}
// const init = function(){
//     let items = document.querySelectorAll('section');
//     for (let i = 0; i < items.length; i++){
//         items[i].style.background = randomColor({luminosity: 'light'});
//     }
//     cssScrollSnapPolyfill()
// }
// init();

// $("myListBP").each(function (i) {
//     $(this).attr("style", "-webkit-animation-delay:" + i * 200 + "ms;"
//                  + "-moz-animation-delay:" + i * 200 + "ms;"
//                  + "-o-animation-delay:" + i * 200 + "ms;"
//                  + "animation-delay:" + i * 200 + "ms;");
//     if (i == $(".myList li").size() -1) {
//         $(".myList").addClass("play")
//     }
// });

$(window).scroll(function() {
  var i = 0;
  console.log("TEST");
  // $( "ul li" ).css( "display", "inline" ).fadeIn( "slow" );
  $('ul li').each(function() {
    var _this = $(this);
    setTimeout(function() {
      _this.fadeIn();
    }, i*1000);
    i++;
  });

});
