$(function(){
 
 // ハンバーガーメニュー
  $('#btn').on('click',function(){
    $(this).toggleClass('is-active');
    
    // ナビゲーションの切り替え
    // $('#g-nav').slideToggle();
    $('#g-nav').toggleClass('slide');
    
  });  
  
  //ナビボタンをクリックしたら
  $('#g-nav').on('click',function(){
    
    $('#g-nav').removeClass('slide');
    $('#btn').removeClass('is-active');
    
    //スムーススクロール・コンソール確認
    let target = $(this).attr('href');
    let href = $(target);
    let position = href.offset().top;
    $('html,body').animation({scrollTop:position});
    return false;
  });
  
  //h1
    $('.txt-box').on('click',function(){
      $('h1').addClass('click');
    });
    
});
