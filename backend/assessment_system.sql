/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 100432 (10.4.32-MariaDB)
 Source Host           : localhost:3306
 Source Schema         : assessment_system

 Target Server Type    : MySQL
 Target Server Version : 100432 (10.4.32-MariaDB)
 File Encoding         : 65001

 Date: 10/03/2024 09:40:30
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for answers
-- ----------------------------
DROP TABLE IF EXISTS `answers`;
CREATE TABLE `answers`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `isCorrect` tinyint(1) NULL DEFAULT NULL,
  `questionId` int NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `questionId`(`questionId` ASC) USING BTREE,
  CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`questionId`) REFERENCES `questions` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 34 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of answers
-- ----------------------------
INSERT INTO `answers` VALUES (1, 'Virtual DOM', 1, 1, '2024-03-10 04:43:45', '2024-03-10 04:43:45');
INSERT INTO `answers` VALUES (2, 'Original DOM', 0, 1, '2024-03-10 04:43:57', '2024-03-10 04:43:57');
INSERT INTO `answers` VALUES (3, 'Both A and B', 0, 1, '2024-03-10 04:44:06', '2024-03-10 04:44:06');
INSERT INTO `answers` VALUES (4, 'None of the above', 0, 1, '2024-03-10 04:44:18', '2024-03-10 04:44:18');
INSERT INTO `answers` VALUES (5, 'Server-side framework', 0, 2, '2024-03-10 04:44:50', '2024-03-10 04:44:50');
INSERT INTO `answers` VALUES (6, 'user interface framework', 1, 2, '2024-03-10 04:45:08', '2024-03-10 04:45:08');
INSERT INTO `answers` VALUES (7, 'both a and b', 0, 2, '2024-03-10 04:45:19', '2024-03-10 04:45:19');
INSERT INTO `answers` VALUES (8, 'none of the above', 0, 2, '2024-03-10 04:45:30', '2024-03-10 04:45:30');
INSERT INTO `answers` VALUES (9, 'Render with arguments', 0, 3, '2024-03-10 04:48:25', '2024-03-10 04:48:25');
INSERT INTO `answers` VALUES (10, 'setStatue', 0, 3, '2024-03-10 04:48:49', '2024-03-10 04:48:49');
INSERT INTO `answers` VALUES (11, 'PropTypes', 0, 3, '2024-03-10 04:49:57', '2024-03-10 04:49:57');
INSERT INTO `answers` VALUES (12, 'props', 1, 3, '2024-03-10 04:50:03', '2024-03-10 04:50:03');
INSERT INTO `answers` VALUES (13, 'ReactJS', 0, 4, '2024-03-10 04:53:36', '2024-03-10 04:53:36');
INSERT INTO `answers` VALUES (14, 'js', 0, 4, '2024-03-10 04:53:43', '2024-03-10 04:53:43');
INSERT INTO `answers` VALUES (15, 'Both A. and B.', 1, 4, '2024-03-10 04:53:48', '2024-03-10 04:53:48');
INSERT INTO `answers` VALUES (16, 'None of these', 0, 4, '2024-03-10 04:53:58', '2024-03-10 04:53:58');
INSERT INTO `answers` VALUES (17, 'Vue.js is an open-source JavaScript library that is used for developing user interfaces.', 0, 5, '2024-03-10 05:01:38', '2024-03-10 05:01:38');
INSERT INTO `answers` VALUES (18, 'Vue.js is an open-source front-end JavaScript framework used for developing user interfaces.', 1, 5, '2024-03-10 05:01:45', '2024-03-10 05:01:45');
INSERT INTO `answers` VALUES (19, 'Vue.js is an open-source, cross-platform, JavaScript run-time situation that performs the JavaScript program outside a web browser.', 0, 5, '2024-03-10 05:01:51', '2024-03-10 05:01:51');
INSERT INTO `answers` VALUES (20, 'Vue.js is a JavaScript library constructed to facilitate HTML DOM tree traversal and administration, event handling, CSS activity, and Ajax.', 0, 5, '2024-03-10 05:02:00', '2024-03-10 05:02:00');
INSERT INTO `answers` VALUES (21, 'Vue.js is called a progressive framework because it is being changed and developed continually.', 1, 6, '2024-03-10 05:03:36', '2024-03-10 05:03:36');
INSERT INTO `answers` VALUES (22, 'Vue.js is called a progressive framework because it facilitates us to create Dynamic User Interfaces and single-page applications.', 0, 6, '2024-03-10 05:03:44', '2024-03-10 05:03:44');
INSERT INTO `answers` VALUES (23, 'Vue.js is called a progressive framework because it follows the latest JavaScript standards.', 0, 6, '2024-03-10 05:03:52', '2024-03-10 05:03:52');
INSERT INTO `answers` VALUES (24, 'All of the above.', 0, 6, '2024-03-10 05:03:59', '2024-03-10 05:03:59');
INSERT INTO `answers` VALUES (25, 'Cluster module', 0, 7, '2024-03-10 05:06:40', '2024-03-10 05:06:40');
INSERT INTO `answers` VALUES (26, 'Event-driven architecture', 1, 7, '2024-03-10 05:06:46', '2024-03-10 05:06:46');
INSERT INTO `answers` VALUES (27, 'Buffer class', 0, 7, '2024-03-10 05:06:52', '2024-03-10 05:06:52');
INSERT INTO `answers` VALUES (28, 'Child processes', 0, 7, '2024-03-10 05:07:25', '2024-03-10 05:07:25');
INSERT INTO `answers` VALUES (29, 'To get the last used command.', 0, 9, '2024-03-10 05:07:57', '2024-03-10 05:07:57');
INSERT INTO `answers` VALUES (30, 'To get the last result.', 1, 9, '2024-03-10 05:08:03', '2024-03-10 05:08:03');
INSERT INTO `answers` VALUES (31, 'To store the result of the previous command.', 0, 9, '2024-03-10 05:08:07', '2024-03-10 05:08:07');
INSERT INTO `answers` VALUES (32, ' To represent a placeholder for a future command.', 1, 9, '2024-03-10 05:08:14', '2024-03-10 05:08:14');
INSERT INTO `answers` VALUES (33, 'asdfasdfasdf', 1, 10, '2024-03-10 13:14:41', '2024-03-10 13:14:41');

