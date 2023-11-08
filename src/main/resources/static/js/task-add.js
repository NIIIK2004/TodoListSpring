$(document).ready(function () {
    const form = $("#task-add_form");
    const nameInput = $("#name");
    const descriptionTextarea = $("#description");
    const nameError = $("#nameError");
    const descriptionError = $("#descriptionError");

    form.submit(function (event) {
        if (nameInput.val().trim() === "") {
            nameError.show();
            event.preventDefault();
        } else {
            nameError.hide();
        }

        if (descriptionTextarea.val().trim() === "") {
            descriptionError.show();
            event.preventDefault();
        } else {
            descriptionError.hide();
        }
    });
});