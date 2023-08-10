$(function () {
    $('.faqs dd').hide();
    $('.faqs dt').click(function () {
        let dt = $(this);
        let plusminus = dt.children('.plusminus');
        let dd = dt.next('.faqs dd');
        
        if (dd.is(':hidden')) {
            dd.slideToggle(500);
            plusminus.text(plusminus.text() == '+' ? '-' : '+');
            dt.toggleClass('border-bottom');
            
        } else {
            setTimeout(function () {
                dt.toggleClass('border-bottom');
            }, 500);
            dd.slideToggle(500);
            plusminus.text(plusminus.text() == '+' ? '-' : '+');
        }
    });
});