-- ----------------------------
-- Table structure for assessments
-- ----------------------------
DROP TABLE IF EXISTS `assessments`;
CREATE TABLE `assessments`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `UserAttemptId` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `UserAttemptId`(`UserAttemptId` ASC) USING BTREE,
  CONSTRAINT `assessments_UserAttemptId_foreign_idx` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_1` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_10` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_11` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_12` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_13` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_14` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_15` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_16` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_17` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_18` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_19` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_2` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_20` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_21` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_22` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_23` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_24` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_25` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_26` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_27` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_28` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_29` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_3` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_30` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_31` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_32` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_33` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_34` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_35` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_36` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_37` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_38` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_39` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_4` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_40` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_41` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_42` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_43` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_44` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_45` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_46` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_47` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_48` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_49` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_5` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_50` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_51` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_6` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_7` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_8` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_9` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_52` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_53` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_54` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_55` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  CONSTRAINT `assessments_ibfk_56` FOREIGN KEY (`UserAttemptId`) REFERENCES `userattempts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of assessments
-- ----------------------------
INSERT INTO `assessments` VALUES (1, 'Frontend Developer Assessment', 'This assessment for Frontend developer', '2024-03-10 04:40:56', '2024-03-10 04:40:56', NULL);
INSERT INTO `assessments` VALUES (2, 'Backend Developer assessment', 'Backend Developer assessment', '2024-03-10 05:05:23', '2024-03-10 05:05:23', NULL);
INSERT INTO `assessments` VALUES (3, 'Test', 'Test deskcription', '2024-03-10 13:13:50', '2024-03-10 13:13:50', NULL);

-- ----------------------------
-- Table structure for questions
-- ----------------------------
DROP TABLE IF EXISTS `questions`;
CREATE TABLE `questions`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `text` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `type` enum('MCQ','MSQ') CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `sectionId` int NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `sectionId`(`sectionId` ASC) USING BTREE,
  CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`sectionId`) REFERENCES `sections` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 11 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of questions
-- ----------------------------
INSERT INTO `questions` VALUES (1, ' Which of the following is used in React.js to increase performance?', 'MCQ', 1, '2024-03-10 04:43:23', '2024-03-10 04:43:23');
INSERT INTO `questions` VALUES (2, ' What is ReactJS?', 'MCQ', 1, '2024-03-10 04:44:35', '2024-03-10 04:44:35');
INSERT INTO `questions` VALUES (3, ' Identify the one which is used to pass data to components from outside', 'MCQ', 1, '2024-03-10 04:48:01', '2024-03-10 04:48:01');
INSERT INTO `questions` VALUES (4, 'React is also known as __________', 'MCQ', 1, '2024-03-10 04:53:02', '2024-03-10 04:53:02');
INSERT INTO `questions` VALUES (5, 'Which of the following statement best define Vue.js?', 'MCQ', 2, '2024-03-10 05:01:29', '2024-03-10 05:01:29');
INSERT INTO `questions` VALUES (6, 'Why is Vue.js called a progressive framework?', 'MSQ', 2, '2024-03-10 05:03:24', '2024-03-10 05:03:24');
INSERT INTO `questions` VALUES (7, 'Which feature of Node.js is crucial for achieving non-blocking I/O and high concurrency?', 'MSQ', 3, '2024-03-10 05:06:30', '2024-03-10 05:06:30');
INSERT INTO `questions` VALUES (9, 'In the context of using the underscore variable (_) in the Node.js REPL session, what is its primary use?', 'MSQ', 3, '2024-03-10 05:07:48', '2024-03-10 05:07:48');
INSERT INTO `questions` VALUES (10, 'Test Questions1', 'MCQ', 6, '2024-03-10 13:14:21', '2024-03-10 13:14:21');

