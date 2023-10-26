const textareas = document.querySelectorAll('[data-auto-resize="true"]');

function autoResizeTextarea() {
    textareas.forEach((textarea) => {
        textarea.style.height = 'auto';
        textarea.style.height = (textarea.scrollHeight + 2) + 'px';
    });
}

textareas.forEach((textarea) => {
    textarea.addEventListener('input', autoResizeTextarea);
});

window.addEventListener('load', autoResizeTextarea);