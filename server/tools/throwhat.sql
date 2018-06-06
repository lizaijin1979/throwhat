/*
 Navicat Premium Data Transfer

 Source Server         : Localhost
 Source Server Type    : MySQL
 Source Server Version : 50717
 Source Host           : localhost
 Source Database       : cAuth

 Target Server Type    : MySQL
 Target Server Version : 50717
 File Encoding         : utf-8

 Date: 08/10/2017 22:22:52 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `cSessionInfo`
-- ----------------------------
DROP TABLE IF EXISTS `cSessionInfo`;
CREATE TABLE `cSessionInfo` (
  `open_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `uuid` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `skey` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_visit_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `session_key` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_info` varchar(2048) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`open_id`),
  KEY `openid` (`open_id`) USING BTREE,
  KEY `skey` (`skey`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='会话管理用户信息';

-- ----------------------------
--  Table structure for `cItemNameManagement`
-- ----------------------------
DROP TABLE IF EXISTS `cItemNameManagement`;
CREATE TABLE `cItemNameManagement` (
  `itemId`   int(11) NOT NULL AUTO_INCREMENT COMMENT '自增id', 
  `itemName` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`itemId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='项目名称管理';

-- ----------------------------
--  Table structure for `cItemReportManagement`
-- ----------------------------
DROP TABLE IF EXISTS `cItemReportManagement`;
CREATE TABLE `cItemReportManagement` (
  `open_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `itemId`   int(5) NOT NULL, 
  `itemNum` int(11) NOT NULL,
  `report_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`open_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='项目上报管理';

-- ----------------------------
--  Table structure for `cItemSignupManagement`
-- ----------------------------
DROP TABLE IF EXISTS `cItemSignupManagement`;
CREATE TABLE `cItemSignupManagement` (
  `open_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `itemId`   int(5) NOT NULL,
  `itemNum`  int(11) NOT NULL,
  `signup_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`open_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='项目登记管理';

SET FOREIGN_KEY_CHECKS = 1;
