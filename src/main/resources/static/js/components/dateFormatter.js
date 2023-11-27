export function formattedDisplayDates(selector) {
    const months = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
        'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ];

    const elements = document.querySelectorAll(selector);
    elements.forEach(element => {
        const originalDate = element.textContent;
        const date = new Date(originalDate);
        const month = months[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        element.textContent = `${month}, ${day} ${year}`;
    });
}