import {formattedDisplayDates} from "./components/dateFormatter.js";
import {showBlock} from "./home/toggleBlockView.js";

showBlock();
formattedDisplayDates('.card__date');

function setupBubblyButtons() {
    function animateButton(e) {
        e.preventDefault();
        e.target.classList.remove('animate');
        e.target.classList.add('animate');
        setTimeout(function () {
            e.target.classList.remove('animate');
        }, 700);
    }

    const bubblyButtons = document.getElementsByClassName('animate-bubble');
    for (let i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].addEventListener('click', animateButton, false);
    }
}

function setWidgetDate() {
    let currentDate = new Date();
    let day = String(currentDate.getDate()).padStart(2, '0');
    let month = String(currentDate.getMonth() + 1).padStart(2, '0');
    let year = currentDate.getFullYear();
    let formattedDate = day + '.' + month + '.' + year;
    let widgetDateElement = document.querySelector('.widget__date');
    widgetDateElement.textContent = formattedDate;
}

const deleteButtons = document.querySelectorAll('.card__btn--delete');
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
    notification.style.transform = 'translateX(200%)';

    const title = document.createElement('span');
    title.classList.add('notification__title');
    title.textContent = 'Уведомление';
    notification.appendChild(title);

    const text = document.createElement('p');
    text.classList.add('notification__text');
    text.innerHTML = `Ваша запись '${name}' и перемещена в раздел <a href="/deleted-tasks">удаленных записей</a>`;
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

    fetch(`/deleted-tasks/${id}/delete`, {
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

document.addEventListener('DOMContentLoaded', function () {
    setWidgetDate();
    setupBubblyButtons();
});