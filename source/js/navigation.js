;(function(){
    var me = {};

    me.toggleToActiveLink = function(target) {
        var links = document.querySelectorAll('.nav__link');
        var showedSection = target.dataset.link;

        for (var i = 0; i < links.length; i++) {
            if (links[i].classList.contains('nav__link--active')) {
                links[i].classList.remove('nav__link--active')
            }
        }

        target.classList.add('nav__link--active');
        console.log(showedSection);
        scrollToActiveSection(showedSection);
    }

    function scrollToActiveSection(showedSection) {
        var section = document.querySelector('.' + showedSection);
        var coords = section.getBoundingClientRect();
        var animateTime = 0.4;

        var timerId= setInterval(function() {
            if(document.documentElement.scrollTop < coords.top) {
                window.scrollBy(0, 10);
                console.log(document.documentElement.scrollTop)
            } else {
                clearInterval(timerId)
            }
        }, animateTime || 0.5)
       
    }

    Business.navigation = me;
}());