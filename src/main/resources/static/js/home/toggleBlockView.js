export function showBlock() {
    const buttons = document.querySelectorAll('.switches__button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const view = button.getAttribute('data-view');
            if (view) {
                const wrappers = document.querySelectorAll('.tasks__wrapper');
                wrappers.forEach(wrapper => {
                    if (wrapper.classList.contains(view)) {
                        wrapper.classList.add('active');
                    } else {
                        wrapper.classList.remove('active');
                    }
                });

                buttons.forEach(btn => {
                    btn.classList.remove('switches__button--active');
                });

                button.classList.add('switches__button--active');
            }
        });
    });
}