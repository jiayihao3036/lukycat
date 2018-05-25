/*
Navicat MySQL Data Transfer

Source Server         : lukycat
Source Server Version : 50096
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50096
File Encoding         : 65001

Date: 2018-05-25 14:59:01
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `cartshop`
-- ----------------------------
DROP TABLE IF EXISTS `cartshop`;
CREATE TABLE `cartshop` (
  `mouney` int(128) NOT NULL,
  `name` varchar(128) character set utf8 collate utf8_bin NOT NULL,
  `id` int(20) NOT NULL auto_increment,
  `imgsrc` varchar(900) character set utf8 collate utf8_bin default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of cartshop
-- ----------------------------
INSERT INTO `cartshop` VALUES ('198', '索爱（Soaiy）mp3mp4播放器跑步运动8G', '6', 'https://image.xingyunmao.cn/image/152f8fa7-77c9-40de-b088-911693346517');
INSERT INTO `cartshop` VALUES ('568', '中沃 机器人智能陪伴对话', '12', 'https://image.xingyunmao.cn/image/11d0d83d-7ee4-4187-99b9-929fb5ddec51');
INSERT INTO `cartshop` VALUES ('299', '九阳（Joyoung）电饭煲迷你电饭锅铁釜内胆4L智能预约JYF-40FS606', '13', 'https://image.xingyunmao.cn/image/309f5fbc-482f-4208-8bce-ca5bba1b2bdc');
