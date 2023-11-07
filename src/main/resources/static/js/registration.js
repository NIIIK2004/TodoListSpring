$(document).ready(function () {
    function validateName() {
        const nameValue = $("#name").val();
        const nameError = $("#nameError");
        const nameMaxError = $("#nameMaxError");
        const regex = /^[A-Za-zА-Яа-я\-]+$/;

        if (nameValue.trim() === "") {
            nameError.removeClass("error--active");
            nameMaxError.removeClass("error--active");
            return false;
        }

        if (!regex.test(nameValue)) {
            nameError.addClass("error--active");
            return false;
        } else {
            nameError.removeClass("error--active");
        }

        if (nameValue.length > 50) {
            nameMaxError.addClass("error--active");
            return false;
        } else {
            nameMaxError.removeClass("error--active");
        }

        return true;
    }

    function validateSurname() {
        const surnameValue = $("#surname").val();
        const surnameError = $("#surnameError");
        const surnameMaxError = $("#surnameMaxError");
        const regex = /^[A-Za-zА-Яа-я\-]+$/;

        if (surnameValue.trim() === "") {
            surnameError.removeClass("error--active");
            surnameMaxError.removeClass("error--active");
            return false;
        }

        if (!regex.test(surnameValue)) {
            surnameError.addClass("error--active");
            return false;
        } else {
            surnameError.removeClass("error--active");
        }

        if (surnameValue.length > 50) {
            surnameMaxError.addClass("error--active");
            return false;
        } else {
            surnameMaxError.removeClass("error--active");
        }

        return true;
    }

    function validateEmail() {
        const emailValue = $("#email").val();
        const emailError = $("#emailError");
        const emailLengthError = $("#emailLengthError");
        const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        if (emailValue.trim() === "") {
            emailError.removeClass("error--active");
            emailLengthError.removeClass("error--active");
            return false;
        }

        if (!regex.test(emailValue)) {
            emailError.addClass("error--active");
            return false;
        } else {
            emailError.removeClass("error--active");
        }

        if (emailValue.length > 80) {
            emailLengthError.addClass("error--active");
            return false;
        } else {
            emailLengthError.removeClass("error--active");
        }

        return true;
    }

    function validateLogin() {
        const loginValue = $("#login").val();
        const loginError = $("#loginError");
        const loginCheckError = $("#loginCheckError");
        const loginLengthError = $("#loginLengthError");
        const loginMaxError = $("#loginMaxError");

        if (loginValue.trim() === "") {
            loginError.removeClass("error--active");
            loginLengthError.removeClass("error--active");
            return false;
        }

        let valid = true;

        if (/[А-Яа-я]/.test(loginValue) || !/^[a-zA-Z0-9_]+$/.test(loginValue)) {
            loginError.addClass("error--active");
            valid = false;
        } else {
            loginError.removeClass("error--active");
        }

        if (loginValue.length < 5) {
            loginLengthError.addClass("error--active");
            valid = false;
        } else {
            loginLengthError.removeClass("error--active");
        }

        if (loginValue.length > 60) {
            loginMaxError.addClass("error--active");
            valid = false;
        } else {
            loginMaxError.removeClass("error--active");
        }

        return valid;
    }

    function validatePassword() {
        const passwordValue = $("#password").val();
        const passwordError = $("#passwordError");
        const passwordLengthError = $("#passwordLengthError");
        const passwordMaxError = $("#passwordMaxError");

        if (passwordValue.trim() === "") {
            passwordError.removeClass("error--active");
            passwordLengthError.removeClass("error--active");
            passwordMaxError.removeClass("error--active");
            return false;
        }

        let valid = true;

        if (/[А-Яа-я]/.test(passwordValue)) {
            passwordError.addClass("error--active");
            valid = false;
        } else {
            passwordError.removeClass("error--active");
        }

        if (passwordValue.length < 5) {
            passwordLengthError.addClass("error--active");
            valid = false;
        } else {
            passwordLengthError.removeClass("error--active");
        }

        if (passwordValue.length > 60) {
            passwordMaxError.addClass("error--active");
            valid = false;
        } else {
            passwordMaxError.removeClass("error--active");
        }

        return valid;
    }

    function updateSubmitButtonState() {
        const nameValid = validateName();
        const surnameValid = validateSurname();
        const emailValid = validateEmail();
        const loginValid = validateLogin();
        const passwordValid = validatePassword();

        const submitButton = $("#registration-btn");

        if (nameValid && surnameValid && emailValid && loginValid && passwordValid) {
            submitButton.prop("disabled", false);
            submitButton.css("opacity", "1");
            submitButton.css("pointer-events", "auto");
        } else {
            submitButton.prop("disabled", true);
            submitButton.css("opacity", "0.6");
            submitButton.css("pointer-events", "none");
        }
    }

    $("#name").on("input", updateSubmitButtonState);
    $("#surname").on("input", updateSubmitButtonState);
    $("#email").on("input", updateSubmitButtonState);
    $("#login").on("input", updateSubmitButtonState);
    $("#password").on("input", updateSubmitButtonState);
    updateSubmitButtonState();
});