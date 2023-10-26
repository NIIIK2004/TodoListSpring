$(document).ready(function () {
    function validateField(value, errorElement, minLength, noCyrillic) {
        if (value.trim() === "") {
            errorElement.removeClass("error--active");
            return;
        }

        if (minLength && value.length < minLength) {
            errorElement.addClass("error--active");
        } else {
            errorElement.removeClass("error--active");
        }

        if (noCyrillic && /[А-Яа-я]/.test(value)) {
            errorElement.addClass("error--active");
        } else {
            errorElement.removeClass("error--active");
        }
    }

    function validateName() {
        const nameValue = $("#name").val();
        const nameError = $("#nameError");
        validateField(nameValue, nameError, 2);
    }

    function validateSurname() {
        const surnameValue = $("#surname").val();
        const surnameError = $("#surnameError");
        validateField(surnameValue, surnameError, 2);
    }

    function validateLogin() {
        const loginValue = $("#login").val();
        const loginError = $("#loginError");
        const loginLengthError = $("#loginLengthError");

        if (loginValue.trim() === "") {
            loginError.removeClass("error--active");
            loginLengthError.removeClass("error--active");
            return;
        }

        if (/[А-Яа-я]/.test(loginValue)) {
            loginError.addClass("error--active");
        } else {
            loginError.removeClass("error--active");
        }

        if (loginValue.length < 5) {
            loginLengthError.addClass("error--active");
        } else {
            loginLengthError.removeClass("error--active");
        }
    }

    function validatePassword() {
        const passwordValue = $("#password").val();
        const passwordError = $("#passwordError");
        const passwordLengthError = $("#passwordLengthError");

        if (passwordValue.trim() === "") {
            passwordError.removeClass("error--active");
            passwordLengthError.removeClass("error--active");
            return;
        }

        if (passwordValue.length < 5) {
            passwordLengthError.addClass("error--active");
        } else {
            passwordLengthError.removeClass("error--active");
        }

        if (/[А-Яа-я]/.test(passwordValue)) {
            passwordError.addClass("error--active");
        } else {
            passwordError.removeClass("error--active");
        }
    }

    $("#name").blur(validateName);
    $("#surname").blur(validateSurname);
    $("#login").blur(validateLogin);
    $("#password").blur(validatePassword);
});