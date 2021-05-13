-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: camt
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chitiethoadon`
--

DROP TABLE IF EXISTS `chitiethoadon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitiethoadon` (
  `idchitiethoadon` int NOT NULL AUTO_INCREMENT,
  `idhoadon` int NOT NULL,
  `idsanpham` int NOT NULL,
  `soluong` int NOT NULL,
  `thanhtien` decimal(15,0) NOT NULL,
  `uudai` decimal(15,0) NOT NULL,
  `ghichu` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idchitiethoadon`),
  KEY `FK-Chitiethoadon-Hoadon` (`idhoadon`),
  KEY `FK-Chitiethoadon-Sanpham` (`idsanpham`),
  CONSTRAINT `FK-Chitiethoadon-Hoadon` FOREIGN KEY (`idhoadon`) REFERENCES `hoadon` (`idhoadon`),
  CONSTRAINT `FK-Chitiethoadon-Sanpham` FOREIGN KEY (`idsanpham`) REFERENCES `sanpham` (`idsanpham`)
) ENGINE=InnoDB AUTO_INCREMENT=758 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitiethoadon`
--

LOCK TABLES `chitiethoadon` WRITE;
/*!40000 ALTER TABLE `chitiethoadon` DISABLE KEYS */;
INSERT INTO `chitiethoadon` VALUES (743,548,226,1,50000,0,'Mới'),(744,549,226,1,50000,0,'Mới'),(745,550,234,1,220000,0,'Mới'),(746,550,234,1,220000,0,'Mới'),(747,552,235,1,300000,0,'Mới'),(748,553,226,1,47500,2500,'Mới'),(749,554,228,1,42750,2250,'Mới'),(750,555,228,1,42750,2250,'Mới'),(751,556,234,1,209000,11000,'Mới'),(752,557,226,1,47500,2500,'Mới'),(753,558,226,1,47500,2500,'Mới'),(754,559,235,1,285000,15000,'Mới'),(755,560,226,1,47500,2500,'Mới'),(756,561,226,1,47500,2500,'Mới'),(757,562,226,1,47500,2500,'Mới');
/*!40000 ALTER TABLE `chitiethoadon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chitietphieunhap`
--

DROP TABLE IF EXISTS `chitietphieunhap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitietphieunhap` (
  `idchitietphieunhap` int NOT NULL AUTO_INCREMENT,
  `idphieunhap` int DEFAULT NULL,
  `idsanpham` int NOT NULL,
  `donvi` varchar(5) NOT NULL,
  `soluong` int NOT NULL,
  `gianhap` decimal(15,0) NOT NULL,
  `thanhtien` decimal(15,0) NOT NULL,
  `ghichu` varchar(100) DEFAULT NULL,
  `idnhacungcap` int DEFAULT NULL,
  `hinhthucnhap` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`idchitietphieunhap`),
  KEY `FK_CHITIETPHIEUNHAP_PHIEUNHAP` (`idphieunhap`),
  KEY `FK_CHITIETPHIEUNHAP_SANPHAM` (`idsanpham`),
  CONSTRAINT `FK_CHITIETPHIEUNHAP_PHIEUNHAP` FOREIGN KEY (`idphieunhap`) REFERENCES `phieunhap` (`idphieunhap`),
  CONSTRAINT `FK_CHITIETPHIEUNHAP_SANPHAM` FOREIGN KEY (`idsanpham`) REFERENCES `sanpham` (`idsanpham`)
) ENGINE=InnoDB AUTO_INCREMENT=309 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitietphieunhap`
--

