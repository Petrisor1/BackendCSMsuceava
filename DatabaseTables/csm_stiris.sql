-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: csm
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `stiris`
--

DROP TABLE IF EXISTS `stiris`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stiris` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titlu` varchar(255) DEFAULT NULL,
  `descriere` varchar(255) DEFAULT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stiris`
--

LOCK TABLES `stiris` WRITE;
/*!40000 ALTER TABLE `stiris` DISABLE KEYS */;
INSERT INTO `stiris` VALUES (2,'Incendiu pe teren','Un fan infocat putem zice a intrerupt meciu l de aseara impotriva frantei cu o grenada','2023-01-17 14:24:26','2023-01-18 18:00:16'),(3,'ElMagnifico, jucatorul serii','In aceasta seara atacantul el magnifico a reusit cea mai buna lovitura a carierei sale ','2023-01-17 14:25:38','2023-01-17 14:25:38'),(4,'ElMagnifico, jucatorul serii','In aceasta seara atacantul el magnifico a reusit cea mai buna lovitura a carierei sale ','2023-01-17 15:02:44','2023-01-17 15:02:44'),(5,'infrangere dureroasa','laponia a pierdut meciul din cauza renului Rudolph care a dat autogol','2023-01-18 17:57:08','2023-01-18 17:57:08');
/*!40000 ALTER TABLE `stiris` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-28 12:56:34
