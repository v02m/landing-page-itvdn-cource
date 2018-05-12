;(function() {
    //Add event listener for open form button
    var openFormButton = document.querySelector('.arrow-down');
    var form = document.querySelector('.form');
    var nav = document.querySelector('.nav');

    if (openFormButton) {
        openFormButton.addEventListener('click', function(e) {
            e.preventDefault();
            Business.form.open();
        });
    }

    if (form) {
        form.addEventListener('submit', function(e){
            e.preventDefault();
            if(Business.form.isValid()) {
                console.log("Form is valid");
            } else {
                console.log('Is not valid');
            }
        });
    }

    if(nav) {
        nav.addEventListener('click', function(e) {
            var target = e.target;
            
            if (target.tagName.toLowerCase() !== 'a') {
                return;
            }
            e.preventDefault();
            Business.navigation.toggleToActiveLink(target);
        });
    }
}());