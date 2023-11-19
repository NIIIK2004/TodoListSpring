const animateButton = function (e) {
    e.preventDefault;
    e.target.classList.remove('animate');

    e.target.classList.add('animate');
    setTimeout(function () {
        e.target.classList.remove('animate');
    }, 700);
};

const bubblyButtons = document.getElementsByClassName("animate-bubble");

for (let i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
}

document.addEventListener('DOMContentLoaded', function () {
    let currentDate = new Date();
    let day = String(currentDate.getDate()).padStart(2, '0');
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let year = currentDate.getFullYear();

    let formattedDate = day + '.' + month + '.' + year;

    let widgetDateElement = document.querySelector('.widget_date');
    widgetDateElement.textContent = formattedDate;
});

const deleteButtons = document.querySelectorAll('.category__btn--delete');
deleteButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        const taskId = button.dataset.taskId;
        deleteTask(taskId);
    });
});

const MAX_NOTIFICATIONS = 3;

function createNotification(message) {
    const existingNotifications = document.querySelectorAll('.notification');
    if (existingNotifications.length >= MAX_NOTIFICATIONS) {
        existingNotifications[0].remove();
    }

    const notification = document.createElement('div');
    notification.classList.add('notification');

    const title = document.createElement('span');
    title.classList.add('notification__title');
    title.textContent = 'Уведомление';
    notification.appendChild(title);

    const text = document.createElement('p');
    text.classList.add('notification__text');
    text.innerHTML = `Ваша запись была ${message} и перемещена в раздел <a href="">удаленных записей</a>`;
    notification.appendChild(text);

    document.body.appendChild(notification);
    return notification;
}

function deleteTask(id) {
    const taskBlock = document.querySelector(`[data-task-id="${id}"]`).closest('.category_block');
    const notification = createNotification('успешно удалена');

    fetch(`/tasks/${id}/delete`, {
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            taskBlock.classList.add('category_block--deleted');
            setTimeout(() => {
                taskBlock.remove();
                notification.style.transform = 'translateX(0)';
                setTimeout(() => {
                    notification.style.transform = 'translateX(200%)';
                }, 5000);
            }, 300);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}