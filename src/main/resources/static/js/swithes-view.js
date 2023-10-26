// function showBlock(className) {
//     const wrappers = document.querySelectorAll('.tasks__wrapper');
//     wrappers.forEach(wrapper => {
//         if (wrapper.classList.contains(className)) {
//             wrapper.classList.add('active');
//         } else {
//             wrapper.classList.remove('active');
//         }
//     });
// }


function showBlock(className) {
    const wrappers = document.querySelectorAll('.tasks__wrapper');
    wrappers.forEach(wrapper => {
        if (wrapper.classList.contains(className)) {
            wrapper.classList.add('active');
        } else {
            wrapper.classList.remove('active');
        }
    });

    const buttons = document.querySelectorAll('.switches_buttons');
    buttons.forEach(button => {
        button.style.background = '';
        button.style.border = '';
        button.style.color = '';

        const svgPaths = button.querySelectorAll('svg path');
        if (svgPaths.length > 0) {
            svgPaths.forEach(path => {
                path.setAttribute('fill', 'currentColor');
            });
        }
    });

    const selectedButton = document.querySelector(`[onclick="showBlock('${className}')"]`);
    if (selectedButton) {
        selectedButton.style.background = 'var(--accent)';
        selectedButton.style.border = 'solid 1px transparent';
        selectedButton.style.color = 'white';

        const selectedSvgPaths = selectedButton.querySelectorAll('svg path');
        if (selectedSvgPaths.length > 0) {
            selectedSvgPaths.forEach(path => {
                path.setAttribute('fill', 'white');
            });
        }
    }

    // Добавляем обработку для первой кнопки
    const firstButton = document.querySelector("[onclick=\"showBlock('one-view')\"]");
    if (firstButton && className !== 'one-view') {
        firstButton.style.background = 'transparent';
        firstButton.style.border = 'solid 1px #EA4C60';
        firstButton.style.color = '#EA4C60';
        const firstSvgPaths = firstButton.querySelectorAll('svg path');
        if (firstSvgPaths.length > 0) {
            firstSvgPaths.forEach(path => {
                path.setAttribute('fill', '#EA4C60');
            });
        }
    }
}
