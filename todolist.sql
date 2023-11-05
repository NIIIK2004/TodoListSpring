-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Ноя 05 2023 г., 23:04
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
-- Структура таблицы `spring_session`
--

CREATE TABLE `spring_session` (
  `PRIMARY_ID` char(36) NOT NULL,
  `SESSION_ID` char(36) NOT NULL,
  `CREATION_TIME` bigint(20) NOT NULL,
  `LAST_ACCESS_TIME` bigint(20) NOT NULL,
  `MAX_INACTIVE_INTERVAL` int(11) NOT NULL,
  `EXPIRY_TIME` bigint(20) NOT NULL,
  `PRINCIPAL_NAME` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Дамп данных таблицы `spring_session`
--

INSERT INTO `spring_session` (`PRIMARY_ID`, `SESSION_ID`, `CREATION_TIME`, `LAST_ACCESS_TIME`, `MAX_INACTIVE_INTERVAL`, `EXPIRY_TIME`, `PRINCIPAL_NAME`) VALUES
('97ce59d1-90b8-4c8a-9939-816c4ed5e7d1', '2fed8df7-3e22-46f6-8240-c9312daf4122', 1699218451353, 1699221489895, 1800, 1699223289895, 'Thomas');

-- --------------------------------------------------------

--
-- Структура таблицы `spring_session_attributes`
--

CREATE TABLE `spring_session_attributes` (
  `SESSION_PRIMARY_ID` char(36) NOT NULL,
  `ATTRIBUTE_NAME` varchar(200) NOT NULL,
  `ATTRIBUTE_BYTES` blob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci ROW_FORMAT=DYNAMIC;

--
-- Дамп данных таблицы `spring_session_attributes`
--

INSERT INTO `spring_session_attributes` (`SESSION_PRIMARY_ID`, `ATTRIBUTE_NAME`, `ATTRIBUTE_BYTES`) VALUES
('97ce59d1-90b8-4c8a-9939-816c4ed5e7d1', 'SPRING_SECURITY_CONTEXT', 0xaced00057372003d6f72672e737072696e676672616d65776f726b2e73656375726974792e636f72652e636f6e746578742e5365637572697479436f6e74657874496d706c00000000000002620200014c000e61757468656e7469636174696f6e7400324c6f72672f737072696e676672616d65776f726b2f73656375726974792f636f72652f41757468656e7469636174696f6e3b78707372004f6f72672e737072696e676672616d65776f726b2e73656375726974792e61757468656e7469636174696f6e2e557365726e616d6550617373776f726441757468656e7469636174696f6e546f6b656e00000000000002620200024c000b63726564656e7469616c737400124c6a6176612f6c616e672f4f626a6563743b4c00097072696e636970616c71007e0004787200476f72672e737072696e676672616d65776f726b2e73656375726974792e61757468656e7469636174696f6e2e416273747261637441757468656e7469636174696f6e546f6b656ed3aa287e6e47640e0200035a000d61757468656e746963617465644c000b617574686f7269746965737400164c6a6176612f7574696c2f436f6c6c656374696f6e3b4c000764657461696c7371007e0004787001737200266a6176612e7574696c2e436f6c6c656374696f6e7324556e6d6f6469666961626c654c697374fc0f2531b5ec8e100200014c00046c6973747400104c6a6176612f7574696c2f4c6973743b7872002c6a6176612e7574696c2e436f6c6c656374696f6e7324556e6d6f6469666961626c65436f6c6c656374696f6e19420080cb5ef71e0200014c00016371007e00067870737200136a6176612e7574696c2e41727261794c6973747881d21d99c7619d03000149000473697a65787000000001770400000001737200426f72672e737072696e676672616d65776f726b2e73656375726974792e636f72652e617574686f726974792e53696d706c654772616e746564417574686f7269747900000000000002620200014c0004726f6c657400124c6a6176612f6c616e672f537472696e673b7870740018d09fd0bed0bbd18cd0b7d0bed0b2d0b0d182d0b5d0bbd18c7871007e000d737200486f72672e737072696e676672616d65776f726b2e73656375726974792e7765622e61757468656e7469636174696f6e2e57656241757468656e7469636174696f6e44657461696c7300000000000002620200024c000d72656d6f74654164647265737371007e000f4c000973657373696f6e496471007e000f787074000f303a303a303a303a303a303a303a3174002436663530336132652d343738392d343062372d616163382d63383437646437383866623870737200326f72672e737072696e676672616d65776f726b2e73656375726974792e636f72652e7573657264657461696c732e5573657200000000000002620200075a00116163636f756e744e6f6e457870697265645a00106163636f756e744e6f6e4c6f636b65645a001563726564656e7469616c734e6f6e457870697265645a0007656e61626c65644c000b617574686f72697469657374000f4c6a6176612f7574696c2f5365743b4c000870617373776f726471007e000f4c0008757365726e616d6571007e000f787001010101737200256a6176612e7574696c2e436f6c6c656374696f6e7324556e6d6f6469666961626c65536574801d92d18f9b80550200007871007e000a737200116a6176612e7574696c2e54726565536574dd98509395ed875b0300007870737200466f72672e737072696e676672616d65776f726b2e73656375726974792e636f72652e7573657264657461696c732e5573657224417574686f72697479436f6d70617261746f720000000000000262020000787077040000000171007e0010787074000654686f6d6173);

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
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `tasks`
--

INSERT INTO `tasks` (`id`, `description`, `name`, `status_id`, `category_id`, `user_id`) VALUES
(53, 'Thomas', 'Thomas', 4, 4, 1),
(54, '1 день (31 марта) - закончен был первый день. Утром как я', 'Прогресс работы', 2, 3, 2),
(55, 'Мы пидорасы', 'Мы пидорасы', 4, 3, 1),
(56, 'Молодость, как понятие, не имеет каких-то конкретных границ, поэтому я лишь буду использовать в своём контексте. Период становления твоей личности, когда ты каждый раз, каждый день проживаешь кучу эмоций и потрясений,наделяешь свои дни новыми знаниями, которые с каждым разом всё больше и больше делают из тебя взрослого человека – это молодость. Хоть и кратко, но это она. И от того как именно ты её проведешь, в какой-то степени будет зависеть то, кем ты по итогу закончишь свой путь\n\nПервая половина жизни формирует вторую – это неоспоримая аксиома. Чтобы прекратить своё бездействие, тебе нужно наделить ценностью свое время, быть максимально сфокусированным в определённое время.Если ты хочешь хорошо жить, тебе нужно начинать заботиться о себе и своем времени уже сейчас, времени становится всё меньше и меньше, помни об этом.Только сегодняшний ты будешь решать каким будет твоё «завтра». Если не поймешь этого сейчас – обязательно поймёшь позже, но будет уже очень поздно. Есть шанс, что ты изменишь свою жизнь как знаменитые люди, которые в прямом смысле прогуляли свою молодость, но лучше когда ты позаботишься о своём будущем уже сегодня, поэтому умным и рассудительным нужно быть прямо сейчас. Не важно сколько тебе, 16 или 24 – это все та же молодость. Она формирует твой закат', 'Важное', 4, 2, 1);

-- --------------------------------------------------------

--
-- Структура таблицы `task_categories`
--

CREATE TABLE `task_categories` (
  `id` bigint(20) NOT NULL,
  `client_category` varchar(255) DEFAULT NULL,
  `server_category` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `task_categories`
--

INSERT INTO `task_categories` (`id`, `client_category`, `server_category`) VALUES
(1, 'Игры', 'game'),
(2, 'Избранное', 'favorite'),
(3, 'Работа', 'work'),
(4, 'Учеба', 'study'),
(5, 'Дом', 'home'),
(6, 'Друзья', 'friends'),
(7, 'Личное', 'personal'),
(8, 'Еда', 'food');

-- --------------------------------------------------------

--
-- Структура таблицы `task_status`
--

CREATE TABLE `task_status` (
  `id` bigint(20) NOT NULL,
  `client_status` varchar(255) DEFAULT NULL,
  `server_status` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `task_status`
--

INSERT INTO `task_status` (`id`, `client_status`, `server_status`) VALUES
(1, 'По фану', 'fan'),
(2, 'За сегодня', 'tomorrow'),
(3, 'Заметка', 'note'),
(4, 'На неделю', 'week'),
(5, 'Неважное', 'unimportant'),
(6, 'На месяц', 'month'),
(7, 'Важное', 'important'),
(8, 'На год', 'year');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `surname` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `password`, `surname`, `username`) VALUES
(1, 'yourihelo1971@gmail.com', 'Алексей', '$2a$10$BEcdQO3rsKXiWiTwUicS6uEWpAZaHlCyUfxAzzESjIK6eJgX4M9fq', 'Сурин', 'Thomas'),
(2, 'yourihelo1971@gmail.com', 'Алексей', '$2a$10$Z70XHq.OIxoKA8prHLWyQut0kootpnEY.B1ZEzEVkABA9N.v8DHo.', 'Сурин', 'student2020-53'),
(3, 'yourihelo1971@gmail.com', 'Алексей', '$2a$10$18yitig7eI2tlva3qRbJ1uE6iRtaUCVCmdjOWm3mx3NuZLil4ib4.', 'Сурин', 'student2020_53');

-- --------------------------------------------------------

--
-- Структура таблицы `users_roles`
--

CREATE TABLE `users_roles` (
  `user_id` bigint(20) NOT NULL,
  `roles` enum('ADMIN','USER') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `users_roles`
--

INSERT INTO `users_roles` (`user_id`, `roles`) VALUES
(1, 'USER'),
(2, 'USER'),
(3, 'USER');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `spring_session`
--
ALTER TABLE `spring_session`
  ADD PRIMARY KEY (`PRIMARY_ID`),
  ADD UNIQUE KEY `SPRING_SESSION_IX1` (`SESSION_ID`),
  ADD KEY `SPRING_SESSION_IX2` (`EXPIRY_TIME`),
  ADD KEY `SPRING_SESSION_IX3` (`PRINCIPAL_NAME`);

--
-- Индексы таблицы `spring_session_attributes`
--
ALTER TABLE `spring_session_attributes`
  ADD PRIMARY KEY (`SESSION_PRIMARY_ID`,`ATTRIBUTE_NAME`);

--
-- Индексы таблицы `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKitvj5ly42pkwage6u4cp073lt` (`status_id`),
  ADD KEY `FK42ldd63quus0efpi2ec64q0qg` (`category_id`),
  ADD KEY `FK6s1ob9k4ihi75xbxe2w0ylsdh` (`user_id`);

--
-- Индексы таблицы `task_categories`
--
ALTER TABLE `task_categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `task_status`
--
ALTER TABLE `task_status`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users_roles`
--
ALTER TABLE `users_roles`
  ADD KEY `FK2o0jvgh89lemvvo17cbqvdxaa` (`user_id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;

--
-- AUTO_INCREMENT для таблицы `task_categories`
--
ALTER TABLE `task_categories`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `task_status`
--
ALTER TABLE `task_status`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `spring_session_attributes`
--
ALTER TABLE `spring_session_attributes`
  ADD CONSTRAINT `SPRING_SESSION_ATTRIBUTES_FK` FOREIGN KEY (`SESSION_PRIMARY_ID`) REFERENCES `spring_session` (`PRIMARY_ID`) ON DELETE CASCADE;

--
-- Ограничения внешнего ключа таблицы `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `FK42ldd63quus0efpi2ec64q0qg` FOREIGN KEY (`category_id`) REFERENCES `task_categories` (`id`),
  ADD CONSTRAINT `FK6s1ob9k4ihi75xbxe2w0ylsdh` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `FKitvj5ly42pkwage6u4cp073lt` FOREIGN KEY (`status_id`) REFERENCES `task_status` (`id`);

--
-- Ограничения внешнего ключа таблицы `users_roles`
--
ALTER TABLE `users_roles`
  ADD CONSTRAINT `FK2o0jvgh89lemvvo17cbqvdxaa` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
