-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Ноя 20 2023 г., 00:50
-- Версия сервера: 10.4.27-MariaDB
-- Версия PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `todolist`
--

-- --------------------------------------------------------

--
-- Структура таблицы `tasks`
--

CREATE TABLE `tasks` (
  `id` bigint(20) NOT NULL,
  `description` text DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status_id` bigint(20) DEFAULT NULL,
  `category_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `archived` bit(1) NOT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `tasks`
--

INSERT INTO `tasks` (`id`, `description`, `name`, `status_id`, `category_id`, `user_id`, `archived`, `date`) VALUES
(69, 'Алексей', 'Алексей', 2, 3, 1, b'1', '2023-11-08'),
(70, 'Алексей', 'Алексей', 3, 3, 1, b'1', '2023-11-08'),
(71, 'Молодость, как понятие, не имеет каких-то конкретных границ, поэтому я лишь буду использовать в своём контексте. Период становления твоей личности, когда ты каждый раз, каждый день проживаешь кучу эмоций и потрясений,наделяешь свои дни новыми знаниями, которые с каждым разом всё больше и больше делают из тебя взрослого человека – это молодость. Хоть и кратко, но это она. И от того как именно ты её проведешь, в какой-то степени будет зависеть то, кем ты по итогу закончишь свой путь', 'Моя молодость', 7, 3, 1, b'1', '2023-11-08'),
(72, 'Алексей', 'Алексей', 3, 4, 1, b'1', '2023-11-08'),
(73, 'Круто)', 'Подняться до 4000ммр', 8, 1, 1, b'1', '2023-11-08'),
(74, 'dgfdfgdgf', 'dgfdfg', 2, 1, 1, b'1', '2023-11-09'),
(79, 'привет', 'привет', 1, 2, 1, b'1', '2023-11-09'),
(80, 'YouriHelo', 'YouriHelo', 2, 1, 1, b'1', '2023-11-09'),
(81, 'Геральт', 'Срочно выпить пива Ведьмак 3', 2, 1, 1, b'1', '2023-11-20'),
(82, 'Артем', 'Артем', 8, 7, 1, b'1', '2023-11-20'),
(83, 'YouriHelo', 'YouriHelo', 4, 2, 1, b'1', '2023-11-20'),
(84, 'впавпа', 'Учеба', 2, 4, 1, b'1', '2023-11-20'),
(85, 'Алексей 3', 'Алексей 3', 2, 6, 1, b'1', '2023-11-20'),
(86, 'Подлрочи', 'Подлрочи', 5, 4, 1, b'1', '2023-11-20'),
(87, 'Подлрочи', 'Подлрочи', 1, 3, 1, b'1', '2023-11-20'),
(88, 'dfggdfgdf', 'dfggdfgdf', 4, 1, 1, b'1', '2023-11-20'),
(89, 'dfggdfgdf', 'dfggdfgdf', 2, 1, 1, b'1', '2023-11-20'),
(90, 'dfg', 'dgf', 4, 1, 1, b'1', '2023-11-20'),
(91, 'gdfgdf', 'gdfgdf', 6, 1, 1, b'1', '2023-11-20'),
(92, 'fdggdf', 'fdggdf', 4, 1, 1, b'1', '2023-11-20'),
(93, 'fdggdf', 'gdfgdfgdf', 6, 5, 1, b'0', '2023-11-20'),
(94, 'gdgdgdf', 'gdgdgdf', 4, 8, 1, b'0', '2023-11-20'),
(95, '2323', '2323', 4, 1, 1, b'1', '2023-11-20'),
(96, 'gfddgf', 'gfddgf', 1, 1, 1, b'1', '2023-11-20'),
(97, 'впавпавпа', 'впавпавпа', 2, 1, 1, b'1', '2023-11-20'),
(98, 'вап', 'вап', 4, 1, 1, b'1', '2023-11-20'),
(99, 'вап', 'впавпа', 8, 1, 1, b'1', '2023-11-20'),
(100, 'REgbnm C63 AMG', 'REgbnm C63 AMG', 5, 1, 1, b'1', '2023-11-20'),
(101, 'REgbnm C63 AMG', 'REgbnm C63 AMG', 5, 1, 1, b'1', '2023-11-20'),
(102, 'dgfgdfgdf', 'dgfgdfgdf', 4, 1, 1, b'1', '2023-11-20'),
(103, 'cs63', 'cs63', 1, 1, 1, b'1', '2023-11-20'),
(104, 'cs63', 'cs63', 3, 1, 1, b'1', '2023-11-20'),
(105, 'cs63', 'cs63', 6, 6, 1, b'0', '2023-11-20'),
(106, 'cs63', 'cs63', 7, 1, 1, b'1', '2023-11-20'),
(107, 'gfddfg', 'gfddfg', 4, 1, 1, b'1', '2023-11-20');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKitvj5ly42pkwage6u4cp073lt` (`status_id`),
  ADD KEY `FK42ldd63quus0efpi2ec64q0qg` (`category_id`),
  ADD KEY `FK6s1ob9k4ihi75xbxe2w0ylsdh` (`user_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=108;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `FK42ldd63quus0efpi2ec64q0qg` FOREIGN KEY (`category_id`) REFERENCES `task_categories` (`id`),
  ADD CONSTRAINT `FK6s1ob9k4ihi75xbxe2w0ylsdh` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FKitvj5ly42pkwage6u4cp073lt` FOREIGN KEY (`status_id`) REFERENCES `task_status` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
