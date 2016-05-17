////////////////////////////
// http://www.adipalaz.com/experiments/jquery/accordion.html
///////////////////////////
(function($) {
//http://www.mail-archive.com/jquery-en@googlegroups.com/msg43851.html
$.fn.orphans = function(){
    var txt = [];
    this.each(function(){$.each(this.childNodes, function() {
        if (this.nodeType == 3 && $.trim(this.nodeValue)) txt.push(this)
    })}); 
    return $(txt);
};
//http://www.learningjquery.com/2008/02/simple-effects-plugins:
$.fn.fadeToggle = function(speed, easing, callback) {
    return this.animate({opacity: 'toggle'}, speed, easing, callback);
};
$.fn.slideFadeToggle = function(speed, easing, callback) {
    return this.animate({opacity: 'toggle', height: 'toggle'}, speed, easing, callback);
};
})(jQuery);
////////////////////////////
$(function() {
    $('#content div.demo .collapse').hide(); 
    $('#content div.demo .expand').orphans().wrap('<a href="#" title="expand/collapse"></a>');
    
    //demo 1 - div.demo:eq(0) - show/hide effects:
    $('div.demo:eq(0) .expand').click(function() {
        $(this).toggleClass('open').siblings().removeClass('open').end()
        .next('.collapse').toggle().siblings('.collapse:visible').toggle();
        return false;
    });
    
    //demo 2 - div.demo:eq(1) - show/hide (slow) effects:
    $('div.demo:eq(1) .expand').click(function() {
        $(this).toggleClass('open').siblings().removeClass('open').end()
        .next('.collapse').toggle('slow').siblings('.collapse:visible').toggle('slow');
        return false;
    });
    
    //demo 3 - div.demo:eq(2) - slide effects:
    $('div.demo:eq(2) .expand').click(function() {
        $(this).toggleClass('open').siblings().removeClass('open').end()
        .next('.collapse').slideToggle().siblings('.collapse:visible').slideUp();
        return false;
    });
    
    //demo 4 - div.demo:eq(3) - queued slide effects:
    $('div.demo:eq(3) .expand').click(function() {
        var $thisCllps = $(this).next('ul.collapse');
        var $cllpsVisible = $(this).siblings('.expand').next('ul.collapse:visible');
        ($cllpsVisible.length) ? $(this).toggleClass('open').siblings('.expand').removeClass('open')
            .next('ul.collapse:visible').slideUp(400, function() {
            $thisCllps.slideDown();
            }) : $thisCllps.slideToggle().prev('.expand').toggleClass('open');
        return false;
    });

    //demo 5 - div.demo:eq(4) - fadeToggle-slideFadeToggle effects:
    $('div.demo:eq(4) .expand').click(function() {
        $(this).toggleClass('open').siblings().removeClass('open').end()
        .next('.collapse').fadeToggle(800,'linear').siblings('.collapse:visible').slideFadeToggle('slow');
        return false;
    });
    
    //demo 6 - div.demo:eq(5) - slide-fade effects:
    $('div.demo:eq(5) .expand').click(function() {
        $(this).toggleClass('open').siblings().removeClass('open').end()
        .next('.collapse').slideFadeToggle('slow','linear').siblings('.collapse:visible').slideFadeToggle('slow','linear');
        return false;
    });
    
    //demo 7 - div.demo:eq(6) - nested lists - slide effects effects:
    $('div.demo:eq(6) .expand').click(function() {
        $(this).toggleClass('open').siblings().removeClass('open').end()
        .find('ul.collapse').slideToggle().parent().siblings('li').find('ul.collapse:visible').slideToggle();
        return false;
    });
});
