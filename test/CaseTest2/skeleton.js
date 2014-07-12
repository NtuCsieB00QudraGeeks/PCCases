  $(function() {
  //     $('.playground').append("哈囉,\n");
  //   $('.playground').append("世界!");
  //   $('.playground').css("background","#ff8");
  //   $('#playground').css("color","blue");
  //   $('#playground').css("marginLeft",  100);
  //   $('#playground').css("marginRight", 100);
  //       $('#playground').mouseenter(function () {
  //       $(this).animate({
  //   marginLeft:  20,
  //   marginRight: 20,
  //     }, 1000
  // );
  //   });
  //   $('#playground').mouseleave(function () {
  //       $(this).animate({
  //   marginLeft:  100,
  //   marginRight: 100,
  //     }, 1000
  // );
    // });

    $('.test').on('click',function(){
      alert("我是他媽的流水號!");
    })
    $('.instructor').on('click',function(){
      alert("下一位講師是張喇堯！");
    })

    $('.rollCall').on('click',function(){
      // alert("click!");
      // $(this).css("color","blue");
      $('.NameList').toggle('fold');
      $('.rowData').toggle('fold');
    });



  });


