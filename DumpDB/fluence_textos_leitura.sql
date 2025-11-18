-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: fluence
-- ------------------------------------------------------
-- Server version	8.0.42

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
-- Table structure for table `textos_leitura`
--

DROP TABLE IF EXISTS `textos_leitura`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `textos_leitura` (
  `id` int NOT NULL AUTO_INCREMENT,
  `conteudo` text NOT NULL,
  `criado_em` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `nivel` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=151 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `textos_leitura`
--

LOCK TABLES `textos_leitura` WRITE;
/*!40000 ALTER TABLE `textos_leitura` DISABLE KEYS */;
INSERT INTO `textos_leitura` VALUES (1,'O gato dorme no sofá','2025-09-28 22:57:06',1),(2,'Ana comeu manga madura','2025-09-28 22:57:06',1),(3,'O sol brilha forte hoje','2025-09-28 22:57:06',1),(4,'A menina pinta com giz','2025-09-28 22:57:06',1),(5,'Pedro gosta de suco gelado','2025-09-28 22:57:06',1),(6,'O carro corre na pista','2025-09-28 22:57:06',1),(7,'Bia abraça o urso fofo','2025-09-28 22:57:06',1),(8,'A janela está aberta','2025-09-28 22:57:06',1),(9,'O peixe nada no rio','2025-09-28 22:57:06',1),(10,'João pula a corda azul','2025-09-28 22:57:06',1),(11,'Luiza tem uma bola rosa','2025-09-28 22:57:06',1),(12,'O sapo canta na lagoa','2025-09-28 22:57:06',1),(13,'O menino chuta a bola','2025-09-28 22:57:06',1),(14,'A luz acende sozinha','2025-09-28 22:57:06',1),(15,'Clara lê o livro novo','2025-09-28 22:57:06',1),(16,'O vento sopra devagar','2025-09-28 22:57:06',1),(17,'Juca gosta de jujuba doce','2025-09-28 22:57:06',1),(18,'A flor tem cheiro bom','2025-09-28 22:57:06',1),(19,'Ele gosta de limão azedo','2025-09-28 22:57:06',1),(20,'A borboleta voa alto','2025-09-28 22:57:06',1),(21,'Nina penteia o cabelo','2025-09-28 22:57:06',1),(22,'O pão caiu no chão','2025-09-28 22:57:06',1),(23,'Rafa faz castelo de areia','2025-09-28 22:57:06',1),(24,'O lápis quebrou na ponta','2025-09-28 22:57:06',1),(25,'A casa é feita de madeira','2025-09-28 22:57:06',1),(26,'O leite ferveu na panela','2025-09-28 22:57:06',1),(27,'A abelha pousa na flor','2025-09-28 22:57:06',1),(28,'Vovô cuida do jardim','2025-09-28 22:57:06',1),(29,'A vaca dorme no pasto','2025-09-28 22:57:06',1),(30,'A bola rola no chão','2025-09-28 22:57:06',1),(31,'Lara lambe limão lento','2025-09-28 22:57:06',2),(32,'Tiago toca tambor toda tarde','2025-09-28 22:57:06',2),(33,'Fábio fez festa fantástica','2025-09-28 22:57:06',2),(34,'Guto gosta de goiaba grande','2025-09-28 22:57:06',2),(35,'Duda dança dentro do dojo','2025-09-28 22:57:06',2),(36,'Rute rasga revista rosa','2025-09-28 22:57:06',2),(37,'Léo lê livro leve','2025-09-28 22:57:06',2),(38,'Nara nada no navio','2025-09-28 22:57:06',2),(39,'Beto bebe batida de banana','2025-09-28 22:57:06',2),(40,'Susi sopra sabão sem som','2025-09-28 22:57:06',2),(41,'Mimi mastiga melancia madura','2025-09-28 22:57:06',2),(42,'Pipo pula pneu preto','2025-09-28 22:57:06',2),(43,'Vivi viu vinte vacas','2025-09-28 22:57:06',2),(44,'Lila leva laranja lisa','2025-09-28 22:57:06',2),(45,'Dani desenha dados dourados','2025-09-28 22:57:06',2),(46,'Caco cola copo com cola','2025-09-28 22:57:06',2),(47,'Tita tece tapete turquesa','2025-09-28 22:57:06',2),(48,'Nino nunca nega nada','2025-09-28 22:57:06',2),(49,'Gabi grita gato gordo','2025-09-28 22:57:06',2),(50,'Rony roda roda-rô','2025-09-28 22:57:06',2),(51,'O rato corre no mato','2025-09-28 22:57:06',3),(52,'A lua brilha na rua','2025-09-28 22:57:06',3),(53,'O sino toca fino','2025-09-28 22:57:06',3),(54,'A bola rola na sola','2025-09-28 22:57:06',3),(55,'A flor tem cor e sabor','2025-09-28 22:57:06',3),(56,'A vela amarela balança','2025-09-28 22:57:06',3),(57,'O gelo derrete no cabelo','2025-09-28 22:57:06',3),(58,'O coco caiu no toco','2025-09-28 22:57:06',3),(59,'O menino tem destino','2025-09-28 22:57:06',3),(60,'A telha velha molha','2025-09-28 22:57:06',3),(61,'O céu está fiel','2025-09-28 22:57:06',3),(62,'A lousa é gostosa','2025-09-28 22:57:06',3),(63,'A bota é da nota','2025-09-28 22:57:06',3),(64,'A perna tem lanterna','2025-09-28 22:57:06',3),(65,'A pia fica vazia','2025-09-28 22:57:06',3),(66,'A faca corta a maca','2025-09-28 22:57:06',3),(67,'A tampa fecha a lâmpada','2025-09-28 22:57:06',3),(68,'A mala estava na sala','2025-09-28 22:57:06',3),(69,'A fita grita na pista','2025-09-28 22:57:06',3),(70,'A dama ama a cama','2025-09-28 22:57:06',3),(71,'A mala da Lala caiu','2025-09-28 22:57:06',4),(72,'A Nina viu a Lina','2025-09-28 22:57:06',4),(73,'Léo levou o véu','2025-09-28 22:57:06',4),(74,'Fábio tirou o rabo do cabo','2025-09-28 22:57:06',4),(75,'Hugo pegou o tubo sujo','2025-09-28 22:57:06',4),(76,'A vó viu a voz do vô','2025-09-28 22:57:06',4),(77,'A bola pulou no colo','2025-09-28 22:57:06',4),(78,'O pato bateu no prato','2025-09-28 22:57:06',4),(79,'A fila virou vila','2025-09-28 22:57:06',4),(80,'A manga caiu na mão','2025-09-28 22:57:06',4),(81,'A mesa pesa muito','2025-09-28 22:57:06',4),(82,'A capa tampa o mapa','2025-09-28 22:57:06',4),(83,'O selo está no solo','2025-09-28 22:57:06',4),(84,'O gato viu o mato','2025-09-28 22:57:06',4),(85,'A flor está na cor','2025-09-28 22:57:06',4),(86,'A luva estava suja','2025-09-28 22:57:06',4),(87,'A vara voou no vento','2025-09-28 22:57:06',4),(88,'O nó do fio caiu','2025-09-28 22:57:06',4),(89,'A fita ficou fina','2025-09-28 22:57:06',4),(90,'O povo pegou o ovo','2025-09-28 22:57:06',4),(91,'A planta cresce rápido','2025-09-28 22:57:06',5),(92,'O trem passou cedo','2025-09-28 22:57:06',5),(93,'A bruxa voa sozinha','2025-09-28 22:57:06',5),(94,'O prato quebrou fácil','2025-09-28 22:57:06',5),(95,'A blusa ficou suja','2025-09-28 22:57:06',5),(96,'A criança pulou feliz','2025-09-28 22:57:06',5),(97,'O dragão cospe fogo','2025-09-28 22:57:06',5),(98,'A praça está cheia','2025-09-28 22:57:06',5),(99,'O grito assustou a tia','2025-09-28 22:57:06',5),(100,'O troco caiu no chão','2025-09-28 22:57:06',5),(101,'A fruta estava fresca','2025-09-28 22:57:06',5),(102,'O prato ficou pronto','2025-09-28 22:57:06',5),(103,'O grilo canta de noite','2025-09-28 22:57:06',5),(104,'A praia estava limpa','2025-09-28 22:57:06',5),(105,'O trem tem trilho','2025-09-28 22:57:06',5),(106,'A chuva caiu forte','2025-09-28 22:57:06',5),(107,'O cheiro é doce','2025-09-28 22:57:06',5),(108,'A folha rasgou sozinha','2025-09-28 22:57:06',5),(109,'A chave caiu da mesa','2025-09-28 22:57:06',5),(110,'A palavra tem letra dupla','2025-09-28 22:57:06',5),(111,'A mochila está pesada','2025-09-28 22:57:06',6),(112,'A boneca caiu no degrau','2025-09-28 22:57:06',6),(113,'A escada está quebrada','2025-09-28 22:57:06',6),(114,'A antena está torta','2025-09-28 22:57:06',6),(115,'A caneta caiu do bolso','2025-09-28 22:57:06',6),(116,'A borracha sumiu da mesa','2025-09-28 22:57:06',6),(117,'O macaco subiu no galho','2025-09-28 22:57:06',6),(118,'A janela ficou trancada','2025-09-28 22:57:06',6),(119,'A melancia estava gelada','2025-09-28 22:57:06',6),(120,'O relógio parou de girar','2025-09-28 22:57:06',6),(121,'O sapato está molhado','2025-09-28 22:57:06',6),(122,'A cadeira virou ao lado','2025-09-28 22:57:06',6),(123,'A lanterna acendeu sozinha','2025-09-28 22:57:06',6),(124,'O tijolo caiu na calçada','2025-09-28 22:57:06',6),(125,'A girafa tem pescoço longo','2025-09-28 22:57:06',6),(126,'A cesta estava cheia de fruta','2025-09-28 22:57:06',6),(127,'O palhaço sorriu na praça','2025-09-28 22:57:06',6),(128,'O botão caiu da camisa','2025-09-28 22:57:06',6),(129,'A toalha estava dobrada','2025-09-28 22:57:06',6),(130,'O tapete sujou de lama','2025-09-28 22:57:06',6),(131,'O menino vestiu a camisa azul','2025-09-28 22:57:06',7),(132,'A menina colou o desenho no caderno','2025-09-28 22:57:06',7),(133,'O gato subiu na janela','2025-09-28 22:57:06',7),(134,'O cachorro correu atrás da bola','2025-09-28 22:57:06',7),(135,'A luz apagou na sala','2025-09-28 22:57:06',7),(136,'O leite caiu no fogão','2025-09-28 22:57:06',7),(137,'A porta bateu sozinha','2025-09-28 22:57:06',7),(138,'A toalha secou no varal','2025-09-28 22:57:06',7),(139,'O copo caiu no chão','2025-09-28 22:57:06',7),(140,'A caneta estourou no bolso','2025-09-28 22:57:06',7),(141,'A água ferveu na panela','2025-09-28 22:57:06',7),(142,'O relógio marcou meia-noite','2025-09-28 22:57:06',7),(143,'A chave abriu a gaveta','2025-09-28 22:57:06',7),(144,'O balão subiu no céu','2025-09-28 22:57:06',7),(145,'A lâmpada quebrou no quarto','2025-09-28 22:57:06',7),(146,'A mochila caiu da cadeira','2025-09-28 22:57:06',7),(147,'O ventilador quebrou ontem','2025-09-28 22:57:06',7),(148,'O espelho rachou no canto','2025-09-28 22:57:06',7),(149,'A tesoura cortou o papel','2025-09-28 22:57:06',7),(150,'A criança sorriu para a flor','2025-09-28 22:57:06',7);
/*!40000 ALTER TABLE `textos_leitura` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-11-17 23:39:24
