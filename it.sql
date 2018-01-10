-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 22, 2017 at 02:35 AM
-- Server version: 5.7.9
-- PHP Version: 5.6.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `it`
--

-- --------------------------------------------------------

--
-- Table structure for table `actions`
--

DROP TABLE IF EXISTS `actions`;
CREATE TABLE IF NOT EXISTS `actions` (
  `action_id` int(11) NOT NULL AUTO_INCREMENT,
  `action` varchar(300) NOT NULL,
  `user_id` int(11) NOT NULL,
  `status` varchar(200) NOT NULL DEFAULT 'update your status',
  `status_code` int(11) NOT NULL DEFAULT '0',
  `event_id` int(11) NOT NULL,
  PRIMARY KEY (`action_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `actions`
--

INSERT INTO `actions` (`action_id`, `action`, `user_id`, `status`, `status_code`, `event_id`) VALUES
(1, 'gbug', 2, 'update your status', 0, 1),
(2, 'You are in charge of the library department and make students to pay the dues as soon as possible', 2, 'update your status', 0, 2),
(3, 'Check the furnitures and other amenities provided to the students', 3, 'update your status', 0, 2);

-- --------------------------------------------------------

--
-- Table structure for table `action_status`
--

DROP TABLE IF EXISTS `action_status`;
CREATE TABLE IF NOT EXISTS `action_status` (
  `status_code` int(11) NOT NULL,
  `status_level` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `action_status`
--

INSERT INTO `action_status` (`status_code`, `status_level`) VALUES
(0, 'new');

-- --------------------------------------------------------

--
-- Table structure for table `departmentgroup`
--

DROP TABLE IF EXISTS `departmentgroup`;
CREATE TABLE IF NOT EXISTS `departmentgroup` (
  `dept_id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `departmentgroup`
--

INSERT INTO `departmentgroup` (`dept_id`, `event_id`) VALUES
(4, 1),
(5, 1),
(4, 2),
(5, 2);

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

DROP TABLE IF EXISTS `departments`;
CREATE TABLE IF NOT EXISTS `departments` (
  `dept_id` int(6) NOT NULL AUTO_INCREMENT,
  `department_name` varchar(60) NOT NULL,
  `short_name` varchar(30) NOT NULL,
  PRIMARY KEY (`dept_id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`dept_id`, `department_name`, `short_name`) VALUES
(1, 'Mechanical Engineering', 'MECH'),
(2, 'Electronics And Communication Engineering', 'ECE'),
(3, 'Electrical And Electronics Engineering', 'EEE'),
(4, 'Civil Engineering', 'CIVIL'),
(5, 'Information Technology', 'IT'),
(6, 'Computer Science Engineering', 'CSE'),
(7, 'Mechatronics Engineering', 'MECHATRONICS');

-- --------------------------------------------------------

--
-- Table structure for table `discussion`
--

DROP TABLE IF EXISTS `discussion`;
CREATE TABLE IF NOT EXISTS `discussion` (
  `discussion_id` int(11) NOT NULL AUTO_INCREMENT,
  `event_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `message` varchar(500) NOT NULL,
  `msg_on` datetime NOT NULL,
  PRIMARY KEY (`discussion_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
CREATE TABLE IF NOT EXISTS `events` (
  `event_id` int(11) NOT NULL AUTO_INCREMENT,
  `event_name` varchar(50) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `status_code` int(11) NOT NULL,
  `start_date` datetime NOT NULL,
  `due_date` datetime NOT NULL,
  PRIMARY KEY (`event_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`event_id`, `event_name`, `description`, `owner_id`, `status_code`, `start_date`, `due_date`) VALUES
(1, 'sample ', 'sample desc', 1, 0, '2018-09-11 20:35:46', '2019-06-11 20:35:46'),
(2, 'New subject about meeting', 'This is a description about the meeting that is held in Information technology department and many issues are raised in the period', 1, 0, '2017-01-12 19:28:27', '2019-04-12 19:28:27');

-- --------------------------------------------------------

--
-- Table structure for table `event_status`
--

DROP TABLE IF EXISTS `event_status`;
CREATE TABLE IF NOT EXISTS `event_status` (
  `status_code` int(11) NOT NULL,
  `status_level` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `usergroup`
--

DROP TABLE IF EXISTS `usergroup`;
CREATE TABLE IF NOT EXISTS `usergroup` (
  `event_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `usergroup`
--

INSERT INTO `usergroup` (`event_id`, `user_id`) VALUES
(1, 2),
(1, 2),
(2, 2),
(2, 3);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `user_position` varchar(100) NOT NULL,
  `user_level` varchar(100) NOT NULL,
  `department` int(20) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `email`, `password`, `user_position`, `user_level`, `department`) VALUES
(1, 'Jegan Babu T K', 'jeganbabu33@gmail.com', 'jegan', 'Student', '5', 5),
(2, 'Chandramouleeswaran G', 'cmouleeswaran17@gmail.com', 'moulee', 'Student', '5', 5),
(3, 'Manoj Kumar S', 'kumarmanoj1158@gmail.com', 'manoj', 'Student', '5', 5);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
