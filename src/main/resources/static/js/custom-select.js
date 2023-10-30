document.addEventListener('DOMContentLoaded', function () {
    const selects = document.querySelectorAll('.select');
    const errorStatusElement = document.querySelector('.error--status');
    const errorCategoryElement = document.querySelector('.error--category');

    for (let i = 0; i < selects.length; i++) {
        const select = selects[i];
        const options = select.querySelectorAll('option');

        const cSelect = document.createElement('div');
        const cSelectList = document.createElement('div');
        const cSelectCurrent = document.createElement('div');
        const statusNameSpan = document.createElement('span');

        const customSelectClass = select.classList.contains('custom-select--status')
            ? 'custom-select--status'
            : select.classList.contains('custom-select--category')
                ? 'custom-select--category'
                : '';

        cSelect.className = 'custom-select input';
        cSelectList.className = 'custom-select__list custom-scrollbar';
        cSelectCurrent.className = 'input-field custom-select__current ' + customSelectClass;

        cSelectCurrent.appendChild(statusNameSpan);
        cSelect.append(cSelectCurrent, cSelectList);
        select.after(cSelect);

        const createCustomDom = (x, y) => {
            let selectItems = '';
            for (let i = 0; i < options.length; i++) {
                let option = options[i];
                if (option.value !== 'default') {
                    let selectItem = document.createElement('div');
                    const dataValue = option.getAttribute('data-value');
                    const dataValueName = option.getAttribute('data-value-name'); // Получить серверное имя
                    selectItem.className = 'custom-select__item name-status ' +
                        (customSelectClass === 'custom-select--category' ? 'name-status__category ' : '') +
                        'name-status--select';
                    selectItem.dataset.value = dataValue; // Устанавливаем айдишник
                    selectItem.dataset.valueName = dataValueName; // Устанавливаем серверное имя

                    const span = document.createElement('span');
                    selectItem.appendChild(span);
                    span.textContent = option.text;
                    selectItem.style.backgroundColor = option.style.backgroundColor;
                    selectItem.style.color = option.style.color;
                    selectItem.classList.add('name-status--' + dataValueName);

                    selectItems += selectItem.outerHTML;
                }
            }
            cSelectList.innerHTML = selectItems;
            x();
            y();

            const selectedOption = select.querySelector('option:checked');
            const dataValueName = selectedOption ? selectedOption.getAttribute('data-value-name') : '';
            cSelectCurrent.querySelector('span').textContent = selectedOption ? dataValueName : '';
            statusNameSpan.className = 'name-status name-status--select name-status--' + dataValueName;
        };

        const toggleClass = () => {
            cSelect.classList.toggle('custom-select--show');
        };

        const currentTextValue = () => {
            const selectedOption = select.querySelector('option:checked');
            cSelectCurrent.querySelector('span').textContent = selectedOption ? selectedOption.getAttribute('data-value-name') : '';
            statusNameSpan.className = 'name-status name-status--select name-status--' +
                (selectedOption ? selectedOption.getAttribute('data-value') : 'default');
        };

        const currentValue = () => {
            const items = cSelectList.children;
            for (let el = 0; el < items.length; el++) {
                let selectValue = items[el].getAttribute('data-value');
                let selectValueName = items[el].getAttribute('data-value-name');
                let selectText = items[el].textContent;
                items[el].addEventListener('click', () => {
                    cSelect.classList.remove('custom-select--show');
                    cSelectCurrent.querySelector('span').textContent = selectText;
                    select.value = selectValue;
                    statusNameSpan.textContent = selectText;
                    statusNameSpan.className = 'name-status name-status--select name-status--' + selectValueName;
                    select.classList.remove('error');
                    if (select.classList.contains('custom-select--status')) {
                        errorStatusElement.classList.remove('error--active');
                    } else if (select.classList.contains('custom-select--category')) {
                        errorCategoryElement.classList.remove('error--active');
                    }
                });
            }
        };

        const desctopFn = () => {
            cSelectCurrent.addEventListener('click', toggleClass);
        };

        const mobileFn = () => {
            select.addEventListener('input', () => {
                if (select.value === 'default') {
                    select.classList.add('error');
                    if (select.classList.contains('custom-select--status')) {
                        errorStatusElement.classList.add('error--active');
                    } else if (select.classList.contains('custom-select--category')) {
                        errorCategoryElement.classList.add('error--active');
                    }
                } else {
                    select.classList.remove('error');
                    if (select.classList.contains('custom-select--status')) {
                        errorStatusElement.classList.remove('error--active');
                    } else if (select.classList.contains('custom-select--category')) {
                        errorCategoryElement.classList.remove('error--active');
                    }
                    cSelectCurrent.querySelector('span').textContent = select.value;
                }
            });
        };

        createCustomDom(currentTextValue, currentValue);

        document.addEventListener('mouseup', (e) => {
            if (!cSelect.contains(e.target)) cSelect.classList.remove('custom-select--show');
        });

        detectmob(mobileFn, desctopFn);

        function detectmob(x, y) {
            if (navigator.userAgent.match(/Android/i) ||
                navigator.userAgent.match(/webOS/i) ||
                navigator.userAgent.match(/iPhone/i) ||
                navigator.userAgent.match(/iPad/i) ||
                navigator.userAgent.match(/iPod/i) ||
                navigator.userAgent.match(/BlackBerry/i) ||
                navigator.userAgent.match(/Windows Phone/i)
            ) {
                x();
                console.log('mobile');
            } else {
                y();
                console.log('desktop');
            }
        }
    }

    const form = document.querySelector('form');
    form.addEventListener('submit', function (e) {
        let hasError = false;
        for (let i = 0; i < selects.length; i++) {
            const select = selects[i];
            if (select.value === 'default') {
                select.classList.add('error');
                if (select.classList.contains('custom-select--status')) {
                    errorStatusElement.classList.add('error--active');
                } else if (select.classList.contains('custom-select--category')) {
                    errorCategoryElement.classList.add('error--active');
                }
                hasError = true;
            }
        }
        if (hasError) {
            e.preventDefault();
        }
    });
});