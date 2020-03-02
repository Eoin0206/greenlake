$(document).ready(function() {
    $('.aside-img').on('click', function(){
        $current_carousel = $(this);
        $('.aside-img').each(function(){
            if($(this).hasClass('aside-active')){
                $(this).removeClass('aside-active');
            }
        });
        $($current_carousel).addClass('aside-active');
        $('.img-slide').each(function(){
            if($($current_carousel).attr('data-slide') == $(this).attr('data-slide')){
                if($(this).hasClass('d-none')){
                    $(this).removeClass('d-none');
                }
            }else{
                if(!$(this).hasClass('d-none')){
                    $(this).addClass('d-none');
                }
            }
        });
    })
});