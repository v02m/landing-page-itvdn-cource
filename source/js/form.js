;(function(){
    var me = {};
    var form = document.querySelector('.form-container');
    var closeButton = null;

    function onClose(e) {
        e.preventDefault();
        me.close();
        closeButton.removeEventListener('click', onClose);
    }

    me.open = function() {
        form.classList.remove('is-hidden');

        closeButton = document.querySelector('.form__close-button');
        closeButton.addEventListener('click', onClose);
        document.addEventListener('keyup', function(e) {
            if (e.keyCode == 27) {
                onClose(e);
            }
        });
    };

    me.close = function() {
        form.classList.add('is-hidden');
    };

    me.isValid = function() {
        var requiredFields = document.querySelectorAll("[data-valid='required']");
        var emailValue = document.querySelector('[data-email]').value;
        var numberValue = document.querySelector('[data-number]').value;

        if(!me.isAllCompleted(requiredFields)) {
            console.log("Inputs must be required");
            return false;
        } else if(!Business.validation.isEmail(emailValue)) {
            console.log("Wrong email");
            return false;
        } else if(!Business.validation.isNumber(numberValue)) {
            console.log("Wrong number");
            return false;
        }

        return true
    };

    me.isAllCompleted = function(data) {
        var result = true;

        for (var i = 0; i < data.length; i++){
            if(!Business.validation.isNotEmpty(data[i].value)) {
                result = false;
                break
            }
        }

        return result;
    };

    Business.form = me;
}());