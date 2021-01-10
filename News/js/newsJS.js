$(document).ready(function(){

    /*****Scroll To Top ******/
    var up=$('#app>span')
    if('up:hidden'){
        $(window).on('scroll',function(){
            if($(this).scrollTop()>=400){
                up.show(100);
                
            }else{
                up.hide(100)
            };
        });
    };
    $('#app>span').on('click',function(){
        $('body,html').animate({
            scrollTop:0
        },500);
    });

/**********More Videos*********/
    var aHeight = $('.videos-container .videos-content a').css('max-height')
    $('.videos-container>button').on('click',function(){
        $('.videos-content').css({
            height:'+='+aHeight
        })
    })
/******Fixed Aside**** */
    var adLast=$('.aside .aside-ad-container .ad:last'),
        adLastPosition = adLast.offset().top;
    //console.log($(window).innerWidth()>992)
    if($(window).innerWidth()>992){
        $(window).on('scroll',function(){
        
            if($(this).scrollTop()>=adLastPosition){
                adLast.addClass('fixed')
            }else{
                adLast.removeClass('fixed')
            }
            
        })
    }
})