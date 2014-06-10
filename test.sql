-- phpMyAdmin SQL Dump
-- version 4.0.9
-- http://www.phpmyadmin.net
--
-- 主機: localhost
-- 建立日期: 2014 年 06 月 06 日 10:59
-- 伺服器版本: 5.6.14-log
-- PHP 版本: 5.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 資料庫: `test`
--

-- --------------------------------------------------------

--
-- 資料表結構 `admins`
--

CREATE TABLE IF NOT EXISTS `admins` (
  `aid` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `password` varchar(32) NOT NULL,
  PRIMARY KEY (`aid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- 資料表的匯出資料 `admins`
--

INSERT INTO `admins` (`aid`, `name`, `password`) VALUES
(1, 'bryce', '1qaz');

-- --------------------------------------------------------

--
-- 資料表結構 `car_brand`
--

CREATE TABLE IF NOT EXISTS `car_brand` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `creator` int(11) NOT NULL,
  `modifier` int(11) NOT NULL,
  `cdate` datetime NOT NULL,
  `mdate` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=10 ;

--
-- 資料表的匯出資料 `car_brand`
--

INSERT INTO `car_brand` (`id`, `name`, `creator`, `modifier`, `cdate`, `mdate`) VALUES
(1, 'TOYOTA', 1, 0, '2014-06-06 03:06:47', '0000-00-00 00:00:00'),
(2, 'NISSAN', 1, 0, '2014-06-06 03:06:12', '0000-00-00 00:00:00'),
(3, 'FORD', 1, 0, '2014-06-06 03:06:17', '0000-00-00 00:00:00'),
(4, 'MAZDA', 1, 0, '2014-06-06 03:06:22', '0000-00-00 00:00:00'),
(5, 'LUXGEN', 1, 0, '2014-06-06 03:06:39', '0000-00-00 00:00:00'),
(8, 'HONDA', 1, 0, '2014-06-06 09:06:07', '0000-00-00 00:00:00'),
(9, 'HYUNDAI', 1, 0, '2014-06-06 09:06:21', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- 資料表結構 `car_displacement`
--

CREATE TABLE IF NOT EXISTS `car_displacement` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(1) NOT NULL COMMENT '1汽油 2柴油',
  `max` int(11) NOT NULL,
  `min` int(11) NOT NULL,
  `license_tax` int(11) NOT NULL COMMENT '牌照稅',
  `fuel_tax` int(11) NOT NULL COMMENT '燃料稅',
  `creator` int(11) NOT NULL,
  `modifier` int(11) NOT NULL,
  `cdate` datetime NOT NULL,
  `mdate` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=15 ;

--
-- 資料表的匯出資料 `car_displacement`
--

INSERT INTO `car_displacement` (`id`, `type`, `max`, `min`, `license_tax`, `fuel_tax`, `creator`, `modifier`, `cdate`, `mdate`) VALUES
(1, 1, 500, 0, 1620, 0, 0, 0, '2014-05-29 00:00:00', '2014-05-29 00:00:00'),
(5, 1, 1800, 1201, 7120, 4800, 1, 0, '2014-06-05 10:06:08', '0000-00-00 00:00:00'),
(3, 1, 600, 501, 2160, 2880, 1, 0, '2014-06-05 10:06:33', '0000-00-00 00:00:00'),
(4, 1, 1200, 601, 4320, 4320, 1, 0, '2014-06-05 10:06:50', '0000-00-00 00:00:00'),
(6, 1, 2400, 1801, 11230, 6210, 1, 0, '2014-06-05 10:06:56', '0000-00-00 00:00:00'),
(7, 1, 3000, 2401, 15210, 7200, 1, 0, '2014-06-05 10:06:22', '0000-00-00 00:00:00'),
(8, 1, 4200, 3001, 28220, 8640, 1, 0, '2014-06-05 10:06:38', '0000-00-00 00:00:00'),
(9, 1, 5400, 4201, 46170, 9810, 1, 0, '2014-06-05 10:06:01', '0000-00-00 00:00:00'),
(10, 2, 600, 501, 2880, 1080, 1, 0, '2014-06-05 10:06:29', '0000-00-00 00:00:00'),
(11, 2, 1200, 601, 4320, 1800, 1, 0, '2014-06-05 10:06:52', '0000-00-00 00:00:00'),
(12, 2, 1800, 1201, 2880, 2700, 1, 0, '2014-06-05 10:06:12', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- 資料表結構 `car_info`
--

CREATE TABLE IF NOT EXISTS `car_info` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `fname` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '全名',
  `price` int(12) NOT NULL COMMENT '售價',
  `rate_id` int(11) NOT NULL COMMENT '分期優惠',
  `cc` int(8) NOT NULL COMMENT '排氣量',
  `pic_url` varchar(128) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL COMMENT '圖片位置',
  `brand_id` int(11) NOT NULL,
  `type_id` int(11) NOT NULL COMMENT '車型id',
  `displacement_id` int(11) NOT NULL,
  `creator` int(11) NOT NULL,
  `modifier` int(11) NOT NULL,
  `cdate` datetime NOT NULL,
  `mdate` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `brand_id` (`brand_id`),
  KEY `displacement_id` (`displacement_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=5 ;

--
-- 資料表的匯出資料 `car_info`
--

INSERT INTO `car_info` (`id`, `name`, `fname`, `price`, `rate_id`, `cc`, `pic_url`, `brand_id`, `type_id`, `displacement_id`, `creator`, `modifier`, `cdate`, `mdate`) VALUES
(2, '1.8 VTi', 'CIVIC 1.8 VTi', 739000, 0, 1798, 'CIVIC9', 8, 7, 5, 1, 0, '2014-06-06 10:06:49', '0000-00-00 00:00:00'),
(3, '1.8 VTi-s', 'CIVIC 1.8 VTi-s', 789000, 0, 1798, 'CIVIC9.jpg', 8, 7, 5, 1, 0, '2014-06-06 10:06:35', '0000-00-00 00:00:00'),
(4, '2.0S', 'CIVIC 2.0S', 879000, 0, 1997, 'CIVIC9.jpg', 8, 7, 6, 1, 0, '2014-06-06 10:06:20', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- 資料表結構 `car_rate`
--

CREATE TABLE IF NOT EXISTS `car_rate` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `offer_loan` int(11) NOT NULL,
  `offer_rate` decimal(11,2) NOT NULL DEFAULT '0.00',
  `offer_month` int(11) NOT NULL,
  `creator` int(11) NOT NULL,
  `modifier` int(11) NOT NULL,
  `cdate` datetime NOT NULL,
  `mdate` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=9 ;

--
-- 資料表的匯出資料 `car_rate`
--

INSERT INTO `car_rate` (`id`, `name`, `offer_loan`, `offer_rate`, `offer_month`, `creator`, `modifier`, `cdate`, `mdate`) VALUES
(6, '30萬36期', 300000, '0.00', 36, 1, 0, '2014-06-06 04:06:47', '0000-00-00 00:00:00'),
(7, '30萬24期', 300000, '0.00', 24, 1, 0, '2014-06-06 04:06:22', '0000-00-00 00:00:00'),
(8, '貸50萬50期', 100000, '2.88', 50, 1, 0, '2014-06-06 04:06:24', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- 資料表結構 `car_type`
--

CREATE TABLE IF NOT EXISTS `car_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand_id` int(11) NOT NULL,
  `name` varchar(32) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `creator` int(11) NOT NULL,
  `modifier` int(11) NOT NULL,
  `cdate` datetime NOT NULL,
  `mdate` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13 ;

--
-- 資料表的匯出資料 `car_type`
--

INSERT INTO `car_type` (`id`, `brand_id`, `name`, `creator`, `modifier`, `cdate`, `mdate`) VALUES
(3, 1, 'ALTIS', 1, 0, '2014-06-06 05:06:45', '0000-00-00 00:00:00'),
(2, 1, 'WISH', 1, 0, '2014-06-06 05:06:29', '0000-00-00 00:00:00'),
(4, 1, 'VIOS', 1, 0, '2014-06-06 05:06:54', '0000-00-00 00:00:00'),
(5, 3, 'FOCUS', 1, 0, '2014-06-06 05:06:09', '0000-00-00 00:00:00'),
(6, 3, 'KUGA', 1, 0, '2014-06-06 05:06:16', '0000-00-00 00:00:00'),
(7, 8, 'CIVIC', 1, 0, '2014-06-06 09:06:00', '0000-00-00 00:00:00'),
(8, 4, 'MAZDA 3', 1, 0, '2014-06-06 09:06:09', '0000-00-00 00:00:00'),
(9, 4, 'MAZDA 6', 1, 0, '2014-06-06 09:06:13', '0000-00-00 00:00:00'),
(10, 4, 'MAZDA 5', 1, 0, '2014-06-06 09:06:17', '0000-00-00 00:00:00'),
(11, 5, 'U6', 1, 0, '2014-06-06 09:06:26', '0000-00-00 00:00:00'),
(12, 5, 'U7', 1, 0, '2014-06-06 09:06:30', '0000-00-00 00:00:00');

-- --------------------------------------------------------

--
-- 資料表結構 `contacts`
--

CREATE TABLE IF NOT EXISTS `contacts` (
  `cid` int(11) NOT NULL AUTO_INCREMENT,
  `uid` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(20) NOT NULL,
  PRIMARY KEY (`cid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=79 ;

--
-- 資料表的匯出資料 `contacts`
--

INSERT INTO `contacts` (`cid`, `uid`, `name`, `email`, `phone`) VALUES
(38, 7, 'contact1', 'contact1@mail.com', '111111111111111'),
(39, 7, 'contact2', 'contact2@mail.com', '222222222222222'),
(40, 7, 'contact3', 'contact3@mail.com', '333333333333333'),
(41, 7, 'contact4', 'contact4@mail.com', '444444444444444'),
(42, 8, 'contact1', 'contact1@mail.com', '111111111111111'),
(43, 8, 'contact2', 'contact2@mail.com', '222222222222222'),
(44, 8, 'contact3', 'contact3@mail.com', '333333333333333'),
(45, 9, 'contact1', 'contact1@mail.com', '111111111111111'),
(46, 9, 'contact2', 'contact2@mail.com', '222222222222222'),
(47, 10, 'contact1', 'contact1@mail.com', '111111111111111'),
(48, 10, 'contact2', 'contact2@mail.com', '222222222222222'),
(49, 10, 'contact3', 'contact3@mail.com', '333333333333333'),
(50, 10, 'contact4', 'contact4@mail.com', '444444444444444'),
(51, 8, 'contact4', 'contact4@mail.com', '444444444444444'),
(52, 8, 'contact5', 'contact5@mail.com', '555555555555555'),
(53, 8, 'contact6', 'contact6@mail.com', '666666666666666'),
(54, 8, 'contact7', 'contact7@mail.com', '777777777777777'),
(64, 10, 'contact5', 'contact5@mail.com', '555555555555555'),
(65, 10, 'contact6', 'contact6@mail.com', '666666666666666'),
(66, 10, 'contact7', 'contact7@mail.com', '777777777777777'),
(67, 10, 'contact8', 'contact8@mail.com', '888888888888888'),
(68, 10, 'contact9', 'contact9@mail.com', '999999999999999'),
(69, 10, 'contact10', 'contact10@mail.com', '101010101010101'),
(70, 10, 'contact11', 'contact11@mail.com', '111111111111111'),
(71, 10, 'contact12', 'contact12@mail.com', '121212121212121'),
(72, 13, 'contact1', 'contact1@mail.com', '111111111111111'),
(73, 13, 'contact2', 'contact2@mail.com', '222222222222222'),
(74, 12, 'conatct1', 'contact1@mail.com', '111111111111111'),
(75, 11, 'contact1', 'contact1@mail.com', '111111111111111'),
(76, 11, 'contact2', 'contact2@mail.com', '222222222222222'),
(77, 11, 'contact3', 'contact3@mail.com', '333333333333333'),
(78, 10, 'Bryce', 'bryce.tsai@wis.com.tw', '275');

-- --------------------------------------------------------

--
-- 資料表結構 `dictionary`
--

CREATE TABLE IF NOT EXISTS `dictionary` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `creator` int(11) NOT NULL,
  `modifier` int(11) NOT NULL,
  `cdate` datetime NOT NULL,
  `mdate` datetime NOT NULL,
  `type_id` int(11) NOT NULL DEFAULT '0',
  `rank` int(11) NOT NULL DEFAULT '0',
  `return_value` int(11) NOT NULL,
  `hide` tinyint(4) NOT NULL,
  `value` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `type` (`type_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=851 ;

-- --------------------------------------------------------

--
-- 資料表結構 `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `uid` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `password` varchar(32) NOT NULL,
  `contacts` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=21 ;

--
-- 資料表的匯出資料 `users`
--

INSERT INTO `users` (`uid`, `email`, `password`, `contacts`) VALUES
(7, 'user2@mail.com', 'g0t2As#3l', 4),
(8, 'user3@mail.com', 'Wojx@%Wny', 7),
(9, 'user4@mail.com', 'bISeoz&LK', 2),
(10, 'user1@mail.com', 'J=WMSi&B&', 13),
(11, 'user5@mail.com', 'nzTlNzCN?', 3),
(12, 'user6@mail.com', '%r6^Kwgig', 1),
(13, 'user7@mail.com', 'ko?k#yzUe', 2),
(14, 'test@gmail.com', 'mNc9=Dw4H', 0),
(15, 'gggg@gmail.com', 'u^*9c9=7a', 0),
(16, 'gggg1@gmail.com', 'N(Rb=I*FW', 0),
(17, 'gggg2@gmail.com', 'TcfK=UxaY', 0),
(18, 'gggg3@gmail.com', '&=jtUEA$=', 0),
(19, 'gggg4@gmail.com', 'IUfZJH=)u', 0),
(20, 'gggg5@gmail.com', '4lOrc2Unr', 0);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
