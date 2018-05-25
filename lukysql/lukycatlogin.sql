/*
Navicat MySQL Data Transfer

Source Server         : lukycat
Source Server Version : 50096
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50096
File Encoding         : 65001

Date: 2018-05-25 14:58:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `lukycatlogin`
-- ----------------------------
DROP TABLE IF EXISTS `lukycatlogin`;
CREATE TABLE `lukycatlogin` (
  `username` varchar(50) character set utf8 collate utf8_bin NOT NULL,
  `password` varchar(128) character set utf8 collate utf8_bin NOT NULL,
  `id` int(20) NOT NULL auto_increment,
  PRIMARY KEY  (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of lukycatlogin
-- ----------------------------
INSERT INTO `lukycatlogin` VALUES ('1308507815', 'e10adc3949ba59abbe56e057f20f883e', '20');
INSERT INTO `lukycatlogin` VALUES ('123', '9f6e6800cfae7749eb6c486619254b9c', '21');