LOCK TABLES `chitietphieunhap` WRITE;
/*!40000 ALTER TABLE `chitietphieunhap` DISABLE KEYS */;
INSERT INTO `chitietphieunhap` VALUES (302,194,226,'Cái',1,30000,30000,'Mới',2,'Nhập Lẻ'),(303,194,227,'Cái',1,30000,30000,'Mới',2,'Nhập Lẻ'),(305,196,226,'Cái',1,30000,30000,'Mới',2,'null'),(306,197,226,'Cái',1,30000,30000,'Mới',2,'null'),(307,198,226,'Cái',1,30000,30000,'Mới',2,'null'),(308,199,226,'Cái',1,30000,30000,'Mới',11,'null');
/*!40000 ALTER TABLE `chitietphieunhap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chitiettrahang`
--

DROP TABLE IF EXISTS `chitiettrahang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chitiettrahang` (
  `idchitiettrahang` int NOT NULL AUTO_INCREMENT,
  `idtrahang` int NOT NULL,
  `idchitiethoadon` int NOT NULL,
  `idsanpham` int NOT NULL,
  `soluong` int NOT NULL,
  `giahang` decimal(15,0) NOT NULL,
  `phitra` decimal(15,0) NOT NULL,
  `thanhtien` decimal(15,0) NOT NULL,
  `ghichu` varchar(100) NOT NULL,
  PRIMARY KEY (`idchitiettrahang`),
  KEY `FK-ChiTietTraHang-TraHang` (`idtrahang`),
  KEY `FK-ChiTietTraHang-SanPham` (`idsanpham`),
  CONSTRAINT `FK-ChiTietTraHang-SanPham` FOREIGN KEY (`idsanpham`) REFERENCES `sanpham` (`idsanpham`),
  CONSTRAINT `FK-ChiTietTraHang-TraHang` FOREIGN KEY (`idtrahang`) REFERENCES `trahang` (`idtrahang`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chitiettrahang`
--

LOCK TABLES `chitiettrahang` WRITE;
/*!40000 ALTER TABLE `chitiettrahang` DISABLE KEYS */;
INSERT INTO `chitiettrahang` VALUES (78,78,743,226,1,50000,0,50000,'Mới');
/*!40000 ALTER TABLE `chitiettrahang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hangsanpham`
--

DROP TABLE IF EXISTS `hangsanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hangsanpham` (
  `idhangsanpham` int NOT NULL AUTO_INCREMENT,
  `tenhang` varchar(30) NOT NULL,
  `mota` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idhangsanpham`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hangsanpham`
--

LOCK TABLES `hangsanpham` WRITE;
/*!40000 ALTER TABLE `hangsanpham` DISABLE KEYS */;
INSERT INTO `hangsanpham` VALUES (1,'QuangChau',NULL),(2,'Unique',NULL);
/*!40000 ALTER TABLE `hangsanpham` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hinhthucgiaohang`
--

DROP TABLE IF EXISTS `hinhthucgiaohang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hinhthucgiaohang` (
  `idhinhthuc` int NOT NULL AUTO_INCREMENT,
  `tenhinhthuc` varchar(30) NOT NULL,
  `mota` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idhinhthuc`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hinhthucgiaohang`
--

LOCK TABLES `hinhthucgiaohang` WRITE;
/*!40000 ALTER TABLE `hinhthucgiaohang` DISABLE KEYS */;
INSERT INTO `hinhthucgiaohang` VALUES (1,'Không',''),(2,'Ship COD','no'),(3,'Gửi qua bưu điện','hơi lâu'),(4,'Nhận tại cửa hàng','no');
/*!40000 ALTER TABLE `hinhthucgiaohang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoadon`
--

DROP TABLE IF EXISTS `hoadon`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hoadon` (
  `idhoadon` int NOT NULL AUTO_INCREMENT,
  `sohoadon` varchar(20) NOT NULL,
  `ngaytaohoadon` datetime NOT NULL,
  `idnguoidung` int NOT NULL,
  `tinhtrang` int NOT NULL,
  `tongtien` decimal(15,0) NOT NULL,
  `idkhachhang` int DEFAULT NULL,
  `trahang` int NOT NULL,
  `diachigiaohang` varchar(200) DEFAULT NULL,
  `hinhthucthanhtoan` varchar(30) DEFAULT NULL,
  `trangthaihoadon` int DEFAULT NULL,
  `congno` decimal(15,0) NOT NULL,
  `hantracongno` date DEFAULT NULL,
  `loaihoadon` int DEFAULT NULL,
  `tiengiaohang` decimal(15,0) DEFAULT NULL,
  `sodienthoai` int DEFAULT NULL,
  `view` int DEFAULT NULL,
  `idhinhthuc` int DEFAULT NULL,
  `mahuydon` varchar(7) DEFAULT NULL,
  PRIMARY KEY (`idhoadon`),
  KEY `FK-Hoadon-Nguoidung` (`idnguoidung`),
  KEY `FK-Hoadon-Khachhang` (`idkhachhang`),
  KEY `FK-HD-HTGH` (`idhinhthuc`),
  CONSTRAINT `FK-HD-HTGH` FOREIGN KEY (`idhinhthuc`) REFERENCES `hinhthucgiaohang` (`idhinhthuc`),
  CONSTRAINT `FK-Hoadon-Khachhang` FOREIGN KEY (`idkhachhang`) REFERENCES `khachhang` (`idkhachhang`),
  CONSTRAINT `FK-Hoadon-Nguoidung` FOREIGN KEY (`idnguoidung`) REFERENCES `nguoidung` (`idnguoidung`)
) ENGINE=InnoDB AUTO_INCREMENT=563 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoadon`
--

LOCK TABLES `hoadon` WRITE;
/*!40000 ALTER TABLE `hoadon` DISABLE KEYS */;
INSERT INTO `hoadon` VALUES (548,'HD20210370085244','2021-03-11 00:00:00',2,0,270000,106,1,NULL,NULL,NULL,0,'1000-01-01',0,NULL,NULL,NULL,NULL,NULL),(549,'HD20210381041702','2021-03-22 00:00:00',2,0,50000,106,0,NULL,NULL,NULL,0,'1000-01-01',0,NULL,NULL,NULL,NULL,NULL),(550,'HD20210385074913','2021-03-26 00:00:00',2,0,220000,106,0,NULL,NULL,NULL,0,'1000-01-01',0,NULL,NULL,NULL,NULL,NULL),(551,'HD20210385074913','2021-03-26 00:00:00',2,0,220000,106,0,NULL,NULL,NULL,0,'1000-01-01',0,NULL,NULL,NULL,NULL,NULL),(552,'HD20210385075613','2021-03-26 00:00:00',2,0,300000,106,0,NULL,NULL,NULL,0,'1000-01-01',0,NULL,NULL,NULL,NULL,NULL),(553,'HD20210385080141','2021-03-26 00:00:00',2,0,47500,106,0,NULL,NULL,NULL,0,'1000-01-01',0,NULL,NULL,NULL,NULL,NULL),(554,'HD20210496071326','2021-04-06 00:00:00',2,0,42750,106,0,NULL,NULL,NULL,0,'1000-01-01',0,NULL,NULL,NULL,NULL,NULL),(555,'HD20210496071608','2021-04-06 00:00:00',2,1,42750,106,0,NULL,NULL,NULL,0,'1000-01-01',0,NULL,NULL,NULL,NULL,NULL),(556,'HD20210496071736','2021-04-06 00:00:00',2,1,209000,106,0,NULL,NULL,NULL,0,'1000-01-01',0,NULL,NULL,NULL,NULL,NULL),(557,'HD20210498083445','2021-04-08 00:00:00',2,1,47500,106,0,NULL,NULL,NULL,0,'1000-01-01',0,NULL,NULL,NULL,NULL,NULL),(558,'HD20210498093935','2021-04-08 00:00:00',2,1,47500,106,0,NULL,NULL,NULL,0,'1000-01-01',0,NULL,NULL,NULL,NULL,NULL),(559,'HD202104101115331','2021-04-11 00:00:00',2,1,285000,106,0,NULL,NULL,NULL,0,'1000-01-01',0,NULL,NULL,NULL,NULL,NULL),(560,'HD202104101101715','2021-04-11 00:00:00',2,1,47500,106,0,NULL,NULL,NULL,0,'1000-01-01',0,NULL,NULL,NULL,NULL,NULL),(561,'HD202104101102652','2021-04-11 00:00:00',2,1,47500,106,0,NULL,NULL,NULL,0,'1000-01-01',0,NULL,NULL,NULL,NULL,NULL),(562,'HD202104116091513','2021-04-26 00:00:00',2,1,47500,106,0,NULL,'1',3,0,'1000-01-01',1,234234,NULL,1,2,NULL);
/*!40000 ALTER TABLE `hoadon` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoatdong`
--

DROP TABLE IF EXISTS `hoatdong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hoatdong` (
  `idhoatdong` int NOT NULL AUTO_INCREMENT,
  `idloaihoatdong` int NOT NULL,
  `idnguoidung` int NOT NULL,
  `thoigianhoatdong` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idhoatdong`),
  KEY `fk_hoatdong_nguoidung` (`idnguoidung`),
  KEY `fk_hoatdong_loaihoatdong` (`idloaihoatdong`),
  CONSTRAINT `fk_hoatdong_loaihoatdong` FOREIGN KEY (`idloaihoatdong`) REFERENCES `loaihoatdong` (`idloaihoatdong`),
  CONSTRAINT `fk_hoatdong_nguoidung` FOREIGN KEY (`idnguoidung`) REFERENCES `nguoidung` (`idnguoidung`)
) ENGINE=InnoDB AUTO_INCREMENT=1830 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoatdong`
--

LOCK TABLES `hoatdong` WRITE;
/*!40000 ALTER TABLE `hoatdong` DISABLE KEYS */;
INSERT INTO `hoatdong` VALUES (1544,1,2,'2021-03-07 22:34:11'),(1545,1,2,'2021-03-07 22:38:18'),(1546,1,2,'2021-03-07 22:45:05'),(1547,1,2,'2021-03-08 13:21:28'),(1548,1,2,'2021-03-11 20:48:42'),(1549,1,2,'2021-03-11 20:52:19'),(1550,1,2,'2021-03-11 20:59:41'),(1551,1,2,'2021-03-12 22:07:51'),(1552,1,2,'2021-03-22 16:04:26'),(1553,1,2,'2021-03-22 16:06:01'),(1554,1,2,'2021-03-22 16:15:53'),(1555,1,2,'2021-03-22 20:21:56'),(1556,1,2,'2021-03-22 20:24:13'),(1557,1,2,'2021-03-22 20:53:32'),(1558,1,2,'2021-03-22 21:05:12'),(1559,1,2,'2021-03-24 12:39:41'),(1560,1,2,'2021-03-26 19:39:23'),(1561,1,2,'2021-03-26 19:40:43'),(1562,1,2,'2021-03-26 19:42:50'),(1563,1,2,'2021-03-26 19:55:46'),(1564,1,2,'2021-03-26 20:01:36'),(1565,1,2,'2021-03-26 20:10:24'),(1566,1,2,'2021-03-26 20:12:57'),(1567,1,2,'2021-04-06 19:12:26'),(1568,1,2,'2021-04-06 19:13:19'),(1569,1,2,'2021-04-06 19:13:57'),(1570,1,2,'2021-04-06 19:16:04'),(1571,1,2,'2021-04-08 09:04:38'),(1572,1,2,'2021-04-08 09:18:15'),(1573,1,2,'2021-04-08 09:18:41'),(1574,1,2,'2021-04-08 09:21:31'),(1575,1,2,'2021-04-08 09:37:38'),(1576,1,2,'2021-04-08 20:33:31'),(1577,1,2,'2021-04-08 20:34:10'),(1578,1,2,'2021-04-08 20:38:30'),(1579,1,2,'2021-04-08 21:05:21'),(1580,1,2,'2021-04-08 21:07:55'),(1581,1,2,'2021-04-08 21:11:31'),(1582,1,2,'2021-04-08 21:16:07'),(1583,1,2,'2021-04-08 21:17:09'),(1584,1,2,'2021-04-08 21:17:34'),(1585,1,2,'2021-04-08 21:22:17'),(1586,1,2,'2021-04-08 21:28:17'),(1587,1,2,'2021-04-08 21:33:20'),(1588,1,2,'2021-04-08 21:36:10'),(1589,1,2,'2021-04-08 21:37:18'),(1590,1,2,'2021-04-08 21:38:15'),(1591,1,2,'2021-04-08 21:39:28'),(1592,1,2,'2021-04-08 21:49:51'),(1593,1,2,'2021-04-08 21:50:47'),(1594,1,2,'2021-04-08 21:51:26'),(1595,1,2,'2021-04-08 21:53:13'),(1596,1,2,'2021-04-08 21:53:54'),(1597,1,2,'2021-04-08 21:57:36'),(1598,1,2,'2021-04-08 22:00:06'),(1599,1,2,'2021-04-08 22:14:28'),(1600,1,2,'2021-04-08 22:14:58'),(1601,1,2,'2021-04-08 22:15:46'),(1602,1,2,'2021-04-08 22:18:21'),(1603,1,2,'2021-04-08 22:18:40'),(1604,1,2,'2021-04-08 22:19:53'),(1605,1,2,'2021-04-08 22:22:42'),(1606,1,2,'2021-04-08 22:23:35'),(1607,1,2,'2021-04-08 22:27:04'),(1608,1,2,'2021-04-08 22:28:22'),(1609,1,2,'2021-04-08 22:29:03'),(1610,1,2,'2021-04-08 22:29:41'),(1611,1,2,'2021-04-08 22:30:02'),(1612,1,2,'2021-04-08 22:33:20'),(1613,1,2,'2021-04-08 22:34:04'),(1614,1,2,'2021-04-08 22:34:41'),(1615,1,2,'2021-04-08 22:35:25'),(1616,1,2,'2021-04-08 22:38:59'),(1617,1,2,'2021-04-08 22:41:43'),(1618,1,2,'2021-04-08 22:44:54'),(1619,1,2,'2021-04-08 22:47:24'),(1620,1,2,'2021-04-08 22:48:00'),(1621,1,2,'2021-04-08 22:51:16'),(1622,1,2,'2021-04-08 22:52:07'),(1623,1,2,'2021-04-08 22:53:23'),(1624,1,2,'2021-04-08 22:54:44'),(1625,1,2,'2021-04-08 22:55:39'),(1626,1,2,'2021-04-08 22:56:38'),(1627,1,2,'2021-04-08 22:57:38'),(1628,1,2,'2021-04-08 23:00:55'),(1629,1,2,'2021-04-08 23:07:39'),(1630,1,2,'2021-04-08 23:20:46'),(1631,1,2,'2021-04-08 23:23:02'),(1632,1,2,'2021-04-08 23:24:42'),(1633,1,2,'2021-04-08 23:26:27'),(1634,1,2,'2021-04-10 00:51:20'),(1635,1,2,'2021-04-10 01:03:05'),(1636,1,2,'2021-04-10 16:59:54'),(1637,1,2,'2021-04-10 17:07:01'),(1638,1,2,'2021-04-10 17:09:35'),(1639,1,2,'2021-04-10 17:10:50'),(1640,1,2,'2021-04-10 17:13:32'),(1641,1,2,'2021-04-10 17:15:31'),(1642,1,2,'2021-04-10 17:18:54'),(1643,1,2,'2021-04-11 11:24:16'),(1644,1,2,'2021-04-11 11:29:46'),(1645,1,2,'2021-04-11 11:38:20'),(1646,1,2,'2021-04-11 11:43:47'),(1647,1,2,'2021-04-11 11:47:05'),(1648,1,2,'2021-04-11 11:48:18'),(1649,1,2,'2021-04-11 11:48:46'),(1650,1,2,'2021-04-11 11:50:38'),(1651,1,2,'2021-04-11 11:50:57'),(1652,1,2,'2021-04-11 11:53:17'),(1653,1,2,'2021-04-11 11:54:58'),(1654,1,2,'2021-04-11 11:56:24'),(1655,1,2,'2021-04-11 22:07:35'),(1656,1,2,'2021-04-11 22:17:10'),(1657,1,2,'2021-04-11 22:20:42'),(1658,1,2,'2021-04-11 22:26:44'),(1659,1,2,'2021-04-12 19:18:36'),(1660,1,2,'2021-04-12 19:19:14'),(1661,1,2,'2021-04-13 21:41:10'),(1662,1,2,'2021-04-13 21:42:12'),(1663,1,2,'2021-04-13 21:44:17'),(1664,1,2,'2021-04-13 21:45:20'),(1665,1,2,'2021-04-13 21:47:03'),(1666,1,2,'2021-04-13 22:47:57'),(1667,1,2,'2021-04-17 12:44:35'),(1668,1,2,'2021-04-17 16:44:19'),(1669,1,2,'2021-04-17 16:48:06'),(1670,1,2,'2021-04-17 16:51:15'),(1671,1,2,'2021-04-17 16:56:35'),(1672,1,2,'2021-04-17 17:00:18'),(1673,1,2,'2021-04-17 17:34:30'),(1674,1,2,'2021-04-18 20:05:29'),(1675,1,2,'2021-04-25 14:27:37'),(1676,1,2,'2021-04-25 14:30:40'),(1677,1,2,'2021-04-25 14:31:19'),(1678,1,2,'2021-04-25 14:32:04'),(1679,1,2,'2021-04-25 14:32:43'),(1680,1,2,'2021-04-25 20:29:23'),(1681,1,2,'2021-04-25 21:11:46'),(1682,1,2,'2021-04-25 21:57:16'),(1683,1,2,'2021-04-25 22:11:14'),(1684,1,2,'2021-04-26 09:14:03'),(1685,1,2,'2021-04-26 09:22:09'),(1686,1,2,'2021-04-26 09:47:04'),(1687,1,2,'2021-04-26 09:54:42'),(1688,1,2,'2021-04-26 09:55:00'),(1689,1,2,'2021-04-26 12:06:15'),(1690,1,2,'2021-04-26 12:12:13'),(1691,1,2,'2021-04-26 13:01:14'),(1692,1,2,'2021-04-26 19:02:08'),(1693,1,2,'2021-04-26 19:03:18'),(1694,1,2,'2021-04-26 19:13:18'),(1695,1,2,'2021-04-26 19:19:56'),(1696,1,2,'2021-04-26 19:21:02'),(1697,1,2,'2021-04-26 19:27:37'),(1698,1,2,'2021-04-26 19:33:10'),(1699,1,2,'2021-04-26 19:37:27'),(1700,1,2,'2021-04-26 19:43:18'),(1701,1,2,'2021-04-26 19:46:51'),(1702,1,2,'2021-04-26 19:51:17'),(1703,1,2,'2021-04-26 20:29:12'),(1704,1,2,'2021-04-26 20:31:16'),(1705,1,2,'2021-04-26 20:32:09'),(1706,1,2,'2021-04-26 20:36:14'),(1707,1,2,'2021-04-26 20:37:32'),(1708,1,2,'2021-04-26 20:38:54'),(1709,1,2,'2021-04-26 20:39:41'),(1710,1,2,'2021-04-26 20:40:36'),(1711,1,2,'2021-04-26 20:42:28'),(1712,1,2,'2021-04-26 20:42:45'),(1713,1,2,'2021-04-26 20:44:46'),(1714,1,2,'2021-04-26 20:49:24'),(1715,1,2,'2021-04-26 20:53:24'),(1716,1,2,'2021-04-26 20:55:55'),(1717,1,2,'2021-04-26 20:56:54'),(1718,1,2,'2021-04-26 20:57:28'),(1719,1,2,'2021-04-26 21:01:46'),(1720,1,2,'2021-04-26 21:04:20'),(1721,1,2,'2021-04-26 21:08:09'),(1722,1,2,'2021-04-26 21:09:02'),(1723,1,2,'2021-04-26 21:22:33'),(1724,1,2,'2021-04-26 21:29:27'),(1725,1,2,'2021-04-26 21:34:57'),(1726,1,2,'2021-04-26 21:38:06'),(1727,1,2,'2021-04-26 21:39:16'),(1728,1,2,'2021-04-26 21:40:54'),(1729,1,2,'2021-04-26 21:42:54'),(1730,1,2,'2021-04-26 21:47:53'),(1731,1,2,'2021-04-26 21:57:51'),(1732,1,2,'2021-04-26 21:58:29'),(1733,1,2,'2021-04-26 21:59:19'),(1734,1,2,'2021-04-26 22:06:52'),(1735,1,2,'2021-04-26 22:10:19'),(1736,1,2,'2021-04-26 22:14:52'),(1737,1,2,'2021-04-26 22:19:08'),(1738,1,2,'2021-04-26 22:30:51'),(1739,1,2,'2021-04-26 22:32:18'),(1740,1,2,'2021-04-26 22:33:37'),(1741,1,2,'2021-04-26 22:35:21'),(1742,1,2,'2021-04-26 22:36:57'),(1743,1,2,'2021-04-26 22:39:52'),(1744,1,2,'2021-04-26 22:41:36'),(1745,1,2,'2021-04-26 22:41:57'),(1746,1,2,'2021-04-26 22:44:49'),(1747,1,2,'2021-04-26 22:47:56'),(1748,1,2,'2021-04-26 22:49:17'),(1749,1,2,'2021-04-26 22:53:10'),(1750,1,2,'2021-04-26 22:56:08'),(1751,1,2,'2021-04-26 23:05:34'),(1752,1,2,'2021-04-26 23:06:57'),(1753,1,2,'2021-04-26 23:08:59'),(1754,1,2,'2021-04-26 23:15:26'),(1755,1,2,'2021-04-26 23:16:13'),(1756,1,2,'2021-04-26 23:19:33'),(1757,1,2,'2021-04-26 23:24:26'),(1758,1,2,'2021-04-26 23:32:13'),(1759,1,2,'2021-04-26 23:32:42'),(1760,1,2,'2021-04-26 23:36:06'),(1761,1,2,'2021-04-26 23:36:26'),(1762,1,2,'2021-04-26 23:36:50'),(1763,1,2,'2021-04-26 23:38:44'),(1764,1,2,'2021-04-26 23:40:04'),(1765,1,2,'2021-04-26 23:42:26'),(1766,1,2,'2021-04-26 23:45:48'),(1767,1,2,'2021-04-26 23:47:14'),(1768,1,2,'2021-04-26 23:49:20'),(1769,1,2,'2021-04-26 23:49:55'),(1770,1,2,'2021-04-26 23:50:28'),(1771,1,2,'2021-04-26 23:52:01'),(1772,1,2,'2021-04-26 23:52:56'),(1773,1,2,'2021-04-26 23:54:10'),(1774,1,2,'2021-04-26 23:54:50'),(1775,1,2,'2021-04-26 23:58:18'),(1776,1,2,'2021-04-26 23:59:35'),(1777,1,2,'2021-04-27 00:02:47'),(1778,1,2,'2021-04-27 00:06:38'),(1779,1,2,'2021-04-27 00:12:08'),(1780,1,2,'2021-04-27 00:13:19'),(1781,1,2,'2021-04-27 00:15:25'),(1782,1,2,'2021-04-27 00:16:03'),(1783,1,2,'2021-04-27 00:17:02'),(1784,1,2,'2021-04-27 00:18:01'),(1785,1,2,'2021-04-27 00:18:36'),(1786,1,2,'2021-04-27 00:20:05'),(1787,1,2,'2021-04-27 00:21:23'),(1788,1,2,'2021-04-27 00:22:43'),(1789,1,2,'2021-04-27 00:24:16'),(1790,1,2,'2021-04-27 00:25:56'),(1791,1,2,'2021-04-27 00:26:25'),(1792,1,2,'2021-04-27 00:26:45'),(1793,1,2,'2021-04-27 00:27:07'),(1794,1,2,'2021-04-27 00:27:27'),(1795,1,2,'2021-04-27 00:29:43'),(1796,1,2,'2021-04-27 00:30:09'),(1797,1,2,'2021-04-27 00:30:39'),(1798,1,2,'2021-04-27 00:31:49'),(1799,1,2,'2021-04-27 00:32:13'),(1800,1,2,'2021-04-27 00:33:08'),(1801,1,2,'2021-04-27 00:33:57'),(1802,1,2,'2021-04-27 00:34:40'),(1803,1,2,'2021-04-27 00:40:17'),(1804,1,2,'2021-04-27 00:47:56'),(1805,1,2,'2021-04-27 00:48:28'),(1806,1,2,'2021-04-27 00:49:26'),(1807,1,2,'2021-04-27 00:51:17'),(1808,1,2,'2021-04-27 00:52:38'),(1809,1,2,'2021-04-27 00:55:28'),(1810,1,2,'2021-04-27 00:56:14'),(1811,1,2,'2021-04-27 00:57:24'),(1812,1,2,'2021-04-27 01:01:51'),(1813,1,2,'2021-04-27 01:09:42'),(1814,1,2,'2021-04-27 01:11:29'),(1815,1,2,'2021-04-27 01:12:54'),(1816,1,2,'2021-04-27 01:19:42'),(1817,1,2,'2021-04-27 10:08:48'),(1818,1,2,'2021-04-27 10:27:19'),(1819,1,2,'2021-04-27 10:30:21'),(1820,1,2,'2021-04-27 10:31:06'),(1821,1,2,'2021-04-27 10:32:48'),(1822,1,2,'2021-04-27 10:34:08'),(1823,1,2,'2021-04-27 10:49:12'),(1824,1,2,'2021-04-27 13:42:58'),(1825,1,2,'2021-04-27 15:05:42'),(1826,1,2,'2021-04-27 15:07:32'),(1827,1,2,'2021-04-27 15:17:28'),(1828,1,2,'2021-04-27 15:18:46'),(1829,1,2,'2021-04-27 15:23:20');
/*!40000 ALTER TABLE `hoatdong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `khachhang`
--

DROP TABLE IF EXISTS `khachhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `khachhang` (
  `idkhachhang` int NOT NULL AUTO_INCREMENT,
  `idloaikhachhang` int DEFAULT NULL,
  `idnguoidung` int DEFAULT NULL,
  `tenkhachhang` varchar(40) DEFAULT NULL,
  `sodienthoai` char(10) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `matkhau` varchar(100) DEFAULT NULL,
  `ngaysinh` date DEFAULT NULL,
  `diachi` varchar(255) DEFAULT NULL,
  `gioitinh` int DEFAULT NULL,
  `mangxahoi` varchar(100) DEFAULT NULL,
  `lancuoimuahang` datetime DEFAULT NULL,
  `tongtienhang` decimal(15,0) DEFAULT NULL,
  `mota` varchar(200) DEFAULT NULL,
  `tag` varchar(10) DEFAULT NULL,
  `role` varchar(5) DEFAULT NULL,
  `resetmatkhau` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`idkhachhang`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `FK-Loaikhachhang-Khachhang` (`idloaikhachhang`),
  CONSTRAINT `FK-Loaikhachhang-Khachhang` FOREIGN KEY (`idloaikhachhang`) REFERENCES `loaikhachhang` (`idloaikhachhang`)
) ENGINE=InnoDB AUTO_INCREMENT=111 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `khachhang`
--

LOCK TABLES `khachhang` WRITE;
/*!40000 ALTER TABLE `khachhang` DISABLE KEYS */;
INSERT INTO `khachhang` VALUES (106,2,0,'Nam','0912471110','nam11@gmail.com','123123','2016-03-10','sdfsdf',0,'https://fb.com','2021-04-26 00:00:00',1972000,'sdfsdfsdf','sdfsdfsdf',NULL,NULL),(107,1,0,'Bao','0912477770','sdfsd@gmail.com','123123','2021-04-11','ádasd',1,'https://www.facebook.com/FlashThanhNguyen/',NULL,NULL,'sdfsdfsdf','sdfsdfds',NULL,NULL),(108,1,0,'Quang','0912471155','sdfsdf@gmail.com','123123','2021-04-12','dsfsdfsdf',1,'https://www.facebook.com/FlashThanhNguyen/',NULL,NULL,'sdfsdfsdf','dfsdfdsf',NULL,NULL),(109,1,0,'doduy291@gmail.com','0973370125','doduy291@gmail.com','123456',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(110,1,0,'',NULL,'','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `khachhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `kho`
--

DROP TABLE IF EXISTS `kho`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `kho` (
  `idkho` int NOT NULL AUTO_INCREMENT,
  `idsanpham` int NOT NULL,
  `idphieunhap` int NOT NULL,
  `tonkho` int NOT NULL,
  `hangdangve` int NOT NULL,
  `trangthai` int DEFAULT NULL,
  PRIMARY KEY (`idkho`),
  KEY `FK_KHO_SANPHAM` (`idsanpham`),
  KEY `FK_KHO_PhieuNhap` (`idphieunhap`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `kho`
--

LOCK TABLES `kho` WRITE;
/*!40000 ALTER TABLE `kho` DISABLE KEYS */;
INSERT INTO `kho` VALUES (82,226,191,102,0,1),(83,227,191,111,0,1),(84,228,191,107,0,1),(85,229,191,111,0,1),(86,230,191,-11,0,1),(87,234,191,95,0,1),(88,235,191,104,0,1),(89,237,191,107,0,1),(90,240,191,0,0,1);
/*!40000 ALTER TABLE `kho` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loaihoatdong`
--

DROP TABLE IF EXISTS `loaihoatdong`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loaihoatdong` (
  `idloaihoatdong` int NOT NULL AUTO_INCREMENT,
  `tenloaihoatdong` varchar(50) NOT NULL,
  `mota` varchar(100) NOT NULL,
  PRIMARY KEY (`idloaihoatdong`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loaihoatdong`
--

LOCK TABLES `loaihoatdong` WRITE;
/*!40000 ALTER TABLE `loaihoatdong` DISABLE KEYS */;
INSERT INTO `loaihoatdong` VALUES (1,'Đăng nhập',''),(2,'Bán Hàng',''),(3,'Thêm Sản Phẩm',''),(4,'Sửa Sản Phẩm',''),(5,'Xóa Sản Phẩm',''),(6,'Thêm Khách Hàng',''),(7,'Sửa Khách Hàng',''),(8,'Xóa Khách Hàng',''),(9,'Trả Nợ Hóa Đơn',''),(10,'Trả Nợ Phiếu Nhập',''),(11,'Nhập Hàng',''),(12,'Thêm Nhà Cung Cấp',''),(13,'Sửa Nhà Cung Cấp',''),(14,'Xóa Nhà Cung Cấp',''),(15,'Trả Hàng',''),(16,'Trả Nợ Nhà Cung Cấp',''),(17,'Trả Nợ Khách Hàng',''),(18,'Chấm Công',''),(19,'Phát Lương','');
/*!40000 ALTER TABLE `loaihoatdong` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loaikhachhang`
--

DROP TABLE IF EXISTS `loaikhachhang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loaikhachhang` (
  `idloaikhachhang` int NOT NULL AUTO_INCREMENT,
  `tenloaikhachhang` varchar(30) NOT NULL,
  `uudai` varchar(10) NOT NULL,
  `mota` text,
  PRIMARY KEY (`idloaikhachhang`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loaikhachhang`
--

LOCK TABLES `loaikhachhang` WRITE;
/*!40000 ALTER TABLE `loaikhachhang` DISABLE KEYS */;
INSERT INTO `loaikhachhang` VALUES (1,'Khách Thường','0','Khách Thường'),(2,'Khách Quen','5','Khách Quen'),(3,'Khách Vip','10','Khách Vip');
/*!40000 ALTER TABLE `loaikhachhang` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loainhacungcap`
--

DROP TABLE IF EXISTS `loainhacungcap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loainhacungcap` (
  `idloainhacungcap` int NOT NULL AUTO_INCREMENT,
  `tenloainhacungcap` varchar(30) NOT NULL,
  `mota` varchar(100) NOT NULL,
  PRIMARY KEY (`idloainhacungcap`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loainhacungcap`
--

LOCK TABLES `loainhacungcap` WRITE;
/*!40000 ALTER TABLE `loainhacungcap` DISABLE KEYS */;
INSERT INTO `loainhacungcap` VALUES (1,'Áo',''),(2,'Quần',''),(3,'Áo + Quần',''),(4,'Phụ kiện',''),(5,'Giày',''),(6,'Váy','Không');
/*!40000 ALTER TABLE `loainhacungcap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loaisanpham`
--

DROP TABLE IF EXISTS `loaisanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loaisanpham` (
  `idloaisanpham` int NOT NULL AUTO_INCREMENT,
  `tenloaisanpham` varchar(30) NOT NULL,
  `mota` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`idloaisanpham`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loaisanpham`
--

LOCK TABLES `loaisanpham` WRITE;
/*!40000 ALTER TABLE `loaisanpham` DISABLE KEYS */;
INSERT INTO `loaisanpham` VALUES (1,'Áo','0'),(2,'Quần','0'),(5,'Đầm','5'),(9,'Váy','s');
/*!40000 ALTER TABLE `loaisanpham` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mausanpham`
--

DROP TABLE IF EXISTS `mausanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mausanpham` (
  `idmausanpham` int NOT NULL AUTO_INCREMENT,
  `tenmausanpham` varchar(30) NOT NULL,
  `mota` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idmausanpham`)
) ENGINE=InnoDB AUTO_INCREMENT=5558 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mausanpham`
--

LOCK TABLES `mausanpham` WRITE;
/*!40000 ALTER TABLE `mausanpham` DISABLE KEYS */;
INSERT INTO `mausanpham` VALUES (2,'Đỏ',NULL),(3,'Tím',NULL),(4,'Vàng',NULL),(5,'Xanh lục',NULL),(6,'Xanh lam',NULL),(7,'Nâu',NULL),(8,'Đen',NULL),(9,'Trắng',NULL),(10,'Chàm',NULL),(11,'Hường',NULL),(110,'Vàng',NULL),(5557,'Cam','null');
/*!40000 ALTER TABLE `mausanpham` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nguoidung`
--

DROP TABLE IF EXISTS `nguoidung`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nguoidung` (
  `idnguoidung` int NOT NULL AUTO_INCREMENT,
  `tennguoidung` varchar(40) NOT NULL,
  `sodienthoai` char(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `gioitinh` int DEFAULT NULL,
  `ngaysinh` date NOT NULL,
  `ngayvaolam` date NOT NULL,
  `diachi` varchar(255) NOT NULL,
  `cmnd` char(9) NOT NULL,
  `tendangnhap` varchar(40) NOT NULL,
  `matkhau` varchar(30) NOT NULL,
  `anhdaidien` mediumblob NOT NULL,
  `quyen` int DEFAULT NULL,
  `trangthai` int NOT NULL,
  `mota` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idnguoidung`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nguoidung`
--

LOCK TABLES `nguoidung` WRITE;
/*!40000 ALTER TABLE `nguoidung` DISABLE KEYS */;
INSERT INTO `nguoidung` VALUES (2,'Nguyễn Tuấn Thành','0912471100','Thanhntpk01161@fpt.edu.vn',1,'1999-06-27','2020-07-09','13-15-17 Phạm Văn Bạch','241789897','admin','123123',_binary '1.jpg',1,1,'admin'),(11,'Cao Thanh Nam','0912472222','asdfsfsf@gmail.com',1,'2021-03-26','2021-03-26','fdfdfdf','241797725','namct','123456',_binary '5.jpg',1,1,'dfdfdfd'),(13,'TuanThanh','0912471133','dsfsddfsdf@gmail.com',1,'2021-04-11','2021-04-11','sdfsdfsdf','241797777','thanh1234','123123',_binary '2.jpg',1,1,'sdfsdf');
/*!40000 ALTER TABLE `nguoidung` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `nhacungcap`
--

DROP TABLE IF EXISTS `nhacungcap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `nhacungcap` (
  `idnhacungcap` int NOT NULL AUTO_INCREMENT,
  `tennhacungcap` varchar(30) NOT NULL,
  `manhacungcap` varchar(30) NOT NULL,
  `idloainhacungcap` int NOT NULL,
  `sodienthoai` char(10) NOT NULL,
  `email` varchar(50) NOT NULL,
  `diachi` varchar(255) NOT NULL,
  `tinh` varchar(20) NOT NULL,
  `sofax` char(20) NOT NULL,
  `masothue` char(20) NOT NULL,
  `website` varchar(300) NOT NULL,
  `idnguoidung` int NOT NULL,
  `trangthai` int NOT NULL,
  `tag` varchar(10) NOT NULL,
  `mota` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idnhacungcap`),
  KEY `FK-Nhacungcap-Nguoidung` (`idnguoidung`),
  KEY `FK_NhaCungCap_LoaiNhaCungCap` (`idloainhacungcap`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `nhacungcap`
--

LOCK TABLES `nhacungcap` WRITE;
/*!40000 ALTER TABLE `nhacungcap` DISABLE KEYS */;
INSERT INTO `nhacungcap` VALUES (2,'Quảng Châu','CN32155',1,'0123625486','quangchau@gmail.com','Quảng Châu, Trung Quốc','Quảng Châu','0','0','quangchau.com',2,1,'1','1'),(11,'Thái Nguyên','CN32154',1,'0336526523','saigon@gmail.com','Sài Gòn, Việt Nam','An Giang','null','0','https://saigon.com',11,1,'dfgdg','dfgdfg'),(23,'Hà Nội','CN22461',2,'0912471100','Hanoi@gmail.com','123kjsdhfkjsdhf','An Giang','0','0','https://hanoi.com',2,1,'dfgdfgd','dfgdfg'),(24,'hcm','CN93740',2,'0912471111','hcm@gmail.com','sdfsdf32','An Giang','0','0','https://hcm.com',2,1,'sdfsdf','sdfsdf');
/*!40000 ALTER TABLE `nhacungcap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `phieunhap`
--

DROP TABLE IF EXISTS `phieunhap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `phieunhap` (
  `idphieunhap` int NOT NULL AUTO_INCREMENT,
  `idnhacungcap` int DEFAULT NULL,
  `idnguoidung` int DEFAULT NULL,
  `sophieunhap` varchar(20) DEFAULT NULL,
  `ngaynhap` datetime DEFAULT CURRENT_TIMESTAMP,
  `thanhtien` decimal(15,0) DEFAULT NULL,
  `hinhthucthanhtoan` varchar(100) DEFAULT NULL,
  `hinhthucnhap` varchar(10) DEFAULT NULL,
  `trangthai` int DEFAULT NULL,
  `nhapkho` int DEFAULT NULL,
  `thanhtoan` int DEFAULT NULL,
  `congno` decimal(15,0) DEFAULT NULL,
  `hantracongno` date DEFAULT NULL,
  `tag` varchar(100) DEFAULT NULL,
  `ghichu` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idphieunhap`),
  KEY `FK-Phieunhap-Nhacungcap` (`idnhacungcap`),
  KEY `FK-Phieunhap-Nguoidung` (`idnguoidung`)
) ENGINE=InnoDB AUTO_INCREMENT=200 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `phieunhap`
--

LOCK TABLES `phieunhap` WRITE;
/*!40000 ALTER TABLE `phieunhap` DISABLE KEYS */;
INSERT INTO `phieunhap` VALUES (194,2,2,'PN202104116071329','2021-04-26 00:00:00',60000,'Tiền Mặt','Nhập Lẻ',1,1,1,NULL,NULL,'',''),(196,2,2,'PN202104116094302','2021-04-26 00:00:00',30000,'Tiền Mặt','null',1,1,1,NULL,NULL,'',''),(197,2,2,'PN202104116101117','2021-04-26 00:00:00',30000,'Tiền Mặt','null',1,1,1,NULL,NULL,'',''),(198,2,2,'PN202104116101920','2021-04-26 00:00:00',30000,'Tiền Mặt','null',1,1,1,NULL,NULL,'',''),(199,11,2,'PN202104117014312','2021-04-27 00:00:00',30000,'Tiền Mặt','null',1,1,1,NULL,NULL,'','');
/*!40000 ALTER TABLE `phieunhap` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `review`
--

DROP TABLE IF EXISTS `review`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `review` (
  `idreview` int NOT NULL AUTO_INCREMENT,
  `idsanpham` int DEFAULT NULL,
  `tenkhachhang` varchar(45) DEFAULT NULL,
  `comment` mediumtext,
  `ngayreview` datetime DEFAULT NULL,
  PRIMARY KEY (`idreview`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `review`
--

LOCK TABLES `review` WRITE;
/*!40000 ALTER TABLE `review` DISABLE KEYS */;
/*!40000 ALTER TABLE `review` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sanpham`
--

DROP TABLE IF EXISTS `sanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sanpham` (
  `idsanpham` int NOT NULL AUTO_INCREMENT,
  `tensanpham` varchar(50) DEFAULT NULL,
  `ngaytao` date DEFAULT NULL,
  `masanpham` varchar(14) DEFAULT NULL,
  `motasanpham` text,
  `giabanle` decimal(15,0) DEFAULT NULL,
  `giabanbuon` decimal(10,0) DEFAULT NULL,
  `gianhap` decimal(15,0) DEFAULT NULL,
  `khoiluong` int DEFAULT NULL,
  `donvitinh` varchar(5) DEFAULT NULL,
  `tonkho` int DEFAULT NULL,
  `idloaisanpham` int DEFAULT NULL,
  `idhangsanpham` int DEFAULT NULL,
  `thuoctinhkhachhang` varchar(20) DEFAULT NULL,
  `anhsanpham` blob,
  `idsizesanpham` int DEFAULT NULL,
  `idmausanpham` int DEFAULT NULL,
  `slug` varchar(45) DEFAULT NULL,
  `anhsanphampath` text,
  PRIMARY KEY (`idsanpham`),
  KEY `FK_SanPham_LoaiSanPham` (`idloaisanpham`),
  KEY `FK_SanPham_Size` (`idsizesanpham`),
  KEY ` FK_SanPham_MauSanPham` (`idmausanpham`),
  KEY `FK_SanPham_HangSanPham` (`idhangsanpham`)
) ENGINE=InnoDB AUTO_INCREMENT=249 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sanpham`
--

LOCK TABLES `sanpham` WRITE;
/*!40000 ALTER TABLE `sanpham` DISABLE KEYS */;
INSERT INTO `sanpham` VALUES (226,'Áo thun nam England','2020-12-19','CN36345','Không',50000,0,30000,10,'Cái',102,1,1,'Nam',NULL,110,6,'ao-thun-nam-england','/uploads/455x514-image-file-1619767287799.jpg'),(227,'Áo thun nam England','2020-12-19','CN45633','Không',50000,0,30000,10,'Cái',111,1,1,'Nam',NULL,111,9,'ao-thun-nam-england','/uploads/455x514-image-file-1619767315456.jpg'),(228,'Quần Jogger Nam','2020-12-20','CN74279','không',45000,0,35000,10,'Cái',107,2,1,'Nam',NULL,110,8,'quan-jogger-nam','/uploads/455x514-image-file-1619767324091.jpg'),(229,'Quần Jogger Nam','2020-12-20','CN46409','không',45000,0,35000,10,'Cái',111,2,1,'Nam',NULL,111,8,'quan-jogger-nam','/uploads/455x514-image-file-1619767356863.jpg'),(230,'Áo khoác gió Mũ Lông','2020-12-20','CN85538','không',1000,0,500,10,'cái',-11,5,1,'Nam',NULL,111,3,'ao-khoac-gio-mu-long','/uploads/455x514-image-file-1619767291655.jpg'),(231,'Áo phao nam Unique','2020-12-21','CN59124','không',50000,0,30000,5,'Lá',0,1,1,'Nam',NULL,110,8,'ao-phao-nam-unique','/uploads/455x514-image-file-1619767351761.jpg'),(232,'Áo phao nam Unique','2020-12-21','CN63282','không',60000,0,30000,5,'Lá',0,1,1,'Nam',NULL,111,9,'ao-phao-nam-unique','/uploads/455x514-image-file-1619767365417.jpg'),(233,'Áo phao nam Unique','2020-12-21','8936042260541','không',70000,0,30000,5,'Lá',0,1,1,'Nam',NULL,111,2,'ao-phao-nam-unique','/uploads/455x514-image-file-1619767346327.jpg'),(234,'Áo khoác nữ Long Stave','2020-12-22','5901234123457','',220000,0,150000,50,'Cái',95,1,1,'Nữ',NULL,110,9,'ao-khoac-nu-long-stave','/uploads/455x514-image-file-1619767360768.jpg'),(235,'Áo phao nữ Quảng Châu','2020-12-24','CN8620','',300000,0,220000,5,'',104,1,1,'Nam',NULL,111,4,'ao-phao-nu-quang-chau','/uploads/455x514-image-file-1619767351761.jpg'),(236,'Áo phao nữ Quảng Châu','2020-12-24','CN14122','',300000,0,220000,5,'',0,1,1,'Nam',NULL,111,11,'ao-phao-nu-quang-chau','/uploads/455x514-image-file-1619767351761.jpg'),(237,'Váy Nữ Gắn Nơ','2020-12-24','CN78002','',280000,0,200000,10,'Bộ',107,9,1,'Nữ',NULL,111,8,'vay-nu-gan-no','/uploads/455x514-image-file-1619767341454.jpg'),(238,'Váy Nữ Gắn Nơ','2020-12-24','CN66943','',280000,0,200000,10,'Bộ',0,9,1,'Nam',NULL,111,9,'vay-nu-gan-no','/uploads/455x514-image-file-1619767341454.jpg'),(239,'Váy Nữ Gắn Nơ','2020-12-24','CN36577','',280000,0,200000,10,'Bộ',0,9,1,'Nam',NULL,111,11,'vay-nu-gan-no','/uploads/455x514-image-file-1619767341454.jpg'),(240,'Áo len nữ đan chéo','2020-12-24','CN19246','',180000,0,150000,10,'Cái',111,1,1,'Nữ',NULL,110,6,'ao-len-nu-djan-cheo','/uploads/455x514-image-file-1619767320036.jpg'),(241,'Áo len nữ đan chéo','2020-12-24','CN41553','',180000,0,150000,10,'Cái',0,1,1,'Nữ',NULL,111,6,'ao-len-nu-djan-cheo','/uploads/455x514-image-file-1619767311541.jpg'),(242,'Áo len nữ đan chéo','2020-12-24','CN69931','',180000,0,150000,10,'Cái',0,1,1,'Nữ',NULL,112,6,'ao-len-nu-djan-cheo','/uploads/455x514-image-file-1619767298236.jpg');
/*!40000 ALTER TABLE `sanpham` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sizesanpham`
--

DROP TABLE IF EXISTS `sizesanpham`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sizesanpham` (
  `idsize` int NOT NULL AUTO_INCREMENT,
  `tensize` varchar(30) NOT NULL,
  `mota` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`idsize`)
) ENGINE=InnoDB AUTO_INCREMENT=1146 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sizesanpham`
--

LOCK TABLES `sizesanpham` WRITE;
/*!40000 ALTER TABLE `sizesanpham` DISABLE KEYS */;
INSERT INTO `sizesanpham` VALUES (110,'S','Size nhỏ'),(111,'M','Size vừa'),(112,'L','Size lớn'),(113,'XL','Size rất lớn'),(1145,'XXL','Size rất rất lớn');
/*!40000 ALTER TABLE `sizesanpham` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `taikhoan`
--

DROP TABLE IF EXISTS `taikhoan`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `taikhoan` (
  `idtaikhoan` int NOT NULL AUTO_INCREMENT,
  `TenTaiKhoan` varchar(255) DEFAULT NULL,
  `MatKhau` varchar(255) DEFAULT NULL,
  `MaQuyen` varchar(255) DEFAULT NULL,
  `MaNV` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idtaikhoan`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `taikhoan`
--

LOCK TABLES `taikhoan` WRITE;
/*!40000 ALTER TABLE `taikhoan` DISABLE KEYS */;
/*!40000 ALTER TABLE `taikhoan` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `thuchi`
--

DROP TABLE IF EXISTS `thuchi`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `thuchi` (
  `idthuchi` int NOT NULL AUTO_INCREMENT,
  `mathuchi` varchar(20) NOT NULL,
  `idnhacungcap` int DEFAULT NULL,
  `idkhachhang` int DEFAULT NULL,
  `idnguoidung` int DEFAULT NULL,
  `loaiphieu` varchar(10) NOT NULL,
  `ngaytao` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `hangmucthuchi` varchar(50) NOT NULL,
  `tongtien` decimal(15,0) NOT NULL,
  `ghichu` varchar(200) NOT NULL,
  PRIMARY KEY (`idthuchi`)
) ENGINE=InnoDB AUTO_INCREMENT=173 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `thuchi`
--

LOCK TABLES `thuchi` WRITE;
/*!40000 ALTER TABLE `thuchi` DISABLE KEYS */;
INSERT INTO `thuchi` VALUES (150,'PTC20210496071614',NULL,106,NULL,'Phiếu Thu','2021-04-06 19:16:14','Bán Hàng',42750,'Thu Hóa Đơn HD20210496071608'),(151,'PTC20210496071748',NULL,106,NULL,'Phiếu Thu','2021-04-06 19:17:48','Bán Hàng',209000,'Thu Hóa Đơn HD20210496071736'),(152,'PTC20210498083520',NULL,106,NULL,'Phiếu Thu','2021-04-08 20:35:20','Bán Hàng',47500,'Thu Hóa Đơn HD20210498083445'),(153,'PTC20210498093943',NULL,106,NULL,'Phiếu Thu','2021-04-08 21:39:43','Bán Hàng',47500,'Thu Hóa Đơn HD20210498093935'),(154,'PTC202104101115338',NULL,106,NULL,'Phiếu Thu','2021-04-11 11:53:38','Bán Hàng',285000,'Thu Hóa Đơn HD202104101115331'),(155,'PTC202104101101723',NULL,106,NULL,'Phiếu Thu','2021-04-11 22:17:23','Bán Hàng',47500,'Thu Hóa Đơn HD202104101101715'),(156,'PTC202104101102101',11,NULL,NULL,'Phiếu Chi','2021-04-11 22:21:01','Nhập Hàng',30000,'Chi Phiếu Nhập PN202104101102051'),(157,'PTC202104101102132',11,NULL,NULL,'Phiếu Chi','2021-04-11 22:21:32','Nhập Hàng',500,'Chi Phiếu Nhập PN202104101102125'),(158,'PTC202104101102727',NULL,106,NULL,'Phiếu Thu','2021-04-11 22:27:27','Bán Hàng',47500,'Thu Hóa Đơn HD202104101102652'),(159,'PTC202104116091542',NULL,106,NULL,'Phiếu Thu','2021-04-26 09:15:42','Bán Hàng',47500,'Thu Hóa Đơn HD202104116091513'),(160,'PTC202104116071409',NULL,106,NULL,'Phiếu Chi','2021-04-26 19:14:09','Trả Tiền Trả Hàng',50000,'Trả Khách HàngNam cc'),(161,'PTC202104116090918',2,NULL,NULL,'Phiếu Chi','2021-04-26 21:09:18','Nhập Hàng',30000,'Chi Phiếu Nhập PN202104116090910'),(162,'PTC202104116092417',2,NULL,NULL,'Phiếu Chi','2021-04-26 21:24:17','Nhập Hàng',60000,'Chi Phiếu Nhập PN202104116071329'),(163,'PTC202104116092514',2,NULL,NULL,'Phiếu Chi','2021-04-26 21:25:14','Nhập Hàng',30000,'Chi Phiếu Nhập PN202104116092507'),(164,'PTC202104116093826',2,NULL,NULL,'Phiếu Chi','2021-04-26 21:38:26','Nhập Hàng',20000,'Chi Phiếu Nhập PN202104116092320'),(165,'PTC202104116094346',2,NULL,NULL,'Phiếu Chi','2021-04-26 21:43:46','Nhập Hàng',30000,'Chi Phiếu Nhập PN202104116094302'),(166,'PTC202104116094359',2,NULL,NULL,'Phiếu Chi','2021-04-26 21:43:59','Nhập Hàng',30000,'Chi Phiếu Nhập PN202104116094302'),(167,'PTC202104116094807',2,NULL,NULL,'Phiếu Chi','2021-04-26 21:48:07','Nhập Hàng',30000,'Chi Phiếu Nhập PN202104116094302'),(168,'PTC202104116100728',2,NULL,NULL,'Phiếu Chi','2021-04-26 22:07:28','Nhập Hàng',30000,'Chi Phiếu Nhập PN202104116094302'),(169,'PTC202104116101146',2,NULL,NULL,'Phiếu Chi','2021-04-26 22:11:46','Nhập Hàng',30000,'Chi Phiếu Nhập PN202104116101117'),(170,'PTC202104116102002',2,NULL,NULL,'Phiếu Chi','2021-04-26 22:20:02','Nhập Hàng',30000,'Chi Phiếu Nhập PN202104116101920'),(171,'PTC202104116103353',NULL,106,NULL,'Phiếu Thu','2021-04-26 22:33:53','Bán Hàng',47500,'Thu Hóa Đơn HD202104116103343'),(172,'PTC202104117014330',11,NULL,NULL,'Phiếu Chi','2021-04-27 13:43:30','Nhập Hàng',30000,'Chi Phiếu Nhập PN202104117014312');
/*!40000 ALTER TABLE `thuchi` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trahang`
--

DROP TABLE IF EXISTS `trahang`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `trahang` (
  `idtrahang` int NOT NULL AUTO_INCREMENT,
  `idhoadon` int NOT NULL,
  `idkhachhang` int NOT NULL,
  `idnguoidung` int NOT NULL,
  `sotrahang` varchar(20) NOT NULL,
  `trangthai` int DEFAULT NULL,
  `hoantien` int DEFAULT NULL,
  `tongtien` decimal(15,0) NOT NULL,
  `ngaynhan` datetime DEFAULT NULL,
  `lydotra` varchar(100) NOT NULL,
  `hinhthucthanhtoan` varchar(100) NOT NULL,
  PRIMARY KEY (`idtrahang`),
  KEY `FK-TraHang-Khachhang` (`idkhachhang`),
  KEY `FK-Trahang-Hoadon` (`idhoadon`),
  KEY `FK-Trahang-Nguoidung` (`idnguoidung`)
) ENGINE=InnoDB AUTO_INCREMENT=79 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trahang`
--

LOCK TABLES `trahang` WRITE;
/*!40000 ALTER TABLE `trahang` DISABLE KEYS */;
INSERT INTO `trahang` VALUES (78,548,106,2,'PT20210498094035',1,1,50000,'2021-04-08 00:00:00','','Tiền Mặt');
/*!40000 ALTER TABLE `trahang` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-05-03 12:00:47
