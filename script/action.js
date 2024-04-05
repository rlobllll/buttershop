// 메인페이지
// 메인 비주얼에 원형 캐릭터 4개 순서대로 움직이지 + 마우스 커서
$('.char_box li').eq(0).addClass('active')

let charactor = setInterval(charRolling, 2000)

let i = 0
function charRolling(){
    i++
    if(i >= 4){
        i = 0
    }
    $('.char_box li').eq(i).addClass('active').siblings().removeClass();
}

$('.char_box li').mouseenter(function(){
    clearInterval(charactor)
    $(this).addClass('active').siblings().removeClass();
    i = $(this).index()
})

$('.char_box li').mouseleave(function(){
    charactor = setInterval(charRolling, 2000)
})


//제품 좋아요 누르기 (favorite)
$('.favorite').each(function(){
    favorite.call(this)
})

$('.favorite').click(function(){
    $(this).toggleClass('on')
    favorite.call(this)
    return false
})

function favorite(){
    if($(this).hasClass('on')){
        $(this).text('♥').css({color:'#ebd368'});
    } else {
        $(this).text('♡').css({color:''});
    }
}


//최근 본 상품
//parseInt() -> 숫자로 바꿔주는 
let todayTop = parseInt($('.prod_today').css('top')) ; //250px

let prodNavPosi
if($('#section_sub').length > 0){   // <<<- 서브페이지 상세보기 부분
    prodNavPosi = $('.prod_nav').offset().top; 
}


$(window).scroll(function(){
    let scrT = $(window).scrollTop();

    $('.prod_today').stop().animate({top:scrT+300},1000)

    if (scrT >= prodNavPosi){  // <<<- 서브페이지 상세보기 부분
        $('.prod_nav').addClass('active')
    } else {
        $('.prod_nav').removeClass('active')
    }

    /* $('.prod_today a').text(scrT) */

})

$('.small_img li').mouseenter(function(){
    let imgSrc = $(this).find('img').attr('src');
    $('.big_img img').attr('src',imgSrc);
    $(this).addClass('active').siblings().removeClass();
})


// 서브페이지 상세보기부분
$('.prod_nav a').click(function(){
    let prodNavHref = $(this).attr('href');

    let prodNavTop = $(prodNavHref).offset().top;

    $('html').animate({scrollTop:prodNavTop - 70})
})