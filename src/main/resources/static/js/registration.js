$(document).ready(function () {
    function validateName() {
        const nameValue = $("#name").val();
        const nameError = $("#nameError");
        const regex = /^[A-Za-zА-Яа-яЁё\-]+$/;

        if (nameValue.trim() === "") {
            nameError.removeClass("error--active");
            return false;
        }

        if (!regex.test(nameValue)) {
            nameError.addClass("error--active");
            return false;
        } else {
            nameError.removeClass("error--active");
            return true;
        }
    }

    function validateSurname() {
        const surnameValue = $("#surname").val();
        const surnameError = $("#surnameError");
        const regex = /^[A-Za-zА-Яа-яЁё\-]+$/;

        if (surnameValue.trim() === "") {
            surnameError.removeClass("error--active");
            return false;
        }

        if (!regex.test(surnameValue)) {
            surnameError.addClass("error--active");
            return false;
        } else {
            surnameError.removeClass("error--active");
            return true;
        }
    }

    function validateLogin() {
        const loginValue = $("#login").val();
        const loginError = $("#loginError");
        const loginLengthError = $("#loginLengthError");

        if (loginValue.trim() === "") {
            loginError.removeClass("error--active");
            loginLengthError.removeClass("error--active");
            return false;
        }

        if (/[А-Яа-я]/.test(loginValue)) {
            loginError.addClass("error--active");
            return false;
        } else {
            loginError.removeClass("error--active");
        }

        if (loginValue.length < 5) {
            loginLengthError.addClass("error--active");
            return false;
        } else {
            loginLengthError.removeClass("error--active");
        }

        return true;
    }

    function validatePassword() {
        const passwordValue = $("#password").val();
        const passwordError = $("#passwordError");
        const passwordLengthError = $("#passwordLengthError");

        if (passwordValue.trim() === "") {
            passwordError.removeClass("error--active");
            passwordLengthError.removeClass("error--active");
            return false;
        }

        if (passwordValue.length < 5) {
            passwordLengthError.addClass("error--active");
            return false;
        } else {
            passwordLengthError.removeClass("error--active");
        }

        if (/[А-Яа-я]/.test(passwordValue)) {
            passwordError.addClass("error--active");
            return false;
        } else {
            passwordError.removeClass("error--active");
        }

        return true;
    }

    function updateSubmitButtonState() {
        const nameValid = validateName();
        const surnameValid = validateSurname();
        const loginValid = validateLogin();
        const passwordValid = validatePassword();

        const submitButton = $("#registration-btn");

        if (nameValid && surnameValid && loginValid && passwordValid) {
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
    $("#login").on("input", updateSubmitButtonState);
    $("#password").on("input", updateSubmitButtonState);
    updateSubmitButtonState();
});