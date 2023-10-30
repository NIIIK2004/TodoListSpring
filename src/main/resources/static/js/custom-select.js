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

        // класс модификатора для данного селекта
        const customSelectClass = select.classList.contains('custom-select--status')
            ? 'custom-select--status'
            : select.classList.contains('custom-select--category')
                ? 'custom-select--category'
                : '';

        cSelect.className = 'custom-select input';
        cSelectList.className = 'custom-select__list custom-scrollbar';
        cSelectCurrent.className = 'input-field custom-select__current ' + customSelectClass;

        // span с именем статуса в custom-select__current
        cSelectCurrent.appendChild(statusNameSpan);
        cSelect.append(cSelectCurrent, cSelectList);
        select.after(cSelect);

        const createCustomDom = (x, y) => {
            let selectItems = '';
            for (var i = 0; i < options.length; i++) {
                let option = options[i];
                if (option.value !== 'default') { // Проверяем, что значение не равно "default"
                    let selectItem = document.createElement('div');
                    const dataAttributeName = customSelectClass === 'custom-select--status'
                        ? 'data-status-name'
                        : customSelectClass === 'custom-select--category'
                            ? 'data-category-name'
                            : '';

                    const dataAttribute = option.getAttribute(dataAttributeName);

                    // Добавляем класс 'name-status__category' к элементу '.custom-select__item' при наличии класса 'custom-select--category'
                    selectItem.className = 'custom-select__item name-status ' + (customSelectClass === 'custom-select--category' ? 'name-status__category ' : '') + 'name-status--' + dataAttribute;
                    selectItem.dataset.value = option.value;

                    // создать и добавить <span> внутри элемента списка
                    const span = document.createElement('span');
                    selectItem.appendChild(span);

                    // добавить текст из option внутри <span>
                    span.textContent = option.text;

                    selectItem.style.backgroundColor = option.style.backgroundColor;
                    selectItem.style.color = option.style.color;

                    selectItems += selectItem.outerHTML;
                }
            }
            cSelectList.innerHTML = selectItems;
            x(), y();

            // установим начальные значения в custom-select__current
            const selectedOption = select.querySelector('option:checked');
            const dataAttributeName = customSelectClass === 'custom-select--status'
                ? 'data-status-name'
                : customSelectClass === 'custom-select--category'
                    ? 'data-category-name'
                    : '';

            const dataAttribute = selectedOption.getAttribute(dataAttributeName);

            cSelectCurrent.querySelector('span').textContent = selectedOption ? selectedOption.textContent : '';
            statusNameSpan.className = 'name-status name-status--select name-status--' + (dataAttribute || 'default');
        };

        const toggleClass = () => {
            cSelect.classList.toggle('custom-select--show');
        };

        const currentTextValue = () => {
            const selectedOption = select.querySelector('option:checked');
            cSelectCurrent.querySelector('span').textContent = selectedOption ? selectedOption.textContent : '';
            const dataAttributeName = customSelectClass === 'custom-select--status'
                ? 'data-status-name'
                : customSelectClass === 'custom-select--category'
                    ? 'data-category-name'
                    : '';

            const dataAttribute = selectedOption.getAttribute(dataAttributeName);

            statusNameSpan.className = 'name-status name-status--select name-status--' + (dataAttribute || 'default');
        };

        const currentValue = () => {
            const items = cSelectList.children;
            for (var el = 0; el < items.length; el++) {
                let selectValue = items[el].getAttribute('data-value');
                let selectText = items[el].textContent;
                items[el].addEventListener('click', () => {
                    cSelect.classList.remove('custom-select--show');
                    cSelectCurrent.querySelector('span').textContent = selectText;
                    select.value = selectValue;
                    statusNameSpan.textContent = selectText;
                    statusNameSpan.className = 'name-status name-status--select';
                    statusNameSpan.classList.add(`name-status--${selectValue}`);

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
                }
                cSelectCurrent.querySelector('span').textContent = select.value;
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

    // Добавляем обработчик события submit для формы
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
            e.preventDefault(); // Предотвращаем отправку формы, если есть ошибки
        }
    });
});