-- ----------------------------
-- Table structure for sections
-- ----------------------------
DROP TABLE IF EXISTS `sections`;
CREATE TABLE `sections`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `assessmentId` int NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `assessmentId`(`assessmentId` ASC) USING BTREE,
  CONSTRAINT `sections_ibfk_1` FOREIGN KEY (`assessmentId`) REFERENCES `assessments` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of sections
-- ----------------------------
INSERT INTO `sections` VALUES (1, 'React.js', 1, '2024-03-10 04:41:12', '2024-03-10 04:41:12');
INSERT INTO `sections` VALUES (2, 'Vue.js', 1, '2024-03-10 05:01:24', '2024-03-10 05:01:24');
INSERT INTO `sections` VALUES (3, 'Node', 2, '2024-03-10 05:05:34', '2024-03-10 05:05:34');
INSERT INTO `sections` VALUES (4, 'PHP', 2, '2024-03-10 05:05:41', '2024-03-10 05:05:41');
INSERT INTO `sections` VALUES (5, 'ABC', 1, '2024-03-10 13:12:34', '2024-03-10 13:12:34');
INSERT INTO `sections` VALUES (6, 'Test Section', 3, '2024-03-10 13:14:07', '2024-03-10 13:14:07');

-- ----------------------------
-- Table structure for userattempts
-- ----------------------------
DROP TABLE IF EXISTS `userattempts`;
CREATE TABLE `userattempts`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `userId` int NULL DEFAULT NULL,
  `assessmentId` int NULL DEFAULT NULL,
  `score` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `userId`(`userId` ASC) USING BTREE,
  INDEX `assessmentId`(`assessmentId` ASC) USING BTREE,
  CONSTRAINT `userattempts_ibfk_112` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE,
  CONSTRAINT `userattempts_ibfk_113` FOREIGN KEY (`assessmentId`) REFERENCES `assessments` (`id`) ON DELETE NO ACTION ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 12 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of userattempts
-- ----------------------------
INSERT INTO `userattempts` VALUES (1, 2, 1, NULL, '2024-03-10 08:44:25', '2024-03-10 08:44:25');
INSERT INTO `userattempts` VALUES (2, 2, 1, NULL, '2024-03-10 09:33:35', '2024-03-10 09:33:35');
INSERT INTO `userattempts` VALUES (3, 2, 2, NULL, '2024-03-10 09:33:40', '2024-03-10 09:33:40');
INSERT INTO `userattempts` VALUES (4, 3, 2, NULL, '2024-03-10 09:33:55', '2024-03-10 09:33:55');
INSERT INTO `userattempts` VALUES (5, 3, 1, NULL, '2024-03-10 09:33:59', '2024-03-10 09:33:59');
INSERT INTO `userattempts` VALUES (6, 2, 1, NULL, '2024-03-10 09:57:27', '2024-03-10 09:57:27');
INSERT INTO `userattempts` VALUES (7, 2, 2, NULL, '2024-03-10 12:59:29', '2024-03-10 12:59:29');
INSERT INTO `userattempts` VALUES (8, 2, 2, NULL, '2024-03-10 13:01:34', '2024-03-10 13:01:34');
INSERT INTO `userattempts` VALUES (9, 2, 1, NULL, '2024-03-10 13:10:50', '2024-03-10 13:10:50');
INSERT INTO `userattempts` VALUES (10, 2, 1, NULL, '2024-03-10 13:16:52', '2024-03-10 13:16:52');
INSERT INTO `userattempts` VALUES (11, 2, 1, NULL, '2024-03-10 13:20:01', '2024-03-10 13:20:01');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `role` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `status` tinyint(1) NULL DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'admin@metaschool.so', '$2b$10$voJmIT3D1531tFvVGeJZOOVInzhjEpMhCLbl3DqzTZ0b4I2yaFyui', 'admin', 1, '2024-03-07 23:10:12', '2024-03-07 23:10:12');
INSERT INTO `users` VALUES (2, 'student_user_1@metaschool.so', '$2b$10$Gt9kifHxTgN.UWvm3oMlhO1BlVqEvEqZ3bRSV9ESeQQc2lxtcs3.y', 'user', 1, '2024-03-07 23:10:33', '2024-03-07 23:10:33');
INSERT INTO `users` VALUES (3, 'student_user_2@metaschool.so', '$2b$10$KM2hDVhebpTtD.mVC9djtu8g8yQDC.K2Yak419mQqjftzvG.1SzCm', 'user', 1, '2024-03-07 23:10:38', '2024-03-07 23:10:38');
INSERT INTO `users` VALUES (4, 'adonis', '$2b$10$MA6xrGQFYY5dx6eF2IQ/i.ZhNy0ef2dlvj7rUU/eevAx5VKePmdgi', 'user', 1, '2024-03-08 07:59:26', '2024-03-08 07:59:26');

SET FOREIGN_KEY_CHECKS = 1;
