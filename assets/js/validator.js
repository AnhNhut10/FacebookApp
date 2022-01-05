function Validator(formSelector, options) {

    let formRules = {}; 

    function getParent(element, selector) {
        while (element.parentElement) {
            if (element.parentElement.matches(selector)) {
                return element.parentElement;
            }
            element = element.parentElement;
        }
    }

    let validatorRules = {
        required: function (value) {
            return value ? undefined : 'Please enter this field';
        },

        email: function (value) {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value) ? undefined : 'Please enter email';
        },

        min: function (min) {
            return function (value) {
                return value.length >= min ? undefined : `Please enter at least ${min} characters`;
            }
        },
        max: function (max) {
            return function (value) {
                return value.length <= max ? undefined : `Please enter up to ${max} characters`;
            }
        },

        confirm: function (confirmValue) {
            return document.querySelector('#register-form .input__user-password').value === confirmValue ? undefined : 'Confirm password is incorrect';
        },

        // login: function (value) {
        //     return value === 'anhnhut' ? undefined : "Account or password is incorrect"
        // }
    };

    // Lấy ra form element trong DOM theo 'formSelector'
    let formElement = document.querySelector(formSelector);

    // Chỉ xử lý khi có element trong DOM
    if (formElement) {

        const inputs = formElement.querySelectorAll('[name][rules]');
        for (var input of inputs) {
            
            let rules = input.getAttribute('rules').split('|');
            for (var rule of rules) {
                let ruleInfo;
                let isRuleHasValue = rule.includes(':');
                if (isRuleHasValue) {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                }

                let ruleFunc = validatorRules[rule];
                
                if (isRuleHasValue) {
                    ruleFunc = ruleFunc(ruleInfo[1]);
                }

                if (Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunc);

                } else {
                    formRules[input.name] = [ruleFunc];
                }
                

            }
            // Lắng nghe sự kiện để validate (blur, change, ...)
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }

        // Hàm thực hiện validate
        function handleValidate (event) {
            let rules = formRules[event.target.name];
            let errorMessage;

            for (var rule of rules) {
                errorMessage = rule(event.target.value);
                if (errorMessage) break;
            }

            // Nếu có lỗi thì hiển thị message lỗi thì hiển thị ra UI
            if (errorMessage) {
              let formGroup = getParent(event.target, '.form-group');
                if (formGroup) {
                    formGroup.classList.add('invalid');
                    let formMessage = formGroup.querySelector('.form-message');
                    if (formMessage) {
                        formMessage.innerText = errorMessage;
                    }
                }
            }
            return !errorMessage;
        }

        // Hàm clear message lỗi
        function handleClearError (event) {
            let formGroup = getParent(event.target, '.form-group');
            if (formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');

                let formMessage = formGroup.querySelector('.form-message');
                    if (formMessage) {
                        formMessage.innerText = '';
                    }
            }
        }
    }

    // Xử lý hành vi submit form 
    formElement.onsubmit = function (event) {
        event.preventDefault();

        let inputs = formElement.querySelectorAll('[name][rules]');
        let isValid = true;

        for (var input of inputs) {
            if (!handleValidate({ target: input })) {
                isValid = false;
            }
        }

        // Khi không có lỗi thì submit form 
        if (isValid) {
            formElement.submit();
        }
    }
}