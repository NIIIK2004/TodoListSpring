import {formattedDisplayDates} from "./components/dateFormatter.js";

formattedDisplayDates('.card__date');

const deleteButtons = document.querySelectorAll('.card__btn--restore');
deleteButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        const taskId = button.dataset.taskId;
        const taskName = button.dataset.taskName;
        deleteTask(taskId, taskName);
    });
});

function createNotification(name) {
    const MAX_NOTIFICATIONS = 3;
    const notificationContainer = document.querySelector('.decor');
    const existingNotifications = notificationContainer.querySelectorAll('.notification');

    if (existingNotifications.length >= MAX_NOTIFICATIONS) {
        animateNotificationRemoval(existingNotifications[0]);
    }

    const notificationList = document.querySelector('.notification__list');
    const notification = document.createElement('li');
    notification.classList.add('notification');
    notification.classList.add('notification--lazure');
    notification.style.transform = 'translateX(200%)';

    const title = document.createElement('span');
    title.classList.add('notification__title');
    title.textContent = 'Уведомление';
    notification.appendChild(title);

    const text = document.createElement('p');
    text.classList.add('notification__text');
    text.innerHTML = `Ваша запись '${name}' была восстановлена и перемещена в раздел <a href="/">основных записей</a>`;
    notification.appendChild(text);

    notificationList.appendChild(notification);

    setTimeout(() => {
        animateNotificationAppearance(notification);
    }, 150);
    return notification;
}

function animateNotificationRemoval(notification) {
    notification.style.transition = 'transform 0.5s ease-out, opacity 0.5s ease-out';
    notification.style.transform = 'translateY(-100%)';
    notification.style.opacity = '0';

    setTimeout(() => {
        notification.remove();
    }, 300);
}

function animateNotificationAppearance(notification) {
    notification.style.transition = 'transform 0.5s ease-in, opacity 0.5s ease-in';
    notification.style.transform = 'translateX(0)';
    notification.style.opacity = '1';
}

function deleteTask(id, name) {
    const taskBlock = document.querySelector(`[data-task-id="${id}"]`).closest('.card');
    const notification = createNotification(name);

    fetch(`/deleted-tasks/${id}/restore`, {
        method: 'DELETE',
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            taskBlock.classList.add('card--deleted');
            setTimeout(() => {
                taskBlock.remove();
                notification.style.transform = 'translateX(0)';
                setTimeout(() => {
                    notification.style.transform = 'translateX(200%)';
                }, 6000);
            }, 300);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}